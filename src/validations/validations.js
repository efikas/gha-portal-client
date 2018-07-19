import {
    required,
    minLength,
    between,
    sameAs,
    email
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

const loginV = {
    email: {
        required, email
    },
    password: {
        required
    }
};

export { loginV };
