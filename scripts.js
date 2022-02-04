//pega os lementos do html
const submitButton = document.getElementById('submit-button');
const titleID = document.getElementById('id');
const contentNome = document.getElementById('nome');
const contentNsc = document.getElementById('nsc');
const contentDoc = document.getElementById('documento');
const contentLivro = document.getElementById('livro');
const contentFolha = document.getElementById('folha');
const contentMae = document.getElementById('mae');
const contentPai = document.getElementById('pai');
const contentTurma = document.getElementById('turma');
const contentAno = document.getElementById('ano');
const contentTurno = document.getElementById('turno');
const contentNatural = document.getElementById('naturalidade');
const contentTelefone = document.getElementById('telefone');




//url de envio
const url='https://script.google.com/macros/s/AKfycbxMLtjaP8QQk-ayXrM3PnCQprZHlLKqi1LQI_f__8T5UUQz0Qx6KgEJn-PFv8WGNkiz/exec'


//mostra a resposta dos elementos enviados
const responseContent = document.getElementById('response-content');
const responseMessage = document.getElementById('response-message');
const responseID = document.getElementById('response-id');
const responseNome = document.getElementById('response-nome');
const responseNascimento = document.getElementById('response-nasc');
const responseDoc = document.getElementById('response-documento');
const responseLivro = document.getElementById('response-livro');
const responseFolha = document.getElementById('response-folha');
const responseMae = document.getElementById('response-mae');
const responsePai = document.getElementById('response-pai');
const responseTurma = document.getElementById('response-turma');
const responseAno = document.getElementById('response-ano');
const responseTurno = document.getElementById('response-turno');
const responseNaturalidade = document.getElementById('response-naturalidade');
const responseTelefone = document.getElementById('response-telefone');




    submitButton.addEventListener('click', ($event) => {
      $event.preventDefault();
      
  
  // POST request using fetch()
  fetch("https://script.google.com/macros/s/AKfycbxMLtjaP8QQk-ayXrM3PnCQprZHlLKqi1LQI_f__8T5UUQz0Qx6KgEJn-PFv8WGNkiz/exec", {
    
    // Adding method type
    method: "POST",
   mode:'cors',
    
    // Adding body or contents to send
    body: JSON.stringify({
      id: "titleID.value",
      nome_do_aluno: "contentNome.value",
      data_de_nascimento: "contentNsc.value",
      certidao_cpf_rg: "contentDoc.value",
      folha: "contentFolha.value",
      livro: "contentLivro.value",
      mae: "contentMae.value",
      pai: "contentPai.value",
      turma_em_2022: "contentTurma.value",
      ano_fundamental: "contentAno.value",
      turno: "contentTurno.value",
      naturalidade: "contentNatural.value",
      telefone: "contentTelefone.value"
    }),
    
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  
  // Converting to JSON
  .then(response => response.json())
  
  // Displaying results to console
  .then(json => console.log(json));
  
    });

    /*
    id: titleID.value,
    nome_do_aluno: contentNome.value,
    data_de_nascimento: contentNsc.value,
    certidao_cpf_rg: contentDoc.value,
    folha: contentFolha.value,
    livro: contentLivro.value,
    mae: contentMae.value,
    pai: contentPai.value,
    turma_em_2022: contentTurma.value,
    ano_fundamental: contentAno.value,
    turno: contentTurno.value,
    naturalidade: contentNatural.value,
    telefone: contentTelefone.value
    */