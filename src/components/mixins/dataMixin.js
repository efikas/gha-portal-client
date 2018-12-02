import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters(['data'])
    },
    methods: {
        getClassName(class_id){
            if(typeof this.data.classes == 'object'){
                return `${this.data.classes[class_id].fullname}`;
            }
            return '';
        },
        getSubjectName(subject_id){
            if(typeof this.data.subjects == 'object'){
                return `${this.data.subjects[subject_id].subject}`;
            }
            return '';
        },
    }
};