let nome= "Carvalho";
let idade=1000;
let estavaAprovado = true;
let sobrenome= undefined;
let corSelecionado = null;
//Objeto

let pessoa = {
    nome:"Michelle",
    idade: 23,
    estaAprovado: true,
    sobrenome: 'carvalho'
}

console.log(pessoa);

// Array
let familia =[22,39,'carvalho',49];
console.log(familia.length);
console.log(familia[2]);

// Função (verbo + substantivo)
let corSite='azul';
function resetaCor(cor,tonalidade){
    corSite= cor+" "+tonalidade;
};

console.log(corSite);
resetaCor('verde','claro');
console.log(corSite);

//Realiza uma tarefa, e não devolve nada
function dizerNome(){
    console.log('Michelle');
}
dizerNome();
// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor*2;
}
console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);

console.log(resultado);

// Operadores Aritméticos(matemáticos)
let salario = 100;
//+ - */ **
console.log(salario +salario);
console.log(salario *salario);

//++ (encremento) --(decremento)
let idade1=18;
console.log(idade1++);
console.log(idade1);
//Imprimi 19 apenas no 2° pq ele vai fazer o calculo e só depois ele vai somar 1. Para ter o resultado antes coloque o ++ antes de "idade1"
console.log(--idade1)
console.log(--idade1)

// '' Atribuição
let valorTeclado= 100;
valorTeclado+= valorTeclado;
console.log(valorTeclado);

// Operadores de Igualdade (igualdade estrita)
console.log(1===1);
console.log('1'===1)

//(igualdade solta) Ele não se importa com o tipo da variável
console.log(1==1);
console.log('1'==1);

// '' de Comparação
// Tem um cliente, >100 premium, caso contrario comum
let pontos= 100
let tipo= pontos>100 ? 'premium': "comum";
console.log (tipo)

// '' Lógicos e (&&) -> Retorna TRUE se os 2 operandos forem TRUE
console.log(true && true);
console.log(false && true);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log ("Pode aplicar:" ,podeAplicar);

// Operador NOT(!)
let candidatoRecusado =!podeAplicar;
console.log("Candidato Recusado",candidatoRecusado);

let corPersonal= "vermelho";
let corPadrao= 'azul';
let corPerfil = corPersonal||corPadrao;
// Vai retornar vermelhor pq já na primeira parte ele achou uma variavel Truthy
console.log(corPerfil);

// '' Bitwise


// APÓS O 1° MINI-PROJETO


// IF ... ELSE
// Se a hora estiver 06:00 até 12:00 : Bom Dia!
// Se estiver esntre 12:00 até 18:00: Boa Tarde!
// Caso contrário: Boa Noite!

let hora= 10; // existem outras formas, mas aqui é só pra simplificar

if(hora>6 && hora<12){
    console.log ('Bom Dia!')
}
else if(hora>12 && hora<18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
}

// Switch

let permissao; // comum, gerente, diretor
permissao='gerente';
 switch (permissao){
    case 'comum':
    console.log('usuário comum');
    break;
    case 'gerente':
    console.log('usuário gerente');
    break;   
    case 'diretor':
    console.log('usuário diretor');
    break; 

    default:
    console.log('Usuário não reconhecido');
 }

 //LOOP (laços)
 // FOR  While   do...while   for...in   for...of

 for(let i=0; i<5;i++){
    console.log('Estou aprendendo',i)
 }

 for(let i=1; i<=5;i++){
    if(i%2 !==0){
        console.log(i); 
    }
 }


 //WHILE
 let i=5
 while (i >= 1){
    if(i%2 !==0){
        console.log(i); 
    }
    i--;
 }

 //DO...WHILE
 do{
    console.log('digitando!')
    i++ // Caso contrário vai infinito
 } while (i<10) 

 // FOR-IN
 const pessoa1={
    nome: 'ka', //key-value
    idade: 18
 };
 for(let chave in pessoa1){
    console.log(chave,pessoa1.nome);
 }

 const cores = ['Vermellho','Azul','Laranja'];
 for (let indice in cores){
    console.log(indice, cores[indice])
 }

 // FOR-OF
 for(let cor1 of cores){
    console.log(cor1);
 }


 //Após o 10° Mini-Projeto 


const celular= {
    marcaCelular:"ASUS",
    tamanhoTela: {
        vertical: 155,
        horizontal:75,
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...')
    }
}
// Javacript Aula34 - Factory Functions (Função Fábrica)
//camelCase umDoisTresQuatro
//function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//    return {
//        marcaCelular,
//        tamanhoTela,
//        capacidadeBateria,
//        ligar (){
//            console.log('Fazendo ligação...')
//        }
//    }
//}
//const celular1 = criarCelular('Zenfone',5.5,5000);
//console.log(celular1);


