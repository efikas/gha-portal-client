<template>
    <div class="result-assessment-wrapper">
        <table class="result-assessment pull-left" border="1">
            <thead>
                <td>S/N</td><td>AFFECTIVE ASSESSMENT</td>
                <td >5</td><td>4</td><td>3</td><td>2</td><td>1</td>
            </thead>
           <tbody>
            <tr>
                <td>1</td><td>Politeness</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.politeness) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>2</td><td>Class Attendance</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.class_attendance) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>3</td><td>Class Participation</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.class_participation) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>4</td><td>Friendliness</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.friendliness) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>5</td><td>Self Control</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.self_control) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>6</td><td>Honesty</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.honesty) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>5</td><td>Cooperation with others</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.cooperation_with_others) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>5</td><td>Group Work</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.group_work) ? '*' : ''}}</td>
            </tr>
           </tbody>
        </table>
        <table class="result-assessment pull-right" border="1">
            <thead>
                <td>S/N</td><td>PSYCOMOTOR ASSESSMENT</td>
                <td>5</td><td>4</td><td>3</td><td>2</td><td>1</td>
            </thead>
            <tbody>
            <tr>
                <td>1</td><td>Hand Writing</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.handwriting) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>2</td><td>Games and Sports</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.game_sport) ? '*' : ''}}</td>
            <tr>
                <td>3</td><td>Creative Writing</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.creative_writing) ? '*' : ''}}</td>
            </tr>
            <tr>
                <td>4</td><td>Performing Art</td>
                <td v-for="(n,index) in 5">{{ (6 - n ==  resultInfo.assessment.performing_art) ? '*' : ''}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "result_assessment",
        props: ['resultInfo'],
    }
</script>

<style scoped>
    .result-assessment {
        max-width: 650px;
        font-size: 1.2em;
        margin-top: 50px;
    }
    .result-assessment td {
       padding: 0px 10px;
    }

    .result-assessment-wrapper {
        height: 300px;
    }
</style>