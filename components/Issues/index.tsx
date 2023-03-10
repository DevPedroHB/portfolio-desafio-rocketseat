import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IssuesProps } from "../../@types/data/issues";
import Card from "../Card";
import { Pagination } from "../Pagination";
import {
  CardBody,
  CardData,
  Description,
  IssuesBody,
  Labels,
  Title,
} from "./styles";

interface CardIssuesProps {
  issues: IssuesProps[];
}

export function Issues({ issues }: CardIssuesProps) {
  const [currentItems, setCurrentItems] = useState(issues);

  return (
    <IssuesBody>
      {currentItems.map((issue) => (
        <Link href={issue.html_url} target="_blank" key={issue.id}>
          <Card>
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
                  <small>
                    {moment(issue.created_at).locale("pt-BR").fromNow()}
                  </small>
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
        </Link>
      ))}
      <Pagination data={issues} items={4} setCurrentItems={setCurrentItems} />
    </IssuesBody>
  );
}
