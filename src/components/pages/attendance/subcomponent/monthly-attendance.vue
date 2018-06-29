<template>
    <table id="mytable" class="table table-bordred table-striped">
        <thead>
        <tr>
            <th style="width: 25%">Name</th>
            <th>Present</th>
            <th>Absent</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="status in data.attendance" :value="status.id">
            <td>{{ status.name }}</td>
            <td>{{status.present}}</td>
            <td>{{status.absent}}</td>
        </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: 'monthly-attendance',
        data() {
            return {
                data: {
                    subject_id: '',
                    attendance: [
                        {
                            id: '',
                            name: 'Ambrose Schulist',
                            present: 77,
                            absent: 12,
                        },
                        {
                            id: '',
                            name: 'Bernadette Medhurst',
                            present: 79,
                            absent: 10,
                        },
                    ]
                },
            }
        },
    }
</script>
