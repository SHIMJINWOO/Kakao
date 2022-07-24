

// 마커 클러스터러를 생성합니다 
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

var data = {
  "positions":[
    {  "content": '<div>본사 <p> ㅌㅌ</div>',       "latlng": new kakao.maps.LatLng(37.54699,127.09598    },
    {      "content": '<div>본사 <p> ㅌㅌ</div>',       "latlng": new kakao.maps.LatLng(37.55915668706214,126.925365266111    },
    {      "latlng": new kakao.maps.LatLng(35.13854258261161,129.101478129467    },
    {      "latlng": new kakao.maps.LatLng(37.55518388656961,126.929262377425    },
    {      "latlng": new kakao.maps.LatLng(35.20618517638034,129.07944301057    },
    {      "latlng": new kakao.maps.LatLng(37.561110808242056,126.983126838689    },
    {      "latlng": new kakao.maps.LatLng(37.86187129655063,127.741025082042    },
    {      "latlng": new kakao.maps.LatLng(37.47160156778542,126.628180641422    },
    {      "latlng": new kakao.maps.LatLng(35.10233410927457,129.026118158561    },
    {      "latlng": new kakao.maps.LatLng(35.10215562270429,129.025797930182    },
    {      "latlng": new kakao.maps.LatLng(35.475423012251106,128.76666923366    },
    {      "latlng": new kakao.maps.LatLng(35.93282824693927,126.953076288342    },
    {      "latlng": new kakao.maps.LatLng(36.33884892276137,127.393666019664    },
    {      "latlng": new kakao.maps.LatLng(37.520412849636,126.974276416158    },
    {      "latlng": new kakao.maps.LatLng(35.155139675209675,129.061547737583    },
    {      "latlng": new kakao.maps.LatLng(35.816041994696576,127.110467062113    },
    {      "latlng": new kakao.maps.LatLng(38.20441110638504,128.590386712852    },
    {      "latlng": new kakao.maps.LatLng(37.586112739308916,127.029491485179    },
    {      "latlng": new kakao.maps.LatLng(37.50380641844987,127.021307166177    },
    {      "latlng": new kakao.maps.LatLng(37.55155704387368,126.92161115892    },
    {      "latlng": new kakao.maps.LatLng(37.55413060051369,126.922074729295    },
    {      "latlng": new kakao.maps.LatLng(36.362321615174835,127.350004832253    },
    {      "latlng": new kakao.maps.LatLng(37.55227862908755,126.922805462949    },
    {      "latlng": new kakao.maps.LatLng(37.490413948014606,127.020796784724    },
    {      "latlng": new kakao.maps.LatLng(35.172358507549596,126.905453948666    },
    {      "latlng": new kakao.maps.LatLng(35.15474103200252,129.118278891544    },
    {      "latlng": new kakao.maps.LatLng(37.516081250973485,127.023690571663    },
    {      "latlng": new kakao.maps.LatLng(36.80711722863776,127.140203460375    },
    {      "latlng": new kakao.maps.LatLng(37.28957415752673,127.001037520054    },
    {      "latlng": new kakao.maps.LatLng(35.83953896766896,128.756688032185    },
    {      "latlng": new kakao.maps.LatLng(37.51027412948879,127.082277181247    },
    {      "latlng": new kakao.maps.LatLng(37.493581783270294,126.725419556605    },
    {      "latlng": new kakao.maps.LatLng(35.135291862962795,129.100609114487    },
    {      "latlng": new kakao.maps.LatLng(35.174574933144065,126.913899807877    },
    {      "latlng": new kakao.maps.LatLng(37.795887691878654,127.106604165871    },
    {      "latlng": new kakao.maps.LatLng(37.59288687521181,126.965605246273    },
    {      "latlng": new kakao.maps.LatLng(37.45076411130452,127.145930037497    },
    {      "latlng": new kakao.maps.LatLng(35.86008337557079,127.126391248806    },
    {      "latlng": new kakao.maps.LatLng(35.23773491330953,129.083710374295    },
    {      "latlng": new kakao.maps.LatLng(37.524297321304886,127.05018281937    },
    {      "latlng": new kakao.maps.LatLng(36.33386658021849,127.446172146688    },
    {      "latlng": new kakao.maps.LatLng(35.72963747546802,128.27079056365    },
    {      "latlng": new kakao.maps.LatLng(36.02726828142973,129.37257233594    },
    {      "latlng": new kakao.maps.LatLng(35.0708030360945,129.059318549408    },
    {      "latlng": new kakao.maps.LatLng(35.86835862950247,128.597550891758    },
    {      "latlng": new kakao.maps.LatLng(33.51133264696746,126.518523474523    },
    {      "latlng": new kakao.maps.LatLng(37.61284289586752,127.031205472385    },
    {      "latlng": new kakao.maps.LatLng(35.851696038722466,128.590929371256    },
    {      "latlng": new kakao.maps.LatLng(37.59084695083232,127.018727735888    },
    {      "latlng": new kakao.maps.LatLng(35.52114874288784,129.335736299457    },
    {      "latlng": new kakao.maps.LatLng(36.362326407439845,127.33577420148    },
    {      "latlng": new kakao.maps.LatLng(37.28941189110747,127.004461326651    },
    {      "latlng": new kakao.maps.LatLng(35.32049801117398,129.181034357678    },
    {      "latlng": new kakao.maps.LatLng(37.53338631541601,127.00615481678    },
    {      "latlng": new kakao.maps.LatLng(37.413461468258156,126.677356808408    },
    {      "latlng": new kakao.maps.LatLng(35.920390371093205,128.544117202499    },
    {      "latlng": new kakao.maps.LatLng(36.65489374054824,127.483748168719    },
    {      "latlng": new kakao.maps.LatLng(37.49491987110441,127.01493134206    },
    {      "latlng": new kakao.maps.LatLng(37.64985695608336,127.14496345268    },
    {      "latlng": new kakao.maps.LatLng(37.55686770317417,127.16927880543    },
    {      "latlng": new kakao.maps.LatLng(37.37014007589146,127.106143301855    },
    {      "latlng": new kakao.maps.LatLng(37.5350236507627,126.961576811847    },
    {      "latlng": new kakao.maps.LatLng(37.40549630594667,126.898058182    },
    {      "latlng": new kakao.maps.LatLng(34.867950544005744,128.690696900811    },
    {      "latlng": new kakao.maps.LatLng(35.16317059543225,128.98452978748    },
    {      "latlng": new kakao.maps.LatLng(36.607484825953186,127.485204511951    },
    {      "latlng": new kakao.maps.LatLng(37.651724785213986,126.583067483375    },
    {      "latlng": new kakao.maps.LatLng(35.86059690063427,128.591930876652    },
    {      "latlng": new kakao.maps.LatLng(35.25685847585025,128.599126050604    },
    {      "latlng": new kakao.maps.LatLng(33.509258155694496,126.510945146481    },
    {      "latlng": new kakao.maps.LatLng(37.64366155701157,126.632550392475    },
    {      "latlng": new kakao.maps.LatLng(35.82667262227336,127.103067057482    },
    {      "latlng": new kakao.maps.LatLng(35.82003554991111,127.148109740624    },
    {      "latlng": new kakao.maps.LatLng(35.097485195649455,128.994861818623    },
    {      "latlng": new kakao.maps.LatLng(37.32204249590605,127.955918935858    },
    {      "latlng": new kakao.maps.LatLng(37.50535127272031,127.104746544052    },
    {      "latlng": new kakao.maps.LatLng(36.99081407156533,127.093383249566    },
    {      "latlng": new kakao.maps.LatLng(37.323486640444834,127.12285239871    },
    {      "latlng": new kakao.maps.LatLng(35.78973089440451,127.136443195456    },
    {      "latlng": new kakao.maps.LatLng(35.641373953578196,129.354632207196    },
    {      "latlng": new kakao.maps.LatLng(37.47423127310911,126.976250291619    },
    {      "latlng": new kakao.maps.LatLng(35.84357192991226,128.611437207197    },
    {      "latlng": new kakao.maps.LatLng(37.180974984085736,128.202945263411    },
    {      "latlng": new kakao.maps.LatLng(37.57895718642583,126.931689733724    },
    {      "latlng": new kakao.maps.LatLng(33.49077253755052,126.493148170009    },
    {      "latlng": new kakao.maps.LatLng(36.42175925330255,128.674091332257    },
    {      "latlng": new kakao.maps.LatLng(37.46405540570109,126.715354411917    },
    {      "latlng": new kakao.maps.LatLng(37.594758776232126,127.100999174898    },
    {      "latlng": new kakao.maps.LatLng(37.7239966558994,127.047867173185    },
    {      "latlng": new kakao.maps.LatLng(35.86680171505329,128.592373837674    },
    {      "latlng": new kakao.maps.LatLng(37.560573727266785,126.812391074852    },
    {      "latlng": new kakao.maps.LatLng(37.78692224857484,126.989660103417    },
    {      "latlng": new kakao.maps.LatLng(35.10368644802913,129.020686260602    },
    {      "latlng": new kakao.maps.LatLng(37.063839948992644,127.0685652303    },
    {      "latlng": new kakao.maps.LatLng(37.34344643728643,127.943821813509    },
    {      "latlng": new kakao.maps.LatLng(37.512521267219064,127.400548056481    },
    {      "latlng": new kakao.maps.LatLng(35.15286653837983,126.904199039714    },
    {      "latlng": new kakao.maps.LatLng(35.173238445546296,129.176082844468    },
    {      "latlng": new kakao.maps.LatLng(36.082394201323524,129.403304717259    },
    {      "latlng": new kakao.maps.LatLng(37.51043665598106,127.039740700365    },
    {      "latlng": new kakao.maps.LatLng(36.627816673285054,127.449698660219    },
    {      "latlng": new kakao.maps.LatLng(37.59194624756919,127.01817545576    },
    {      "latlng": new kakao.maps.LatLng(37.387147045560866,127.125336543892    },
    {      "latlng": new kakao.maps.LatLng(35.89948383848115,128.608095507306    },
    {      "latlng": new kakao.maps.LatLng(37.555316235235324,127.140384478947    },
    {      "latlng": new kakao.maps.LatLng(36.09622092762977,128.43314679004    },
    {      "latlng": new kakao.maps.LatLng(37.582855922985544,126.919078570085    },
    {      "latlng": new kakao.maps.LatLng(37.516000983841586,128.727988720327    },
    {      "latlng": new kakao.maps.LatLng(37.48429363675198,127.037963020357    },
    {      "latlng": new kakao.maps.LatLng(37.54502575965604,126.954293382457    },
    {      "latlng": new kakao.maps.LatLng(35.236247173046394,128.867761801529    },
    {      "latlng": new kakao.maps.LatLng(37.40157536691968,127.11717457214    },
    {      "latlng": new kakao.maps.LatLng(36.95191038001258,127.910640408775    },
    {      "latlng": new kakao.maps.LatLng(37.491526492971346,126.854637495258    },
    {      "latlng": new kakao.maps.LatLng(36.124356479753196,128.095170523461    },
    {      "latlng": new kakao.maps.LatLng(37.15715169307048,128.158534613637    },
    {      "latlng": new kakao.maps.LatLng(37.5808156608605,126.951097055106    },
    {      "latlng": new kakao.maps.LatLng(37.46931787249714,126.899047750448    },
    {      "latlng": new kakao.maps.LatLng(35.52195614910054,129.320990484174    },
    {      "latlng": new kakao.maps.LatLng(37.58625703195563,126.949603520674    },
    {      "latlng": new kakao.maps.LatLng(37.28463639199199,126.859844747573    },
    {      "latlng": new kakao.maps.LatLng(35.534169458631226,129.31169021536    },
    {      "latlng": new kakao.maps.LatLng(37.553341234194285,127.15481222237    },
    {      "latlng": new kakao.maps.LatLng(37.62293367990081,126.834450051224    },
    {      "latlng": new kakao.maps.LatLng(35.5272027005698,127.729537989501    },
    {      "latlng": new kakao.maps.LatLng(35.180032285898854,128.069545091753    }
  ]}

var imageSrc = 'https://www.pngmart.com/files/7/Delivery-PNG-Picture.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(30, 33), // 마커이미지의 크기입니다
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
    
    /*
var markers = data.positions.map(function(position) {
    return new kakao.maps.Marker({
    position : new kakao.maps.LatLng(position.lat, position.lng),
    image: markerImage // 마커이미지 설정
    });
});

// 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    (function(marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다 
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map, marker);
        });

        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });
    })(marker, infowindow);
}
*/

// 클러스터러에 마커들을 추가합니다
clusterer.addMarkers(markers);

/*

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
        image: markerImage // 마커이미지 설정
    });

*/ 

/* // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
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




    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}



       */ 
