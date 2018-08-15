import * as VscodeTestCover from 'vscodetestcover';

let testRunner: any = VscodeTestCover;

// You can directly control Mocha options by uncommenting the following lines
// See https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically#set-options for more info
testRunner.configure(
    // Mocha Options
    {
        ui: 'bdd', // the TDD UI is being used in extension.test.ts (suite, test, etc.)
        reporter: 'pm-mocha-jenkins-reporter',
        reporterOptions: {
            junit_report_name: 'Extension Tests',
            junit_report_path: __dirname + '/../../test-reports/extension_tests.xml',   // Assumes src/test is your current directory, change as needed
            junit_report_stack: 1
        },
        useColors: true // colored output from test results
    },
    // Coverage configuration options
    {
        coverConfig: '../coverconfig.json'
    });

module.exports = testRunner;
