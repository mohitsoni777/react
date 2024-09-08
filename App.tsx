/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Button,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { addToCart } from './redux/action';
import {useDispatch,useSelector} from 'react-redux'
import {login} from './workspace/packages/login/methods/login_method'


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const  i = useSelector((state)=>state.reducer)
  const usedispace = useDispatch();
  var username;
  var password;
  // const login = async ()=>{
  //   usedispace(addToCart())
  // console.log('function is called')
  // try {
  //   const response = await fetch('http://192.168.43.28:8000/api/user/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user_name: username,  // Match the API field names exactly
  //       password: password,
  //     }),
  //   });
  //   const data = await response.json();
  //  console.log(data)
  // } catch (error) {
  //  console.log(error)
  // }
// }
function ontap(){
login(username,password)
}
  return(
    <View
    style={{
      flex : 1,
      // flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text>{i}</Text>
    <Text>Login Screen</Text>
    <TextInput
    onChangeText={(text)=>{
     username =text 
     console.log(username);
    }}
    placeholder={"Enter Search Term"} style={{
      width:300,
      margin:10,
      padding:10,
      borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth:1,
    borderBottomWidth:1,
    }}></TextInput>
    <TextInput
     onChangeText={(text)=>{
      password =text 
      console.log(password)
     }}
    placeholder={"Enter Search Term"} style={{
      width:300,
      margin:10,
      padding:10,
      borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth:1,
    borderBottomWidth:1,
    }}></TextInput>
  <Button title="Login" onPress={ontap} />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
