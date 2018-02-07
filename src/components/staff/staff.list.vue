<template>
    <div>
        <main class="container">
            <div class="section m75-top">
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card-panel with-header blue-bl left">
                            <div class="card-panel-header">
                                <h3 class="no-margin no-pad medium brand-red-text">Staff List</h3>
                                <div>
                                    <span id="green">Completed</span>
                                    <span id="yellow">Biometrics</span>
                                    <span id="blue">Picture</span>
                                    <span id="red">Not captured</span>
                                    &nbsp;&nbsp;&nbsp;
                                </div>
                                <div class="right-align export">
                                    <i class="material-icons pointer hide" title="Export" id="export" data-school="">publish</i>
                                </div>
                            </div>
                            <table id="data-table" class="bordered highlight responsive-table">
                                <thead>
                                <tr>
                                    <th data-field="id" class="upper">Staff File No.</th>
                                    <th data-field="name" class="upper">Staff Name</th>
                                    <th class="center upper" data-field="sex">Gender</th>
                                    <th class="center upper" data-field="age">Age</th>
                                    <th class="center upper" data-field="class">Employment Yr.</th>
                                    <th data-field="status"></th>
                                    <th data-field="tools"></th>
                                </tr>
                                </thead>
                                <tbody id="staff-list"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SchoolOverview',
  components: {},
  data () {
    return {
      schools: {},
      api: 'api'
    }
  },
  methods: {
    ...mapMutations([
      // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
      'updateBreadCrumbItem'
    ])
  },
  created () {
    this.$store.commit(
      'updateBreadCrumbItem',
      [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'Students',
          link: '/students'
        }
      ]
    )
  },
  mounted () {
    // this.axios.get(this.api).then((response) => {
    //   this.schools = response.data
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
