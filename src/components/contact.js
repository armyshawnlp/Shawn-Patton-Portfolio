import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shawn Patton</h2>
            <img className="roundtop"
              src="https://i.imgur.com/Be27BVM.png"
              alt="avatar"
              style={{ height: "250px", overflow: 'hidden', borderRadius: 100/ 2 }}
              
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I have recently graduated from the University of Houston with a
              degree in Computer Information Systems. I served 8 years in the
              Active Army. Trained to repair electronics that required a
              security clearance and became the Network/System Admin of a
              company. I enojy espending time with my boys, Houston sports, and
              working on home projects.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (832) 217-4791
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    shawn_patton@outlook.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
