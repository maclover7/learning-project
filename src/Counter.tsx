import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    color: '#841584',
  },
});

interface IProps {
  count: number,
  decreaseCount: () => void,
  increaseCount: () => void
}
interface IState {}

export default class Counter extends Component<IProps, IState> {
  public render() {
    return (
      <View>
        <Text style={styles.welcome}>Count: {this.props.count}</Text>
        <Button
          onPress={this.props.increaseCount}
          title={'Increase Count'}
          color={styles.button.color}
          accessibilityLabel={'Increase Count'}
        />
        <Button
          onPress={this.props.decreaseCount}
          title={'Decrease Count'}
          color={styles.button.color}
          accessibilityLabel={'Decrease Count'}
        />
      </View>
    );
  }
}
