const menu_items = [{
        name: 'Dashboard',
        link: '/',
        icon: 'fa fa-dashboard'
    },
    {
        name: "School",
        icon: "fa fa-home",
        child: [{
            name: 'Overview',
            link: '/school',
            icon: 'fa fa-clipboard'
        }, {
            name: 'Manage',
            link: '/school/manage',
            icon: 'fa fa-codepen'
        }, {
            name: 'Create',
            link: '/school/add',
            icon: 'fa fa-plus-circle'
        }, {
            name: 'Import',
            link: '/school/import',
            icon: 'fa fa-download'
        }]
    },
    {
        name: "Staff",
        icon: "fa fa-male",
        child: [{
            name: 'Overview',
            link: '/staff',
            icon: 'fa fa-clipboard'
        }, {
            name: 'Manage',
            link: '/staff/manage',
            icon: 'fa fa-codepen'
        }, {
            name: 'Create',
            link: '/staff/add',
            icon: 'fa fa-plus-circle'
        }, {
            name: 'Import',
            link: '/staff/import',
            icon: 'fa fa-download'
        }]
    },
    {
        name: "Student",
        icon: "fa fa-users",
        child: [{
            name: 'Overview',
            link: '/student',
            icon: 'fa fa-clipboard'
        }, {
            name: 'Manage',
            link: '/student/manage',
            icon: 'fa fa-codepen'
        }, {
            name: 'Create',
            link: '/student/add',
            icon: 'fa fa-plus-circle'
        }, {
            name: 'Import',
            link: '/student/import',
            icon: 'fa fa-download'
        }]
    },
    {
        name: 'Attendance',
        icon: 'fa fa-calendar-check-o',
        child: [{
            name: 'Report',
            link: '/attendance/report',
            icon: 'fa fa-clipboard'
        }, {
            name: 'Update',
            link: '/attendance/update',
            icon: 'fa fa-codepen'
        }]
    },
    {
        name: 'Exam',
        icon: 'fa fa-qrcode',
        child: [{
            name: 'Report',
            link: '/exam/report',
            icon: 'fa fa-clipboard'
        }, {
            name: 'Update',
            link: '/exam/update',
            icon: 'fa fa-codepen'
        }]
    },
    {
        name: 'Report',
        link: '/report',
        icon: 'fa fa-line-chart'
    },
];
export default menu_items;
