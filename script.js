 const quote = document.getElementById("quote");
 const author = document.getElementById("author");
 const volumeBtn = document.querySelector(".volume");
 const copyBtn = document.querySelector(".copy");

 const api_url = "https://api.quotable.io/random";

 async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    
quote.innerHTML = data.content;
author.innerHTML = data.author;
 }

 getquote(api_url);

 function post(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML  + " ――― by " + author.innerHTML, "Post window", "width=600", "height=300");
 }

 volumeBtn.addEventListener("click", () =>{
   let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML}`);
   speechSynthesis.speak(utterance);
 })
 copyBtn.addEventListener("click", () =>{
  navigator.clipboard.writeText(quote.innerHTML);
 })