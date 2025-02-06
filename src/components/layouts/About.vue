<template>
  <div class="overflow-hidden bg-base-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-600">{{ displayedText }}<span class="blinking-cursor">|</span></h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty dark:text-gray-100 text-base-content sm:text-5xl">A better workflow</p>
            <p class="mt-6 text-lg/8 text-base-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-base-content lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold dark:text-gray-100 text-base-content">
                  <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="mx-auto w-full relative invisible lg:visible">
          <img src="/tednnt.png" alt="Picture" class="bottom-0 absolute w-96 h-auto rounded-xl z-[100]"/>
          <div class="absolute left-[10%] bottom-0 bg-indigo-600 h-80 w-72 z-50 rounded-t-full"></div>
          <div class="absolute w-[80%] h-[80%] -top-[10%] -left-[10%] bg-radial-[at_25%_25%] blur-xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid';
export default {
  data() {
    return {
      features:[
        {
          name: 'Push to deploy.',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: CloudArrowUpIcon,
        },
        {
          name: 'SSL certificates.',
          description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
          icon: LockClosedIcon,
        },
        {
          name: 'Database backups.',
          description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
          icon: ServerIcon,
        },
      ],
      texts: ['Halo,', 'ٱلسَّلَامُ عَلَيْكُمْ,', 'こんにちは,', 'Bonjour,', 'Hello,', '안녕하세요,', 'Hola,', 'Ciao,', 'Olá,', '你好,', 'Merhaba,', 'नमस्ते,', 'สวัสดี,', 'مرحباً,', 'Chào bạn,', 'Привет,', 'Salut,', 'Hej,', 'Hallo,', 'Hei,', 'Hoi,', 'Hej,', 'Ahoj,', 'Hei,', 'Saluton,', 'Hej,', 'Halo,', 'Hei'],
      currentIndex: 0,
      displayedText: '',
      isDeleting: false,
      typingSpeed: 100, // Speed of typing
      deletingSpeed: 80, // Speed of deleting
      pauseDuration: 1000, // Pause between texts
    };
  },
  mounted() {
    this.startTextAnimation();
  },
  methods: {
    startTextAnimation() {
      const type = () => {
        const currentText = this.texts[this.currentIndex];

        if (this.isDeleting) {
          // Delete text
          this.displayedText = currentText.substring(0, this.displayedText.length - 1);
        } else {
          // Type text
          this.displayedText = currentText.substring(0, this.displayedText.length + 1);
        }

        // Check if typing or deleting is complete
        if (!this.isDeleting && this.displayedText === currentText) {
          // Pause at the end of typing
          setTimeout(() => {
            this.isDeleting = true;
            type();
          }, this.pauseDuration);
        } else if (this.isDeleting && this.displayedText === '') {
          // Move to the next text
          this.isDeleting = false;
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          setTimeout(type, this.typingSpeed);
        } else {
          // Continue typing or deleting
          setTimeout(type, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
        }
      };

      type(); // Start the animation
    },
  },
};
</script>

<style scoped>
.square::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    top: -5%;
    right: -15%;
    background: radial-gradient(circle, rgba(241, 143, 250, 0.8) 0%, rgba(255, 255, 255, 0) 80%);
    filter: blur(20px);
    pointer-events: none; /* Prevents interaction */
}
</style>