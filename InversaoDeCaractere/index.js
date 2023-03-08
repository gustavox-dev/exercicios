function inversaoDeString(){
  const nome = "gustavo xavier";
  let stringInversa = "";
  for(let i = nome.length -1; i >= 0; i--){
    stringInversa += nome[i];
    // console.log(nome[i]);
  }
  console.log("String Inversa: ", {stringInversa});
}

inversaoDeString();