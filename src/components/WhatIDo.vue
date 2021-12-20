<script setup>
  import WIDLink from '../partials/WhatIDoLink.vue'
</script>

<template>
  <div class="py-12 bg-jet-100 bg-light-jet-pattern md:py-20 lg:py-24">
    <div class="container grid gap-4 mx-auto container-padding text-jet-700 md:gap-12 md:grid-cols-2">
      <div class="flex flex-col md:justify-center">
        <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">I make <span class="text-tart-500">great websites</span><br class="md:hidden"> with <span class="text-tart-500">amazing people</span>.</h2>
      </div>
      <div class="flex flex-col md:justify-center">
        <div class="space-y-2 2xl:space-y-4 md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          <p>
            I’ve worked on projects rang­ing from small bou­tique web­sites to ecom­merce solu­tions for nation­al food brands, to build­ing a webapp for the <WIDLink webUrl="https://access.nyc.gov" text="City of New York" /> while working with <WIDLink webUrl="https://www.bluestate.co" text="Blue State Digital" />, to most recently stewarding and maintaining the <WIDLink webUrl="https://www.oaklandca.gov" text="City of Oakland’s Website" />.</p>
            <p>In every instance, I’ve enjoyed focusing on infor­ma­tion archi­tec­ture as well as the min­u­tae of front-end devel­op­ment. If you’d like to see some of my work, <WIDLink webUrl="#contact" text="contact me" />.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>