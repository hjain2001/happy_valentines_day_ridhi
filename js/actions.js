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

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  class Particle {
      constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 5 + 2;
          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
          if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
      }
  }

  function init() {
      for (let i = 0; i < 100; i++) {
          particles.push(new Particle());
      }
  }

  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
          p.update();
          p.draw();
      });
      requestAnimationFrame(animate);
  }

  init();
  animate();
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
        const roseImages = ["images/rose1.jpg", "images/rose2.jpg", "images/rose3.jpg"];
        
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

document.addEventListener("DOMContentLoaded", function () {
  function createFloatingHeart() {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(heart);
      
      setTimeout(() => heart.remove(), 5000);
  }

  setInterval(createFloatingHeart, 300);
});
