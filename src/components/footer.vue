<template>
    <footer class="page-footer hide-on-med-and-down">
        <div class="footer-copyright">
            <span class="right tiny strong p16-r">
                Copyright &copy;&nbsp;
                {{ date }}&nbsp;
                SBEMIS. All rights reserved.
            </span>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'SbemisFooter',
  data () {
    return {
      date: new Date().getFullYear().toString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
