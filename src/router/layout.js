const layout = [{
    path: '/',
    component: resolve => require(['pages/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
}, {
    path: '/schools',
    component: resolve => require(['pages/school/schools'], resolve),
    meta: {
        title: "Schools",
        guard: true
    }
}, {
    path: '/manage_schools',
    component: resolve => require(['pages/school/schools_manage'], resolve),
    meta: {
        title: "Manage Schools",
        guard: true
    }
}, {
    path: '/school/:id/profile',
    component: resolve => require(['pages/school/school_profile'], resolve),
    meta: {
        title: "School Profile",
        guard: true
    }
}, {
    path: '/add_schools',
    component: resolve => require(['pages/school/schools_add'], resolve),
    meta: {
        title: "Add School",
        guard: true
    }
}, {
    path: '/import_schools',
    component: resolve => require(['pages/school/schools_import'], resolve),
    meta: {
        title: "Import School Record",
        guard: true
    }
}, {
    path: '/staff',
    component: resolve => require(['pages/staff/staff'], resolve),
    meta: {
        title: "Staff",
        guard: true
    }
}, {
    path: '/school/:id/staff',
    component: resolve => require(['pages/staff/staff_list'], resolve),
    meta: {
        title: "Staff List",
        guard: true
    }
}, {
    path: '/add_staff',
    component: resolve => require(['pages/staff/staff_add'], resolve),
    meta: {
        title: "Add New Staff",
        guard: true
    }
}, {
    path: '/manage_staff',
    component: resolve => require(['pages/staff/staff_manage'], resolve),
    meta: {
        title: "Manage Staff Record",
        guard: true
    }
}, {
    path: '/staff/:id/profile',
    component: resolve => require(['pages/staff/staff_profile'], resolve),
    meta: {
        title: "Staff Profile",
        guard: true
    }
}, {
    path: '/import_staff',
    component: resolve => require(['pages/staff/staff_import'], resolve),
    meta: {
        title: "Import Staff Record",
        guard: true
    }
}, {
    path: '/students',
    component: resolve => require(['pages/student/students'], resolve),
    meta: {
        title: "Students",
        guard: true
    }
}, {
    path: '/school/:id/students',
    component: resolve => require(['pages/student/student_list'], resolve),
    meta: {
        title: "Student List",
        guard: true
    }
}, {
    path: '/add_students',
    component: resolve => require(['pages/student/students_add'], resolve),
    meta: {
        title: "Add New Student",
        guard: true
    }
}, {
    path: '/manage_students',
    component: resolve => require(['pages/student/students_manage'], resolve),
    meta: {
        title: "Manage Students Record",
        guard: true
    }
}, {
    path: '/student/:id/profile',
    component: resolve => require(['pages/student/student_profile'], resolve),
    meta: {
        title: "Student Profile",
        guard: true
    }
}, {
    path: '/attendance',
    component: resolve => require(['pages/attendance'], resolve),
    meta: {
        title: "Attendance",
        guard: true
    }
}, {
    path: '/import',
    component: resolve => require(['pages/import'], resolve),
    meta: {
        title: "Import",
        guard: true
    }
}, {
    path: '/sbmc',
    component: resolve => require(['pages/sbmc'], resolve),
    meta: {
        title: "SBMC",
        guard: true
    }
}, {
    path: '/report',
    component: resolve => require(['pages/report'], resolve),
    meta: {
        title: "Report",
        guard: true
    }
}
]

export default layout
