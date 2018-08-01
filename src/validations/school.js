import {
    required,
    minLength,
    maxLength,
    between,
    sameAs,
    email,
    numeric,
    alpha,
    alphaNum,
    integer,
    url,
    helpers,
} from 'vuelidate/lib/validators';

const schoolName = helpers.regex('schoolName', /^[a-zA-Z ]+$/)
const geolocation = helpers.regex('geolocation', /^[0-9 \.,\/\-]+$/)

const basicFormValidations = {
    lga_ward_id: {required, integer},
    school: {
        ward: {
            lga_id:{required, integer},
        },
        name: {required, schoolName},
        location: {required},
        established: {numeric, 'minLength': minLength(4), 'maxLength': maxLength(4)},
        average_distance: {numeric},
        town: {required},
        email: {email},
        phone: {required, numeric},
        website: {url},
        geolocation: {geolocation},
        category: {required},
        name_of_proprietor: {alpha},
        private_membership_name: {alpha},
        type: {required},
        ownership: {required},
        education_level: {required},
        multigrade: {required},
        shift: {required},
        management_committee: {required},
        pta_pf: {required},
        development_plan: {required},
        grants: {required},
        address: {required},
    }
};



export { basicFormValidations }