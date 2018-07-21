<template>
    <div>
        <b-card class="bg-clear2-card" no-body text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal-others>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-others" title="Other Facilities" size="lg" lazy centered hide-footer>
                    <others-form></others-form>
                </b-modal>

                <h3>
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">Other Facilities</router-link>
                </h3>

            </div>
            <div class="col-lg-12 mb-3">
                <div class="table-responsive mb-5">
                    <table class="table table-bordred table-striped">
                        <thead>
                        <tr>
                            <th>FACILITY</th>
                            <th>NUMBER AVAILABLE</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="facility in normalizedFacility">
                            <td class="text-muted">{{ data.facility_types[facility.facility_id].type}}</td>
                            <td>{{ facility.no_facility }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    import { schoolFormMixins } from '../forms/mixins'
    import othersForm from '../forms/others'

    export default {
        name: "others",
        data() {
            return {
                normalized: {},
            }
        },
        components: {othersForm},
        mixins: [tabsMixins],
        computed: {
          normalizedFacility() {
              for (let index in this.school.facility_list) {
                  this.normalized[this.school.facility_list[index].facility_id] = this.school.facility_list[index];
              }
              for (let index in this.data.facility_types) {

                  if(typeof this.normalized[this.data.facility_types[index].id] === 'undefined') {
                      this.normalized[this.data.facility_types[index].id] = {
                          school_id: this.school.id,
                          no_facility: 0,
                          facility_id: this.data.facility_types[index].id
                      }
                  }
              }
              return this.normalized
          }
        },
    }
</script>

<style scoped>

</style>