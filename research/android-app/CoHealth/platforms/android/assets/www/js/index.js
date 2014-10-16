/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        var i = 0;
        var myInterval = setInterval(function(){
          ++i;
          if (i < 10) {
            swapImage(i);
          }
        }, 200);

        setTimeout(function() {
          clearInterval(myInterval)
          $('.loadscreen').fadeOut();
        }, 2000);
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function swapImage(i) {
  $('.loadscreen .image-wrap img').attr('src', 'img/loadscreen/icn-' + (i) + '.png');
}


$(function() {
	//Enable swiping...
 $('#box').swipe( {
   //Generic swipe handler for all directions
   swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
     if (direction == 'right') {
       var prev = $('.box.activeBox').prev();
       if (prev.length > 0) {
         $('.box.activeBox').css({'left': '100%'});
         prev.css({'left': 0});
         $('.box.activeBox').removeClass('activeBox').prev().addClass('activeBox');
       }
     } else if (direction == 'left') {
       var next = $('.box.activeBox').next();
       if (next.length > 0) {
         $('.box.activeBox').css({'left': '-100%'});
         next.css({'left': 0});
         $('.box.activeBox').removeClass('activeBox').next().addClass('activeBox');
       }
     }

     //$(this).text("You swiped " + direction );
   },
   //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:0
 });
});
