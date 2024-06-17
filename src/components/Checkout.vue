<template>
    <div class="untree_co-section">
        <div class="container">
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col-md-6 mb-5 mb-md-0">
                        <h2 class="h3 mb-3 text-black">Billing Details</h2>
                        <div class="p-3 p-lg-5 border bg-white">
                            <div class="form-group">
                                <label for="c_country" class="text-black">Country <span
                                        class="text-danger">*</span></label>
                                <select id="c_country" class="form-control" v-model="form.c_country" required>
                                    <option value="1">Select a country</option>
                                    <option value="2">bangladesh</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">Afghanistan</option>
                                    <option value="5">Ghana</option>
                                    <option value="6">Albania</option>
                                    <option value="7">Bahrain</option>
                                    <option value="8">Colombia</option>
                                    <option value="9">Dominican Republic</option>
                                </select>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="c_fname" class="text-black">First Name <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_fname" name="c_fname"
                                        v-model="form.c_fname" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="c_lname" class="text-black">Last Name <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_lname" name="c_lname"
                                        v-model="form.c_lname" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label for="c_companyname" class="text-black">Company Name </label>
                                    <input type="text" class="form-control" id="c_companyname" name="c_companyname"
                                        v-model="form.c_companyname" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label for="c_address" class="text-black">Address <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_address" name="c_address"
                                        v-model="form.c_address" placeholder="Street address" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="c_state_country" class="text-black">State / Country <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_state_country" name="c_state_country"
                                        v-model="form.c_state_country" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="c_postal_zip" class="text-black">Posta / Zip <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_postal_zip" name="c_postal_zip"
                                        v-model="form.c_postal_zip" required>
                                </div>
                            </div>

                            <div class="form-group row mb-5">
                                <div class="col-md-6">
                                    <label for="c_email_address" class="text-black">Email Address <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_email_address" name="c_email_address"
                                        v-model="form.c_email_address" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="c_phone" class="text-black">Phone <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_phone" name="c_phone"
                                        v-model="form.c_phone" placeholder="Phone Number" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">


                        <div class="row mb-5">
                            <div class="col-md-12">
                                <h2 class="h3 mb-3 text-black">Your Order</h2>
                                <div class="p-3 p-lg-5 border bg-white">
                                    <table class="table site-block-order-table mb-5">
                                        <thead>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="product in cartProducts">
                                                <td>{{ product.name }} <strong class="mx-2">x</strong> {{
                                                    product.quantity
                                                }}</td>
                                                <td>${{ product.price }}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-black font-weight-bold"><strong>Order Total</strong>
                                                </td>
                                                <td class="text-black font-weight-bold"><strong>${{ cartTotal
                                                        }}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <!-- <div class="border p-3 mb-3">
                                    <h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse"
                                            href="#collapsebank" role="button" aria-expanded="false"
                                            aria-controls="collapsebank">Direct Bank Transfer</a></h3>

                                    <div class="collapse" id="collapsebank">
                                        <div class="py-2">
                                            <p class="mb-0">Make your payment directly into our bank account. Please
                                                use your Order ID as the payment reference. Your order won’t be
                                                shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="border p-3 mb-3">
                                    <h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse"
                                            href="#collapsecheque" role="button" aria-expanded="false"
                                            aria-controls="collapsecheque">Cheque Payment</a></h3>

                                    <div class="collapse" id="collapsecheque">
                                        <div class="py-2">
                                            <p class="mb-0">Make your payment directly into our bank account. Please
                                                use your Order ID as the payment reference. Your order won’t be
                                                shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="border p-3 mb-5">
                                    <h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse"
                                            href="#collapsepaypal" role="button" aria-expanded="false"
                                            aria-controls="collapsepaypal">Paypal</a></h3>

                                    <div class="collapse" id="collapsepaypal">
                                        <div class="py-2">
                                            <p class="mb-0">Make your payment directly into our bank account. Please
                                                use your Order ID as the payment reference. Your order won’t be
                                                shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div> -->

                                    <div class="form-group">
                                        <!-- <button class="btn btn-black btn-lg py-3 btn-block"
                                            onclick="window.location='thankyou.html'">Place Order</button> -->
                                        <button class="btn btn-black btn-lg py-3 btn-block" type="submit">Place
                                            Order</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Checkout",
    data() {
        return {
            form: {
                c_country: "",
                c_fname: "",
                c_lname: "",
                c_companyname: "",
                c_address: "",
                c_state_country: "",
                c_postal_zip: "",
                c_email_address: "",
                c_phone: ""
            }
        }
    },
    computed: {
        ...mapGetters([
            'cartProducts', 'cartTotal'
        ])
    },
    methods: {
        async submit() {
            let data = {
                customerDetails: {
                    c_country: this.form.c_country,
                    c_fname: this.form.c_fname,
                    c_lname: this.form.c_lname,
                    c_companyname: this.form.c_companyname,
                    c_address: this.form.c_address,
                    c_state_country: this.form.c_state_country,
                    c_postal_zip: this.form.c_postal_zip,
                    c_email_address: this.form.c_email_address,
                    c_phone: this.form.c_phone
                },
                productDetails:{
                    products: this.cartProducts
                },
                orderTotal: this.cartTotal
            }
            try {
                const response = await fetch('http://localhost:3000/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if (response.ok) {
                    const responseData = await response.json()
                    if (responseData) {
                        this.$router.push({ path: '/thankyou' })
                    }
                } else {
                    console.error('API response not OK', response.statusText)
                }
            } catch (error) {
                console.error("Error:", error)
            }

        }
    }
}


</script>