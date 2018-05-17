//encrypt
document.getElementById("encrypt").oninput = function()  {
    const offset = 3;
    let help = document.getElementById("help");
    let str = this.value;
    
    // !!!!!! from char to code
    let encrypt_out = "";
    
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code += offset;
        encrypt_out += String.fromCharCode(code);
    }  
    document.getElementById("encrypt_out").innerHTML = encrypt_out;
}

//decrypt
document.getElementById("decrypt").oninput = function()  {
    const offset = 3;
    let str = this.value;
    
    // !!!!!! from char to code
    let decrypt_out = "";
    
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code -= offset;
        decrypt_out += String.fromCharCode(code);
    }  
    document.getElementById("decrypt_out").innerHTML = decrypt_out;
}