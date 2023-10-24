import { Input } from '@mui/material';

interface Props {
  id: string;
  label: string;
}

export const InputText = ({ id, label }: Props) => {
  return (
    <div>
      <Input type="text" id={id}></Input>
      <label htmlFor={label}>TEST</label>
    </div>
  );
};
