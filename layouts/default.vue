<template>
  <div class="background background--gradient--secondary flex flex-col flex-grow">
    <Header/>

    <main class="container p-0 flex-grow sm:py-8 sm:px-4">
      <div class="fadeInUp max-w-md mx-auto bg-grey-lighter sm:shadow-lg sm:rounded leading-normal">
        <nuxt/>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>

<style>
@screen sm {
  .background {
    min-height: 100%;
    background-image: url("https://storage.googleapis.com/site-assets-reviews/images/bg-ygt.jpg") !important;
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
    box-shadow: inset 0 400px 200px -300px rgba(0, 0, 0, 0.08);
  }
}

.background--gradient--secondary {
  background-image: linear-gradient(
    to top left,
    config("colors['green-dark']"),
    config("colors.green")
  );
}

@keyframes fadeInUp {
  0% {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  animation: fadeInUp 1s ease-in-out;
}
</style>
