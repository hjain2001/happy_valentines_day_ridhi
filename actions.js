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

document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 150, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: 'image', // Change the shape to an image
        image: {
          src: 'images/heart.png', // Replace with the path to your puppy icon image
          width: 30, // Set the size of the image
          height: 30 // Set the size of the image
        }
      },
      opacity: {
        value: 0.8, // Set the opacity
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 26, // Size of the particles
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 10,
          sync: false
        }
      },
      line_linked: {
        enable: false, // Disable the lines between particles (optional)
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'attract'
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
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
        const roseImages = ["images/rose.png", "images/rose.png", "images/rose.png"];
        
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
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#hero h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });

    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
    });
  });
// function createFloatingHearts() {
//     const heroSection = document.getElementById('hero');
//     if (!heroSection) {
//         console.error("Hero section not found!");
//         return;
//     }
//     for (let i = 0; i < 10; i++) {
//       const heart = document.createElement('div');
//       heart.className = 'floating-heart';
//       heart.style.left = Math.random() * 100 + 'vw';
//       heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
//       heroSection.appendChild(heart);
//       console.log("Heart added!");
//     }
//   }
  
//   createFloatingHearts();