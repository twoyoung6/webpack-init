/*! 版权所有，翻版必究----开发环境----- */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/matting copy.js":
/*!*****************************!*\
  !*** ./app/matting copy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof2 = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function (global, factory) {\n    ( false ? undefined : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n})(undefined, function () {\n    'use strict';\n\n    var _typeof = typeof Symbol === 'function' && _typeof2(Symbol.iterator) === 'symbol' ? function (obj) {\n        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n    } : function (obj) {\n        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n    };\n\n    // import is from '@meitu/is';\n    function matting(options) {\n        console.log(options);\n        if (!options.image) {\n            console.error('there must be a image contains mask and result.');\n            return;\n        }\n        var image = options.image;\n        var ops = extend({\n            export_quality: .9,\n            export_type: 'base64', // canvas dom or base64;\n            mask_zoom: 0.5, // 0 < mask_zoom <= 1\n            success: function success() {},\n            error: function error() {}\n        }, options);\n\n        var origin = void 0,\n            originCtx = void 0,\n            mask = void 0,\n            maskCtx = void 0,\n            result = void 0,\n            resultCtx = void 0;\n\n        loadImage(image, function (imgEl) {\n            console.dir(image);\n            // 绘制原图；\n            origin = document.createElement('canvas');\n            originCtx = origin.getContext('2d');\n            origin.width = imgEl.naturalWidth;\n            origin.height = imgEl.naturalHeight / 2;\n            originCtx.drawImage(imgEl, 0, 0);\n\n            // 绘制mask；\n            mask = document.createElement('canvas');\n            maskCtx = mask.getContext('2d');\n            mask.width = imgEl.naturalWidth * ops.mask_zoom;\n            mask.height = imgEl.naturalHeight * ops.mask_zoom / 2;\n            maskCtx.drawImage(imgEl, 0, -imgEl.naturalHeight * ops.mask_zoom / 2, imgEl.naturalWidth * ops.mask_zoom, imgEl.naturalHeight * ops.mask_zoom);\n\n            // 去除mask图黑色背景；\n            var maskData = maskCtx.getImageData(0, 0, mask.width, mask.height);\n            filter(maskData.data);\n            maskCtx.putImageData(maskData, 0, 0);\n\n            result = document.createElement('canvas');\n            resultCtx = result.getContext('2d');\n            result.width = imgEl.naturalWidth;\n            result.height = imgEl.naturalHeight / 2;\n\n            resultCtx.drawImage(mask, 0, 0, imgEl.naturalWidth, imgEl.naturalHeight / 2);\n\n            resultCtx.globalCompositeOperation = 'source-in';\n\n            resultCtx.drawImage(origin, 0, 0);\n\n            if (ops.export_type == 'canvas') {\n                ops.success(result);\n            } else {\n                ops.success(result.toDataURL('image/png', ops.quality));\n            }\n        }, function (err) {\n            ops.error(err);\n        });\n    }\n\n    function loadImage(image, cbk, error) {\n        if (typeof image == 'string') {\n            var img = new Image();\n            img.crossOrigin = '*';\n            img.onload = function () {\n                cbk(img);\n            };\n            img.onerror = function () {\n                console.error('load image error!');\n                error(image);\n            };\n            img.src = image + ('?' + new Date().getTime());\n        } else {\n            cbk(image);\n        }\n    }\n    function filter(data) {\n        for (var i = 0; i < data.length; i += 4) {\n            var r = data[i],\n                g = data[i + 1],\n                b = data[i + 2];\n\n            if (r <= 30 && g <= 30 && b <= 30) {\n                data[i + 3] = 0;\n            }\n        }\n    }\n    function extend(obj1, obj2) {\n        for (var k in obj2) {\n            if (obj2.hasOwnProperty(k)) {\n                if (_typeof(obj2[k]) == 'object') {\n                    if (_typeof(obj1[k]) !== 'object' || obj1[k] === null) {\n                        obj1[k] = {};\n                    }\n                    extend(obj1[k], obj2[k]);\n                } else {\n                    obj1[k] = obj2[k];\n                }\n            }\n        }\n        return obj1;\n    }\n\n    return matting;\n});\n//# sourceMappingURL=matting.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWF0dGluZyBjb3B5LmpzP2Q4MjciXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIm1hdHRpbmciLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsImltYWdlIiwiZXJyb3IiLCJvcHMiLCJleHRlbmQiLCJleHBvcnRfcXVhbGl0eSIsImV4cG9ydF90eXBlIiwibWFza196b29tIiwic3VjY2VzcyIsIm9yaWdpbiIsIm9yaWdpbkN0eCIsIm1hc2siLCJtYXNrQ3R4IiwicmVzdWx0IiwicmVzdWx0Q3R4IiwibG9hZEltYWdlIiwiaW1nRWwiLCJkaXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJuYXR1cmFsV2lkdGgiLCJoZWlnaHQiLCJuYXR1cmFsSGVpZ2h0IiwiZHJhd0ltYWdlIiwibWFza0RhdGEiLCJnZXRJbWFnZURhdGEiLCJmaWx0ZXIiLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwidG9EYXRhVVJMIiwicXVhbGl0eSIsImVyciIsImNiayIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwiRGF0ZSIsImdldFRpbWUiLCJpIiwibGVuZ3RoIiwiciIsImciLCJiIiwib2JqMSIsIm9iajIiLCJrIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQyxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtBQUMzQixtQ0FBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQWpELEdBQStEQSxPQUFPRCxPQUFQLEdBQWlCRCxTQUFoRixHQUNBLFFBQTZDRyxvQ0FBT0gsT0FB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UDtBQUNIOztBQUVELFdBQU9wRCxPQUFQO0FBRUMsQ0F0SEEsQ0FBRDtBQXVIQSIsImZpbGUiOiIuL2FwcC9tYXR0aW5nIGNvcHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcclxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxyXG5cdChnbG9iYWwuTWF0dGluZyA9IGZhY3RvcnkoKSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/ICdzeW1ib2wnIDogdHlwZW9mIG9iajsgfTtcclxuXHJcbi8vIGltcG9ydCBpcyBmcm9tICdAbWVpdHUvaXMnO1xyXG5mdW5jdGlvbiBtYXR0aW5nKG9wdGlvbnMpIHtcclxuICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgIGlmICghb3B0aW9ucy5pbWFnZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoZXJlIG11c3QgYmUgYSBpbWFnZSBjb250YWlucyBtYXNrIGFuZCByZXN1bHQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGltYWdlID0gb3B0aW9ucy5pbWFnZTtcclxuICAgIHZhciBvcHMgPSBleHRlbmQoe1xyXG4gICAgICAgIGV4cG9ydF9xdWFsaXR5OiAuOSxcclxuICAgICAgICBleHBvcnRfdHlwZTogJ2Jhc2U2NCcsIC8vIGNhbnZhcyBkb20gb3IgYmFzZTY0O1xyXG4gICAgICAgIG1hc2tfem9vbTogMC41LCAvLyAwIDwgbWFza196b29tIDw9IDFcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge30sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge30sXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwLFxyXG4gICAgICAgIG9yaWdpbkN0eCA9IHZvaWQgMCxcclxuICAgICAgICBtYXNrID0gdm9pZCAwLFxyXG4gICAgICAgIG1hc2tDdHggPSB2b2lkIDAsXHJcbiAgICAgICAgcmVzdWx0ID0gdm9pZCAwLFxyXG4gICAgICAgIHJlc3VsdEN0eCA9IHZvaWQgMDtcclxuXHJcbiAgICBsb2FkSW1hZ2UoaW1hZ2UsIGZ1bmN0aW9uIChpbWdFbCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKGltYWdlKTtcclxuICAgICAgICAvLyDnu5jliLbljp/lm77vvJtcclxuICAgICAgICBvcmlnaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBvcmlnaW5DdHggPSBvcmlnaW4uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBvcmlnaW4ud2lkdGggPSBpbWdFbC5uYXR1cmFsV2lkdGg7XHJcbiAgICAgICAgb3JpZ2luLmhlaWdodCA9IGltZ0VsLm5hdHVyYWxIZWlnaHQgLyAyO1xyXG4gICAgICAgIG9yaWdpbkN0eC5kcmF3SW1hZ2UoaW1nRWwsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDnu5jliLZtYXNr77ybXHJcbiAgICAgICAgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hc2tDdHggPSBtYXNrLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbWFzay53aWR0aCA9IGltZ0VsLm5hdHVyYWxXaWR0aCAqIG9wcy5tYXNrX3pvb207XHJcbiAgICAgICAgbWFzay5oZWlnaHQgPSBpbWdFbC5uYXR1cmFsSGVpZ2h0ICogb3BzLm1hc2tfem9vbSAvIDI7XHJcbiAgICAgICAgbWFza0N0eC5kcmF3SW1hZ2UoaW1nRWwsIDAsIC1pbWdFbC5uYXR1cmFsSGVpZ2h0ICogb3BzLm1hc2tfem9vbSAvIDIsIGltZ0VsLm5hdHVyYWxXaWR0aCAqIG9wcy5tYXNrX3pvb20sIGltZ0VsLm5hdHVyYWxIZWlnaHQgKiBvcHMubWFza196b29tKTtcclxuXHJcbiAgICAgICAgLy8g5Y676ZmkbWFza+Wbvum7keiJsuiDjOaZr++8m1xyXG4gICAgICAgIHZhciBtYXNrRGF0YSA9IG1hc2tDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIG1hc2sud2lkdGgsIG1hc2suaGVpZ2h0KTtcclxuICAgICAgICBmaWx0ZXIobWFza0RhdGEuZGF0YSk7XHJcbiAgICAgICAgbWFza0N0eC5wdXRJbWFnZURhdGEobWFza0RhdGEsIDAsIDApO1xyXG5cclxuICAgICAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICByZXN1bHRDdHggPSByZXN1bHQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICByZXN1bHQud2lkdGggPSBpbWdFbC5uYXR1cmFsV2lkdGg7XHJcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGltZ0VsLm5hdHVyYWxIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICByZXN1bHRDdHguZHJhd0ltYWdlKG1hc2ssIDAsIDAsIGltZ0VsLm5hdHVyYWxXaWR0aCwgaW1nRWwubmF0dXJhbEhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICByZXN1bHRDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XHJcblxyXG4gICAgICAgIHJlc3VsdEN0eC5kcmF3SW1hZ2Uob3JpZ2luLCAwLCAwKTtcclxuXHJcbiAgICAgICAgaWYgKG9wcy5leHBvcnRfdHlwZSA9PSAnY2FudmFzJykge1xyXG4gICAgICAgICAgICBvcHMuc3VjY2VzcyhyZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wcy5zdWNjZXNzKHJlc3VsdC50b0RhdGFVUkwoJ2ltYWdlL3BuZycsIG9wcy5xdWFsaXR5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIG9wcy5lcnJvcihlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZSwgY2JrLCBlcnJvcikge1xyXG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnKic7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2JrKGltZyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignbG9hZCBpbWFnZSBlcnJvciEnKTtcclxuICAgICAgICAgICAgZXJyb3IoaW1hZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlICsgKCc/JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2JrKGltYWdlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmaWx0ZXIoZGF0YSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgdmFyIHIgPSBkYXRhW2ldLFxyXG4gICAgICAgICAgICBnID0gZGF0YVtpICsgMV0sXHJcbiAgICAgICAgICAgIGIgPSBkYXRhW2kgKyAyXTtcclxuXHJcbiAgICAgICAgaWYgKHIgPD0gMzAgJiYgZyA8PSAzMCAmJiBiIDw9IDMwKSB7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDNdID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZXh0ZW5kKG9iajEsIG9iajIpIHtcclxuICAgIGZvciAodmFyIGsgaW4gb2JqMikge1xyXG4gICAgICAgIGlmIChvYmoyLmhhc093blByb3BlcnR5KGspKSB7XHJcbiAgICAgICAgICAgIGlmIChfdHlwZW9mKG9iajJba10pID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3R5cGVvZihvYmoxW2tdKSAhPT0gJ29iamVjdCcgfHwgb2JqMVtrXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iajFba10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV4dGVuZChvYmoxW2tdLCBvYmoyW2tdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iajFba10gPSBvYmoyW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajE7XHJcbn1cclxuXHJcbnJldHVybiBtYXR0aW5nO1xyXG5cclxufSkpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0dGluZy5qcy5tYXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/matting copy.js\n");

/***/ }),

