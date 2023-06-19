import { Circle, Fill, Stroke, Style } from 'ol/style';

const geolocationStyleFill = new Fill({
  color: 'rgba(0, 255, 0, 1)',
});
const geolocationStyleStroke = new Stroke({
  color: '#3399CC',
  width: 1.25,
});

export const geolocationStyle = [
  new Style({
    image: new Circle({
      fill: geolocationStyleFill,
      stroke: geolocationStyleStroke,
      radius: 5,
    }),
    fill: geolocationStyleFill,
    stroke: geolocationStyleStroke,
  }),
];
