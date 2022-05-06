(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/kn"],{

/***/ "PpIw":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/kn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Kannada [kn]\n//! author : Rajeev Naik : https://github.com/rajeevnaikte\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var symbolMap = {\n            1: '೧',\n            2: '೨',\n            3: '೩',\n            4: '೪',\n            5: '೫',\n            6: '೬',\n            7: '೭',\n            8: '೮',\n            9: '೯',\n            0: '೦',\n        },\n        numberMap = {\n            '೧': '1',\n            '೨': '2',\n            '೩': '3',\n            '೪': '4',\n            '೫': '5',\n            '೬': '6',\n            '೭': '7',\n            '೮': '8',\n            '೯': '9',\n            '೦': '0',\n        };\n\n    var kn = moment.defineLocale('kn', {\n        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split(\n            '_'\n        ),\n        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split(\n            '_'\n        ),\n        monthsParseExact: true,\n        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split(\n            '_'\n        ),\n        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),\n        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),\n        longDateFormat: {\n            LT: 'A h:mm',\n            LTS: 'A h:mm:ss',\n            L: 'DD/MM/YYYY',\n            LL: 'D MMMM YYYY',\n            LLL: 'D MMMM YYYY, A h:mm',\n            LLLL: 'dddd, D MMMM YYYY, A h:mm',\n        },\n        calendar: {\n            sameDay: '[ಇಂದು] LT',\n            nextDay: '[ನಾಳೆ] LT',\n            nextWeek: 'dddd, LT',\n            lastDay: '[ನಿನ್ನೆ] LT',\n            lastWeek: '[ಕೊನೆಯ] dddd, LT',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: '%s ನಂತರ',\n            past: '%s ಹಿಂದೆ',\n            s: 'ಕೆಲವು ಕ್ಷಣಗಳು',\n            ss: '%d ಸೆಕೆಂಡುಗಳು',\n            m: 'ಒಂದು ನಿಮಿಷ',\n            mm: '%d ನಿಮಿಷ',\n            h: 'ಒಂದು ಗಂಟೆ',\n            hh: '%d ಗಂಟೆ',\n            d: 'ಒಂದು ದಿನ',\n            dd: '%d ದಿನ',\n            M: 'ಒಂದು ತಿಂಗಳು',\n            MM: '%d ತಿಂಗಳು',\n            y: 'ಒಂದು ವರ್ಷ',\n            yy: '%d ವರ್ಷ',\n        },\n        preparse: function (string) {\n            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {\n                return numberMap[match];\n            });\n        },\n        postformat: function (string) {\n            return string.replace(/\\d/g, function (match) {\n                return symbolMap[match];\n            });\n        },\n        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,\n        meridiemHour: function (hour, meridiem) {\n            if (hour === 12) {\n                hour = 0;\n            }\n            if (meridiem === 'ರಾತ್ರಿ') {\n                return hour < 4 ? hour : hour + 12;\n            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {\n                return hour;\n            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {\n                return hour >= 10 ? hour : hour + 12;\n            } else if (meridiem === 'ಸಂಜೆ') {\n                return hour + 12;\n            }\n        },\n        meridiem: function (hour, minute, isLower) {\n            if (hour < 4) {\n                return 'ರಾತ್ರಿ';\n            } else if (hour < 10) {\n                return 'ಬೆಳಿಗ್ಗೆ';\n            } else if (hour < 17) {\n                return 'ಮಧ್ಯಾಹ್ನ';\n            } else if (hour < 20) {\n                return 'ಸಂಜೆ';\n            } else {\n                return 'ರಾತ್ರಿ';\n            }\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}(ನೇ)/,\n        ordinal: function (number) {\n            return number + 'ನೇ';\n        },\n        week: {\n            dow: 0, // Sunday is the first day of the week.\n            doy: 6, // The week that contains Jan 6th is the first week of the year.\n        },\n    });\n\n    return kn;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/kn.js?");

/***/ })

}]);