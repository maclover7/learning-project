/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Counter from './Counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

interface IProps {}
interface IState {}
export default class App extends Component<IProps, IState> {
  public render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}
