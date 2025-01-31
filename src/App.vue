<script setup>
import DaisyNavbar from './components/partials/DaisyNavbar.vue';
import Tab from './components/layouts/Tab.vue';
import HeroSection from './components/layouts/HeroSection.vue';
</script>

<template>
    <div class="mx-auto">
        <header class="fixed top-0 left-0 w-full z-50 bg-base-100/20 backdrop-blur-md shadow-md">
            <DaisyNavbar />
        </header>
        <section class="relative h-screen flex items-center justify-center">
            <HeroSection />
        </section>
        <div class="flex justify-center lg:px-52 2xl:px-96">
        <Tab />
        </div>
    </div>
</template>

<style scoped>
</style>
