<template>
    <div>
        <div class="table-responsive">
            <table class="table table-bordred table-striped mytable classroom-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Office</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="official in school.sbmc">
                    <td>{{ official.name }}</td>
                    <td>{{ official.office }}</td>
                    <td>{{ official.phone }}</td>
                    <td>{{ official.email }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    export default {
        name: "sbmc",
        mixins: [tabsMixins],
    }
</script>
