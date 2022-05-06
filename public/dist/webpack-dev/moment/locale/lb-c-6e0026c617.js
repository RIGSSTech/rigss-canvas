(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/lb"],{

/***/ "RAwQ":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/lb.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Luxembourgish [lb]\n//! author : mweimerskirch : https://github.com/mweimerskirch\n//! author : David Raison : https://github.com/kwisatz\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    function processRelativeTime(number, withoutSuffix, key, isFuture) {\n        var format = {\n            m: ['eng Minutt', 'enger Minutt'],\n            h: ['eng Stonn', 'enger Stonn'],\n            d: ['een Dag', 'engem Dag'],\n            M: ['ee Mount', 'engem Mount'],\n            y: ['ee Joer', 'engem Joer'],\n        };\n        return withoutSuffix ? format[key][0] : format[key][1];\n    }\n    function processFutureTime(string) {\n        var number = string.substr(0, string.indexOf(' '));\n        if (eifelerRegelAppliesToNumber(number)) {\n            return 'a ' + string;\n        }\n        return 'an ' + string;\n    }\n    function processPastTime(string) {\n        var number = string.substr(0, string.indexOf(' '));\n        if (eifelerRegelAppliesToNumber(number)) {\n            return 'viru ' + string;\n        }\n        return 'virun ' + string;\n    }\n    /**\n     * Returns true if the word before the given number loses the '-n' ending.\n     * e.g. 'an 10 Deeg' but 'a 5 Deeg'\n     *\n     * @param number {integer}\n     * @returns {boolean}\n     */\n    function eifelerRegelAppliesToNumber(number) {\n        number = parseInt(number, 10);\n        if (isNaN(number)) {\n            return false;\n        }\n        if (number < 0) {\n            // Negative Number --> always true\n            return true;\n        } else if (number < 10) {\n            // Only 1 digit\n            if (4 <= number && number <= 7) {\n                return true;\n            }\n            return false;\n        } else if (number < 100) {\n            // 2 digits\n            var lastDigit = number % 10,\n                firstDigit = number / 10;\n            if (lastDigit === 0) {\n                return eifelerRegelAppliesToNumber(firstDigit);\n            }\n            return eifelerRegelAppliesToNumber(lastDigit);\n        } else if (number < 10000) {\n            // 3 or 4 digits --> recursively check first digit\n            while (number >= 10) {\n                number = number / 10;\n            }\n            return eifelerRegelAppliesToNumber(number);\n        } else {\n            // Anything larger than 4 digits: recursively check first n-3 digits\n            number = number / 1000;\n            return eifelerRegelAppliesToNumber(number);\n        }\n    }\n\n    var lb = moment.defineLocale('lb', {\n        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split(\n            '_'\n        ),\n        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split(\n            '_'\n        ),\n        monthsParseExact: true,\n        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split(\n            '_'\n        ),\n        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),\n        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),\n        weekdaysParseExact: true,\n        longDateFormat: {\n            LT: 'H:mm [Auer]',\n            LTS: 'H:mm:ss [Auer]',\n            L: 'DD.MM.YYYY',\n            LL: 'D. MMMM YYYY',\n            LLL: 'D. MMMM YYYY H:mm [Auer]',\n            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',\n        },\n        calendar: {\n            sameDay: '[Haut um] LT',\n            sameElse: 'L',\n            nextDay: '[Muer um] LT',\n            nextWeek: 'dddd [um] LT',\n            lastDay: '[Gëschter um] LT',\n            lastWeek: function () {\n                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule\n                switch (this.day()) {\n                    case 2:\n                    case 4:\n                        return '[Leschten] dddd [um] LT';\n                    default:\n                        return '[Leschte] dddd [um] LT';\n                }\n            },\n        },\n        relativeTime: {\n            future: processFutureTime,\n            past: processPastTime,\n            s: 'e puer Sekonnen',\n            ss: '%d Sekonnen',\n            m: processRelativeTime,\n            mm: '%d Minutten',\n            h: processRelativeTime,\n            hh: '%d Stonnen',\n            d: processRelativeTime,\n            dd: '%d Deeg',\n            M: processRelativeTime,\n            MM: '%d Méint',\n            y: processRelativeTime,\n            yy: '%d Joer',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n        ordinal: '%d.',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 4, // The week that contains Jan 4th is the first week of the year.\n        },\n    });\n\n    return lb;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/lb.js?");

/***/ })

}]);