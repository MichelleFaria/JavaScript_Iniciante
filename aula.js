console.log('Michelle')
console.log('Bem Vindo')
console.log('Socorro')

//STRING
//Tipo primitivo
const mensagem = 'minha mensagem';
// tipo objeti
const outramensag= new String('bom dia'); // é tido como um obj

// Javascript Aula 39 - Template Literal
const mensagem1= 'oi, minha primeira\n mensagem';
//Object{}
//Boolean true, false
// string '',""
//Template ``
const outra = `oi isso é a minha
'primeira' msg`;

const nome= 'michelle';
const msg='Olá'+ nome+ '\n'

const email=
`Olá ${nome},${2+2}

Obrigado por nos ajudar no trabalho.

Sua nota está garantida.

Obrigada,
Estudante.`;

//Date
const data1= new Date();
const data2= new Date('March 23 2022 21:00');
const data3= new Date(2019,03,23,9,30);

data3.setFullYear(2030);

//Array - continuação
const numeros=[1,2,3,4,5];
//Iterando um array
for (numero5 of numeros);
    console.log(numero5);
//ou
//forEach
numeros.forEach(function(numero5){
    console.log(numero5);
})
// deixando a de cima mais simples 
numeros.forEach((numero5,indice) => console.log(numero5,indice))

//Combinando o Array
const combinando= numeros.join('!');
console.log(combinando);

const frase= 'Olá bem vindo';
const resultado= frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));

// Recebendo Dados (INPUT) -> Essa parte deve ser escrita no console
//let animePreferido = prompt('Olá, qual o seu anime preferido?');
//animePreferido
//if (animePreferido = 'Naruto'){
//   alert('Você tem um bom gosto');}
