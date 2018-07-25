import miniToastr from 'mini-toastr';
miniToastr.init();

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
        successMsg(msg, title) {
            miniToastr.success(msg, title)
        },
        infoMsg(msg, title) {
            miniToastr.info(msg, title)
        },
        warnMsg(msg, title) {
            miniToastr.warn(msg, title)
        },
        errorMsg(msg, title) {
            miniToastr.error(msg, title)
        },
        dynamicMsg() {
            miniToastr[this.type](this.msg, this.title)
        }
    }
};