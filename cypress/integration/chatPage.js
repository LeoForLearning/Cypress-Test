// Below line will give auto suggestion
/// <reference types="cypress" />

const BaseURL = Cypress.env('url')
const cookies = "#onetrust-accept-btn-handler"
const firtNews = "[class='card__title font-bold mb-1']"
const emailAddressTextBox = "[class='subscribe__input']"
const error = "[class='subscribe__error']"
const getStarted = "[class='subscribe__input-group']"
const textBox = "[class='editable user-input__text']"
const tellMeOfGameofThrones="[class='simple-text']"
const textValidationOfAnswer="[class='message-text']"
const answers="[class='message-buttons']"
const typeaBoxInChannel="[role='textbox']"
const sendButton="[class='pill user-input__pill pill--primary']"
const sAnswers="[class='carousel-buttons']"


describe('Validating Chat box with validation of Email and Chat Validation', function () {

    beforeEach(function () {
        cy.fixture('testData').as('loginCred')
    })

    it('Login to YouGov Chat', function () {
        cy.visit(BaseURL);
        cy.get(cookies).click();
    })

    it('As a user, I want to provide my Email address when taking chat for the first time'+
    'so that I can later receive alerts  for new available chats', function () {
        cy.get(firtNews).first().click({ force: true })
        cy.wait(10000)
        cy.enter('#ic-chat-widget-frame').then(getBody => {
            getBody("body").then($body => {
                if ($body.find(emailAddressTextBox).length > 0) {
                    //Enter invalid Email ID 
                    getBody().find(emailAddressTextBox).should('be.visible').type(this.loginCred.invalidEmail[0]).then(() =>
                        getBody().find(error).invoke("text").should('eq', this.loginCred.text)
                    )
                    getBody().find(emailAddressTextBox).clear().type(this.loginCred.invalidEmail[1]).then(() =>
                        getBody().find(error).invoke("text").should('eq', this.loginCred.text)
                    )
                    //Valid Email ID
                    getBody().find(emailAddressTextBox).clear().type(this.loginCred.validEmail)
                    getBody().find(getStarted).next().click()
                }
                else {
                    cy.log('You have already registered!!!! Please go ahead and chat')
                }
            })
        })

    })

    it.only('As a user, I want to read and navigate through the chat'+ 
    'So that I can get the latest news about the game of thrones', function () {
        
        cy.visit(BaseURL + '/channels/test-channel-test/11819');
        cy.get(cookies).click();
        cy.wait(10000)
        cy.enter('#ic-chat-widget-frame').then(getBody => {
            getBody("body").then($body => {
                if ($body.find(emailAddressTextBox).length > 0) {
                    //Enter invalid Email ID 
                    getBody().find(emailAddressTextBox).should('be.visible').type(this.loginCred.invalidEmail[0]).then(() =>
                        getBody().find(error).invoke("text").should('eq', this.loginCred.text)
                    )
                    getBody().find(emailAddressTextBox).clear().type(this.loginCred.invalidEmail[1]).then(() =>
                        getBody().find(error).invoke("text").should('eq', this.loginCred.text)
                    )
                    //Valid Email ID
                    getBody().find(emailAddressTextBox).clear().type(this.loginCred.validEmail)
                    getBody().find(getStarted).next().click()
                    getBody().find(tellMeOfGameofThrones).click({force:true})
                    cy.wait(3000)
                    getBody().find(answers).contains(this.loginCred.answers).should('be.visible').click({force:true})
                    getBody().find(typeaBoxInChannel).should('be.visible').type(this.loginCred.msgOnBox)
                    getBody().find(sendButton).should('be.visible').click()
                    getBody().find(sAnswers).contains(this.loginCred.sAnswers).should('be.visible').click()

                }
                else {
                    cy.log('You have already registered!!!! Please go ahead and chat')                   
                    getBody().find(tellMeOfGameofThrones).click({force:true})
                    cy.wait(3000)
                    getBody().find(answers).contains(this.loginCred.answers).should('be.visible').click({force:true})
                    getBody().find(typeaBoxInChannel).should('be.visible').type(this.loginCred.msgOnBox)
                    getBody().find(sendButton).should('be.visible').click()
                    getBody().find(sAnswers).contains(this.loginCred.sAnswers).should('be.visible').click()


                }
            })
        })
    })
})