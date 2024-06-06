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
import { useLocation, useNavigate } from 'react-router-dom';
import {doc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from "../../Firebase/config";

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
    const location = useLocation();

    const {minicurso_oficina} = location.state;
    const [formData, setFormData] = useState({...minicurso_oficina});

    const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleEditar = (e) => {
    e.preventDefault(); //evitar que o formulário recarregue a página por si só

    try {
      //referência ao documento no firestore
      const docRef = doc(db, 'minicursos_e_oficinas', formData.id);

      updateDoc(docRef, formData);
      alert('Editado com sucesso')
      navigate("/minicursos-oficinas", {replace: true})
    }catch (error) {
      console.error("Erro ao editar item: ", error);
    }

    
    
  }

  const handleExcluir = () => {
    
    try {
      const docRef = doc(db, 'minicursos_e_oficinas', formData.id);
      deleteDoc(docRef);
      alert('Item excluido')
      navigate("/minicursos-oficinas", {replace: true});
    } catch (error) {
      console.error("Erro ao excluir item: ", error);
    }
    
  }

  return (
    <ThemeProvider theme={theme}>
        <div className='add-container'>
        <div className='forms-container'>
            <h1>{formData.titulo}</h1>
              <form onSubmit={handleEditar} className='campos-container'>
                <div className='inputs-container left'>
                      <TextField
                            fullWidth
                            label="Nome"
                            name='titulo'
                            value={formData.titulo}
                            onChange={handleChange}
                            variant='outlined'
                            
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={7}
                            label="Descrição"
                            name='descricao'
                            value={formData.descricao}
                            onChange={handleChange}
                            variant='outlined'
                        />
                        <Select
                            name='aberto'
                            value={formData.aberto ? 'true' : 'false'}
                            onChange={(e) => handleChange({ target: { name: 'aberto', value: e.target.value === 'true' } })}
                            variant="outlined"
                            sx={{
                                width: '100%',
                              }}
                        >
                            <MenuItem value="true">Aberto</MenuItem>
                            <MenuItem value="false">Encerrado</MenuItem>
                        </Select>
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
                            name='data'
                            value={formData.data}
                            variant='outlined'
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Horário"
                            name='horario'
                            value={formData.horario}
                            variant='outlined'
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Duração"
                            name='duracao'
                            value={formData.duracao}
                            variant='outlined'
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Local"
                            name='local'
                            value={formData.local}
                            variant='outlined'
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Quantidade de vagas"
                            name='vagas'
                            value={formData.vagas}
                            variant='outlined'
                            onChange={handleChange}
                        />
                        <Select
                            name='certificado'
                            value={formData.certificado}
                            onChange={handleChange}
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