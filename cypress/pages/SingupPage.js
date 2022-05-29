
class SingupPage {

    go() {
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.nome);
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);


        cy.get('input[name="postalcode"]').type(deliver.endereco.cep);
        cy.get('[value="Buscar CEP"][type="button"]').click();

        cy.get('input[name="address-number"]').type(deliver.endereco.numero);
        cy.get('input[name="address-details"]').type(deliver.endereco.complemento);

        cy.get('input[name="address"]').should('have.value', deliver.endereco.rua);

        cy.contains('.delivery-method li', deliver.metodo_entrega).click();

        cy.get('input[accept^="image"]').attachFile(deliver.cnh);
    }

    submit() {

        cy.get('button[type="submit"]').click();


    }

    modalAlertShouldBe(expectedMessage) {

        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }


    alertErrorShouldBe(expectedMessage){
        cy.get('.alert-error').should('have.text', expectedMessage)
    }

}

export default SingupPage;