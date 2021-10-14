// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {    
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {    
        type: 'input',
        name: 'description',
        message: 'Description:'
    },
    {    
        type: 'input',
        name: 'installation',
        message: 'How to install?'
    },
    {    
        type: 'input',
        name: 'usage',
        message: 'What is it used for?'
    },
    {    
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: [{
            name: 'Apache 2.0', 
            value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        },
        {
            name:'Boost', 
            value:'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        },
        {
            name: 'Creative Commons', 
            value:'[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
        },
        {

            name: 'Eclipse', 
            value:'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        },
        {
            name: 'GNU', 
            value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        },
        {
            name: 'IBM',
            value:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)', 
        },
        {
            name: 'ISC', 
            value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        },
        {
            name: 'MIT', 
            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        },
        {
            name: 'Mozilla', 
            value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        },
        {
            name: 'Open Data Commons', 
            value:'[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
        },
        {
            name: 'Perl', 
            value: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
        },
        {
            name: 'SIL', 
            value:'[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
        },
        {
            name: 'Unilicense', 
            value:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 
        },
        {
            name: 'WTFPL', 
            value:'[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
        },
        {
            name:'Zlib',
            value:'[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
        }]
    },
    {    
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines?'
    },
    {    
        type: 'input',
        name: 'tests',
        message: 'Test instructions?'
    },
    {    
        type: 'input',
        name: 'github',
        message: 'Github Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    }
    
]);
};


// TODO: Create a function to write README file
const writeToFile = ({ title, description, installation, usage, license, contributing, tests, github, email}) =>

`# ${title}
## Description: 
${description}

## Table of Contents:

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation:
${installation}

## Usage:
${usage}

## Contributing:
${contributing}

## Tests:
${tests}

## License:
${license}
Click for more information about this license. 

## Questions?
GitHub: ${github}
Email: ${email}
`


// TODO: Create a function to initialize app
function init() { 
    questions()
    .then((answers) => fs.writeFileSync('README.md', writeToFile(answers)))
    .then(() => console.log('Great success! (Borat voice)'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
