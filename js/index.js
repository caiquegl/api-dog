const baseApi = "https://dog.ceo/api/breed/";
let inputRacas = document.getElementById("racas");
let nomePet = document.querySelector("#nomePet");
let valueInput = document.getElementById("novaTarefa")
let fotoPet = document.querySelector("#fotoPet");
let add = document.getElementById("add");
let selectCor = document.getElementById("cor");
let salvarSession = document.getElementById("salvar");
let estilo = document.getElementById("family");




salvarSession.addEventListener('click',function(e){
    localStorage.setItem("petsalvaro", inputRacas.value)
    localStorage.setItem("corSelect", selectCor.value)
    localStorage.setItem("name", valueInput.value)
    localStorage.setItem("family", estilo.value)

    localStorage.setItem("data", new Date())

    window.alert("pet salvo com sucesso!")
})



function imgDog(){
    let api = inputRacas.value

    fetch(`https://dog.ceo/api/breed/${api}/images/random`)
    .then(function (resultado){
        return resultado.json()
    })
    .then(function(resultadoPets){
            fotoPet.innerHTML=`<img src="${resultadoPets.message}"></img>`


        
    })
    
}
function click(){
    
  let valor = valueInput.value;
  let cor = selectCor.value;
  let family = estilo.value;
  if (valor.length > 0) {
      nomePet.innerHTML="";
      nomePet.innerHTML = `
   <h1 style="color:${cor}; font-family:${family}">${valor}</h1>
   `

   valor.value = "";
   imgDog();
      console.log(family)
  }

    
}

add.addEventListener('click',function(e){
  let valor = valueInput.value;
  let cor = selectCor.value;
  let family = estilo.value;
  if (valor.length > 0) {
      nomePet.innerHTML="";
      nomePet.innerHTML = `
   <h1 style="color:${cor}; font-family:${family}">${valor}</h1>
   `

   valor.value = "";
   imgDog();
      console.log(family)
  }  else {
        window.alert("A sua tarefa está vazia, tente novamente");
    }

    // fetch(`https://dog.ceo/api/breed/affenpinscher/images/random`)
    // .then(function (resultado){
    //     return resultado.json()
    // })
    // .then(function(resultadoPets){
    //         fotoPet.innerHTML=`<img src="${resultadoPets.message}"></img>`
        
    // })

})

function listarRacas(){
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(function (resultado){
        return resultado.json()
    })
    .then(function(resultadoPets){

        for (const raca in resultadoPets.message) {

        
              if(raca == "australian"){
                  for (const sub of resultadoPets.message.australian) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "buhund"){
                for (const sub of resultadoPets.message.buhund) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "bulldog"){
                for (const sub of resultadoPets.message.bulldog) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "bullterrier"){
                for (const sub of resultadoPets.message.bullterrier) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "cattledog"){
                for (const sub of resultadoPets.message.cattledog) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "collie"){
                for (const sub of resultadoPets.message.collie) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "corgi"){
                for (const sub of resultadoPets.message.corgi) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "dane"){
                for (const sub of resultadoPets.message.dane) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "deerhound"){
                for (const sub of resultadoPets.message.deerhound) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "elkhound"){
                for (const sub of resultadoPets.message.elkhound) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "finnish"){
                for (const sub of resultadoPets.message.finnish) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "frise"){
                for (const sub of resultadoPets.message.frise) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "greyhound"){
                for (const sub of resultadoPets.message.greyhound) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "hound"){
                for (const sub of resultadoPets.message.hound) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "mastiff"){
                for (const sub of resultadoPets.message.mastiff) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "mountain"){
                for (const sub of resultadoPets.message.mountain) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "ovcharka"){
                for (const sub of resultadoPets.message.ovcharka) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "pinscher"){
                for (const sub of resultadoPets.message.pinscher) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "pointer"){
                for (const sub of resultadoPets.message.pointer) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "poodle"){
                for (const sub of resultadoPets.message.poodle) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "retriever"){
                for (const sub of resultadoPets.message.retriever) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "ridgeback"){
                for (const sub of resultadoPets.message.ridgeback) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "schnauzer"){
                for (const sub of resultadoPets.message.schnauzer) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "setter"){
                for (const sub of resultadoPets.message.setter) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "sheepdog"){
                for (const sub of resultadoPets.message.sheepdog) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "spaniel"){
                for (const sub of resultadoPets.message.spaniel) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "springer"){
                for (const sub of resultadoPets.message.springer) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "terrier"){
                for (const sub of resultadoPets.message.terrier) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "waterdog"){
                for (const sub of resultadoPets.message.waterdog) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }if(raca == "wolfhound"){
                for (const sub of resultadoPets.message.wolfhound) {
                    inputRacas.innerHTML+= `
                    <option value="${raca}/${sub}">${sub} ${raca}</option>
                    ` 
                  }
              }


              else{
                inputRacas.innerHTML+= `
                <option value="${raca}">${raca}</option>
                `
              }



            }
        
       
            restaurarSesssion();
                
    })   
}

function restaurarSesssion(){
    
    selectCor.value = localStorage.getItem("corSelect");
    inputRacas.value = localStorage.getItem("petsalvaro");
    valueInput.value = localStorage.getItem("name");
    estilo.value =    localStorage.getItem("family");

    return click();
}

function excluir(){
    localStorage.clear()
    location.reload();
}

