// 사이즈 조절

window.addEventListener('resize',function(){
  console.log(window.innerWidth)
  if(window.innerWidth<=1230){
    document.querySelectorAll('.bottom_inf_list_content')[0].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[1].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[2].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[3].classList.add('hide')

    document.querySelector('.exit_btn').classList.remove('hide')


  } else {
    document.querySelectorAll('.bottom_inf_list_content')[0].classList.remove('hide')
    document.querySelectorAll('.bottom_inf_list_content')[1].classList.remove('hide')
    document.querySelectorAll('.bottom_inf_list_content')[2].classList.remove('hide')
    document.querySelectorAll('.bottom_inf_list_content')[3].classList.remove('hide')

    document.querySelector('.exit_btn').classList.add('hide')

  }
})


window.addEventListener('load',function(){
  if(window.innerWidth<=1230){
    document.querySelectorAll('.bottom_inf_list_content')[0].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[1].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[2].classList.add('hide')
    document.querySelectorAll('.bottom_inf_list_content')[3].classList.add('hide')

    document.querySelector('.exit_btn').classList.remove('hide')

} else {
    document.querySelector('.exit_btn').classList.add('hide')
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


// 네비바
document.querySelector('.navbar_device').addEventListener('mouseover',function(){

  document.querySelector('.navbar_device').style.color='red';
  document.querySelector('.navbar_device i').style.color='red';
  document.querySelector('.navbar_device').style.borderBottom = "4px solid red";

  if(window.innerWidth>=1230){
  document.querySelector('.navbar_device_inf').style.height='280px'
  } else if ((window.innerWidth<1230 && window.innerWidth>868)){
    document.querySelector('.navbar_device_inf').style.height='290px'
  } else if((window.innerWidth<=868)) {
    document.querySelector('.navbar_device_inf').style.height='500px'
  }
})

document.querySelector('.navbar_device').addEventListener('mouseout',function(){
  document.querySelector('.navbar_device').style.color='black';
  document.querySelector('.navbar_device i').style.color='#C0C0C0';
  document.querySelector('.navbar_device').style.borderBottom = "1px solid silver";


  document.querySelector('.navbar_device_inf').style.height='0px'

})




