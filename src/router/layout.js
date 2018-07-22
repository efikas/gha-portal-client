const layout = [{
    path: '/',
    name: 'dashboard',
    component: resolve => require(['pages/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
},
    {
        path: '/school',
        component: resolve => require(['pages/school/school'], resolve),
        children: [
            {
                path: '',
                name: 'school-overview',
                component: resolve => require(['pages/school/overview'], resolve),
                meta: {
                    title: "Schools",
                    guard: true
                }
            },
            {
                path: 'manage',
                name: 'schools',
                component: resolve => require(['pages/school/schools'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            },
            {
                path: 'lga',
                name: 'school-lga',
                component: resolve => require(['pages/school/schools'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            },
            {
                path: 'add',
                name: 'school-create',
                component: resolve => require(['pages/school/add'], resolve),
                meta: {
                    title: "Add School",
                    guard: true
                }
            },
            {
                path: 'import',
                name: 'school-import',
                component: resolve => require(['pages/school/import'], resolve),
                meta: {
                    title: "Import School Record",
                    guard: true
                }
            },
            {
                path: ':id/update/:component',
                name: 'update-school-info',
                component: resolve => require(['pages/school/edit'], resolve),
                meta: {
                    title: "Update School Record",
                    guard: true
                }
            },
            {
                path: ':id/staffs',
                name: "school-staffs",
                component: resolve => require(['pages/staff/staffs'], resolve),
                meta: {
                    title: "Staff List",
                    guard: true
                }
            },
            {
                path: ':id/students',
                name: "school-students",
                component: resolve => require(['pages/student/students'], resolve),
                meta: {
                    title: "Students List",
                    guard: true
                }
            },
            { //todo: fix routes that overrides
                name: "school",
                path: ':id',
                component: resolve => require(['pages/school/profile'], resolve),
                meta: {
                    title: "School Profile",
                    guard: true
                }
            },


        ]
    },

    {
        path: '/staff',
        component: resolve => require(['pages/staff/layout'], resolve),
        meta: {
            guard: true,
        },
        children: [
            {
                path: '',
                component: resolve => require(['pages/staff/overview'], resolve),
                meta: {
                    title: "Staff Distribution report",
                    guard: true
                }
            },
            {
                path: ':id',
                name: 'staff-profile',
                component:
                    resolve => require(['pages/staff/staff'], resolve),
                meta:
                    {
                        title: " ",
                        guard: true
                    }
            },
            {
                path: 'add',
                component:
                    resolve => require(['pages/staff/add'], resolve),
                meta:
                    {
                        title: "Add New Staff",
                        guard: true
                    }
            },
            {
                path: 'import',
                component:
                    resolve => require(['pages/staff/import'], resolve),
                meta:
                    {
                        title: "Import Staff Record",
                        guard:
                            true
                    }
            },
            {
                path: ':id/update/:component',
                component: resolve => require(['pages/staff/update'], resolve),
                meta: {
                    title: "Update Staff Record",
                    guard: true
                }
            }
        ]
    }
    ,
    {
        path: '/student',
        component: resolve => require(['pages/student/layout'], resolve),
        meta: {
            title: "Students",
            guard: true
        },
        children: [
            {
                path: '',
                component: resolve => require(['pages/student/overview'], resolve),
                meta: {
                    title: "Student List",
                    guard: true
                }
            },
            {
                path: ':id',
                name: 'student-profile',
                component: resolve => require(['pages/student/student'], resolve),
                meta: {
                    title: " ",
                    guard: true
                }
            },
            {
                path: 'add',
                component: resolve => require(['pages/student/add'], resolve),
                meta: {
                    title: "Add New Student",
                    guard: true
                }
            },
            {
                path: 'import',
                component:
                    resolve => require(['pages/student/import'], resolve),
                meta: {
                    title: "Import",
                    guard: true
                }
            },
            {
                path: ':id/update/:component',
                component: resolve => require(['pages/student/update/'], resolve),
                meta: {
                    title: "Update Student Record",
                    guard: true
                }
            }
        ]
    }
    ,
    {
        path: '/attendance',
        component: resolve => require(['pages/attendance/layout'], resolve),
        meta:
            {
                title: "Attendance",
                guard:
                    true
            },
        children: [
            {
                path: 'report',
                component: resolve => require(['pages/attendance/report'], resolve),
                meta: {
                    title: "Report",
                    guard: true
                }
            },
            {
                path: 'update',
                component: resolve => require(['pages/attendance/update'], resolve),
                meta: {
                    title: "Update",
                    guard: true
                }
            }
        ]
    },
    {
        path: '/exam',
        component: resolve => require(['pages/exam/layout'], resolve),
        meta: {
            title: "Exam",
            guard: true
        },
        children: [
            {
                path: 'report',
                component: resolve => require(['pages/exam/report'], resolve),
                meta: {
                    title: "Report",
                    guard: true
                }
            },
            {
                path: 'update',
                component: resolve => require(['pages/exam/update'], resolve),
                meta: {
                    title: "Update",
                    guard: true
                }
            }
        ]
    }
    ,
    {
        path: '/report',
        component: resolve => require(['pages/report'], resolve),
        meta:
            {
                title: "Report",
                guard:
                    true
            }
    },
    {
        path: '/admin',
        component: resolve => require(['pages/user/users'], resolve),
        meta: {
            title: "User Administration",
            guard: true
        },
        children: []
    }


]

export default layout
