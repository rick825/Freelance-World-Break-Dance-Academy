window.onload = function(){
  popup();
}


function popup(){

	var signupbtn = document.querySelectorAll('.signupbtn');
    var signuppop = document.querySelector('.signup');
    var backblur = document.querySelector('.backblur');
    var loginbtn = document.querySelectorAll('.loginbtn');
    var loginpop = document.querySelector('.login');
    var closebtn = document.querySelectorAll('.popupclose');
    var inputcap = document.querySelector('.inputcap');
    var createpost = document.querySelector('.createpost');

var i;

 for(i = 0; i < signupbtn.length; i++){
	signupbtn[i].addEventListener('click',()=>{
       signuppop.classList.add('signupshow');
       backblur.classList.add('backblurshow');
       loginpop.classList.remove('loginshow');
	});
}

 for(i = 0; i < loginbtn.length; i++){
	loginbtn[i].addEventListener('click',()=>{
     loginpop.classList.add('loginshow');
      backblur.classList.add('backblurshow');
      signuppop.classList.remove('signupshow');
	});
}

for(i = 0; i < closebtn.length; i++){
  closebtn[i].addEventListener('click',()=>{
      signuppop.classList.remove('signupshow');
      loginpop.classList.remove('loginshow');
       createpost.classList.remove('createpostshow');
      backblur.classList.remove('backblurshow');
  });

  inputcap.addEventListener('click',()=>{
   createpost.classList.add('createpostshow');
    signuppop.classList.remove('signupshow');
      loginpop.classList.remove('loginshow');
       backblur.classList.add('backblurshow');
  });
}



}