$('.dentists_content-slider--list').slick({
    infinite: true,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [{

        breakpoint: 1650,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        },

        breakpoint: 1210,
        settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
        },
        breakpoint: 690,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        },
    }]
});