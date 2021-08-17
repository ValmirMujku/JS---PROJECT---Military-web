 var butoni = document.getElementById('butoniRM');
 var dots = document.getElementById("dots");
 var moreText = document.getElementById("more");
 var img = document.getElementById('acadimg');

//addEventListener/
 butoni.addEventListener('click', function(){
     
    if(dots.style.display ==='none'){
        dots.style.display = 'inline';
        butoni.innerHTML = 'Read More';
        moreText.style.display = 'none';
        img.id = 'acadimg'; 
    }else{
        dots.style.display ='none';
        butoni.innerHTML = 'Read Less';
        img.id = 'acadimg2'; 
        moreText.style.display = 'inline';
    } 
 });

 //part two
 var butoni2 = document.getElementById('butoniRM2');
 var dots2 = document.getElementById('dots2');
 var moreText2 = document.getElementById('more2');
 var img2 = document.getElementById('acadimg3');

 butoni2.addEventListener('click', function(){
     if(dots2.style.display === 'none'){
         dots2.style.display = 'inline';
         butoni2.innerHTML = 'Read More';
         moreText2.style.display = 'none';
         img2.id = 'acadimg3';
     }else{
         dots2.style.display = 'none';
         butoni2.innerHTML = 'Read Less';
         moreText2.style.display = 'inline';
         img2.id = 'acadimg4';
     }
 });

//  part three 
acadimg5
var butoni3 = document.getElementById('butoniRM3');
var dots3 = document.getElementById('dots3');
var moreText3 = document.getElementById('more3');
var img3 = document.getElementById('acadimg5');

butoni3.addEventListener('click', function(){
    if(dots3.style.display === 'none'){
        dots3.style.display = 'inline';
        butoni3.innerHTML = 'Read More';
        moreText3.style.display = 'none';
        img3.id = 'acadimg5';
    }else{
        dots3.style.display = 'none';
        butoni3.innerHTML = 'Read Less';
        moreText3.style.display = 'inline';
        img3.id = 'acadimg6';
    }
});

//part four

var butoni4 = document.getElementById('butoniRM4');
var dots4 = document.getElementById('dots4');
var moreText4 = document.getElementById('more4');
var img4 = document.getElementById('acadimg7');

butoni4.addEventListener('click', function(){
    if(dots4.style.display === 'none'){
        dots4.style.display = 'inline';
        butoni4.innerHTML = 'Read More';
        moreText4.style.display = 'none';
        img4.id = 'acadimg7';
    }else{
        dots4.style.display = 'none';
        butoni4.innerHTML = 'Read Less';
        moreText4.style.display = 'inline';
        img4.id = 'acadimg8';
    }
});

//part five

var butoni5 = document.getElementById('butoniRM5');
var dots5 = document.getElementById('dots5');
var moreText5 = document.getElementById('more5');
var img5 = document.getElementById('acadimg9');

butoni5.addEventListener('click', function(){
    if(dots5.style.display === 'none'){
        dots5.style.display = 'inline';
        butoni5.innerHTML = 'Read More';
        moreText5.style.display = 'none';
        img5.id = 'acadimg9';
    }else{
        dots5.style.display = 'none';
        butoni5.innerHTML = 'Read Less';
        moreText5.style.display = 'inline';
        img5.id = 'acadimg10';
    }
});


//part four

function checkYear(evt, year) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(year).style.display = "block";
    evt.currentTarget.className += " active";
  }