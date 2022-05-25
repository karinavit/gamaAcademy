class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this se refere a nossa classe Book. 
    // dessa forma temos os nossos atributos
  }
  // ainda dentro da nossa classe podemos criar nossos métodos. neste caso não precisamos utilizar a plavra reservada funciton.
  read() {
    return `Estou lendo ${this.title}`
  }
}

// //Modelo utilizado para instânciar a classe:
// // Com a classe criada partimos para a criação do nosso objeto, de modo a instanciar a nossa classe.
// let book = new Book('Algoritmos para viver', 'Brian', 500); // quando uso o new, já estou criando um objeto do tipo Book.
// console.log(book); // se não passarmos nenhum atributo o console apresentará os atributos com o formato undefined.
// console.log(book.read());

// Modelo de Herança
// No exemplo abaixo vamos herdar as propriedades da class Book em uma nova class:


