function leapYear(year) {
  if (year % 400 === 0) {
    return ("El año es bisiesto");
      }
      else if (year % 100 === 0) {
        return ("El año no es bisiesto");
      }
      else if (year % 4 === 0) {
        return ("El año es bisiesto");
      }
      else {
        return ("El año no es bisiesto");
      }
    }
console.log(leapYear(2100));
    
