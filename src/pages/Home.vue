<script setup>
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import Product from '../components/Product.vue'
import WhyChoose from '../components/WhyChoose.vue'
import Footer from '../components/Footer.vue'
</script>

<template>

    <body>
        <Navigation />
        <Hero />
        <Product :products="products" />
        <WhyChoose />
        <Footer />
    </body>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            products:[

            ]
        }
    },
    async created() {
        try {
            let response = await fetch('http://localhost:3000/products')
            if (!response.ok) {
                throw new Error("Failed to fetch products !")
            }
            const productList = await response.json()
            this.products = productList
        } catch (error) {
            console.error('Error fetching products:', error.message)
        }
    }
}
</script>