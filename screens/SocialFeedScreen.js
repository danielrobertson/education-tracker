import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Header } from "react-native-elements";

export default class SocialFeedScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Social",
            style: { color: "#fff", fontSize: 23 }
          }}
        />
      </SafeAreaView>
    );
  }
}
