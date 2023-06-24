const command = require('../support/commands')

beforeEach(()=>{
    cy.visit('/')

        cy.url().should('include','/login')

        //mencari element header hai, kasirAja
        cy.contains('hai, kasirAja')

        //input email
        cy.get('#email')
          .type("theresiatoko@gmail.com") 

        //input password
        cy.get('#password')
          .type("test123")
        
        //klik button login
        cy.get("button[type='submit']").click()

        cy.url().should('include','/dashboard')
        
        // //mencari element kasirAja
        cy.contains('kasirAja')
})

describe('Add Category', () => {
    it('Valid add category', () => {
        cy.visit('/')
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()

        cy.get(".chakra-button.css-1piskbq").click()

        cy.url().should('include','/categories/create')

        cy.get('#nama')
          .type("buah-buahan")
        
        cy.get('#deskripsi')
          .type("buah segar")

        cy.get("button[class='chakra-button css-l5lnz6']").click()
        
        cy.url().should('include','/categories')

        cy.contains("success")
        cy.contains("item ditambahkan")
    }),

    it('Invalid add category', () => {
        cy.visit('/')
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()

        cy.get(".chakra-button.css-1piskbq").click()

        cy.url().should('include','/categories/create')

        cy.get('#deskripsi')
          .type("buah segar")

        cy.get("button[class='chakra-button css-l5lnz6']").click()

        cy.contains('"name" is not allowed to be empty')
    })

        
})