<script setup>
  import Form from './Form.vue'
</script>

<template>
  <div class="bg-jet-900" id="contact">
    <div class="bg-darker-jet-pattern hero-padding">
      <div class="container grid gap-4 mx-auto container-padding text-mint-600 md:gap-12 md:grid-cols-2">
        <div class="flex flex-col">
          <div>
            <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">Get in touch!</h2>
            <p class="mt-1 lg:max-w-lg md:mt-2 lg:text-lg xl:text-xl">If you’re interested in discussing the projects I’ve launched or you want to let me know about a project you think I’d be a match for, let’s talk!</p>
          </div>
        </div>
        <div class="flex flex-col mt-8 md:justify-center md:mt-0">
          <div class="space-y-2 2xl:space-y-4 xl:text-lg 2xl:text-xl">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>