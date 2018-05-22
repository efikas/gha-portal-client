const layout = [{
    path: '/',
    component: resolve => require(['pages/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
},
    {
        path: '/school',
        component: resolve => require(['pages/school/layout'], resolve),
        meta: {
            guard: true,
            roles: ['admin', 'staff'],
            permissions: ['view']
        },
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
                name: 'school-manage',
                component: resolve => require(['pages/school/manage'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            },
            {
                path: 'lga/:lgaId',
                name: 'school-manage-by_lga',
                component: resolve => require(['pages/school/manage'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            },
            {
                path: 'lga/:lgaId/category/:catId',
                name: 'school-manage-by_category',
                component: resolve => require(['pages/school/manage'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            },
            {
                path: 'lga/:lgaId/category/:catId/level/:level',
                name: 'school-manage-by_category_level',
                component: resolve => require(['pages/school/manage'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            },
            {
                path: 'lga/:lgaId/level/:level',
                name: 'school-manage-by_level',
                component: resolve => require(['pages/school/manage'], resolve),
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
                component: resolve => require(['pages/school/update/'], resolve),
                meta: {
                    title: "Update School Record",
                    guard: true
                }
            },
            { //todo: fix routes that overrides
                name: "school-profile",
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
                    title: "Staff List",
                    guard: true
                }
            },
            {
                path: '/school/:id/staff',
                component: resolve => require(['pages/staff/list'], resolve),
                meta: {
                    title: "Staff List",
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
                        guard:
                            true
                    }
            },
            {
                path: 'manage',
                component:
                    resolve => require(['pages/staff/manage'], resolve),
                meta:
                    {
                        title: "Manage Staff Record",
                        guard:
                            true
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
                path: ':id',
                component:
                    resolve => require(['pages/staff/profile'], resolve),
                meta:
                    {
                        title: "Staff Profile",
                        guard:
                            true
                    }
            },
            {
                path: '/school/:id/staff',
                component: resolve => require(['pages/staff/list'], resolve),
                meta: {
                    title: "Staff List",
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
                path: '/school/:id/students',
                component: resolve => require(['pages/student/list'], resolve),
                meta: {
                    title: "Students List",
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
                path: 'manage',
                component: resolve => require(['pages/student/manage'], resolve),
                meta: {
                    title: "Manage Students Record",
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
                path: ':id',
                component:
                    resolve => require(['pages/student/profile'], resolve),
                meta: {
                    title: "Student Profile",
                    guard: true
                }
            }
        ]
    }

    ,
    {
        path: '/attendance',
        component:
            resolve => require(['pages/attendance'], resolve),
        meta:
            {
                title: "Attendance",
                guard:
                    true
            }
    }

    ,
    {
        path: '/sbmc',
        component:
            resolve => require(['pages/sbmc'], resolve),
        meta:
            {
                title: "SBMC",
                guard:
                    true
            }
    }
    ,
    {
        path: '/report',
        component:
            resolve => require(['pages/report'], resolve),
        meta:
            {
                title: "Report",
                guard:
                    true
            }
    }
]

export default layout
