
// $(".header-nav-link:nth-of-type(1)").click(function(){
//     $("header").classList.add(('header-bg2'));
//   })

// =====================navbar-link-on-hover-background-change======================================

$(".header-nav-link").mouseenter(function(){
    $("header").addClass('header-bg2');
   })
   $(".header-nav-link").mouseleave(function(){
     $("header").removeClass('header-bg2');
   })


   $(".header-nav-link").mouseenter(function(){
    $("workplace").addClass('header-bg2');
   })
   $(".header-nav-link").mouseleave(function(){
     $("workplace").removeClass('header-bg2');
   })


  //  =========================search-button-toggle=====================================

   $(document).ready(function(){
    $("#search-icon").click(function(){    
      if( $('.search-toggle-icon').css("display")=="block"){
        $('.search-toggle-icon').css("display","none");
      }else{
        $('.search-toggle-icon').css('display', 'block');
      }
    });    
  });

//  =========================user-button-toggle=====================================

  $(document).ready(function(){
    $("#user-icon").click(function(){    
      if( $('.user-toggle-icon').css("display")=="block"){
        $('.user-toggle-icon').css("display","none");
      }else{
        $('.user-toggle-icon').css('display', 'block');
      }
    });  


    $(".download-icon").click(function(){
      $(".image-overlay-box").addClass('show-overlay-download');
     })
  
    
  });

    /*
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("bottom-header");
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }*/

    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("bottom-header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




    // $('.video-section').on('click', function () {
    //   $(this).children().css({
    //     'z-index' : 1,
    //     'opacity': 1
    //   });
    // $(this).children().trigger('play');
      
    // });

    // $('#myVideo').on('click', function () {
    // console.log('a');
    // });



    // $(document).ready(function(){
    //   $("playbutton").click(function(){
    //     $("playbutton").toggle();
    //   });
    // });

// =====video button hide show ======================

  $(".video-section video").on('click',function(){
  if($(".video-section button").css('display')!="none"){
    $(".playbutton").hide();
  }else{
    $(".playbutton").show();
  }
  
})
 

 
function myFunction() { 
  var vid = document.getElementById("myVideo");
  document.getElementById("mySpan").innerHTML = "Seeking: " + vid.seeking;
} 
 
