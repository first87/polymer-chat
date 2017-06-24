/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

import * as checkBrowserWithMinVersion from 'check-browser';
let evergreenBrowser = checkBrowserWithMinVersion({
    chrome: 49,
    firefox: 52,
    edge: 14,
    safari: 10
});
console.log('Import polyfills targeting an ' + (evergreenBrowser ? 'evergreen' : 'old-fashioned') + ' browser');

declare var System: any;

if (!evergreenBrowser) {
    System.import('./polyfills.es6');
}


/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


/** IE10, IE11 and all Firefox browsers require the following to support `@angular/animation`. **/
/** ALREADY IMPORTED WITH POLYMER COMPONENTS */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.



/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.



/***************************************************************************************************
 * APPLICATION IMPORTS
 */

if (!evergreenBrowser) {
    System.import('./polyfills.misc');
}
