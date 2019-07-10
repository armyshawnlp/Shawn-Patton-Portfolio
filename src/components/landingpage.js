import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/S1SuZnB.png"
              alt="mypic"
              className="mypic-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              

              <p>HTML/CSS | Bootstrap | Javascript | React | Ruby</p>
              <hr />
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/shawnpattonaaa/" target="https://www.linkedin.com/in/shawnpattonaaa/">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub */}

                <a href="https://github.com/armyshawnlp" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* email  */}

                <a
                  href="mailto:shawn_patton@outlook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope-open" aria-hidden="true" />
                </a>
               
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
