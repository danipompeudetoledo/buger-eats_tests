import SingupPage from '../pages/SingupPage';
describe('Cadastro', () => {

    it('Cadastrar entregador', () => {

        let deliver = {
            nome: 'Daniel',
            cpf: '00000041414',
            email: 'daniel@test.com',
            whatsapp: '11999999999',
            endereco:{
                cep:'76987004',
                rua:'Rua Sergio Almir Carniel',
                numero:'200',
                complemento:'Casa',
                bairro:'Jardim Eldorado',
                cidadeUF:'Vilhena/RO'
            },
            metodo_entrega:'Moto',
            cnh:'cnh-digital.jpg'
        }

        var singup = new SingupPage();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalAlertShouldBe(expectedMessage);
        
    });


    it('CPF incorreto', () => {

        let deliver = {
            nome: 'Daniel',
            cpf: '000000414AA',
            email: 'daniel@test.com',
            whatsapp: '11999999999',
            endereco:{
                cep:'76987004',
                rua:'Rua Sergio Almir Carniel',
                numero:'200',
                complemento:'Casa',
                bairro:'Jardim Eldorado',
                cidadeUF:'Vilhena/RO'
            },
            metodo_entrega:'Moto',
            cnh:'cnh-digital.jpg'
        }

        var singup = new SingupPage();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();

        singup.alertErrorShouldBe('Oops! CPF inválido')
    });


    it('Email incorreto', () => {

        let deliver = {
            nome: 'Daniel',
            cpf: '00000041414',
            email: 'daniel.test.com',
            whatsapp: '11999999999',
            endereco:{
                cep:'76987004',
                rua:'Rua Sergio Almir Carniel',
                numero:'200',
                complemento:'Casa',
                bairro:'Jardim Eldorado',
                cidadeUF:'Vilhena/RO'
            },
            metodo_entrega:'Moto',
            cnh:'cnh-digital.jpg'
        }

        var singup = new SingupPage();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();

        singup.alertErrorShouldBe('Oops! Email com formato inválido.')
    });
    
});