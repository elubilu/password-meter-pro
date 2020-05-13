module.exports = {

    passwordStrength: function (pass) {
        let tsml = 0;
        let tcap = 0;
        let tnum = 0;
        let tsp = 0;
      
       for(let i=0; i<pass.length; i++){
            if(pass[i]>='a' && pass[i]<='z'){
                tsml++;
            }
            else if(pass[i]>='A' && pass[i]<='Z'){
                tcap++;
            }
            else if(pass[i]>='0' && pass[i]<='9'){
                tnum++;
            }
            else  {
                tsp++;
            }
        }
        let S = 0;
        if(tsml){
            S += 26;
        }
        if(tcap){
            S += 26;
        }
        if(tnum){
            S+=10;
        }
        if(tsp){
            S+=33;
        }
        let L = pass.length;
        let val = Math.pow(S,L);
        let res = Math.log2(val);
        if(res<28){
            return "Very Weak";
        }
        else if(res<36){
            return "Weak";
        }
        else if(res<60){
            return "Good";
        }
        else if(res<128){
            return "Strong";
        }
        else {
            return "Very Strong"
        }

    }
};