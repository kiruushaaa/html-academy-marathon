const init = () => {
  const map = new ymaps.Map('map', {
    center: [59.938419, 30.323559],
    zoom: 18,
  });

  const placemark = new ymaps.Placemark(
    [59.938635, 30.323118],
    {
      balloonContent:
        'Студия дизайна интерьеров <strong>Scandi</strong></br>г. Санкт-петербург, ул. Большая Конюшенная, 19',
      iconCaption: 'Большая Конюшенная ул., 19',
    },
    {
      preset: 'islands#redDotIcon',
    }
  );

  map.geoObjects.add(placemark);
};

export default init;
