import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from '../../Assets/logo.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../Firebase/config";

function CourseCard({ minicurso_oficina }) {
    const navigate = useNavigate();
    const { titulo, imagem, vagas, aberto } = minicurso_oficina;

    const handleCardClick = () => {
        if (aberto) {
            navigate("/saiba-mais", { state: { minicurso_oficina } });
        }
    };

    return (
        <div className={`card ${!aberto ? 'disabled' : ''}`} onClick={handleCardClick}>
            <figure>
                <img src={imagem} alt={titulo} />
            </figure>
            <div className='card-content'>
                <p className='card-title'>{titulo}</p>
                <div className='card-text'>
                    <p>{vagas} vagas</p>
                </div>
                <Button
                onClick={() => console.log("botão inscrever")}
                sx={{ 
                    color: '#B1756D',
                    borderColor: '#B1756D',
                    borderWidth: '2px',
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
                disabled={!aberto}
                >
                {aberto ? 'Inscrever-se' : 'Inscrições Encerradas'}
                </Button>
            </div>
        </div>
    );
}

const Home = () => {
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
        <div className='home-container'>
            <div className='header'>
                <img src={logo} alt='Logo' width={100}></img>
                <h1>Minicursos e Oficinas</h1>
                <Button
                onClick={() => navigate("/login")}
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
                Administrador
                </Button>
            </div>
    
            <div className='content'>
                <div className='content-text'>
                    <p>Encontre aquilo que você mais se interessa e garanta sua vaga!</p>
                </div>
                
            
                <div className='cards'>
                    {minicursosOficinas?.map(minicurso_oficina => {
                        return <CourseCard key={minicurso_oficina.id} minicurso_oficina={minicurso_oficina}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home