<script>
import GithubButton from '../partials/GithubButton.vue';
export default {
  components: {
    GithubButton,
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
  <div class="hero min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 dark:from-gray-900 dark:to-purple-900">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
          <h1 class="text-7xl font-bold text-base-content dark:text-gray-100 text-wrap">
            Hello, I'm <br> <span class="text-emerald-600 dark:text-red-500 font-bold">{{ displayedText }}</span><span class="blinking-cursor">|</span>
          </h1>
          <p class="py-3 text-base-content font-semibold dark:font-normal dark:text-gray-100">I'm a passionate developer specializing in Tailwind CSS, Laravel. <br> Welcome to my portfolio!</p>
          <!-- <button class="btn btn-accent shining-button">Get Started</button> -->
          <GithubButton />
      </div>
    </div>
  </div>
</template>



<style>
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