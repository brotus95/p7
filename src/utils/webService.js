import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function GetAllLogement(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { isLoading, data, error };
}

export function GetLogementById(url, id) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const filtredDataById = data.find((housing) => housing.id === id);
        if (filtredDataById === undefined) throw new Error("error 404");
        setData(filtredDataById);
      } catch (err) {
        navigate("/error/");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, id]);
  return { isLoading, data };
}
