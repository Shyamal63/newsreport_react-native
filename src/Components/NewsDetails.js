import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
import { Font } from 'expo';
import {Actions} from 'react-native-router-flux';
export default class NewsDetails extends React.Component {
    constructor(props){
        super(props);
          this.state={
            newsDataReport:this.props.myData
          };
         
      }
   
    static navigationOptions = {
        header: null,
      };
    clicBackbtn(){
        Actions.News();
    }
  

  render() {
    return (
      <View >
      <View style={{left:5,flexDirection:'row',top:20}}>
            <View style={{top:10,flexDirection:'row'}}>
            <TouchableOpacity>
                  <Icon onPress={()=>this.clicBackbtn()} name="angle-left" size={30} color="#707989" />
            </TouchableOpacity>    
                  <Text style={{top:5,left:5}}>News</Text>
            </View>
            <View style={{left:130,top:10}}>
                  <Text style={{color:'#707989',fontSize:15}} >Article</Text>
            </View>
       </View>
   
       
     
       <View style={{top:50,margin:3}}>
       <Tile styleName="large-banner">
  <Image
    styleName="large-banner"
    source={{ uri: this.state.newsDataReport.urlToImage }}
  />
  
  <View styleName="content" style={{top:8}}>
  
    <Subtitle style={{fontSize:20}} numberOfLines={2}>{this.state.newsDataReport.title}</Subtitle>
  
   
  </View>
  <ScrollView style={{height:Dimensions.get('window').height-300,top:5}}>
    <View>
    <Text>{this.state.newsDataReport
      
      
      .description}</Text>
    </View>
    </ScrollView>
  
  
</Tile>
       </View>
       
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
