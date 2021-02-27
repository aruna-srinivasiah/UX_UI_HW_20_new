
console.log("Your index.js file is loaded correctly!");

// B. Create a jQuery Event Listener That Triggers a UI Interaction

// $('body').load(function() {
  //  $("backgroundImg").fadeIn();
// }); 

// $(document).ready(function() {
   // $("inline-block").hover(){
      //      $(this).css("background-color", "black");
      //  }
  //  })
 // });

   /* $(document).ready(function(){
    $("a").hover(function(){
        background-color: black; 
    });
  }); */

  // $("#background").bind("load", function () { $(this).fadeIn(); });
  $(document).ready(function() { 
   $('.background').delay(1000).animate({'opacity':'1'},3000);
  });

// $('.background').animate({'opacity':'1'},1000);

// $(document).ready(function(){
 // $("a").hover(function(){
   //   background-color: black;
  // }); 
// }); 


 // $('#background').delay(600).animate({'opacity':'1'},800);
  //invoke background fadein on page load 
  //  $(document).load(function() {      
 //   $('#background').fadeIn("slow"); 
    //fadeIn rate in milliseconds. 
    //A higher number = slower fadeIn rate 
  //  });  