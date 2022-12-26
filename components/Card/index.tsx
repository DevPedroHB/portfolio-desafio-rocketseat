import { CardBody } from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  flex?: boolean;
}

export default function Card({ children, flex, ...props }: CardProps) {
  return (
    <CardBody flex={flex} {...props}>
      {children}
    </CardBody>
  );
}
