var imageList= Array.from(document.querySelectorAll(".item-image"))
var popup= document.querySelector(".light-container");

const closeButton=document.querySelector("#Close");
const NextButton=document.querySelector("#Next");
const prevButton=document.querySelector("#Prev");

var currentIndex=0;

for(let i=0;i<imageList.length;i++)
{
    imageList[i].addEventListener('click',function(e)
    {
        var imagesrc=e.target.getAttribute('src');
        popup.classList.replace('d-none','d-flex');
        popup.firstElementChild.style.backgroundImage=`url(${imagesrc})`;
       currentIndex=imageList.indexOf(e.target);
    })
}

function Slide(index)
{
    console.log(currentIndex);
    currentIndex=(currentIndex + index)%(imageList.length);
    console.log(currentIndex);
    if(currentIndex==-1)
        currentIndex=5;
    console.log(currentIndex);
    var nextImage=imageList[currentIndex].getAttribute('src');
    popup.firstElementChild.style.backgroundImage=`url(${nextImage})`;
}

NextButton.addEventListener('click',function()
{
    Slide(1);
})
prevButton.addEventListener('click',function()
{
    Slide(-1);
})
document.addEventListener('keydown',function(e){
if(e.key==="ArrowRight")
    Slide(1);
if(e.key==="ArrowLeft")
    Slide(-1);
if(e.key==="Escape")
    popup.classList.replace('d-flex','d-none');
})





closeButton.addEventListener('click',function(e)
{
    popup.classList.replace('d-flex','d-none');
})