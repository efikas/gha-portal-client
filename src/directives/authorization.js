import Vue from 'vue'

export default Vue.directive('user', {
    //vnode.elm.parentElement is only available in this hook
    inserted(elem, binding, vnode) {
        if (binding.arg === 'is') {
            if (!vnode.context.$store.getters.permissions.hasOne(binding.value)) {
                vnode.elm.parentElement.removeChild(vnode.elm)
            }
        } else if (binding.arg === 'can') {
            if (!vnode.context.$store.getters.permissions.hasOne(binding.value)) {
                vnode.elm.parentElement.removeChild(vnode.elm)
            }
        } else if (binding.arg === 'hasRoleOrPermission') {
            if (!vnode.context.$store.getters.permissions.hasAny(binding.value)) {
                vnode.elm.parentElement.removeChild(vnode.elm)
            }
        } else if (binding.arg === 'hasRoleAndPermission') {
            if (!vnode.context.$store.getters.permissions.hasAll(binding.value)) {
                vnode.elm.parentElement.removeChild(vnode.elm)
            }
        }
    }
});