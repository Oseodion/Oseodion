const texts = ["a {web developer}", "a graphic designer", "a {frontend dev}", "electrical engr"];

  // Time interval for text change (in milliseconds)
  const interval = 2000;

  // Function to update the text
  function updateText() {
    const textContainer = document.getElementById("portfolio-text");
    let currentIndex = 0;

    setInterval(() => {

      textContainer.style.opacity = 0;
      setTimeout(() => {
      textContainer.innerHTML = texts[currentIndex];
      textContainer.style.opacity = 1;
      currentIndex = (currentIndex + 1) % texts.length;
    }, 1000);
  },interval);
  }

  // Call the function on page load
  window.onload = updateText;