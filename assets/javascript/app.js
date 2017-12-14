$(document).ready(function() {
    var counter = 10;
    function startTimer(){
        
    
        setInterval(function() {
          
            counter--;
          if (counter >= 0) {
            span = document.getElementById("#timer");
            span.innerHTML = counter;
          }
          if (counter === 0) {
              alert('sorry, out of time');
              clearInterval(counter);
          }
        }, 1000);
      }
      $(".btn").click(function(){
          startTimer();
       });
    


});