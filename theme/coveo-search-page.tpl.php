<?php
// $Id$
/**
 * @file
 *    default theme implementation for displaying Coveo Search Form and Results
 * @see template_preprocess_coveo_search_form()
 * @see coveo-search-page.tpl.php
 */
//dsm($variables);
?>

<div id="search" class="CoveoSearchInterface" data-design="new">

  <div class="CoveoAnalytics"></div>
  <div class="coveo-tab-section"></div>
  <div class="coveo-search-section">
    <div class="CoveoSettings"></div>
    <div class="CoveoSearchbox" data-enable-omnibox="true" data-enable-partial-match="true" data-partial-match-threshold="1%" data-enable-wildcards="true" data-partial-match-keywords="1" data-inline="true" data-omnibox-timeout="1000"></div>
  </div>
  <div class="coveo-main-section">
    <div class="coveo-results-column">
      <div class="CoveoShareQuery"></div>
      <div class="CoveoPreferencesPanel">
        <div class="CoveoResultsPreferences"></div>
        <div class="CoveoResultsFiltersPreferences"></div>
      </div>
      <div class="CoveoTriggers"></div>
      <div class="CoveoBreadcrumb"></div>
      <div class="CoveoSearchAlerts"></div>
      <div class="coveo-results-header">
        <div class="coveo-summary-section">
          <span class="CoveoQuerySummary"></span>
          <span class="CoveoQueryDuration"></span>
        </div>
        <div class="coveo-result-layout-section">
          <span class="CoveoResultLayout"></span>
        </div>
        <div class="coveo-sort-section">
          <span class="CoveoSort" data-sort-criteria="relevancy" data-caption="Relevance"></span>
          <span class="CoveoSort" data-sort-criteria="date descending,date ascending" data-caption="Date"></span>
        </div>
      </div>
      <div class="CoveoHiddenQuery"></div>
      <div class="CoveoDidYouMean"></div>
      <div class="CoveoErrorReport" data-pop-up="false"></div>
      <div class="CoveoResultList" data-layout="list" data-wait-animation="fade" data-auto-select-fields-to-include="true">
        <script id="Default" class="result-template" type="text/html" data-layout="list"><div class="coveo-result-frame">
          <div class="coveo-result-row">
            <div class="coveo-result-cell" style="width:85px;text-align:center;padding-top:7px;">
        <span class="CoveoIcon">
        </span>
              <div class="CoveoQuickview">
              </div>
            </div>
            <div class="coveo-result-cell" style="padding-left:15px;">
              <div class="coveo-result-row">
                <div class="coveo-result-cell" style="font-size:18px;">
                  <a class="CoveoResultLink">
                  </a>
                </div>
                <div class="coveo-result-cell" style="width:120px; text-align:right; font-size:12px">
            <span class="CoveoFieldValue" data-field="@date" data-helper="date">
            </span>
                </div>
              </div>
              <div class="coveo-result-row">
                <div class="coveo-result-cell">
            <span class="CoveoExcerpt">
            </span>
                </div>
              </div>
            </div>
          </div>
          <div class="coveo-result-row">
            <div class="coveo-result-cell" style="width:85px;text-align:center">
            </div>
            <div class="coveo-result-cell" style="font-size:13px;padding-left: 15px;">
              <table class="CoveoFieldTable">
                <tbody>
                <tr data-field="@author" data-caption="Author">
                </tr>
                <tr data-field="@source" data-caption="Source">
                </tr>
                <tr data-field="@language" data-caption="Language">
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </script>
      </div>
      <div class="CoveoPager"></div>
      <div class="CoveoLogo"></div>
      <div class="CoveoResultsPerPage"></div>
    </div>

  </div>
  <div class="CoveoAnalyticsSuggestions" data-omnibox-z-index="53"></div>
  <div class="CoveoFieldSuggestions" data-field="@title" data-number-of-suggestions="5"></div>

</div>
