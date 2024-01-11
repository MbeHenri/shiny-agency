import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext, useCallback } from "react";
import { Loader } from "../../utils/Atoms";
import { ThemeContext } from "../../utils/Context/Theme";
import { SurveyContext } from "../../utils/Context/Survey";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt <= 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyDatas, setSurveyDatas] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);

  const { colors } = useContext(ThemeContext);
  const { saveAnswers, answers } = useContext(SurveyContext);

  useEffect(() => {
    setDataLoading(true);

    fetch(`http://localhost:8000/survey`)
      .then((res) => res.json())
      .then(({ surveyData }) => {
        setSurveyDatas(surveyData);
        //setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

  const saveQuestion = useCallback(
    (answer) => {
      saveAnswers({ [questionNumber]: answer });
      setResponse(answer);
    },
    [questionNumber, saveAnswers]
  );

  return (
    <>
      {error ? (
        <QuestionBlock>
          <h1>Oups il y a eu un problème</h1>
        </QuestionBlock>
      ) : (
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

          {answers && (
            <ResponseBlock>
              <ResponseButton
                colors={colors}
                isSelected={response !== null ? response : false}
                onClick={() => saveQuestion(true)}
              >
                Oui
              </ResponseButton>
              <ResponseButton
                colors={colors}
                isSelected={response !== null ? !response : false}
                onClick={() => saveQuestion(false)}
              >
                Non
              </ResponseButton>
            </ResponseBlock>
          )}
          <div>
            <QuestionLink
              onClick={() => {
                setResponse(null);
              }}
              colors={colors}
              to={`/survey/${prevQuestionNumber}`}
            >
              Précedent
            </QuestionLink>
            {surveyDatas[nextQuestionNumber] ? (
              <QuestionLink
                onClick={() => {
                  setResponse(null);
                }}
                colors={colors}
                to={`/survey/${nextQuestionNumber}`}
              >
                Suivant
              </QuestionLink>
            ) : (
              <QuestionLink colors={colors} to="/results">
                Résultats
              </QuestionLink>
            )}
          </div>
        </QuestionBlock>
      )}
    </>
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

const ResponseButton = styled.button`
  border: none;
  height: 7rem;
  width: 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ colors }) => colors.background};
  border-radius: 30px;
  cursor: pointer;
  margin: 0px 1rem;
  box-shadow: ${(props) =>
    props.isSelected
      ? `0px 0px 0px 2px ${props.colors.primary} inset`
      : "none"};
`;

const ResponseBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;

export default Survey;
