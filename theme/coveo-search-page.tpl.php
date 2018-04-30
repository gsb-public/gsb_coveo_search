<?php
// $Id$
/**
 * @file
 *    default theme implementation for displaying Coveo Search Results Page
 * @see coveo-search-page.tpl.php
 */
//dsm($variables);
?>

<div id="search" class="CoveoSearchInterface" data-enable-history="true" data-design="new" data-maximum-age="0">

    <div class="CoveoAnalytics"></div>
    <div class="coveo-search-section">
        <div class="CoveoSearchbox" data-enable-omnibox="true"></div>
    </div>
    <div class="coveo-main-section">
        <div class="coveo-results-column">
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
            </div>
            <div class="CoveoHiddenQuery"></div>
            <div class="CoveoDidYouMean"></div>
            <div class="CoveoErrorReport" data-pop-up="false"></div>
            <div class="CoveoResultList" data-layout="list" data-wait-animation="fade" data-auto-select-fields-to-include="true">
                <script id="Default" class="result-template" type="text/underscore" data-layout="list">
                  <% var featuredFound = "";
                  if (isTopResult) {
                    featuredFound = " featured-result";
                  }
                  %>
                  <div class="coveo-result-frame<%= featuredFound %>">
                    <div class="coveo-result-row">
                        <div class="coveo-result-cell">
                            <div class="coveo-result-row">
                                <div class="coveo-result-cell" style="font-size:18px;">
                                    <a class="CoveoResultLink">
                                    </a>
                                </div>
                                <div class="coveo-result-cell" style="width:120px; text-align:right; font-size:12px">
                                </div>
                            </div>
                            <div class="coveo-result-row">
                                <div class="coveo-result-cell"><span class="CoveoExcerpt"></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="coveo-result-row">
                        <div class="coveo-result-cell" style="font-size:13px;">
                        <span class="CoveoFieldValue" data-field="@printableuri" data-helper="anchor"data-html-value="true"></span>
                        </div>
                    </div>
                    </div>
                </script>
            </div>
            <div class="CoveoPager"></div>
            <div class="CoveoResultsPerPage"></div>
        </div>

    </div>
    <div class="CoveoFieldSuggestions" data-field="@title" data-number-of-suggestions="5" data-query-override="@source=('MyGSB website', 'Stanford GSB public')"></div>

</div>

