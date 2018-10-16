const admin_layouts = [{
    path: 'dashboard',
    name: 'admin-dashboard',
    component: resolve => require(['pages/super/dashboard/dashboard'], resolve),
    meta: {
        title: "Dashboard",
        guard: true
    }
},
    {
        path: 'school',
        name: "admin-school",
        component: resolve => require(['pages/super/school/profile'], resolve),
        meta: {
            title: "School Profile",
            guard: true
        }
    },
    {
        path: 'staffs',
        component: resolve => require(['pages/super/staff/layout'], resolve),
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
                    resolve => require(['pages/super/staff/staff'], resolve),
                meta:
                    {
                        title: " ",
                        guard: true
                    }
            },
    ]},
    {
        path: 'student',
        name: "admin-school-students",
        component: resolve => require(['pages/super/student/students'], resolve),
        meta: {
            title: "Students",
            guard: true
        }
    },
    // {
    //     path: '/attendance',
    //     component: resolve => require(['pages/super/staff/layout'], resolve),
    //     meta: {
    //         guard: true,
    //     }
    // },
    {
        path: 'notification',
        component: resolve => require(['pages/super/staff/layout'], resolve),
        meta: {
            guard: true,
        }
    }

]

export default admin_layouts
