import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import News from './src/Components/News';
import { Font } from 'expo';
import NewsDetails from './src/Components/NewsDetails';
import {Router, Route, Schema, Animations, TabBar,Stack,Scene, Actions} from 'react-native-router-flux';

export default class App extends React.Component {

  constructor(){
    super();
      this.state={
        fontLoaded:false, 
      };
     
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Rubik-Regular': require('./src/Fonts/Rubik-Regular.ttf'),
      'Rubik-Bold': require('./src/Fonts/Rubik-Bold.ttf'),
      'Rubik-Black': require('./src/Fonts/Rubik-Black.ttf'),
      'Rubik-Medium': require('./src/Fonts/Rubik-Medium.ttf'),
    });
    this.setState({fontLoaded:true});
  }

  render() {
    return (
     
        this.state.fontLoaded ? (
            
       <Router>
       <Stack key="root">
       
       <Scene key="News" component={News} />
       <Scene key="NewsDetails" hideNavBar={true} component={NewsDetails}  />
       </Stack>
       </Router>
        ):null
      
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
