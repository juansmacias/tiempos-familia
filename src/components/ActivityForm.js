import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import EffortRating from './StyledRating';
import { useActivities } from '../hooks/useActivities';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ActivityForm = () => {
  const { addActivity } = useActivities();
  const { register, handleSubmit, reset, setValue, control } = useForm();

  const effort = useWatch({
    control,
    name: 'effort',
    defaultValue: 0,
  });

  const onSubmit = (data) => {
    const newActivity = { ...data, id: Date.now(), completed: false };
    addActivity(newActivity);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Agregar Actividad</h1>
      <TextField {...register('description')} label="Descripción" variant="outlined" fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo</InputLabel>
        <Select {...register('type')} defaultValue={"fun"}>
          <MenuItem value="work" selected>work</MenuItem>
          <MenuItem value="study">study</MenuItem>
          <MenuItem value="exercise">exercise</MenuItem>
          <MenuItem value="fun">fun</MenuItem>
          <MenuItem value="rest">rest</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Esfuerzo</InputLabel>
        <EffortRating
          name="effort"
          value={effort}
          onChange={(event, newValue) => {
            setValue('effort', newValue);
          }}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">Agregar Actividades</Button>
    </form>
  );
};

export default ActivityForm;
