import { useState, useEffect } from "react";

const useFetchData = (list:any, api:string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ names: list }),
        });
        const result = await response.json();
        if (result.data) {
          setData(result.data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [list]);

  return { data, isLoading, isError };
};

export default useFetchData;
