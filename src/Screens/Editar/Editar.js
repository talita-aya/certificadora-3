import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  Modal
} from '@mui/material';
import {WarningAmberOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

import "./Editar.css"

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

const Editar = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [location, setLocation] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [certificate, setCertificate] = useState('sim');

    const [modalVisible, setModalVisible] = useState(false);

  const handleEditar = () => {
    navigate("/minicursos-oficinas")
    alert('Editado com sucesso')
  };

  const handleExcluir = () => {
    navigate("/minicursos-oficinas")
    alert('Item excluido')
  };

  return (
    <ThemeProvider theme={theme}>
        <div className='add-container'>
        <div className='forms-container'>
            <h1>{name}</h1>
              <form onSubmit={handleEditar} className='campos-container'>
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
                            rows={10}
                            label="Descrição"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            variant='outlined'
                        />
                        <div className='container-botoes'>
                        <Button
                            type='submit'
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
                            Salvar
                        </Button>
                        <Button
                            onClick={() => setModalVisible(true)}
                            sx={[
                                { 
                                borderRadius: '50px',
                                width: '35%',
                                height: '50px',
                                fontFamily: 'Ubuntu', 
                                fontSize: '16px',
                                fontWeight: 'normal',
                                textTransform: 'none',
                                backgroundColor: '#F93D3D',
                                color: '#fff',

                                ":hover": {
                                    backgroundColor: '#F93D3D',
                                }
                                }
                            ]}
                        >
                            Excluir
                        </Button>

                        </div>
                        
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
        <Modal
            open={modalVisible}
            onClose={()=> setModalVisible(false)}
            animationType="fade"
            transparent={true}
        >
            <div className='centered-div'>
                <div className='modal-div'>
                    <div className='modal-atencao'>
                        <WarningAmberOutlined sx={{ fontSize: 70, color: '#772AAE' }}/>
                        <h3
                            style={{
                                color: '#772AAE',
                                fontSize: '24px',
                                fontFamily: 'Ubuntu',
                                margin: 0
                            }}
                        >ATENÇÃO</h3>
                    </div>
                    <p
                        style={{
                            color: '#373737',
                            fontSize: '16px',
                            fontFamily: 'Ubuntu',
                            margin: 0
                        }} 
                    >
                        Tem certeza que deseja excluir? Essa ação é irreversível
                    </p>
                    <div className='modal-botoes'>
                        <Button 
                            onClick={handleExcluir}
                            sx={[
                                { 
                                borderRadius: '50px',
                                width: '25%',
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
                                Sim
                            </Button>
                            <Button 
                                onClick={() => setModalVisible(false)}
                            sx={[
                                { 
                                borderRadius: '50px',
                                width: '25%',
                                height: '50px',
                                fontFamily: 'Ubuntu', 
                                fontSize: '16px',
                                fontWeight: 'normal',
                                textTransform: 'none',
                                backgroundColor: '#F93D3D',
                                color: '#fff',

                                ":hover": {
                                    backgroundColor: '#F93D3D',
                                }
                                }
                            ]}
                            >
                                Não
                            </Button>
                    </div>
                </div>
                
                
                
            </div>
        </Modal>
    </div>
    </ThemeProvider>
    
    
  );
};

export default Editar;