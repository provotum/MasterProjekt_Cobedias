import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import FamilyTree from "./FamilyTreeComponent";
import "../App.css";
import Stammbaum from "./Stammbaum";

export class Tutorial_2 extends Component {
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  state = {
    color: "rgba(0, 0, 0, 0.8)",
    showComponent: false,
    panels: []
  };

  _onButtonClick() {
    const nextId = this.state.panels.length + 1;
    this.setState({
      showComponent: true,
      panels: this.state.panels.concat([nextId])
    });
  }

  render() {
    if (this.state.showComponent) {
      return <Stammbaum />;
    } else {
      return (
        <div className="App" style={{ backgroundColor: this.state.color }}>
          <Box flexDirection="row">
            <Box display="flex" justifyContent="flex-start" m={1} p={1}>
              <img
                src={require("../components/images/logo_cobedias.png")}
                style={{ width: "10%" }}
                m={1}
                p={1}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              m={1}
              p={1}
              alignItems="flex-end"
              flexDirection="column"
            >
              <img
                src={require("../components/images/Schliessen.png")}
                style={{ width: "5%" }}
                m={1}
                p={1}
                onClick={this._onButtonClick}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              m={2}
              p={0}
              alignItems="flex-end"
            >
              <h3 className="h3">Schliessen</h3>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            m={1}
            p={1}
            alignItems="center"
            flexDirection="column"
          >
            <FamilyTree />
            <br />
            <h3 className="h3">
              In diesem Familienstammbaum können sämtliche Familienmitglieder
              erfasst werden. Weibliche Familienmitglieder werden rosa
              angezeigt, männliche hellblau. Die Verwandschaftsverhältnisse sind
              über Linien dargestellt.
            </h3>
          </Box>
        </div>
      );
    }
  }
}

export default Tutorial_2;
