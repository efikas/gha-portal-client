 <template>
  <ul id="slide-out" class="side-nav" style="transform: translateX(0px);">
            <li class="logo">
                <div id="app-logo" class="inline">
                    <img class="responsive-img left" width="240" height="100%" alt="ekiti" src="assets/images/logo/ekiti-logo.png">
                </div>
            </li>
        <li class="no-padding" data-user-level="">
            <a href="/dashboard" class="waves-effect waves-ripple "><i class="material-icons white-text">home</i>Dashboard</a>
        </li>
            <li class="no-padding" data-user-level="">
                <ul class="collapsible collapsible-accordion"><li class="bold">
                    <a class="collapsible-header waves-effect waves-ripple has-dropdown">
                        <span class="material-icons white-text">person</span>Schools
                        <i class="material-icons white-text">chevron_right</i>
                    </a>
                    <div class="collapsible-body">
                        <ul><li data-user-level="">
                            <a href="/schools" class="waves-effect waves-ripple">Overview</a>
                            </li><li data-user-level="">
                            <a href="/schools/manage" class="waves-effect waves-ripple">Manage Schools</a>
                            </li><li data-user-level="">
                            <a href="/schools/add" class="waves-effect waves-ripple">Add Schools</a>
                            </li>
                            </ul>
                    </div>
                    </li>
        <li class="bold">
            <a class="collapsible-header waves-effect waves-ripple has-dropdown">
                <span class="material-icons white-text">people</span>Staff
                <i class="material-icons white-text">chevron_right</i>
            </a>
            <div class="collapsible-body">
                <ul>
                    <li data-user-level="">
                        <a href="/staff" class="waves-effect waves-ripple">Overview</a>
                        </li><li data-user-level="">
                        <a href="/staff/manage" class="waves-effect waves-ripple">Manage Staff</a>
                        </li><li data-user-level="">
                        <a href="/staff/add" class="waves-effect waves-ripple">Add Staff</a>
                    </li>
                </ul>
            </div>
            </li>
            <li class="bold">
            <a class="collapsible-header waves-effect waves-ripple has-dropdown active">
                <span class="material-icons white-text">person</span>Students
                <i class="material-icons white-text">chevron_right</i>
            </a>
            <div class="collapsible-body">
            <ul>
                <li data-user-level="" class="active">
                    <a href="/students" class="waves-effect waves-ripple">Overview</a>
                </li>
                <li data-user-level="">
                    <a href="/students/manage" class="waves-effect waves-ripple">Manage Students</a>
                </li>
                <li data-user-level="">
                    <a href="/students/add" class="waves-effect waves-ripple">Add Students</a>
                </li>
                <li data-user-level="">
                    <a href="/students/result" class="waves-effect waves-ripple">Student Results</a>
                </li>
                <li data-user-level="">
                    <a href="/students/grants" class="waves-effect waves-ripple">Student Grants</a>
                </li>
             </ul>
        </div>
        </li>
        <li class="bold">
                                    <a class="collapsible-header waves-effect waves-ripple has-dropdown">
                                        <span class="material-icons white-text">select_all</span>Attendance
                                        <i class="material-icons white-text">chevron_right</i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul><li data-user-level="">
                                            <a href="/attendance" class="waves-effect waves-ripple">Overview</a>
                                            </li><li data-user-level="">
                                            <a href="/attendance/add" class="waves-effect waves-ripple">Daily Attendance</a>
                                            </li><li data-user-level="">
                                            <a href="/attendance/manage" class="waves-effect waves-ripple">Manage Attendance</a>
                                            </li>
                                        </ul>
                                    </div>
                                 </li>
                                 </ul>
                    </li>
                        <li class="no-padding " data-user-level="">
                            <a href="/import" class="waves-effect waves-ripple "><i class="material-icons white-text">library_books</i>Import</a>
                        </li><li class="no-padding " data-user-level="">
                            <a href="/sbmc" class="waves-effect waves-ripple "><i class="material-icons white-text">assignment</i>SBMC</a>
                        </li><li class="no-padding " data-user-level="">
                            <a href="/reports" class="waves-effect waves-ripple "><i class="material-icons white-text">library_books</i>Report</a>
                        </li><li class="no-padding " data-user-level="">
                            <a href="/logout" class="waves-effect waves-ripple "><i class="material-icons white-text">assignment</i>Logout</a>
                        </li>
                    </ul>
</template>

<script>
export default {
  name: 'SbemisMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
