<template>
    <div>
        <table class="result-header" border="1">
            <tr>
                <td colspan="4" class="text-center"> Image here</td>
            </tr>
            <tr>
                <td colspan="4" class="text-center">FIRST TERM REPORT SHEET FOR 2018/2019 SESSION</td>
            </tr>
            <tr>
                <td colspan="2">
                    PUPIL’S NAME: {{`${resultInfo.student_info.first_name} ${resultInfo.student_info.middle_name} ${resultInfo.student_info.last_name}`}}
                </td>
                <td>ADM NO: {{`${resultInfo.student_info.school_student_id}`}}</td>
                <td>TOTAL SCORE: 88.6</td>
            </tr>
            <tr>
                <td colspan="2">DATE OF BIRTH:  {{`${resultInfo.student_info.date_of_birth}`}}</td>
                <td>AGE:  6</td>
                <td>AVERAGE SCORE: 70</td>
            </tr>
            <tr>
                <td colspan="2">NO. OF TIMES SCHOOL OPENED: {{`${resultInfo.assessment.no_of_time_school_opened}`}}	</td>
                <td>SEX: {{`${resultInfo.student_info.sex}`}}</td>
                <td> GRADE: B</td>
            </tr>
            <tr>
                <td colspan="2">CLASS: PRIMARY 1 (TAHFEEZ)</td>
                <td>NO. OF TIMES ABSENT: {{`${resultInfo.assessment.no_of_time_absent}`}}</td>
                <td>POSITION: 13th</td>
            </tr>
            <tr>
                <td>NO. IN CLASS: 23</td>
                <td>NO.OF TIMES LATE: {{`${resultInfo.assessment.no_of_time_late}`}}</td>
                <td>RESUMPTION DATE: 12/04/2019</td>
                <td>REMARK:	Very Good</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "result_header",
        props: ['resultInfo'],
    }
</script>

<style scoped>
.result-header {
    width: 100%;
    font-size: 1.2em;
}
</style>