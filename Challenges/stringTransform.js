function challenge2 (inputString) {

    if((inputString.length % 3 === 0) && (inputString.length % 5 === 0)) {
        let str = inputString.split("").reverse().join("");
        let codes = [];
        for ( let i = 0; i < str.length; i ++) {            
            codes.push(inputString.charCodeAt(i));
        }
        return codes;
    }

    else if ( inputString.length % 3 === 0) {
        let str = "";
        for (let char of inputString) {
            if (char !== " "){
                str = str + char;
            }
        }
        return str.split("").reverse().join("");
        
    } 
    
    else if ( inputString.length % 5 === 0 ) {
        let codes = [];
        for ( let i = 0; i < inputString.length; i ++) {
            codes.push(inputString.charCodeAt(i));
        }
        return codes;

    }


}

console.log(challenge2("Hamburger"));
console.log(challenge2("Pizza"));
console.log(challenge2("Chocolate Chip Cookie"));