import {mapGetters} from 'vuex'

const tabsMixins = {
    // data() {
    //     return {
    //         school:{},
    //     }
    // },
    computed: {
        ...mapGetters([
            'school',
            'data'
        ]),
        power_sources() {
            if (!this.school.power_source_ids) return;
            return this.school.power_source_ids.map(key=>{
               return this.data.power_sources[key].power_sources;
            }).join(', ')
        },
        waters() {
            if (!this.school.water_ids) return;
            return this.school.water_ids.map(key=>{
                return this.data.water[key].source;
            }).join(', ')
        },
        healths() {
            if (!this.school.health_ids) return;
            return this.school.health_ids.map(key=>{
                return this.data.healths[key].facility;
            }).join(', ')
        },
        toilets() {
            if (!this.school.toilet_ids) return;
            return this.school.toilet_ids.map(key=>{
                return this.data.toilet_types[key].type;
            }).join(', ')
        },
        learning() {
            if (!this.school.learning_ids) return;
            return this.school.learning_ids.map(key=>{
                return this.data.learning[key].material;
            }).join(', ')
        },
        facilities() {
            if (!this.school.facility_list) return;
                return this.school.facility_list.map((obj) => {
                    obj.facility = Object.values(this.data.facility_types).reduce((prev, next) => {
                        if (obj.facility_id === next.id) {
                            prev = next.type
                        }
                        return prev;
                    }, '');
                    return obj;
                });
        }
    },
};

export { tabsMixins }
