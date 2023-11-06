import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { CardSection } from './common';
import { useDispatch, useSelector } from 'react-redux';
import { selectLibrary } from '../Redux/librariesSlice';

const ListItem = (props) => {
  const dispatch = useDispatch(); // Initialize dispatch

  const handleItemClick = () => {
    console.log("item");
    dispatch(selectLibrary(props.item)); // Dispatch the selectLibrary action
  };

  return (
    <TouchableWithoutFeedback onPress={handleItemClick}>
      <View> 
        <CardSection>
          <Text style={styles.titleStyle}>{props.item.title}</Text>
        </CardSection>
        {props.item === useSelector((state) => state.libraries.selectedLibrary) && (
          <CardSection>
            <Text>{props.item.description}</Text>
          </CardSection>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});
