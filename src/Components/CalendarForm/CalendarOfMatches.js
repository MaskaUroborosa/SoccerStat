import React from "react";
import moment from "moment";
import RowOfMatch from "./RowOfMatch";
import TarifError from "../Error/TarifError";

export default function CalendarOfMatches(props) {
  const error = props.error;
  const filterStartDate = props.filterStartDate;
  const filterEndDate = props.filterEndDate;
  const rows = [];

  if (error) {
    return <TarifError />;
  }

  props.matches.forEach((match) => {
    if (filterStartDate) {
      if (
        moment(filterStartDate, "DD.MM.YYYY") > moment(match.date, "DD.MM.YYYY")
      ) {
        return;
      }
    }

    if (filterEndDate) {
      if (
        moment(match.date, "DD.MM.YYYY") > moment(filterEndDate, "DD.MM.YYYY")
      ) {
        return;
      }
    }

    rows.push(<RowOfMatch match={match} key={match.id} />);
  });

  return (
    <div>
      <ul className="list-group">{rows}</ul>
    </div>
  );
}
