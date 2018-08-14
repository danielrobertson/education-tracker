import React, { Component } from "react";
import { Ionicons } from "react-native-vector-icons";
import { createBottomTabNavigator } from "react-navigation";
import ProjectsTab from "./screens/ProjectsTab";
import SearchTab from "./screens/SearchTab";
import SocialFeedTab from "./screens/SocialFeedTab";
import AccountTab from "./screens/AccountTab";
import LearningTab from "./screens/LearningScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // footer tabs with icons
    const Tabs = createBottomTabNavigator(
      {
        Learning: LearningTab,
        Projects: ProjectsTab,
        Social: SocialFeedTab,
        Search: SearchTab,
        Account: AccountTab
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
          inactiveTintColor: "gray",
          style: {
            paddingTop: 10
          }
        }
      }
    );

    return <Tabs />;
  }
}
