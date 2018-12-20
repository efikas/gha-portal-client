<template>
    <div>
       <div>
           <span class="text-error m-3" v-if="action == 'create'">
               Note: Do not create a future term
           </span>
       </div>
        <div class="row">
            <div class="col-5">
                <label>Term</label>
                <select class="form-control" size="1"
                        @blur="$v.term.name.$touch()"
                        v-model="term.name">
                    <option value="">Select Term</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                </select>
            </div>
            <div class="col-5">
                <label>Session</label>
                <select class="form-control" size="1"
                        @blur="$v.term.session.$touch()"
                        v-model="term.session">
                    <option value="">Select Session</option>
                    <option :value="term_session">
                        {{ term_session }}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <button class="btn btn-success btn-style"
                        :disabled="$v.term.$invalid"
                        @click="createTerm">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {required} from 'vuelidate/lib/validators';
    import Toaster from '../../../../mixins/toaster';

    export default {
        name: "create-term",
        mixins: [Toaster],
        props: {
            action: {type: String},
            termId: {type: Number}
        },
        data() {
            return {
                term: {
                    name: '',
                    session: '',
                },
                term_session : '2018/2019',
            }
        },
        validations: {
            term: {
                name: {required},
                session: { required},
            }
        },
        computed: {
            // ...mapGetters(['class_arms', 'data', 'school_classes', 'schoolId']),

        },
        methods: {
            createTerm: function(){
                // if (this.schoolId) {
                //     let form = {
                //         id: this.schoolId,
                //         classes: {
                //             added: this.addedClass,
                //             enabled: this.enabledClass,
                //             disabled: this.disabledClass,
                //         }
                //     };
                //     this.$store.dispatch('storeClass', form).then(() => {
                //         this.successMsg('Record updated!', 'Success');
                //         location.reload();
                //         //setTimeout(() => this.$emit('closeModal', true), 500);
                //     }).catch(() => {
                //         this.errorMsg('Error saving data!', 'Error');
                //         this.isSubmitable = true;
                //     });
                // }
            }
        }
    }
</script>

<style scoped>
    .btn-style {
        margin-top: 30px
    }
</style>