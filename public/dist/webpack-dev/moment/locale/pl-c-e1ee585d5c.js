(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/pl"],{

/***/ "jVdC":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/pl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Polish [pl]\n//! author : Rafal Hirsz : https://github.com/evoL\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(\n            '_'\n        ),\n        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(\n            '_'\n        ),\n        monthsParse = [\n            /^sty/i,\n            /^lut/i,\n            /^mar/i,\n            /^kwi/i,\n            /^maj/i,\n            /^cze/i,\n            /^lip/i,\n            /^sie/i,\n            /^wrz/i,\n            /^paź/i,\n            /^lis/i,\n            /^gru/i,\n        ];\n    function plural(n) {\n        return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;\n    }\n    function translate(number, withoutSuffix, key) {\n        var result = number + ' ';\n        switch (key) {\n            case 'ss':\n                return result + (plural(number) ? 'sekundy' : 'sekund');\n            case 'm':\n                return withoutSuffix ? 'minuta' : 'minutę';\n            case 'mm':\n                return result + (plural(number) ? 'minuty' : 'minut');\n            case 'h':\n                return withoutSuffix ? 'godzina' : 'godzinę';\n            case 'hh':\n                return result + (plural(number) ? 'godziny' : 'godzin');\n            case 'ww':\n                return result + (plural(number) ? 'tygodnie' : 'tygodni');\n            case 'MM':\n                return result + (plural(number) ? 'miesiące' : 'miesięcy');\n            case 'yy':\n                return result + (plural(number) ? 'lata' : 'lat');\n        }\n    }\n\n    var pl = moment.defineLocale('pl', {\n        months: function (momentToFormat, format) {\n            if (!momentToFormat) {\n                return monthsNominative;\n            } else if (/D MMMM/.test(format)) {\n                return monthsSubjective[momentToFormat.month()];\n            } else {\n                return monthsNominative[momentToFormat.month()];\n            }\n        },\n        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),\n        monthsParse: monthsParse,\n        longMonthsParse: monthsParse,\n        shortMonthsParse: monthsParse,\n        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split(\n            '_'\n        ),\n        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),\n        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'DD.MM.YYYY',\n            LL: 'D MMMM YYYY',\n            LLL: 'D MMMM YYYY HH:mm',\n            LLLL: 'dddd, D MMMM YYYY HH:mm',\n        },\n        calendar: {\n            sameDay: '[Dziś o] LT',\n            nextDay: '[Jutro o] LT',\n            nextWeek: function () {\n                switch (this.day()) {\n                    case 0:\n                        return '[W niedzielę o] LT';\n\n                    case 2:\n                        return '[We wtorek o] LT';\n\n                    case 3:\n                        return '[W środę o] LT';\n\n                    case 6:\n                        return '[W sobotę o] LT';\n\n                    default:\n                        return '[W] dddd [o] LT';\n                }\n            },\n            lastDay: '[Wczoraj o] LT',\n            lastWeek: function () {\n                switch (this.day()) {\n                    case 0:\n                        return '[W zeszłą niedzielę o] LT';\n                    case 3:\n                        return '[W zeszłą środę o] LT';\n                    case 6:\n                        return '[W zeszłą sobotę o] LT';\n                    default:\n                        return '[W zeszły] dddd [o] LT';\n                }\n            },\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: 'za %s',\n            past: '%s temu',\n            s: 'kilka sekund',\n            ss: translate,\n            m: translate,\n            mm: translate,\n            h: translate,\n            hh: translate,\n            d: '1 dzień',\n            dd: '%d dni',\n            w: 'tydzień',\n            ww: translate,\n            M: 'miesiąc',\n            MM: translate,\n            y: 'rok',\n            yy: translate,\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n        ordinal: '%d.',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 4, // The week that contains Jan 4th is the first week of the year.\n        },\n    });\n\n    return pl;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/pl.js?");

/***/ }),

/***/ "vyqu":
/*!********************************************!*\
  !*** ./ui/ext/custom_moment_locales/pl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n__webpack_require__(/*! moment/locale/pl */ \"jVdC\");\n\nconst moment = __webpack_require__(/*! moment */ \"wd/R\");\n\nconst data = moment.localeData('pl');\ndata._monthsShort = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru'];\n\n//# sourceURL=webpack:///./ui/ext/custom_moment_locales/pl.js?");

/***/ })

}]);