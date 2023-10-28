import React, { useState, useCallback } from 'react';

import { View, Text} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import {loadNewStart, loadNewDestination} from "./ Processing"

export default function App() {
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  const onStartOpen = useCallback(() => {
    setEndOpen(false);
  }, []);

  const onEndOpen = useCallback(() => {
    setStartOpen(false);
  }, []);

  const onStartClose = useCallback((start) => {
    loadNewStart(start);
  }, []);

  const onEndClose = useCallback((end) => {
    loadNewDestination(end);
  }, []);

  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Room 204', value: '204'},
    {label: 'Room 305', value: '305'}
  ]);

  return (
    <View style={{
      backgroundColor: '#171717',
      flex: 1,
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      paddingHorizontal: 15
    }}>
      <DropDownPicker
        zIndex={2000}
        zIndexInverse={1000}
        searchable={true}
        open={startOpen}
        value={startValue}
        onOpen={onStartOpen}
        onClose={onStartClose({startValue})}
        items={items}
        setOpen={setStartOpen}
        setValue={setStartValue}
        setItems={setItems}
      />
      <DropDownPicker
        zIndex={1000}
        zIndexInverse={2000}
        searchable={true}
        open={endOpen}
        value={endValue}
        onOpen={onEndOpen}
        onClose={onEndClose({endValue})}
        items={items}
        setOpen={setEndOpen}
        setValue={setEndValue}
        setItems={setItems}
      />
    </View>
  );
}