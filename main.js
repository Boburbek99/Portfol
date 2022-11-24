


const prev=document.getElementById('btn-prew'),
      next=document.getElementById('btn-next'),
      slides=document.querySelectorAll('.slide'),
      dots=document.querySelectorAll('.dot');
     
let indexSlider=0;
const activeSlide=function(n)
{
  for(slide of slides)
  {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDots=function(n)
{
 
  for(dot of dots)
  {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');

};

function currontSlide(ind)
{
  activeSlide(ind);
  activeDots(ind);
}



function nextSlider()
{
  if(indexSlider==slides.length-1)
  {
    indexSlider=0;
    currontSlide(indexSlider);
  }
  else{
    indexSlider++;
    currontSlide(indexSlider);
  }
}
function prewSlider()
{
  if(indexSlider==0)
  {
    indexSlider=slides.length-1;
  
    currontSlide(indexSlider);
  }
  else
  {
    indexSlider--;
    currontSlide(indexSlider);
  }
}
next.addEventListener('click',nextSlider);
prev.addEventListener('click',prewSlider);

dots.forEach((item,indexDot) => {
  item.addEventListener('click',()=>
  {
     indexSlider=indexDot;
     currontSlide(indexSlider);
  });
});
setInterval(nextSlider,2500);







 
 