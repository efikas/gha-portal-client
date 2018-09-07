import {
    required,
    minLength,
    between,
    sameAs,
    email,
    numeric,
    alpha,
    integer
} from 'vuelidate/lib/validators'

const validations = {
    name: {
        required,
        minLength: minLength(3)
    },
    age: {
        between: between(20, 30)
    },
    password: {
        required,
        minLength: minLength(6)
    },
    repeatPassword: {
        sameAsPassword: sameAs('password')
    }
};

const userValidations = {
    user: {
        email: {
            required, email
        },
        fullname: {
            required
        },
        roles: {
            required
        },
        permissions: {
            required
        }
    }
};

const loginV = {
    email: {
        required, email
    },
    password: {
        required
    }
};

const studentUpdateValidations = {
    student: {
        school_id: {required, integer},
        first_name: { required,  minLength: minLength(3) },
        last_name: { required,  minLength: minLength(3) },
        middle_name: { required,  minLength: minLength(3) },
        sex: { required,  alpha },
        admission_year: { required, numeric },
        admission_education_level: { required, numeric },
    }
};

export { loginV, studentUpdateValidations, userValidations };
