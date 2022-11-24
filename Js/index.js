var ofset=0;
var sliderLine=document.getElementsByClassName('.customer__item');
document.getElementsByClassName('.rigth__btn').addEventListener('click', function(){
  ofset+=250;
  sliderLine.style.right=-ofset+'px';
});