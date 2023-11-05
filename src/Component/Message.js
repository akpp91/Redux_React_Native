import React from 'react';
import { Button, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, showData } from '../Redux/librariesSlice';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.value);

  return (
    <View>
      <Text>{message}</Text>
      <Button
        title="Change Message"
        onPress={() => dispatch(showData('New message'))}
      />
    </View>
  );
};

export default Message;
