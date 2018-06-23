import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Input, Header, Text, ListItem } from "react-native-elements";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text h2>Overview</Text>

        {this.props.tasks.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            subtitle={item.state}
            leftIcon={{ name: item.icon.name, color: item.icon.color }}
          />
        ))}
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "UX & Web Design Master Course",
          state: "Section 5 Video 36",
          date: "June 23, 2018",
          type: "udemy",
          icon: { name: "video-library", color: "#FF0000" }
        },
        {
          title: "Talk To Me In Korean",
          state: "Episode 20",
          date: "June 23, 2018",
          type: "podcast",
          icon: { name: "play-circle-outline", color: "#b150e2" }
        },
        {
          title: "Fullstack React",
          state: "Chapter 2 To-do app",
          date: "June 3, 2018",
          type: "book",
          icon: { name: "book", color: "#333333" }
        },
        {
          title: "Firebase at Google I/O 2018",
          state: "Video 1 What's new in Firebase",
          date: "June 23, 2018",
          type: "youtube_playlist",
          icon: { name: "video-library", color: "#FF0000" }
        },
        {
          title: "Secrets of the JavaScript Ninja",
          state: "Chapter 5 Closures",
          date: "June 23, 2018",
          type: "book",
          icon: { name: "book", color: "#333333" }
        }
      ]
    };
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
