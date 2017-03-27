(function($){

/* ---------------------------------------------- /*
 * Прелоадер
/* ---------------------------------------------- */

    $(window).on('load', function () {
        var $preloader = $('#preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    $(window).load(function() {

/* ---------------------------------------------- /*
 * Фиксированое меню
/* ---------------------------------------------- */

    $('#sticky').sticky({topSpacing: 0});

/* ---------------------------------------------- /*
 * Паралакс эфект
/* ---------------------------------------------- */

   $('#home').height($(window).height());

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('#home').css({'background-attachment': 'scroll'});
        } else {
            $('#home').parallax('50%', 0.1);
        }


/* ---------------------------------------------- /*
 * Круговая диаграмма
/* ---------------------------------------------- */

    $('.skills').waypoint(function(){
        $(function () {
            $('.chart').easyPieChart({
                //your options goes here

                size: 140,
                animate: 3000,
                lineCap: 'butt',
                scaleColor: false,
                barColor: '#FF5252',
                trackColor: 'transparent',
                lineWidth: 8
            });
        });
    },{offset:'70%'});

/* ---------------------------------------------- /*
 * Подсветка активного пункта меню
/* ---------------------------------------------- */

    var positions = [],
        currentActive = null,
        links = $('.scroll-to');

    $('.anchor').each(function () {
        positions.push({
            top: $(this).position().top - 100,
            a: links.filter('[href="#' + $(this).attr('id') + '"]')
        });
    });

    positions = positions.reverse();

    $(window).on('scroll', function () {
        var winTop = $(window).scrollTop();
        for (var i = 0; i < positions.length; i++) {
            if (positions[i].top < winTop) {
                if (currentActive !== i) {
                    currentActive = i;
                    links.removeClass('active');
                    positions[i].a.addClass('active');
                }
                break;
            }
        }
    });

/* ---------------------------------------------- /*
 * Smooth scroll
/* ---------------------------------------------- */

    $('html').smoothScroll(600);

/* ---------------------------------------------- /*
 * Contact form ajax
/* ---------------------------------------------- */
var response = $('.ajax-response')

        $('#contact-form').submit(function() {
            $.ajax({
                    type: 'POST',
                    url: 'mail.php',
                    data: $(this).serialize()
                }).done(function() {
                    $('#contact-form').trigger('reset');
                    response.html('<i class="fa fa-thumbs-up"></i>Thanks for your mail.');
                });
                return false;
        });

    });
})(jQuery);
