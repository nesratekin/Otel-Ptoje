$(document).ready(function() {
    var height = $('.footer').height();
    $('.sect-t-footer').css('height', height);
});

window.addEventListener('load', function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(30.267074, -97.743473)
    });

    // See Github for class https://github.com/defvayne23/SVGMarker
    var marker = new SVGMarker({
      map: map,
      position: new google.maps.LatLng(30.282788, -97.731457),
      icon: {
        anchor: new google.maps.Point(30, 30.26),
        size: new google.maps.Size(60,30.26),
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg'
      }
    })
  });
