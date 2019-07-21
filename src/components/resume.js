import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.imgur.com/Be27BVM.png"
                alt="avatar"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Shawn Patton</h2>
            <h4 style={{ color: "grey" }}>Full-Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #0F05E3", width: "50%" }} />
            <p></p>
            <hr style={{ borderTop: "3px solid #0F05E3", width: "50%" }} />
            <h5>Address</h5>
            <p>Houston, TX</p>
            <h5>Email</h5>
            <p>shawn_patton@outlook.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="University of Houston"
              schoolDescription="Bachelor of Science in Computer Information Systems"
            />

            <hr style={{ borderTop: "3px solid #0F05E3" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2005}
              endYear={2010}
              jobName="United States Army"
              jobDescription=<ul>
                <li>
                  Troubleshot, repaired, diagnosed, and resolved hardware and
                  software failures for 45+ notebooks as well as printer,
                  digital sender, Cisco phones, and satellite issues.
                </li>
                <li>
                  Independently manage and execute the setup and deployment on
                  three different occasions including running cables, setting up
                  user accounts, training new users, and collaborating with
                  distribution for port authorization and IP usage.{" "}
                </li>
                <li>
                  {" "}
                  Implemented and maintained a strict security infrastructure.
                </li>
                <li>
                  Controlled and documented communication usage and
                  accountability.• Co-managed electronic repair shop that
                  adjusted, repaired, installed and replaced defective
                  components of telecommunication equipment, night vision
                  devices/equipment, and Global Positioning System (GPS)
                  receivers.
                </li>
                <li>
                  {" "}
                  Purchased and installed satellite with an iDirect network
                  system, providing 24/7 tech support for up to 35 users.
                </li>
                <li>
                  {" "}
                  Troubleshot existing networking problems and created new
                  networking systems, ensuring accurate and rapid diagnosis of
                  system malfunctions within strict suspense.
                </li>
              </ul>
            />
            <Experience
              startYear={2012}
              endYear={2019}
              jobName="Network Operations Team Lead"
              jobDescription=<ul>
                <li>
                  Serve as team lead in a 24/7/365 Network Operations/Incident
                  Management environment, which provides incident management
                  technical support to Shell Oil Company’s domestic and global
                  retail service centers for credit/debit transaction
                  processing.{" "}
                </li>
                <li>
                  {" "}
                  Provide technical assistance, support, training, guidance,
                  coaching, monitoring, and prioritizing of daily operations to
                  a three-person team; serve as subject matter expert and
                  escalation point.{" "}
                </li>
                <li>
                  {" "}
                  Ensure service requests and work orders are clearly documented
                  and contain detailed information regarding remote problems and
                  issues, tracking, and resolution from multiple vendors
                  domestic and globally.{" "}
                </li>
                <li>
                  {" "}
                  Manage incident recovery and collaborate with internal support
                  groups and external service providers to identify, resolve,
                  and coordinate the resolution of network problems domestically
                  and globally to all business stake holders.{" "}
                </li>
                <li>
                  {" "}
                  Follow through with open/pending incidents to ensure timely
                  resolution and vendor SLA is met.
                </li>
              </ul>
            />
            <hr style={{ borderTop: "3px solid #0F05E3" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
