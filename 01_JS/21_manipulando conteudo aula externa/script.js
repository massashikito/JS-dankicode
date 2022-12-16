function esconde(el) {
    document.getElementById(el).style.display = 'none'
}//esconder deu top
function mostra(el) {
    document.getElementById(el).style.display = 'block'
}//mostrar deu top tbm

function toggle(el) {
    var display = document.getElementById(el).style.display;
    if(display == 'none'){
        document.getElementById(el).style.display = "block";
    }
    else{
        document.getElementById(el).style.display = "none";
    }//function alternar não deu certo
}
