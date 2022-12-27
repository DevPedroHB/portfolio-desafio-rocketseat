import Card from "../Card";
import { CardBody, CardTitle, ExperienceItem, ExperienceList } from "./styles";

export function Education() {
  return (
    <Card>
      <CardTitle>Educação</CardTitle>
      <CardBody>
        <ExperienceList>
          <ExperienceItem>
            <h3>Técnico em Informática</h3>
            <small>Jun de 2018 - Dez de 2020</small>
            <p>FIEC - Fundação Indaiatubana de Educação e Cultura</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Gestão Empresarial, Recursos Humanos, Marketing, Logística</h3>
            <small>Mar de 2018 - Mar de 2019</small>
            <p>Instituto Avanza - Educação</p>
          </ExperienceItem>
        </ExperienceList>
      </CardBody>
    </Card>
  );
}
