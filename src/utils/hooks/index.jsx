import { useEffect, useState } from "react";

export function useFetch(url, options = []) {
  const [datas, setDatas] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return { isLoading, datas, error };
}
