function decode(expr) {
    let wordsArray = expr.match(/.{10}/g);
  
    wordsArray = wordsArray.map(word => {
    word.replace(/11/g, "-").replace(/10/g, ".").replace(/0/g, "").replace(/\*{10}/, " ");
      word = (word != " ") ? MORSE_TABLE[word]: word;
  
      return word;
    });
  
    return wordsArray.join("");
  }