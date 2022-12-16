let testes = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const erro = false
            if(erro){
                reject('Erro...')
            }else{
            resolve('A promisse foi resolvida com sucesso!')
            }
        },3000)


    })
}


/*
testes().then(function(res){
    alert(res)
}).catch(function(err){
    alert(err)
})
*/


async function testes2(){
    testes().then(function(res){//com await aparece primeiro a promisse depois ola/ sem await aparece ola, depois de 3 segundos a promisse foi resolvida com sucesso
        alert(res);
    });
    alert('ola');
}

testes2()