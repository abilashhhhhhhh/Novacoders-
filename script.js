function encrypt(text, key) {
    key = key % 26;
    let result = "";

    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            let base = (char === char.toUpperCase()) ? 65 : 97;
            let x = char.charCodeAt(0) - base;
            result += String.fromCharCode((x + key) % 26 + base);
        } else {
            result += char;
        }
    }

    return result;
}

function decrypt(text, key) {
    return encrypt(text, -key);
}


// ---- Main Program ----
let msg = prompt("Enter Message:");
let key = parseInt(prompt("Enter Key (Shift Value):"));

let cipher = encrypt(msg, key);
console.log("Encrypted Message:", cipher);

let verifyKey = parseInt(prompt("Enter Key to decrypt:"));

if (verifyKey === key) {
    console.log("Original Message:", decrypt(cipher, verifyKey));
} else {
    console.log("Verification Failed! Access Denied.");
}