import Card from "../../components/Card";
import styled from "styled-components";
import { Loader } from "../../utils/Atoms";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context/Theme";
import { useFetch } from "../../utils/hooks";

function Freelances() {
  const { isLoading, datas, error } = useFetch(
    `http://localhost:8000/freelances`
  );
  const FreelanceProfiles = datas?.freelancersList;
  const isDataLoading = isLoading;

  const { colors } = useContext(ThemeContext);

  return (
    <>
      {error ? (
        <Title>Oups il y a eu un problème</Title>
      ) : (
        <>
          <Title>Trouvez votre prestataire</Title>
          <SubTitle colors={colors}>
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
        </>
      )}
    </>
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
  color: ${({ colors }) => colors.secondary};
`;

export default Freelances;
