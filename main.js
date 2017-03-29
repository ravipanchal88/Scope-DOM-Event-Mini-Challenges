$(document).ready(function(){
 /* code for Objective 1*/
    $(".arrow-left").hide(); // CSS to hide the arrows in the labe;
    $(".arrow-right").hide();

    $(".img").click(function() {
    var x = $("#label1").text(); //getting the text of the label
    console.log(x);
  	if(x == "I am Right") {
      
  		$("#label1").text("No,I am Right");
      $("#button1").prop('disabled', true); // Disabling one speaker
      $('#button2').prop('disabled', false);// Enabling the other speaker
      $(".arrow-left").show();
      $(".arrow-right").hide();
  	  }		else {
        console.log("y");
  		$("#label1").text("I am Right");
      $('#button1').prop('disabled', false);
      $('#button2').prop('disabled', true);
      $('.arrow-left').hide();
      $('.arrow-right').show();
     	}
    });

  // code for Objective 2 - REMOVE comment tags to activate the function*/
 $("p").hover(function(){
    alert("I said Not to Hover over me");
  }) ;

  //code for Objective 3
    $("#obj3").on("keyup", function() {
    $("#target").html($(this).val());
    });

  // code for Objective 4
  function checkpwd(){
    var x = $('#txt_password').val();
    console.log(x);
    if (x === "12345678"){
      return(true);
      } else {
      var pwdvalidation = false;
      return(false);
     }
  }

  function usrname(){
      var mystringarray = [...$("#txt_username").val()];
      for(i=0 ; i < mystringarray.length ; i++) {
          if (mystringarray[i] >= '0' && mystringarray[i] <= '9'){
          return(true);
        } 
      }
  }

  $("#login").click(function()  {
     if (usrname() && checkpwd()){
            // alert("Success");
            $("#message").html("Login Success");

            } else {
            alert("Incorrect : Username should have a Number and password should be 12345678");
            }
    });
});




			 