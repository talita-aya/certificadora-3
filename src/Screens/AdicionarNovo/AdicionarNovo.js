import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  styled,
} from '@mui/material';
import './AdicionarNovo.css'

const TextFieldStyled = styled(TextField)`
    & label {
      color: #FFFFFF;
      font-family: 'Ubuntu';
    }
  
    & label.Mui-focused {
      color: #FFFFFF;
    }
  
    & .MuiOutlinedInput-root {
      color: #FFFFFF;
      & fieldset {
        border-color: #FFFFFF;
        border-radius: 10px;
      }
      &:hover fieldset {
        border-color: #FFFFFF;
      }
      &.Mui-focused fieldset {
        border-color: #FFFFFF;
      }
    }
  `;

const AdicionarNovo = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [vacancies, setVacancies] = useState('');
  const [certificate, setCertificate] = useState('sim');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='add-container'>
        <div className='forms-container'>
            <h1>NOVO MINICURSO OU OFICINA</h1>
            <div className='campos-container'>
                    <form onSubmit={handleSubmit} className='inputs-container'>
                        <TextFieldStyled
                            label="Nome"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            variant='outlined'
                        />
                        <TextFieldStyled
                            multiline
                            rows={10}
                            label="Descrição"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            variant='outlined'
                        />

                        <Button type="submit">
                            Cadastrar
                        </Button>
                    </form>
                    <form className='inputs-container'>
                        <TextFieldStyled
                            label="Data"
                            value={date}
                            variant='outlined'
                            onChange={(event) => setDate(event.target.value)}
                        />
                        <TextFieldStyled
                            label="Horário"
                            value={time}
                            variant='outlined'
                            onChange={(event) => setTime(event.target.value)}
                        />
                        <TextFieldStyled
                            label="Duração"
                            value={duration}
                            variant='outlined'
                            onChange={(event) => setDuration(event.target.value)}
                        />
                        <TextFieldStyled
                            label="Local"
                            value={location}
                            variant='outlined'
                            onChange={(event) => setLocation(event.target.value)}
                        />
                        <TextFieldStyled
                            label="Quantidade de vagas"
                            value={vacancies}
                            variant='outlined'
                            onChange={(event) => setVacancies(event.target.value)}
                        />
                        <Select
                            legend="Oiee"
                            value={certificate}
                            onChange={(event) => setCertificate(event.target.value)}
                            variant="outlined"
                            sx={{
                                '& .MuiSelect-icon': {
                                    color: '#FFFFFF',
                                },
                                '& .MuiSelect-outlined': {
                                    color: '#FFFFFF',
                                    fontFamily: 'Ubuntu',
                                },
                                '& fieldset': {
                                    borderColor: '#FFFFFF',
                                    borderRadius: '10px',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFFFFF !important', // Altera a cor da borda do fieldset no hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFFFFF !important',
                                },
                              }}
                        >
                            <MenuItem value="sim">Com certificado</MenuItem>
                            <MenuItem value="nao">Sem certificado</MenuItem>
                        </Select>
                     
                    </form>
            </div>
            
        </div>
    </div>
    
  );
};

export default AdicionarNovo;