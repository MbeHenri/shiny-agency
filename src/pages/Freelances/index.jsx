import DefaultPicture from "../../assets/target.png";
import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
];

function Freelances() {
  return (
    <div>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => {
          return (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.name}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 60rem;
  margin: 4rem auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
  color: ${colors.secondary};
`;

export default Freelances;
