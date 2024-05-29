import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider
} from '@mui/material';
import './AdicionarNovo.css'

import { useNavigate } from 'react-router-dom';

import { collection, addDoc } from 'firebase/firestore';
import {db} from '../../Firebase/config'


  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            '& .MuiMenuItem-root': {
              color: '#FFFFFF',
              backgroundColor: '#772AAE !important',
              opacity: '0.8',
              
            },
            '& .MuiMenuItem-root.Mui-selected': {
              backgroundColor: '#772AAE !important',
              opacity: '1',
            },
            '& .MuiList-root.MuiMenu-list': {
                paddingTop: 0,
                paddingBottom: 0,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label': {
              color: '#FFFFFF',
              fontFamily: 'Ubuntu',
            },
            '& label.Mui-focused': {
              color: '#FFFFFF',
            },
            '& .MuiOutlinedInput-root': {
              color: '#FFFFFF',
              '& fieldset': {
                borderColor: '#FFFFFF',
                borderRadius: '10px',
              },
              '&:hover fieldset': {
                borderColor: '#FFFFFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF',
              },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
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
          },
        },
      },
    },
  });

const AdicionarNovo = () => {
  const navigate = useNavigate();

  const MiniCursos_e_OficinasCollection = collection(db, "minicursos_e_oficinas")

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [vacancies, setVacancies] = useState('');
  const [inscription, setInscription] = useState('');
  const [certificate, setCertificate] = useState('sim');

  const handleNovo = () => {
    const docCursos = {
      titulo: name,
      descricao: description,
      data: date,
      horario: time,
      duracao: duration,
      local: location,
      vagas: vacancies,
      certificado: certificate,
      aberto: true,
      inscricao: inscription,
    }

    addDoc(MiniCursos_e_OficinasCollection, docCursos).then( (docRef) => {
      alert("Item adicionado com sucesso")
      navigate('/minicursos-oficinas')
      
    }).catch((erro) => {
      console.log("erro: " + erro)
    })

    
  };

  return (
    <ThemeProvider theme={theme}>
        <div className='add-container'>
        <div className='forms-container'>
            <h1>NOVO MINICURSO OU OFICINA</h1>
              <form onSubmit={handleNovo} className='campos-container'>
                <div className='inputs-container left'>
                      <TextField
                            fullWidth
                            label="Nome"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            variant='outlined'
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={7}
                            label="Descrição"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            variant='outlined'
                        />
                        <TextField
                            fullWidth
                            label="Formulário de inscrição"
                            value={inscription}
                            variant='outlined'
                            onChange={(event) => setInscription(event.target.value)}
                        />

                        <Button type="submit"
                          sx={[
                            { 
                            borderRadius: '50px',
                            width: '35%',
                            height: '50px',
                            fontFamily: 'Ubuntu', 
                            fontSize: '16px',
                            fontWeight: 'normal',
                            textTransform: 'none',
                            backgroundColor: '#772AAE',
                            color: '#fff',
                
                            ":hover": {
                              backgroundColor: "#97538B",
                            }
                            }
                          ]}
                        >
                            Enviar
                        </Button>
                </div>
                <div className='inputs-container right'>
                        <TextField
                            fullWidth
                            label="Data"
                            value={date}
                            variant='outlined'
                            onChange={(event) => setDate(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Horário"
                            value={time}
                            variant='outlined'
                            onChange={(event) => setTime(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Duração"
                            value={duration}
                            variant='outlined'
                            onChange={(event) => setDuration(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Local"
                            value={location}
                            variant='outlined'
                            onChange={(event) => setLocation(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Quantidade de vagas"
                            value={vacancies}
                            variant='outlined'
                            onChange={(event) => setVacancies(event.target.value)}
                        />
                        
                        <Select
                            value={certificate}
                            onChange={(event) => setCertificate(event.target.value)}
                            variant="outlined"
                            sx={{
                                
                              }}
                        >
                            <MenuItem value="sim">Com certificado</MenuItem>
                            <MenuItem value="nao">Sem certificado</MenuItem>
                        </Select>
                     
                </div>
              </form>
            
        </div>
    </div>
    </ThemeProvider>
    
    
  );
};

export default AdicionarNovo;