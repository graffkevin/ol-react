import { Controllers } from './controllers';
import { MapRendering } from './map.rendering';
import { MapContainer } from './style';

export const Map = () => {
  return (
    <MapContainer>
      <Controllers />
      <MapRendering />
    </MapContainer>
  );
};
