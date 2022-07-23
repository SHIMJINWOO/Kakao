    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });
 
   var data = {
  "positions": [
    {
      "lat": 37.27943075229118,
      "lng": 127.01763998406159
    },
    {
      "lat": 37.55915668706214,
      "lng": 126.92536526611102
    },
    {
      "lat": 35.13854258261161,
      "lng": 129.1014781294671
    },
    {
      "lat": 37.55518388656961,
      "lng": 126.92926237742505
    },
    /* ...... */
};

var markers = data.positions.map(function(position) {
    return new kakao.maps.Marker({
        position : new kakao.maps.LatLng(position.lat, position.lng)
    });
});

// 클러스터러에 마커들을 추가합니다
clusterer.addMarkers(markers);
