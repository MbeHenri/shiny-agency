import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/Atoms";
import styled from "styled-components";
import colors from "../../utils/style/colors";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt <= 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyDatas, setSurveyDatas] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

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
      <QuestionTitle>Question {questionNumberInt}</QuestionTitle>

      <QuestionContent>
        {isDataLoading ? (
          <Loader />
        ) : (
          <span>{surveyDatas[questionNumber]}</span>
        )}
      </QuestionContent>

      <div>
        <QuestionLink to={`/survey/${prevQuestionNumber}`}>
          Précedent
        </QuestionLink>
        {surveyDatas[nextQuestionNumber] ? (
          <QuestionLink to={`/survey/${nextQuestionNumber}`}>
            Suivant
          </QuestionLink>
        ) : (
          <QuestionLink to="/results">Résultats</QuestionLink>
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
  margin : 4rem;
`;

const QuestionContent = styled.div`
  margin-bottom: 3rem;
`;

const QuestionTitle = styled.h1`
  text-decoration: underline ${colors.primary};
`;

const QuestionLink = styled(Link)`
  color: black;
  margin : 0px 0.5rem; 
  text-decoration: underline;
`;

export default Survey;
