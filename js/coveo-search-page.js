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
  Coveo.Analytics.options.organization.defaultValue = coveoOrgId;

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

  Coveo.$$(root).on('newResultsDisplayed', function (e, args) {
    if (getUrlVars()['q'] == undefined || getUrlVars()['q'] == '') {
      var featured = document.querySelectorAll(".featured-result");
      for (var index = 0; index < featured.length; index++) {
        featured[index].classList.remove("featured-result");
      }
    }
  });

  Coveo.$$(root).on('state:change:q', function (e, args) {
    console.log('The new value of ' + args.attribute + ' is now : ' + args.value);
  });

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[#&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

});
