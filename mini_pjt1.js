let nome= "Michelle"; 
console.log (nome);

let a='verde';
let b='azul';
console.log(a);
console.log(b);

// Susbtitua um pelo outro
let d= b;
b=a;
a=d;
console.log(d);
console.log(a);
console.log(b);



// 2° Mini-Projeto
//Escreva uma função que usa 2 números e retorna o maior entre eles
let numero1=9
let numero2=6
if (numero1 < numero2) {
    console.log (numero2)
}
else{
    console.log (numero1)
}

// Professor
let valorMax= max(10,3);
console.log (valorMax)

function max(n1,n2){
    if(n1>n2)
    return n1;
    else return n2;
}



//3° Mini-Projeto
// Divisível por 3=> Fizz
// Divisível por 5=> Buzz
// Divisível por 3 e 5=> FizzBuzz
// Não divisível por 3 e 5 => entrada
// Não é um número => 'Não é um número'

const entrada= fizzBuzz(15)
    console.log(entrada)

function fizzBuzz(entrada){
    if(entrada%3==0)
    return "Fizz"
    else if (entrada%5==0)
    return "Buzz"
    else if (entrada%3==0 && entrada%5==0)
    return "fizzBuzz"
    else if (entrada%3!==0 && entrada%5!==0)
    return entrada
    else 
    return "Não é um número"
}

//Prof
const resultado= fizzBuzz(6)
    console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um Número';
    if (entrada %3===0)
        return "Fizz";
    if (entrada %5 ===0)
        return 'Buzz';
    if (entrada%3===0 && entrada%5===0)
        return 'fizzBuzz';
    return entrada;
}



// 4° Mini-projeto
// Velocidade máxima de até 70
// A cada 5km acima do limite voce^ganha 1 ponto
// Math.Floor()    Arredanda os decimais
// Caso pontos> 12 -> "Carteira suspensa"

verificarVelocidade(200);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPontos=5;
    if ( velocidade <= velocidadeMaxima)
        console.log ('Ok')
    else{
        const pontos = Math.floor((velocidade - velocidadeMaxima)/KmPontos);
        if (pontos >=12)
            console.log ('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
}



// 5° Mini-projeto
// Receber uma quantidade de valores para avaliar
// funçãp exibe se cada valor é par ou impar

exibirTipo(5);
function exibirTipo(limite){
    for(let i=0; i<=limite; i++){
    if (i%2 ===0)
    console.log (i,'PAR');
    else
    console.log(i,'IMPAR');
    }
}



// 6° Mini-projeto
// Criar um método para ler propriedades de um objeto e
// Exibir somente as propriedades do tipo string que estão nesse objeto

const filme= {
    título: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Homen de ferro'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
        if (typeof obj[prop]=== 'string')
            console.log(prop,obj[prop])

}



// 7° Mini-projeto
// soma de todos os múltiplos de 3 e 5
// Multiplos de 3 (3,6,9)
// Multiplos de 5 (5,10)
// Somando dos múltiplos 
// Armazenar os multiplos de 3
// Armazenar os multiplos de 5
// Somar os dois

somar(10);
function somar (limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i=0; i<= limite; i++){
        if (i%3 ===0)
            multiplosDe3 += i;
        if (i%5 ===0)
            multiplosDe5 += i;
    }
    console.log(multiplosDe3+multiplosDe5)
}

somar1(10);
function somar1 (limite0){
while (limite0 %3===0);
    i= limite0 ++;
    while (limite0 %5===0);
    j= limite0 ++;
    console.log(i+j);
}



//8° Mini-projeto
//Exercício Nota Escolar
// Obter a média a partir de um array
// 0-59:F
// 60-69:D
// 70-79:C
// 80-89:D
// 90-100:A
const array = [70,70,80];
console.log(mediaDosAlunos(array));
function mediaDosAlunos(notas){
    let soma=0
    for (let nota of notas){
        soma+=notas;
    }
    const media= soma/(notas.length);
    if (media<= 59) return "F";
    if (media<= 69) return "D";
    if (media<= 79) return "C";
    if (media<= 89) return "D";
    return "A";
}



