<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card> 
                    <div class="row">
                        <div class="col-lg-6">
                            <label>LGA</label>
                            <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getLgaId"></multiselect>
                        </div>
                    </div>
                    <br><br>
                    <input type="file" id="file" ref="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" v-on:change="handleFileUpload()"/>
                    <div class="upload" v-on:click="uploadFile()"> Click to upload File</div>
                    <br/><br/>
                    <button v-on:click="submitFiles()">Submit</button>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
// import vue2Dropzone from 'vue2-dropzone'
// import 'vue2-dropzone/dist/vue2Dropzone.css'
import Multiselect from 'vue-multiselect';
import {apiURL} from '../../../packages/resources'

export default {
    name: 'school-import',
    components: {
        // vueDropzone: vue2Dropzone,
         Multiselect,
    },
    data(){
        return{
            lga: '',
            lgas: [],
            lgaId: 2,
            file: '',
        }
    },
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        submitFiles(){
            let formData = new FormData()
            formData.append('upload', this.file);
            this.$school.importSchool(this.lgaId, formData).then(response => {
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },
        uploadFile(){
            this.$refs.file.click();
        },
        getLgaId(){
            this.lgaId = this.lgas.indexOf(this.lga) + 1;
            // console.log(this.lgaId);
        } 
    },
    mounted() {
        this.$lga.getLgas().then(data => {
            data.forEach(item => {
                this.lgas.push(item.name);
            });
        })
    }
}
</script>
<style scoped>
 .dz-progress{
        background-color: #08aa80 !important;
    }

input[type="file"]{
    position: absolute;
    top: -500px;
  }

  div.upload{
    width: 400px;
    cursor: pointer;
    height: 100px;
    background-color: indianred;
    text-align: center;
    font-weight: bold;
    color: whitesmoke;
    padding-top: 30px;
    font-size: 1.2em;
  }

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
