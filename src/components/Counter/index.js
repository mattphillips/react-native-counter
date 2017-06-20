import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Add from '../Add';
import Subtract from '../Subtract';

const Counter = (props) => {
  const { add, count, subtract } = props;
  return (
    <View style={styles.container}>
      <Add onPress={add} />
      <Text>{count}</Text>
      <Subtract onPress={subtract} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;
