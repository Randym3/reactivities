import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    this.getValues();
  }

  getValues = async () => {
    const res = await axios.get("http://localhost:5000/api/values");
    const data = res.data;
    console.log(res);
    this.setState({ values: data });
  };
  render() {
    return (
      <div>
        {" "}
        <Header as="h2">
          <Icon name="pencil" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((cur: any) => (
            <List.Item key={cur.id}>{cur.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
