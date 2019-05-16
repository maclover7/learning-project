import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import ICounter from '../types';
import { decreaseCount, increaseCount } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

interface IProps {
  decreaseCount: (counterId: number) => void;
  increaseCount: (counterId: number) => void;
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
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={props.counters}
      renderItem={renderCounter}
      keyExtractor={getKey}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ decreaseCount, increaseCount }, dispatch);
};

const mapStateToProps = (state: ICounter[]) => {
  return { counters: state };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
