document.addEventListener("DOMContentLoaded", function() {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1200,
            once: true
        });
    } else {
        console.error("AOS failed to load!");
    }
});

  particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('Particles loaded!');
  });

  const textElement = document.getElementById("typing-effect");
    const textArray = ["Bollywood Love", "Puppies & Happiness", "Lilac Dreams"];
    let index = 0;
    let charIndex = 0;
    
    function typeText() {
      if (charIndex < textArray[index].length) {
        textElement.innerHTML += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
      } else {
        setTimeout(eraseText, 1000);
      }
    }
  
    function eraseText() {
      if (charIndex > 0) {
        textElement.innerHTML = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
      } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, 500);
      }
    }
  
    typeText();

    function createFallingRose() {
        const rose = document.createElement("img");
        const roseImages = ["images/rose1.pjg", "images/rose2.jpg", "images/rose3.jpg"];
        
        rose.src = roseImages[Math.floor(Math.random() * roseImages.length)];
        rose.className = "falling-rose";
        
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Random speed
        rose.style.opacity = Math.random();
        rose.style.width = (Math.random() * 40 + 20) + "px"; // Random sizes
        
        document.getElementById("falling-roses").appendChild(rose);
    
        // Remove the element after animation
        setTimeout(() => {
          rose.remove();
        }, 5000);
      }
    
      // Generate roses at intervals
      setInterval(createFallingRose, 300);

      function startRoseEffect() {
        for (let i = 0; i < 30; i++) {
          setTimeout(createFallingRose, i * 200);
        }
      }

gsap.from("#home h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.3,
});

function createFloatingHearts() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) {
        console.error("Hero section not found!");
        return;
    }
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      heroSection.appendChild(heart);
      console.log("Heart added!");
    }
  }
  
  createFloatingHearts();