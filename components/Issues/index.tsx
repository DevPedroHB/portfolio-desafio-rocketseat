import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import { IssuesProps } from "../../@types/data/issues";
import Card from "../Card";
import {
  CardBody,
  CardData,
  Description,
  IssuesBody,
  Labels,
  Title,
} from "./styles";

moment.locale("pt-BR");

interface CardIssuesProps {
  issues: IssuesProps[];
}

export function Issues({ issues }: CardIssuesProps) {
  return (
    <IssuesBody>
      {issues.map((issue) => (
        <Card key={issue.id}>
          <CardBody>
            <Image
              src={issue.user.avatar_url}
              alt={`Avatar de ${issue.user.login}`}
              width={128}
              height={128}
            ></Image>
            <CardData>
              <Title>
                <p>{issue.title}</p>
                <small>{moment(issue.created_at).fromNow()}</small>
              </Title>
              <Description>
                <span>{issue.title}</span>
                <Labels>
                  {issue.labels.length === 0 && <small># undefined</small>}
                  {issue.labels.map((label) => (
                    <small key={label.id}># {label.name}</small>
                  ))}
                </Labels>
              </Description>
            </CardData>
          </CardBody>
        </Card>
      ))}
    </IssuesBody>
  );
}
