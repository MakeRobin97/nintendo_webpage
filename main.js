window.addEventListener('resize',function(){
  console.log(window.innerWidth)
  if(window.innerWidth<=1230){
    document.querySelectorAll('.bottom_inf_list_content')[0].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[1].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[2].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[3].classList.add('hide')

  } else {
    document.querySelectorAll('.bottom_inf_list_content')[0].classList.remove('hide')
    document.querySelectorAll('.bottom_inf_list_content')[1].classList.remove('hide')
    document.querySelectorAll('.bottom_inf_list_content')[2].classList.remove('hide')
    document.querySelectorAll('.bottom_inf_list_content')[3].classList.remove('hide')
  }
})


window.addEventListener('load',function(){
  if(window.innerWidth<=1230){
    document.querySelectorAll('.bottom_inf_list_content')[0].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[1].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[2].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[3].classList.add('hide')

}
})



document.querySelectorAll('.bottom_inf_list_title')[0].addEventListener('click',function(){
  if(window.innerWidth<=1230){
  document.querySelectorAll('.bottom_inf_list_content')[0].classList.toggle('hide');}
})

document.querySelectorAll('.bottom_inf_list_title')[1].addEventListener('click',function(){
  if(window.innerWidth<=1230){
  document.querySelectorAll('.bottom_inf_list_content')[1].classList.toggle('hide');}
})

document.querySelectorAll('.bottom_inf_list_title')[2].addEventListener('click',function(){
  if(window.innerWidth<=1230){
  document.querySelectorAll('.bottom_inf_list_content')[2].classList.toggle('hide');}
})

document.querySelectorAll('.bottom_inf_list_title')[3].addEventListener('click',function(){
  if(window.innerWidth<=1230){
  document.querySelectorAll('.bottom_inf_list_content')[3].classList.toggle('hide');}
})