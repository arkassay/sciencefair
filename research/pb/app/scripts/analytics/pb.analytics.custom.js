'use strict';
pb.namespace('analytics.customFunctions');

pb.analytics.customFunctions = {
  //link click tracking
  'customLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop15,eVar15',
    'linkTrackEvents' : '',
    'prop15' : '[link name]',
    'eVar15' : 'D=c15'
  },
  'exitPbSiteClick' : {
    'type' : 'onClick',
    'linkType' : 'e',
    'linkTrackVars' : 'prop16,evar16',
    'linkTrackEvents' : '',
    'prop15' : 'D=c16',
    'prop16' : '[link name]',
    'eVar15' : 'D=c16',
    'eVar16' : 'D=c16'
  },
  'globalMenuLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop17,eVar17',
    'linkTrackEvents' : '',
    'prop15' : 'D=c17',
    'prop17' : '[link name]',
    'eVar15' : 'D=c17',
    'eVar17' : 'D=c17'
  },
  'exitToOtherPbSiteClick' : {
    'type' : 'onClick',
    'linkType' : 'e',
    'linkTrackVars' : 'prop18,eVar18',
    'linkTrackEvents' : '',
    'prop15' : 'D=c18',
    'prop16' : 'D=c18',
    'prop18' : 'Exited to [PB Property Name]',
    'eVar15' : 'D=c18',
    'eVar16' : 'D=c18',
    'eVar18' : 'D=c18'
  },
  'myAccountLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'e',
    'linkTrackVars' : 'prop18,eVar18,events',
    'linkTrackEvents' : 'event15',
    'prop15' : 'D=c18',
    'prop16' : 'D=c18',
    'prop18' : 'Exited to MyAccount',
    'eVar15' : 'D=c18',
    'eVar16' : 'D=c18',
    'eVar18' : 'D=c18'
  },
  'internalPromotionLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'e',
    'linkTrackVars' : 'prop19,eVar19,events',
    'linkTrackEvents' : 'event28',
    'prop15' : 'D=c19',
    'prop16' : 'D=c19',
    'prop19' : '[Creative File Name]',
    'eVar15' : 'D=c19',
    'eVar16' : 'D=c19',
    'eVar19' : 'D=c19',
    'events' : 'event29'
  },
  'revealContentLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop20,eVar20',
    'linkTrackEvents' : '',
    'prop15' : 'D=c20',
    'prop20' : '[link name]',
    'eVar15' : 'D=c20',
    'eVar20' : 'D=c20'
  },
  'openGlobalMenuClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop20,eVar20',
    'linkTrackEvents' : '',
    'prop15' : 'D=c20',
    'prop20' : 'Global Menu Expand',
    'eVar15' : 'D=c20',
    'eVar20' : 'D=c20'
  },
  'downloadFileClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop21,eVar21',
    'linkTrackEvents' : '',
    'prop15' : 'D=c20',
    'prop20' : '[link name]',
    'eVar15' : 'D=c20',
    'eVar20' : 'D=c20'
  },
  'shareLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop24,eVar24,events',
    'linkTrackEvents' : 'event10',
    'prop15' : 'D=c24',
    'prop16' : 'D=c24',
    'prop24' : '[Share Method]',
    'eVar15' : 'D=c24',
    'eVar16' : 'D=c24',
    'eVar24' : 'D=c24',
    'events' : 'event10',
    'A' : 'Facebook',
    'B' : 'Twitter',
    'C' : 'LinkedIn',
    'D' : 'E-Mail'
  },
  'socialLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'e',
    'linkTrackVars' : 'prop23,eVar23,events',
    'linkTrackEvents' : 'event9',
    'prop15' : 'D=c23',
    'prop16' : 'D=c23',
    'prop18' : 'D=c23',
    'prop23' : 'Exited to [PB Social Channel]',
    'eVar15' : 'D=c23',
    'eVar16' : 'D=c23',
    'eVar18' : 'D=c23',
    'eVar23' : 'D=c23',
    'A' : 'Exited to Facebook',
    'B' : 'Exited to Twitter',
    'C' : 'Exited to LinkedIn',
    'D' : 'Exited to E-Mail'
  },
  'startTrialLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop25,eVar25,events',
    'linkTrackEvents' : 'event12',
    'prop15' : 'D=c25',
    'prop25' : '[Product Name]',
    'prop26' : 'Download Trial',
    'eVar15' : 'D=c25',
    'eVar25' : 'D=c25',
    'eVar26' : 'D=c25',
    'events' : 'event12'
  },
  'leadOptionLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop26,eVar26,events',
    'linkTrackEvents' : 'event18',
    'prop15' : 'D=c26',
    'prop26' : '[Lead Type]',
    'eVar15' : 'D=c26',
    'eVar26' : 'D=c26',
    'events' : 'event18',
    'A' : 'Live Chat',
    'B' : 'Call Request',
    'C' : 'Information Request',
    'D' : 'Contact Support',
    'E' : 'Newsletter Sign-Up',
    'F' : 'Site Registration'
  },
  'leadCompleteLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop26,eVar26,events',
    'linkTrackEvents' : 'event19',
    'prop15' : 'D=c26',
    'prop26' : '[Lead Type]',
    'eVar15' : 'D=c26',
    'eVar26' : 'D=c26',
    'events' : 'event19',
    'A' : 'Live Chat',
    'B' : 'Call Request',
    'C' : 'Information Request',
    'D' : 'Contact Support',
    'E' : 'Newsletter Sign-Up',
    'F' : 'Site Registration'
  },
  'addToCartLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'prop27,eVar27,events',
    'linkTrackEvents' : 'event25',
    'prop15' : '[link name]',
    'prop27' : '[Product Name]',
    'eVar15' : 'D=c15',
    'eVar27' : 'D=c27',
    'events' : 'event25'
  },
  'formCompleteLinkClick' : {
    'type' : 'onClick',
    'linkType' : 'o',
    'linkTrackVars' : 'eVar6,events',
    'linkTrackEvents' : '[event22 or event23]',
    'eVar6' : '[Form Name]',
    'events' : '[event22 or event23]'
  },
  'printLinkClick' : {
    'type' : 'onClick',
    'linkType' : '',
    'linkTrackVars' : 'events',
    'linkTrackEvents' : 'event11',
    'events' : 'event11'
  },

  //pageload tracking
  'searchResultsView' : {
    'type' : 'pageload',
    'prop7' : '[previous s.pageName]',
    'prop14' : '[search term]',
    'eVar14' : 'D=c14',
    'events' : 'event5'
  },
  'internalPromotionView' : {
    'type' : 'pageload',
    'prop19' : '[Creative File Name]',
    'eVar19' : 'D=c19',
    'events' : 'event29'
  },
  'videoPlayerEvents' : {
    'type' : 'pageload',
    'prop22' : '[Video Name]',
    'eVar22' : 'D=c22',
    'events' : 'event6,event7,event8'
  },
  'productPageView' : {
    'type' : 'pageload',
    'prop27' : '[Product Name]',
    'eVar27' : 'D=c27',
    'events' : 'event24'
  },
  'contentIndustryView' : {
    'type' : 'pageload',
    'prop41' : '[Content Industry]',
    'eVar41' : 'D=c41',
    'eVar42' : 'D=c42'
  }
};

/*pb.analytics.callCustomFunction('searchResultsView', {
  'previous s.pageName' : 'my last page viewed',
  'search term' : 'printers'
});*/

/*
pb.analytics.callCustomFunction('socialLinkClick', {
  'PB Social Channel' : 'Facebook'
});*/
