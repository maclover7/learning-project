import React from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { ICounter, IState } from '../types';
import {
  addCounter,
  decreaseCount,
  increaseCount,
  removeCounter,
} from '../actions';

const styles = StyleSheet.create({
  button: {
    color: '#841584',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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
      <Button
        onPress={props.addCounter}
        title={'Add Counter'}
        color={styles.button.color}
        accessibilityLabel={'Add Counter'}
      />
      <View style={styles.separator} />
      <FlatList
        data={props.counters}
        renderItem={renderCounter}
        keyExtractor={getKey}
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

const mapStateToProps = (state: IState) => {
  return { counters: state.counters };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
