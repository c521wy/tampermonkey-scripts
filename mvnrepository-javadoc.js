// ==UserScript==
// @name            从mvnrepository打开javadoc
// @namespace       http://tampermonkey.caiweiqiang.cn/
// @version         0.1
// @description     从mvnrepository打开javadoc
// @author          CWQ
// @match           https://mvnrepository.com/artifact/*/*/*
// @grant           none
// @require         https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';
    let url = window.location.href;
    let paths = url.split('/');
    if (paths.length !== 7) {
        return;
    }
    let version = paths[paths.length - 1];
    let artifactId = paths[paths.length - 2];
    let groupId = paths[paths.length - 3];
    let javadocUrl = `https://javadoc.io/doc/${groupId}/${artifactId}/${version}`;

    $('table.grid > tbody').eq(0).append(`<tr><th>JavaDoc</th><td><a href="${javadocUrl}" target="_blank">${javadocUrl}</a></td></tr>`);

})();