/**
 * Estrutura inicial da pageObjects
 * pageObjects -> classe com diferentes métodos e cada método vai executar uma ação, como buscar um elemento, fazer uma manipulação de dados, fazer uma sessão
 * Cada método vai ter um nome específico comunicável que vai se auto dizer o que está acontecendo
 * <ul class="filters"> == $0 -> no inspecionar
 * invoke: faz o botão oculto (mouseover: é ativado quando o cursor do mouse passa sobre um elemento HTML específico.) aparecer para o Cypress
 */

const elem = require('../elements/tela-inicial.elements').ELEMENTS;
const concluirItem = require('../elements/tela-inicial.elements').ITENS;
const filtroItem = require('../elements/tela-inicial.elements').FILTROS;

class telaInicial {
  inputText(dado) {
    cy.get(elem.inputToDo).type(dado).type('{enter}');
  }

  concluirItem() {
    cy.get(concluirItem.buttonConcluirItem).last().click();
  }

  filtrarItem(menu) {
    cy.get(filtroItem.filtroToDo).contains(menu).and('be.visible').click();
  }

  deletarItem() {
    cy.get(concluirItem.listaItens)
      .first()
      .find('button')
      .invoke('show')
      .click();
  }

  validarInput(texto) {
    cy.get(elem.inputToDo)
      .should('have.attr', 'placeholder')
      .and('include', texto);
  }

  validarContador(numero) {
    /**
     * site atualizou e agora não é mais necessário dar um find no elemento
     */
    cy.get(filtroItem.contador)
      // .find('strong')
      // .should('have.text', numero)
      .should('contains.text', numero);
  }

  validarSizeToDo(numero) {
    cy.get(concluirItem.validarListaItens).should('have.length', numero);
  }
}

export default new telaInicial();
