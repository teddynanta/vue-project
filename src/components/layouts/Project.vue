<template>
  <section class="py-10 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-indigo-600 mb-8">My Projects 🔥</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="card bg-base-200 dark:bg-base-300 shadow-xl">
          <figure>
            <img :src="project.image" :alt="project.title" class="rounded-t-xl object-cover h-48 w-full" />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-secondary">{{ project.title }}</h3>
            <p class="text-base-content">{{ project.description }}</p>
            <div class="card-actions justify-end">
              <a :href="project.link" target="_blank" class="btn btn-primary">View Project</a>
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
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my work.',
    image: 'https://placehold.co/600x400',
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Vue and Laravel.',
    image: 'https://placehold.co/600x400',
    link: '#',
  },
  {
    id: 3,
    title: 'Blog CMS',
    description: 'A content management system for managing blog posts.',
    image: 'https://placehold.co/600x400',
    link: '#',
  },
]);
</script>

<style scoped>
/* Custom styles if needed */
</style>
