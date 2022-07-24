    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });
 
   var data = {
  "positions": [
    {
      "content": '<div>본사 <p> ㅌㅌ</div>', 
      "lat": 37.27943075229118,
      "lng": 127.01763998406159
};

var markers = data.positions.map(function(position) {
    return new kakao.maps.Marker({
        position : new kakao.maps.LatLng(position.lat, position.lng),
                image: markerImage // 마커이미지 설정
    });
});

// 클러스터러에 마커들을 추가합니다
clusterer.addMarkers(markers);



// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        content: '<div>본사 <p> ㅌㅌ</div>', 
        latlng: new kakao.maps.LatLng(37.54699, 127.09598)
    },
    {
        content: '<div>생태연못</div>', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        content: '<div>텃밭</div>', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        content: '<div>근린공원</div>',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    }
];

var imageSrc = 'https://www.pngmart.com/files/7/Delivery-PNG-Picture.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(60, 64), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
        image: markerImage // 마커이미지 설정
    });
    

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

