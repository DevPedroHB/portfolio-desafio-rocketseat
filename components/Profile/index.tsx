import Image from "next/image";
import { ProfileProps } from "../../@types/data/profile";
import Card from "../Card";
import { CardBody, ProfileBio, ProfileImg, ProfileName } from "./styles";

interface CardProfileProps {
  profile: ProfileProps;
}

export function Profile({ profile }: CardProfileProps) {
  return (
    <Card>
      <CardBody>
        <ProfileImg>
          <Image
            src={profile.avatar_url}
            alt={`Avatar de ${profile.login}`}
            width={128}
            height={128}
          />
        </ProfileImg>
        <ProfileName>{profile.name}</ProfileName>
        <ProfileBio>{profile.bio}</ProfileBio>
      </CardBody>
    </Card>
  );
}
