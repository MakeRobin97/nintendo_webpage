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
  } 

  
  else {
    $('.exit_btn').addClass('hide')
  }
});


// else if(window.innerWidth<1230 && window.innerWidth>868){
//   $('.exit_btn').addClass('hide')
// }

$(window).resize(function(){
  if(window.innerWidth>868){
    $('.left_btn').removeClass('hide')
    $('.right_btn').removeClass('hide')
  } else {
    $('.left_btn').addClass('hide')
    $('.right_btn').addClass('hide')
  }
})



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
      
      document.querySelector('.navbar_device_inf').style.height='0';
      document.querySelector('.navbar_software_inf').style.height='0';
      document.querySelector('.navbar_news_inf').style.height='0';
      document.querySelector('.navbar_character_inf').style.height='0';
      document.querySelector('.navbar_spanner_inf').style.height='0';
      document.querySelector('.navbar_shopping_inf').style.height='0';
      document.querySelector('.navbar_search_inf').style.height='0';


      document.querySelector(b).style.height=d;


  
    } else if((window.innerWidth<=868)) {

      document.querySelector('.navbar_device_inf').style.height='0';
      document.querySelector('.navbar_software_inf').style.height='0';
      document.querySelector('.navbar_news_inf').style.height='0';
      document.querySelector('.navbar_character_inf').style.height='0';
      document.querySelector('.navbar_spanner_inf').style.height='0';
      document.querySelector('.navbar_shopping_inf').style.height='0';
      document.querySelector('.navbar_search_inf').style.height='0';

      document.querySelector(b).style.height=e;
    }
  })
  
 


  document.querySelector(a).addEventListener('mouseout',function(){
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height='0px';
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      // document.querySelector(b).style.height='0px';
  
    } else if((window.innerWidth<=868)) {
      // document.querySelector(b).style.height='0px';
    }
  
  })
  
  document.querySelector(b).addEventListener('mouseover',function(){
  
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height=c;
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      // document.querySelector(b).style.height=d;
  
    } else if((window.innerWidth<=868)) {
      // document.querySelector(b).style.height=e;
      // console.log('mouseover');
    }
  })
  
  document.querySelector(b).addEventListener('mouseout',function(){
  
    if(window.innerWidth>=1230){
    document.querySelector(b).style.height='0px';
  
    } else if ((window.innerWidth<1230 && window.innerWidth>868)){
      // document.querySelector(b).style.height='0px';
  
    } else if((window.innerWidth<=868)) {
      // document.querySelector(b).style.height='0px';

    }
  
  })
  
  
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


  if(document.querySelector(b).style.height!=0){
    console.log(123);
  }


}

detail('.navbar_device','.navbar_device_inf','280px','290px','500px')
detail('.navbar_software','.navbar_software_inf','280px','290px','600px')

detail('.navbar_news','.navbar_news_inf','450px','500px','450px')


detail('.navbar_character','.navbar_character_inf','280px','290px','600px')
detail('.navbar_spanner','.navbar_spanner_inf','280px','290px','500px')
detail('.navbar_shopping','.navbar_shopping_inf','100px','200px','180px')
detail('.navbar_search','.navbar_search_inf','150px','190px','200px')



// 검색창 로직




function search_function(){
  
  if(document.querySelector('.input_box').value!=''){
    document.querySelector('.search_btn').style.cursor= 'pointer';
    document.querySelector('.search_btn').style.backgroundColor='black';
    document.querySelector('.search_btn').style.color='white';
    document.querySelector('.search_btn').addEventListener('mouseover',function(){
      document.querySelector('.search_btn').style.backgroundColor='#E60012';
      document.querySelector('.search_btn').style.color='white';
    })
    document.querySelector('.search_btn').addEventListener('mouseout',function(){
      document.querySelector('.search_btn').style.backgroundColor='black';
      document.querySelector('.search_btn').style.color='white';
    })
    
  } else if (document.querySelector('.input_box').value=='') {
    console.log('널');
    document.querySelector('.search_btn').style.removeProperty('cursor');
    document.querySelector('.search_btn').style.backgroundColor='silver';
    document.querySelector('.search_btn').style.color='#8C8C8C';
    document.querySelector('.search_btn').addEventListener('mouseover',function(){
      document.querySelector('.search_btn').style.backgroundColor='silver';
      document.querySelector('.search_btn').style.color='#8C8C8C';
    })
    document.querySelector('.search_btn').addEventListener('mouseout',function(){
      document.querySelector('.search_btn').style.backgroundColor='silver';
      document.querySelector('.search_btn').style.color='#8C8C8C';
    })
  }
}

document.querySelector('.search_bar_logo_remove').style.cursor='pointer';

document.querySelector('.search_bar_logo_remove').addEventListener('click',function(){
  document.querySelector('.input_box').value='';
  search_function();
})


document.querySelectorAll('.game_bar li')[0].addEventListener('click',function(){
  window.open('https://www.nintendo.co.kr/switch/argta/')
})

document.querySelectorAll('.game_bar li')[1].addEventListener('click',function(){
  window.open('https://www.nintendo.co.kr/zelda/totk/')
})

document.querySelectorAll('.game_bar li')[2].addEventListener('click',function(){
  window.open('https://www.nintendo.co.kr/switch/av5ja/')
})

document.querySelectorAll('.game_bar li')[3].addEventListener('click',function(){
  window.open('https://www.nintendo.co.kr/switch/sv/')
})

document.querySelectorAll('.game_bar li')[4].addEventListener('click',function(){
  window.open('https://www.nintendo.co.kr/switch/as8sa/')
})




// 빨간 버튼
$('.carousel').mouseover(function(){
   $('.left_btn').removeClass('hide_btn')
   $('.right_btn').removeClass('hide_btn')
})

$('.carousel').mouseout(function(){
  $('.left_btn').addClass('hide_btn')
  $('.right_btn').addClass('hide_btn')
})