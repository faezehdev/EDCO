const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(" active", "")
    btns[i].className += ' active'
    console.log(current[0].className);
  })
 

  }
  const nav =document.querySelector('#nav')
  window.addEventListener('scroll',()=>{
      if (window.scrollY > nav.offsetTop) {    
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');    
        }
  })