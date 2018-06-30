$(document).ready(function () {

    //----------------------<<svg for ie>>----------------------\\
    svg4everybody();

    //----------------------<<modal>>----------------------\\

    $('#modal, #modal-login').iziModal({
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

    $('.trigger').on('click', function (e) {

        e.preventDefault();

        const  modalId =  $(this).data('modal-id');

        $(modalId).iziModal('open');
    });

    //----------------------<<menu>>----------------------\\

    //debounce script
    (function($) {

        const debounce = (callback, delay) => {
            let timeout;
            return function(...array) {

                timeout = clearTimeout(timeout, array);
                    timeout = setTimeout(() => {
                        callback.apply(this, array);
                        timeout = 0;
                    }, delay);

                return this;
            };
        };

        $.extend($.fn, {
            debounce: function(event, callback, delay) {
                this.bind(event, debounce.apply(this, [callback, delay]));
            }
        });
    })(jQuery);

    //menu script
    $(".nav-btn").debounce("click", function(e) {

        const $this = $(this);
        const menu = $('.nav-mobile');
        const duration = 500;

        e.preventDefault();

        if (!$this.hasClass('active')) {
            $this.addClass('active');
            menu.slideDown(duration);

            $this.css({
                'transform' : 'rotate('+ -90 +'deg)'
            });

        } else {
            $this.removeClass('active');
            menu.slideUp(duration);

            $this.css({
                'transform' : 'none'
            });
        }
    }, 200);

    //----------------------<<categories>>----------------------\\
    $('.sidebar-open').on('click', function (e) {

        e.preventDefault();

        sidebarAnimate(250);

    });

    $('.sidebar-close').on('click', function (e) {

        e.preventDefault();

        sidebarAnimate(0);

    });

    function sidebarAnimate(width) {

        let flag = true;

        const sidebar = $('#sidebar');
        const duration = 300;

        if(flag) {
            flag = false;

            sidebar.animate({
                width: width
            }, duration, function () {
                flag = true;
            });
        }
    }

});