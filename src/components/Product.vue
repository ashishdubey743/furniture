<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    products:{
        type: Object,
        required: true
    }
})
</script>
<template>
    <!-- Start Product Section -->
    <div class="product-section">
        <div class="container">
            <div class="row">
                <!-- Start Column 1 -->
                <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                    <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
                    <p class="mb-4">Modern Interior Design Studio transforms spaces with innovative, stylish interiors
                        tailored to your unique vision. Our expert team ensures every project blends functionality with
                        exceptional aesthetics. </p>
                    <p><a href="/shop" class="btn">Explore</a></p>
                </div>
                <!-- End Column 1 -->
                <!-- Start Column 2 -->
                <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" v-for="product in products.slice(0, 3)"
                    :key="product.id">
                    <a class="product-item">
                        <img :src="`../../public/images/${product.image}`" class="img-fluid product-thumbnail">
                        <h3 class="product-title">{{ product.name }}</h3>
                        <strong class="product-price">${{ product.price }}</strong>

                        <span class="icon-cross" @click="add_to_Cart(product)">
                            <img src="../assets/images/cross.svg" class="img-fluid cross">
                            <img src="../assets/images/check.png" class="img-fluid check">
                        </span>
                    </a>
                </div>
                <!-- End Column 2 -->

            </div>
        </div>
    </div>
    <!-- End Product Section -->
</template>

<script>
export default {
    name: "Product",
    methods: {
        add_to_Cart(product) {
            this.$store.commit('addToCart', product)
            $('.cross').css('display', 'none');
            $('.check').css('display', 'block');
            setTimeout(() => {
                $('.cross').css('display', 'block');
                $('.check').css('display', 'none');
            }, 500);
        },
    }
}
</script>

<style>
.check {
    display: none;
}
</style>