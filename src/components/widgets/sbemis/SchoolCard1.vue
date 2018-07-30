<template>
    <div class="skeleton" style="margin: 2%;" v-if="!school.id">
        <skeleton-loading>
            <row
                    :gutter="{top: '10px', bottom: '10px'}"
            >
                    <square-skeleton
                            :boxProperties="{
                                bottom: '15px',
                                height: '170px'
                            }"
                    >
                    </square-skeleton>
            </row>
        </skeleton-loading>
    </div>
    <b-card v-else>
        <div class="row">
            <div class="col-6">
                <gmap-map :center="center" :zoom="16" class="gmap" ref="gmap1">
                    <gmap-marker v-for="m in markers" :key="m.position.lat" :position="m.position" :clickable="true"
                                 :draggable="true" @click="center=m.position"></gmap-marker>
                </gmap-map>
            </div>
            <div class="col-6">
                <div style="display: flex; flex: fit-content; flex-direction: column; justify-content: space-between">
                    <div class="row mb-4" style="justify-content: flex-start; flex: 1">
                        <h4 class="default-color">
                            <router-link :to="{name:'school', params:{id:school.id}}">{{ school.name }}</router-link>
                        </h4>
                        <h5>{{ school.address }}</h5>
                    </div>

                    <div class="row" style="flex: 1; flex-direction: row; display: flex; justify-content: space-around">
                        <div class="text-center">
                            <h6>
                                <router-link :to="{name:'school-staffs', params: {id: school.id}}">All Staff
                                </router-link>
                            </h6>
                            <h1>{{ school.staffs.teaching + school.staffs.none_teaching }}</h1>
                        </div>
                        <div class="text-center">
                            <h6>
                                <router-link :to="{name:'school-staffs', params: {id: school.id}, query:{t:1}}">Teaching
                                    Staff
                                </router-link>
                            </h6>
                            <h1>{{ school.staffs.teaching }}</h1>
                        </div>
                        <div class="text-center">
                            <h6>
                                <router-link :to="{name:'school-staffs', params: {id: school.id}, query:{t:0}}">
                                    Non-Teaching Staff
                                </router-link>
                            </h6>
                            <h1>{{ school.staffs.none_teaching }}</h1>
                        </div>
                        <div class="text-center">
                            <h6><a :href="`/school/${school.id}/students`">Students</a></h6>
                            <h1>{{ school.students }}</h1>
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
    import {mapGetters} from 'vuex'
    import store from '../../../store/store'

    Vue.use(VueGoogleMaps, {
        load: {
            key: store.state.gmap_key
            // v: 'OPTIONAL VERSION NUMBER',
            // libraries: 'places', // If you need to use place input
        }
    })
    export default {
        data() {
            return {
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
        computed: mapGetters([
            'school'
        ]),
    }
</script>

<style scoped>
    .skeleton {
        padding: 0;
    }
    .gmap {
        width: 100%;
        height: 150px;
        margin: 5px auto;
    }
</style>