export default {
    data() {
        return {
            switchVal: true,
            types: [
                'error',
                'warn',
                'info',
                'success'
            ],
            toaster_title: 'Your title',
            toaster_msg: 'Your message',
            toaster_type: 'error',
        }
    },
    created() {
        miniToastr.setIcon('error', 'i', {
            'class': 'fa fa-times'
        });
        miniToastr.setIcon('warn', 'i', {
            'class': 'fa fa-exclamation-triangle'
        });
        miniToastr.setIcon('info', 'i', {
            'class': 'fa fa-info-circle'
        });
        miniToastr.setIcon('success', 'i', {
            'class': 'fa fa-arrow-circle-o-down'
        });
    },

    methods: {
        successMsg() {
            miniToastr.success("Some success msg", "Success title")
        },
        infoMsg() {
            miniToastr.info("Some info msg", "Note title")
        },
        warnMsg() {
            miniToastr.warn("Some waqrning msg", "Warning")
        },
        errorMsg() {
            miniToastr.error("Some error msg", "Error")
        },
        dynamicMsg() {
            miniToastr[this.type](this.msg, this.title)
        }
    }
};