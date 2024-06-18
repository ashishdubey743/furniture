

<template>
    <div class="untree_co-section before-footer-section">
        <div class="container">
            <div class="row mb-5">
                <form class="col-md-12" method="post">
                    <div class="site-blocks-table">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Image</th>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-total">Total</th>
                                    <th class="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="product in cartProducts">
                                    <td class="product-thumbnail">
                                        <img :src="`../../images/${product.image}`" alt="Image" class="img-fluid">
                                    </td>
                                    <td class="product-name">
                                        <h2 class="h5 text-black">{{ product.name }}</h2>
                                    </td>
                                    <td>${{ product.price }}</td>
                                    <td>
                                        <div class="input-group mb-3 d-flex align-items-center quantity-container"
                                            style="max-width: 120px;">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-black decrease"
                                                    type="button" @click="decrease_quantity(product.id)">&minus;</button>
                                            </div>
                                            <input type="text" class="form-control text-center quantity-amount"
                                                v-model="product.quantity" placeholder="" aria-label="Example text with button addon"
                                                aria-describedby="button-addon1" disabled>
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-black increase"
                                                    type="button" @click="increase_quantity(product.id)">&plus;</button>
                                            </div>
                                        </div>

                                    </td>
                                    <td>${{ product.quantity * product.price }}</td>
                                    <td><a @click="delete_from_cart(product.id)" class="btn btn-black btn-sm">X</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </form>
            </div>

            <div class="row">
                <div class="col-md-6">

                </div>
                <div class="col-md-6 pl-5">
                    <div class="row justify-content-end">
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12 text-right border-bottom mb-5">
                                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                                </div>
                            </div>  
                            <div class="row mb-5">
                                <div class="col-md-6">
                                    <span class="text-black">Total</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong class="text-black">${{ cartTotal }}</strong>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <router-link class="btn btn-black btn-lg py-3 btn-block"
                                        to="/checkout">Proceed To Checkout</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Cart",
    computed:{
        ...mapGetters([
            'cartTotal',
            'cartProducts'
        ])
    },
    methods:{
        delete_from_cart(productId){
            this.$store.commit('deleteFromCart', productId)
        },
        increase_quantity(productId){
            this.$store.commit('increaseQuantity', productId)
        },
        decrease_quantity(productId){
            this.$store.commit('decreaseQuantity', productId)
        }
    }
}
</script>
