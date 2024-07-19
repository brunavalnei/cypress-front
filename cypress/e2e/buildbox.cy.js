import {dadosUsuario} from "../support/commands";

describe('Cadastro de usuário na plataforma', () => {

    beforeEach(() => {
        cy.visit('https://qastage.buildbox.one/18/cadastro/')
        cy.get('[id=btn-enroll]').click()
    })

    it('Cadastro de usuário com sucesso - nível de proficiência Beginner', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type((dados.nome))
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[1]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-cep]').type('11440170')
        cy.get('[id=signup-address-number]').type('200')
        cy.wait(2000)
        cy.get('[id=signup-address-country]').should('have.value', 'Brasil')
        cy.get('[id=signup-address-state]').should('have.value', 'SP')
        cy.get('[id=signup-address-city]').should('have.value', 'Guarujá')
        cy.get('[id=signup_submit_button_3]').click({force: true})
        cy.get('.leading-normal').contains(' Conheça um jeito novo de aprender inglês ')
        // cy.get('[id=wide_window_button]').click()
        // cy.get('[id=user_login]').type(dados.email)
        // cy.get('[id=user_pass]').type(dados.senha)
        // cy.get('[id=wp-submit]').click()
        // cy.get('.text-ellipsis').contains(dados.nome + ' ' + dados.sobrenome)
    })

    it('Cadastro de usuário com sucesso - nível de proficiência Intermediate', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[2]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-cep]').type('11440170')
        cy.get('[id=signup-address-number]').type('200')
        cy.wait(2000)
        cy.get('[id=signup-address-country]').should('have.value', 'Brasil')
        cy.get('[id=signup-address-state]').should('have.value', 'SP')
        cy.get('[id=signup-address-city]').should('have.value', 'Guarujá')
        cy.get('[id=signup_submit_button_3]').click({force: true})
        cy.get('.leading-normal').contains(' Conheça um jeito novo de aprender inglês ')
        // cy.get('[id=wide_window_button]').click()
        // cy.get('[id=user_login]').type(dados.email)
        // cy.get('[id=user_pass]').type(dados.senha)
        // cy.get('[id=wp-submit]').click()
        // cy.get('.text-ellipsis').contains(dados.nome + ' ' + dados.sobrenome)
    })

    it('Cadastro de usuário com sucesso - nível de proficiência Advanced', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[3]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-cep]').type('11440170')
        cy.get('[id=signup-address-number]').type('200')
        cy.wait(2000)
        cy.get('[id=signup-address-country]').should('have.value', 'Brasil')
        cy.get('[id=signup-address-state]').should('have.value', 'SP')
        cy.get('[id=signup-address-city]').should('have.value', 'Guarujá')
        cy.get('[id=signup_submit_button_3]').click({force: true})
        cy.get('.leading-normal').contains(' Conheça um jeito novo de aprender inglês ')
        // cy.get('[id=wide_window_button]').click()
        // cy.get('[id=user_login]').type(dados.email)
        // cy.get('[id=user_pass]').type(dados.senha)
        // cy.get('[id=wp-submit]').click()
        // cy.get('.text-ellipsis').contains(dados.nome + ' ' + dados.sobrenome)
    })

    it('Data de nascimento inválida', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/2015')
        cy.get('.input-error').contains('Data de nascimento inválida.')

    });

    it('CPF inválido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type('259.169.820-12')
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('.input-error').contains('CPF inválido.')

    });

    it('Campo confirme seu email - Os e-mails não são iguais.', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type('teste.teste@teste.com.br')
        cy.get('[id=signup-personal-data-email-confirm]').type('teste.teste')
        cy.get('.input-error').contains('Os e-mails não são iguais.')

    });

    it('Campo insira sua senha - As senhas não são iguais.', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type('....')
        cy.get('[id=signup-personal-data-password-confirm]').type('.')
        cy.get('.input-error').contains('As senhas não são iguais.')
    });


    it('Campo nome precisa ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-firstName]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo sobrenome precisar ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-lastName]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo data de nascimento precisa ser preenchido', () => {
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-birthDate]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo CPF precisa ser preenchido ', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-cpf]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo e-mail precisa ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo CEP precisa ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[1]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-cep]').type('11440170')
        cy.get('[id=signup-address-cep]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo bairro precisa ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[1]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-neighborhood]').type('Enseada')
        cy.get('[id=signup-address-neighborhood]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo endereço precisa ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[1]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-street]').type('Rua Dona Vitória')
        cy.get('[id=signup-address-street]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    it('Campo número residencial precisa ser preenchido', () => {
        const dados = dadosUsuario();
        cy.get('[id=signup-personal-data-firstName]').type(dados.nome)
        cy.get('[id=signup-personal-data-lastName]').type(dados.sobrenome)
        cy.get('[id=signup-personal-data-birthDate]').type('24/03/1984')
        cy.get('[id=signup-personal-data-cpf]').type(dados.meuCpf)
        cy.get('[id=signup-personal-data-email]').type(dados.email)
        cy.get('[id=signup-personal-data-email-confirm]').type(dados.email)
        cy.get('[id=signup-personal-data-password]').type(dados.senha)
        cy.get('[id=signup-personal-data-password-confirm]').type(dados.senha)
        cy.xpath('//*[@id="dropdown-button-1"]/div/span[1]').click({force: true})
        cy.get('[id=signup-personal-data-lgpd]').click()
        cy.get('[id=signup_submit_button_1]').click()
        cy.get('[id=signup-address-cep]').type('11440170')
        cy.get('[id=signup-address-number]').type('200')
        cy.get('[id=signup-address-number]').clear()
        cy.get('.input-error').contains('Precisa ser preenchido')
    })

    afterEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    })
})