import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const BackgroundSvg = () => {
  return (
    <View style={{ position: 'absolute', width, height }}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Defs>
          <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#1a1a2e" stopOpacity="1" />
            <Stop offset="100%" stopColor="#16213e" stopOpacity="1" />
          </LinearGradient>
          <LinearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#6a11cb" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#2575fc" stopOpacity="0.8" />
          </LinearGradient>
        </Defs>
        
        {/* Background */}
        <Path d={`M0 0 H${width} V${height} H0 Z`} fill="url(#grad1)" />
        
        {/* Abstract shapes */}
        <Path
          d={`M0 ${height * 0.65} 
              C${width * 0.3} ${height * 0.5} ${width * 0.6} ${height * 0.8} ${width} ${height * 0.6} 
              L${width} ${height} 
              L0 ${height} Z`}
          fill="url(#grad2)"
          opacity="0.6"
        />
        
        {/* Decorative circles */}
        <Circle cx={width * 0.8} cy={height * 0.2} r="80" fill="#6a11cb" opacity="0.2" />
        <Circle cx={width * 0.1} cy={height * 0.3} r="60" fill="#2575fc" opacity="0.2" />
        <Circle cx={width * 0.5} cy={height * 0.85} r="100" fill="#6a11cb" opacity="0.1" />
      </Svg>
    </View>
  );
};

export default BackgroundSvg;
