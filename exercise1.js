function numberOperations(num1, num2) {    
    if (typeof num1 === 'number' && typeof num2 === 'number') {       
        if (Number.isInteger(num1 * 100) && Number.isInteger(num2 * 100)) {          
            if (num2 !== 0) {              
                let sum = num1 + num2;
                let subtraction = num1 - num2;
                let multiplication = num1 * num2;
                let division = num1 / num2;
                return "La suma es "+sum+" La resta es " + subtraction+" La multiplicacion es "+ multiplication+" La division es "+division;
                
            } else {
                return "Error: No se puede dividir entre cero.";
            }
        } else {
            return "Error: Ambos valores deben tener como máximo dos decimales.";
        }
    } else {
        return "Error: Ambos valores deben ser números.";
    }
}
console.log(numberOperations(2, 4));
