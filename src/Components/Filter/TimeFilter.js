import React from "react";

export default function TimeFilter(props) {
  const startDateChangeHandler = (e) => {
    props.onFilterStartDateChange(e.target.value);
  };

  const endDateChangeHandler = (e) => {
    props.onFilterEndDateChange(e.target.value);
  };

  return (
    <form className="col-md-4 mb-4">
      <label className="form-label fs-3">Фильтр по дате</label>
      <div className="input-group">
        <span className="input-group-text">С</span>
        <input
          type="text"
          name="startDate"
          value={props.filterStartDate}
          className="form-control"
          onInput={startDateChangeHandler}
        />
        <span className="input-group-text">По</span>
        <input
          type="text"
          name="endDate"
          value={props.filterEndDate}
          className="form-control"
          onInput={endDateChangeHandler}
        />
      </div>
    </form>
  );
}
