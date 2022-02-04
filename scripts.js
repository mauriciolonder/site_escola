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

const inputField = document.querySelectorAll('#input')



// cria um event listener e espera o clique, cria o objeto que será enviado
submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();

    asyncPostCall()
});

const asyncPostCall = async () => {
  try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwm_nIVGwZMIyJYWE5C2L_uM1QLqL8cHeHXCxNC6MvweQS_Y5wMD3S2cmnEaUc8AvW3/exec', {
       method: 'POST',
       mode:'no-cors',
       headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({
   // your expected POST request payload goes here
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
          })
       });
       const data = await response.json();
    // enter you logic when the fetch is successful
       console.log(data);
     } catch(error) {
   // enter your logic for when there is an error (ex. error toast)

        console.log(error)
       } 
  }





  //const url='https://script.google.com/macros/s/AKfycbxMLtjaP8QQk-ayXrM3PnCQprZHlLKqi1LQI_f__8T5UUQz0Qx6KgEJn-PFv8WGNkiz/exec'
  /*
  const data=JSON.stringify(
    {
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
});
*/
  


  
 





  /*
  function makeRequest(data) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', url + '/create-post');
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 201) {
            resolve(JSON.parse(request.response));
            console.log("deu certo")
          } else {
            reject(JSON.parse(request.response));
            console.log("deu erro")
          }
        }
      };
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
    });
  }

  //função para likar os dados com o formulario
  async function submitFormData(post){ 
    const requestPromise = makeRequest(post);
    const response = await requestPromise;
        responseID.textContent = response.post.id;
        responseNome.textContent = response.post.nome_do_aluno;
        responseNascimento.textContent = response.post.data_de_nascimento;
        responseDoc.textContent = response.post.certidao_cpf_rg;
        responseLivro.textContent = response.post.livro;
        responseFolha.textContent = response.post.folha;
        responseMae.textContent = response.post.mae;
        responsePai.textContent = response.post.pai;
        responseTurma.textContent = response.post.turma_em_2022;
        responseAno.textContent = response.post.ano_fundamental;
        responseTurno.textContent = response.post.turno;
        responseNaturalidade.textContent = response.post.naturalidade;
        responseTelefone.textContent = response.post.telefone;
    }
      
*/
  


