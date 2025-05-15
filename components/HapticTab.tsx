import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';

export function HapticTab({ 
  children, 
  onPress, 
  accessibilityState, 
  ...props 
}: BottomTabBarButtonProps) {
  const focused = accessibilityState?.selected;
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);
  
  const handlePress = (event: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    scale.value = withSpring(0.9, { damping: 10 }, (finished) => {
      if (finished) {
        scale.value = withSpring(1);
      }
    });
    onPress?.(event);
  };

  React.useEffect(() => {
    if (focused) {
      opacity.value = withTiming(1, { duration: 200 });
    } else {
      opacity.value = withTiming(0, { duration: 200 });
    }
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      width: withTiming(focused ? 20 : 0, { duration: 200 }),
    };
  });

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
      {...(props as any)}
    >
      <Animated.View style={[styles.content, animatedStyle]}>
        {children}
      </Animated.View>
      <Animated.View style={[styles.indicator, indicatorStyle]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  indicator: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#6a11cb',
    marginTop: 4,
  },
});
