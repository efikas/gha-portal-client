<template>
    <div>
        <div class="row">
        <div class="col-lg-10">
            <div role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info" class="text-left">
                            <i class="fa fa-user-o fb_text"></i>
                            School
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                            aaaaaa
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion2 variant="info" class="text-left">
                            Staff
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <p class="card-text">
                            aaaaaaaaaaaaaa
                        </p>
                    </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion3 variant="info" class="text-left">
                            Student
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            ssssssssssssssssss
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
export default {
    name: 'vue2-dropzone',
    components: {
        vueDropzone: vue2Dropzone,
    },
    data(){
        return{
            
        }
    },
    methods: {
         
    }
}
</script>
<style scoped>
 .dz-progress{
        background-color: #08aa80 !important;
    }
</style>
