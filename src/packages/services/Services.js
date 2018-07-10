import Student from './student.service'
import Staff from './staff.service'
import School from './school.service'
import Dashboard from './dashboard.service'
import Lga from './lga.service'
import Settings from './settings.service'
import Admin from './user.service'

export default function (Vue) {
    Vue.student = Student;
    Vue.staff = Staff;
    Vue.school = School;
    Vue.dashboard = Dashboard;
    Vue.lga = Lga;
    Vue.settings = Settings;
    Vue.admin = Admin;

    Object.defineProperties(Vue.prototype, {
        $student: {
            get: () => {
                return Vue.student
            }
        },
        $staff: {
            get: () => {
                return Vue.staff
            }
        },
        $school: {
            get: () => {
                return Vue.school
            }
        },
        $dashboard: {
            get: () => {
                return Vue.dashboard
            }
        },
        $lga: {
            get: () => {
                return Vue.lga
            }
        },
        $admin: {
            get: () => {
                return Vue.admin
            }
        }
    })
}