import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <h2>Доступные лиги</h2>
        <ul className="col-md-40 mb-4 list-group list-group-flush fs-5 text-center">
          <li className="list-group-item">
            <a href="/leagues/2001" className="link-dark">
              UEFA Champions League
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2017" className="link-dark">
              Primeira Liga
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2021" className="link-dark">
              Premier League
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2003" className="link-dark">
              Eredivisie
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2002" className="link-dark">
              Bundesliga
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2015" className="link-dark">
              Ligue 1
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2019" className="link-dark">
              Serie A
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2014" className="link-dark">
              Primera Division
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2016" className="link-dark">
              Championship
            </a>
          </li>
          <li className="list-group-item">
            <a href="/leagues/2018" className="link-dark">
              European Championship
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
