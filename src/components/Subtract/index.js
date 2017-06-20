import React from 'react';

import { Button } from 'react-native';

const Subtract = (props) => {
  const { onPress } = props;
  return (
    <Button
      onPress={() => onPress()}
      title="-"
    />
  );
};

export default Subtract;
