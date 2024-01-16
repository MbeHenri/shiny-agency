export function formatJobList(title, listLenght, index) {
  if (index === listLenght - 1) {
    return title;
  }
  return `${title}`;
}

function Results() {
  return (
    <div>
      <h1>Resultats</h1>
    </div>
  );
}

export default Results;
