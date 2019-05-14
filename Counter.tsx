import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

interface Props {}
interface State {
  count: number;
}

export default class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  changeCount(changeAmount: number) {
    this.setState({
      count: this.state.count + changeAmount
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>Count: {this.state.count}</Text>
        <Button
          onPress={this.changeCount.bind(this, 1)}
          title="Increase Count"
          color="#841584"
          accessibilityLabel="Increase Count"
        />
        <Button
          onPress={this.changeCount.bind(this, -1)}
          title="Decrease Count"
          color="#841584"
          accessibilityLabel="Decrease Count"
        />
      </View>
    );
  }
}
