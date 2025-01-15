import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Adicionar itens na minha lista de toDo', () => {
  /**
   * DADO - BEFORE: ANTES DO PRIMEIRO TESTE
   * BEFORE EACH: ANTES DE CADA TESTE
   */

  beforeEach(() => {
    cy.visit('/');
  });

  /*
   * A suite de teste chama métodos que fazem ações
   * Logo abaixo, foi chamado o método input text que vai adicionar um dado (dado1)
   * .skip depois do it: Cypress vai entender que este teste vai ser skipado, ou seja, não será executado
   */

  it('Adicionar um item na lista', () => {
    telaInicial.inputText('dado1');
    telaInicial.inputText('dado2');
    telaInicial.inputText('dado3');
  });

  /*
   * Otimizando o código: Adicionando uma array com todos os itens que preciso adicionar no ToDo e também, um forEach fazendo um laço de repetição para ir adicionando de forma performática os itens dentro do ToDo.
   * forEach: laço de repetição - for: para e each: cada

  */

  it('Adicionar mais de um item a lista', () => {
    var todoItens = ['Maça', 'Banana', 'Cenoura'];

    todoItens.forEach(function (item, indice, array) {
      telaInicial.inputText(item);
    });
  });
});
