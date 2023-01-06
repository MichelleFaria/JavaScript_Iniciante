function VerificarEntrada(){
    NomeConvidado=document.getElementById('nome').value;
    ConvidadosCristian=['Nezuko','Tanjiro','Zenitsu','Inosuke']
    if (ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText='Você pode Entrar!'
    }else{
        document.getElementById('PermissaodeEntrada').innerText= 'Você não pode Entrar!'
    }
}
