import React from "react";
import { useQuery } from "@tanstack/react-query";
export default function Joke() {
  const [data, setData] = React.useState();
  const { isLoading, error } = useQuery({
    queryKey: ["jokeData"],
    queryFn: () =>
      fetch(
        "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=religious"
      ).then((res) => res.json()),
  });
  const handleSucces = (data: React.SetStateAction<undefined>) => {
    setData(data);
  };
  if (isLoading) return "Loading";
  if (error) return "Error";

  return (
    <>
      <button type="button" onClick={() => handleSucces(data)}>
        change
      </button>
    </>
  );
}
