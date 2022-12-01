function wrapping(gifts) {
  let regalos =[]
  gifts.forEach(function(regalo){
    function envolver(regalo){
      let asteriscos = "";
      for(i = 0; i < regalo.length; i++) {
        asteriscos += "*";
      };
      return asteriscos
    }
    let envolviendo = envolver(regalo);
    let amarrando= `*${envolviendo}*\n*${regalo}*\n*${envolviendo}*`;
    regalos.push(amarrando);
  });
  return regalos;
};
