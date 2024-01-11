import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Loader } from "../../utils/Atoms";
import styled from "styled-components";
import { ThemeContext } from "../../utils/Context";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt <= 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyDatas, setSurveyDatas] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    setDataLoading(true);

    fetch(`http://localhost:8000/survey`)
      .then((res) => res.json())
      .then(({ surveyData }) => {
        setSurveyDatas(surveyData);
        setDataLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <QuestionBlock>
      <QuestionTitle colors={colors}>
        Question {questionNumberInt}
      </QuestionTitle>

      <QuestionContent>
        {isDataLoading ? (
          <Loader />
        ) : (
          <span>{surveyDatas[questionNumber]}</span>
        )}
      </QuestionContent>

      <div>
        <QuestionLink colors={colors} to={`/survey/${prevQuestionNumber}`}>
          Précedent
        </QuestionLink>
        {surveyDatas[nextQuestionNumber] ? (
          <QuestionLink colors={colors} to={`/survey/${nextQuestionNumber}`}>
            Suivant
          </QuestionLink>
        ) : (
          <QuestionLink colors={colors} to="/results">
            Résultats
          </QuestionLink>
        )}
      </div>
    </QuestionBlock>
  );
}

const QuestionBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
`;

const QuestionContent = styled.div`
  margin-bottom: 3rem;
`;

const QuestionTitle = styled.h1`
  text-decoration: underline ${({ colors }) => colors.primary};
`;

const QuestionLink = styled(Link)`
  color: ${({ colors }) => colors.on_background_body};
  margin: 0px 0.5rem;
  text-decoration: underline;
`;

export default Survey;
