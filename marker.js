

// 마커 클러스터러를 생성합니다 
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});


var data = {"positions": 
            [
{"index": 1,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.54699,"lng":127.09598},
{"index": 2,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5591566870621,"lng":126.925365266111},
{"index": 3,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1385425826116,"lng":129.101478129467},
{"index": 4,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5551838865696,"lng":126.929262377425},
{"index": 5,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.2061851763803,"lng":129.07944301057},
{"index": 6,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.561110808242,"lng":126.983126838689},
{"index": 7,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.8618712965506,"lng":127.741025082042},
{"index": 8,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4716015677854,"lng":126.628180641422},
{"index": 9,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1023341092745,"lng":129.026118158561},
{"index": 10,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1021556227042,"lng":129.025797930182},
{"index": 11,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.4754230122511,"lng":128.76666923366},
{"index": 12,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.9328282469392,"lng":126.953076288342},
{"index": 13,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.3388489227613,"lng":127.393666019664},
{"index": 14,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.520412849636,"lng":126.974276416158},
{"index": 15,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1551396752096,"lng":129.061547737583},
{"index": 16,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8160419946965,"lng":127.110467062113},
{"index": 17,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":38.204411106385,"lng":128.590386712852},
{"index": 18,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5861127393089,"lng":127.029491485179},
{"index": 19,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5038064184498,"lng":127.021307166177},
{"index": 20,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5515570438736,"lng":126.92161115892},
{"index": 21,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5541306005136,"lng":126.922074729295},
{"index": 22,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.3623216151748,"lng":127.350004832253},
{"index": 23,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5522786290875,"lng":126.922805462949},
{"index": 24,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4904139480146,"lng":127.020796784724},
{"index": 25,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1723585075495,"lng":126.905453948666},
{"index": 26,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1547410320025,"lng":129.118278891544},
{"index": 27,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5160812509734,"lng":127.023690571663},
{"index": 28,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.8071172286377,"lng":127.140203460375},
{"index": 29,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.2895741575267,"lng":127.001037520054},
{"index": 30,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8395389676689,"lng":128.756688032185},
{"index": 31,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5102741294887,"lng":127.082277181247},
{"index": 32,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4935817832702,"lng":126.725419556605},
{"index": 33,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1352918629627,"lng":129.100609114487},
{"index": 34,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.174574933144,"lng":126.913899807877},
{"index": 35,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.7958876918786,"lng":127.106604165871},
{"index": 36,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5928868752118,"lng":126.965605246273},
{"index": 37,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4507641113045,"lng":127.145930037497},
{"index": 38,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8600833755707,"lng":127.126391248806},
{"index": 39,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.2377349133095,"lng":129.083710374295},
{"index": 40,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5242973213048,"lng":127.05018281937},
{"index": 41,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.3338665802184,"lng":127.446172146688},
{"index": 42,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.729637475468,"lng":128.27079056365},
{"index": 43,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.0272682814297,"lng":129.37257233594},
{"index": 44,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.0708030360945,"lng":129.059318549408},
{"index": 45,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8683586295024,"lng":128.597550891758},
{"index": 46,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":33.5113326469674,"lng":126.518523474523},
{"index": 47,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.6128428958675,"lng":127.031205472385},
{"index": 48,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8516960387224,"lng":128.590929371256},
{"index": 49,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5908469508323,"lng":127.018727735888},
{"index": 50,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.5211487428878,"lng":129.335736299457},
{"index": 51,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.3623264074398,"lng":127.33577420148},
{"index": 52,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.2894118911074,"lng":127.004461326651},
{"index": 53,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.3204980111739,"lng":129.181034357678},
{"index": 54,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.533386315416,"lng":127.00615481678},
{"index": 55,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4134614682581,"lng":126.677356808408},
{"index": 56,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.9203903710932,"lng":128.544117202499},
{"index": 57,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.6548937405482,"lng":127.483748168719},
{"index": 58,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4949198711044,"lng":127.01493134206},
{"index": 59,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.6498569560833,"lng":127.14496345268},
{"index": 60,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5568677031741,"lng":127.16927880543},
{"index": 61,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.3701400758914,"lng":127.106143301855},
{"index": 62,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5350236507627,"lng":126.961576811847},
{"index": 63,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4054963059466,"lng":126.898058182},
{"index": 64,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":34.8679505440057,"lng":128.690696900811},
{"index": 65,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1631705954322,"lng":128.98452978748},
{"index": 66,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.6074848259531,"lng":127.485204511951},
{"index": 67,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.6517247852139,"lng":126.583067483375},
{"index": 68,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8605969006342,"lng":128.591930876652},
{"index": 69,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.2568584758502,"lng":128.599126050604},
{"index": 70,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":33.5092581556944,"lng":126.510945146481},
{"index": 71,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.6436615570115,"lng":126.632550392475},
{"index": 72,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8266726222733,"lng":127.103067057482},
{"index": 73,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8200355499111,"lng":127.148109740624},
{"index": 74,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.0974851956494,"lng":128.994861818623},
{"index": 75,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.322042495906,"lng":127.955918935858},
{"index": 76,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5053512727203,"lng":127.104746544052},
{"index": 77,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.9908140715653,"lng":127.093383249566},
{"index": 78,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.3234866404448,"lng":127.12285239871},
{"index": 79,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.7897308944045,"lng":127.136443195456},
{"index": 80,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.6413739535781,"lng":129.354632207196},
{"index": 81,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4742312731091,"lng":126.976250291619},
{"index": 82,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8435719299122,"lng":128.611437207197},
{"index": 83,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.1809749840857,"lng":128.202945263411},
{"index": 84,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5789571864258,"lng":126.931689733724},
{"index": 85,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":33.4907725375505,"lng":126.493148170009},
{"index": 86,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.4217592533025,"lng":128.674091332257},
{"index": 87,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.464055405701,"lng":126.715354411917},
{"index": 88,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5947587762321,"lng":127.100999174898},
{"index": 89,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.7239966558994,"lng":127.047867173185},
{"index": 90,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8668017150532,"lng":128.592373837674},
{"index": 91,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5605737272667,"lng":126.812391074852},
{"index": 92,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.7869222485748,"lng":126.989660103417},
{"index": 93,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1036864480291,"lng":129.020686260602},
{"index": 94,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.0638399489926,"lng":127.0685652303},
{"index": 95,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.3434464372864,"lng":127.943821813509},
{"index": 96,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.512521267219,"lng":127.400548056481},
{"index": 97,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1528665383798,"lng":126.904199039714},
{"index": 98,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1732384455462,"lng":129.176082844468},
{"index": 99,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.0823942013235,"lng":129.403304717259},
{"index": 100,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.510436655981,"lng":127.039740700365},
{"index": 101,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.627816673285,"lng":127.449698660219},
{"index": 102,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5919462475691,"lng":127.01817545576},
{"index": 103,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.3871470455608,"lng":127.125336543892},
{"index": 104,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.8994838384811,"lng":128.608095507306},
{"index": 105,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5553162352353,"lng":127.140384478947},
{"index": 106,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.0962209276297,"lng":128.43314679004},
{"index": 107,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5828559229855,"lng":126.919078570085},
{"index": 108,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5160009838415,"lng":128.727988720327},
{"index": 109,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4842936367519,"lng":127.037963020357},
{"index": 110,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.545025759656,"lng":126.954293382457},
{"index": 111,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.2362471730463,"lng":128.867761801529},
{"index": 112,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4015753669196,"lng":127.11717457214},
{"index": 113,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.9519103800125,"lng":127.910640408775},
{"index": 114,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4915264929713,"lng":126.854637495258},
{"index": 115,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":36.1243564797531,"lng":128.095170523461},
{"index": 116,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.1571516930704,"lng":128.158534613637},
{"index": 117,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5808156608605,"lng":126.951097055106},
{"index": 118,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.4693178724971,"lng":126.899047750448},
{"index": 119,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.5219561491005,"lng":129.320990484174},
{"index": 120,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5862570319556,"lng":126.949603520674},
{"index": 121,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.2846363919919,"lng":126.859844747573},
{"index": 122,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.5341694586312,"lng":129.31169021536},
{"index": 123,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.5533412341942,"lng":127.15481222237},
{"index": 124,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":37.6229336799008,"lng":126.834450051224},
{"index": 125,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.5272027005698,"lng":127.729537989501},
{"index": 126,"content": '<div>본사 <p> ㅌㅌ</div>',"lat":35.1800322858988,"lng":128.069545091753}]
           }



  
var imageSrc = 'MicrosoftTeams-image (8).png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(30, 33), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

var markers = data.positions.map(function(position) {
    return new kakao.maps.Marker({
        position : new kakao.maps.LatLng(position.lat, position.lng)
    });
});





    // 마커에 표시할 인포윈도우를 생성합니다 
    for (var i=0; i<data.positions.length; i++){
  
    var infowindow = new kakao.maps.InfoWindow({
        content:   data.positions[i] // 인포윈도우에 표시할 내용
    });
    }

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));


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






// 클러스터러에 마커들을 추가합니다
 clusterer.addMarkers(markers);
