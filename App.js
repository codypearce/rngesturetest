import React from 'react';
import {View, Animated} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';

const App = () => {
  const scale = new Animated.Value(1);
  const onGestureEvent = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });
  const onPinchStateChange = (event) => {
    console.log('called');
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {toValue: 1, useNativeDriver: true}).start();
    }
  };

  return (
    <View>
      <PinchGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onPinchStateChange}>
        <Animated.View
          style={{
            height: 800,
            width: 500,
            backgroundColor: 'black',
            transform: [{scale: scale}],
          }}
        />
      </PinchGestureHandler>
    </View>
  );
};

export default App;
