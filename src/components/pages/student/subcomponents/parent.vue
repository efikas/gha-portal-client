<template>
    <div>
         <b-card header="Parent Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form method="" class="form-horizontal" @submit.prevent="onSubmit">
                     <div class="form-horizonal bordered-box">
                         <div class="row odd-row">
                             <div class="col-md-12">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8">Are both parents alive?
                                     </label>
                                     <div class="col-md-12">
                                         <b-form-radio-group v-model="data.parent_status" :options="parentOptions" />
                                        </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                         <div class="row">
                             <div class="col">
                                 <br/><br/>
                                 <a class="btn btn-outline-primary pull-right mb-2" @click="addMore()">+ ADD MORE</a>
                                <br/><br/>
                             </div>
                         </div>
                        <div v-for="(guardian, index) in data.guardians" class="mb-5">
                            <div class="form-horizonal bordered-box">
                                <div class="row even-row">
                                    <div class="col-md-12">
                                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red" @click="removeGuardian(index)">X</a></div>
                                    </div>
                                 <div class="col-xs-12 col-sm-6 col-md-2">
                                     <div class="form-group p-10">
                                         <label class="control-label col-md-8">Title</label>
                                         <div class="col-md-12">
                                             <select v-model="data.guardians[index].title" class="form-control" size="1">
                                                 <option value="">Select Title</option>
                                                 <option v-for="appellation in appellations" :value="appellation.appellation">{{appellation.appellation}}</option>
                                             </select>

                                         </div>
                                     </div>
                                 </div>
                                 <div class="col-xs-12 col-sm-6 col-md-7">
                                     <div class="form-group p-10">
                                         <label class="control-label col-md-12" for="g1fullname">Fullname
                                         </label>
                                         <div class="col-md-12">
                                             <input type="text" class="form-control" v-model="data.guardians[index].fullname" id="g1fullname" placeholder="Fullname">
                                         </div>
                                     </div>
                                 </div>
                                 <div class="col-xs-12 col-sm-6 col-md-3">
                                     <div class="form-group p-10">
                                         <label class="control-label">Relationship
                                         </label>
                                         <div class="col-md-12">
                                             <select id="eg1relationship" name="g1relationship" v-model="data.guardians[index].relationship" class="form-control" size="1">
                                                 <option value="">Select Relationship</option>
                                                 <option v-for="relation in relationship" :value="relation.id">{{relation.type}}</option>
                                             </select>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                                <div class="row odd-row">
                                 <div class="col-xs-12 col-sm-6 col-md-4">
                                     <div class="form-group p-10">
                                         <label class="control-label col-md-8" for="g1_occupation">Occupation
                                         </label>
                                         <div class="col-md-12">
                                             <input type="text" class="form-control" v-model="data.guardians[index].occupation" id="g1_occupation" placeholder="Occupation">
                                         </div>
                                     </div>
                                 </div>
                                 <div class="col-xs-12 col-sm-6 col-md-4">
                                     <div class="form-group p-10">
                                         <label class="control-label col-md-12" for="g1mobile">Mobile Number
                                         </label>
                                         <div class="col-md-12">
                                             <input type="tel" class="form-control" v-model="data.guardians[index].mobile" id="g1mobile" placeholder="">
                                         </div>
                                     </div>
                                 </div>
                                 <div class="col-xs-12 col-sm-6 col-md-4">
                                     <div class="form-group p-10">
                                         <label class="control-label" for="g1_phone">Phone Number
                                         </label>
                                         <div class="col-md-12">
                                             <input type="tel" class="form-control" v-model="data.guardians[index].phone" id="g1_phone" placeholder="08063888888">
                                         </div>
                                     </div>
                                 </div>
                             </div>
                                <div class="row even-row">
                                 <div class="col-xs-12 col-sm-6 col-md-4">
                                     <div class="form-group p-10">
                                         <label class="control-label col-md-8" for="g1_email">Email
                                         </label>
                                         <div class="col-md-12">
                                             <input type="email" class="form-control" v-model="data.guardians[index].email" id="g1_email" placeholder="">
                                         </div>
                                     </div>
                                 </div>
                                 <div class="col-xs-12 col-sm-6 col-md-4">
                                     <div class="form-group p-10">
                                         <label class="control-label">Religion
                                         </label>
                                         <div class="col-md-12">
                                             <select id="example-select" v-model="data.guardians[index].religion" name="g1_religious_status" class="form-control" size="1">
                                                 <option value="">Select Religion</option>
                                                 <option v-for="religion in religions" :value="religion.id">{{religion.religion}}</option>
                                             </select>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                                <div class="row odd-row">
                                 <div class="col-xs-12 col-sm-12 col-md-9">
                                     <div class="form-group p-10">
                                         <label class="control-label col-md-8" for="g1_contact_address">Contact Address
                                         </label>
                                         <div class="col-md-12">
                                            <textarea cols="6" class="form-control" id="g1_contact_address" v-model="data.guardians[index].contact_address">
                                            </textarea>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                            </div>
                        </div>
                     <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
                 </form>
             </div>
        </b-card>
    </div>
