import { Input, InputLabel } from '@mui/material';

import { InputText } from './InputText';

export const Mui = () => {
  return (
    <div>
      <h1>Mui</h1>
      <InputText id={'TEST'} label="TEST"></InputText>
      <InputText id={''} label="Label"></InputText>
      <InputText id={'Moyashi'} label=""></InputText>
    </div>
  );
};
