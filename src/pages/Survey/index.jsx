import { useParams, Link } from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams();

  const questionNumberInt = parseInt(questionNumber);

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      {questionNumberInt > 1 ? (
        <Link to={`/survey/${questionNumberInt - 1}`}>Précedent</Link>
      ) : null}
      {questionNumberInt < 10 ? (
        <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
      <h2> numéro de question {questionNumber}</h2>
    </div>
  );
}

export default Survey;
