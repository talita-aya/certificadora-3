import React from 'react';
import './MinicursosOficinas.css';
import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import logo from '../../Assets/logo.png';
import plus from '../../Assets/plus.png';
import { Button } from '@mui/material';

function ItemsCard({ item }) {
    const { isOpen, name, image, spots } = item;

    return (
        <div className="card">
            <figure>
                <img src={image} alt={name} />
            </figure>
                
            <div className='card-content'>
                <p className='card-title'>{name}</p>
                <div className='card-text'>
                    <p>
                        {spots} vagas
                    </p>
                    <span style={{ visibility: !isOpen ? 'visible' : 'hidden'}}>
                            Inscrições Encerradas
                    </span>
                </div>
                <Button
                onClick={() => console.log("Botão editar")}
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
    
    const items = [
        { id: 1, name: "HTML e CSS", isOpen: true, image: img1, spots: 25 },
        { id: 2, name: "Estrutura de Dados", isOpen: true, image: img2, spots: 10 },
        { id: 3, name: "Gerenciamento de Projetos", isOpen: false, image: img3, spots: 20 } ,
        { id: 1, name: "HTML e CSS", isOpen: true, image: img1, spots: 25 },
        { id: 2, name: "Estrutura de Dados", isOpen: false, image: img2, spots: 10 },
        { id: 3, name: "Gerenciamento de Projetos", isOpen: false, image: img3, spots: 20 },
        { id: 1, name: "HTML e CSS", isOpen: true, image: img1, spots: 25 },
        { id: 2, name: "Estrutura de Dados", isOpen: true, image: img2, spots: 10 },
        { id: 3, name: "Gerenciamento de Projetos", isOpen: true, image: img3, spots: 20 }  
    ];

    return (
        <div className='minicursos-oficinas-container'>
            <div className='header'>
                <img src={logo} alt='Logo' width={100}></img>
                <h1>Minicursos e Oficinas</h1>
                <Button
                onClick={() => console.log("Botão sair")}
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
                    onClick={() => console.log("Botão adicionar")}
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
                    {items.map(item => (
                    <ItemsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MinicursosOficinas