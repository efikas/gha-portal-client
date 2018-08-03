import Toaster from '../../../mixins/toaster';
import {mapGetters} from 'vuex'

const schoolFormMixins = {
    data() {
        return {
            normalizedFacilities: {},
            school: {},
        }
    },
    mixins: [Toaster],
    computed: {
        ...mapGetters({data: 'data', getSchool: 'school'}),
        learning() {
            return Object.values(this.data.learning).map(item =>
                ({text: item.material, value: item.id})
            );
        },
        buildings() {
            return Object.values(this.data.buildings).map(item =>
                ({text: item.ownership, value: item.id})
            )
        },
        healths() {
            return Object.values(this.data.healths).map(item =>
                ({text: item.facility, value: item.id})
            );
        },
        waters() {
            return Object.values(this.data.water).map(item =>
                ({text: item.source, value: item.id})
            );
        },
        toilets() {
            return Object.values(this.data.toilet_types).map(item =>
                ({text: item.type, value: item.id})
            );
        },
        play_facilities() {
            return Object.values(this.data.play_facilities).map(item =>
                ({text: item.type, value: item.id})
            );
        },
        play_rooms() {
            return Object.values(this.data.play_rooms).map(item =>
                ({text: item.category, value: item.id})
            );
        },
        power_sources() {
            return Object.values(this.data.power_sources).map(item =>
                ({text: item.power_sources, value: item.id})
            );
        },
        lga_areas() {
            return [{value: null, text: 'Please select an option'}]
                .concat(Object.values(this.data.lga_areas).map(item => {
                    return {value: item.id, text: item.name};
                }));
        },
        ownership() {
            return [{value: null, text: 'Please select an option'}]
                .concat(Object.values(this.data.school_ownerships).map(item => ({
                    value: item.id,
                    text: item.owner
                })));
        },
        school_type() {
            return [{value: null, text: 'Please select an option'}]
                .concat(Object.values(this.data.school_types).map(item => ({value: item.id, text: item.name})));
        },
        wards() {
            return [{value: null, text: 'Please select an option'}]
                .concat(Object.values(this.data.lga_wards).reduce((prev, next, index) => {
                    if (Object.keys(this.school).length && this.school.ward.lga_id === next.lga_id) {
                        prev.push({value: next.id, text: next.name});
                    }
                    return prev
                }, []));
        },
        otherFacilities() {
            return this.normalizedFacilities;
        }
    },
    watch: {
        'school.ward.lga_id'(newVal, oldValue){
            if(typeof oldValue !== 'undefined' && newVal !== oldValue) {
                this.school.lga_ward_id = null;
            }
        }
    },
    methods: {
        normalizedFacilityList() {
            if (this.school.id) {
                for (let index in this.school.facility_list) {
                    this.normalizedFacilities[this.school.facility_list[index].facility_id] = this.school.facility_list[index];
                }
                for (let index in this.data.facility_types) {

                    if (typeof this.normalizedFacilities[this.data.facility_types[index].id] === 'undefined') {
                        this.normalizedFacilities[this.data.facility_types[index].id] = {
                            school_id: this.school.id,
                            no_facility: 0,
                            facility_id: this.data.facility_types[index].id
                        }
                    }
                }
            }
        }
    },
    async created() {
        this.school = JSON.parse(JSON.stringify(this.getSchool));
        this.normalizedFacilityList();
        if (this.$route.params.id) {
            await this.$store.dispatch('school', this.$route.params.id);
        }
    },
};

export {schoolFormMixins}