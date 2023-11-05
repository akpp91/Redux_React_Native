import React from 'react';
import { Button, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../../messageSlice';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.value);

  return (
    <View>
      <Text>{message}</Text>
      <Button
        title="Change Message"
        onPress={() => dispatch(setMessage('New message'))}
      />
    </View>
  );
};

export default Message;
