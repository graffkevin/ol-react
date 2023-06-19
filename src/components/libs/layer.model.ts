import { useSelector } from 'react-redux';

export const layerPropertiesModel = (layerProperties: string) => {
  const layerStyle = useSelector((state: any) => state[layerProperties].style);
  const layerValues = Object.entries(layerStyle as { [key: string]: { color: string } }).map(
    ([key, value]) => ({
      color: value.color,
      title: key,
    }),
  );

  return layerValues;
};
