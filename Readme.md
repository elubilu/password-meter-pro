[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/raselportfollio/password-meter-pro/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/password-meter-pro.svg)](https://badge.fury.io/js/password-meter-pro)
[![Downloads](https://img.shields.io/npm/dm/password-meter-pro.svg)](https://www.npmjs.com/package/password-meter-pro)

# Password Meter Pro

[Password Meter Pro](https://www.npmjs.com/package/password-meter-pro) is inspired by pointing system of Password Entropy, in which the main purpose is to help the end-users to have stronger passwords. (Password entropy is a measurement of how unpredictable a password is.)

## Installation

Use the package manager [npm](https://www.npmjs.com/package/password-meter-pro) to install [npm](https://www.npmjs.com/package/password-meter-pro).

```bash
npm i password-meter-pro

```

## Usage

It's very easy configure on your application. just follow on below: 

```javascript
let app = require("password-meter-pro");

app.password_strength("1111") # return  message = "Very Weak" , strength = 14  , percentage = 11%

app.password_strength("aaaa") # return  message = "Very Weak" , strength = 19 , percentage = 15%

app.password_strength("####") # returns message = "Very Weak" , strength = 21 , percentage = 17%

app.password_strength("banglad") # returns message = "Weak" , strength = 33  , percentage = 26%

app.password_strength("bangla1") # returns message = "Good" , strength = 37  , percentage = 29%

app.password_strength("bangladesh") # returns message = "Good" , strength = 48 , percentage = 38%

app.password_strength("bangla1desh") # returns message = "Good" , strength = 57 , percentage = 45%

app.password_strength("Bangla1desh") # returns message = "Strong", strength = 66, percentage = 52%

app.password_strength("Bangladesh#") # returns message = "Strong", strength = 71, percentage = 56%

app.password_strength("Bangla1desh#") # returns message = "Strong", strength = 79, percentage = 62%

app.password_strength("Hello71*Bangla1desh#") # returns message = "Very Strong" , strength = 132  , percentage = 100%

```
There are some default messages, if you need to configure your own message like "Very week" instead of "You should use strong password", you can do easily here:

```javascript
// Example: default messages of package, 
{
    VERY_WEAK: "Very Weak",
    WEAK: "Weak",
    GOOD: "Good",
    STRONG: "Strong",
    VERY_STRONG: "Very Strong"
}
```
You can override these message by using "message" method:

```javascript
app.message({
    VERY_WEAK: "You should use strong password",
});

app.password_strength("####") # returns 'You should use strong password'
//or
app.message({
    VERY_WEAK: "You should use strong password",
}).password_strength("####") # returns 'You should use strong password'

```
There are some default configs for checking validating items on password. if you want to customer that too, you can use "config"  method. 

```javascript
// Default configs
{
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
}
```
You can override these configs:

```javascript
app.config({
    // always checking length of given item of each type
    NUMERIC: {
        min: 2,
        max: 6
    },
});

app.password_strength("####") # returns 'Numeric letter must be min: 2 and max: 6'
//or
app.config({
    NUMERIC: {
        min: 2,
        max: 6
    }
}).password_strength("####") # returns 'Numeric letter must be min: 2 and max: 6'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License
[MIT](https://github.com/elubilu/password-meter-pro/blob/master/LICENSE)
