import PropTypes from "prop-types";
import DefaultPicture from "../assets/target.png";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../utils/Context/Theme";

function Card({ label, title, picture }) {
  const { colors } = useContext(ThemeContext);
  return (
    <CardWrapper colors={colors}>
      <CardLabel colors={colors}>{label}</CardLabel>
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
  color: ${({ colors }) => colors.label_card};
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
`;

const CardTitle = styled.span`
  font-size: 25px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
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
  padding: 2.5rem;
  margin: 1rem;
  background-color: ${({ colors }) => colors.background};
  border-radius: 2rem;

  width: 18rem;

  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px ${({ colors }) => colors.shadow_card};
  }
`;
export default Card;
