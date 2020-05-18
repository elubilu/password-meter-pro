[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/raselportfollio/password-meter-pro/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/password-meter-pro.svg)](https://badge.fury.io/js/password-meter-pro)
[![Downloads](https://img.shields.io/npm/dm/password-meter-pro.svg)](https://www.npmjs.com/package/password-meter-pro)

# Password Meter Pro

[Password Meter Pro](https://www.npmjs.com/package/password-meter-pro) is inspired by pointing system of Password Entropy, in which the main purpose is to help the end-users to have stronger passwords. (Password entropy is a measurement of how unpredictable a password is.)

## Installation

Use the package manager [npm](https://www.npmjs.com/package/password-meter-pro) to install "Password Meter Pro".

```bash
npm i password-meter-pro

```

## Usage

It's very easy configure on your application. just follow on below: 

```javascript
let app = require("password-meter-pro");


app.password_strength("####", function (message, strength) {
    console.log(message) # returns 'Very Weak'
});
app.password_strength("aaaa", function (message, strength) {
    console.log(message) # returns 'Very Weak'
});
app.password_strength("1111", function (message, strength) {
    console.log(message) # returns 'Very Weak'
});
app.password_strength("banglad", function (message, strength) {
    console.log(message) # returns 'Weak'
});
app.password_strength("bangla1", function (message, strength) {
    console.log(message) # returns 'Good'
});
app.password_strength("bangladesh", function (message, strength) {
    console.log(message) # returns 'Good'
});
app.password_strength("bangla1desh", function (message, strength) {
    console.log(message) # returns 'Good'
});
app.password_strength("Bangla1desh", function (message, strength) {
    console.log(message) # returns 'Strong'
});
app.password_strength("Bangladesh#", function (message, strength) {
    console.log(message) # returns 'Strong'
});
app.password_strength("Bangla1desh#", function (message, strength) {
    console.log(message) # returns 'Strong'
});
app.password_strength("Hello71*Bangla1desh#", function (message, strength) {
    console.log(message) # returns 'Very Strong'
});
```
There is some default messages, if you need to configure your own message like "Very week" instead of "You should use strong password", you can do easily here:

```javascript
// Example: default messages of package, don't need to re-assign variable again
{
    VERY_WEAK: "Very Weak",
    WEAK: "Weak",
    GOOD: "Good",
    STRONG: "Strong",
    VERY_STRONG: "Very Strong"
};

app.messages({
    VERY_WEAK: "You should use strong password",
});

app.password_strength("####", function (message, strength) {
    console.log(message) # returns 'You should use strong password'
});
//or
app.messages({
    VERY_WEAK: "You should use strong password",
}).password_strength("####", function(message, strength) {
    console.log(message) # returns 'You should use strong password'
});

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License
[MIT](https://github.com/raselportfollio/password-meter-pro/blob/master/LICENSE)
