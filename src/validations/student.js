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
    decimal,
    helpers,
} from 'vuelidate/lib/validators';

const year = helpers.regex('year', /^[0-9]{4}$/);

const personalValidations = {
    student: {
        school_id: {required},
        first_name: {required, alpha},
        middle_name: {alpha},
        last_name: {required, alpha},
        email: {email},
        phone: {numeric},
        sex: {required},
        date_of_birth: {required},
        place_of_birth: {required},
        birth_cert_type: {required},
        state_of_origin: {required},
        lga_of_origin: {},
        special_condition: {required},
        blood_group: {blood_group: helpers.regex('blood_group', /^([a-zA-Z]{1,2})$/)},
        height: {decimal},
        weight: {decimal},
        admission_education_level: {required},
        current_class: {required},
        current_class_section: {alpha, maxLength: maxLength(1)},
        promotion_status: {required},
        admission_year: {required},
        admission_status: {required},
    }
};

const academicValidations = {
    student: {
        admission_year: {required},
        admission_status: {required},
        admission_education_level: {required},
        current_class: {required},
        current_class_section: {alpha},
        promotion_status: {required},
        boarding: {required},
        dormitory_id: {numeric},
        distance_from_school: {decimal},
    }
};

const guardianValidations = {
    student: {
        guardians: {
            required,
            $each: {
                title: {required},
                fullname: {required},
                relationship: {required},
                occupation: {},
                mobile: {},
                phone: {required, numeric},
                email: {email},
                religion: {required},
                contact_address: {required},
            }
        }
    }
};

export {
    personalValidations,
    academicValidations,
    guardianValidations
}