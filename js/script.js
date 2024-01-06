sentence=["awesome", "best", "great", "lovely", "important", "handsome", "custom", "worldwide"];
i = 0;
j= 0;
function typewriter(){
    if(i<sentence.length){
    o = sentence[i]
   typeposter(o)
    i++;
    };
}
function typeposter(o){
     if(j<o.length){
    document.getElementById('sc').innerHTML += o[j];
    j++;
    setTimeout(typeposter, 20);
    }
}
