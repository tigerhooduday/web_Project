document.addEventListener("DOMContentLoaded", function() {
    // Create an audio element
    var audio = new Audio('Sound.wav');

    audio.style.display = 'none';
    document.getElementsByClassName('part1').addEventListener('mouseover', function() {
        audio.play();
      });
      // Add event listener to play audio on hover
      document.getElementById('hoverElement').addEventListener('mouseover', function() {
        audio.play();
      });

      // Add event listener to pause audio when not hovering
      document.getElementById('hoverElement').addEventListener('mouseout', function() {
        audio.pause();
        audio.currentTime = 0;
      });
    });

