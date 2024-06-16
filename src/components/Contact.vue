<template>
    <!-- Start Contact Form -->
    <div class="untree_co-section">
        <div class="container" id="contact_form">

            <div class="block">
                <div class="row justify-content-center">


                    <div class="col-md-8 col-lg-8 pb-4">


                        <div class="row mb-5">
                            <div class="col-lg-4">
                                <div class="service no-shadow align-items-center link horizontal d-flex active"
                                    data-aos="fade-left" data-aos-delay="0">
                                    <div class="service-icon color-1 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </div> <!-- /.icon -->
                                    <div class="service-contents">
                                        <p>1832 Sector 50, Faridabad, Haryana, India</p>
                                    </div> <!-- /.service-contents-->
                                </div> <!-- /.service -->
                            </div>

                            <div class="col-lg-4">
                                <div class="service no-shadow align-items-center link horizontal d-flex active"
                                    data-aos="fade-left" data-aos-delay="0">
                                    <div class="service-icon color-1 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                        </svg>
                                    </div> <!-- /.icon -->
                                    <div class="service-contents">
                                        <p>ashishdubey743@gmail.com</p>
                                    </div> <!-- /.service-contents-->
                                </div> <!-- /.service -->
                            </div>

                            <div class="col-lg-4">
                                <div class="service no-shadow align-items-center link horizontal d-flex active"
                                    data-aos="fade-left" data-aos-delay="0">
                                    <div class="service-icon color-1 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </div> <!-- /.icon -->
                                    <div class="service-contents">
                                        <p>+91 8076277848</p>
                                    </div> <!-- /.service-contents-->
                                </div> <!-- /.service -->
                            </div>
                        </div>

                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="text-black" for="first_name">First name</label>
                                        <input type="text" class="form-control" id="first_name" pattern="[A-Za-z]+"
                                            placeholder="Enter First name" v-model="form.first_name" required>
                                        <span id="error" style="color: red; display: none;"></span>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="text-black" for="last_name">Last name</label>
                                        <input type="text" class="form-control" id="last_name"
                                            placeholder="Enter Last name" pattern="[A-Za-z]+" v-model="form.last_name"
                                            required>
                                        <span id="error" style="color: red; display: none;"></span>

                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="text-black" for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter Email"
                                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" v-model="form.email" required>
                                <span id="error" style="color: red; display: none;"></span>
                            </div>

                            <div class="form-group mb-5">
                                <label class="text-black" for="message">Message</label>
                                <textarea name="" class="form-control" id="message" cols="30" rows="5"
                                    placeholder="Type your message here..." v-model="form.message" required></textarea>
                                <span id="error" style="color: red; display: none;"></span>
                            </div>

                            <button id="submit" type="submit" class="btn btn-primary-hover-outline">Send
                                Message</button>
                        </form>

                    </div>

                </div>

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
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- End Contact Form -->
</template>
<style>
#submit:disabled {
    background-color: rgb(191, 191, 191);
    color: black;
}
</style>
<script>
$(document).ready(function () {

    if (location.pathname === '/contact') {
        var scrollSpeed = 500;

        $('html, body').animate({
            scrollTop: $('#contact_form').offset().top
        }, scrollSpeed);
    }

    $('#first_name, #last_name, #email, #message').on('input', function (element) {
        var input = element.target.value;
        var specialCharRegex = /^[A-Za-z\s]+$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        var errorMessage = '';

        if (input === '') {
            errorMessage = (element.target.id.replace('_', ' ') + ' must not be empty').replace(/^./, str => str.toUpperCase());
        } else if (element.target.id === 'email' && !emailRegex.test(input)) {
            errorMessage = 'Email is not valid';
        }
        else if (element.target.id !== 'email' && !specialCharRegex.test(input) && element.target.id !== 'message') {
            errorMessage = (element.target.id.replace('_', ' ') + ' can only have letters').replace(/^./, str => str.toUpperCase());
        }

        var errorElement = element.target.nextElementSibling;
        if (errorMessage) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            document.getElementById('submit').disabled = true;
        } else {
            errorElement.style.display = 'none';
            document.getElementById('submit').disabled = false;
        }
    });
});

export default {
    name: "Contact",
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                message: '',
            }
        }
    },
    methods: {
        async submit() {
            let data = {
                first_name: this.form.first_name,
                last_name: this.form.last_name,
                email: this.form.email,
                message: this.form.message,
            }
            Api(base_url + '/api/contacts', data, 'POST').then(responseData => {
                console.log('API response:', responseData);
                if (responseData.code === 200) {
                    var modal = new bootstrap.Modal(document.getElementById('modal'));
                    document.querySelector('.modal-body').textContent = responseData.message
                    modal.show();

                }
            })
        },
        clearForm(){
            this.form.first_name = ''
            this.form.last_name = ''
            this.form.email = ''
            this.form.message = ''
        }
    },
    mounted() {
        let modal = document.getElementById('modal')
        modal.addEventListener('hidden.bs.modal', ()=>{
            this.clearForm()
        })
    }
}
</script>
