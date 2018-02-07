import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Staff from '../pages/Staff'
import Schools from '../pages/Schools'
import Students from '../pages/Students'
import Attendance from '../pages/Attendance'
import Import from '../pages/Import'
import SBMC from '../pages/SBMC'
import Reports from '../pages/Reports'


export default [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff
    },
    {
      path: '/staff/:page',
      component: Staff
    },
    {
      path: '/schools/:page',
      component: Schools
    },
    {
      path: '/schools',
      component: Schools
    },
    {
      path: '/students/:page',
      component: Students
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/attendance/:page',
      component: Attendance
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance
    },
    {
      path: '/import',
      component: Import
    },
    {
      path: '/sbmc',
      name: 'sbmc',
      component: SBMC
    },
    {
      path: '/Reports',
      component: Reports
    }
  ]
