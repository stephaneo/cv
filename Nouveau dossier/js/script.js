$(document).ready( function() {

    // main height
    $('.main').css('height', $(window).height()-90); 

	// Ancres
    $('nav li a').on('click', function(event) {
        var ancre       = $(this).attr('href').replace('#',''),
            divPosition = $('#'+ancre).offset().top;
        $('html, body').animate({scrollTop:divPosition}, 600, 'easeOutCubic');
        event.preventDefault();
    });

    // Minified nav
    $(window).scroll( function() {
        if ( $(window).scrollTop() > $('section.main').outerHeight()-30 ) {
            $('nav').addClass('minified');
        }
        else {
            $('nav').removeClass('minified');
        }

        // Jauge skills
        if ( $(window).scrollTop() > $('section.main').height() ) {
            $('.competences-1 > li > span > span').each( function() {
                $(this).css('height', 100-parseInt($(this).data('skill'))+'%')
            })
        }

        // Normal Nav on top
        if ( $(window).scrollTop() < $('section.main').height()  ) {
            $('nav').removeClass('minified');
            $('nav ul').removeAttr('style');
        }
        
    });

    // Minified Nav
    $('nav > div').on('click', function(e) {
        e.stopPropagation();
        $('nav ul').toggle()
    });
    $('nav li').on('click', function() {
        $('nav ul').hide()
    });
    $('html').on('click', function() {
        $('nav ul').hide()
    });


    // Copier coller
    ZeroClipboard.config( { swfPath: 'js/includes/ZeroClipboard.swf' } );
    var client = new ZeroClipboard( document.getElementById("copyBtn") );
    client.on('aftercopy', function(event) {
        $('#membaucher p').append('<span id="myFlyingAddress">'+$('#myAddress').text()+'</span>');
        $('#myFlyingAddress').animate({'top':'-45px', 'opacity':0}, 250, 'linear', function() {
            $(this).remove()
        });
    });
    client.on('mouseover', function(event) { $('#copy-tip').show() });    
    client.on('mouseout', function(event) { $('#copy-tip').hide() });    
});