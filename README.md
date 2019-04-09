# Angular portlet ng2-search-filter demo

This repo is a demo that illustrates how to integrate the external library [ng2-search-filter](https://www.npmjs.com/package/ng2-search-filter) with a Liferay 7.0 Angular portlet

## How to use this project?

1) `git clone` the repo on your disk and compile/deploy it into a Liferay 7.0 environment with a patching level of dxp-44-7010 (or major) fix pack 
2) Place the portlet on a page, refresh the page with F5
3) Start searching by typing some letters. All hits containing the typed string will be filtered:

![Preview of ng2-search-filter Liferay porlet](https://github.com/alffox/my-npm-angular-portlet-ng2-search-filter/blob/master/images/ng2-search-filter.gif)

4) The portlet is created by using the example at: https://www.npmjs.com/package/ng2-search-filter#usage

## Compatibility

Latest: Chrome, Firefox, MS Edge, MS Internet Explorer 11

## Liferay and external JS libraries

Please note, on 7.0 dxp-44-7010 fix pack+ or 7.1+ versions, the most popular external JS libraries can be integrated in a different an official way:

**7.0:**

- https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/using-npm-in-your-portlets
- https://dev.liferay.com/develop/reference/-/knowledge_base/7-0/project-templates

**7.1**

- https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-1/using-npm-in-your-portlets
- https://dev.liferay.com/develop/reference/-/knowledge_base/7-1/project-templates
- https://github.com/liferay/liferay-npm-build-tools/wiki/How-to-use-generator-liferay-bundle