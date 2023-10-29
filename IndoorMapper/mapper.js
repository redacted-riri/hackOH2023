import React, { Component} from 'react';
import {Platform} from 'react-native';
import Canvas, {Image as CanvasImage, Path2D, ImageData} from 'react-native-canvas';

export default class Mapper extends Component {
    handleCanvas(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        ctx.fillRect(0, 0, 100, 100);
      }
    
      render() {
        if (Platform.OS === "web") {
            return <canvas  ref={this.handleCanvas} />
        }
        
        return (
            <Canvas ref={this.handleCanvas} />
        );
      }
}


