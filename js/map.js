let myMap;

const init = () => {
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.940195, 30.345040],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
        controls: []
    });

    const coords = [
        [59.939069, 30.352232],
        [59.937318, 30.340519],
        [59.942373, 30.342309]
    ];

    const myCollection = new ymaps.GeoObjectCollection({},  {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/contacts/marker.png',
        iconImageSize: [45, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });
    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);