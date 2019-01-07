<template>
    <div>
        <table class="result-body" border="1">
            <thead>
                <td>S/N</td><td>SUBJECT</td><td>Assign</td>
                <td>CW</td><td>Test</td><td>Aff</td>
                <td>Psy</td><td>CA Total</td><td>Exam</td>
                <td>Total</td><td>Cummulative</td>
                <td>Highest in Class</td><td>Lowest in Class</td>
                <td>Grade</td><td>Remark</td><td>Position</td>
            </thead>
            <tbody>
                <tr v-for="result, index in resultInfo.result" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{getSubjectName(result.class_subject_offered.subject_id)}}</td>
                    <td>{{result.assignment}}</td>
                    <td>{{result.class_work}}</td><td>{{result.test}}</td><td>{{result.quiz}}</td>
                    <td>{{result.psycomotor}}</td>
                    <td>{{parseFloat(result.total_score) - parseFloat(result.exam)}}</td>
                    <td>{{result.exam}}</td>
                    <td>{{parseFloat(result.total_score)}}</td>
                    <td>{{ result.cumm_total}}</td>
                    <td>{{ result.highest_score }}</td><td>{{ result.lowest_score }}</td>
                    <td>
                        {{grade(parseInt(result.total_score))}}
                    </td><td>{{remark(parseInt(result.total_score))}}</td><td></td>
                </tr>
            </tbody>
        </table>
        <div class="grades">
            <span class="text-primary">Keys to Grading:</span> Excellent(A) = 90–100, VeryGood(B) = 80–89, Good(C) = 70-79,
            Fair(D) = 60–69, Pass(E) = 50–59, Weak = 40–49, Fail = 0–39
        </div>
    </div>
</template>

<script>
    import DataMixin from '../../../../mixins/dataMixin';
    export default {
        name: "result_body",
        props: ['resultInfo'],
        mixins: [DataMixin],
        methods: {
            grade: function(score){
                if(score < 40) return 'F';
                if(score > 39 && score < 50) return 'W';
                if(score > 49 && score < 60) return 'E';
                if(score > 59 && score < 70) return 'D';
                if(score > 69 && score < 80) return 'C';
                if(score > 79 && score < 90) return 'B';
                if(score > 89 && score < 101) return 'A';
            },
            position: function(score){

            },
            remark: function(score){
                if(score < 40) return 'Fail';
                if(score > 39 && score < 50) return 'Weak';
                if(score > 49 && score < 60) return 'Pass';
                if(score > 59 && score < 70) return 'Fair';
                if(score > 69 && score < 80) return 'Good';
                if(score > 79 && score < 90) return 'VeryGood';
                if(score > 89 && score < 101) return 'Excellent';
            }
        }
    }
</script>

<style scoped>
    .result-body {
        margin-top: 50px;
        width: 100%;
    }

    .grades, .result-body thead{
        font-weight: bold;
    }
</style>