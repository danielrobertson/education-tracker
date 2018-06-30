import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Navigator, List } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { ListItem, Button } from "react-native-elements";
const styles = StyleSheet.create({
  newItemBtn: {
    backgroundColor: "#3D6DCC",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 100,
    margin: 13
  },
  centerHeader: { color: "#fff", fontSize: 23 }
});

// Renders a list of education tasks
export default class LearningItems extends React.Component {
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
      <View>
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

        <Button title="New" buttonStyle={styles.newItemBtn} />
      </View>
    );
  }
}
