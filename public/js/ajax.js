'use strict';
$(function() {
  var images;
  window.MKsources = [];
  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };
  var renderImages = function(images) {
    var $main = $('#content');
    images.forEach(function(img) {
        window.MKsources.push(img.link);

      $main.append('<img src="' + img.link + '" />')
    });
    //saveToLocalStorage(images);
  };
  $.ajax({
    url: ('https://api.imgur.com/3/album/DDoWy'),
    method: 'GET',
    headers: {'Authorization': 'Client-ID f5b73f08e320402'}
  })
  .done(function(res) {// 'res' convention for 'response'
    images = res.data.images
    renderImages(images);
    kittenKombat();
  })
  .fail(function(err) {
    console.log(err);
  });
//renderImages(images);  calling this here won't do squat b/c the asynch request hasn't come back from imgur so the images variable has not been defined.  MUST call renderImages(images); inside .done(function...

});