import React, { Component} from 'react';
import {Platform} from 'react-native';
import Canvas, {Image as CanvasImage, Path2D, ImageData} from 'react-native-canvas';
import path  from './ Processing'
import {findPath}  from './ Processing.js'

export default class Mapper extends Component {
    handleCanvas(canvas) {

        const context = canvas.getContext('2d');

        const drawPath = new Path2D(canvas);     
           
        for (let i = 1; i < path.length; i++) {
            drawPath.lineTo(path[i][1]*10, path[i][0]*10);
        }
        context.fillStyle = 'red';
        context.arc(50, 50, 49, 0, Math.PI * 2, true);
        context.fill();

        context.stroke(drawPath);
      }
    
      render() {
        if (Platform.OS === "web") {
            return <canvas ref={this.handleCanvas} />
        }
        
        return  <Canvas ref={this.handleCanvas} />
        
      }
}


