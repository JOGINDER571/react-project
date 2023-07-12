import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
export const SuperHero = () => {
  const fetch = () => {
    return axios.get("http://localhost:4000/super");
  };
  const { isError, data, isLoading, error } = useQuery("super-heroes", fetch, {
    staleTime: 0,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      SuperHero
      {data?.data?.map((item, id) => {
        return <h3 key={id}>{item?.name}</h3>;
      })}
    </div>
  );
};
