<script setup>
import GithubIcon from '../icons/GithubIcon.vue';
</script>

<template>
  <a href="https://github.com/teddynanta" target="_blank" rel="noopener noreferrer">
    <button class="btn github-button">
      <img src="/github.png" class="h-6 w-6" alt="">
      Check out my GitHub
    </button>
  </a>
</template>

<style scoped>
.github-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1.25rem; /* Re-enable padding for better spacing */
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #24292e; /* GitHub's dark gray */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem; /* Rounded corners */
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset; /* Subtle inset shadow */
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.github-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%; /* Start the shine from outside the button */
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 75%
  );
  transform: skewX(-45deg); /* Diagonal shine effect */
  animation: shine 3s infinite;
}

.github-button:hover {
  background-color: #2d3339; /* Slightly lighter gray on hover */
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.github-button:active {
  background-color: #1b1f23; /* Darker gray on click */
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.github-button-text {
  position: relative;
  z-index: 1;
  margin-left: 0.5rem; /* Add spacing between icon and text */
}

@keyframes shine {
  0% {
    left: -100%; /* Start from outside the button */
    opacity: 0; /* Fully transparent at the start */
  }
  50% {
    opacity: 1; /* Fully visible in the middle */
  }
  100% {
    left: 100%; /* Move to the other side */
    opacity: 0; /* Fully transparent at the end */
  }
}
</style>