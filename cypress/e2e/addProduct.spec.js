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

describe('Add Product', () => {
    it('Valid add product', () => {
        cy.visit('/')
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()

        cy.get(".chakra-button.css-1piskbq").click()

        cy.url().should('include','/products/create')

        cy.get('#nama')
          .type("buah apel")
        
        cy.get('#deskripsi')
          .type("buah apel Malang")

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > input:nth-child(2)")
          .type(200)
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(2)")
          .type(300)

        cy.get('#stok')
          .type(10)

        cy.get('#kategori').click()

        cy.contains("buah-buahan").click()

        cy.get("button[class='chakra-button css-l5lnz6']").click()

        cy.url().should('include','/product')

        cy.contains("success")
        cy.contains("item ditambahkan")
    }),

    it('Invalid add product', () => {
        cy.visit('/')
        
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()

        cy.get(".chakra-button.css-1piskbq").click()

        cy.url().should('include','/products/create')

        cy.get('#nama')
          .type("buah apel")
        
        cy.get('#deskripsi')
          .type("buah apel Malang")

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > input:nth-child(2)")
          .type(200)

        cy.get('#kategori').click()

        cy.contains("buah-buahan").click()

        cy.get("button[class='chakra-button css-l5lnz6']").click()

        cy.scrollTo("top");
        
        cy.contains('"price" must be greater than ref:cost')
    })

        
})