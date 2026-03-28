const categoryList = document.querySelectorAll("#filterList li");

const allCards = document.querySelectorAll("#card-gallery-wrapper li");

function onFilterClick(e) {
    const categoryNumber = e.target.getAttribute("data-group");
    
    allCards.forEach((card) => {
        if (categoryNumber == "0") {
            card.classList.remove("hidden");
        }
        else if (card.getAttribute("data-group") == categoryNumber) { 
             card.classList.remove("hidden");
        }
        else { 
             card.classList.add("hidden");
        }
    });
}
categoryList.forEach((item) => {
   item.addEventListener("click", onFilterClick); 
});

const words = [
"Tech Enthusiast",
"Freelancer",
"Future Front-End Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
document.getElementById("changing-text").textContent =
currentWord.substring(0,j-1);
j--;

}else{
document.getElementById("changing-text").textContent =
currentWord.substring(0,j+1);
j++;
}

if(!isDeleting && j === currentWord.length){

isDeleting = true;
setTimeout(type,1200);
return;

}else if(isDeleting && j === 0){

isDeleting = false;
i++;

if(i === words.length){
i = 0;
}

}

setTimeout(type, isDeleting ? 60 : 120);

}
type();


