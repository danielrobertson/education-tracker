import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Input, Header, Text, ListItem } from "react-native-elements";
import firebase from "firebase";
import "firebase/firestore";
const config = require("./firebase-config.json");

firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iconsMap = {
      udemy: { name: "video-library", color: "#FF0000" },
      podcast: { name: "play-circle-outline", color: "#b150e2" },
      book: { name: "book", color: "#333333" },
      youtube_playlist: { name: "video-library", color: "#FF0000" }
    };
    return (
      <View style={{ padding: 10 }}>
        <Text h2>Overview</Text>

        {this.props.tasks.map((item, i) => {
          return (
            <ListItem
              key={i}
              title={item.title}
              subtitle={item.state}
              leftIcon={iconsMap[item.type]}
            />
          );
        })}
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    db.collection("tasks").onSnapshot(snapshot => {
      this.setState({ tasks: snapshot.docs.map(d => d.data()) });
    });
  }

  render() {
    return (
      <SafeAreaView>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Education Tracker",
            style: { color: "#fff" }
          }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <TaskList tasks={this.state.tasks} />
      </SafeAreaView>
    );
  }
}
