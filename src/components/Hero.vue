<script>
export default {
    name: "Hero"
}
</script>

<template>
    <!-- Start Hero Section -->
    <div class="hero">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                        <p class="mb-4">Modern Interior Design Studio transforms spaces with innovative, stylish interiors tailored to your unique vision. Our expert team ensures every project blends functionality with exceptional aesthetics.</p>
                        <p><router-link to="/shop" class="btn btn-secondary me-2">Shop Now</router-link></p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap">
                        <img src="../../public/images/couch.png" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero Section -->
</template>