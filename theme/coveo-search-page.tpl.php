<?php
// $Id$
/**
 * @file
 *    default theme implementation for displaying Coveo Search Results Page
 * @see coveo-search-page.tpl.php
 */
//dsm($variables);
?>

<div id="search" class="CoveoSearchInterface" data-enable-history="true" data-design="new" data-enable-duplicate-filtering="true" data-maximum-age="0">
    <div class="CoveoAnalytics"></div>
    <!--
    <div class="coveo-tab-section">
        <div class="CoveoTab" data-id="MyGSB" data-caption="MyGSB" data-expression="@gsbaudience=&quot;MyGSBDrupal_mba1&quot;" data-enable-duplicate-filtering="true" data-pipeline="mygsb-pipeline"></div>
        <a class="CoveoTab" data-id="Public" data-caption="Public" data-expression="@gsbaudience=&quot;public&quot;" data-enable-duplicate-filtering="true" data-pipeline="mygsb-pipeline"></a>
    </div>
    -->
    <div class="coveo-search-section">
        <div class="CoveoSearchbox" data-enable-omnibox="true" data-enable-query-extension-addon="true" data-inline="true"></div>
    </div>
    <div class="coveo-main-section">
        <!--
        <div class="coveo-facet-column">
            <div class="CoveoFacet" data-title="Type" data-field="@content_type" data-tab="All"></div>
        </div>
        -->
        <div class="coveo-results-column">
            <div class="CoveoShareQuery"></div>
            <div class="CoveoTriggers"></div>
            <div class="CoveoBreadcrumb"></div>
            <div class="coveo-results-header">
                <div class="coveo-summary-section">
                    <span class="CoveoQuerySummary"></span>
                    <span class="CoveoQueryDuration"></span>
                </div>
                <div class="coveo-result-layout-section">
                    <span class="CoveoResultLayout"></span>
                </div>
                <!--
                <div class="coveo-sort-section">
                    <span class="CoveoSort" data-sort-criteria="relevancy" data-caption="Relevance"></span>
                    <span class="CoveoSort" data-sort-criteria="date descending,date ascending" data-caption="Date"></span>
                </div>
                -->
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
                            </div>
                            <div class="coveo-result-row">
                                <div class="coveo-result-cell"><span class="CoveoExcerpt"></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="coveo-result-row">
                        <div class="coveo-result-cell" style="font-size:13px;">
                            <span class="CoveoFieldValue" data-field="@printableuri" data-helper="anchor" data-html-value="true"></span>
                        </div>
                    </div>
                    </div>
                </script>
            </div>
            <div class="CoveoPager"></div>
            <div class="CoveoResultsPerPage"></div>
        </div>
    </div>
</div>