/***/ "./app/views/matting.vue":
/*!*******************************!*\
  !*** ./app/views/matting.vue ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matting.vue?vue&type=template&id=d725b1be& */ \"./app/views/matting.vue?vue&type=template&id=d725b1be&\");\n/* harmony import */ var _matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matting.vue?vue&type=script&lang=js& */ \"./app/views/matting.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!api.isRecorded('d725b1be')) {\n      api.createRecord('d725b1be', component.options)\n    } else {\n      api.reload('d725b1be', component.options)\n    }\n    module.hot.accept(/*! ./matting.vue?vue&type=template&id=d725b1be& */ \"./app/views/matting.vue?vue&type=template&id=d725b1be&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matting.vue?vue&type=template&id=d725b1be& */ \"./app/views/matting.vue?vue&type=template&id=d725b1be&\");\n(function () {\n      api.rerender('d725b1be', {\n        render: _matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n  }\n}\ncomponent.options.__file = \"app/views/matting.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvbWF0dGluZy52dWU/N2QzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUEwRTtBQUM5RixjQUFjLG1CQUFPLENBQUMsdURBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw0R0FBOEMsRUFBRTtBQUFBO0FBQ3RFO0FBQ0EsZ0JBQWdCLGtGQUFNO0FBQ3RCLHlCQUF5QiwyRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGIiwiZmlsZSI6Ii4vYXBwL3ZpZXdzL21hdHRpbmcudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNzI1YjFiZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tYXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWF0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXERlbW9cXFxcd2VicGFjay1pbml0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q3MjViMWJlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q3MjViMWJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q3MjViMWJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tYXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNzI1YjFiZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkNzI1YjFiZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL3ZpZXdzL21hdHRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/views/matting.vue\n");

