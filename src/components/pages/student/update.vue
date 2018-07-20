<template>
    <div>
        <b-card header="Personal Information" header-tag="h4" class="bg-header-card">
            <div>
                <form method="" class="form-horizontal" @submit.prevent="onSubmit">
                    <component :is="currentView" :data="data" :page="'update'"></component>
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

    import studentBasic from './forms/basic';
    import studentAcademic from './forms/academic';
    import studentParent from './forms/gaurdian';

    export default {
        name: "staff-layout",
        components: {
            studentBasic,
            studentAcademic,
            studentParent
        },
        data(){
            return {
                currentView: '',
                schoolId: '',
                data: {}
            }
        },
        methods: {
            onSubmit: function () {
                this.$student.editStudent(this.studentId, this.data).then(response => {
                    if (typeof  response == 'object') {
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
        },
        mounted() {
            switch (this.$route.params.component) {
                case 'basic':
                    this.currentView = 'studentBasic';
                    break;
                case 'parent':
                    this.currentView = 'studentParent';
                    break;
                case 'academic':
                    this.currentView = 'studentAcademic';
                    break;
                default:
                    break;
            }

            // console.log('route is : ' + this.$route.params.id);
            this.studentId = this.$route.params.id; // get the id of the student from the route parameters

            // fetch the student information from the server
            this.$student.studentProfile(this.$route.params.id).then(data => {
                this.data = data;
                this.studentId = data.id;
            });
        }
    }
</script>












