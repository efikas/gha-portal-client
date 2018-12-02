export default {
    methods: {
        arrayObjectToArray(arrayObject, name){
            let output = [];

            if(typeof arrayObject == 'array' && Object.keys(object[0]).indexOf(name) > -1){
                arrayObject.map(value => output.push(value[name]));
            }


            return output;
        },
        objectObjectToArray(data, name){
            let output = [];

            if(typeof name != 'undefined'){
                let keys = Object.keys(data);
                if(typeof data == 'object' && Object.keys(data[keys[0]]).indexOf(name) > -1){
                    keys.map(value => output.push(data[value][name]))
                }
            }
            else {
                let keys = Object.keys(data);
                if(typeof data == 'object'){
                    keys.map(value => output.push(data[value]))
                }
            }

            return output;
        },
        objectToArray(data){
            let output = [];

            let keys = Object.keys(data);
            if(typeof data == 'object'){
                keys.map(value => output.push(data[value]))
            }

            return output;
        }
    }
};