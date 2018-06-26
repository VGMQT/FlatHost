$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();
    }());

    //----------------------<<modal>>----------------------\\
    (function () {

        $('#modal').iziModal({
            width: '25.5rem',
            radius: 5,
            overlayColor: 'rgba(0, 0, 0, 0.8)',
            transitionIn: 'fadeInDown',
            focusInput: false
        });

        $('#modal-proceed').iziModal({
            width: '26.25rem',
            radius: 5,
            overlayColor: 'rgba(0, 0, 0, 0.8)',
            focusInput: false
        });

        $('#modal-login').iziModal({
            width: '25.5rem',
            radius: 5,
            overlayColor: 'rgba(0, 0, 0, 0.8)',
            transitionIn: 'fadeInDown',
            focusInput: false
        });

        $(document).on('click', '.trigger', function (event) {
            event.preventDefault();
            $('#modal').iziModal('open');
        });

        $(document).on('click', '.trigger-proceed', function (event) {
            event.preventDefault();
            $('#modal-proceed').iziModal('open');
        });

        $(document).on('click', '.trigger-login', function (event) {
            event.preventDefault();
            $('#modal-login').iziModal('open');
        });
    }());

    //----------------------<<menu>>----------------------\\
    (function () {
        let flag = true;

        $('.nav-btn').on('click', function (e) {
            e.preventDefault();

            const $this = $(this);
            const menu = $('.nav-dropdown');

            if (flag) {
                flag = false;
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                    menu.slideDown(500, function () {
                        flag = true;
                    });
                } else {
                    $this.removeClass('active');
                    menu.slideUp(500, function () {
                        flag = true;
                    });
                }
            }
        })
    }());

    //----------------------<<categories>>----------------------\\
    (function () {
        let flag = true;

        const
            sidebar = $('#sidebar'),
            duration = 300;

        $('.sidebar-open').on('click', function (e) {
            e.preventDefault();

            const $this = $(this);

            if(flag){
                flag = false;

                sidebar.animate({
                    width : 250
                }, duration, function () {
                    flag = true;
                });
            }
        });

        $('.sidebar-close').on('click', function (e) {
            e.preventDefault();

            const $this = $(this);

            if(flag){
                flag = false;

                sidebar.animate({
                    width : 0
                }, duration, function () {
                    flag = true;
                });
            }
        });
    }());

});