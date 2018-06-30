import React, { Component } from "react";
import { Ionicons } from "react-native-vector-icons";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Navigator,
  List,
  Icon,
  StatusBar
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {
  TouchableOpacity,
  Input,
  Header,
  Text,
  ListItem,
  Button
} from "react-native-elements";
import firebase from "firebase";
import "firebase/firestore";
const config = require("./firebase-config.json");

firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// Renders a list of education tasks
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

class LearningDashboard extends React.Component {
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
      <SafeAreaView>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Overview",
            style: styles.centerHeader
          }}
        />
        <TaskList tasks={this.state.tasks} />
      </SafeAreaView>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Projects",
            style: styles.centerHeader
          }}
        />
      </SafeAreaView>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Search",
            style: styles.centerHeader
          }}
        />
      </SafeAreaView>
    );
  }
}

class SocialFeed extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Social",
            style: styles.centerHeader
          }}
        />
      </SafeAreaView>
    );
  }
}

class Account extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          centerComponent={{
            text: "Account",
            style: styles.centerHeader
          }}
        />
      </SafeAreaView>
    );
  }
}

const Tabs = createBottomTabNavigator(
  {
    Learning: LearningDashboard,
    Projects: Projects,
    Social: SocialFeed,
    Search: Search,
    Account: Account
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const footerIconsMap = {
          Learning: "md-list",
          Projects: "md-bulb",
          Social: "logo-rss",
          Search: "md-search",
          Account: "md-person"
        };

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={footerIconsMap[routeName]}
            size={25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Tabs />;
  }
}

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
