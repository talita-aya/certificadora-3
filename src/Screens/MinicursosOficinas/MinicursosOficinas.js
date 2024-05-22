import React, { useState, useEffect } from 'react';
import './MinicursosOficinas.css';
import logo from '../../Assets/logo.png';
import plus from '../../Assets/plus.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../Firebase/config";

const ItemsCard = ({minicurso_oficina}) => {
    const navigate = useNavigate();
    const { titulo, imagem, vagas, aberto } = minicurso_oficina;
    console.log(minicurso_oficina)

    return (
        <div className="card">
            <figure>
                <img src={imagem} alt={titulo} />
            </figure>
                
            <div className='card-content'>
                <p className='card-title'>{titulo}</p>
                <div className='card-text'>
                    <p>
                        {vagas} vagas
                    </p>
                    <span style={{ visibility: !aberto ? 'visible' : 'hidden'}}>
                            Inscrições Encerradas
                    </span>
                </div>
                <Button
                onClick={() => navigate("/editar")}
                sx={{ 
                    color: '#B1756D',
                    borderColor: '#B1756D',
                    borderRadius: '40px',
                    height: '50px',
                    textTransform: 'none',

                    '&:hover': {
                        backgroundColor: '#B1756D',
                        borderColor: '#B1756D',
                        color: '#fff',
                        transitionProperty: 'all',
                        transitionDuration: '1s'
                    }
                }}
                fullWidth
                variant="outlined"
                size='small'
                >
                Editar
                </Button>
            </div>
        </div>
    );
}

const MinicursosOficinas = () => {
    const navigate = useNavigate();
    const [minicursosOficinas, setMinicursosOficinas] = useState([]);

    useEffect(() => {
        const fetchMinicursosOficinas = async () => {
            try {
                const minicursosOficinasCollection = collection(db, 'minicursos_e_oficinas');
                const minicursosOficinasSnapshot = await getDocs(minicursosOficinasCollection);
                
                const minicursosOficinasData = [];
                minicursosOficinasSnapshot.forEach(doc => {
                    minicursosOficinasData.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
    
                setMinicursosOficinas(minicursosOficinasData);
            } catch (error) {
                console.error("Erro ao buscar minicursos e oficinas:", error);
            }
        };
    
        fetchMinicursosOficinas();
    }, []);

    return (
        <div className='minicursos-oficinas-container'>
            <div className='header'>
                <img src={logo} alt='Logo' width={100}></img>
                <h1>Minicursos e Oficinas</h1>
                <Button
                onClick={() => navigate("/")}
                sx={{
                    borderRadius: '20px',
                    background: 'transparent',
                    borderColor: '#fff',
                    color: '#fff',
                    textTransform: 'none',
                    padding: '5px 26px',

                    '&:hover': {
                        backgroundColor: '#772AAE',
                        borderColor: '#772AAE',
                        color: '#fff',
                        transitionProperty: 'all',
                        transitionDuration: '1s'
                    }
                }}
                variant="outlined"
                size='medium'
                >
                Sair
                </Button>
            </div>
    
            <div className='content'>
                <div className='add-item'>
                    <p className='content-text'>Sinta-se livre para editar os minicursos e oficinas de acordo com sua vontade!</p>
                    <Button
                    onClick={() => navigate("/adicionar")}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#772AAE',
                        borderColor: '#772AAE',
                        borderWidth: '2px',
                        borderRadius: '20px',
                        color: '#fff',
                        textTransform: 'none',

                        '&:hover': {    
                            backgroundColor: '#97538B',
                            borderColor: '#97538B',
                        }
                    }}
                    variant="outlined"
                    size='medium'
                    >
                    <span>Adicionar
                    <img src={plus} alt="Sinal de mais"></img>
                    </span>
                    
                    </Button>
                </div>                
                
                <div className='cards'>
                    {minicursosOficinas.map(minicurso_oficina => (
                        <ItemsCard key={minicurso_oficina.id} minicurso_oficina={minicurso_oficina} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MinicursosOficinas