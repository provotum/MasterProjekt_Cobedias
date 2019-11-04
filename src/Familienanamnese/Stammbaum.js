import React, { Component } from "react";
import "../App.css";
import Box from "@material-ui/core/Box";
import FamilyTree from "./FamilyTreeComponent";
import styles from "./FamilyTree.module.css";
import Toggle, { Tutorial_1 } from "./Tutorial_1";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { StylesContext } from "@material-ui/styles/StylesProvider";

//https://stackoverflow.com/questions/42130822/display-a-overlay-when-input-is-clicked-in-react

export class Stammbaum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      showComponent: false,
      panels: [],
      style: {
        width: "0%"
      }
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  _onButtonClick() {
    const nextId = this.state.panels.length + 1;
    this.setState({
      showComponent: true,
      panels: this.state.panels.concat([nextId])
    });
  }

  componentDidMount() {
    document.addEventListener("click", this.closeNav);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeNav);
  }

  openNav() {
    const style = { width: "100%" };
    this.setState({ style });
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
    document.addEventListener("click", this.closeNav);
  }

  closeNav() {
    document.removeEventListener("click", this.closeNav);
    const style = { width: 0 };
    this.setState({ style });
    document.body.style.backgroundColor = "#F3F3F3";
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <div className="App" style={{ backgroundColor: this.state.color }}>
              <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                  <img
                    src={require("../components/images/logo_cobedias.png")}
                    style={{ width: "40%" }}
                    m={1}
                    p={1}
                  />
                  <div className="Stammbaum">
                    <FamilyTree />
                    <p style={{ color: "white" }}>
                      <br />
                      In diesem Familienstammbaum können sämtliche
                      Familienmitglieder erfasst werden. Weibliche
                      Familienmitglieder werden rosa angezeigt, männliche
                      hellblau.
                      <br /> Die Verwandschaftsverhältnisse sind über Linien
                      dargestellt. Ziel ist es soviele Personen, wie möglich zu
                      erwähnen, um ein möglichst komplettes Bild zu bekommen.
                      <br />
                      Darüber hinaus können bestehende Personen bearbeitet oder
                      gelöscht werden.
                    </p>
                  </div>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                alignItems="flex-start"
                m={1}
                p={1}
              >
                <span //Im span wird das Overlay eingeführt mit schliessenden und öffnenden navs
                  style={{ fontSize: 30, cursor: "pointer" }}
                  onClick={this.openNav}
                >
                  <img
                    src={require("../components/images/help.PNG")}
                    width="70px"
                    height="70px"
                    m={2}
                    p={2}
                    onClick={this._onButtonClick}
                  />
                </span>
                <div ref="snav" className="overlay" style={this.state.style}>
                  <div className="sidenav-container">
                    <div className="text-center"></div>
                    <a
                      href="javascript:void(0)"
                      className="closebtn"
                      onClick={this.closeNav}
                    >
                      ×
                    </a>
                    <div className="list-group">
                      {/*Hier kann eine komponente eingefügt werden*/}
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </Box>
              <Box display="flex" justifyContent="center">
                <RaisedButton
                  p={2}
                  m={2}
                  label="Weiter"
                  primary={true}
                  style={StylesContext.button}
                  onClick={this.continue}
                />

                <RaisedButton
                  p={2}
                  m={2}
                  label="Zurück"
                  primary={true}
                  style={StylesContext.button}
                  onClick={this.back}
                />
              </Box>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Stammbaum;