</template>
<script>
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
export default {
    name: 'student-parent',
    data() {
        return {
            appellations: {},
            religions: {},
            relationship: {},
            schoolId: '',
            parentOptions: [{ text: 'Both Alive', value: '1' },{ text: 'Father Only', value: '2' },{ text: 'Mother Only', value: '3' },{ text: 'None', value: '4' }],
            data: {
                studentId: '',
                parent_status: '',
                guardians: [{}],
            }
        }
    },
    methods: {
       onSubmit: function(){
            this.$student.editStudent(this.studentId, this.data).then(response => {
                if (typeof  response == 'object'){
                    this.$swal({
                        type: 'success',
                        title: 'Srudent Record updated Successfully!',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.value) {
                            window.location.href = 'http://localhost:8080/student/' + this.studentId;
                        }
                    })
                }
            })
        },
        addMore() {
           this.data.guardians.push({
               title: '',
               fullname: '',
               relationship: '',
               occupation: '',
               mobile: '',
               phone: '',
               email: '',
               religious: '',
               contact_address: '',
           });
        },
        removeGuardian(index) {
            this.data.guardians.splice(index, 1);
        },
    },
    mounted: function() {
        //populate the select boxes using the settings data from local storage
        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.appellations = settings.appellations;
            this.religions = settings.religions;
            this.relationship = settings.guardians;
        }

        // console.log('route is : ' + this.$route.params.id);
        this.studentId = this.$route.params.id;
        this.$student.studentProfile(this.$route.params.id).then(data => {
            this.data = data;
        });
    },
    destroyed: function() {

    }
}
</script>
<style type="text/css" scoped>
#color {
    height: 35px;
}
    /deep/ .form-control:disabled{
        cursor: not-allowed;
    }
    .disabled{
        cursor:not-allowed;
    }
.form-control:active, .input-group .form-control:hover{
    z-index: 1;
}

.dropzone_wrapper {
    width: 100%;
}
.align-left{
    float: left;
}
    .align-right{
        float: right;
    }

tab-content {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}

.even-row{background-color:
#fafafa;border-top:1px dashed #959DCC;border-bottom:1px dashed #959DCC;min-height:62px;padding:8px 0;}
.odd-row{padding:8px 0;}
form .odd-row:first-of-type{
    border-top:1px dashed #959DCC;
}
.form-group label{font-size:.8rem!important; letter-spacing:1px; color:#684348!important;}
.bordered-box{/*margin:0 9px!important;*/border:1px dashed #a2b0b6;padding:16px!important;display:inline-block;position:relative;width:100%;border-radius:6px;/*box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.14);color:rgba(0,0,0, 0.87);*/background:#fff;}
.col-md-m6.bordered-box{width:calc(50% - 18px)!important;}
.divider-dotted{height:1px;border-bottom:1px dotted #e0e0e0;float:left;width:100%;margin:32px 0;}

.classroom-wrapper-div:not(:last-of-type) {
    border-bottom: solid #650606 2px;
    margin: 20px 0px 20px 0px
}

.remove-btn-div {
    height: 30px;
    padding: 0px 10px 0px 0px;
}

.red {
    color:  red !important;
    font-weight: bold;
}
.red:hover {
    color:  white !important;
}

</style>