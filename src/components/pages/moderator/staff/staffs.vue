<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <SchoolCard></SchoolCard>

            <b-card header="List of Staffs" header-tag="h4" class="bg-header-card">
                <div style="margin: 2%" v-if="loading">
                    <skeleton-loading>
                        <row :gutter="{top: '20px'}">
                            <square-skeleton
                                    :count="10"
                                    :boxProperties="{
                                    height: '55px',
                                    width: '100%',
                                    bottom: '10px'
                                }"
                            >
                            </square-skeleton>
                        </row>
                    </skeleton-loading>
                </div>
                <div v-else>
                    <b-modal id="modal-form-class" ref="class_modal" title="Class Taught" size="lg" lazy centered hide-footer>
                        <class-taught @closeModal="()=>$refs.class_modal.hide()"></class-taught>
                    </b-modal>
                    <v-client-table :data="staffs" :columns="columns">
                        <span slot="id" slot-scope="staff">{{ staff.index }}</span>
                        <router-link
                                class="list-font sch-link"
                                slot="Name"
                                slot-scope="staff"
                                :to="{name: 'staff-profile', params:{id: staff.row.id}}">
                            {{staff.row.first_name + ' ' + staff.row.last_name + ' ' + staff.row.middle_name}}
                        </router-link>
                        <div slot="Actions" slot-scope="staff">
                            <a href="javascript: void(0)" v-b-modal.modal-form-class @click="click(staff.row.id)" class="">
                                classes
                            </a>
                        </div>
                    </v-client-table>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Toaster from '../../../mixins/toaster'
    import StudentsMixins from '../../admin/staff/mixins/students_mixins';
    import ClassTaught from '../class/class';

    export default {
        name: "admin_staff_list",
        mixins: [Toaster, StudentsMixins],
        components: {
            ClassTaught
        },
        methods: {
            click(staff_id){
                console.log(staff_id);
            }
        }
    }
</script>
<style scoped>

    .sch-link {
        display: block;
        padding: 3px;
    }

    .sch-link:hover {
        text-decoration: underline !important;
    }
</style>
