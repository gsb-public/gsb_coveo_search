<?php
/**
 * @file
 *    theme registry and preprocess functions for the default templates
 */

/**
 * Implements hook_theme().
 */
function gsb_feature_coveo_search_theme() {

  $registry = array();
  $coveo_search_template_dir = drupal_get_path('module', 'gsb_feature_coveo_search') . '/theme';

  $registry['coveo_search_page'] = array(
  'variables' => array('search_data' => NULL),
  'template' => 'coveo-search-page',
  'path' => $coveo_search_template_dir,
  );

  $registry['coveo_mygsb_search_page'] = array(
    'variables' => array('search_data' => NULL),
    'template' => 'coveo-mygsb-search-page',
    'path' => $coveo_search_template_dir,
  );

  // Block search form.
  $registry['coveo_search_block_form'] = array(
    'render element' => 'form',
    'template' => 'coveo-search-block-form',
    'path' => $coveo_search_template_dir,
  );

  // Block search suggests form.
  $registry['coveo_search_block_suggests_form'] = array(
    'render element' => 'form',
    'template' => 'coveo-search-block-suggests-form',
    'path' => $coveo_search_template_dir,
  );

  return $registry;
}

/**
 * Preprocess block search form
 */
function template_preprocess_coveo_search_block_form(&$vars) {

  $vars['block_search_form'] = array();
  $hidden = array();

  // Vars named after form keys so themers can print each element independently.
  foreach (element_children($vars['form']) as $key) {

    // token = FALSE on search form means '#type' wont be there
    // put the option check here while we wait and see if the tooken-to-false
    // solution for Varnish caching issue actually solves the problem in the wild
    $type = array_key_exists('#type', $vars['form'][$key]) ? $vars['form'][$key]['#type'] : '';
    if ($type == 'hidden' || $type == 'token') {
      $hidden[] = drupal_render($vars['form'][$key]);
    }
    else {
      $vars['block_search_form'][$key] = drupal_render($vars['form'][$key]);
    }
  }

  // No theming value on hidden elements, so collapse them.
  $vars['block_search_form']['hidden'] = implode($hidden);

  // Collect the whole shebang so the complete form can be rendered with one var.
  $vars['block_search_form_complete'] = implode($vars['block_search_form']);

  // Render template.
}

/**
 * Preprocess block search form
 */
function template_preprocess_coveo_search_block_suggests_form(&$vars) {

  $vars['block_search_form'] = array();
  $hidden = array();

  // Vars named after form keys so themers can print each element independently.
  foreach (element_children($vars['form']) as $key) {

    // token = FALSE on search form means '#type' wont be there
    // put the option check here while we wait and see if the tooken-to-false
    // solution for Varnish caching issue actually solves the problem in the wild
    $type = array_key_exists('#type', $vars['form'][$key]) ? $vars['form'][$key]['#type'] : '';
    if ($type == 'hidden' || $type == 'token') {
      $hidden[] = drupal_render($vars['form'][$key]);
    }
    else {
      $vars['block_search_form'][$key] = drupal_render($vars['form'][$key]);
    }
  }

  // No theming value on hidden elements, so collapse them.
  $vars['block_search_form']['hidden'] = implode($hidden);

  // Collect the whole shebang so the complete form can be rendered with one var.
  $vars['block_search_form_complete'] = implode($vars['block_search_form']);

  // Render template.
}
