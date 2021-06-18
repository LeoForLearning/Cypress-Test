# YouGov Chat Test Automation

Test script which covers the current interview test scenarios using Cypress.
Note: The Manual test case is present in the attached a excel called Manual case.xlsx in tradition Manual test case format
There is also a sample 1 BDD Manual case written below in the Read Me [Just a another way]

## Prerequisite

- Download Node & NPM (<https://nodejs.org/en/download/>)
- Cypress verison ^7.3.0

## Cypress Installation & Project setup

### Steps

### If Node is not set as environment variable, perform the below [ Windows]
1. Set `NODE_HOME` Environment Variable
   1. Go to Control Panel\System and Security\System
   2. Click Environment Variables > System Variables> New
   3. Set Variable name:  for ex: `Node_HOME`
   4. Set Variable value – Specify the location where exactly node js is installed.

2. Create a folder where the test wants to reside and get the test from source control:
       `git clone <https://github.com/LeoForLearning/Cypress-Test.git>`

4. `cd cypress`

5. Run: `npm install` (Note: This step can be run to update the installed libraries at any time)

6. Once npm installation is complete, do one of the following to run the test:
   - Run command `npm start`. This will run the Smoke test script code in the command line, in headless mode, using a generic “browser”.
   - Run command `npm run test-chrome -- --env url='https://www.yougov.chat'` command to run the Smoke   test  script in a Chrome browser.  
   - Run command `npm run test-firefox -- --env url='https://www.yougov.chat'`  command to run the Smoke test script in a Firefox browser.
   - Run command `npm run test-edge -- --env url='https://www.yougov.chat'`  command to run the Smoke test script in a Edge browser.
  
7. On successful execution, the output should resemble:

### Example Success Output

```Output
SmokeTest
     √ Login to YouGov Chat (5725ms)
    √ As a user, I want to provide my Email address when taking chat for the first timeso that I can later receive alerts  for new available chats (10788ms)
    √ As a user, I want to read and navigate through the chatSo that I can get the latest news about the game of thrones (36637ms)


  3 passing (58s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     57 seconds                                                                       │
  │ Spec Ran:     YouGuvInterview.js                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  YouGuvInterview.js                       00:57        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:57        3        3        -        -        -  

```

### The Real Manual test case is written in the Excel attached here. File Name: Manual case.xlsx
### Manual Test case in BDD Format - Just 1 test case for sample:

Steps:
Scenario Outline: YouGov Chat- Validation of registration with invalid Email ID

Given I Launch https://www.yougov.chat/ site.
When  I am on Home page, I select the Latest News
And   I validate User is navigated Chat Box with the same name of the header 
And   I enter "<EmailID>" in the Email ID text box inside frame
Then  I validate the error message "<Format>" present below
And   I validate the Button"<GetStarted>" is Enabled


Examples:
| EmailID                   |    Format                                   | GetStarted | 
| Leo.arokiaraj@gmail       | Please try with a valid email address.      |  Disabled  | 
| Leo.arokiarajgmai         | Please try with a valid email address.      |  Disabled  | 
| Leo@arokiaraj@gmail.com   | Please try with a valid email address.      |  Disabled  | 
| 123@gmail.com             | Please try with a valid email address.      |  Disabled  | 
| leoArokiaraj@gmail.com    | Please try with a valid email address.      |  Enabled   |


