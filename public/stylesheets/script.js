$(document).ready(function () {
    $('.animate-wp-1').waypoint(function(direction) {
        $('.animate-wp-1').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });
    $('.animate-wp-2').waypoint(function(direction) {
        $('.animate-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '85%'
    });
    $('.animate-wp-3').waypoint(function(direction) {
        $('.animate-wp-3').addClass('animated fadeInDown');
    }, {
        offset: '80%'
    });
    $('.animate-wp-4').waypoint(function(direction) {
        $('.animate-wp-4').addClass('animated fadeInDown');
    }, {
        offset: '77%'
    });
    $('.animate-wp-5').waypoint(function(direction) {
        $('.animate-wp-5').addClass('animated bounce');
    }, {
        offset: '100%'
    });
    $('.animate-wp-6').waypoint(function(direction) {
        $('.animate-wp-6').addClass('animated fadeInUp');
    }, {
        offset: '100%'
    });
    $('.animate-wp-7').waypoint(function(direction) {
        $('.animate-wp-7').addClass('animated fadeInUp');
    }, {
        offset: '100%'
    });
});