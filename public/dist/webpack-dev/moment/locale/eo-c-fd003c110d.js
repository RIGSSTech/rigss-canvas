(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/eo"],{

/***/ "Zduo":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/eo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Esperanto [eo]\n//! author : Colin Dean : https://github.com/colindean\n//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia\n//! comment : miestasmia corrected the translation by colindean\n//! comment : Vivakvo corrected the translation by colindean and miestasmia\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var eo = moment.defineLocale('eo', {\n        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split(\n            '_'\n        ),\n        monthsShort: 'jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec'.split('_'),\n        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),\n        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),\n        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'YYYY-MM-DD',\n            LL: '[la] D[-an de] MMMM, YYYY',\n            LLL: '[la] D[-an de] MMMM, YYYY HH:mm',\n            LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',\n            llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm',\n        },\n        meridiemParse: /[ap]\\.t\\.m/i,\n        isPM: function (input) {\n            return input.charAt(0).toLowerCase() === 'p';\n        },\n        meridiem: function (hours, minutes, isLower) {\n            if (hours > 11) {\n                return isLower ? 'p.t.m.' : 'P.T.M.';\n            } else {\n                return isLower ? 'a.t.m.' : 'A.T.M.';\n            }\n        },\n        calendar: {\n            sameDay: '[Hodiaŭ je] LT',\n            nextDay: '[Morgaŭ je] LT',\n            nextWeek: 'dddd[n je] LT',\n            lastDay: '[Hieraŭ je] LT',\n            lastWeek: '[pasintan] dddd[n je] LT',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: 'post %s',\n            past: 'antaŭ %s',\n            s: 'kelkaj sekundoj',\n            ss: '%d sekundoj',\n            m: 'unu minuto',\n            mm: '%d minutoj',\n            h: 'unu horo',\n            hh: '%d horoj',\n            d: 'unu tago', //ne 'diurno', ĉar estas uzita por proksimumo\n            dd: '%d tagoj',\n            M: 'unu monato',\n            MM: '%d monatoj',\n            y: 'unu jaro',\n            yy: '%d jaroj',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}a/,\n        ordinal: '%da',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 7, // The week that contains Jan 7th is the first week of the year.\n        },\n    });\n\n    return eo;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/eo.js?");

/***/ })

}]);