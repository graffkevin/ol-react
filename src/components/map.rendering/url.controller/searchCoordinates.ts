import { addClickedPointLayerHandler } from '../../utils/addPointOnClick';
import { defaultLocation, defaultZoom } from '../../utils/defaultValues';
import { from4326to3857 } from '../../utils/produceGeometries';
import { paramsFromHash } from './getSearchMethods';

export function useSearchCoordinates(hash: any, openLayerMap: any) {
  // If you wanna request url like this : http://localhost:3000/#15/43.567080599999997/-1.4449604000000000

  if (hash.length > 0) {
    const [, lat, lng] = hash.split('/');
    const eventPoint3857 = { coordinate: from4326to3857([Number(lng), Number(lat)]) };
    addClickedPointLayerHandler(openLayerMap, eventPoint3857, 'hashPoint');
    return paramsFromHash(hash);
  }

  const [defaultLongitude, defaultLatitude] = defaultLocation;
  return [defaultLongitude, defaultLatitude, defaultZoom];
}
