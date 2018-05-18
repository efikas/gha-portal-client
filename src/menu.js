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
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage',
            link: '/school/manage',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Create',
            link: '/school/add',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Import',
            link: '/school/import',
            icon: 'fa fa-angle-double-right'
        }]
    },
    {
        name: "Staff",
        icon: "fa fa-male",
        child: [{
            name: 'Overview',
            link: '/staff',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage',
            link: '/staff/manage',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Create',
            link: '/staff/add',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Import',
            link: '/staff/import',
            icon: 'fa fa-angle-double-right'
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
            icon: 'fa fa-cubes'
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
        link: '/attendance',
        icon: 'fa fa-calendar-check-o'
    },
    {
        name: 'SBMC',
        link: '/SBMC',
        icon: 'fa fa-qrcode'
    },
    {
        name: 'Report',
        link: '/report',
        icon: 'fa fa-line-chart'
    },
];
export default menu_items;
