<script setup>
import { useDark } from "@vueuse/core";

const isDark = useDark({
  // selector: "body",
  // disableTransition: false,
  valueDark: "dark",

  onChanged(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else if (!isDark) {
      document.documentElement.classList.remove("dark");
    }
  },
});
</script>

<template>
  <section
    id="footer"
    class="section font-roboto has-outline"
    :class="{
      'bg-gray-100': !isDark,
    }"
  >
    <ul class="inline-flex has-outline my-8">
      <li class="whatsapp">
        <!-- Whatsapp -->
        <span
          class="inline-flex justify-end [&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#ffffff]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
        </span>
      </li>
    </ul>
    <div class="flex h-16 space-x-4 justify-start">
      <a
        href="#"
        class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
      >
        <img src="../assets/logic-lab icon.png" style="max-width: 20%" />
      </a>
    </div>
    <div
      class="container py-24 justify-items-center text-justify justify-self-center grid grid-cols-2 gap-8 md:grid-cols-4 lg:py-8"
    >
      <div>
        <p
          class="subtitle"
          :class="{
            'text-gray-700': !isDark,
            'text-white': isDark,
          }"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          natus, expedita quibusdam placeat, fuga eligendi ab nobis laborum
          unde, nulla ea. Commodi sed illum exercitationem, est culpa deleniti
          excepturi in.
        </p>
        <ul class="inline-flex">
          <li class="mx-1 h-12 w-12 rounded-full bg-blue-800"></li>
          <li class="mx-1 h-12 w-12 rounded-full bg-blue-800"></li>
          <li class="mx-1 h-12 w-12 rounded-full bg-blue-800"></li>
          <li class="mx-1 h-12 w-12 rounded-full bg-blue-800"></li>
        </ul>
      </div>
      <div
        :class="{
          'text-gray-700': !isDark,
          'text-white': isDark,
        }"
      >
        <h2 class="subtitle capitalize mb-6 font-bold">Our Services</h2>
        <ul class="font-normal">
          <li class="mb-4">
            <a
              href="#service"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >UI / UX Designer</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#service"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Web Development</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#service"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >IT Consultant</a
            >
          </li>
        </ul>
      </div>
      <div
        :class="{
          'text-gray-700': !isDark,
          'text-white': isDark,
        }"
      >
        <h2 class="subtitle capitalize font-bold">Quick Link</h2>
        <ul class="font-normal">
          <li class="mb-4">
            <a
              href="#home"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Home</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#aboutUs"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >About Us</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#contactUs"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Contacts Us</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Blog</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Sitemap</a
            >
          </li>
        </ul>
      </div>
      <div
        :class="{
          'text-gray-700': !isDark,
          'text-white': isDark,
        }"
      >
        <h2 class="subtitle capitalize mb-6 font-bold">Our Product</h2>
        <ul class="font-normal">
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Logiclab - Admin</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Logiclab - Ecommerce</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Logiclab - Landing Page</a
            >
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline"
              :class="{
                'text-white hover:text-amber-500': isDark,
              }"
              >Logiclab - Ecommerce</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section
    class="font-semibold text-center has-outline"
    :class="{
      'bg-blue': !isDark,
    }"
  >
    <hr class="md:border-gray-700 sm:mx-auto" />
    <small
      class="subtitle inline-flex place-items-center sm:text-center text-white"
      >Copyright 2025 | Logiclab</small
    >
  </section>
</template>

<style scoped>
/* @import url("../style.css"); */

@import url("https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

.font-radio {
  font-family: "Radio Canada Big", sans-serif;
}

.font-roboto {
  font-family: "Roboto", sans-serif;
}
</style>
