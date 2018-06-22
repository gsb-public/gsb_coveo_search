// Globals

var gInQueryString = '';
var gBaseUrl = '';

(function ($) {

  Drupal.behaviors.gsb_coveo_search_page = {
    attach: function (context, settings) {
      gBaseUrl = settings.baseUrl;
    }
  };

  Drupal.gsb_coveo_search_page = Drupal.gsb_coveo_search_page || {};

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

  Coveo.$$(root).on('querySuccess', function (e, args) {
    var results = args.results.results;
    console.log(results);
  });

  Coveo.$$(root).on('state:change:q', function (e, args) {
    window.location.replace(gBaseUrl + "/search/?#q=" + args.value);
    console.log('The new ' + args.attribute + ' is now : ' + args.value);
  });

});
