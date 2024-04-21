(function ($) {
    "use strict";

    if (window.innerWidth < 800) {
        // Show an alert message
        var txt;
        txt="open in desktop view ";
        alert("Please open in Laptop/PC ");
    }


    // Function to replace video with background color
function replaceVideoWithColor() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var container = document.getElementById('background-container');

    // Check screen size
    if (screenWidth < 800) {
        container.innerHTML = ''; // Remove video
        container.style.backgroundColor = '#0BCEAF'; // Set background color
        
        console.log("BG changed successfully!");


    } else {
        // Restore video
        container.innerHTML = '<iframe class="background-video" id="home" src="https://www.youtube.com/embed/MlnNZV7Jujs?autoplay=1&loop=1&playlist=MlnNZV7Jujs&mute=1&controls=0&showinfo=0&autohide=1&modestbranding=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
        container.style.backgroundColor = ''; // Clear background color
    }
}

// Initial call to replace video or set background color based on screen size
replaceVideoWithColor();

// Event listener for window resize to adjust video or background color dynamically
window.addEventListener('resize', function() {
    replaceVideoWithColor(); // Call function when window is resized
});




    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    
    // Navbar on scrolling
  
    
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // form forwording 


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
 
    
    $(document).ready(function(){
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            items: 1,
            nav: true, // Enable navigation arrows
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"] // Specify custom arrow icons
        });
    });
    
})(jQuery);

