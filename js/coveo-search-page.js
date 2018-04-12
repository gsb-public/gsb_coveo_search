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
    var coveoProxyEndPoint = gBaseUrl + "/coveo-search/";

    Coveo.SearchEndpoint.configureCloudV2Endpoint(
        coveoOrgId,
        coveoSearchtoken,
        coveoProxyEndPoint
    );

    var root = Coveo.$$(document).find('#search');

    Coveo.init(root);

    Coveo.$$(root).on('buildingQuery', function (e, args) {

        var queryString = gInQueryString;

        var root = Coveo.$$(document).find('#search');
        var qsModel = Coveo.state(root);

        args.queryBuilder.enableDebug = true;

        if (qsModel.attributes.q == "" && gInQueryString != null && gInQueryString != "") {
            gInQueryString = "";
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