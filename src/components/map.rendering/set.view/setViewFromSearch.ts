import { defaultZoom } from '../../utils/defaultValues';

export function setViewFromSearch(params: any) {
  const longitude = params.get('lng');
  const latitude = params.get('lat');
  const zoom = params.get('z') ?? defaultZoom;
  return [longitude, latitude, zoom];
}
