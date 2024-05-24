document.addEventListener('DOMContentLoaded', function() {
    // Tipos de dados
    // String: Sequência de caracteres
    // Number: Números inteiros ou pontos flutuantes (10.4)
    // Boolean: Retorna dois valores, true ou false
    // Object: Estrutura de dados que pode armazenar múltiplos valores
    // Null: Quando está vazio;
    // Array: Objeto especial ordenado
    // Function: Bloco de código reutilizável
    
    // CONST é usado para declarar uma variável cujo valor é permanente 
    const teste = 50;
    
    // LET é usado para declarar variáveis cujos valores podem ser reatribuídos
    let C = 0;
    C = 10;
    console.log("---otavio é lindão ksksk---");
   
    const notaMedia = 8;

    if (notaMedia >= 6){
        // console.log("Aluno passou");
    } else if (notaMedia >= 4 && notaMedia < 6){
        // console.log("Aluno quase passou");
    } else {
        // console.log("Aluno reprovou");
    }
    
   // ----------- Operadores ----------
   
   // = Sinal de atribuição 
   // == Sinal de comparação 
   // === Verifica se os dois são iguais e têm o mesmo tipo de dados
   // != Se é diferente
   // !== Se é estritamente diferente
   // > Maior
   // < Menor
        
   const num = 6;
   if (num === 6) {
        // console.log("É igual");
   } else {
        // console.log("O tipo de dado é diferente");
   }

   const aluno = "Otavio";
   if (aluno == "Otavio") {
       console.log("Sim é o Otavio");
   } else {
       console.log("Não é o Otavio");
   }

  // ------------ / --------------

  // Funções são blocos de código que podem ser chamados e reutilizados
  // Dentro dos parênteses da função vão os parâmetros
  
  function primeiraFuncao(parametro) {
       return parametro;
  } 

  const parametro = "Essa é uma função com parâmetro";
  console.log(primeiraFuncao(parametro));

  // ------------- / -------------

  // Arrays em JavaScript são estruturas de dados que permitem armazenar uma coleção ordenada de elementos

  let primeiroArray = ["otavio", "charles", "joão", "igor"];

  console.log(primeiroArray[0]); // Número 0 para percorrer a array

  // ------------- / -------------

  // Os objetos são coleções NÃO ORDENADAS de pares chave-valor, onde cada valor é associado a uma chave única

  let pessoa = {
        nome: "otavio", 
        idade: "18",
        profissao: "vendedor",
  }

  //console.log(pessoa["profissao"]);

  // ------------- / -------------

  const numeros = ["a", "b", "c", "d"]; // Removi a vírgula extra no final do array

  numeros.forEach(elemento => {
        console.log(elemento)
  })

})