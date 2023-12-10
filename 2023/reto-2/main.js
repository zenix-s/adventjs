function manufacture(gifts, materials) {
  let manufacturedGifts = [];

  for (let gift of gifts) {
    let found = [...gift].every(letter => materials.includes(letter))
    found && manufacturedGifts.push(gift);
  }

  return manufacturedGifts;
}