import SingupPage from '../pages/singup/SingupPage';


describe('Cadastro', () => {
    //before(() => {

    //cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes')
   // });

    beforeEach(function() {
        //cy.log('Tudo aqui é executado uma vez sempre ANTES de cada caso de teste')

        cy.fixture('delivery').then((d) =>{
            this.deliver = d;
            
        })

    });
    

    //after(() => {
        //cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes')
     //});

     //afterEach(() => {
         //cy.log('Tudo aqui é executado uma vez sempre DEPOIS de cada caso de teste')
        
     //});

    it('Cadastrar entregador', function() {

        singup.go();
        singup.fillForm(this.deliver.singup);
        singup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalAlertShouldBe(expectedMessage);
        
    });

    it('CPF incorreto',function() {
        singup.go();
        singup.fillForm(this.deliver.cpf_inv);
        singup.submit();

        singup.alertErrorShouldBe('Oops! CPF inválido')
    });

    it('Email incorreto', function(){
        singup.go();
        singup.fillForm(this.deliver.Email_inv);
        singup.submit();

        singup.alertErrorShouldBe('Oops! Email com formato inválido.')
    });
    
});