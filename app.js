const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Whats your name?'
  }
])
.then(answers => console.log(answers));

//const fs = require('fs');
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//console.log(profileDataArgs);

//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});
