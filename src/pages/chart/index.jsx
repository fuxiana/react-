import React from 'react';
import { Map, MouseTool,Marker } from 'react-amap';

const layerStyle = {
  padding: '3px',
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '4px',
  position: 'absolute',
  top: '5px',
  left: '1px'
};
class AddressMap extends React.Component {
  constructor(){
    super();
    const self =this;
    this.state = {
      what: '点击下方按钮开始绘制',
      position:{
        longitude: 118, latitude: 28.5
      },
      visible:true
    };
    this.mapPlugins = ['ToolBar'];
    this.mapCenter = {longitude: 118, latitude: 28.5};
  }

  drawWhat(obj) {
    let text = '';
    switch(obj.CLASS_NAME) {
      case 'AMap.Marker':
       text = `你绘制了一个标记，坐标位置是 {${obj.getPosition()}}`;
       break;
      case 'AMap.Polygon':
        text = `你绘制了一个多边形，有${obj.getPath().length}个端点`;
        break;
      case 'AMap.Circle':
        text = `你绘制了一个圆形，圆心位置为{${obj.getCenter()}}`;
        break;
      default:
        text = '';
    }
    this.setState({
      what: text
    });
  }
  
  drawMarker(){
    if (this.tool){
      this.setState({
        what: '准备绘制坐标点'
      });
    }
  }

  toolEvents(){
    const _this = this;
    return {
      created: (tool) => {
        this.tool = tool;
        this?.tool?.marker();
      },
      draw({obj}) {
        obj?.setPosition({})
        const {lat,lng} =obj.w.position;
        const position = {
          longitude:lng,
          latitude:lat
        }
        _this.setState({
          position: position,
        })
      }
    }
  }
   toggleVisible() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  
  render(){
    return <div style={{width: '100%', height: '100%'}}>
        <Map 
          plugins={this.mapPlugins}
          center={this.mapCenter}
        >
          <Marker position={this.state.position} />
          <MouseTool events={this.toolEvents()}/>
          <div style={layerStyle}>{this.state.what}</div>
          <button onClick={() => {this.toggleVisible() }}>Visible</button>
        </Map>
       </div>
  }
}
export default AddressMap