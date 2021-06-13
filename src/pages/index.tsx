import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from '@material-ui/core';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";


export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheca os profissionais"}
        subtitle={
          "Preencha seu endereco e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>CEP invalido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Joao Pedro"}
              picture={"https://github.com/JoaoPedroCorrea.png"}
              rating={5}
              description={"Florianopolis"}
            />
            <UserInformation
              name={"Douglas Martins"}
              picture={"https://github.com/douglas-martins.png"}
              rating={5}
              description={"Florianopolis"}
            />
            <UserInformation
              name={"Ruan Bevilaqua"}
              picture={"https://github.com/ruanbevilaqua.png"}
              rating={5}
              description={"Florianopolis"}
            />
            <UserInformation
              name={"Joao Pedro"}
              picture={"https://github.com/JoaoPedroCorrea.png"}
              rating={5}
              description={"Florianopolis"}
            />
            <UserInformation
              name={"Douglas Martins"}
              picture={"https://github.com/douglas-martins.png"}
              rating={5}
              description={"Florianopolis"}
            />
            <UserInformation
              name={"Ruan Bevilaqua"}
              picture={"https://github.com/ruanbevilaqua.png"}
              rating={5}
              description={"Florianopolis"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
