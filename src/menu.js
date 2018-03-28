const menu_items = [{
        name: 'Dashboard',
        link: '/',
        icon: 'fa fa-home'
    },
    {
        name: "School",
        icon: "fa fa-files-o",
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
        icon: "fa fa-files-o",
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
        icon: "fa fa-files-o",
        child: [{
            name: 'Overview',
            link: '/student',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage',
            link: '/student/manage',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Create',
            link: '/student/add',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Import',
            link: '/student/import',
            icon: 'fa fa-angle-double-right'
        }]
    },
    {
        name: 'Attendance',
        link: '/attendance',
        icon: 'fa fa-angle-double-right'
    },
    {
        name: 'Import',
        link: '/import',
        icon: 'fa fa-angle-double-right'
    },
    {
        name: 'SBMC',
        link: '/SBMC',
        icon: 'fa fa-angle-double-right'
    },
    {
        name: 'Report',
        link: '/report',
        icon: 'fa fa-angle-double-right'
    },
];
export default menu_items;
