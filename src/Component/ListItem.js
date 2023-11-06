import { LayoutAnimation, StyleSheet, Text, TouchableWithoutFeedback, UIManager, View } from 'react-native';
import React, { useEffect } from 'react';
import { CardSection } from './common';
import { useDispatch, useSelector } from 'react-redux';
import { selectLibrary } from '../Redux/librariesSlice';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ListItem = (props) => {
  const dispatch = useDispatch(); // Initialize dispatch

  const handleItemClick = () => {
    dispatch(selectLibrary(props.item)); // Dispatch the selectLibrary action
  };

  LayoutAnimation.configureNext({
    duration: 500,
    create: {type: 'linear', property: 'opacity'},
    update: {type: 'spring', springDamping: 0.4},
    delete: {type: 'linear', property: 'opacity'},
  });

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
