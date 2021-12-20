<script setup>
  import InputWrapper from '../partials/FormInputWrapper.vue'
  import Input from '../partials/InputField.vue'
  import Label from '../partials/Label.vue'
</script>

<template>
  <form
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="franks-field"
  >
    <input type="hidden" name="form-name" value="contact-form" />
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
</template>