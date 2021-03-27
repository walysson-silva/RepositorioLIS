function createList(quantidadeLi, texto) {
    //gere uma lista em HTML <li>
    console.log("criando a lista");
    var quantidadeLi = Number(window.prompt("Quantas linhas você deseja criar? "));//inserir número de linhas
    console.log(quantidadeLi);
    var texto = (window.prompt("Qual texto desejar colocar nas linhas? "));//inserir texto desejável 
    console.log(texto);
    var textoNum = 0;

    for(var i = 0; i < quantidadeLi; i++) {
        textoNum++;
        var node = document.createElement("li");                 // Create a <li> node
        var textnode = document.createTextNode(`${texto} ${textoNum}`);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("area").appendChild(node);     // Append <li> to <ul> with id="myList"
        }

    }
    createList();
