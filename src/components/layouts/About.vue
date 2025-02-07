<template>
  <div class="overflow-hidden bg-base-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-28 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-pink-300 dark:text-primary">{{ displayedText }}<span class="blinking-cursor">|</span></h2>
            <p class="mt-2 text-4xl font-bold -mb-3 tracking-tight text-pretty text-base-content sm:text-5xl">This is me 👉</p>
            <p class="mt-6 text-lg/8 text-base-content">Who am I? or... <i><b>What am I?</b></i></p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-base-content lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold dark:text-gray-100 text-base-content">
                  <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-pink-300 dark:text-primary" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="mx-auto w-full relative invisible lg:visible">
          <img src="/tednnt.png" alt="Picture" class="bottom-0 absolute w-96 h-auto rounded-xl z-20"/>
          <div class="absolute left-[10%] bottom-0 bg-gradient-to-b from-pink-300 to-purple-400 dark:bg-gradient-to-t dark:from-blue-800/5 dark:to-primary h-80 w-72 z-10 rounded-t-full"></div>
          <div class="left-float absolute w-[80%] h-[80%] -top-[0%] -left-[20%] bg-radial from-pink-300 to-white/5 dark:from-red-500/60 from-0% dark:to-black/5 to-80% blur-xl rounded-full"></div>
          <div class="right-float absolute w-[80%] h-[80%] top-[35%] left-[20%] bg-radial from-purple-400/60 to-white/5 dark:from-blue-500/60 from-0% dark:to-black/5 to-80% blur-xl rounded-full dark:z-30"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserIcon, BoltIcon, ServerIcon} from '@heroicons/vue/20/solid';
export default {
  data() {
    return {
      features:[
        {
          name: 'I\m a celestials.',
          description:
            'And I am taking human form to blend in and protect humanity from unseen threats.',
            icon: UserIcon,
          },
          {
            name: 'Arcane Adept.',
            description: 'Master of ancient and mystical techs, adept at quickly learning and integrating new technologies and protect the realm.',
            icon: BoltIcon,
          },
          {
            name: 'Chameleon\'s Grace.',
            description: 'Possesses the ability to adapt and blend into any environment, tech stacks, et cetera.',
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
@keyframes leftFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px); /* Adjust the floating height */
  }
}

.left-float {
  animation: leftFloat 3s ease-in-out infinite; /* Adjust duration as needed */
}

@keyframes rightFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px); /* Adjust the floating height */
  }
}

.right-float {
  animation: rightFloat 3s ease-in-out infinite; /* Adjust duration as needed */
}
</style>