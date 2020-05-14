[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/raselportfollio/password-meter-pro/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/password-meter-pro.svg)](https://badge.fury.io/js/password-meter-pro)
[![Downloads](https://img.shields.io/npm/dm/password-meter-pro.svg)](https://www.npmjs.com/package/password-meter-pro)

# Password Meter Pro

[Password Meter Pro](https://www.npmjs.com/package/password-meter-pro) is inspired by pointing system of Password Entropy, in which the main purpose is to help the end-users to have stronger passwords. (Password entropy is a measurement of how unpredictable a password is.)

## Installation

Use the package manager [pip](https://www.npmjs.com/package/password-meter-pro) to install "Password Meter Pro".

```bash
npm i password-meter-pro

```

## Usage

```javascript
let app = require("password-meter-pro");


app.passwordStrength("####"); # returns 'Very Weak'
app.passwordStrength("aaaa"); # returns 'Very Weak'
app.passwordStrength("1111"); # returns 'Very Weak'
app.passwordStrength("banglad"); # returns 'Weak'
app.passwordStrength("bangla1"); # returns 'Good'
app.passwordStrength("bangladesh"); # returns 'Good'
app.passwordStrength("bangla1desh"); # returns 'Good'
app.passwordStrength("Bangladesh"); # returns 'Good'
app.passwordStrength("Bangla1desh"); # returns 'Strong'
app.passwordStrength("Bangladesh#"); # returns 'Strong'
app.passwordStrength("Bangla1desh#"); # returns 'Strong'
app.passwordStrength("Hello71*Bangla1desh#"); # returns 'Very Strong'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License
[MIT](https://github.com/raselportfollio/password-meter-pro/blob/master/LICENSE)
