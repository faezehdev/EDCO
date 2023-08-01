let product = document.getElementsByClassName('product')
for(let i = 0; i<product.length;i++){
    product[i].addEventListener('mouseover',(e)=>{
    e.stopPropagation()
    hover(e.target)
    })
}
let hover = (Currentelem)=>{
    
    for(let i = 0; i<product.length;i++){
        
        if(product[i].id=== Currentelem.id){
            console.log(product[i].id);
            product[i].classList.add('active')
        }
        
        product[i].style.opacity='.7'
    }
}
for(let i = 0; i<product.length;i++){
    product[i].addEventListener('mouseleave',(e)=>{
   
        product[i].style.opacity='1'
    product[i].classList.remove('active')

    })
}
const row = document.querySelector('.listProduct #sec2 .two .row2')
row.addEventListener('mouseover',(e)=>{
  
        for(let i = 0; i<product.length;i++){{
            product[i].style.opacity='1'
        }
    }
   
})
const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
})