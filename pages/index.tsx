import { IssuesProps } from "../@types/data/issues";
import { ProfileProps } from "../@types/data/profile";
import { ReposProps } from "../@types/data/repos";
import { Education } from "../components/Education";
import { Experiences } from "../components/Experiences";
import { Info } from "../components/Info";
import { Issues } from "../components/Issues";
import { Profile } from "../components/Profile";
import Projects from "../components/Projects";
import { SectionTitle } from "../components/SectionTitle";
import Technologies from "../components/Technologies";
import { api } from "../services/axios";
import { Column, Main, Section } from "./styles";

interface IndexProps {
  profile: ProfileProps;
  repos: ReposProps[];
  issues: IssuesProps[];
}

export default function Index(props: IndexProps) {
  return (
    <Main>
      <Column>
        <Profile profile={props.profile} />
        <Info profile={props.profile} />
        <Technologies />
        <Experiences />
        <Education />
      </Column>
      <Column>
        <Section id="projects">
          <SectionTitle title="MyProjects" directory={props.profile.html_url} />
          <Projects repos={props.repos} />
        </Section>
        <Section id="posts">
          <SectionTitle
            title="Recent Posts"
            directory={props.profile.html_url}
          />
          <Issues issues={props.issues} />
        </Section>
      </Column>
    </Main>
  );
}

export const getServerSideProps = async () => {
  const [profile, repos, issues] = await Promise.all([
    api.get("users/DevPedroHB"),
    api.get("users/DevPedroHB/repos"),
    api.get(
      "search/issues?q=state:open&page=1&per_page=5&sort=created&order=desc"
    ),
    // api.get(
    //   "search/issues?q=state:open+author:DevPedroHB&page=1&per_page=5&sort=created&order=desc"
    // ),
  ]);

  return {
    props: {
      profile: profile.data,
      repos: repos.data,
      issues: issues.data.items,
    },
  };
};
