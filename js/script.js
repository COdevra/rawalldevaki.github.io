document.addEventListener('DOMContentLoaded', function() {
    var arrowLinks = document.querySelectorAll('.arrow-link');
    
    for (var i = 0; i < arrowLinks.length; i++) {
      arrowLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        // Handle the click event here
        console.log('Arrow link clicked');
      });
    }
  });
  