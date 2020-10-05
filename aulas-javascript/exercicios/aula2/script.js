function saoDiferentes(){
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    if (numero1 != numero2){
        let div = document.createElement('div');
        div.innerText = 'Os valores são diferentes';
        document.body.append(div); 
        div.classList.add('verde');
        let texto = document.querySelector(".verde")
        texto.style.color = 'green';
        
    }else{
        let div = document.createElement('div');
        div.innerText = 'Não são diferentes';
        document.body.append(div); 
        div.classList.add('vermelho');
        let texto = document.querySelector(".vermelho")
        texto.style.color = 'red';
        
    }
    
}
function resetar(){
    document.getElementById('numero1').value='';
    document.getElementById('numero2').value='';
    document.getElementById('os valores são diferestes, não são diferentes').remove();
}

document.getElementById('button1').onclick = saoDiferentes;
document.getElementById('button2').onclick = resetar;