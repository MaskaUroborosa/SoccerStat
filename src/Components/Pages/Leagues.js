import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import DataList from "../DataList";
import NameFilter from "../Filter/NameFilter";

function FilterableListOfLeagues() {
  const history = useHistory();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const filterParams = params.has("filter") ? params.get("filter") : "";

  const [listOfLeaguesState, setListOfLeaguesState] = useState({
    leagues: [],
    error: "",
  });
  const [filterText, setFilterText] = useState(filterParams);

  const setSearchFilter = (value) => {
    const searchParams = new URLSearchParams({ filter: value });
    history.push({
      pathname: "/leagues",
      search: "?" + searchParams,
    });
    setFilterText(value);
  };

  useEffect(() => {
    axios({
      method: "GET",
      headers: { "X-Auth-Token": `${process.env.REACT_APP_SECRET_KEY}` },
      url: "http://api.football-data.org/v2/competitions",
    })
      .then(function (response) {
        const result = response.data.competitions.map((object) => {
          const resultData = {
            id: object.id,
            country: object.area.name,
            name: object.name,
          };
          return resultData;
        });
        setListOfLeaguesState({ leagues: result });
      })
      .catch(function (error) {
        setListOfLeaguesState({ error: error });
      });
  }, [setListOfLeaguesState]);

  return (
    <div className="container">
      <h1 className="py-1 mb-4 text-center text-light bg-dark">Лиги</h1>
      <NameFilter
        filterText={filterText}
        onFilterTextChange={setSearchFilter}
      />
      <DataList
        target="leagues"
        error={listOfLeaguesState.error}
        leagues={listOfLeaguesState.leagues}
        filterText={filterText}
      />
    </div>
  );
}

export default FilterableListOfLeagues;
