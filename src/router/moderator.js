const moderator_routes = [{
    path: 'dashboard',
    name: 'admin-dashboard',
    component: resolve => require(['pages/admin/dashboard/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
},
    {
        path: 'school',
        name: "admin-school",
        component: resolve => require(['pages/admin/school/profile'], resolve),
        meta: {
            title: "School Profile",
            guard: true
        }
    },
    {
        path: 'staffs',
        component: resolve => require(['pages/admin/staff/layout'], resolve),
        meta: {
            guard: true,
        },
        children: [
            {
                path: '',
                name: "admin-school-staffs",
                component: resolve => require(['pages/admin/staff/staffs'], resolve),
                meta: {
                    guard: true,
                }
            },
            {
                path: ':id',
                name: 'admin-staff-profile',
                component:
                    resolve => require(['pages/admin/staff/staff'], resolve),
                meta:
                    {
                        title: " ",
                        guard: true
                    }
            },
    ]},
    {
        path: 'student',
        component: resolve => require(['pages/admin/student/layout'], resolve),
        meta: {
            guard: true,
        },
        children: [
            {
                path: '',
                name: "admin-school-students",
                component: resolve => require(['pages/admin/student/students'], resolve),
                meta: {
                    title: "Students",
                    guard: true
                }
            },
            {
                path: ':id',
                name: 'admin-student-profile',
                component:
                    resolve => require(['pages/admin/student/student'], resolve),
                meta: {
                        title: " ",
                        guard: true
                    }
            },
            {
                path: ':id/result',
                name: 'admin-student-result',
                component:
                    resolve => require(['pages/moderator/result/result'], resolve),
                meta: {
                    title: "",
                    guard: true
                }
            },
        ]
    },
    {
        path: 'classes',
        component: resolve => require(['pages/moderator/class/classes'], resolve),
        meta: {
            guard: true,
        }
    },
    {
        path: 'notification',
        component: resolve => require(['pages/admin/staff/layout'], resolve),
        meta: {
            guard: true,
        }
    },
    {
        path: 'settings',
        component: resolve => require(['pages/moderator/settings/settings'], resolve),
        meta: {
            guard: true,
        }
    }
]

export default moderator_routes
