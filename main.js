// 사이즈 조절

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

$(window).resize(function(){
  if(window.innerWidth<=1230){
    $('.exit_btn').removeClass('hide')
  } else {
    $('.exit_btn').addClass('hide')
  }
});

$(window).ready(function(){
  if(window.innerWidth<=1230){
    $('.exit_btn').removeClass('hide')
  } else {
    $('.exit_btn').addClass('hide')
  }
});


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




// 하단 안내판

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
// document.querySelector('.navbar_device').addEventListener('mouseover',function(){


//   if(window.innerWidth>=1230){
//   document.querySelector('.navbar_device_inf').style.height='280px';

//   } else if ((window.innerWidth<1230 && window.innerWidth>868)){
//     document.querySelector('.navbar_device_inf').style.height='290px';

//   } else if((window.innerWidth<=868)) {
//     document.querySelector('.navbar_device_inf').style.height='500px';

//   }
// })

// document.querySelector('.navbar_device').addEventListener('mouseout',function(){

//   if(window.innerWidth>=1230){
//   document.querySelector('.navbar_device_inf').style.height='0px';

//   } else if ((window.innerWidth<1230 && window.innerWidth>868)){
//     document.querySelector('.navbar_device_inf').style.height='0px';

//   } else if((window.innerWidth<=868)) {
//     document.querySelector('.navbar_device_inf').style.height='0px';
//   }

// })

// document.querySelector('.navbar_device_inf').addEventListener('mouseover',function(){


//   if(window.innerWidth>=1230){
//   document.querySelector('.navbar_device_inf').style.height='280px';

//   } else if ((window.innerWidth<1230 && window.innerWidth>868)){
//     document.querySelector('.navbar_device_inf').style.height='290px';

//   } else if((window.innerWidth<=868)) {
//     document.querySelector('.navbar_device_inf').style.height='500px';

//   }
// })

// document.querySelector('.navbar_device_inf').addEventListener('mouseout',function(){

//   if(window.innerWidth>=1230){
//   document.querySelector('.navbar_device_inf').style.height='0px';

//   } else if ((window.innerWidth<1230 && window.innerWidth>868)){
//     document.querySelector('.navbar_device_inf').style.height='0px';

//   } else if((window.innerWidth<=868)) {
//     document.querySelector('.navbar_device_inf').style.height='0px';
//   }

// })

// document.querySelector('.exit_btn').addEventListener('click',function(){
//   document.querySelector('.navbar_device_inf').style.height='0px';
// })


// document.querySelector('.navbar_device').addEventListener('click',function(){

//   if(window.innerWidth>=1230){
//   document.querySelector('.navbar_device_inf').style.height='280px';

//   } else if ((window.innerWidth<1230 && window.innerWidth>868)){
//     document.querySelector('.navbar_device_inf').style.height='290px';

//   } else if((window.innerWidth<=868)) {
//     document.querySelector('.navbar_device_inf').style.height='500px';

//   }
// })























function detail (a,b,c,d,e){

  document.querySelector(a).addEventListener('mouseover',function(){


    if(window.innerWidth>=1230){
    document.querySelector(b).style.height=c;
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      document.querySelector(b).style.height=d;
  
    } else if((window.innerWidth<=868)) {
      document.querySelector(b).style.height=e;
  
    }
  })
  
  document.querySelector(a).addEventListener('mouseout',function(){
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height='0px';
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      document.querySelector(b).style.height='0px';
  
    } else if((window.innerWidth<=868)) {
      document.querySelector(b).style.height='0px';
    }
  
  })
  
  document.querySelector(b).addEventListener('mouseover',function(){
  
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height=c;
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      document.querySelector(b).style.height=d;
  
    } else if((window.innerWidth<=868)) {
      document.querySelector(b).style.height=e;
  
    }
  })
  
  document.querySelector(b).addEventListener('mouseout',function(){
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height='0px';
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      document.querySelector(b).style.height='0px';
  
    } else if((window.innerWidth<=868)) {
      document.querySelector(b).style.height='0px';
    }
  
  })
  
  // document.querySelector('.exit_btn').addEventListener('click',function(){
  //   document.querySelector(b).style.height='0px';
  // })
  
  $('.exit_btn').click(function(){
    document.querySelector(b).style.height='0px';
  })

  
  document.querySelector(a).addEventListener('click',function(){
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height=c;
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      document.querySelector(b).style.height=d;
  
    } else if((window.innerWidth<=868)) {
      document.querySelector(b).style.height=e;
  
    }
  })


}

detail('.navbar_device','.navbar_device_inf','280px','290px','500px')
detail('.navbar_software','.navbar_software_inf','280px','290px','600px')