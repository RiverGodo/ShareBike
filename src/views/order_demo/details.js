import React, { Component } from 'react'
import HeaderDemo from "../../components/header/header_demo"
import { Card } from 'antd';
import './details.scss'
import axios from '../../axios/axios.js'

 class DetailDemo extends Component {

  componentDidMount(){
    this.getData()
  }

  getData = () =>{
    const {detailid} = this.props.match.params
    axios.get('/order/detail',{id : detailid}).then(res=>{
      if(res.code == 0){
        console.log(res);
        this.initMap(res.result)
      }
    })
  }

   //初始化地图
   initMap = (result) => {
    const BMap = window.BMap
    this.map = new BMap.Map("bmap-container");          // 创建地图实例  
    // const point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    // this.map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
    this.map.enableScrollWheelZoom(true);  
    this.addControl()
    this.drawPolyline(result.position_list)
    this.drawServiceArea(result.area)
   }

   //添加控件
   addControl = () =>{
    const BMap = window.BMap
    const map = this.map
    map.addControl(new BMap.NavigationControl(
      {
        anchor:window.BMAP_ANCHOR_TOP_RIGHT
      }
    ));    
    map.addControl(new BMap.ScaleControl(
      {
        anchor:window.BMAP_ANCHOR_TOP_RIGHT
      }
    ));    
    map.addControl(new BMap.OverviewMapControl(
      {
        anchor:window.BMAP_ANCHOR_TOP_RIGHT
      }
    ));    
    map.addControl(new BMap.MapTypeControl(
      {
        anchor:window.BMAP_ANCHOR_TOP_LEFT
      }
    ));    
    // map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用  
   }

   //绘制路线折线图
   drawPolyline = (position_list) =>{
    const BMap = window.BMap
    const map = this.map

    let starPoint = position_list[0]
    let endPoint = position_list[position_list.length-1]
    let startBmapPoint = new BMap.Point(starPoint.lon, starPoint.lat)//绘制一个百度地图的点
    let endBmapPoint = new BMap.Point(endPoint.lon, endPoint.lat)//绘制一个百度地图的点 
    
    //新建一个Icon
    let startIcon = new BMap.Icon("/img/start_point.png", new BMap.Size(36, 42), {    
      // 指定定位位置。   
      // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
      // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
      // 图标中央下端的尖角位置。        
      imageSize:new BMap.Size(36, 42)
    });     
    
    //新建一个标注，并添加相应的ICON到标注当中去
    let endIcon = new BMap.Icon("/img/end_point.png", new BMap.Size(36, 42), {    
      // 指定定位位置。   
      // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
      // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
      // 图标中央下端的尖角位置。        
      imageSize:new BMap.Size(36, 42)
    });   

    let starMarker =  new BMap.Marker(startBmapPoint, {icon:startIcon}) 
    let endMarker =  new BMap.Marker(endBmapPoint, {icon:endIcon}) 



    map.addOverlay(starMarker)//添加起始坐标点
    map.addOverlay(endMarker)//添加结束坐标点
    map.centerAndZoom(startBmapPoint, 11); 

    let polyline = new BMap.Polyline(position_list.map(point =>{
      return new BMap.Point(point.lon,point.lat)
    }),
      {strokeColor:"red", strokeWeight:3, strokeOpacity:1}
      );
  map.addOverlay(polyline);
   }
   //绘制服务区
   drawServiceArea = (area) =>{
      const BMap = window.BMap
      const map = this.map

      let polygon = new BMap.Polygon(
        area.map(point => new BMap.Point(point.lon,point.lat)),
        {
          strokeColor:'#ff0000',
          strokeWeight:6,
          fillColor:'#ff6700',
          fillOpacity:0.5
        }
        )
        map.addOverlay(polygon)
   }

  render() {
    return (
      <div className='detail-demo'>
        <HeaderDemo></HeaderDemo>
        <Card>
          <div className="bmap-wrap" id="bmap-container">
            
          </div>
        </Card>
      </div>
    )
  }
}

export default DetailDemo