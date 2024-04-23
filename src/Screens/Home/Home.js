import React from 'react';
import './Home.css';
import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import logo from '../../Assets/logo.png';
import { Button } from '@mui/material';

function CourseCard({ course }) {
    const { isOpen, name, image, spots } = course;

    return (
        <div className={`card ${!isOpen ? 'disabled' : ''}`}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className='card-content'>
                <p className='card-title'>{name}</p>
                <div className='card-text'>
                    <p>{spots} vagas</p>
                </div>
                <Button
                onClick={() => console.log("Botão inscrever")}
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
                disabled={!isOpen}
                >
                {isOpen ? 'Inscrever-se' : 'Inscrições Encerradas'}
                </Button>
            </div>
        </div>
    );
}

const HomeTest = () => {
    
    const courses = [
        { id: 1, name: "HTML e CSS", isOpen: true, image: img1, spots: 25 },
        { id: 2, name: "Estrutura de Dados", isOpen: true, image: img2, spots: 10 },
        { id: 3, name: "Gerenciamento de Projetos", isOpen: false, image: img3, spots: 20 },
        { id: 1, name: "HTML e CSS", isOpen: true, image: img1, spots: 25 },
        { id: 2, name: "Estrutura de Dados", isOpen: false, image: img2, spots: 10 },
        { id: 3, name: "Gerenciamento de Projetos", isOpen: false, image: img3, spots: 20 },
        { id: 1, name: "HTML e CSS", isOpen: true, image: img1, spots: 25 },
        { id: 2, name: "Estrutura de Dados", isOpen: true, image: img2, spots: 10 },
        { id: 3, name: "Gerenciamento de Projetos", isOpen: true, image: img3, spots: 20 }  
    ];

    return (
        <div className='home-container'>
            <div className='header'>
                <img src={logo} alt='Logo' width={100}></img>
                <h1>Minicursos e Oficinas</h1>
                <Button
                onClick={() => console.log("Botão administrador")}
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
                    {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeTest