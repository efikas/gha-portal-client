(function ($) {
    $(function () {

        var window_width = $(window).width();

        // Detect touch screen and enable scrollbar if necessary
        function is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }

        /*if (is_touch_device()) {
            $('#nav-mobile').css({overflow: 'auto'});
        }*/

        // Set checkbox on forms.html to indeterminate
        /*var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
        if (indeterminateCheckbox !== null)
            indeterminateCheckbox.indeterminate = true;*/


        // Plugin initialization
        //$('.modal').modal();
        $('.button-collapse').sideNav({'edge': 'left'});
        $('.collapsible').collapsible();

        $('select').not('.disabled').material_select();

    }); // end of document ready
})(jQuery); // end of jQuery name space
