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

var imageSrc = 'data:image/jpeg;base64,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b8o99PI4/wBfb8o99a6iCt5PylBhkWiw6cjvPmIs53AAei33KyqEQZ9nDk7diVUakVIjBa1ugWFx6I230guj8jj/AF9vyT31rqIPwo4ebjZHe+g1rb7L6IAvb6lyFCIOrzFg7K6mdSvcWte5hcR51mSNeQOF9G1/euqx/LMk1K2io5200IFnNawuc4dW+kLA7TvKtSIMh8jr/Xm/JPfUt5HXX11zbb7RG9u2tdRBWZMsuhofAsPlFPfU6Yt05HXFnOuCLOPHdusqOeR15/z7flHvrXkQZD5HX+vN+Se+rrg2VRQUboKORrJnDpVT2aTi7e7RBGoa7C9h79d7SiDJJ+SKWR7pJMRDnOJc5xiJcSdZJOmvjyOv9eb8k99a6iDNqzkzkko4qb9IyHm3OdZzLw9LZoM0gW295O07F1fkdf6835J7611Sgy3COTGqo5mzwYkGvadvMmxG9rhp6weCsecckxYmxr3OEc7QBzzW3a4b2ube5G22u4VvUIMi8jj/AF9vyT31+lPySTRvbJHiIa9pDmvbEQ4EbCDprWVKCrY/lNuI0rYqp7TOwdGpYzRIdx0ST0TvF/hZUryOv9eb8k99a8iDIRyPPBuK9oI1g80b/wA60vAqSohgbHUziZ7dQlDC0kDZpC5ufeuzUIJRFCCVCIgIpRBCIiApREEIiICIiAiIgIiICIiApREEKURBCIiApREEIiICIiAiIglRZEQSoREEqERAREQEREBERAREQEREBSiICIiCEREBERAREQEREBERAREQEREEoiIP/9k=', // 마커이미지의 주소입니다    
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
