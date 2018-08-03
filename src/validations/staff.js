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
    staff: {
        first_name: {required, alpha},
        middle_name: {required, alpha},
        last_name: {required, alpha},
        sex: {required},
        date_of_birth: {required},
        place_of_birth: {required},
        phone: {required},
        email: {email},
        state_of_origin: {required},
        lga_of_origin: {required},
        home_town: {required},
        distance_from_school: {numeric},
        marital_status: {required},
        religion: {required},
        residential_address: {required},
    }
};

const professionalValidations = {
    staff: {
        category: {required},
        status: {required},
        salary_source: {required},
        last_promotion_year: {required, year},
        academic_qualification: {required},
        teaching_qualification: {required},
        speciality: {required},
        subject_taught: {required},
        employment_type: {required},
        classes_taught: {required},
        computer_literate: {required},
        trc_reg_no: {},
    }
};

export {
    personalValidations,
    professionalValidations
}