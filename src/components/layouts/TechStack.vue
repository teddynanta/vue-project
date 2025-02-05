<template>
  <section class="py-12 bg-base-100">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Tech Stack
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="tech in techStack"
          :key="tech.name"
          class="tech-card flex flex-col items-center p-6 bg-base-200 dark:bg-base-300 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-2 hover:shadow-glow"
        >
          <img :src="tech.logo" :alt="tech.name" class="h-12 w-12 mb-4" />
          <span class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      techStack: [
        { name: 'Laravel', logo: 'https://laravel.com/img/logomark.min.svg' },
        { name: 'Vue.js', logo: 'https://vuejs.org/images/logo.png' },
        { name: 'Tailwind CSS', logo: 'https://tailwindcss.com/favicons/favicon-32x32.png?v=3' },
        { name: 'PHP', logo: 'https://www.php.net/images/logos/new-php-logo.svg' },
        { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
        { name: 'CodeIgniter', logo: 'https://codeigniter.com/assets/icons/ci-logo.png' },
        { name: 'Bootstrap', logo: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg' },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom glow effect */
.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5); /* Adjust the color and intensity as needed */
}
</style>