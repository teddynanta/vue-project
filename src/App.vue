<script setup>
import DaisyNavbar from './components/partials/DaisyNavbar.vue';
import HeroSection from './components/layouts/HeroSection.vue';
import About from './components/layouts/About.vue';
import TechStack from './components/layouts/TechStack.vue';
import Project from './components/layouts/Project.vue';
import Footer from './components/partials/Footer.vue';
</script>

<template>
    <div class="mx-auto">
        <header class="fixed top-0 left-0 w-full z-50 bg-base-100/20 backdrop-blur-md shadow-md">
            <DaisyNavbar />
        </header>
        <section id="hero" class="h-screen flex items-center justify-center" data-aos="fade-up">
            <HeroSection />
        </section>
        <section id="about" data-aos="fade-up">
            <About />
        </section>
        <section id="tech" class="flex justify-center lg:px-52 2xl:px-96" data-aos="fade-up">
            <TechStack />
        </section>
        <section id="project">
            <Project />
        </section>
        <Footer />
    </div>
</template>

<style scoped>
</style>
