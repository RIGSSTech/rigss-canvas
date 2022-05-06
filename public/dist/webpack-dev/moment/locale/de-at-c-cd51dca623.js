(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/de-at"],{

/***/ "s+uk":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/de-at.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : German (Austria) [de-at]\n//! author : lluchs : https://github.com/lluchs\n//! author: Menelion Elensúle: https://github.com/Oire\n//! author : Martin Groller : https://github.com/MadMG\n//! author : Mikolaj Dadela : https://github.com/mik01aj\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    function processRelativeTime(number, withoutSuffix, key, isFuture) {\n        var format = {\n            m: ['eine Minute', 'einer Minute'],\n            h: ['eine Stunde', 'einer Stunde'],\n            d: ['ein Tag', 'einem Tag'],\n            dd: [number + ' Tage', number + ' Tagen'],\n            w: ['eine Woche', 'einer Woche'],\n            M: ['ein Monat', 'einem Monat'],\n            MM: [number + ' Monate', number + ' Monaten'],\n            y: ['ein Jahr', 'einem Jahr'],\n            yy: [number + ' Jahre', number + ' Jahren'],\n        };\n        return withoutSuffix ? format[key][0] : format[key][1];\n    }\n\n    var deAt = moment.defineLocale('de-at', {\n        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(\n            '_'\n        ),\n        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(\n            '_'\n        ),\n        monthsParseExact: true,\n        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(\n            '_'\n        ),\n        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),\n        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),\n        weekdaysParseExact: true,\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'DD.MM.YYYY',\n            LL: 'D. MMMM YYYY',\n            LLL: 'D. MMMM YYYY HH:mm',\n            LLLL: 'dddd, D. MMMM YYYY HH:mm',\n        },\n        calendar: {\n            sameDay: '[heute um] LT [Uhr]',\n            sameElse: 'L',\n            nextDay: '[morgen um] LT [Uhr]',\n            nextWeek: 'dddd [um] LT [Uhr]',\n            lastDay: '[gestern um] LT [Uhr]',\n            lastWeek: '[letzten] dddd [um] LT [Uhr]',\n        },\n        relativeTime: {\n            future: 'in %s',\n            past: 'vor %s',\n            s: 'ein paar Sekunden',\n            ss: '%d Sekunden',\n            m: processRelativeTime,\n            mm: '%d Minuten',\n            h: processRelativeTime,\n            hh: '%d Stunden',\n            d: processRelativeTime,\n            dd: processRelativeTime,\n            w: processRelativeTime,\n            ww: '%d Wochen',\n            M: processRelativeTime,\n            MM: processRelativeTime,\n            y: processRelativeTime,\n            yy: processRelativeTime,\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n        ordinal: '%d.',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 4, // The week that contains Jan 4th is the first week of the year.\n        },\n    });\n\n    return deAt;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/de-at.js?");

/***/ })

}]);