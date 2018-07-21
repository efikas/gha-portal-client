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
            return Object.values(this.data.power_sources).reduce((prev, next, index) => {
                if (this.school.power_source_ids && this.school.power_source_ids.indexOf(next.id) === 0) {
                    prev.push(next.power_sources)
                }
                return prev
            }, []).join(', ')
        },
        waters() {
            return Object.values(this.data.water).reduce((prev, next, index) => {
                if (this.school.water_ids && this.school.water_ids.indexOf(next.id) === 0) {
                    prev.push(next.source)
                }
                return prev
            }, []).join(', ')
        },
        healths() {
            return Object.values(this.data.healths).reduce((prev, next, index) => {
                if (this.school.health_ids && this.school.health_ids.indexOf(next.id) === 0) {
                    prev.push(next.facility)
                }
                return prev
            }, []).join(', ')
        },
        toilets() {
            return Object.values(this.data.toilet_types).reduce((prev, next, index) => {
                if (this.school.toilet_ids && this.school.toilet_ids.indexOf(next.id) === 0) {
                    prev.push(next.type)
                }
                return prev
            }, []).join(', ')
        },
        play_facilities() {
            return Object.values(this.data.play_facilities).reduce((prev, next, index) => {
                if (this.school.play_facility_id === next.id) {
                    prev.push(next.type)
                }
                return prev
            }, []).join(', ')
        },
        learning() {
            return Object.values(this.data.healths).reduce((prev, next, index) => {
                if (this.school.learning_ids && this.school.learning_ids.indexOf(next.id) === 0) {
                    prev.push(next.material)
                }
                return prev
            }, []).join(', ')
        },
        school_type() {
            return Object.values(this.data.school_types).reduce((prev, next, index) => {
                if (this.school.type === next.id) {
                    prev = next.name
                }
                return prev
            }, '')
        },
        classrooms() {
            if(this.school.classroom_list) {
                return this.school.classroom_list.map((obj) => {
                    obj.class = Object.values(this.data.classes).reduce((prev, next) => {
                        if (obj.class_id === next.id) {
                            prev = next.class
                        }
                        return prev;
                    }, '');
                    return obj;
                });
            }
        },
        facilities() {
            if(this.school.facility_list) {
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
        }
    },
};

export { tabsMixins }
