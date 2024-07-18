import { errorMessages } from "../../components/Register"

describe('Register Page', () => {
  beforeEach(()=>{
    cy.visit('http://192.168.1.39:5174/')
  })
  describe('Error Messages', () => {
    it('Name input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "ad-input"]').type("em")
      //Assert
      cy.contains(errorMessages.ad);
    })
    it('Surame input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "soyad-input"]').type("şa")
      //Assert
      cy.contains(errorMessages.soyad);
    })
    it('Email input throws error for emre@wit', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "email-input"]').type("emre@wit")
      //Assert
      cy.contains(errorMessages.email);
    })
    it('Password input throws error for 1234', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "password-input"]').type("1234")
      //Assert
      cy.contains(errorMessages.password);
    })
    it('Button is disabled for unvalidated inputs', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "password-input"]').type("1234")
      //Assert
      cy.get('[data-cy = "submit-button"]').should("be.disabled")
    })
  })
  describe('Form input validated', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "ad-input"]').type("Omer")
      cy.get('[data-cy = "soyad-input"]').type("Yilmaz")
      cy.get('[data-cy = "email-input"]').type("omerfaruk21@gmail.com")
      cy.get('[data-cy = "password-input"]').type("As?1s2dasd")
      //Assert
      cy.get('[data-cy = "submit-button"]').should("not.be.disabled")
    })
  })
  describe('submits form on validated inputs', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      //cy.visit('http://192.168.1.39:5174/')
      //Act
      cy.get('[data-cy = "ad-input"]').type("Omer")
      cy.get('[data-cy = "soyad-input"]').type("Yilmaz")
      cy.get('[data-cy = "email-input"]').type("omerfaruk21@gmail.com")
      cy.get('[data-cy = "password-input"]').type("As?1s2dasd")      
      cy.get('[data-cy = "submit-button"]').click("");
      //Assert
      cy.get('[data-cy = "response-message"]').should("be.visible");
    })
  })
})