<template>
    <div>
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="table-responsive mt-lg-5">
                    <table class="table table-bordred table-striped mytable">
                        <tbody>
                        <tr>
                            <td>Power Source</td>
                            <td>{{ power_sources }}</td>
                        </tr>
                        <tr>
                            <td>Health Facilities</td>
                            <td>{{ healths }}</td>
                        </tr>
                        <tr>
                            <td>Learning Materials</td>
                            <td>{{ learning }}</td>
                        </tr>
                        <tr>
                            <td>Water Source</td>
                            <td>{{ waters }}</td>
                        </tr>
                        <tr>
                            <td>Toilets</td>
                            <td>{{ toilets }}</td>
                        </tr>
                        <tr>
                            <td>Play facilities</td>
                            <td>{{ play_facilities }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    export default {
        name: "facility",
        mixins: [tabsMixins],
    }
</script>