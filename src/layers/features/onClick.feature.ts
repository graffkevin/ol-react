import { Circle, Fill, Stroke, Style } from 'ol/style';

const clickedOnMapStyleFill = new Fill({
  color: 'rgba(255,255,0,0.9)',
});
const clickedOnMapStyleStroke = new Stroke({
  color: 'black',
  width: 1.25,
});

export const clickedOnMapPointStyle = [
  new Style({
    image: new Circle({
      fill: clickedOnMapStyleFill,
      stroke: clickedOnMapStyleStroke,
      radius: 5,
    }),
    fill: clickedOnMapStyleFill,
    stroke: clickedOnMapStyleStroke,
  }),
];
