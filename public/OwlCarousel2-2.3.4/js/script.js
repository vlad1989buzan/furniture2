$(function () {
  // Owl Carousel
  var owl = $(".slider1");
  owl.owlCarousel({
    items: 1,
    margin: 0,//Отступ от картино если выводите больше 1
    loop: true,//Зацикливаем слайдер
    nav: true,//Отключил навигацию
    autoplay: true,//Автозапуск слайдера
    autoplayHoverPause: true, //Пауза при навидении мыши
    autoplayTimeout: 3000,
    smartSpeed: 6000,
    dots: false,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.

    // URLhashListener: true, startPosition: 'URLHash', //Параметр URLhashListener прослушивает изменение хэша URL-
    // адреса и ищет слайд с тем же именем данных, например data - hash="zero"
    navContainer: '#navhere',
    navText: ['<div class="prev1"><i class="fas fa-angle-left"></i></div>', '<div class="next1"><i class="fas fa-angle-right"></i></div>'],
    // autoWidth: true,Используйте стиль ширины для элементов, чтобы получить желаемый результат.
    // При использовании с бесконечным циклом добавьте параметр «items» больше 1.
    //  Все зависит от ширины вашего контента.
    // center: true, Добавить центр в настройку:
    // animateOut: 'slideOutDown',
    // animateIn: 'slideInDown',
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      800: {
        items: 1,
        dots: false,
      }




    }
  });
  function counter(event) {

    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items
    }
    $(element).parent().find('.counter').html(item + " / " + items)
  }

})

$(function () {
  // Owl Carousel
  var owl = $(".benefits-slider");
  owl.owlCarousel({
    items: 3,
    // margin: 30,//Отступ от картино если выводите больше 1
    loop: true,//Зацикливаем слайдер
    nav: true,//Отключил навигацию
    autoplay: true,//Автозапуск слайдера
    autoplayHoverPause: true, //Пауза при навидении мыши
    autoplayTimeout: 3000,
    smartSpeed: 3000,
    dots: false,
    //onInitialized: counter, //When the plugin has initialized.
    //onTranslated: counter, //When the translation of the stage has finished.

    // URLhashListener: true, startPosition: 'URLHash', //Параметр URLhashListener прослушивает изменение хэша URL-
    // адреса и ищет слайд с тем же именем данных, например data - hash="zero"
    navContainer: '#navhere_benefits-slider',
    navText: ['<div class="prev"><i class="fas fa-angle-left"></i></div>', '<div class="next"><i class="fas fa-angle-right"></i></div>'],
    // autoWidth: true,Используйте стиль ширины для элементов, чтобы получить желаемый результат.
    // При использовании с бесконечным циклом добавьте параметр «items» больше 1.
    //  Все зависит от ширины вашего контента.
    // center: true, Добавить центр в настройку:
    // animateOut: 'slideOutDown',
    // animateIn: 'slideInDown',
    responsive: {
      0: {
        items: 1,
        margin: 0,
        dots: true,
      },
      600: {
        items: 1,
        margin: 15,
      },
      960: {
        items: 2,
        margin: 20,
      },
      1366: {
        items: 3,
        margin: 30,
      },

    }
  });


})



