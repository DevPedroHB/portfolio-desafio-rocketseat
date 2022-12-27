import Link from "next/link";
import { useState } from "react";
import { FaCodeBranch, FaRegFolder, FaStar } from "react-icons/fa";
import { ReposProps } from "../../@types/data/repos";
import Card from "../Card";
import { Pagination } from "../Pagination";
import {
  CardBody,
  CardFooter,
  CardTitle,
  Language,
  ProjectsBody,
  Reactions,
} from "./styles";

interface ProjectsProps {
  repos: ReposProps[];
}

export default function Projects({ repos }: ProjectsProps) {
  const [currentItems, setCurrentItems] = useState(repos);

  return (
    <>
      <ProjectsBody>
        {currentItems.map((repo) => (
          <Link href={repo.html_url} target="_blank" key={repo.id}>
            <Card flex>
              <CardTitle>
                <FaRegFolder />
                <h3>{repo.name}</h3>
              </CardTitle>
              <CardBody>
                {repo.description ? repo.description : "Sem descrição."}
              </CardBody>
              <CardFooter>
                <Reactions>
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                </Reactions>
                <Language>
                  <div />
                  <span>{repo.language ? repo.language : "Não definido."}</span>
                </Language>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ProjectsBody>
      <Pagination data={repos} items={4} setCurrentItems={setCurrentItems} />
    </>
  );
}
