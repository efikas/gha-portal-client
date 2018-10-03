const student = [{
    path: '/',
    name: 'student-dashboard',
    component: resolve => require(['pages/super/dashboard/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
},
    {
        path: '/classes',
        component: resolve => require(['pages/super/school/school'], resolve),
        children: [
            {
                path: '',
                name: 'student-school-overview',
                component: resolve => require(['pages/super/school/overview'], resolve),
                meta: {
                    title: "Schools",
                    guard: true
                }
            },
            {
                path: 'manage',
                name: 'student-schools',
                component: resolve => require(['pages/super/school/schools'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            }
        ]
    },
    {
        path: '/attendance',
        name: 'student-attendance',
        component: resolve => require(['pages/super/staff/layout'], resolve),
        meta: {
            guard: true,
        }
    },
    {
        path: '/notification',
        name: 'student-notification',
        component: resolve => require(['pages/super/staff/layout'], resolve),
        meta: {
            guard: true,
        }
    }

]

export default student
