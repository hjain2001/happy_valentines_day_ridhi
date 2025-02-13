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

      document.addEventListener("DOMContentLoaded", function () {
        const heroContainer = document.querySelector(".hero-image-container");
        const heroImage = document.querySelector(".hero-image");
        const heroVideo = document.querySelector(".hero-video");
    
        heroContainer.addEventListener("mouseenter", function () {
            heroImage.style.display = "none";  // Hide image
            heroVideo.style.display = "block"; // Show video
            heroVideo.play();  // Play video
        });
    
        heroContainer.addEventListener("mouseleave", function () {
            heroVideo.style.display = "none"; // Hide video
            heroImage.style.display = "block"; // Show image
            heroVideo.pause();  // Pause video when mouse leaves
            heroVideo.currentTime = 0;  // Reset video to start
        });
    });

  
    document.addEventListener("DOMContentLoaded", function () {

  
      document.querySelector(".yes-btn").addEventListener("click", function () {
        const yesButton = this;
        
        // Hide the button
        gsap.to(yesButton, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            onComplete: () => yesButton.remove()
        });
        // Position the heart near the clicked button
        let buttonRect = event.target.getBoundingClientRect();
        heart.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
        heart.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    
        // Create Hearts
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.src = "images/heart.png";
            heart.className = "heart-animation";
            document.body.appendChild(heart);
    
            gsap.to(heart, {
                x: Math.random() * 200 - 100,
                y: Math.random() * -200 - 50,
                opacity: 0,
                scale: Math.random() * 1.5 + 0.5,
                duration: 1.5,
                ease: "power1.out",
                onComplete: () => heart.remove()
            });
        }
    });
    
  
      // ✅ GSAP Parallax Effect
      gsap.to(".parallax", {
          scrollTrigger: {
              trigger: ".parallax",
              start: "top bottom",
              scrub: true,
          },
          backgroundPosition: "center 50%"
      });
  
  
  });

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap !== "undefined") {
        console.log("✅ GSAP is loaded!");

      // Swaying Effect for Both Bouquets (Mirrored Motion)
      gsap.to(".bouquet-left", {
        rotation: 90, // Sways between 70° and 75°
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".bouquet-right", {
        rotation: 1, // Sways between 17° and 22°
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });


    //   gsap.from(".ribbon-container", {
    //     y: -100,  // Drops from above
    //     opacity: 0,  // Starts invisible
    //     duration: 1.5,
    //     ease: "bounce.out"  // Bouncy effect at the end
    // });

    // Ribbon Stretching Effect
      gsap.from(".ribbon-container", {
        scaleX: 1.8,  // Starts stretched horizontally
        opacity: 0,
        duration: 4.2,
        ease: "elastic.out(1, 1)"  // Bouncy stretching effect
      });


      

        // ✅ Fade-in Animation for Bouquets
      

    } else {
        console.error("❌ GSAP failed to load!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const floatingObject = document.querySelector(".floating-object");
  const popupModal = document.querySelector(".popup-modal");
  const closePopup = document.querySelector(".close-popup");

  // Function to Move Floating Object Randomly Around the Hero Image
  function moveFloatingObject() {
      const heroContainer = document.querySelector(".hero-image-container");
      const heroRect = heroContainer.getBoundingClientRect();
      
      const randomX = heroRect.left + Math.random() * (heroRect.width - 100);
      const randomY = heroRect.top + Math.random() * (heroRect.height - 100);

      gsap.to(floatingObject, {
          x: randomX - heroRect.left,
          y: randomY - heroRect.top,
          duration: 3,
          ease: "power1.inOut",
          onComplete: moveFloatingObject // Keep moving continuously
      });
  }

  // Start Floating Animation
  moveFloatingObject();

  // Show Pop-up on Click
  floatingObject.addEventListener("click", function () {
      popupModal.style.display = "block";
  });

  // Show Pop-up & PERMANENTLY Remove Floating Object on Click
  floatingObject.addEventListener("click", function () {
    popupModal.style.display = "block";

    // Remove the floating object completely after clicking
    gsap.to(floatingObject, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: function () {
            floatingObject.remove(); // Completely removes the element from the DOM
        }
    });
});

  // Close Pop-up
  closePopup.addEventListener("click", function () {
      popupModal.style.display = "none";
  });
});


