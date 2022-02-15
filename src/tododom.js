var lists = document.getElementById("elementAddList");
var todos = document.getElementById("listElement");

var count = 0;

function createToDoElement(typeofElement, content = "test"){
    switch(typeofElement){
        case 'todo':
            let todo = document.createElement("div");
            todo.innerHTML = content;

            let trashcan = document.createElement("button");
            trashcan.onclick=function() { deleteElement(todo); };

            let pen = document.createElement("button");
            pen.onclick=function() { editElement(todo); };

            todo.appendChild(trashcan);
            todo.appendChild(pen);

            todo.id = "todo" + count;
            count++;

            todo.style = "height: 150px; background-color: coral;"
            todo.classList.add("class");
            
            todos.appendChild(todo);
            break;
        case 'list':
            let list = document.createElement("li");
            let listButton = document.createElement("button");
            listButton.innerHTML = content;
            listButton.onclick=function() { showList(content); };
            list.appendChild(listButton);

            /*let trashcan = document.createElement("button");
            trashcan.onclick=function() { deleteElement(todo); };

            let pen = document.createElement("button");
            pen.onclick=function() { editElement(todo); };

            todo.appendChild(trashcan);
            todo.appendChild(pen);*/

            //list.id = "list" + count;
            //count++;

            list.style = "height: 150px; background-color: green;"
            list.classList.add("class");
            
            lists.appendChild(list);
            break;
    }
    
}

function showListList(){
    var allLists = getListTypes();
    allLists.forEach((element) => {
        createToDoElement("list", content = element.type)
        console.log({ element });
    });
}

function showList(listType){
    clearListArea();
    var allELements = getTodosOfType(listType);
    allELements.forEach((element) => {
        createToDoElement("todo", content = element.type)
        console.log({ element });
    });
}

function deleteElement(todoElement){
    console.log("test" + todoElement.id);
}

function editElement(todoElement){
    console.log("test2" + todoElement.id);
}

function clearListArea() {
	var col_wrapper = document.getElementById("listElement");
	while (col_wrapper.firstChild) {
    	col_wrapper.removeChild(col_wrapper.lastChild);
  	}
}

showListList()