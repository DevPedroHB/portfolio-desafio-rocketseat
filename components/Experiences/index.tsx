import Card from "../Card";
import { CardBody, CardTitle, ExperienceItem, ExperienceList } from "./styles";

export function Experiences() {
  return (
    <Card>
      <CardTitle>Experiências</CardTitle>
      <CardBody>
        <ExperienceList>
          <ExperienceItem>
            <h3>Soldado com qualificação militar em Comunicações</h3>
            <small>mar de 2021 - fev de 2022</small>
            <p>Instituto Avanza</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Desenvolvedor Web FullStack</h3>
            <small>out de 2020 - fev de 2021</small>
            <p>FIEC - Fundação Indaiatubana de Educação e Cultura</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Estagiário em TI</h3>
            <small>Jan de 2020 - Set de 2020</small>
            <p>FIEC - Fundação Indaiatubana de Educação e Cultura</p>
          </ExperienceItem>
        </ExperienceList>
      </CardBody>
    </Card>
  );
}
