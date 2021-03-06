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
            name: 'Schools',
            link: '/school/manage',
            icon: 'fa fa-codepen'
        }, {
            name: 'Create',
            link: '/school/add',
            icon: 'fa fa-plus-circle',
        }, {
            name: 'Upload',
            link: '/school/import',
            icon: 'fa fa-upload'
        }]
    },
    {
        name: 'Attendance',
        link: '/attendance/report',
        icon: 'fa fa-calendar-check-o',
    },
    {
        name: 'Report',
        icon: 'fa fa-line-chart',
        child: [{
            name: 'Overview',
            link: '/report',
            icon: 'fa fa-clipboard'
        },{
            name: 'Staffs',
            link: '/staff',
            icon: "fa fa-male",
        },{
            name: 'Students',
            link: '/student',
            icon: "fa fa-users",
        }]
    },
    {
        name: 'Users',
        icon: 'fa fa-qrcode',
        child: [{
            name: 'View all',
            link: '/user',
            icon: 'fa fa-clipboard'
        },{
            name: 'Create',
            link: '/user/add',
            icon: 'fa fa-plus-circle'
        },]
    },
];
export default menu_items;
