<script setup>
  import InputWrapper from '../partials/FormInputWrapper.vue'
  import Input from '../partials/InputField.vue'
  import Label from '../partials/Label.vue'
</script>

<template>
  <div class="bg-jet-900" id="contact">
    <div class="py-12 md:py-20 lg:py-24 bg-darker-jet-pattern">
      <div class="container grid gap-4 mx-auto container-padding text-mint-600 md:gap-12 md:grid-cols-2">
        <div class="flex flex-col">
          <div>
            <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading xl:text-6xl 2xl:text-7xl">Get in touch!</h2>
            <p class="mt-1 lg:max-w-lg md:mt-2 lg:text-lg xl:text-xl">If you’re interested in discussing the projects I’ve launched or you want to let me know about a project you think I’d be a match for, let’s talk!</p>
          </div>
        </div>
        <div class="flex flex-col mt-8 md:justify-center md:mt-0">
          <div class="space-y-2 2xl:space-y-4 xl:text-lg 2xl:text-xl">
            <form>
              <fieldset class="space-y-4">
                <InputWrapper>
                  <Input name="Name" nameAttrib="name" id="name" required="true" type="text" placeholder="Dade Murphy" />
                </InputWrapper>
                <InputWrapper>
                  <Input name="Email" nameAttrib="email" id="email" type="email" placeholder="zerocool@stuyvesantHS.edu" />
                </InputWrapper>
                <InputWrapper>
                  <Label name="Message" nameAttrib="message" />
                  <textarea class="h-48 footer-textarea" id="message" name="message" required placeholder="Hi there, you don’t know me, but I have a business proposition for you that I think you won’t want to pass up.

I don’t play well with others, but perhaps that’s because as far as developers go, I just haven't found one as charming as you yet."></textarea>
                </InputWrapper>
              </fieldset>
              <div class="mt-4 text-right">
                <button class="px-6 py-3 font-bold tracking-wider uppercase rounded-sm bg-tart-600 hover:bg-tart-700 text-mint-500" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>