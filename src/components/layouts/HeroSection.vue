<script>
import GithubButton from '../partials/GithubButton.vue';
import { RocketLaunchIcon, StarIcon, HeartIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    GithubButton,
    RocketLaunchIcon,
    StarIcon,
    HeartIcon,
  },
  name: 'HeroSection',
  data() {
    return {
      texts: ['Teddy Nanta', 'Web Developer', 'Graphic Designer'],
      currentIndex: 0,
      displayedText: '',
      isDeleting: false,
      typingSpeed: 150, // Speed of typing
      deletingSpeed: 100, // Speed of deleting
      pauseDuration: 1000, // Pause between texts
    };
  },
  mounted() {
    this.startTextAnimation();
  },
  methods: {
    startTextAnimation() {
      const type = () => {
        const currentText = this.texts[this.currentIndex];

        if (this.isDeleting) {
          // Delete text
          this.displayedText = currentText.substring(0, this.displayedText.length - 1);
        } else {
          // Type text
          this.displayedText = currentText.substring(0, this.displayedText.length + 1);
        }

        // Check if typing or deleting is complete
        if (!this.isDeleting && this.displayedText === currentText) {
          // Pause at the end of typing
          setTimeout(() => {
            this.isDeleting = true;
            type();
          }, this.pauseDuration);
        } else if (this.isDeleting && this.displayedText === '') {
          // Move to the next text
          this.isDeleting = false;
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          setTimeout(type, this.typingSpeed);
        } else {
          // Continue typing or deleting
          setTimeout(type, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
        }
      };

      type(); // Start the animation
    },
  },
};
</script>

<template>
  <div class="hero min-h-screen bg-linear-to-r from-pink-300 to-purple-400 dark:from-gray-900 dark:to-purple-900">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <RocketLaunchIcon class="floating-rocket absolute top-1/3 left-2/4 -mt-5 h-10 w-10 text-base-content invisible md:visible"/>
        <StarIcon class="floating-star absolute top-2/4 left-1/3 mt-10 h-9 w-9 text-base-content invisible md:visible"/>
        <HeartIcon class="floating-heart absolute left-2/3 -ms-16 h-14 w-14 text-base-content invisible md:visible"/>
          <h1 class="md:text-7xl text-5xl font-bold text-base-content dark:text-gray-100 text-wrap">
            Hello, I'm <br> <span class="text-primary dark:text-red-500 font-bold">{{ displayedText }}</span><span class="blinking-cursor">|</span>
          </h1>
          <p class="py-3 text-sm md:text-md text-base-content font-semibold dark:font-normal dark:text-gray-100">I'm a passionate developer specializing in Tailwind CSS, Laravel. <br> Welcome to my portfolio!</p>
          <!-- <button class="btn btn-accent shining-button">Get Started</button> -->
          <GithubButton />
      </div>
    </div>
  </div>
</template>



<style>
/* Floating Animation */
@keyframes floatRocket {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Adjust the floating height */
  }
}

@keyframes floatStar {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px); /* Adjust the floating height */
  }
}

@keyframes floatHeart {
  0%, 100% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateZ(25deg); /* Adjust the floating height */
  }
}

.floating-rocket {
  animation: floatRocket 3s ease-in-out infinite; /* Adjust duration as needed */
}

.floating-star {
  rotate: 45deg;
  animation: floatStar 3.2s ease-in-out infinite; /* Adjust duration as needed */
}

.floating-heart {
  animation: floatHeart 3s ease-in-out infinite; /* Adjust duration as needed */
}

/* Shining Button Effect */
.shining-button {
  position: relative;
  overflow: hidden;
}

.shining-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.2) 75%
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: rotate(45deg) translateX(-150%);
  }
  100% {
    transform: rotate(45deg) translateX(150%);
  }
}

/* Blinking Cursor */
.blinking-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>