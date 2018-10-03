<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar-->
        <section class="sidebar">
            <div id="menu" role="navigation" class="mt-3 mb-5">
                <vmenu>
                    <template v-for="item in menuitems">
                        <li class="divider mt-3 " v-if="item.title">
                            <span>{{item.name}}</span>
                        </li>
                        <vsub-menu v-if="item.child" :title="item.name" :icon="item.icon">
                            <vmenu-item v-for="child in item.child" :link="child.link" :icon="child.icon"
                                        :key="child.name">{{child.name}}
                            </vmenu-item>
                        </vsub-menu>
                        <vmenu-item v-if="item.link" :link="item.link" :icon="item.icon">{{ item.name}}
                        </vmenu-item>
                    </template>
                </vmenu>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
    import {
        vmenu,
        vmenuItem,
        vsubMenu
    } from './menu';
    import menu_items from "src/menu/menu";
    import admin_menu_items from "src/menu/admin";
    import student_menu_items from "src/menu/student";
    import teacher_menu_items from "src/menu/teacher";

    export default {
        name: "left-side",
        components: {
            vmenu,
            vsubMenu,
            vmenuItem,
        },
        data() {
            return {}
        },
        computed: {
            menuitems(){
                // return menu_items;
                switch(this.$store.getters.userType) {
                    case 1:
                        return menu_items;
                        break;
                    case 2:
                        return admin_menu_items;
                        break;
                    case 3:
                        return teacher_menu_items;
                        break;
                    case 4:
                        return student_menu_items;
                        break;
                    case 5:
                        return menu_items;
                        break;
                    default:
                        return student_menu_items;
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../css/customvariables";

    .left-aside {
        width: $left_menu_width;
        background: $leftmenu_color;
        background-repeat: repeat-y;
    }

    .navigation {
        padding: 0;
    }

    .divider {
        margin-top: 10px;
        list-style-type: none;
        border-bottom: 1px solid #ececec;
        padding-bottom: 6px;
    }

    .divider span {
        font-size: 15px;
        font-weight: 700;
        color: $divider-leftheader;
        margin: 20px 20px -15px 20px;
    }

    .sidebar {
        display: block;
        font-size: 12px;
        letter-spacing: 1px;
    }

    .content {
        display: block;
        width: auto;
        overflow-x: hidden;
        padding: 0 15px;
    }

    .badge-success {
        background-color: #22d69d;
    }

    .badge {
        padding: 0.60em 0.7em;
        border-radius: 0.75rem;
    }
</style>
