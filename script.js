// Get the hacking text element by its ID
const hackingText = document.getElementById('hacking-text');

// Define the blinking animation
const blinkingAnimation = anime({
  targets: hackingText,
  opacity: [1, 0], // Blink from visible to hidden
  duration: 500, // Duration of each blink (in milliseconds)
  loop: true, // Repeat the animation indefinitely
  easing: 'linear', // Linear easing for a simple blink effect
});
