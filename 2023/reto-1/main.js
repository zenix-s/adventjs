function findFirstRepeated(gifts) {
  let sgift = [];
  
  for(let gift of gifts){
    if(sgift.includes(gift)){
      return (gift);
    }
    sgift.push(gift);
  };

  return -1;
}