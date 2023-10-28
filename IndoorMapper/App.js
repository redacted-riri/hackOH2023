import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Room 204', value: '204'},
    {label: 'Room 305', value: '305'}
  ]);

  return (
    <View style={{
      backgroundColor: '#171717',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
}