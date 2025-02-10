<template>
  <section class="py-10 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-pink-300 dark:text-primary mb-8">My Projects 🔥</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="card bg-base-200 dark:bg-base-300 shadow-xl">
          <figure>
            <img :src="project.image" :alt="project.title" class="rounded-t-xl object-cover h-48 w-full" />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-secondary dark:text-primary">{{ project.title }}</h3>
            <p class="text-base-content">{{ project.description }}</p>
            <div class="card-actions justify-end">
              <a :href="project.link" target="_blank" class="btn btn-secondary dark:btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Lubuk Linggau Website',
    description: 'A websites that I build with my team for Lubuk Linggau City Government. This websites uses CodeIgniter as the backend and Bootstrap as the frontend.',
    image: '/ss web kota.png',
    link: 'https://lubuklinggaukota.go.id',
  },
  {
    id: 2,
    title: 'Satu Ayat with Vue',
    description: 'A project that I build to learn Vue.js. This project is a simple web app that shows a random verse from the Quran. I have made previous version with plain css and vanilla js, and this is the Vue.js version.',
    image: '/ss satu ayat.png',
    link: 'https://satu-ayat-vue.vercel.app',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This website.',
    image: '/ss portfolio.png',
    link: 'https://portfolio-teddynnt.vercel.app',
  },
]);
</script>

<style scoped>
/* Custom styles if needed */
</style>
