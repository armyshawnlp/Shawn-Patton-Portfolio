import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#0F05E3",
                height: "176px",
                background:
                  "url(https://i.imgur.com/XqLvALV.png) center / cover"
              }}
            >
              Robofriends
            </CardTitle>
            <CardText>
              <ul>
                <li>React</li>
                <li>Tachyons</li>
              </ul>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/armyshawnlp/React-Friends-Search"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://reactrobotfriends.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 - Da Krewe */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#0F05E3",
                height: "176px",
                background:
                  "url(https://i.imgur.com/8e09Tnr.png) center / cover"
              }}
            >
              Event Page
            </CardTitle>
            <CardText>
            <ul>
            <li>Current Project</li>
              <li>Created for client</li>
              <li>ReactJS</li>
              <li> React-Bootstrap</li>
              <li> Auth/DB in progress</li>
              </ul>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
              <Button
              href="http://dakreweduroux.s3-website.us-east-2.amazonaws.com"
              rel="noopener noreferrer"
                target="_blank"
                colorered
              
              >Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Ruby Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#0F05E3",
                height: "176px",
                background:
                  "url(https://robert-william-tea.firebaseapp.com/assets/coffee.JPG) center / cover"
              }}
            >
              Coffee Ordering System
            </CardTitle>
            <CardText>
              <ul>
                <li>Ruby</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>PostgreSQL</li>
              </ul>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/armyshawnlp/React-Friends-Sehttps://github.com/armyshawnlp/Coffee-Project"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://young-shore-37443.herokuapp.com/admin"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Ruby Project 2/ Phone repair */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#0F05E3",
                height: "176px",
                background:
                  "url(https://i.imgur.com/X9zy2ml.png) center / cover"
              }}
            >
              Ticketing System
            </CardTitle>
            <CardText>
            <li>Ruby</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>PostgreSQL</li>
            Final class project created to demonstrate the ability to create, update, and delete orders for a mobile repair shop. There are multiple drop downs that allows the users to create an order and it will automatically update the subtotal, tax, and total amount. Also, users can create a new account and login/logout. For the manager view, there are 3 additional links that can be accessed separate from the employee view. The tickets can add additional harware to repair. All information is available in graphs.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Java Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#0F05E3",
                height: "176px",
                background:
                  "url(https://robert-william-tea.firebaseapp.com/assets/nails.JPG) center / cover"
              }}
            >
              Customer Management System
            </CardTitle>
            <CardText>
              <ul>
                <li>Ruby</li>
                <li>Javascript</li>
                <li>DB</li>
              </ul>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/armyshawnlp/React-Friends-Sehttps://github.com/armyshawnlp/Coffee-Project"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://young-shore-37443.herokuapp.com/admin"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
         
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h4> </h4>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Ruby</Tab>
          <Tab>Java</Tab>
      
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
