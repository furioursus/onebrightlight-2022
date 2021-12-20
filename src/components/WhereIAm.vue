<script setup>
  import WIALink from '../partials/WhereIAmLink.vue'
</script>

<template>
  <div class="py-12 bg-jet-700 bg-dark-jet-pattern md:py-20 lg:py-24">
    <div class="container grid gap-4 mx-auto container-padding text-mint-600 md:gap-12 md:grid-cols-2">
      <div class="flex flex-col md:justify-center">
        <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">I’m online a lot.<br> Like <span class="text-tart-500">a lot</span> a lot.</h2>
      </div>
      <div class="flex flex-col md:justify-center">
        <div class="space-y-2 2xl:space-y-4 md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          <p>I love how the internet allows us to be closer to one another, especially given the current <WIALink webUrl="https://www.cdc.gov/coronavirus/2019-ncov/index.html" text="health" /> and <WIALink webUrl="https://climate.nasa.gov" text="ecological" /> climate. We have the opportunity to expose ourselves to so many different ideas and concepts; <WIALink webUrl="https://www.bbvaopenmind.com/en/articles/internet-changed-everyday-life/" text="we can learn so much" /> from one another. In spite of all that, I still sometimes use TikTok.</p>

          <p>You can find me on <WIALink webUrl="https://www.twitter.com/furioursus" text="Twitter" />, <WIALink webUrl="https://www.github.com/onebrightlight" text="GitHub" />, <WIALink webUrl="https://medium.com/@onebrightlight" text="Medium" />, and <WIALink webUrl="https://flickr.com/photos/onebrightlight" text="Flickr" />.</p>
        </div>
      </div>
    </div>
  </div>
</template>