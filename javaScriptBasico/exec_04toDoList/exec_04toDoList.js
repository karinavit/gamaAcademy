const listContainer = document.querySelector('[data-list]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists= [];

newListForm.addEventListener('submit', function(e) {
  //addEventListener, recebe sempre dois parametros. Neste caso passamos uma função anônima para ele.
  e.preventDefault(); // usamos isso para que a página não seja limpa a cada novo submit que for enviado.
  const listName = newListInput.value;
  if (listName === null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  render()
})

function createList(name) {
  return {id: Date.now().toString(), name: name }
}

function render() {
  clearElement(listContainer);
  lists.forEach(function(list) {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = list.name;
    //acima criamos o elemento, demos uma classe para ele e colocamos o conteudo que ele irá receber.
    // agora precisamos dizer em qual elemento do nosso html ele irá ficar.
    listContainer.appendChild(item);
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()

console.log(listContainer);