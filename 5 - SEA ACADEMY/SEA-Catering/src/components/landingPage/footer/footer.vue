<script setup></script>

<template>
  <section id="footer" style="background-color: #f8fafc; padding: 2rem 0;">
    <div style="text-align: center; font-weight: 700; font-size: 1.25rem; margin-bottom: 2rem;">Logic Lab</div>
    <div
      class="container justify-items-center justify-self-center grid grid-cols-2 gap-8 md:grid-cols-4 lg:py-8"
      style="
        padding-block: 6rem;
        justify-items: center;
        text-align: justify;
        justify-self: center;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      "
    >
      <div style="grid-column: span 3 / span 3;">
        <ul 
          style="
            display: inline-flex;
            list-style-type: none;
            padding: 0;
            justify-content: center;
            width: 100%;
          "  
        >
          <li
            style="
              margin: 0.25rem;
              height: 3rem;
              width: 3rem;
              border-radius: 9999px;
              background-color: #84cc16;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-weight: bold;
            "
          >F</li>
          <li
            style="
              margin: 0.25rem;
              height: 3rem;
              width: 3rem;
              border-radius: 9999px;
              background-color: #84cc16;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-weight: bold;
            "
          >T</li>
          <li
            style="
              margin: 0.25rem;
              height: 3rem;
              width: 3rem;
              border-radius: 9999px;
              background-color: #84cc16;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-weight: bold;
            "
          >I</li>
          <li
            style="
              margin: 0.25rem;
              height: 3rem;
              width: 3rem;
              border-radius: 9999px;
              background-color: #84cc16;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-weight: bold;
            "
          >L</li>
        </ul>
      </div>
      <!-- List Our Services  -->
      <div style="text-align: left;">
        <h1 class="quick-link-title" style="font-size: 1.5rem; font-weight: 600; color: #1e293b; margin-bottom: 1rem;">SEA-Catering</h1>
        <p class="subtitle" style="color: #64748b; line-height: 1.6; margin-bottom: 1.5rem; text-align: justify;">
Platform ini dikembangkan untuk menyediakan makanan berkualitas tinggi dengan informasi nutrisi terperinci untuk mendukung gaya hidup sehat Anda.
        </p>
      </div>
      <!-- List Our Services  -->

      <!-- Quick Link  -->
      <div style="text-align: left;">
        <h2 class="quick-link-title" style="font-size: 1.125rem; font-weight: 600; color: #1e293b; margin-bottom: 1rem;">Quick Link</h2>
        <ul class="font-normal" style="list-style: none; padding: 0;">
          <li class="quick-link" style="margin-bottom: 0.75rem;">
            <a href="/" style="color: #64748b; text-decoration: none; transition: color 0.2s;">Home</a>
          </li>
          <li class="quick-link" style="margin-bottom: 0.75rem;">
            <a href="/menu" style="color: #64748b; text-decoration: none; transition: color 0.2s;">Menu</a>
          </li>
          <li class="quick-link" style="margin-bottom: 0.75rem;">
            <a href="/subscription" style="color: #64748b; text-decoration: none; transition: color 0.2s;">Subscription</a>
          </li>
          <li class="quick-link" style="margin-bottom: 0.75rem;">
            <a href="/contact" style="color: #64748b; text-decoration: none; transition: color 0.2s;">Contact Us</a>
          </li>
        </ul>
      </div>
      <!-- Quick Link  -->
    </div>
    </section>
    <section style="background-color: #f8fafc;">
    <!-- footer -->
    <div class="footer" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 0;" />
      <small class="footer-subtitle" style="display: block; text-align: center; padding: 1.5rem 0; color: #64748b;">SEA-Catering, All rights reserved</small>
      <ul>
        <li>Kebijakan privasi</li>
        <li>Syarat & Ketentuan</li>
        <li>FAQ</li>
      </ul>
    </div>
    <!-- footer -->
  </section>

</template>
<style scoped>
/* @import url("./style.css"); */
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

#footer a:hover {
  color: #2563eb;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
    text-align: center !important;
  }
  
  #footer > div:first-child {
    grid-column: span 1 !important;
  }
  
  ul[style*="inline-flex"] {
    justify-content: center !important;
  }
  
  .quick-link-title,
  .quick-link {
    text-align: center !important;
  }
}
</style>
