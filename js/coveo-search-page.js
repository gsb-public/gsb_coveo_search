// Globals

var gInQueryString = '';
var gBaseUrl = '';

(function ($) {

  Drupal.behaviors.gsb_feature_coveo_search_page = {
    attach: function (context, settings) {
      gInQueryString = settings.gsb_feature_coveo_search_page.search_query;
      gBaseUrl = settings.baseUrl;
    }
  };

  Drupal.gsb_feature_coveo_search_page = Drupal.gsb_feature_coveo_search_page || {};

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {

  var coveoOrgId = '';
  var coveoSearchtoken = '';
  var coveoProxySearchEndPoint = gBaseUrl + "/coveo-search/";
  var coveoProxyAnalyticsEndPoint = gBaseUrl + "/coveo-analytics/";

  Coveo.SearchEndpoint.configureCloudV2Endpoint(
    coveoOrgId,
    coveoSearchtoken,
    coveoProxySearchEndPoint
  );

  Coveo.Analytics.options.endpoint.defaultValue = coveoProxyAnalyticsEndPoint;
//Coveo.Analytics.options.searchHub.defaultValue = 'Test4';
  Coveo.Analytics.options.organization.defaultValue = coveoOrgId;

  document.addEventListener("afterComponentsInitialization", function () {
    var analytics = document.querySelector('.CoveoAnalytics');
    if (analytics != null) {
      Coveo.get(analytics).setOriginContext('Hosted');
    }
  });

  var root = Coveo.$$(document).find('#search');

  Coveo.init(document.querySelector('#search'));

  Coveo.$$(root).on('buildingQuery', function (e, args) {

    var queryString = gInQueryString;

    var root = Coveo.$$(document).find('#search');
    var qsModel = Coveo.state(root);

    args.queryBuilder.enableDebug = true;

    if (qsModel.attributes.q == "" && gInQueryString != null && gInQueryString != "") {
      gInQueryString = "";
      args.queryBuilder.expression.add(queryString);
      qsModel.set("q", queryString);
    }
    
  });

  Coveo.$$(root).on('querySuccess', function (e, args) {
    var results = args.results.results;
    console.log(results);
  });

  Coveo.$$(root).on('state:change:q', function (e, args) {
    console.log('The new value of ' + args.attribute + ' is now : ' + args.value);
  });

});

