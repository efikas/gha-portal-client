<template>
    <div>
        <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center widget_social_icons box_shadow orange">
                    <div class="p-2">
                        <div class="widget_social_inner1">
                            <i class="material-icons fb_text">home</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ schools }}</h4>
                        </div>
                    </div>
                    <p class="m-0 orange text-center widget-social_link tiny upper"><a href="school"
                                                                                       style="display: block">Schools <i
                            class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center widget_social_icons box_shadow pink">
                    <div class="p-2">
                        <div class="widget_social_inner1">
                            <i class="material-icons fb_text">group</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ staff }}</h4>
                        </div>
                    </div>
                    <p class="m-0 pink text-center widget-social_link tiny upper"><a href="staff"
                                                                                     style="display: block">Staffs <i
                            class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="text-center widget_social_icons box_shadow blue">
                    <div class="p-2">
                        <div class=" widget_social_inner1">
                            <i class="material-icons fb_text">person</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ students }}</h4>
                        </div>
                    </div>
                    <p class="m-0 blue text-center widget-social_link tiny upper"><a href="student"
                                                                                     style="display: block">Students <i
                            class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <div class="text-center widget_social_icons box_shadow teal">
                    <div class="p-2">
                        <div class=" widget_social_inner1">
                            <i class="material-icons fb_text">people</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ guardians }}</h4>
                        </div>
                    </div>
                    <p class="m-0 teal text-center widget-social_link tiny upper"><a href="#" style="display: block">Parent/Guardian
                        <i class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topCard",

        data() {
            return {
                schools: 'loading...',
                staff: 'loading...',
                students: 'loading...',
                guardians: 'loading...',
            }
        },

        created() {
            this.$dashboard.statistics()
                .then((data) => {
                    this.schools = data.schools.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    this.staff = data.staffs.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    this.students = data.students.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    this.guardians = data.guardians.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }).catch((error) => window.alert("failed"))
        }
    }
</script>

<style scoped>

</style>