import React from "react";
import { StyleSheet, SafeAreaView, View, Navigator, List } from "react-native";
import { Header } from "react-native-elements";
import LearningItems from "./LearningItems";
const config = require("../firebase-config.json");
import firebase from "firebase";
import "firebase/firestore";
import ActionButton from "react-native-action-button";
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  centerHeader: { color: "#fff", fontSize: 23 }
});

export default class LearningScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    // initialize data and update on change
    db.collection("tasks").onSnapshot(snapshot => {
      this.setState({ tasks: snapshot.docs.map(d => d.data()) });
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Overview",
            style: styles.centerHeader
          }}
        />
        <LearningItems tasks={this.state.tasks} />
        <ActionButton
          buttonColor="#3D6DCC"
          onPress={() => {
            console.log("button press");
          }}
        />
      </SafeAreaView>
    );
  }
}
