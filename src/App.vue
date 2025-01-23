<script setup>
import Header from './components/layouts/Header.vue';
import DaisyNavbar from './components/partials/DaisyNavbar.vue';
import DaisyFooter from './components/partials/DaisyFooter.vue';
import DaisyHero from './components/partials/DaisyHero.vue';
import DaisyTab from './components/partials/DaisyTab.vue';
import DaisyAccordion from './components/partials/DaisyAccordion.vue';
import TestSpy from './components/partials/TestSpy.vue';
</script>

<template>
    <div class="mx-auto">
        <header>
            <DaisyNavbar />
        </header>
        
        <main>
            <DaisyHero />
            <div class="flex flex-row">
                <div class="w-2/12">
                    <div class="bg-red-500">aaa</div>
                </div>
                <div class="w-10/12">
                    <TestSpy />
                </div>
            </div>
            <!-- <DaisyTab /> -->
            <!-- <DaisyAccordion /> -->

        </main>
        
        <!-- <footer class="footer footer-center bg-primary text-primary-content p-10 static bottom-0">
            <DaisyFooter />
        </footer> -->
    </div>
</template>

<style scoped>
</style>
