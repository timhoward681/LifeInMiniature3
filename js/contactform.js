$(document).ready(function() {
  $('.submit').click (function (event) {
     console.log('clicked button')
   
  var yourName = $('.yourName').val()
  var email = $('.emailadd').val()
  var newsletter = $('.newsletter').val()  
  

  if(email.includes('@') && email.includes('.')){
      console.log('<div>Email is valid</div>')
      } else { 
          event.preventDefault ()
          var validations = $(".validation")
          validations[0].innerHTML = ('<div>Email is not valid</div>')
         }

     
   })
})


