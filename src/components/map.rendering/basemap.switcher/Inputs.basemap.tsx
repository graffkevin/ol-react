interface InputsBasemapProps {
  properties: any;
  name: any;
  visibility: any;
  toggleVisibility: any;
}

export const InputsBasemap = ({
  properties,
  name,
  visibility,
  toggleVisibility,
}: InputsBasemapProps) => {
  return (
    <div key={properties}>
      <label>{name}</label>
      <input
        type="checkbox"
        id={`layer-${properties}`}
        checked={visibility}
        onChange={() => toggleVisibility}
      />
    </div>
  );
};
