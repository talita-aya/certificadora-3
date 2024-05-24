import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CalendarMonth, ScheduleOutlined, LocationOnOutlined, DesktopWindowsOutlined, WorkspacePremiumOutlined } from "@mui/icons-material";
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../Firebase/config";

import "./SaibaMais.css";

const SaibaMais = () => {
  const location = useLocation();
  const { minicurso_oficina } = location.state || {};
  const [courseInfo, setCourseInfo] = useState(minicurso_oficina || {});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (minicurso_oficina && minicurso_oficina.id) {
      const fetchCourseInfo = async () => {
        try {
          const docRef = doc(db, 'minicursos_e_oficinas', minicurso_oficina.id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCourseInfo(docSnap.data());
          } else {
            console.log("Este documento não existe");
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchCourseInfo();
    } else {
      setLoading(false);
    }
  }, [minicurso_oficina]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!courseInfo || !courseInfo.titulo) {
    return <div>Não há informações disponíveis</div>;
  }

  return (
    <div className="saiba-mais-container">
      <div className="saiba-mais-background">
        <div className="saiba-mais-conteudo">
          <h1>{courseInfo.titulo}</h1>

          <div className="descricao">
            <p>{courseInfo.descricao}</p>

            <Button
              onClick={() => console.log("Botão inscrever")}
              variant="outlined"
              sx={[
                {
                  borderRadius: "50px",
                  width: "100%",
                  height: "50px",
                  margin: "25px 0",
                  fontFamily: "Ubuntu",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderWidth: "2px",
                  borderColor: "#B1756D",
                  color: "#B1756D",

                  ":hover": {
                    backgroundColor: "#B1756D",
                    color: "#fff",
                    borderColor: "#B1756D",
                  },
                },
              ]}
            >
              Inscrever-se
            </Button>
          </div>

          <div className="info">
            <div className="info-item">
              <CalendarMonth sx={{ fontSize: 35 }} />
              <p>{courseInfo.data}</p>
            </div>

            <div className="info-item">
              <ScheduleOutlined sx={{ fontSize: 35 }} />
              <p>{courseInfo.horario}</p>
            </div>

            <div className="info-item">
              <LocationOnOutlined sx={{ fontSize: 35 }} />
              <p>{courseInfo.local}</p>
            </div>

            <div className="info-item">
              <DesktopWindowsOutlined sx={{ fontSize: 35 }} />
              <p>{courseInfo.duracao} de curso</p>
            </div>

            <div className="info-item">
              <WorkspacePremiumOutlined sx={{ fontSize: 35 }} />
              <p>{courseInfo.certificado ? 'com certificado' : 'sem certificado'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;
