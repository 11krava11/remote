$ (function() {
  $('.comments__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: "<button class='slick-prev'><img src='images/arrow-right.png'></button>",
    nextArrow: "<button class='slick-next'><img src='images/arrow-right.png'></button>",
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 1
        }
      },
    ]  
  });

  var burger = $('.burger');

  burger.on('click', function() {
    $(this).toggleClass('active not-active');
    $('.menu').toggleClass('active');
  });

  $('.services__list').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });
  $('.values__slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    prevArrow: "<button class='slick-prev'><img src='images/arrow-right.png'></button>",
    nextArrow: "<button class='slick-next'><img src='images/arrow-right.png'></button>",
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});

// function f1() {
//   document.querySelector('.case__content-item').classList.toggle('active');
// }

// document.querySelector('.case__content-btn').onclick = f1;

window.onload = function() {
  let buttons = document.querySelectorAll('.case__content-btn');
  let items = document.querySelectorAll('.case__content-item');
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      items[i].classList.toggle('active');
    }
  }

  const cards = document.querySelectorAll('.posts__card');

document.querySelector('.posts__list').addEventListener('click', event => {
  if(event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['f'];

  cards.forEach(el => {
    if(!el.classList.contains(filterClass) && filterClass !== 'all') {
      el.classList.add('hidden')
    }
    else {
      el.classList.remove('hidden')
    }
  });
});
}

