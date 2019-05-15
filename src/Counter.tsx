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

interface IProps {}
interface IState {
  count: number;
}
export default class Counter extends Component<IProps, IState> {
  public state = { count: 0 };

  private increaseCount: () => void = () => {
    const changeAmount = 1;
    this.setState(oldState => ({ count: oldState.count + changeAmount }));
  };

  private decreaseCount: () => void = () => {
    const changeAmount = -1;
    this.setState(oldState => ({ count: oldState.count + changeAmount }));
  };

  public render() {
    return (
      <View>
        <Text style={styles.welcome}>Count: {this.state.count}</Text>
        <Button
          onPress={this.increaseCount}
          title={'Increase Count'}
          color={styles.button.color}
          accessibilityLabel={'Increase Count'}
        />
        <Button
          onPress={this.decreaseCount}
          title={'Decrease Count'}
          color={styles.button.color}
          accessibilityLabel={'Decrease Count'}
        />
      </View>
    );
  }
}
