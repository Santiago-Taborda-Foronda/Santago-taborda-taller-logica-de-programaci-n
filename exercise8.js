 function count(chain) {
  const letters = [...chain].filter(char => /[a-zA-Z]/.test(char)).length;
  const numbers = [...chain].filter(char => /\d/.test(char)).length;
  const spaces = [...chain].filter(char => /\s/.test(char)).length;

  return {
    letras: letters,
    numeros: numbers,
    espacios: spaces
  };
}
console.log(count('whevhvcwhjb6532ev3e3  13 133 sva')); 

        
