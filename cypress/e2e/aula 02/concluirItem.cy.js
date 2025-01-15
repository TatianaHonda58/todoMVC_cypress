import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Concluir itens na lista de toDo', () => {
  /**
   * DADO - BEFORE: ANTES DO PRIMEIRO TESTE
   * BEFORE EACH: ANTES DE CADA TESTE
   */

  beforeEach(() => {
    cy.visit('/');
    var todoItens = ['Maça', 'Banana', 'Cenoura'];

    todoItens.forEach(function (item, indice, array) {
      telaInicial.inputText(item);
    });
  });

  /*
   * Pega a classe telaInicial e lá dentro vai ter um método chamado concluirItem. Quero chamar esse método para executar a ação de concluir item.
   */

  it('Concluir um item na lista de toDo', () => {
    telaInicial.concluirItem();
  });
});