// Construction  Function 
// Pacal Case-UmDoisTresQuatro
// 'this' referencia um objeto
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular= marcaCelular,
    this.tamanhoTela= tamanhoTela,
    this.capacidadeBateria= capacidadeBateria,
    this.ligar= function(){
        console.log('Fazendo Ligação...');
    }
}
const celular2= new Celular( "asus",5.5,5000);
console.log(celular2);

//My
function roupa(marca, tamanho, cor){
    this.marca=marca;
    this.tamanho=tamanho;
    this.cor=cor;
    this.entregar=function(){
        console.log('Compra Realizada');
    }
}
const roupa1= new roupa('Gucci','M','Azul');
console.log(roupa1);

function carro(marca, modelo, cor){
    return {
            marca,
            modelo,
            cor,
            finalizarcompra (){
                console.log('Compra realizada')
            }
        }
    }
    const carro1 = carro('Hyundai','HB20','Branco');
    console.log(carro1);


// Javascript Aula 36 - Natureza dinâmica de Objetos
const mouse={
    cor: "red",
    marca:"dazz"
}
mouse.velocidade= 5000; //o Objeto add essa parte
mouse.trocarDPI=function(){
    console.log('mudando DPI');
}
delete mouse.velocidade;
console.log(mouse)


// Como clonar Objetos
const novoObjeto= Object.assign({
    bateria:5000
},celular); // {alvo}, de onde ele vai copiar as prop e metod
console.log(novoObjeto);

const objeto2 = {...celular}; //{...} spred depois passa o nome do obj
console.log(objeto2);


// Após o 12 Mini-projeto


//Criar um obj postagem
//titulo, mensagem, autor, visualizações
function Postagem(titulo, mensagem, autor){
    this.titulo=titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}
let postagem = new Postagem ('a','b','c');
console.log(postagem);


//Após o 14 Mini-projeto


// ARRAYS
/* 
Add novos elementos
Encontrar Elementos
Remover Elementos
Dividir elementos
Combinar Arrays
*/

//ADD ELEMENTOS A UM ARRAY
const numeros =[1,2,3];
//Inicio
numeros.unshift(0);
console.log(numeros);
//Meio
numeros.splice(1,0,'a');
console.log(numeros);
//Final
numeros.push(5);
console.log(numeros);

//Encontrar elemntos (Primitivos)
//Um elemntos primitivo é um dado que não é representado atravÉs de um obj(m tem um método)
// seria : string, boolean, number, ...
const num =[1,2,3,1,4];
console.log (num.indexOf(3));  // Retorna o index do valor
console.log (num.lastIndexOf(1));  // Retorna o index da últma ocorrencia do valor
console.log(num.indexOf(2) !== -1)  // Retorna True pq tem esse valor
console.log(num.includes (2));

// Encontrar elementos (Tipos de referência)
const marcas1 =[
    {id:1, nome:'a'},
    {id:2, nome:'b'}   
];
const marcas2= marcas1.find(function(marcas2){   //A função encontra um elemento parecido, caso contrario escrve Undefined
    return marcas2.nome === 'a';
});
console.log(marcas2);

// Arrow Functions
// Mesma const marcas1
console.log(marcas1.find(marca3 => marca3.nome==='b'));

// REMOVER ELEMENTOS DE UM ARRAY
let numer = [1,2,3,4,5,6];  // Mudei de const para let (pois const n pode ser reatribuido - estou fazendo isso na solução1)
numer.push();
numer.unshift();
numer.splice();

//Final
const ultimo= numer.pop();
console.log(ultimo);
console.log(numer);
//Inicio
const primeiro= numer.shift();
console.log(primeiro);
console.log(numer);
//Meio
const meio= numer.splice(2,1); //indice, qtdd
console.log(meio);
console.log(numer);

//ESVAZIAR UM ARRAY
let outros= numer
//Solução 1
//numer=[]; (porém não apaga todas as refencias desse array)
//console.log(outros);

//Solução 2  RECOMENDADO
//numer.lengh=0 (estou reduzindo a nada os valores)
//console.log(numer);

//Solução 3
//numer.splice(0,numer.length);
//console.log(numer);
//console.log(outros);

//Solução 4
while (numer.length > 0);
    numer.pop();

// COMBINAR E DIVIDIR ARRAY
const first=[1,2,3];
const second=[4,5,6];
const third=[7,8,9];
//Combinar
const combinado= first.concat(second);
console.log(combinado);
//Dividir
combinar.slice(1,3);

//spreed para fazer clonagem
const combinado1= [...primeiro,...segundo,'e',...third];
console.log(combinado1);
//const cortado= combinado1.slice();
const clonado= [...combinado1];
console.log(clonado);