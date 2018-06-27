$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    (function () {
        svg4everybody();

    //----------------------<<modal>>----------------------\\
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

        // $(document).on('click', '.trigger', function (event) {
        //     event.preventDefault();
        //     $('#modal').iziModal('open');
        // });
        //
        // $(document).on('click', '.trigger-proceed', function (event) {
        //     event.preventDefault();
        //     $('#modal-proceed').iziModal('open');
        // });
        //
        // $(document).on('click', '.trigger-login', function (event) {
        //     event.preventDefault();
        //     $('#modal-login').iziModal('open');
        // });

        $('.trigger').on('click', function (e) {

            const $this = $(this);

            e.preventDefault();

            if ($this.data('modal') === "main") {
                $('#modal').iziModal('open');
            } else if ($this.data('modal') === "proceed") {
                $('#modal-proceed').iziModal('open');
            } else {
                $('#modal-login').iziModal('open');
            }

        });

        //----------------------<<menu>>----------------------\\
        $('.nav-btn').on('click', function (e) {

            let flag = true;

            const $this = $(this);
            const menu = $('.nav-mobile');
            const duration = 500;

            e.preventDefault();

            if (flag) {
                flag = false;
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                    menu.slideDown(duration);

                    $this.css({
                        'transform' : 'rotate('+ -90 +'deg)'
                    }, function () {
                        flag = true;
                    });

                } else {
                    $this.removeClass('active');
                    menu.slideUp(duration);

                    $this.css({
                        'transform' : 'none'
                    }, function () {
                        flag = true;
                    });
                }
            }
        });

        //----------------------<<categories>>----------------------\\
        $('.sidebar-open').on('click', function (e) {

            let flag = true;

            const sidebar = $('#sidebar');
            const duration = 300;

            e.preventDefault();

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

            let flag = true;

            const sidebar = $('#sidebar');
            const duration = 300;

            e.preventDefault();

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