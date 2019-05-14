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
import {View} from 'react-native';
import Counter from './Counter';
import styles from './styles';

interface Props {}
interface State {}
export default class App extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}
