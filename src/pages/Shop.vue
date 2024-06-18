<script setup>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import { mapState } from 'vuex';

</script>

<template>

    <body>

        <Navigation />
        <!-- <Hero /> -->



        <div class="untree_co-section product-section before-footer-section">
            <div class="container">
                <div class="row">

                    <!-- Start Column 1 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5" v-for="product in products" :key="product.id">
                        <a class="product-item">
                            <img :src="`../../images/${product.image}`" class="img-fluid product-thumbnail">
                            <h3 class="product-title">{{ product.name }}</h3>
                            <strong class="product-price">{{ product.price }}</strong>

                            <span class="icon-cross" @click="add_to_Cart(product)" data-bs-toggle="modal"
                                data-bs-target="#modal">
                                <img src="../assets/images/cross.svg" class="img-fluid cross">
                                <img src="../assets/images/check.png" class="img-fluid check">
                            </span>
                        </a>
                    </div>
                    <!-- End Column 1 -->
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Notification</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Product added to cart !
                    </div>
                    <div class="modal-footer">
                        <router-link class="btn btn-secondary" to="/cart"
                            @click="removeModalBackdrop()">Cart</router-link>
                        <router-link class="btn btn-primary" @click="removeModalBackdrop()" to="/checkout">Checkout</router-link>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </body>
</template>
<style>
.check {
    display: none;
}
</style>
<script>
import { mapState } from 'vuex';

export default {
    name: 'Shop',
    data() {
        return {
            products: []
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
    },
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
        removeModalBackdrop() {
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.remove();
            }
            // Restore scroll
            document.body.style.overflow = '';
        }
    },
    computed: {
        ...mapState([
            'cart'
        ])
    }
}

</script>