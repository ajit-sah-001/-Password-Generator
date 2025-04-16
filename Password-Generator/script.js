function genepassword() {
    // get tik value 
    const uppercse = document.getElementById('uppercase').checked
    const lowercse = document.getElementById('lowercase').checked
    const number = document.getElementById('numbers').checked
    const symbol = document.getElementById('symbols').checked
    // get the cursor value 
    const slider = document.getElementById('length-slider').value

    const uppercasechar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercasechar =  "abcdefghijklmnopqrstuvwxyz";
    const numberchar =  "0123456789";
    const symbolchar = "!@#$%^&*()-_+=[]{}|;:,.<>?/";

    allchar = '';
    password = '';

    if(uppercse == true){
        allchar = allchar+uppercasechar
    }
    if(lowercse == true){
        allchar = allchar+lowercasechar
    }
    if(number == true){
        allchar = allchar+numberchar
    }
    if(symbol == true){
        allchar = allchar+symbolchar
    }

    for (let J = 0; J < slider; J++) {
        let randompas = Math.floor(Math.random() * allchar.length)
        password = password + allchar[randompas]
    }
    document.getElementById('password').value=password
}
function slider (){
   let slider =  document.getElementById('length-slider').value
   document.getElementById('length-value').innerText=slider
}
