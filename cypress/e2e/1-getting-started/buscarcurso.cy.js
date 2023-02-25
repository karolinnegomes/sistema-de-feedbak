describe('alura buscar cursos', ()=>{

    beforeEach(()=>{
        cy.visit('http://www.alura.com.br');
    })
    it('burcar curso de java', ()=>{
        cy.get('#header-barraBusca-form-campoBusca').type('python');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(2) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            .should('have.text', 'Formação Estatística com Python');

    })
})