// 9° Mini-ptojeto
// Criar uma função qu exibe a quantidade de * que tem em cada linha
exibirsteristico(5);
function exibirsteristico(linhas) {
//        let padrao="";
//        for (i=1; i<= linhas; i++){
//            padrao += '*';
//            console.log(padrao);
//    }
for (let linha=1; linha<=linhas; linha++){
    let padrao='';
    for(let i=0; i<linhas; i++){
        padrao+="*";
    }
    console.log(padrao);
}
}

 // 10° Mini-Projeto 
 //Criar função para mostrar os números primos
 exibirNumerosPrimos(7);
 function exibirNumerosPrimos(limite){
    for (let numero=2; numero<= limite; numero++){
        let ePrimo= true;
        for(let divisor=2; divisor<numero; divisor++){
            if(numero%divisor===0){
                ePrimo=false;
                break;
            }
        }
        if (ePrimo) console.log(numero);
    }
 }



 //11° MINI- PROJETO
// Javascript - Objeto Endereço
// Criar um objeto endereço que conte:
//Rua
//Cidade
//CEP
//exibirendereço(endereco)

//My
function exibirendereço2(rua,cidade,cep){
    this.rua=rua;
    this.cidade=cidade;
    this.cep=cep;
    this.endereço=function (){
        console.log('seu endereço');
    }
}
const exibirendereço1= new exibirendereço2('Rua dos Bobos','Oz', 12345)
console.log(exibirendereço1)

//prof
const endereco = { rua:'a', cidade:'b', cep:'c'};
function exibirendereco(endereco){
    for(let chave in endereco)
        console.log (chave, endereco[chave]);
}
exibirendereco(endereco);



//12° MINI-PROJETO
// Igualdade de Obj
//Criar 2 obj endereço e depois compara-los
const exibirendereço3= new exibirendereço2('Rua dos ninjas','Konoha', 010101)
console.log(exibirendereço3)
const exibirendereço4 = exibirendereço3;

function saoIguais (exibirendereço1, exibirendereço3){
// Compara se as propriedades são iguais
    return exibirendereço1.rua === exibirendereço3.rua &&
    exibirendereço1.cidade === exibirendereço3.cidade &&
    exibirendereço1.cep === exibirendereço3.cep
}
console.log(saoIguais (exibirendereço1, exibirendereço3));

function temEnderecoMemoriaIguais(exibirendereço1,exibirendereço3){
// Comparando se a referência do onj aponta para o mesmo local na memória
    return exibirendereço1 === exibirendereço3;
}
console.log (temEnderecoMemoriaIguais(exibirendereço3,exibirendereço4));



//13° MINI-PROJETO
//Eu quero que vc crie um obj de postagem de blog que vai conter as seguintes propriedades:
//Postagem
/*
Titulo
Mensagem
Autor
Visualizacoes
Comentatios
estaAoVivo
*/
let postagem ={ titulo:'a', mensagem:'b',autor:'c',vizualização:10,
comentarios:[{autor:'M', mensagem:'a'},
            {autor:'G', mensagem: 'a'}], estaAoVivo:true
}
console.log(postagem);



//14° Mini-Projeto
//Crie um array de obj de faixa de preço para que ela possa ser usada em um site igua o mercado livre
//faixas, tooltip, minimo, maximo

//1°opção
let faixas = [
    {tooltip:'até 700,00', minimo:0, maximo:700},
    {tooltip:'de 700,00 a 1000.00', minimo:700, maximo:1000},
    {tooltip:'1000,00 ou mais', minimo:1000, maximo:9999999}
];

//2°opção (Factory Function)
function criarFP(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}
let faixas2=[
    criarFP('a',1,100),
    criarFP('b',100,1000),
    criarFP('c',1000,10000),
]

//3°opção
function FaixaPreço(tooltip,minimo,maximo){
    this.tooltip =tooltip,
    this.minimo=minimo,
    this.maximo=maximo
} 
let faixas3=[
    new FaixaPreço('a',10,20),
    new FaixaPreço('b',20,30),
    new FaixaPreço('c',30,40)
]
console.log(faixas);
console.log(faixas2);
