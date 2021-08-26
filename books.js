const box = document.querySelector('.box');

fetch("http://localhost:1717/pastry")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      createContact(item);
    });
  });


function createElement(tag, className, content) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = content;
    return element;
}
const createContact = function (item) {
    const todoInfo = createElement("div", "todos__info", "");
    const todoName = createElement("div", "todos__name", item.name);
    const todoingredients = createElement("div", "todos__Receipt", ingredients(item.ingredients));
    const todoInStock = createElement("div", "todos__InStock", item.inStock);
    todoInfo.append(todoName, todoingredients, todoInStock);
    document.querySelector(".todos").appendChild(todoInfo);
};
function ingredients(arr){
    let result = ''; 
    arr.forEach((item, index, arr)=>{
        if(index === arr.length - 1){
            result += item;
        }
        else{
            result += `${item} | `;
        }
        
    });
    console.log(result);
    return result; 
}
