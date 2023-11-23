## UI Testing
Create an UI testing scenario from this URL https://kasirdemo.belajarqa.com/login 

## UI Automation Testing Using Cypress
- Making test scenarios on UI testing
- Search for the locator of a web element
- Using cypress to create UI automation testing


#### Library for Automation Test:
1. Cypress
2. Web Element Locator

#### Installation and Configuration
1. Install node.js
2. Check npm version

#### Installing Packages
1. `npm init`
2. `npx wdio wdio.conf.js`
3. `npm init wdio`

#### WDIO Configuration Wizard:
- Local machine
- Using Mocha
- Using Babel for the compiler
- Using spec reporter
- Using "Wait for" to add a plugin
- Using Chrome driver to add a service
- Base URL: http://localhost

#### To run test cases, use the following command:
`npm run wdio`

To run all files/some files, you can set the configuration file `wdio.conf.js`

#### Folder structure:
1. e2e -> contains spec folder. In the spec folder, there are several test scenarios that use the CSS locator web element (Login, Add category, Add product)
2. fixtures -> contains example.json
3. support -> contains command.js and e2e.js files
4. videos -> contains videos from the results of running test cases
