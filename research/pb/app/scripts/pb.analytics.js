'use strict';

pb.namespace('analytics');

//REMOVE FAKE URL/PATHNAME VARIABLES WHEN IN AEM
//ADDING OMNITURE SCRIPT TAGS

pb.analytics = (function() {

  var functionObj;

  function pageLoadFunctions() {
    appMeasurementAdditions();
  }

  function appMeasurementAdditions() {
    /*UNCOMMENT THIS TO TEST REAL URL/PATH
    var url = location.href;
    var path = location.pathname;*/

    /*COMMENT OUT AND/OR CHANGE URL/PATH TO TEST*/
    var url = 'http://www.pitneybowes.com/au/me/page.html';
    var pathName = '/au/me/page.html';

    var marketObj = pb.analytics.appMeasurement.getMarketObj(url);

    if (marketObj === undefined) {
      //set the market object equal to the default settings (dev site??)
      marketObj = pb.analytics.appMeasurement.getMarketObj('defaultInfo');
      s.account = marketObj.saccount;
    } else {

      //1. Primary and Secondary suite
      s.account = marketObj['primary suite'] +
                      ', ' + marketObj['secondary suite'];

      //2. Page Name
      s.pageName = marketObj['page name prefix'] + getPageName(pathName);

      //3. Channel
      s.channel = marketObj['page name prefix'];

      //4. Hierarchy
      s.hier1 = marketObj['page name prefix'] + getHierarchy(pathName);

      //5. CID
      /*****************CHECK IF THIS IS CORRECT/NEEDED
      (not in example s_code)******************/
      s.Util.getQueryParam('cid');


      //6. New/Repeat Visit
      s.prop1 = s.getNewRepeat(90, 's_gnr');
      if (s.prop1) {
        s.eVar1 = 'D=c1'; //s.eVar1 = s.getValOnce('D=c1', 's_evar1', 0);
      }

      //7. Days Since Last Visit (prop2,eVar2)
      s.prop2 = s.getDaysSinceLastVisit('s_lv');
      if (s.prop2) {
        s.eVar2 = 'D=c2'; //s.eVar2 = s.getValOnce('D=c2', 's_evar2', 0);
      }

      //8. Page Name (prop3)
      s.prop3 = 'D=pageName';

      //9. Country, Language
      s.prop4 = marketObj['country'];
      s.prop5 = marketObj['language'];

      //10. URL (prop10)
      s.prop10 = document.location.href;

      //11. Previous Page (prop7)
      s.prop7 = s.getPreviousValue(s.pageName, 'gpv_pn', 'event1');

      //12. Site Folders (prop8-11)
      /*********Matches example s_code**********/
      //getFolderName
      var myfolders = location.pathname.split('/');
      myfolders[myfolders.length - 1] = myfolders[myfolders.length - 1]
        .replace('.html', '');

      if (myfolders[1])
        s.prop8 = myfolders[1];

      if (myfolders[2])
        s.prop9 = myfolders[2];

      if (myfolders[3])
        s.prop10 = myfolders[3];

      if (myfolders[4])
        s.prop11 = myfolders[4];


      //13. Link URL, Host Page
      /*****************CHECK IF THIS IS CORRECT******************/
      s.prop16 = s.eVar16 = 'D=oid';
      s.prop17 = s.eVar17 = 'D=oid'; //pid??

      //14. Full Referring Domain (evar9)
      s.eVar9 = s.getFullReferringDomains();

      //15. Visit Start (event1)
      s.event1 = s.getVisitStart('s_visit');

      //16. Page View (event2)
      /*****************Matches Example s_code******************/
      s.event2 = s.apl(s.events, 'event1', ',', 1);

      //17. Click Through, Click Past (event3-4)
      /*****************Matches example s_code******************/
      if (!s.campaign) {
        s.campaign = s.Util.getQueryParam('cid', ':');
        s.campaign = s.getValOnce(s.campaign, 's_campaign', 0);
        s.clickThruQuality('cid', 'event3', 'event4');
      }


      s.track();
      //logAppMeasurementData(url);

    }

  }

  function logAppMeasurementData(url) {
    console.log('AppMeasurement url is: ' + url);
    console.log('s.account = ' + s.account);
    console.log('s.pageName = ' + s.pageName);
    console.log('s.channel = ' + s.channel);
    console.log('s.hier1 = ' + s.hier1);
    console.log('s.cid = ' + s.cid);
    console.log('s.prop1 = ' + s.prop1);
    console.log('s.eVar1 = ' + s.eVar1);
    console.log('s.prop2 = ' + s.prop2);
    console.log('s.eVar2 = ' + s.eVar2);
    console.log('s.prop3 = ' + s.prop3);
    console.log('s.prop4 = ' + s.prop4);
    console.log('s.prop5 = ' + s.prop5);
    console.log('s.prop10 = ' + s.prop10);
    console.log('s.prop7 = ' + s.prop7);
    console.log('s.prop16 = ' + s.prop16);
    console.log('s.prop17 = ' + s.prop17);
    console.log('12. folder names prop 8-11: ' +
        s.prop8, s.prop9, s.prop10, s.prop11);
    console.log('s.eVar9 = ' + s.eVar9);
    console.log('s.event1 = ' + s.event1);
    console.log('s.event2 = ' + s.event2);
  }

  function getPageName(pathName) {
    if (pathName == '/') {
      return ':home';
    }
    return pathName.replace(/\//g, ':');
  }

  function getHierarchy(pathName) {
    if (pathName == '/') {
      return '|home';
    }
    pathName = pathName.replace(/\//g, '|');
    pathName = pathName.replace(/.html/g, '');
    return pathName;
  }

  function callCustomFunction(functionName, attrObj) {
    functionObj = pb.analytics.customFunctions[functionName];

    clearPreviouslySetValues();
    if (attrObj) {
      setDynamicVars(attrObj);
    } else {
      setSObjProperties(function() {
        callTrackingFunctions();
      });
    }
  }

  function callTrackingFunctions() {
    if (functionObj.type == 'pageload') {
      //for tracking a pageview
      s.track();
    } else if (functionObj.type == 'onClick') {
      //for tracking link clicks
      s.trackLink();
    }
  }


  //clear any values that were set previously
  function clearPreviouslySetValues() {

    //reset link type, link vars, and track events
    s.linkType = '';
    s.linkTrackVars = '';
    s.linkTrackEvents = '';

    var eVarMax = 78,
        propMax = 78,
        i = 0, j = 0;


    //reset all eVar (up to 77,
    //increase/decrease number based on actual number of evar's that can be set)
    for (i; i < eVarMax; i++) {
      s['eVar' + i] = '';
    }

    //reset all prop (up to 77,
    //increase/decrease number based on actual number of prop's that can be set)
    for (j; j < propMax; j++) {
      s['prop' + j] = '';
    }
  }

  function setDynamicVars(attrObj) {
    var attrObjLength = getObjectLength(attrObj),
        i = 0;

    //Loop through all dynamically set properties (from onclick event)
    for (var prop in attrObj) {
      var propertyToSet = prop;
      var customValue = attrObj[prop];

      //loop through custom function object to find the matching property value
      for (var prop in functionObj) {
        if (functionObj[prop].indexOf('[' + propertyToSet + ']') > -1) {

          var staticContentObj =
              getStaticContent(functionObj[prop]);

          //set the function's dynamic prop value to the
          //matching passed attribute's value
          functionObj[prop] = staticContentObj.preText +
                              customValue + staticContentObj.afterText;
        }
      }

      ++i;
      //after attribute object search/replace complete
      //set the S object properties to track
      if (i === attrObjLength) {
        setSObjProperties(function() {
          callTrackingFunctions();
        });
      }
    }
  }

  function getStaticContent(fullPropValue) {
    var staticContentObj = {};

    //check for text before the dynamic content
    var fullValueArr = fullPropValue.split('[');

    if (fullValueArr.length > 1) {
      staticContentObj.preText = fullValueArr[0];
    }

    //check for text after the dynamic content
    var fullValueArr = fullPropValue.split(']');

    if (fullValueArr.length > 1) {
      staticContentObj.afterText = fullValueArr[1];
    }

    return staticContentObj;
  }

  function setSObjProperties(callback) {
    for (var prop in functionObj) {
      s[prop] = functionObj[prop];
    }
    callback();
  }

  function getObjectLength(attrObj) {
    var total = 0;

    for (var prop in attrObj) {
      ++total;
    }

    return total;
  }

  return{
    callCustomFunction: callCustomFunction,
    pageLoadFunctions: pageLoadFunctions
  };

})();
