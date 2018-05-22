<template>
    <b-card>
        <div class="row" :if="iData.length > 0">
            <div class="col-6">
                <gmap-map :center="center" :zoom="16" class="gmap" ref="gmap1">
                    <gmap-marker v-for="m in markers" :key="m.position.lat" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
                </gmap-map>
            </div>
            <div class="col-6">
                <div style="display: flex; flex: fit-content; flex-direction: column; justify-content: space-between">
                    <div class="row mb-4" style="justify-content: flex-start; flex: 1">
                        <h3>{{ this.schoolName }}</h3>
                        <h5>{{ this.schoolAddress }}</h5>
                    </div>

                    <div class="row" style="flex: 1; flex-direction: row; display: flex; justify-content: space-around">
                        <div class="text-center">
                            <h5>Teaching Staff</h5>
                            <h1>{{ this.totalTeachingStaff }}</h1>
                        </div>
                        <div class="text-center" >
                            <h5>Non-Teaching Staff</h5>
                            <h1>{{ this.totalNonTeachingStaff }}</h1>
                        </div>
                        <div class="text-center">
                            <h5><a :href="`/school/${this.schoolId}/students`">Students</a></h5>
                            <h1>{{ this.totalStudent }}</h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    </b-card>
</template>

<script>
    import Vue from 'vue';
    import * as VueGoogleMaps from 'vue2-google-maps'
    import store from 'src/store/store.js'
    Vue.use(VueGoogleMaps, {
        load: {
            key: store.state.gmap_key
            // v: 'OPTIONAL VERSION NUMBER',
            // libraries: 'places', // If you need to use place input
        }
    })
    export default {
        name: "SchoolCard.vue",
        props: ['iData'],
        data() {
            return {
                schoolName: '',
                schoolAddress: '',
                totalStudent: 0,
                totalTeachingStaff: 0,
                totalNonTeachingStaff: 0,
                schoolId: '',
                center: {
                    lat: 7.6401306,
                    lng: 5.2033970
                },
                markers: [{
                    position: {
                        lat: 7.6401306,
                        lng: 5.2033970
                    }
                }]
                }
        },
        watch: {
            iData(data){
                this.totalNonTeachingStaff = data.staffs.none_teaching;
                this.totalTeachingStaff = data.staffs.teaching;
                this.totalStudent = data.students;
                this.schoolName = data.name;
                this.schoolAddress = data.address;
            }
        }
    }
</script>

<style scoped>
    .gmap {
        width: 100%;
        height: 150px;
        margin: 5px auto;
    }
</style>