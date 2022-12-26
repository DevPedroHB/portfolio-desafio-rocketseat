import styled from "styled-components";

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileBio = styled.p`
  font-size: var(--small-font-size);
  font-weight: var(--font-regular);
`;

export const ProfileImg = styled.div`
  margin-bottom: 1rem;

  img {
    border: 2px solid #00ff00;
    border-radius: 50%;
  }
`;

export const ProfileName = styled.h2`
  font-size: var(--h2-font-size);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
`;
