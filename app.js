window.onscroll = function() {
  servScroll()
  cardScroll()
  dctscroll()
   instscroll()
};

function servScroll(){
  var i,j;
    var x = document.querySelectorAll(".scard");
    var y = document.querySelector('.servhead');
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
      
    for(i = 0; i < x.length;i++){
      x[i].classList.add('sscroll');
      y.classList.add('servheadscroll');
  }

  }else{
    for(i = 0; i < x.length;i++)
      x[i].classList.remove('sscroll');
    y.classList.remove('servheadscroll');
  }
}

function dctscroll(){
  var p = document.querySelectorAll('.dccontpic');
  var t = document.querySelectorAll('.dcconttext');
  if(document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250){
    for(i = 0 ; i < p.length ; i++){
      p[i].classList.add('dccontpicvis');
      t[i].classList.add('dcconttextvis');
    }
  }else{
      for(i = 0 ; i < p.length ; i++){
      p[i].classList.remove('dccontpicvis');
      t[i].classList.remove('dcconttextvis');
    }
    }
  }

function cardScroll(){
  var a = document.querySelectorAll('.card');
  var b = document.querySelector('.footer');
  if(document.body.scrollTop > 3550 || document.documentElement.scrollTop > 3550){
     for(i = 0; i < a.length;i++){
      a[i].classList.add('cscroll');
      
  }
  }else{
    for(i = 0; i < a.length;i++){
      a[i].classList.remove('cscroll'); 
          
  }
}

  if(document.body.scrollTop > 4250 || document.documentElement.scrollTop > 4250){
     b.classList.add('footerscroll');
   }else{
    b.classList.remove('footerscroll');
   }
   
}


function instscroll(){
 var intp1 = document.querySelector('.intp1');
 var inth1 = document.querySelector('.inth1');
  var intp2 = document.querySelector('.intp2');
 var inth2 = document.querySelector('.inth2');
  var intp3 = document.querySelector('.intp3');
 var inth3 = document.querySelector('.inth3');
  var intp4 = document.querySelector('.intp4');
 var inth4 = document.querySelector('.inth4');
  if(document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100){
    intp1.classList.add('intpanime');
    inth1.classList.add('intpanime');
  }else{
    intp1.classList.remove('intpanime');
     inth1.classList.remove('intpanime');
  }
   if(document.body.scrollTop > 2350 || document.documentElement.scrollTop > 2350){
    intp2.classList.add('intpanime');
    inth2.classList.add('intpanime');
  }else{
    intp2.classList.remove('intpanime');
     inth2.classList.remove('intpanime');
  }
   if(document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
    intp3.classList.add('intpanime');
    inth3.classList.add('intpanime');
  }else{
    intp3.classList.remove('intpanime');
     inth3.classList.remove('intpanime');
  }
   if(document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000){
    intp4.classList.add('intpanime');
    inth4.classList.add('intpanime');
  }else{
    intp4.classList.remove('intpanime');
     inth4.classList.remove('intpanime');
  }
}


// slide show dance style
function prev(){
    document.getElementById('dcslide').scrollLeft -= 800;
}

function next()
{
    document.getElementById('dcslide').scrollLeft += 800;
}
// end slide show dance style