document.querySelectorAll(".quality-card").forEach(card => {
  card.addEventListener("click", function () {
      this.classList.toggle("flipped");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".quiz-card");
  let currentQuestionIndex = 0;
  
  const popupModal = document.getElementById("popup-modal-quiz");
  const popupGif = document.getElementById("popup-gif");
  const popupText = document.getElementById("popup-text");
  const closePopup = document.getElementById("close-popup");

  // Store correct & wrong GIFs for each question
  const correctGifs = [
    "images/quiz1.jpg",  // For Question 1
    "images/pie.jpg",  // For Question 2
    "images/quiz2.jpg"   // For Question 3
];

const wrongGifs = [
    "images/rakhi-sawant.gif",  // For Question 1
    "images/rakhi-sawant.gif",  // For Question 2
    "images/rakhi-sawant.gif"   // For Question 3
];

document.querySelectorAll(".options li").forEach(option => {
    option.addEventListener("click", function () {
        const isCorrect = this.getAttribute("data-correct") === "true";

        if (isCorrect) {
            this.classList.add("correct");
            popupGif.src = correctGifs[currentQuestionIndex]; // Show the correct GIF for this question
            popupText.innerText = "Yay! You got it right! 🎉";
        } else {
            this.classList.add("wrong");
            popupGif.src = wrongGifs[currentQuestionIndex]; // Show the wrong GIF for this question
            popupText.innerText = "Oops! Try again next time. 😅";
        }

        popupModal.style.display = "block";
    });
});

  // Close popup and move to the next question
  closePopup.addEventListener("click", function () {
      popupModal.style.display = "none";

      // Flip to the next question
      gsap.to(questions[currentQuestionIndex], {
          rotationY: 180,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
              // Hide current question
              questions[currentQuestionIndex].style.display = "none";
              currentQuestionIndex++;

              // Show next question if available
              if (currentQuestionIndex < questions.length) {
                  questions[currentQuestionIndex].style.display = "flex";
                  gsap.fromTo(questions[currentQuestionIndex], { rotationY: -180 }, { rotationY: 0, duration: 0.8 });
              } else {
                  alert("🎉 Quiz Complete! You know me so well! ❤️");
              }
          }
      });
  });
});

document.querySelector(".yes-btn").addEventListener("click", function () {
  let popup = document.getElementById("yes-popup");
  let video = document.getElementById("yes-video");

  popup.style.display = "flex";  // Show popup
  video.play(); // Play video when popup opens
});

document.querySelector(".no-btn").addEventListener("click", function () {
  let popup = document.getElementById("no-popup");
  let video = document.getElementById("no-video");

  popup.style.display = "flex";  // Show popup
  video.play(); // Play video when popup opens
});

// Function to Close Popups and Stop Video
function closePopup(popupId) {
  let popup = document.getElementById(popupId);
  let video = popup.querySelector("video"); // Get video inside the popup

  popup.style.display = "none"; // Hide popup
  video.pause();  // Pause video
  video.currentTime = 0; // Reset video to start
}

// Close popup if clicked outside the video
document.querySelectorAll(".popup-video").forEach(popup => {
  popup.addEventListener("click", function (event) {
      if (event.target === this) {
          closePopup(this.id);
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bg-music");

  function playMusic() {
      bgMusic.play();
      document.removeEventListener("click", playMusic); // Remove event after first click
  }

  document.addEventListener("click", playMusic); // Start music on first click
});






  


    //   document.addEventListener('DOMContentLoaded', function () {
    //     if (typeof gsap !== "undefined") {
    //         console.log("✅ GSAP is loaded!");
    //         gsap.registerPlugin(ScrollTrigger);
    
    //         // 1️⃣ Hero Image Animation (Fade & Scale-up)
    //         gsap.from(".hero-image-container", { 
    //             duration: 1.5, 
    //             opacity: 0, 
    //             scale: 0.8, 
    //             ease: "power3.out"
    //         });
    
    //         // 2️⃣ Ribbon Text Animation (Slide from top)
    //         gsap.from(".ribbon-container", {
    //             duration: 1.5,
    //             y: -50,
    //             opacity: 0,
    //             ease: "power2.out",
    //             delay: 0.5
    //         });
    
    //         // 3️⃣ Decision Section (Yes/No Buttons Slide In, Image Fade-In)
    //         gsap.from(".yes-btn", {
    //             duration: 1.2,
    //             x: -100,   // Slide from the left
    //             opacity: 0,
    //             ease: "power2.out"
    //         });
    
    //         gsap.from(".no-btn", {
    //             duration: 1.2,
    //             x: 100,   // Slide from the right
    //             opacity: 0,
    //             ease: "power2.out"
    //         });
    
    //         gsap.from(".decision-image", {
    //             duration: 1.2,
    //             opacity: 0,
    //             scale: 0.5,
    //             ease: "power2.out",
    //             delay: 0.3
    //         });
    
    //         // 4️⃣ Cards Animation (Scroll-triggered Fade & Stagger)
    //         gsap.from(".card", {
    //             scrollTrigger: {
    //                 trigger: ".card",
    //                 start: "top 80%",
    //             },
    //             opacity: 0,
    //             y: 50,
    //             stagger: 0.3,
    //         });
    
    //         // 5️⃣ Falling Roses Rotation Effect
    //         document.querySelectorAll(".falling-rose").forEach((rose, i) => {
    //             gsap.to(rose, {
    //                 rotation: 360,
    //                 duration: 4,
    //                 repeat: -1,  // Infinite rotation
    //                 ease: "linear",
    //                 delay: i * 0.2
    //             });
    //         });
    
    //     } else {
    //         console.error("❌ GSAP failed to load!");
    //     }
    // });
    
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