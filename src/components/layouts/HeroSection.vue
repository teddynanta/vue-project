<template>
  <div class="hero min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 dark:from-gray-900 dark:to-purple-900">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-white text-wrap">
          Hello, I'm <transition name="fade" mode="out-in">
            <span :key="currentText" class="text-accent font-bold">{{ currentText }}</span>
          </transition>
        </h1>
        <p class="py-6 text-white">I'm a passionate developer specializing in Vue.js, Tailwind CSS, and DaisyUI. Welcome to my portfolio!</p>
        <button class="btn btn-accent shining-button">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      texts: ['Teddy Nanta', 'Web Developer', 'Graphic Designer'],
      currentIndex: 0,
      currentText: 'Teddy',
    };
  },
  mounted() {
    this.startTextAnimation();
  },
  methods: {
    startTextAnimation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentIndex];
      }, 2000);
    },
  },
};
</script>

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

/* Text Animation */
.text-accent {
  color: #ff6b6b;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>