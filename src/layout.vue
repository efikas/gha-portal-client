<template>
    <div>
        <preloader v-show="this.$store.state.preloader"></preloader>
        <vueadmin_header></vueadmin_header>
        <div class="wrapper row-offcanvas">
            <left_side v-show="this.$store.state.left_open"></left_side>
            <right_side>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </right_side>
        </div>
    </div>
</template>
<script>
    /**
     * These are the files that enable you to change layouts and other options
     */

    /**
     * import preloader
     * choose from preloader and bounce
     */
    import preloader from 'components/layouts/preloader/preloader'

    /**
     * The right side content
     */
    import right_side from 'components/layouts/right-side'

    /**
     * import left-side from default or horizontal-menu
     * eg: import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
     */
    import left_side from 'components/layouts/left-side/default/left-side'


    /**
     * import from header or fixed-header or no-header
     */
    import vueadmin_header from 'components/layouts/header/fixed-header'

    /**
     * Styles
     */

    /**
     * Main stylesheet for the layout
     */
    import 'assets/sass/custom.scss'

    /**
     * Style required for a boxed layout
     */
    // import 'components/layouts/css/boxed.scss'

    /**
     * Style required for a fixed-menu layout
     */
    import 'components/layouts/css/fixed-menu.scss'

    /**
     * Style required for a compact-menu layout
     */
    // import 'components/layouts/css/compact-menu.scss'

    /**
     * Style required for a centered-logo layout
     */
    // import 'components/layouts/css/centered-logo.scss'

    /**
     * Style required for a content-menu layout
     */
    // import 'components/layouts/css/content_menu.scss'


    /**
     * import animejs for the menu transition effects
     */
    import anime from 'animejs'

    /**
     * Custom Style
     */
    import 'components/layouts/css/ekiti.scss'


    export default {
        name: 'layout',
        components: {
            preloader,
            vueadmin_header,
            left_side,
            right_side
        },
        data() {
            return {
                showtopbtn: false
            }
        },
        mounted() {
            if (window.innerWidth <= 992) {
                this.$store.commit('left_menu', 'close')
            }
        },

    }
</script>
<style lang="scss" scoped>
    .wrapper:before,
    .wrapper:after {
        display: table;
        content: " ";
    }

    .wrapper:after {
        clear: both;
    }

    .wrapper {
        display: table;
        overflow-x: hidden;
        width: 100%;
        max-width: 100%;
        table-layout: fixed
    }

    .right-aside,
    .left-aside {
        padding: 0;
        display: table-cell;
        vertical-align: top;
    }

    .right-aside {
        background-color: rgba(#ebf2f6, .5) !important;
    }

    @media (max-width: 992px) {
        .wrapper>.right-aside {
            width: 100vw;
            min-width: 100vw;
        }
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }
    
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-in {
        from {
            transform: translateY(0);
            opacity: 1;
        }

        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
<!--<style src="components/layouts/css/ekiti.css"></style>-->