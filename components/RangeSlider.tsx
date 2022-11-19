type Properties = {
  value: number;
  setRangevalue: (value: number) => void;
};

function RangeSlider(properties: Properties) {
  const { value, setRangevalue } = properties;
  return (
    <div>
      <label htmlFor="Scale">Scale</label>
      <input
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-orange-400"
        type="range"
        id="Scale"
        name="Scale"
        value={value}
        min="1"
        max="2"
        step="0.1"
        onChange={(event) => {
          setRangevalue(Number(event.target.value));
        }}
      />
      <ul className="flex w-full justify-between px-2">
        <li className="relative flex justify-center">
          <span className="absolute">1x</span>
        </li>
        <li className="relative flex justify-center">
          <span className="absolute">2x</span>
        </li>
      </ul>
    </div>
  );
}

export { RangeSlider };
