import React from 'react';
import { InputGroup } from '../molecules/InputGroup';
import { Button } from '../atoms/Button';

export const FilterForm: React.FC = () => (
  <div className="flex gap-4 mb-6 w-full items-center">
    <div className='flex gap-4'>
    <InputGroup label="Placa" placeholder="Placa" onChange={() => {}} />
    <InputGroup label="Año" placeholder="Año" type="number" onChange={() => {}} />
    <InputGroup label="Marca" placeholder="Marca" onChange={() => {}} />
    <InputGroup label="Modelo" placeholder="Modelo" onChange={() => {}} />
    </div>
    <div className='flex gap-4 h-14 items-center'>
    <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707v6.305a1 1 0 0 1-1.243.97l-2-.5a1 1 0 0 1-.757-.97v-5.805a1 1 0 0 0-.293-.707L3.293 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1"/></svg>} title="Filtrar" color="primary" onClick={() => {}} />
    <Button title="Limpiar" color="secondary" onClick={() => {}} />
    </div>
    
  </div>
);
