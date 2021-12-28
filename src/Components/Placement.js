import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Leagues from "./Pages/Leagues";
import Teams from "./Pages/Teams";
import LeagueCalendar from "./Pages/LeagueCalendar";
import TeamCalendar from "./Pages/TeamCalendar";
import logo from "./assets/logo02.png";

function Placement() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center bg-dark py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img
              src={logo}
              height="50px"
              width="50px"
              className="d-inline-block"
              alt="Logo"
            />
            <span className="fs-4">SoccerStat</span>
          </Link>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/leagues" className="nav-link active">
                Лиги
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link to="/teams" className="nav-link active">
                Команды
              </Link>
            </li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leagues" component={Leagues} />
            <Route path="/leagues/:leagueID" component={LeagueCalendar} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:teamID" component={TeamCalendar} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default Placement;
