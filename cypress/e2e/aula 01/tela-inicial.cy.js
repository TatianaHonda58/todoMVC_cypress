/**
 * Feature -> describe
 * background -> contexto ou beforeEach
 * caso de teste -> it
 */

import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Acessar a página do todoMVC', () => {
  /*
   * Teste foi evoluído na aula 02
   */
  it.skip('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/');
    telaInicial.inputText();
  });
});
