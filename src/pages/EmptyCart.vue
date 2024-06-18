<script setup>
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
</script>

<template>

    <body>

        <Navigation />
        <Hero />
        <div class=" mb-4">
            <h3 class="text-center mt-4">Cart is Empty!</h3>
            <h4  class="text-center mt-3 mb-3">Please, Add a product to Shopping Cart</h4>
        </div>
        <Footer />
    </body>
</template>