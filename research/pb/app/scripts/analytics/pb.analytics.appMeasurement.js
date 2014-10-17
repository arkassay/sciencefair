'use strict';
pb.namespace('analytics.appMeasurement');

pb.analytics.appMeasurement = {
  'getMarketObj' : function(url) {
    var appMeasurement = pb.analytics.appMeasurement;
    var marketObj = {};
    for (var prop in appMeasurement) {
      if (url.indexOf(prop) > -1) {
        marketObj = appMeasurement[prop];
        return marketObj;
      }
    }
  },
  'http://www.pitneybowes.com/au' : {
    'country' : 'Australia',
    'primary suite' : 'pbpubaus',
    'secondary suite' : 'pbasiapac',
    'page name prefix' : 'pb-aus',
    'language' : 'English'
  },
  'http://www.pitneybowes.com.br/' : {
    'country' : 'Brazil',
    'primary suite' : 'pbpubbra',
    'secondary suite' : 'pbamericas',
    'page name prefix' : 'pb-bra',
    'language' : 'Portuguese'
  },
  'http://www.pitneybowes.com/ca/en' : {
    'country' : 'Canada',
    'primary suite' : 'pbpubcan',
    'secondary suite' : 'pbamericas',
    'page name prefix' : 'pb-ca-en',
    'language' : 'English'
  },
  'http://www.pitneybowes.com/ca/fr' : {
    'country' : 'Canada',
    'primary suite' : 'pbpubcan',
    'secondary suite' : 'pbamericas',
    'page name prefix' : 'pb-ca-fr',
    'language' : 'French'
  },
  'http://www.pitneybowes.com/fr' : {
    'country' : 'France',
    'primary suite' : 'pbpubfra',
    'secondary suite' : 'pbeurope',
    'page name prefix' : 'pb-fra',
    'language' : 'French'
  },
  'http://www.pitneybowes.com/de' : {
    'country' : 'Germany',
    'primary suite' : 'pbpubger',
    'secondary suite' : 'pbeurope',
    'page name prefix' : 'pb-ger',
    'language' : 'German'
  },
  'http://www.pitneybowes.com/in' : {
    'country' : 'India',
    'primary suite' : 'pbpubind',
    'secondary suite' : 'pbasiapac',
    'page name prefix' : 'pb-ind',
    'language' : 'Indian'
  },
  'http://www.pitneybowes.it/' : {
    'country' : 'Italy',
    'primary suite' : 'pbpubital',
    'secondary suite' : 'pbeurope',
    'page name prefix' : 'pb-ital',
    'language' : 'Italian'
  },
  'http://www.pitneybowes.co.jp/' : {
    'country' : 'Japan',
    'primary suite' : 'pbpubjap',
    'secondary suite' : 'pbasiapac',
    'page name prefix' : 'pb-jap',
    'language' : 'Japanese'
  },
  'http://www.pitneybowes.com/no' : {
    'country' : 'Norway',
    'primary suite' : 'pbpubnor',
    'secondary suite' : 'pbeurope',
    'page name prefix' : 'pb-nor',
    'language' : 'Norwegian'
  },
  'http://www.pitneybowes.com/se' : {
    'country' : 'Sweden',
    'primary suite' : 'pbpubswe',
    'secondary suite' : 'pbeurope',
    'page name prefix' : 'pb-swe',
    'language' : 'Swedish'
  },
  'http://www.pitneybowes.co.uk/' : {
    'country' : 'United Kingdom',
    'primary suite' : 'pbpubuk',
    'secondary suite' : 'pbeurope',
    'page name prefix' : 'pb-uk',
    'language' : 'English'
  },
  'http://www.pitneybowes.com/us' : {
    'country' : 'United States',
    'primary suite' : 'pbpubus',
    'secondary suite' : 'pbamericas',
    'page name prefix' : 'pb-us',
    'language' : 'English'
  },
  'defaultInfo' : {
    'saccount' : 'pbpubdev'
  }
};
