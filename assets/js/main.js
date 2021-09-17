// STICKY NAVIGATION
window.addEventListener('scroll',function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky",window.scrollY > 0);
});


// COUNTDOWN
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "July 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

    // SLICK SLIDER

    $('.event-slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'<i class="las la-arrow-alt-circle-left"></i>',
        nextArrow: '<i class="las la-arrow-alt-circle-right"></i>',
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // OWL CAROUSEL TESTIMONIAL
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // banner-slick=================
   

    $('.banner-slider').slick({
      dots: true,
      infinite: true,
      autoplay:false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // product details page
    var productImage = document.getElementById("productImage");
    var smallImage = document.getElementsByClassName("small-image");

    smallImage[0].onclick = function () {
        productImage.src = smallImage[0].src;
    } 
    smallImage[1].onclick = function () {
        productImage.src = smallImage[1].src;
    } 
    smallImage[2].onclick = function () {
        productImage.src = smallImage[2].src;
    } 
    smallImage[3].onclick = function () {
        productImage.src = smallImage[3].src;
    } 

    // click bttns
    function moveNumbers(){
      var no=document.getElementById("no");
      var txt=document.getElementById("result").value;
      txt=txt + option;
      document.getElementById("result").value=txt;
  }
