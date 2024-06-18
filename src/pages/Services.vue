<script setup>
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import WhyChoose from '../components/WhyChoose.vue'
import Product from '../components/Product.vue'
import Footer from '../components/Footer.vue'

</script>

<template>

    <body>
        <Navigation />
        <Hero />
        <WhyChoose />
        <Product :products="products" />
        <Footer />
    </body>
</template>
<script>
export default {
    name: "Services",
    data() {
        return {
            products: [

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