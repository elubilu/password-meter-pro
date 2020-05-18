// specify weights
const weight = {
    SMALL_LETTER : 26,
    CAPITAL_LETTER : 26,
    NUMERIC: 10,
    SPECIAL_CHAR: 33
};

// specify default messages
var messages = {
    VERY_WEAK: "Very Weak",
    WEAK: "Weak",
    GOOD: "Good",
    STRONG: "Strong",
    VERY_STRONG: "Very Strong"
};

// sepecify default configs
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
        return weight; // get weight 
    },
    config: function(config = {}) {
        // override config if you need
        configs = Object.assign(configs, config);
        return this;
    },
    get configs() {
        return configs; // get configs
    },
    message: function(message = {}) {
        // override messages if you need
        messages = Object.assign(messages, message);
        return this;
    },
    get messages() {
        return messages; // get messages
    },
    password_strength: function (param, cb, err) {
        let len = param.length; // Given string length
        let weight = 0;
      
        try {
            // collect weight of password
            weight = this._get_weight(param);
        } catch (error) {
            // throw error
            err(error);
            return
        }
        
        // collect strength of password
        let strength = Math.log2(Math.pow(weight, len));

        if (strength < 28) {
            // "very weak" callback with message and value
            cb(this.messages.VERY_WEAK, strength);
        }
        else if(strength < 36) {
            // "weak" callback with message and value
            cb(this.messages.WEAK, strength);
        }
        else if(strength < 60) {
            // "good" callback with message and value
            cb(this.messages.GOOD, strength);
        }
        else if(strength < 128) {
            // "strong" callback with message and value
            cb(this.messages.STRONG, strength);
        }
        else {
            // "very strong" callback with message and value
            cb(this.messages.VERY_STRONG, strength);
        }
        
    },
    _check_size(size_obj, size) {
        // check validation size
        return size_obj.min <= size && size_obj.max >= size; 
    },
    _get_weight: function (param) {
        let weight = 0;
        let capital_letter = param.match(/[A-Z]/g); // capital letter 
        let small_letter = param.match(/[a-z]/g); // small letter
        let numeric = param.match(/[0-9]/g); // numeric
        let speicial_char = param.match(/[^a-zA-Z0-9]/g); // special char
        let valid_size = false; // valid size

        // checking if capital letter here & validation size proper or not
        if (capital_letter && (valid_size = this._check_size(this.configs.CAPITAL_LETTER, capital_letter.length))) {
            weight += this.weight.CAPITAL_LETTER;
        } else {
            // throw message
            if (!valid_size) throw `Capital letter must be min: ${this.configs.CAPITAL_LETTER.min} and max: ${this.configs.CAPITAL_LETTER.max}`;
        }
        
        // checking if small letter here & validation size proper or not
        if (small_letter && (valid_size = this._check_size(this.configs.SMALL_LETTER, small_letter.length))) {
            weight += this.weight.SMALL_LETTER;
        } else {
            // throw message
            if (! valid_size) throw `Small letter must be min: ${this.configs.SMALL_LETTER.min} and max: ${this.configs.SMALL_LETTER.max}`;
        }
        
        // checking if numeric letter here & validation size proper or not
        if (numeric && (valid_size = this._check_size(this.configs.NUMERIC, numeric.length))) {
            weight += this.weight.NUMERIC;
        } else {
            // throw message
            if (! valid_size) throw `Numeric letter must be min: ${this.configs.NUMERIC.min} and max: ${this.configs.NUMERIC.max}`; 
        }

        // checking if special char letter here & validation size proper or not
        if (speicial_char && (valid_size = this._check_size(this.configs.SPECIAL_CHAR, speicial_char.length))) {
            weight += this.weight.SPECIAL_CHAR;
        } else {
            // throw message
            if (! valid_size) throw `Special character must be min: ${this.configs.SPECIAL_CHAR.min} and max: ${this.configs.SPECIAL_CHAR.max}`;
        }
        
        return weight; // returing weight after calculate
    }
};