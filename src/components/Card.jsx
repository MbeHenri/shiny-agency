import PropTypes from "prop-types";
import DefaultPicture from "../assets/target.png";
import styled from "styled-components";
import colors from "../utils/style/colors";

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardBody>
        <CardImage src={picture} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </CardWrapper>
  );
}

// typage
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};

// design

const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
`;

const CardTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const CardImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 49%;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  height: 13rem;
`;

const CardWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: ${colors.backgroundLight};
  border-radius: 2rem;

  width: 18rem;

  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
export default Card;
