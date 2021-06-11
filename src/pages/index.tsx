import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import { UserInformationContainer } from "ui/components/data-display/UserInformation/UserInformation.style";

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
      <UserInformation
        name={"Joao Pedro"}
        picture={"https://github.com/JoaoPedroCorrea.png"}
        rating={4}
        description={"Florianopolis"}
      />
    </div>
  );
}
