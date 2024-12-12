let cumle = prompt("Lütfen bir cumle giriniz");
let harfSayilari={};

for(i=0; i<cumle.length; i++){
    let word = cumle[i];

    if(word!==" "){
       
        if(harfSayilari[word]){
            harfSayilari[word]=harfSayilari[word]+1;
        } else{
            harfSayilari[word]=1;
        }
    }
}

console.log(harfSayilari);
