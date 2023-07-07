import { defaultZoom } from '../../utils/defaultValues';

export function paramsFromSearch(params: any) {
  const longitude = params.get('lng');
  const latitude = params.get('lat');
  const zoom = params.get('z') ?? defaultZoom;
  return [longitude, latitude, zoom];
}

export function paramsFromHash(hash: any) {
  const [zoom, latitude, longitude] = hash.split('/');
  return [Number(longitude), Number(latitude), Number(zoom.replace('#', ''))];
}
