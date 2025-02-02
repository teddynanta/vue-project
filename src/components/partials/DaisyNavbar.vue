<script setup>
import HomeIcon from '../icons/HomeIcon.vue';
import { ref, onMounted } from 'vue'; // Import ref and onMounted
import SunIcon from '../icons/SunIcon.vue';
import MoonIcon from '../icons/MoonIcon.vue';

// Reactive state for dark mode
const isDarkMode = ref(false);

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

// On component mount, check for saved theme preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    isDarkMode.value = false;
  }
});
</script>

<template>
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>


  <div class="navbar bg-transparent text-base-content lg:px-52 2xl:px-96">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a href="#" class="btn btn-ghost text-xl">Ted.</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href="#hero" class="font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="#tech" class="font-bold">
            Tech
          </a>
        </li>
        <li>
          <details>
            <summary class="font-bold">Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a class="font-bold">Contacs</a></li>
      </ul>
    </div>  
    <div class="navbar-end me-3">
      <label class="grid cursor-pointer place-items-center">
        <input
          @click="toggleDarkMode"
          type="checkbox"
          class="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
        <MoonIcon />
        <SunIcon />
      </label>
    </div>
  </div>

</template>