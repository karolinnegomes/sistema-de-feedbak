/// <reference types="cypress" />
describe('Login e registro de um novo usuario', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })
    it('Verificar mensagem de validação', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
    })
    it('Verifica mensagem de email invalido',()=>{
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="email"]').type('karoline')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })
    it('Verifica mensagem de senha com menos de 8 caracter ',()=>{
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
    
})