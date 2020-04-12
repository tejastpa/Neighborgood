import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { scale, moderateScale, verticalScale } from "./scaling";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Alert_Visibility: false,
    };
  }

  Show_Custom_Alert(visible) {
    this.setState({ Alert_Visibility: visible });
  }

  ok_Button = () => {
    Alert.alert("OK Button Clicked.");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Modal
          visible={this.state.Alert_Visibility}
          transparent={false}
          animationType={"fade"}
          onRequestClose={() => {
            this.Show_Custom_Alert(!this.state.Alert_Visibility);
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={styles.Alert_Main_View}>
              <Text style={styles.Alert_Title}>Add an item</Text>

              <View
                style={{ width: "100%", height: 2, backgroundColor: "#fff" }}
              />

              <Text style={styles.Alert_Message}>
                {" "}
                Are You Sure(Alert Dialog Message).{" "}
              </Text>

              <View
                style={{ width: "100%", height: 1, backgroundColor: "#fff" }}
              />

              <View style={{ flexDirection: "row", height: "30%" }}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.ok_Button}
                  activeOpacity={0.7}
                >
                  <Text style={styles.TextStyle}> OK </Text>
                </TouchableOpacity>

                <View
                  style={{ width: 1, height: "100%", backgroundColor: "#fff" }}
                />

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    this.Show_Custom_Alert(!this.state.Alert_Visibility);
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={styles.TextStyle}> CANCEL </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.Show_Custom_Alert(true);
          }}
          style={styles.addListButton}
        >
          <Text style={styles.listButtonText}> Add an Item </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS == "ios" ? 20 : 0,
  },

  addListButton: {
    width: moderateScale(200),
    height: verticalScale(50),
    padding: scale(10),
    backgroundColor: "#474747",
    borderRadius: 7,
  },

  listButtonText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontSize: moderateScale(20,0.4),
  },

  Alert_Main_View: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    height: 200,
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 7,
  },

  Alert_Title: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    padding: 10,
    height: "28%",
  },

  Alert_Message: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    padding: 10,
    height: "42%",
  },

  buttonStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginTop: -5,
  },
});
