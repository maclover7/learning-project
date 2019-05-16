import React from 'react';
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
  count: number;
  decreaseCount: () => void;
  increaseCount: () => void;
  removeCounter: () => void;
}

const Counter = (props: IProps) => {
  return (
    <View>
      <Text style={styles.welcome}>Count: {props.count}</Text>
      <Button
        onPress={props.increaseCount}
        title={'Increase Count'}
        color={styles.button.color}
        accessibilityLabel={'Increase Count'}
      />
      <Button
        onPress={props.decreaseCount}
        title={'Decrease Count'}
        color={styles.button.color}
        accessibilityLabel={'Decrease Count'}
      />
      <Button
        onPress={props.removeCounter}
        title={'Remove Counter'}
        color={styles.button.color}
        accessibilityLabel={'Remove Counter'}
      />
    </View>
  );
};

export default Counter;
