/// <reference types="cypress" />
 
context('testar Home Page', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com.br/')
    })
  
    it('Pesquisando', () => {
      cy.get('input[name="q"]').type('torne se um programador')
        cy.get('form').submit()
        
      })

    //it('Deve preencher um CPF e verificar como inválido', () => {
      //cy.get('input').type('351.455.030-26')
      //cy.get('form button').click()
      //cy.get('.alert-success').should("to.have.length", 0)
      //cy.get('.alert-danger').should("to.have.length", 1)
    //})
  })