import FormPassenger from './FormPassenger';

type Props = {
  index: number;
};

export default function BoxFormPassenger({ index = 0 }: Props) {
  return (
    <div>
      <FormPassenger indexPassenger={index} />
    </div>
  );
}
