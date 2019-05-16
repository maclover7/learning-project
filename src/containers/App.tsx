import React from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import ICounter from '../types';
import {
  addCounter,
  decreaseCount,
  increaseCount,
  removeCounter,
} from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    color: '#841584',
  },
});

interface IProps {
  addCounter: () => void;
  decreaseCount: (counterId: number) => void;
  increaseCount: (counterId: number) => void;
  removeCounter: (counterId: number) => void;
  counters: ICounter[];
}

const App = (props: IProps) => {
  const getKey = (item: ICounter, index: number): string => {
    return String(index);
  };

  const renderCounter = ({
    item,
    index,
  }: {
    item: ICounter;
    index: number;
  }) => {
    return (
      <Counter
        key={index}
        count={item.count}
        decreaseCount={() => props.decreaseCount(index)}
        increaseCount={() => props.increaseCount(index)}
        removeCounter={() => props.removeCounter(index)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container}
        data={props.counters}
        renderItem={renderCounter}
        keyExtractor={getKey}
      />
      <Button
        onPress={props.addCounter}
        title={'Add Counter'}
        color={styles.button.color}
        accessibilityLabel={'Add Counter'}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    { addCounter, decreaseCount, increaseCount, removeCounter },
    dispatch,
  );
};

const mapStateToProps = (state: ICounter[]) => {
  return { counters: state };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
