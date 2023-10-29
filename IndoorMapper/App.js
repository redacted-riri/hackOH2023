import React, { useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {loadNewStart, loadNewDestination} from "./ Processing"
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import Svg, { Path } from 'react-native-svg';

// Main App Window 
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,}}>
      <View style={{ flexShrink: 1, height: '100%', width: '100%' }}>
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
        <ReactNativeZoomableView
            maxZoom={3}
            minZoom={1}
            // Give these to the zoomable view so it can apply the boundaries around the actual content.
            // Need to make sure the content is actually centered and the width and height are
            // dimensions when it's rendered naturally. Not the intrinsic size.
            // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
            // Therefore, we'll feed the zoomable view the 300x150 size.
            contentWidth={400}
            contentHeight={200}
          >
            <Image
              style={{ width: '100%', height: '100%', resizeMode: 'contain', position:'relative'}}
              source={require('./data/photos/basement2.png')}
            />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
}