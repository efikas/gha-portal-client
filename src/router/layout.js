const layout = [{
    path: '/',
    component: resolve => require(['pages/dashboard'], resolve),
    meta: {
        title: "Dashboard",
    }
},{
    path: '/schools',
    component: resolve => require(['pages/school/schools'], resolve),
    meta: {
        title: "Schools",
    }
},{
    path: '/manage_schools',
    component: resolve => require(['pages/school/schools_manage'], resolve),
    meta: {
        title: "Manage Schools",
    }
},{
    path: '/school_profile/:id',
    component: resolve => require(['pages/school/school_profile'], resolve),
    meta: {
        title: "School Profile",
    }
},{
    path: '/add_schools',
    component: resolve => require(['pages/school/schools_add'], resolve),
    meta: {
        title: "Add School",
    }
},{
    path: '/import_schools',
    component: resolve => require(['pages/school/schools_import'], resolve),
    meta: {
        title: "Import School Record",
    }
},{
    path: '/staff',
    component: resolve => require(['pages/staff/staff'], resolve),
    meta: {
        title: "Staff",
    }
},{
    path: '/staff_list/:id',
    component: resolve => require(['pages/staff/staff_list'], resolve),
    meta: {
        title: "Staff List",
    }
},{
    path: '/add_staff',
    component: resolve => require(['pages/staff/staff_add'], resolve),
    meta: {
        title: "Add New Staff",
    }
},{
    path: '/manage_staff',
    component: resolve => require(['pages/staff/staff_manage'], resolve),
    meta: {
        title: "Manage Staff Record",
    }
},{
    path: '/staff_profile',
    component: resolve => require(['pages/staff/staff_profile'], resolve),
    meta: {
        title: "Staff Profile",
    }
},{
    path: '/import_staff',
    component: resolve => require(['pages/staff/staff_import'], resolve),
    meta: {
        title: "Import Staff Rxecord",
    }
},{
    path: '/students',
    component: resolve => require(['pages/student/students'], resolve),
    meta: {
        title: "Students",
    }
},{
    path: '/add_students',
    component: resolve => require(['pages/student/students_add'], resolve),
    meta: {
        title: "Add New Student",
    }
},{
    path: '/manage_students',
    component: resolve => require(['pages/student/students_manage'], resolve),
    meta: {
        title: "Manage Students Record",
    }
},{
    path: '/student_profile',
    component: resolve => require(['pages/student/student_profile'], resolve),
    meta: {
        title: "Student Profile",
    }
},{
    path: '/attendance',
    component: resolve => require(['pages/attendance'], resolve),
    meta: {
        title: "Attendance",
    }
},{
    path: '/import',
    component: resolve => require(['pages/import'], resolve),
    meta: {
        title: "Import",
    }
},{
    path: '/sbmc',
    component: resolve => require(['pages/sbmc'], resolve),
    meta: {
        title: "SBMC",
    }
},{
    path: '/report',
    component: resolve => require(['pages/report'], resolve),
    meta: {
        title: "Report",
    }
}
]

export default layout
