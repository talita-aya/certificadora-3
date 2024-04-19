import React from "react";
import { Button, styled } from "@mui/material";
import { CalendarMonth, ScheduleOutlined, LocationOnOutlined, DesktopWindowsOutlined, WorkspacePremiumOutlined } from "@mui/icons-material";

import "./SaibaMais.css";

const SaibaMais = () => {
  return (
    <div className="saiba-mais-container">
      <div className="saiba-mais-background">
        <div className="saiba-mais-conteudo">
          <h1>HTML E CSS</h1>

          <div className="descricao">
            <p>
              Este minicurso oferece uma imersão completa no mundo da criação
              web, ensinando os fundamentos do HTML e CSS. Os participantes
              aprenderão a estruturar conteúdo usando HTML e a estilizar suas
              páginas com CSS. Com ênfase na prática, os alunos construirão um
              site do zero, aplicando conceitos de layout responsivo para
              garantir uma experiência consistente em dispositivos variados.
              <br />
              <br />
              Com suporte personalizado e flexibilidade de aprendizado, este
              curso é perfeito para iniciantes em busca de habilidades
              essenciais para o desenvolvimento web. Ao concluir, os alunos
              receberão um certificado reconhecendo suas novas habilidades em
              HTML e CSS.
            </p>

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
              <p>02/05</p>
            </div>

            <div className="info-item">
              <ScheduleOutlined sx={{ fontSize: 35 }} />
              <p>14H</p>
            </div>

            <div className="info-item">
              <LocationOnOutlined sx={{ fontSize: 35 }} />
              <p>UTFPR (P005)</p>
            </div>

            <div className="info-item">
              <DesktopWindowsOutlined sx={{ fontSize: 35 }} />
              <p>5 horas de curso</p>
            </div>

            <div className="info-item">
              <WorkspacePremiumOutlined sx={{ fontSize: 35 }} />
              <p>com certificado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;
