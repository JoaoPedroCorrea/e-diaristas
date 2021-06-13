import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from "./Footer.style";
import {Typography, Box} from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o melhor profissional com
            total seguranca e praticidade! Sao milhares de clientes satisfeitos
            por todo pais.
          </Typography>
        </Box>
        <AppList>
          <div>
            <FooterTitle>Baixe nosso App</FooterTitle>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src="/img/logos/app-store.png" alt="App Store" />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src="/img/logos/google-play.png" alt="Google Play" />
              </a>
            </li>
          </div>
        </AppList>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
