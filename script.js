let music = document.getElementById("music");

function openLetter(){

music.play().then(() => {
    console.log("Music started");
}).catch(error => {
    console.log("Music blocked:", error);
});

typing(
" I know I made mistakes... but you are very special to me. I don't want fights, I want your smile ❤️",
"text1"
);

}



function typing(text,id){

let i=0;

let speed=40;

let element=document.getElementById(id);


function type(){

if(i<text.length){

element.innerHTML+=text.charAt(i);

i++;

setTimeout(type,speed);

}

}

type();

}




function nextPage(page){

document.querySelectorAll(".page")
.forEach(x=>x.classList.add("hidden"));


document.getElementById("page"+page)
.classList.remove("hidden");



if(page==2){

typing(
"Let's restart everything with true and pure intentions ❤️ No more quarrels. No more fights. Only love, love and love 💕",
"text2"
);

}



if(page==3){

typing(
"Let's create beautiful memories together and make this journey amazing forever 🧸❤️",
"text3"
);

}

}




function journeyClick(){

let message = "❤️ Ishita clicked the journey button! Our beautiful journey starts 🧸💕";

let botToken = "8098002315:AAElVMVmJp46JMuwrvbTHns30Y8R_t9iAJ8";
let chatId = "617023587";


let url =
`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;


fetch(url)
.then(response => response.json())
.then(data => {


alert("Our journey begins ❤️🧸");


let screen = document.getElementById("videoScreen");

screen.classList.add("show");


let video = document.getElementById("loveVideo");

video.play();


})
.catch(error => {

console.log(error);

alert("Something went wrong");

});

