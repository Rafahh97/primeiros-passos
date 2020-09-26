function saoDiferentes(){
    document.querySelector('numero1, numero2').valueAsNumber;
    if (numero1 =! numero2){
        let div = document.createElement('div');
        div.innerText = 'Os valores são diferentes';
        document.body.append(div); 
        texto.style.color = 'green';
    }else{
        let div = document.createElement('div');
        div.innerText = 'Não são diferentes';
        document.body.append(div); 
        texto.style.color = 'red';
    }
}
function resetar(){
    document.getElementById('numero1, numero2').value='';
    document.getElementById('os valores são diferestes, não são diferentes').remove();
}

document.getElementById('button1').onclick = function(saoDiferentes){}
document.getElementById('button2').onclick = function(resetar){}