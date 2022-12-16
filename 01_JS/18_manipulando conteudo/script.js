var p = document.getElementsByTagName('p')//criei a var pra alterar, mostrar, etc

alert(p[0].innerHTML)//o innerHTML me permite mostrar e acessar qualquer um dos objetos para alteraçõs


p[0].innerHTML = 'Manipulado via JS!'//aqui troquei o nome do p

for(var i = 0; i < p.length; i++){//for para colocar numeros em sequencia
    p[i].innerHTML = 'Manipulado via JS - '+i;
}

for(var i = 0; i< 10; i++){
    p[0].innerHTML = p[0].innerHTML + i
}
