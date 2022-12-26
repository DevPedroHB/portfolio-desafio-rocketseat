import Link from "next/link";
import Card from "../Card";
import { CardBody } from "./styles";

interface SectionTitleProps {
  title: string;
  directory: string;
}

export function SectionTitle({ title, directory }: SectionTitleProps) {
  return (
    <Card>
      <CardBody>
        <h1>{title}</h1>
        <Link href={directory} target="_blank">
          Veja todos
        </Link>
      </CardBody>
    </Card>
  );
}
