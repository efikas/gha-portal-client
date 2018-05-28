<template>
    <div>
         <b-card header="Parent Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form method="" class="form-horizontal">
                     <div class="form-horizonal bordered-box">
                         <div class="row odd-row">
                             <div class="col-md-12">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="admission_date">Are both parents alive?
                                     </label>
                                     <div class="col-md-12">
                                         <div class="radio">
                                             <b-form-radio name="parent_status" v-model="data.parent_info.parent_status">
                                                 Both Alive
                                             </b-form-radio>
                                         </div>
                                         <div class="radio">
                                             <b-form-radio name="parent_status"  v-model="data.parent_info.parent_status">
                                                 Father Only
                                             </b-form-radio>
                                         </div>
                                         <div class="radio">
                                             <b-form-radio name="parent_status"  v-model="data.parent_info.parent_status">
                                                 Mother Only
                                             </b-form-radio>
                                         </div>
                                         <div class="radio">
                                             <b-form-radio name="parent_status"  v-model="data.parent_info.parent_status">
                                                 None
                                             </b-form-radio>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="row even-row">
                             <div class="col-xs-12 col-sm-6 col-md-2">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g1title">Title
                                     </label>
                                     <div class="col-md-12">
                                         <input type="text" class="form-control" v-model="data.parent_info.g1title" id="g1title" placeholder="Title">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-7">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-12" for="g1fullname">Fullname
                                     </label>
                                     <div class="col-md-12">
                                         <input type="text" class="form-control" v-model="data.parent_info.g1fullname" id="g1fullname" placeholder="Fullname">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-3">
                                 <div class="form-group p-10">
                                     <label class="control-label" for="g1relationship">Relationship
                                     </label>
                                     <div class="col-md-12">
                                         <select id="eg1relationship" name="g1relationship" v-model="data.parent_info.g1relationship" class="form-control" size="1">
                                             <option value="0">
                                                 Select Education Level
                                             </option>
                                             <option value="1">1930</option>
                                             <option value="2">1931</option>
                                             <option value="3">1932</option>
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
                                         <input type="text" class="form-control" v-model="data.parent_info.g1_occupation" id="g1_occupation" placeholder="Occupation">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-12" for="g1mobile">Mobile Number
                                     </label>
                                     <div class="col-md-12">
                                         <input type="tel" class="form-control" v-model="data.parent_info.g1mobile" id="g1mobile" placeholder="">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label" for="g1_phone">Phone Number
                                     </label>
                                     <div class="col-md-12">
                                         <input type="tel" class="form-control" v-model="data.parent_info.g1_phone" id="g1_phone" placeholder="08063888888">
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
                                         <input type="email" class="form-control" v-model="data.parent_info.g1_email" id="g1_email" placeholder="">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label" for="g1_religious_status">Religion
                                     </label>
                                     <div class="col-md-12">
                                         <select id="example-select" v-model="data.parent_info.g1_religious_status" name="g1_religious_status" class="form-control" size="1">
                                             <option value="0">
                                                 Select Religion
                                             </option>
                                             <option value="1">1930</option>
                                             <option value="2">1931</option>
                                             <option value="3">1932</option>
                                         </select>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g1_primary_contact">Is Primary Contact?
                                     </label>
                                     <div class="col-md-12">
                                         <div class="radio">
                                             <b-form-radio name="g1_primary_contact" v-model="data.parent_info.g1_primary_contact">
                                                 Yes
                                             </b-form-radio>
                                         </div>
                                         <div class="radio">
                                             <b-form-radio name="g1_primary_contact" v-model="data.parent_info.g1_primary_contact">
                                                 No
                                             </b-form-radio>
                                         </div>
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
                                            <textarea cols="6" class="form-control" id="g1_contact_address" v-model="data.parent_info.g1_contact_address">
                                            </textarea>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="divider-dotted"></div>
                     <div class="form-horizonal bordered-box">
                         <div class="row odd-row">
                             <div class="col-xs-12 col-sm-6 col-md-2">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g2title">Title
                                     </label>
                                     <div class="col-md-12">
                                         <input type="text" class="form-control" v-model="data.parent_info.g2title" id="g2title" placeholder="Title">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-7">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-12" for="g2_full_name">Fullname
                                     </label>
                                     <div class="col-md-12">
                                         <input type="text" class="form-control" id="g2_full_name" v-model="data.parent_info.g2_full_name" placeholder="Fullname">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-3">
                                 <div class="form-group p-10">
                                     <label class="control-label" for="g2_relationship">Relationship
                                     </label>
                                     <div class="col-md-12">
                                         <select id="g2_relationship" v-model="data.parent_info.g2_relationship" name="g2_relationship" class="form-control" size="1">
                                             <option value="0">
                                                 Select Education Level
                                             </option>
                                             <option value="1">1930</option>
                                             <option value="2">1931</option>
                                             <option value="3">1932</option>
                                         </select>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="row even-row">
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g2_occupation">Occupation
                                     </label>
                                     <div class="col-md-12">
                                         <input type="text" class="form-control" v-model="data.parent_info.g2_occupation" id="g2_occupation" placeholder="Occupation">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-12" for="g2_mobile">Mobile Number
                                     </label>
                                     <div class="col-md-12">
                                         <input type="tel" class="form-control" v-model="data.parent_info.g2_mobile" id="g2_mobile" placeholder="">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label" for="g2_phone">Phone Number
                                     </label>
                                     <div class="col-md-12">
                                         <input type="tel" class="form-control" v-model="data.parent_info.g2_phone" id="g2_phone" placeholder="08063888888">
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="row odd-row">
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g2_email">Email
                                     </label>
                                     <div class="col-md-12">
                                         <input type="email" class="form-control" v-model="data.parent_info.g2_email" id="g2_email" placeholder="">
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label" for="text">Religion
                                     </label>
                                     <div class="col-md-12">
                                         <select id="g2_religious_status" v-model="data.parent_info.g2_religious_status" name="g2_religious_status" class="form-control" size="1">
                                             <option value="0">
                                                 Select Religion
                                             </option>
                                             <option value="1">1930</option>
                                             <option value="2">1931</option>
                                             <option value="3">1932</option>
                                         </select>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-xs-12 col-sm-6 col-md-4">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g2_primary_contact">Is Primary Contact?
                                     </label>
                                     <div class="col-md-12">
                                         <div class="radio">
                                             <b-form-radio name="g2_primary_contact" v-model="data.parent_info.g2_primary_contact">
                                                 Yes
                                             </b-form-radio>
                                         </div>
                                         <div class="radio">
                                             <b-form-radio name="g2_primary_contact" v-model="data.parent_info.g2_primary_contact">
                                                 No
                                             </b-form-radio>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="row even-row">
                             <div class="col-xs-12 col-sm-12 col-md-9">
                                 <div class="form-group p-10">
                                     <label class="control-label col-md-8" for="g2_contact_address">Contact Address
                                     </label>
                                     <div class="col-md-12">
                                            <textarea cols="6" class="form-control" id="g2_contact_address" v-model="data.parent_info.g2_contact_address">
                                            </textarea>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <button class="btn btn-primary btn-lg btn-school pull-right" @click="onComplete()">Submit</button>
                 </form>
             </div>
        </b-card>
    </div>
</template>
<script>
import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)
export default {
    name: 'basic.vue',
    data() {
        return {
            schoolId: '',
            data: {
                parent_info: {
                    parent_status: '',
                    g1title: '',
                    g1fullname: '',
                    g1relationship: '',
                    g1_occupation: '',
                    g1mobile: '',
                    g1_phone: '',
                    g1_email: '',
                    g1_religious_status: '',
                    g1_primary_contact: '',
                    g1_contact_address: '',
                    g2title: '',
                    g2_full_name: '',
                    g2_relationship: '',
                    g2_occupation: '',
                    g2_mobile: '',
                    g2_phone: '',
                    g2_email: '',
                    g2_religious_status: '',
                    g2_primary_contact: '',
                    g2_contact_address: '',
                }
            }
        }
    },
    methods: {
       onComplete: function(){
            this.$student.addStudent(1,this.data).then(response => {

            })
        }
    },
    mounted: function() {

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

</style>