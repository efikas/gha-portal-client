<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card> 
                    <div class="row">
                        <div class="col-lg-6">
                            <label>LGA</label>
                            <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getSchool"></multiselect>
                        </div>
                        <div class="col-lg-6">
                            <label>Schools</label>
                            <multiselect v-model="school" :show-labels="false" :options="schools" @input="getSchoolId"></multiselect>
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
import Multiselect from 'vue-multiselect';

export default {
    name: 'school-import',
    components: {
         Multiselect,
    },
    data(){
        return{
            lga: '',
            school: '',
            lgas: [],
            schools: [],
            file: '',
            schoolId: 0,
            schoolIds: [], // to hold the school id and the name of selected LGA
        }
    },
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        submitFile(){
            let formData = new FormData()
            formData.append('upload', this.file);
            this.$staff.importStaff(this.schoolId, formData).then(response => {
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },
        uploadFile(){
            this.$refs.file.click();
        },
        getSchool(){
            //Since array index is starting from 0, we need to increment by 1 to start 
            // the index from 1
            this.$lga.getLgasSchool(this.lgas.indexOf(this.lga) + 1).then(data => {
                this.schools = [];
                this.school = '';
                data.data.forEach(item => {
                    this.schools.push(item.school_name);
                    this.schoolIds.push({
                        id: item.id,
                        name: item.school_name,
                    });
                });
            })
        },
        getSchoolId(){
            this.schoolId = this.schoolIds[this.schools.indexOf(this.school)].id;
            // console.log(this.schoolId);
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
