let x = 0;

const codeText = ` 

$(document).ready(function () {
  $(window).scroll(function () {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 550) {
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible');
      } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');
      }

  });
});


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function () {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
  });
});

`;

document.querySelector('xmp').textContent = codeText;

x = 0;

document.addEventListener('keydown', (e) => {
  // keeps updated text on screen
  document.querySelector('html, body').style.bottom = '0';

  // backspace or any other key
  if (e.keyCode == 8) {
    // delete one character
    if (x > 0) {
      const code = document.querySelector('xmp').textContent;
      document.querySelector('#code').textContent = code.substring(0, document.querySelector('#code').textContent.length - 1);
      x--;
    }
  } else {
    // add one character as long as we are not at the end
    if (x < document.querySelector('xmp').textContent.length) {
      const code = document.querySelector('xmp').textContent;
      document.querySelector('#code').textContent = code.substring(0, x);
      x++;
    }
  }
});

// cursor
setInterval(() => {
  document.querySelector('#cursor').style.display = (document.querySelector('#cursor').style.display === 'none') ? 'inline' : 'none';
}, 450);
