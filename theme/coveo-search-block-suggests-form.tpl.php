<?php
// $Id$
/**
 * @file
 *    default theme implementation for the search block form
 * variables of interest
 * - variables['form'] : the form elements array, pre-render
 * - variables['block_search_form']['hidden'] : hidden form elements collapsed + rendered
 * - variables['block_serach_form'] : form elements rendered and keyed by original form keys
 * - variables['block_search_form_complete'] : the entire form collapsed and rendered
 *
 * @see template_preprocess_coveo_search_block_form()
 */
//dpm($variables);
?>
<div class="container-inline">
	<?php if (empty($variables['form']['#block']->subject)) : ?>
	<?php endif; ?>
	<div id="search" class="CoveoSearchInterface" data-enable-history="true" data-design="new" data-maximum-age="0">
	    <div class="CoveoAnalytics"></div>
	    <div class="coveo-search-section">
	        <div class="CoveoSearchbox" data-enable-omnibox="true" data-enable-query-extension-addon="true" data-inline="true"></div>
	    </div>
    </div>
</div>
