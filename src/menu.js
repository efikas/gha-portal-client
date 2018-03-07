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
            link: '/schools',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage Schools',
            link: '/manage_schools',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Add Schools',
            link: '/add_schools',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Import',
            link: '/import_schools',
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
            name: 'Manage Staff',
            link: '/manage_staff',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Add Staff',
            link: '/add_staff',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Import',
            link: '/import_staff',
            icon: 'fa fa-angle-double-right'
        }]
    },
    {
        name: "Student",
        icon: "fa fa-files-o",
        child: [{
            name: 'Overview',
            link: '/students',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage Students',
            link: '/manage_students',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Add Students',
            link: '/add_students',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Import',
            link: '/import_students',
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
