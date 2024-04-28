$(function(){
    // JQuery start
    
      $('.bannerSlider').slick({
        arrows: false,
        dots: true,
        dotsClass: "bannerDots container",
      });
  
  
      $('.smBannerSlider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20,
        fade: true,
  
      });
  
  
      $('.productSlider').slick({
        prevArrow: '.leftArrow',
        nextArrow: '.rightArrow',
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      // deals-slider
      
          $('.deals-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1200,
            arrows: false,
            dots: true,
            dotsClass: "bannerDots container",
            infinite: true,
          });

          // news-slider
      
          $('.news').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1200,
            arrows: false,
            dots: false,
            dotsClass: "bannerDots container",
            infinite: true,
          });

          // The Final Countdown
        
          $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
              $this.html(event.strftime(''
              + '<div class="clock-card"><h3>%D</h3> <p>Days</p></div>'
              + '<span>:</span>' + '<div class="clock-card"><h3>%H</h3> <p>Hour</p></div>'
              + '<span>:</span>' + '<div class="clock-card"><h3>%M</h3> <p>Minute</p></div>'
              + '<span>:</span>' + '<div class="clock-card"><h3>%S</h3> <p>Sec</p></div>'));
            });
          });
    // JQuery end
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  