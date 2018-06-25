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

});