function validPassword(password) {
    let spaces = password.replace(/\s/g, '');
    let regularPhrase = /^(?=.*[A-Z])(?=.*\d).+$/;

    if (spaces.length < 8) {
        return ("Valor no valido");
    }

    if (!regularPhrase.test(spaces)) {
        return ("Valor no valido");
    }
    return ("Valor valido");
    }
    console.log(validPassword('Santiago1'));     
       
    
