import { Feature } from 'ol';
// import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
// import Map from 'ol/Map';
import { transform } from 'ol/proj';
import VectorSource from 'ol/source/Vector';

export function from3857to4326(coordinates: any) {
  return transform(coordinates, 'EPSG:3857', 'EPSG:4326');
}

export function from4326to3857(coordinates: number[]) {
  return transform(coordinates, 'EPSG:4326', 'EPSG:3857');
}

export function deleteFeature(coord: [number, number], vector: VectorSource<any>) {
  const feature = vector.getClosestFeatureToCoordinate(coord);
  vector.removeFeature(feature);
}

export function createPointFromEvent(
  event: any,
  title: string,
  style: any,
): VectorLayer<VectorSource> {
  const vectorlayer = new VectorLayer({
    style: style,
    source: new VectorSource({
      features: [
        new Feature({
          title,
          geometry: new Point([event.coordinate[0], event.coordinate[1]]),
        }),
      ],
    }),
    properties: {
      name: title,
      lat: event.coordinate[0],
      lng: event.coordinate[1],
    },
  });
  return vectorlayer;
}

export function createPointFromApi(
  event: any,
  title: string,
  style: any,
): VectorLayer<VectorSource> {
  const vectorlayer = new VectorLayer({
    style,
    source: new VectorSource({
      features: [
        new Feature({
          title,
          geometry: new Point([event[0], event[1]]),
        }),
      ],
    }),
    properties: {
      name: title,
      lat: event[0],
      lng: event[1],
    },
  });
  return vectorlayer;
}

export function removeLayer(olmap: any, name: string): void {
  olmap.getLayers().forEach((layer: any) => {
    if (layer && layer.get('name') === name) {
      olmap.removeLayer(layer);
    }
  });
}
