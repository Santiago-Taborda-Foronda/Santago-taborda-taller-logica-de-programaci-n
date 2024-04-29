 function divisionSubtractions(dividend, divider) {
    if(divider===0){
        return ("La division por 0 no es valida");
        }

        let quotient = 0;
        let residue = dividend
    
        while (residue >= divider){
            residue -= divider;
            quotient++;
        }
        return {quotient: quotient, residue: residue};
        
    }
let result = divisionSubtractions(12, 5);
console.log(result.quotient + " Y sobran " + result.residue)

