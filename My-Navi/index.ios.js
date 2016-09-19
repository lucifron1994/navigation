/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
     import {
         View,
         Navigator,
         AppRegistry,
         Text,
         NavigationBar
     } from 'react-native';
     import FirstPageComponent from './FirstPageComponent';

     export default class Test918 extends React.Component {
         render() {
             let defaultName = 'FirstPageComponent';
             let defaultComponent = FirstPageComponent;
             return (
             <Navigator
               initialRoute={{ name: defaultName, component: defaultComponent }}
              //  configureScene={(route) => {
              //    return Navigator.SceneConfigs.VerticalDownSwipeJump;
              //  }}
               renderScene={(route, navigator) => {
                 let Component = route.component;
                 return <Component {...route.params} navigator={navigator} />
               }}

               navigationBar={
              <Navigator.NavigationBar
               style={{backgroundColor:"white"}}
               routeMapper={ NavigationBarRouteMapper }/>}

               />
             );
         }
     }
     // 导航栏的Mapper
     var NavigationBarRouteMapper = {
       // 左键
       LeftButton(route, navigator, index, navState) {
         // ...
       },
       // 右键
       RightButton(route, navigator, index, navState) {
         // ...
       },
       // 标题
       Title(route, navigator, index, navState) {
         return (
           <View style={{paddingTop : 13}}>
             <Text style={{color:'black'}}>
               应用标题
             </Text>
           </View>
         );
       }
     };

AppRegistry.registerComponent('Test918', () => Test918);
