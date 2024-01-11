import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/Atoms";

function Freelances() {
  const [FreelanceProfiles, setFreelanceProfiles] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);

    fetch(`http://localhost:8000/freelances`)
      .then((res) => res.json())
      .then(({ freelancersList }) => {
        setFreelanceProfiles(freelancersList);
        setDataLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      <CardsContainer>
        {isDataLoading ? (
          <Loader />
        ) : (
          FreelanceProfiles.map((profile, index) => {
            return (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
              />
            );
          })
        )}
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
