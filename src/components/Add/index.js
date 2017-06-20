import React from 'react';

import { Button } from 'react-native';

const Add = (props) => {
  const { onPress } = props;
  return (
    <Button
      onPress={() => onPress()}
      title="+"
      color="#841584"
    />
  );
};

export default Add;
