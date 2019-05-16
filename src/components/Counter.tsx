import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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
    <View style={styles.container}>
      <Text style={styles.welcome}>Count: {props.count}</Text>
      <Button
        onPress={props.increaseCount}
        title={'Increase'}
        color={styles.button.color}
        accessibilityLabel={'Increase'}
      />
      <Button
        onPress={props.decreaseCount}
        title={'Decrease'}
        color={styles.button.color}
        accessibilityLabel={'Decrease'}
      />
      <Button
        onPress={props.removeCounter}
        title={'Remove'}
        color={styles.button.color}
        accessibilityLabel={'Remove'}
      />
    </View>
  );
};

export default Counter;
