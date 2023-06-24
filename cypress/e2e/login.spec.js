require('../support/commands')

describe('Attempt to log in', () => {
    beforeEach(()=>{
        cy.login("theresiatoko@gmail.com","test123")
    })

    it('Valid Login', () => {
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

    it('Invalid Login',()=>{
        cy.visit('/', {timeout : 5000})

        //assert url
        cy.url().should('include','/login')

        //mencari element header hai, kasirAja
        cy.contains('hai, kasirAja')

        //input email
        cy.get('#email')
          .type("theresiatoko@gmail.com") 
        //klik button login
        cy.get("button[type='submit']").click()

        //mencari element message error
        cy.contains('"password" is not allowed to be empty')
    })
})