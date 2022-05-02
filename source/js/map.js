ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 17.2,
            controls: []
        }),

        myPlacemark1 = new ymaps.Placemark([59.938631, 30.323055], {
            balloonContent: 'Маленькая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [67, 100]],
            iconImageHref: "img/icons/icon-map-pin.svg",
            iconImageSize: [67, 100],
            iconImageOffset: [-40, -100],
        });

    myMap.geoObjects.add(myPlacemark1)
}
