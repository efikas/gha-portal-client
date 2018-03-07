const layout = [{
    path: '/',
    component: resolve => require(['pages/dashboard'], resolve),
    meta: {
        title: "Dashboard",
    }
},{
    path: '/schools',
    component: resolve => require(['pages/schools'], resolve),
    meta: {
        title: "Schools",
    }
},{
    path: '/manage_schools',
    component: resolve => require(['pages/schools_manage'], resolve),
    meta: {
        title: "Manage Schools",
    }
},{
    path: '/add_schools',
    component: resolve => require(['pages/schools_add'], resolve),
    meta: {
        title: "Add School",
    }
},{
    path: '/import_schools',
    component: resolve => require(['pages/schools_import'], resolve),
    meta: {
        title: "Import School Record",
    }
},{
    path: '/staff',
    component: resolve => require(['pages/staff'], resolve),
    meta: {
        title: "Staff",
    }
},{
    path: '/add_staff',
    component: resolve => require(['pages/staff_add'], resolve),
    meta: {
        title: "Add New Staff",
    }
},{
    path: '/manage_staff',
    component: resolve => require(['pages/staff_manage'], resolve),
    meta: {
        title: "Manage Staff Record",
    }
},{
    path: '/import_staff',
    component: resolve => require(['pages/staff_import'], resolve),
    meta: {
        title: "Import Staff Record",
    }
},{
    path: '/students',
    component: resolve => require(['pages/students'], resolve),
    meta: {
        title: "Students",
    }
},{
    path: '/add_students',
    component: resolve => require(['pages/students_add'], resolve),
    meta: {
        title: "Add New Student",
    }
},{
    path: '/manage_students',
    component: resolve => require(['pages/students_manage'], resolve),
    meta: {
        title: "Manage Students Record",
    }
}
]

export default layout
