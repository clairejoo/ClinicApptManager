function initMap() {
    var sunflower = {lat: -27.444689, lng: 153.165810};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: sunflower
    });
    var marker = new google.maps.Marker({
        position: sunflower,
        map: map
    });
}