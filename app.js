function encryptText(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
       
        if (char >= 'a' && char <= 'z') {
            let shiftedCharCode = char.charCodeAt(0) + 3;
            if (shiftedCharCode > 'z'.charCodeAt(0)) {
                shiftedCharCode -= 26;
            }
            result += String.fromCharCode(shiftedCharCode);
        } else {
            result += char; 
        }
    }
    return result;
}


function decryptText(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
    
        if (char >= 'a' && char <= 'z') {
            let shiftedCharCode = char.charCodeAt(0) - 3;
           
            if (shiftedCharCode < 'a'.charCodeAt(0)) {
                shiftedCharCode += 26;
            }
            result += String.fromCharCode(shiftedCharCode);
        } else {
            result += char;
        }
    }
    return result;
}


document.querySelector('.encrypt').addEventListener('click', () => {
    let inputText = document.querySelector('textarea').value;
    let encryptedText = encryptText(inputText);
    document.querySelector('textarea').value = encryptedText;
});

document.querySelector('.decrypt').addEventListener('click', () => {
    let inputText = document.querySelector('textarea').value;
    let decryptedText = decryptText(inputText);
    document.querySelector('textarea').value = decryptedText;
});
