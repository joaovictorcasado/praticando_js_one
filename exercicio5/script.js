// Objetivo criar um contador

// Passos:
// O que devera ter:

// fim da contagem
// inicio da contagem
// salto da contagem

// botao para fazer a contagem

// campo da contagem sendo feita..

// se nao houver nada campo da contagem apresentará a mensagem: preparando a contagem..

// Verificações nos campos:
// Se o valor for ""
// Se o salto for = 0 a contagem nao sera feita e apresentara uma mensagem de erro
// Se o valor do inicio for maior do que o valor final, o programa não executará e apresentara uma mensagem de erro
// O salto também não poderá ser maior do que o final ..


        

function contar() {
  
  // Dom inicio // fim // salto
  
  let i  =  document.getElementById('inicio').value
  let f =  document.getElementById('fim').value
  let s =  document.getElementById('salto').value


  // Convertendo as variaveis para numero..
  i = Number(i)
  f = Number(f)
  s = Number(s)

  // pegando os valores das variaveis..
  let valorI = i;
  let valorF = f;
  let valorS = s;

// Valores que serão inseridos nas div do html (DOM)
  let res = document.getElementById('res')
  let cont =  document.getElementById('contando')
  let preparacao =  document.getElementById('preparando')
  let resultado = document.getElementById('resultado')
  
 
  
  // testa se o valor é vazio
  
  if (i  == '') {
    // res.innerHTML = `  <div style="text-align: left;" id="res">Insira um valor de inicio</div>`
    alert('Insira um valor de inicio para iniciarmos');
  } else if (f == '')  {
    alert('Insira um valor no final no campo fim para  a contagem')
  //   res.innerHTML = ` <div style="text-align: left;" id="res">Insira um valor final </div>

  }else if (i>f) {

  alert('Valor invalido.. Insira um valor de inicio  menor que o fim para continuarmos..')

  }  else if (s == ''){
    alert('Infome um valor para o salto, ex 2 em 2')
  //   res.innerHTML = ` <div style="text-align: left;" id="res">Infome um valor para o salto, ex 2 em 2</div>
  // se o valor não for vazio ele insere o resultado no documento..
  } else if (s==0) {
   
      alert ('Não foi possivel calcular, adicione um salto maior que 0 para a contagem..')
    


  } else {
   
    // Apos os testes acima se i for menor que f poderemos executar a nossa repetição..
    // e em seguida imprimir o resultado
    if (i <= f) {
      

       
      //  Substituindo o conteudo da div "preparando contagem" por "contando"
      preparacao.innerHTML = ` <div style="text-align: left;">Contando:</div>

       
        `
      // Começando o contador, se i for menor ou igual a f, incrementa i 
      for (i; i <= f; i++) {
        // console.log (i)
        let res =  (i* s)
        // console.log (res)
        // for (res <= f) {
        //   res = (i * s)
        // }
       


        // if (res)
      


        resultado.innerHTML += ` 
        <div style= "text-align: left;" id="resultado" >${res}</div>
        <div style= "text-align: left;" id="resultado" >${String.fromCodePoint(0x1F449)} </div>

        
        `
     }

     
     resultado.innerHTML += `<div style= "text-align: left;" id="resultado" >${String.fromCodePoint(0x1F3F4)}</div>
     `


   } 

   
  }

  
  return
}


