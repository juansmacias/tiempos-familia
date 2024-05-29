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
      <TextField {...register('title')} label="Titulo" variant="outlined" fullWidth margin="normal" />
      <TextField {...register('description')} label="Descripción" variant="outlined" fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo</InputLabel>
        <Select {...register('type')} defaultValue={"work"}>
          <MenuItem value="work" selected>Trabajo</MenuItem>
          <MenuItem value="study">Estudio</MenuItem>
          <MenuItem value="exercise">Ejercicio</MenuItem>
          <MenuItem value="fun">Diversion</MenuItem>
          <MenuItem value="rest">Descanso</MenuItem>
          <MenuItem value="transportation">Transporte</MenuItem>
          <MenuItem value="cleaning">Aseo</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Duración</InputLabel>
        <Select {...register('duration')} defaultValue={2}>
          <MenuItem value={0.5}> 30 minutos</MenuItem>
          <MenuItem value={1}>1 hora</MenuItem>
          <MenuItem value={2} selected>2 horas</MenuItem>
          <MenuItem value={3}> 3 horas </MenuItem>
          <MenuItem value={6}> 6 horas </MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" sx={{mb:5}}>
        <InputLabel>Esfuerzo</InputLabel>
        <EffortRating
          name="effort"
          value={effort}
          onChange={(event, newValue) => {
            setValue('effort', newValue);
          }}
        />
      </FormControl>
      <br/>
      <Button type="submit" variant="contained" color="primary">Agregar Actividades</Button>
    </form>
  );
};

export default ActivityForm;
