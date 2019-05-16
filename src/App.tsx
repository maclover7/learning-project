import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Counter from './Counter';
import ICounter from './types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

interface IProps {
  decreaseCount: (counterId: number) => void,
  increaseCount: (counterId: number) => void,
  counters: ICounter[]
}

const App = (props: IProps) => {
  const renderCounters = () => {
    return props.counters.map((counter: ICounter, counterId: number) => {
      return <Counter key={counterId}
                      count={counter.count}
                      decreaseCount={() => props.decreaseCount(counterId) }
                      increaseCount={() => props.increaseCount(counterId) } />;
    });
  }

  return (
    <View style={styles.container}>{renderCounters()}</View>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    decreaseCount: (counterId: number) => dispatch({ type: 'DECREASE_COUNT', counterId }),
    increaseCount: (counterId: number) => dispatch({ type: 'INCREASE_COUNT', counterId })
  };
};

const mapStateToProps = (state: ICounter[]) => {
  return { counters: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
