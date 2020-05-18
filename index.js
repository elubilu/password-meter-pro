const weight = {
    SMALL_LETTER : 26,
    CAPITAL_LETTER : 26,
    NUMERIC: 10,
    SPECIAL_CHAR: 33
};

var messages = {
    VERY_WEAK: "Very Weak",
    WEAK: "Weak",
    GOOD: "Good",
    STRONG: "Strong",
    VERY_STRONG: "Very Strong"
};

var configs = {
    SMALL_LETTER : {
        min: 0,
        max: 26
    },
    CAPITAL_LETTER : {
        min: 0,
        max: 26
    },
    NUMERIC: {
        min: 0,
        max: 255
    },
    SPECIAL_CHAR: {
        min: 0,
        max: 33
    } 
};

module.exports = {
    get weight() {
        return weight;
    },
    config: function(config = {}) {
        configs = Object.assign(configs, config);
        return this;
    },
    get configs() {
        return configs;
    },
    message: function(message = {}) {
        messages = Object.assign(messages, message);
        return this;
    },
    get messages() {
        return messages;
    },
    password_strength: function (param, err, cb) {
        let len = param.length; // Given string length
        let weight = 0;
      
        try {
          weight = this._get_weight(param);
        } catch (error) {
          err(error);
          return
        }
      

        let strength = Math.log2(Math.pow(weight, len));

        if (strength < 28) {
            cb(this.messages.VERY_WEAK, strength);
        }
        else if(strength < 36) {
            cb(this.messages.WEAK, strength);
        }
        else if(strength < 60) {
            cb(this.messages.GOOD, strength);
        }
        else if(strength < 128) {
            cb(this.messages.STRONG, strength);
        }
        else {
            cb(this.messages.VERY_STRONG, strength);
        }
        
    },
    _check_size(size_obj, size) {
        return size_obj.min <= size && size_obj.max >= size; 
    },
    _get_weight: function (param) {
        let weight = 0;
        let capital_letter = param.match(/[A-Z]/g);
        let small_letter = param.match(/[a-z]/g); 
        let numeric = param.match(/[0-9]/g); 
        let speicial_char = param.match(/[^a-zA-Z0-9]/g);
        let valid_size = false;

        if (capital_letter && (valid_size = this._check_size(this.configs.CAPITAL_LETTER, capital_letter.length))) {
            weight += this.weight.CAPITAL_LETTER;
        } else {
            if (!valid_size) throw `Capital letter must be min: ${this.configs.CAPITAL_LETTER.min} and max: ${this.configs.CAPITAL_LETTER.max}`;
        }

        if (small_letter && (valid_size = this._check_size(this.configs.SMALL_LETTER, small_letter.length))) {
            weight += this.weight.SMALL_LETTER;
        } else {
            if (! valid_size) throw `Small letter must be min: ${this.configs.SMALL_LETTER.min} and max: ${this.configs.SMALL_LETTER.max}`;
 
        }

        if (numeric && (valid_size = this._check_size(this.configs.NUMERIC, numeric.length))) {
            weight += this.weight.NUMERIC;
        } else {
            if (! valid_size) throw `Numeric letter must be min: ${this.configs.NUMERIC.min} and max: ${this.configs.NUMERIC.max}`;
             
        }

        if (speicial_char && (valid_size = this._check_size(this.configs.SPECIAL_CHAR, speicial_char.length))) {
            weight += this.weight.SPECIAL_CHAR;
        } else {
            if (! valid_size) throw `Special character must be min: ${this.configs.SPECIAL_CHAR.min} and max: ${this.configs.SPECIAL_CHAR.max}`;
        }

        return weight;
    }
};