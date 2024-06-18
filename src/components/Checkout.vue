<template>
    <div class="untree_co-section">
        <div class="container">
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col-md-6 mb-5 mb-md-0">
                        <h2 class="h3 mb-3 text-black">Billing Details</h2>
                        <div class="p-3 p-lg-5 border bg-white">
                            <div class="form-group">
                                <label for="country" class="text-black">Country <span
                                        class="text-danger">*</span></label>
                                <select id="country" class="form-control" v-model="form.country" required>
                                    <option value="" disabled>Select a country</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="GH">Ghana</option>
                                    <option value="AL">Albania</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="CO">Colombia</option>
                                    <option value="DO">Dominican Republic</option>
                                </select>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="first_name" class="text-black">First Name <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="first_name" name="first_name"
                                        v-model="form.first_name" required>
                                    <span class="error" style="color: red; display: none;"></span>
                                </div>
                                <div class="col-md-6">
                                    <label for="last_name" class="text-black">Last Name <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="last_name" name="last_name"
                                        v-model="form.last_name" required>
                                    <span class="error" style="color: red; display: none;"></span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label for="company_name" class="text-black">Company Name </label>
                                    <input type="text" class="form-control" id="company_name" name="company_name"
                                        v-model="form.company_name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label for="address" class="text-black">Address <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="address" name="address"
                                        v-model="form.address" placeholder="Street address" required>
                                    <span class="error" style="color: red; display: none;"></span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="state" class="text-black">State / Country <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="state" name="state" v-model="form.state"
                                        required>
                                    <span class="error" style="color: red; display: none;"></span>
                                </div>
                                <div class="col-md-6">
                                    <label for="postal_code" class="text-black">Posta / Zip <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="postal_code" name="postal_code"
                                        v-model="form.postal_code" required>
                                    <span class="error" style="color: red; display: none;"></span>
                                </div>
                            </div>

                            <div class="form-group row mb-5">
                                <div class="col-md-6">
                                    <label for="email" class="text-black">Email Address <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="email" name="email" v-model="form.email"
                                        required>
                                    <span class="error" style="color: red; display: none;"></span>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="text-black">Phone <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="phone" name="phone" v-model="form.phone"
                                        placeholder="Phone Number" required>
                                    <span class="error" style="color: red; display: none;"></span>
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
                                    <div class="border p-3 mb-3">
                                        <button id="rzp-button1" class="btn btn-outline-dark btn-lg"><i
                                                class="fas fa-money-bill"></i> Own Checkout</button>
                                    </div>
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
                                        <button class="btn btn-black btn-lg py-3 btn-block" id="submit"
                                            type="submit">Place
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
                country: "",
                first_name: "",
                last_name: "",
                company_name: "",
                address: "",
                state: "",
                postal_code: "",
                email: "",
                phone: ""
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
                    country: this.form.country,
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    company_name: this.form.company_name,
                    address: this.form.address,
                    state: this.form.state,
                    postal_code: this.form.postal_code,
                    email: this.form.email,
                    phone: this.form.phone
                },
                productDetails: {
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
                        this.$store.commit('clearCart')
                        this.$router.push({ path: '/thankyou' })
                    }
                } else {
                    console.error('API response not OK', response.statusText)
                }
            } catch (error) {
                console.error("Error:", error)
            }

        }
    },
    mounted() {
        //validations
        $('#first_name, #last_name, #address, #state, #postal_code, #email, #phone').on('input', function (element) {
            let input = element.target.value
            let errorMessage = ''
            if (input === '') {
                errorMessage = (element.target.id.replace('_', ' ') + ' must not be empty').replace(/^./, str => str.toUpperCase())
            }
            else {
                if (element.target.id === 'first_name' || element.target.id === 'last_name' || element.target.id === 'state') {
                    let regex = /^[A-Za-z\s]+$/
                    if (!regex.test(input)) {
                        errorMessage = (element.target.id.replace('_', ' ') + ' can only have letters').replace(/^./, str => str.toUpperCase())
                    }
                }
                if (element.target.id === 'address') {
                    let regex = /^[A-Za-z0-9\s]+$/
                    if (!regex.test(input)) {
                        errorMessage = (element.target.id.replace('_', ' ') + ' can only have letters and numbers').replace(/^./, str => str.toUpperCase())
                    }
                }
                if (element.target.id === 'postal_code') {
                    let regex = /^[0-9]+$/
                    if (!regex.test(input)) {
                        errorMessage = (element.target.id.replace('_', ' ') + ' can only have numbers').replace(/^./, str => str.toUpperCase())
                    }
                }
                if (element.target.id === 'email') {
                    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (!regex.test(input)) {
                        errorMessage = "Email is not valid"
                    }
                }
                if (element.target.id === 'phone') {
                    let numberRegex = /^[0-9]+$/
                    let lengthRegex = /^[0-9]{1,10}$/
                    if (!numberRegex.test(input)) {
                        errorMessage = 'phone can only have numbers'.replace(/^./, str => str.toUpperCase())
                    } else {
                        if (!lengthRegex.test(input)) {
                            errorMessage = 'phone number should be 10 digits'.replace(/^./, str => str.toUpperCase())
                        }
                    }
                }

            }
            var errorElement = element.target.nextElementSibling;
            if (errorMessage) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = 'block';
                // document.getElementById('submit').disabled = true;
            } else {
                errorElement.style.display = 'none';
                // document.getElementById('submit').disabled = false;
            }
            validateAllInputs()
        })

        //razor-pay

        var options = {
            "key": "rzp_test_YrKYguMVe5OsOI", // Enter the Key ID generated from the Dashboard
            "amount": "1000",
            "currency": "INR",
            "description": "Acme Corp",
            "image": "example.com/image/rzp.jpg",
            "prefill":
            {
                "email": "gaurav.kumar@example.com",
                "contact": +919900000000,
            },
            config: {
                display: {
                    blocks: {
                        utib: { //name for Axis block
                            name: "Pay using Axis Bank",
                            instruments: [
                                {
                                    method: "card",
                                    issuers: ["UTIB"]
                                },
                                {
                                    method: "netbanking",
                                    banks: ["UTIB"]
                                },
                            ]
                        },
                        other: { //  name for other block
                            name: "Other Payment modes",
                            instruments: [
                                {
                                    method: "card",
                                    issuers: ["ICIC"]
                                },
                                {
                                    method: 'netbanking',
                                }
                            ]
                        }
                    },
                    hide: [
                        {
                            method: "upi"
                        }
                    ],
                    sequence: ["block.utib", "block.other"],
                    preferences: {
                        show_default_blocks: false // Should Checkout show its default blocks?
                    }
                }
            },
            "handler": function (response) {
                alert(response.razorpay_payment_id);
            },
            "modal": {
                "ondismiss": function () {
                    if (confirm("Are you sure, you want to close the form?")) {
                        txt = "You pressed OK!";
                        console.log("Checkout form closed by the user");
                    } else {
                        txt = "You pressed Cancel!";
                        console.log("Complete the Payment")
                    }
                }
            }
        };
        var rzp1 = new Razorpay(options);
        document.getElementById('rzp-button1').onclick = function (e) {
            rzp1.open();
            e.preventDefault();
        }
    }
}

function validateAllInputs() {
    let isValid = true
    $('.error').each(function () {
        if (this.style.display == 'block') {
            isValid = false
            return false
        }
    });
    if (isValid) {
        document.getElementById('submit').disabled = false
    } else {
        document.getElementById('submit').disabled = true
    }
}

</script>