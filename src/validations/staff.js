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

const schoolName = helpers.regex('schoolName', /^[a-zA-Z ]+$/)
const geolocation = helpers.regex('geolocation', /^[0-9 \.,\/\-]+$/)
const date = helpers.regex('date', /^[0-9]{4}$/)

const personalValidations = {
    staff: {
        first_name: {required, alpha},
        middle_name: {required, alpha},
        last_name: {required, alpha},
        sex: {required},
        date_of_birth: {required},
        place_of_birth: {required},
        phone: {required},
        email: {required},
        state_of_origin: {required},
        lga_of_origin: {required},
        home_town: {required},
        distance_from_school: {numeric},
        marital_status: {required},
        religion: {required},
        residential_address: {required},
    }
};

const facilityValidations = {
    school: {
        building_id: {required},
        play_room_id: {required},
        play_facility_id: {required},
        learning_ids: {required},
        power_source_ids: {required},
        health_ids: {required},
        water_ids: {required},
        toilet_ids: {required},
    }
};

const classroomValidations = {
    classrooms: {
        required,
        $each: {
            class_id: {required},
            good: {required, numeric},
            minor_repair: {required, numeric},
            major_repair: {required, numeric},
            unusable: {required, numeric},
            comment: {},
        }
    }
};

const projectValidations = {
    projects: {
        required,
        $each: {
            name: {required},
            cost: {required, decimal},
            funding: {required},
            date: {required}
        }
    }
};

const sbmcValidations = {
    sbmc: {
        required,
        $each: {
            name: {required},
            office: {required},
            phone: {required, numeric},
            email: {required, email}
        }
    }
};


export {
    personalValidations,
}