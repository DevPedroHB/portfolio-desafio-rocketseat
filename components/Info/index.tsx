import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { ProfileProps } from "../../@types/data/profile";
import Card from "../Card";
import { CardBody, InfoData } from "./styles";

interface InfoProps {
  profile: ProfileProps;
}

export function Info({ profile }: InfoProps) {
  return (
    <Card>
      <CardBody>
        <InfoData href="/">
          <FaMapMarkerAlt />
          <span>{profile.location ? profile.location : "Não informado."}</span>
        </InfoData>
        <InfoData href="/">
          <FaBriefcase />
          <span>{profile.company ? profile.company : "Não informado."}</span>
        </InfoData>
        <InfoData href="/">
          <FaGithub />
          <span>{profile.login ? profile.login : "Não informado."}</span>
        </InfoData>
        <InfoData href="/">
          <FaLinkedinIn />
          <span>devpedrohb</span>
        </InfoData>
        <InfoData href="/">
          <FaTwitter />
          <span>
            {profile.twitter_username
              ? profile.twitter_username
              : "Não informado."}
          </span>
        </InfoData>
        <InfoData href="/">
          <FaGlobe />
          <span>{profile.blog ? profile.blog : "Não informado."}</span>
        </InfoData>
        <InfoData href="/">
          <FaEnvelope />
          <span>{profile.email ? profile.email : "Não informado."}</span>
        </InfoData>
      </CardBody>
    </Card>
  );
}
