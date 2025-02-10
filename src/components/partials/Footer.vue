<script setup lang="ts">
import GithubIcon from '../icons/GithubIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';
import LinkedInIcon from '../icons/LinkedInIcon.vue';

</script>

<template>
  <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <!-- <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav> -->
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href="https://github.com/teddynanta" target="_blank">
          <GithubIcon class="h-6 w-6 text-base-content"/>
        </a>
        <a href="https://instagram.com/teddynnt" target="_blank">
          <InstagramIcon class="h-6 w-6 text-base-content"/>
        </a>
        <a href="https://linkedin.com/in/teddynanta" target="_blank">
          <LinkedInIcon class="h-6 w-6 text-base-content"/>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © {{new Date().getFullYear()}} - Teddy Nanta</p>
    </aside>
  </footer>
</template>