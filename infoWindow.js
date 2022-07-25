
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.54699, 127.09598)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5591566870621, 126.925365266111)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1385425826116, 129.101478129467)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5551838865696, 126.929262377425)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.2061851763803, 129.07944301057)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.561110808242, 126.983126838689)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.8618712965506, 127.741025082042)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4716015677854, 126.628180641422)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1023341092745, 129.026118158561)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1021556227042, 129.025797930182)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.4754230122511, 128.76666923366)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.9328282469392, 126.953076288342)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.3388489227613, 127.393666019664)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.520412849636, 126.974276416158)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1551396752096, 129.061547737583)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8160419946965, 127.110467062113)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(38.204411106385, 128.590386712852)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5861127393089, 127.029491485179)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5038064184498, 127.021307166177)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5515570438736, 126.92161115892)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5541306005136, 126.922074729295)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.3623216151748, 127.350004832253)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5522786290875, 126.922805462949)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4904139480146, 127.020796784724)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1723585075495, 126.905453948666)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1547410320025, 129.118278891544)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5160812509734, 127.023690571663)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.8071172286377, 127.140203460375)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.2895741575267, 127.001037520054)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8395389676689, 128.756688032185)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5102741294887, 127.082277181247)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4935817832702, 126.725419556605)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1352918629627, 129.100609114487)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.174574933144, 126.913899807877)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.7958876918786, 127.106604165871)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5928868752118, 126.965605246273)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4507641113045, 127.145930037497)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8600833755707, 127.126391248806)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.2377349133095, 129.083710374295)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5242973213048, 127.05018281937)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.3338665802184, 127.446172146688)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.729637475468, 128.27079056365)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.0272682814297, 129.37257233594)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.0708030360945, 129.059318549408)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8683586295024, 128.597550891758)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(33.5113326469674, 126.518523474523)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.6128428958675, 127.031205472385)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8516960387224, 128.590929371256)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5908469508323, 127.018727735888)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.5211487428878, 129.335736299457)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.3623264074398, 127.33577420148)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.2894118911074, 127.004461326651)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.3204980111739, 129.181034357678)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.533386315416, 127.00615481678)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4134614682581, 126.677356808408)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.9203903710932, 128.544117202499)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.6548937405482, 127.483748168719)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4949198711044, 127.01493134206)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.6498569560833, 127.14496345268)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5568677031741, 127.16927880543)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.3701400758914, 127.106143301855)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5350236507627, 126.961576811847)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4054963059466, 126.898058182)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(34.8679505440057, 128.690696900811)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1631705954322, 128.98452978748)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.6074848259531, 127.485204511951)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.6517247852139, 126.583067483375)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8605969006342, 128.591930876652)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.2568584758502, 128.599126050604)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(33.5092581556944, 126.510945146481)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.6436615570115, 126.632550392475)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8266726222733, 127.103067057482)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8200355499111, 127.148109740624)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.0974851956494, 128.994861818623)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.322042495906, 127.955918935858)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5053512727203, 127.104746544052)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.9908140715653, 127.093383249566)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.3234866404448, 127.12285239871)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.7897308944045, 127.136443195456)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.6413739535781, 129.354632207196)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4742312731091, 126.976250291619)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8435719299122, 128.611437207197)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.1809749840857, 128.202945263411)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5789571864258, 126.931689733724)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(33.4907725375505, 126.493148170009)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.4217592533025, 128.674091332257)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.464055405701, 126.715354411917)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5947587762321, 127.100999174898)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.7239966558994, 127.047867173185)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8668017150532, 128.592373837674)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5605737272667, 126.812391074852)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.7869222485748, 126.989660103417)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1036864480291, 129.020686260602)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.0638399489926, 127.0685652303)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.3434464372864, 127.943821813509)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.512521267219, 127.400548056481)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1528665383798, 126.904199039714)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1732384455462, 129.176082844468)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.0823942013235, 129.403304717259)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.510436655981, 127.039740700365)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.627816673285, 127.449698660219)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5919462475691, 127.01817545576)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.3871470455608, 127.125336543892)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.8994838384811, 128.608095507306)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5553162352353, 127.140384478947)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.0962209276297, 128.43314679004)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5828559229855, 126.919078570085)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5160009838415, 128.727988720327)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4842936367519, 127.037963020357)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.545025759656, 126.954293382457)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.2362471730463, 128.867761801529)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4015753669196, 127.11717457214)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.9519103800125, 127.910640408775)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4915264929713, 126.854637495258)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(36.1243564797531, 128.095170523461)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.1571516930704, 128.158534613637)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5808156608605, 126.951097055106)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.4693178724971, 126.899047750448)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.5219561491005, 129.320990484174)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5862570319556, 126.949603520674)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.2846363919919, 126.859844747573)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.5341694586312, 129.31169021536)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.5533412341942, 127.15481222237)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(37.6229336799008, 126.834450051224)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.5272027005698, 127.729537989501)},
{content: '<div>본사 <p> ㅌㅌ</div>',latlng: new kakao.maps.LatLng(35.1800322858988, 128.069545091753)}
                ];


for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
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

/* 아래와 같이도 할 수 있습니다 */
/*
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
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
