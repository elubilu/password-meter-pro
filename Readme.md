# Password Meter Pro

"Password Meter Pro" is inspired by pointing system of Password Entropy, in which the main purpose is to help the end-users to have stronger passwords. (Password entropy is a measurement of how unpredictable a password is.)

## Installation

Use the package manager [pip](https://www.npmjs.com/package/password-meter-pro) to install "Password Meter Pro".

```bash
npm i password-meter-pro

```

## Usage

```nodejs
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
[MIT](https://choosealicense.com/licenses/mit/)