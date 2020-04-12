import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {

  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // var actionCodeSettings = ActionCodeSettings(); //currently in  objective-c, needs to be convereted to javascript
  // actionCodeSettings.url = URL(string: "https://example.appspot.com");
  // actionCodeSettings.handleCodeInApp = true;
  // actionCodeSettings.setAndroidPackageName("com.package.packageai", installIfNotAvailable: false, minimumVersion: "12");
  
  // let provider = FUIEmailAuth(authUI: {
  //     FUIAuth.defaultAuthUI()!,
  //     signInMethod: FIREmailLinkAuthSignInMethod,
  //     forceSameDevice: false,
  //     allowNewEmailAccounts: true,
  //     actionCodeSetting: actionCodeSettings});
  
  return (
    <View style={styles.container}>
      <Text>Fix the Objective-C above</Text>
    </View>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
  },
  text: {
    flex:1,
    paddingTop: "25%",
    fontSize: 40,
  },
  textBox: {
    height: 40,
    width: 250,
    fontSize: 18,
    color: 'black',
    borderRadius: 1,
  }
});
