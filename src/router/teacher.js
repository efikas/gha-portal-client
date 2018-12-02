const teacher_routes = [{
    path: 'dashboard',
    name: 'teacher-dashboard',
    component: resolve => require(['pages/admin/dashboard/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
},
    {
        path: 'classes',
        component: resolve => require(['pages/layout'], resolve),
        children: [
            {
                path: '',
                name: 'teacher-classes',
                component: resolve => require(['pages/teacher/classes/classes'], resolve),
                meta: {
                    title: "Classes",
                    guard: true
                }
            },
            {
                path: ':schoolClassId/exam',
                name: 'teacher-exam',
                component: resolve => require(['pages/teacher/classes/exam'], resolve),
                meta: {
                    title: "Exam",
                    guard: true
                }
            },
            {
                path: 'manage',
                name: 'teacher-schools',
                component: resolve => require(['pages/admin/school/schools'], resolve),
                meta: {
                    title: "Manage Schools",
                    guard: true
                }
            }
        ]
    },
    {
        path: 'notifications',
        name: 'teacher-notifications',
        component: resolve => require(['pages/teacher/notification/notifications'], resolve),
        meta: {
            guard: true,
        }
    }
]

export default teacher_routes
