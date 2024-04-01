function swapCase(inputString) {
    let swappedString = '';
    for (let char of inputString) {
        switch (true) {
            case char >= 'a' && char <= 'z':
                swappedString += char.toUpperCase();
                break;
            case char >= 'A' && char <= 'Z':
                swappedString += char.toLowerCase();
                break;
            default:
                swappedString += char;
        }
    }
    return swappedString;
}

let inputString = 'The Quick Brown Fox';
let outputString = swapCase(inputString);
console.log(outputString); 
