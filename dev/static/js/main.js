$(document).ready(function(){
    $(".about__list").slick({
        infinite: true,
        dots: true,
        arrows:false,
        dotsClass: "slider-navigation"
    });

    $(".cooperation__list").slick({
        infinite: true,
        dots: true,
        arrows:false,
        dotsClass: "slider-navigation"
    });

    $('.timeline__slides').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        infinite: true,
        prevArrow: '<button type="button" class="prev"></button>',
        nextArrow: '<button type="button" class="next"></button>',
        dots:true,
        dotsClass: "slider-navigation",
        responsive: [
            {
              breakpoint: 728,
              settings: {
                prevArrow: '<button type="button" class="prev"></button>',
                nextArrow: '<button type="button" class="next"></button>',
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
          ]

    });

    $(".simple-slider__list").slick({
        infinite: true,
        dots: true,
        arrows:false,
        dotsClass: "slider-navigation"
    });

    $(".tabs__header").click(function(e){
        e.preventDefault();
        let $this = $(this);
        let tab = $this.attr("data-tab");
        let tabsBlocks = $(".tabs__block");
        $(".tabs__header").removeClass("active");
        tabsBlocks.removeClass("active");
        $(".tabs__block[data-tab=" + tab + "]").addClass("active");
        $this.addClass("active");
    });

    ymaps.ready(init);
});

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [54.671,20.540],
        zoom: 16,
        controls: ['zoomControl'],
        },
        {
            suppressMapOpenBlock: true
        }
    );

    var marker = new ymaps.Placemark([54.670473669700975,20.537994499664354], {
        hintContent: 'Адрес',
        balloonContent: 'Адрес'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'static/images/common/marker.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
    })

    myMap.geoObjects.add(marker);
    myMap.behaviors.disable('scrollZoom');

}