/***/ }),

/***/ "./app/views/matting.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./app/views/matting.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./matting.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/views/matting.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvbWF0dGluZy52dWU/MjhkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1SyxDQUFnQiwwT0FBRyxFQUFDIiwiZmlsZSI6Ii4vYXBwL3ZpZXdzL21hdHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hdHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/views/matting.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./app/views/matting.vue?vue&type=template&id=d725b1be&":
/*!**************************************************************!*\
  !*** ./app/views/matting.vue?vue&type=template&id=d725b1be& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./matting.vue?vue&type=template&id=d725b1be& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/views/matting.vue?vue&type=template&id=d725b1be&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matting_vue_vue_type_template_id_d725b1be___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvbWF0dGluZy52dWU/ZjQ3MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9hcHAvdmlld3MvbWF0dGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDcyNWIxYmUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hdHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ3MjViMWJlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/views/matting.vue?vue&type=template&id=d725b1be&\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/views/matting.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/views/matting.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar Matting = __webpack_require__(/*! ../matting copy */ \"./app/matting copy.js\");\nexports.default = {\n  data: function data(params) {\n    return {\n      mattingEditorOptions: {\n        // 图片最大高度\n        maxImageHeight: 1000,\n\n        // 图片最大宽度\n        maxImageWidth: 1000,\n\n        maxFileSize: 9 * 1024 * 1024,\n\n        // 画布背景色值\n        canvasBackgroundColor: \"#e6e6e6\"\n      }\n    };\n  },\n  methods: {\n    matting: function matting() {\n      console.log('抠图');\n      var file = document.getElementById('file').files[0];\n      var mat = new Matting(file);\n      mat.createStream();\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL21hdHRpbmcudnVlPzJkYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7a0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUZBOztBQUlBO0FBQ0EsMkJBTEE7O0FBT0Esb0NBUEE7O0FBU0E7QUFDQTtBQVZBO0FBREE7QUFjQSxHQWhCQTtBQWlCQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFqQkEsQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL2FwcC92aWV3cy9tYXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8IS0tIDEuMCDlvJXlhaVucG3ljIXnmoTmlrnlvI8gLS0+XHJcbiAgICAgIDwhLS0gPG1hdHRpbmctZWRpdG9yXHJcbiAgICAgICAgICByZWY9XCJtYXR0aW5nRWRpdG9yXCJcclxuICAgICAgICAgIDpvcHRpb25zPVwibWF0dGluZ0VkaXRvck9wdGlvbnNcIlxyXG4gICAgICAgICAgQHVwZGF0ZT1cIm9uTWF0dGluZ1VwZGF0ZVwiXHJcbiAgICAgICAgICBAZXJyb3I9XCJvbk1hdHRpbmdFcnJvclwiXHJcbiAgICAgID5cclxuICAgICAgICAgIDxkaXYgc2xvdD1cImxvZ29cIj5sb2dvIOazqOWFpTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItdGlwc1wiPuaUr+aMgeWklumDqOe7hOS7tuazqOWFpe+8iOmcgOiHquWumuS5iSBDU1PvvIk8L2Rpdj5cclxuICAgICAgPC9tYXR0aW5nLWVkaXRvcj4gLS0+XHJcbiAgICAgIDwhLS0gMi4wIOW8leWFpeacrOWcsOiEmuacrOeahOaWueW8jyAtLT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwibWF0dGluZ1wiPuW8gOWni+aKoOWbvjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmNvbnN0IE1hdHRpbmcgPSByZXF1aXJlKCcuLi9tYXR0aW5nIGNvcHknKVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWF0dGluZ0VkaXRvck9wdGlvbnM6IHtcclxuICAgICAgLy8g5Zu+54mH5pyA5aSn6auY5bqmXHJcbiAgICAgIG1heEltYWdlSGVpZ2h0OiAxMDAwLFxyXG4gIFxyXG4gICAgICAvLyDlm77niYfmnIDlpKflrr3luqZcclxuICAgICAgbWF4SW1hZ2VXaWR0aDogMTAwMCxcclxuICBcclxuICAgICAgbWF4RmlsZVNpemU6IDkgKiAxMDI0ICogMTAyNCxcclxuICBcclxuICAgICAgLy8g55S75biD6IOM5pmv6Imy5YC8XHJcbiAgICAgIGNhbnZhc0JhY2tncm91bmRDb2xvcjogXCIjZTZlNmU2XCIsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG1hdHRpbmcgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5oqg5Zu+JylcclxuICAgICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdO1xyXG4gICAgICB2YXIgbWF0ID0gbmV3IE1hdHRpbmcoZmlsZSk7XHJcbiAgICAgIG1hdC5jcmVhdGVTdHJlYW0oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/views/matting.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/views/matting.vue?vue&type=template&id=d725b1be&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/views/matting.vue?vue&type=template&id=d725b1be& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"input\", { attrs: { type: \"file\", id: \"file\" } }),\n    _vm._v(\" \"),\n    _c(\"button\", { on: { click: _vm.matting } }, [_vm._v(\"开始抠图\")])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvbWF0dGluZy52dWU/NGZlZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsMkJBQTJCLEVBQUU7QUFDdkQ7QUFDQSxrQkFBa0IsTUFBTSxxQkFBcUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9hcHAvdmlld3MvbWF0dGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDcyNWIxYmUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBpZDogXCJmaWxlXCIgfSB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5tYXR0aW5nIH0gfSwgW192bS5fdihcIuW8gOWni+aKoOWbvlwiKV0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/views/matting.vue?vue&type=template&id=d725b1be&\n");

/***/ })

}]);