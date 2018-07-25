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
                            <multiselect v-model="school_name" :show-labels="false" :options="schools" @input="getSchoolId"></multiselect>
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
    name: 'student-import',
    components: {
        Multiselect,
    },
    data(){
        return{
            schoolId: '',
            schoolIds: [], // to hold the school id and the name of selected LGA
            lga: '',  // selected local government
            lgasInfo: [], // hold the local government and their ids
            lgas: [], // hold the local government names
            schools: [], // hold the list of the of the school in the selected local govt
            file: '',
            school_name: '',
        }
    },
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        submitFile(){
            let formData = new FormData()
            formData.append('upload', this.file);
            this.$student.importStudent(this.schoolId, formData).then(response => {
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
            // get lga id
            let _lgaId = this.lgasInfo.filter(item => {
                return (item.name === this.lga);
            });

            //Since array index is starting from 0, we need to increment by 1 to start 
            // the index from 1
            this.$lga.getLgasSchool(_lgaId[0].id).then(data => {
                this.schools = [];
                this.school_name = '';
                data.forEach(item => {
                    this.schools.push(item.name);
                });
            })
        }, 
        getSchoolId(){
            let _selectedSchool = this.allSchools.filter(school => {
                return (school.name == this.school_name);
            })

            this.schoolId = _selectedSchool[0].id;
        } 
    },
    mounted() {
        let settings = JSON.parse(localStorage.getItem('settings'));
         if(settings) {
            //populatre LGA
            settings.lga_areas.forEach(item => {
                this.lgasInfo.push(item);
                this.lgas.push(item.name);
            })
        }

        //get list of schools
        this.$school.allSchools().then(data => {
            this.allSchools = data.data;
        })
    },
    watch: {
        allSchools(value){
            //allSchools is
            value.forEach(school => {
                this.schools.push(school.name);
            })

            // Get the school name from the school list using the school id
            // after all school information has been loaded from the database
            let _school = value.filter(school => {
                return (school.id == this.data.school_id);
            })

            this.schoolName = _school[0].name;
            // this.data.school_id = data.school_id;
        }
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
