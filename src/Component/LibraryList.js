import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './common';

import libraryData   from "../LibraryList.json";
import { showData } from '../Redux/librariesSlice';
import ListItem from './ListItem';

const LibraryList = () => {
  const dispatch = useDispatch();
  const labList = useSelector((state) => state.libraries.libraries);

  
  useEffect(()=>{
    
    dispatch(showData(libraryData));
  })
  
  return (
    <View>
      {labList && (
        <FlatList
          data={labList}
          renderItem={({ item }) => (
            <ListItem
              item={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
  
}

export default LibraryList

const styles = StyleSheet.create({})