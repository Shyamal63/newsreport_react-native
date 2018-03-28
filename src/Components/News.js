import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');
import NewsDetails from './NewsDetails';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
import { Font } from 'expo';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export default class News extends React.Component {

  constructor(){
    super();
      this.state={
        news:[]
      };
     
  }
  static navigationOptions = {
    header: null,
  };
  clicView(newsData){
    Actions.NewsDetails({myData:newsData});
}
componentDidMount(){
  axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fb39f321147f4218b9d8fe9a283e9664')
.then((response) => {
  
this.setState({news: response.data.articles})
})
.catch((error) =>{
console.log(error);
});
}
  render() {
    return (
      <View >
      <View style={{left:5,flexDirection:'row',top:20}}>
            <View style={{top:10}}>
                  <Icon name="reorder" size={30} color="#707989" />
            </View>
            <View style={{left:130,top:10}}>
                  <Text style={{color:'#707989',fontSize:15}} >News</Text>
            </View>
       </View>
       <View  style={{borderBottomWidth:1,width:Dimensions.get('window').width,borderColor:'#707989',top:45,flexDirection:'row'}}/>
       <ScrollView style={{height:Dimensions.get('window').height-50}}>
       {
         this.state.news.map((newsFeed,index) => {
          
         return(
       <View key={index} style={{top:50,borderWidth:1,margin:3,borderColor:'#828A99'}}>
      
          <TouchableOpacity onPress={()=>this.clicView(newsFeed)}>
         
            <Row>
                  <Image
                    styleName="small rounded-corners"
                    source={{ uri: newsFeed.urlToImage }}
                  />
                  <View styleName="vertical stretch space-between">
                    <Subtitle>{newsFeed.title}</Subtitle>
                    {/* <Caption>20 hours ago</Caption> */}
                  </View>
          </Row>
          
         </TouchableOpacity>
    
       </View>
       
         )
       })
       }
       </ScrollView>
      </View>
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
