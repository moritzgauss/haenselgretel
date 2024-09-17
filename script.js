document.addEventListener('mousemove', function(e) {
      // Create a dot element
      const dot = document.createElement('div');
      dot.classList.add('dot');

      // Set the position of the dot
      dot.style.left = `${e.pageX - 2.5}px`; // Centering the dot (5px / 2)
      dot.style.top = `${e.pageY - 2.5}px`;

      // Append the dot to the body
      document.body.appendChild(dot);

      // Remove the dot after 300 milliseconds
      setTimeout(() => dot.remove(), 300);
    });
