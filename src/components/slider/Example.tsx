import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '..';

export function Example() {
  return (
    <SliderRoot defaultValue={25}>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="音量" />
        </SliderTrack>
      </SliderControl>
      <SliderValue>{([value]) => `${value}%`}</SliderValue>
    </SliderRoot>
  );
}
