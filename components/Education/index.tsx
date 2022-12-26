import Card from "../Card";
import { CardBody, CardTitle, ExperienceItem, ExperienceList } from "./styles";

export function Education() {
  return (
    <Card>
      <CardTitle>Educação</CardTitle>
      <CardBody>
        <ExperienceList>
          <ExperienceItem>
            <h3>Recursos Humanos</h3>
            <small>2019 - 2021</small>
            <p>Instituto Avanza</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Recursos Humanos</h3>
            <small>2019 - 2021</small>
            <p>Instituto Avanza</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Recursos Humanos</h3>
            <small>2019 - 2021</small>
            <p>Instituto Avanza</p>
          </ExperienceItem>
          <ExperienceItem>
            <h3>Recursos Humanos</h3>
            <small>2019 - 2021</small>
            <p>Instituto Avanza</p>
          </ExperienceItem>
        </ExperienceList>
      </CardBody>
    </Card>
  );
}
