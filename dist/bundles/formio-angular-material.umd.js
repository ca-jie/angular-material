(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/flex-layout'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/checkbox'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/list'), require('@angular/material/chips'), require('@angular/material/expansion'), require('@angular/material/card'), require('@angular/material/stepper'), require('@angular/material/tabs'), require('@angular/material/table'), require('@angular/material/datepicker'), require('@angular/material/progress-spinner'), require('@angular/material/icon'), require('@angular/material/tooltip'), require('@angular/material/menu'), require('@angular/material/core'), require('formiojs/Webform.js'), require('formiojs/components/_classes/component/Component.js'), require('formiojs/components/textfield/TextField.js'), require('formiojs/validator/Validator.js'), require('lodash/unescape'), require('lodash/get'), require('formiojs/components/password/Password.js'), require('formiojs/components/email/Email.js'), require('formiojs/components/url/Url.js'), require('formiojs/components/phonenumber/PhoneNumber.js'), require('formiojs/components/number/Number.js'), require('lodash'), require('formiojs/components/currency/Currency.js'), require('formiojs/components/day/Day.js'), require('formiojs/utils/utils.js'), require('formiojs/components/hidden/Hidden.js'), require('formiojs/components/html/HTML.js'), require('@angular/cdk/keycodes'), require('formiojs/components/tags/Tags.js'), require('formiojs/components/button/Button.js'), require('formiojs/components/textarea/TextArea.js'), require('lodash/isNil'), require('formiojs/components/panel/Panel.js'), require('formiojs/components/columns/Columns.js'), require('formiojs/components/container/Container.js'), require('formiojs/components/tabs/Tabs.js'), require('formiojs/components/datetime/DateTime.js'), require('formiojs/components/checkbox/Checkbox.js'), require('formiojs/components/fieldset/Fieldset.js'), require('formiojs/components/content/Content.js'), require('formiojs/components/signature/Signature.js'), require('formiojs/components/survey/Survey.js'), require('formiojs/components/radio/Radio.js'), require('formiojs/components/selectboxes/SelectBoxes.js'), require('formiojs/components/select/Select.js'), require('formiojs/components/well/Well.js'), require('formiojs/components/datagrid/DataGrid.js'), require('@angular/cdk/drag-drop'), require('formiojs/components/editgrid/EditGrid.js'), require('formiojs/components/Components'), require('lodash/isString'), require('formiojs/components/table/Table.js'), require('formiojs/Wizard'), require('formiojs/displays/Displays'), require('formiojs/components/time/Time.js'), require('moment'), require('@formio/angular')) :
    typeof define === 'function' && define.amd ? define('@formio/angular-material', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/flex-layout', '@angular/material/input', '@angular/material/button', '@angular/material/form-field', '@angular/material/checkbox', '@angular/material/radio', '@angular/material/select', '@angular/material/list', '@angular/material/chips', '@angular/material/expansion', '@angular/material/card', '@angular/material/stepper', '@angular/material/tabs', '@angular/material/table', '@angular/material/datepicker', '@angular/material/progress-spinner', '@angular/material/icon', '@angular/material/tooltip', '@angular/material/menu', '@angular/material/core', 'formiojs/Webform.js', 'formiojs/components/_classes/component/Component.js', 'formiojs/components/textfield/TextField.js', 'formiojs/validator/Validator.js', 'lodash/unescape', 'lodash/get', 'formiojs/components/password/Password.js', 'formiojs/components/email/Email.js', 'formiojs/components/url/Url.js', 'formiojs/components/phonenumber/PhoneNumber.js', 'formiojs/components/number/Number.js', 'lodash', 'formiojs/components/currency/Currency.js', 'formiojs/components/day/Day.js', 'formiojs/utils/utils.js', 'formiojs/components/hidden/Hidden.js', 'formiojs/components/html/HTML.js', '@angular/cdk/keycodes', 'formiojs/components/tags/Tags.js', 'formiojs/components/button/Button.js', 'formiojs/components/textarea/TextArea.js', 'lodash/isNil', 'formiojs/components/panel/Panel.js', 'formiojs/components/columns/Columns.js', 'formiojs/components/container/Container.js', 'formiojs/components/tabs/Tabs.js', 'formiojs/components/datetime/DateTime.js', 'formiojs/components/checkbox/Checkbox.js', 'formiojs/components/fieldset/Fieldset.js', 'formiojs/components/content/Content.js', 'formiojs/components/signature/Signature.js', 'formiojs/components/survey/Survey.js', 'formiojs/components/radio/Radio.js', 'formiojs/components/selectboxes/SelectBoxes.js', 'formiojs/components/select/Select.js', 'formiojs/components/well/Well.js', 'formiojs/components/datagrid/DataGrid.js', '@angular/cdk/drag-drop', 'formiojs/components/editgrid/EditGrid.js', 'formiojs/components/Components', 'lodash/isString', 'formiojs/components/table/Table.js', 'formiojs/Wizard', 'formiojs/displays/Displays', 'formiojs/components/time/Time.js', 'moment', '@formio/angular'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.formio = global.formio || {}, global.formio['angular-material'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.flexLayout, global.ng.material.input, global.ng.material.button, global.ng.material.formField, global.ng.material.checkbox, global.ng.material.radio, global.ng.material.select, global.ng.material.list, global.ng.material.chips, global.ng.material.expansion, global.ng.material.card, global.ng.material.stepper, global.ng.material.tabs, global.ng.material.table, global.ng.material.datepicker, global.ng.material.progressSpinner, global.ng.material.icon, global.ng.material.tooltip, global.ng.material.menu, global.ng.material.core, global.Webform, global.FormioComponent$2, global.TextFieldComponent, global.Validator, global.unescape, global.get, global.PasswordComponent, global.EmailComponent, global.UrlComponent, global.PhoneNumberComponent, global.NumberComponent, global._, global.CurrencyComponent, global.DayComponent, global.utils_js, global.HiddenComponent, global.HtmlComponent, global.ng.cdk.keycodes, global.TagsComponent, global.ButtonComponent, global.TextAreaComponent, global.isNil, global.PanelComponent, global.ColumnsComponent, global.ContainerComponent, global.TabsComponent, global.DateTimeComponent, global.CheckboxComponent, global.FieldsetComponent, global.ContentComponent, global.SignatureComponent, global.SurveyComponent, global.RadioComponent, global.SelectBoxesComponent, global.SelectComponent, global.WellComponent, global.DataGridComponent, global.ng.cdk.dragDrop, global.EditGridComponent, global.Components$2, global.isString, global.TableComponent, global.Wizard, global.Displays, global.TimeComponent, global.moment_, global.angular));
}(this, (function (exports, core, common, forms, flexLayout, input, button, formField, checkbox, radio, select, list, chips, expansion, card, stepper, tabs, table, datepicker, progressSpinner, icon, tooltip, menu, core$1, Webform, FormioComponent$2, TextFieldComponent, Validator, unescape, get, PasswordComponent, EmailComponent, UrlComponent, PhoneNumberComponent, NumberComponent, _, CurrencyComponent, DayComponent, utils_js, HiddenComponent, HtmlComponent, keycodes, TagsComponent, ButtonComponent, TextAreaComponent, isNil, PanelComponent, ColumnsComponent, ContainerComponent, TabsComponent, DateTimeComponent, CheckboxComponent, FieldsetComponent, ContentComponent, SignatureComponent, SurveyComponent, RadioComponent, SelectBoxesComponent, SelectComponent, WellComponent, DataGridComponent, dragDrop, EditGridComponent, Components$2, isString, TableComponent, Wizard, Displays, TimeComponent, moment_, angular) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var Webform__default = /*#__PURE__*/_interopDefaultLegacy(Webform);
    var FormioComponent__default = /*#__PURE__*/_interopDefaultLegacy(FormioComponent$2);
    var TextFieldComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextFieldComponent);
    var Validator__default = /*#__PURE__*/_interopDefaultLegacy(Validator);
    var unescape__default = /*#__PURE__*/_interopDefaultLegacy(unescape);
    var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
    var PasswordComponent__default = /*#__PURE__*/_interopDefaultLegacy(PasswordComponent);
    var EmailComponent__default = /*#__PURE__*/_interopDefaultLegacy(EmailComponent);
    var UrlComponent__default = /*#__PURE__*/_interopDefaultLegacy(UrlComponent);
    var PhoneNumberComponent__default = /*#__PURE__*/_interopDefaultLegacy(PhoneNumberComponent);
    var NumberComponent__default = /*#__PURE__*/_interopDefaultLegacy(NumberComponent);
    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
    var CurrencyComponent__default = /*#__PURE__*/_interopDefaultLegacy(CurrencyComponent);
    var DayComponent__default = /*#__PURE__*/_interopDefaultLegacy(DayComponent);
    var HiddenComponent__default = /*#__PURE__*/_interopDefaultLegacy(HiddenComponent);
    var HtmlComponent__default = /*#__PURE__*/_interopDefaultLegacy(HtmlComponent);
    var TagsComponent__default = /*#__PURE__*/_interopDefaultLegacy(TagsComponent);
    var ButtonComponent__default = /*#__PURE__*/_interopDefaultLegacy(ButtonComponent);
    var TextAreaComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextAreaComponent);
    var isNil__default = /*#__PURE__*/_interopDefaultLegacy(isNil);
    var PanelComponent__default = /*#__PURE__*/_interopDefaultLegacy(PanelComponent);
    var ColumnsComponent__default = /*#__PURE__*/_interopDefaultLegacy(ColumnsComponent);
    var ContainerComponent__default = /*#__PURE__*/_interopDefaultLegacy(ContainerComponent);
    var TabsComponent__default = /*#__PURE__*/_interopDefaultLegacy(TabsComponent);
    var DateTimeComponent__default = /*#__PURE__*/_interopDefaultLegacy(DateTimeComponent);
    var CheckboxComponent__default = /*#__PURE__*/_interopDefaultLegacy(CheckboxComponent);
    var FieldsetComponent__default = /*#__PURE__*/_interopDefaultLegacy(FieldsetComponent);
    var ContentComponent__default = /*#__PURE__*/_interopDefaultLegacy(ContentComponent);
    var SignatureComponent__default = /*#__PURE__*/_interopDefaultLegacy(SignatureComponent);
    var SurveyComponent__default = /*#__PURE__*/_interopDefaultLegacy(SurveyComponent);
    var RadioComponent__default = /*#__PURE__*/_interopDefaultLegacy(RadioComponent);
    var SelectBoxesComponent__default = /*#__PURE__*/_interopDefaultLegacy(SelectBoxesComponent);
    var SelectComponent__default = /*#__PURE__*/_interopDefaultLegacy(SelectComponent);
    var WellComponent__default = /*#__PURE__*/_interopDefaultLegacy(WellComponent);
    var DataGridComponent__default = /*#__PURE__*/_interopDefaultLegacy(DataGridComponent);
    var EditGridComponent__default = /*#__PURE__*/_interopDefaultLegacy(EditGridComponent);
    var Components__default = /*#__PURE__*/_interopDefaultLegacy(Components$2);
    var isString__default = /*#__PURE__*/_interopDefaultLegacy(isString);
    var TableComponent__default = /*#__PURE__*/_interopDefaultLegacy(TableComponent);
    var Wizard__default = /*#__PURE__*/_interopDefaultLegacy(Wizard);
    var Displays__default = /*#__PURE__*/_interopDefaultLegacy(Displays);
    var TimeComponent__default = /*#__PURE__*/_interopDefaultLegacy(TimeComponent);
    var moment___namespace = /*#__PURE__*/_interopNamespace(moment_);

    Webform__default['default'].prototype.redraw = function () {
        return this.render();
    };
    Webform__default['default'].prototype.clear = function () {
        var viewContainer = this.viewContainer ? this.viewContainer() : null;
        if (viewContainer) {
            viewContainer.clear();
        }
    };
    Webform__default['default'].prototype.render = function () {
        if (this.viewContainer && this.viewContainer()) {
            this.clear();
            this.renderComponents();
            this.setValue(this._submission);
        }
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var FormioComponent = (function () {
        var beforeSubmit = FormioComponent__default['default'].prototype.beforeSubmit;
        FormioComponent__default['default'].prototype.beforeSubmit = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.materialComponent) {
                this.materialComponent.beforeSubmit();
            }
            return beforeSubmit.call.apply(beforeSubmit, __spread([this], args));
        };
        Object.defineProperty(FormioComponent__default['default'].prototype, 'disabled', {
            set: function (disabled) {
                this._disabled = disabled;
                if (this.materialComponent) {
                    this.materialComponent.setDisabled(disabled);
                }
            }
        });
        Object.defineProperty(FormioComponent__default['default'].prototype, 'visible', {
            set: function (visible) {
                if (this._visible !== visible) {
                    this._visible = visible;
                    this.clearOnHide();
                    this.redraw();
                }
                if (this.materialComponent) {
                    this.materialComponent.setVisible(visible);
                }
            }
        });
        return FormioComponent__default['default'];
    })();

    // @dynamic
    var FormioControl = /** @class */ (function (_super) {
        __extends(FormioControl, _super);
        function FormioControl() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.call(this, args[0], [], [FormioControl.customValidator.bind(FormioControl)]) || this;
        }
        FormioControl.customValidator = function (control) {
            return new Promise(function (resolve) {
                if (control.instance) {
                    control.instance.validateResolve = resolve;
                }
                else {
                    resolve(null);
                }
            });
        };
        FormioControl.prototype.setInstance = function (instance) {
            this.instance = instance;
            var setCustomValidity = instance.setCustomValidity;
            instance.setCustomValidity = function (message, dirty, external, isWarning) {
                if (isWarning === void 0) { isWarning = false; }
                var decodedMessage = message;
                if (Array.isArray(message)) {
                    decodedMessage = message.map(function (msg) { return Object.assign(msg, { message: unescape__default['default'](msg.message) }); });
                }
                else if (message) {
                    decodedMessage = unescape__default['default'](message);
                }
                setCustomValidity.call(instance, decodedMessage, dirty, external, isWarning);
                if (instance.validateResolve) {
                    instance.validateResolve(decodedMessage ? { custom: true } : null);
                }
            };
        };
        return FormioControl;
    }(forms.FormControl));

    var MaterialComponent = /** @class */ (function () {
        function MaterialComponent(element, ref) {
            this.element = element;
            this.ref = ref;
            this.control = new FormioControl();
        }
        MaterialComponent.prototype.setInstance = function (instance) {
            this.control.setInstance(instance);
            instance.materialComponent = this;
            this.instance = instance;
            this.instance.disabled = this.instance.shouldDisabled;
            this.setVisible(this.instance.visible);
            this.renderComponents();
        };
        MaterialComponent.prototype.ngOnInit = function () {
            if (this.instance) {
                if (this.shouldValidateOnInit()) {
                    this.storeFormData();
                    this.validateOnInit();
                }
                this.instance.component.defaultValue ? this.setValue(this.instance.component.defaultValue) : '';
            }
        };
        MaterialComponent.prototype.validateOnInit = function () {
            var _a, _b;
            var key = this.instance.component.key;
            var validationValue = this.getFormValue(this.instance.path);
            if (validationValue === null) {
                return;
            }
            this.instance.setPristine(false);
            var validationResult = Validator__default['default'].checkComponent(this.instance, (_a = {}, _a[key] = validationValue, _a), (_b = {}, _b[key] = validationValue, _b));
            if (validationResult.length) {
                this.instance.setCustomValidity(validationResult, false);
                if (!!validationValue) {
                    this.control.markAsTouched();
                }
                this.ref.detectChanges();
            }
        };
        MaterialComponent.prototype.storeFormData = function () {
            if (this.instance.parent && this.instance.parent.submission && this.instance.parent.submission.data) {
                sessionStorage.setItem('formData', JSON.stringify(this.instance.parent.submission.data));
            }
        };
        MaterialComponent.prototype.getFormValue = function (path) {
            var formData = JSON.parse(sessionStorage.getItem('formData'));
            if (!formData) {
                return null;
            }
            return get__default['default'](formData, path);
        };
        MaterialComponent.prototype.renderComponents = function () { };
        MaterialComponent.prototype.onChange = function (keepInputRaw) {
            var value = this.getValue();
            if (value === undefined || value === null) {
                value = this.instance.emptyValue;
            }
            if (this.input && this.input.nativeElement.mask && value && !keepInputRaw) {
                this.input.nativeElement.mask.textMaskInputElement.update(value);
                this.control.setValue(this.input.nativeElement.value);
                value = this.getValue();
            }
            this.instance.updateValue(value, { modified: true });
        };
        MaterialComponent.prototype.getValue = function () {
            return this.control.value;
        };
        MaterialComponent.prototype.setValue = function (value) {
            this.control.setValue(value);
        };
        MaterialComponent.prototype.beforeSubmit = function () {
            this.control.markAsTouched();
        };
        MaterialComponent.prototype.hasError = function () {
            return !!this.instance && !!this.instance.error;
        };
        MaterialComponent.prototype.shouldValidateOnInit = function () {
            if (!this.instance) {
                return;
            }
            return this.instance.options.validateOnInit
                || this.instance.parent.options.validateOnInit;
        };
        MaterialComponent.prototype.setDisabled = function (disabled) {
            if (disabled) {
                this.control.disable();
            }
            else {
                this.control.enable();
            }
        };
        MaterialComponent.prototype.setVisible = function (visible) {
            if (this.element && this.element.nativeElement) {
                if (visible) {
                    this.element.nativeElement.removeAttribute('hidden');
                    this.element.nativeElement.style.visibility = 'visible';
                    this.element.nativeElement.style.position = 'relative';
                }
                else {
                    this.element.nativeElement.setAttribute('hidden', true);
                    this.element.nativeElement.style.visibility = 'hidden';
                    this.element.nativeElement.style.position = 'absolute';
                }
            }
        };
        MaterialComponent.prototype.ngAfterViewInit = function () {
            if (this.element && this.element.nativeElement && this.instance) {
                // Add custom classes to elements.
                if (this.instance.component.customClass) {
                    this.element.nativeElement.classList.add(this.instance.component.customClass);
                }
            }
            if (this.input) {
                // Set the input masks.
                this.instance.setInputMask(this.input.nativeElement);
                this.instance.addFocusBlurEvents(this.input.nativeElement);
            }
        };
        return MaterialComponent;
    }());
    MaterialComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-comp',
                    template: '<mat-card>Unknown Component: {{ instance.component.type }}</mat-card>'
                },] }
    ];
    MaterialComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    MaterialComponent.propDecorators = {
        instance: [{ type: core.Input }],
        input: [{ type: core.ViewChild, args: ['input',] }],
        control: [{ type: core.Input }]
    };
    FormioComponent.MaterialComponent = MaterialComponent;

    var TEXTFIELD_TEMPLATE = "\n  <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n  <ng-template #componentTemplate let-hasLabel>\n    <mat-form-field [appearance]=\"getFormFieldAppearance()\" fxFill>\n\n      <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n      </mat-label>\n\n      <span *ngIf=\"instance.component.prefix && instance.type !== 'currency'\"\n            matPrefix\n      >\n        {{ instance.component.prefix }}&nbsp;\n      </span>\n      <input matInput\n            type=\"{{ inputType }}\"\n            [formControl]=\"control\"\n            [placeholder]=\"instance.component.placeholder\"\n            (input)=\"onChange()\" #input\n      >\n      <span *ngIf=\"instance.component.suffix\" matSuffix>{{ instance.component.suffix }}</span>\n\n      <mat-hint *ngIf=\"instance.component.showWordCount || instance.component.showCharCount\">\n        {{ getHint() }}\n      </mat-hint>\n\n      <br/>\n      <mat-error *ngIf=\"isError()\" >{{ getErrorMessage() }}</mat-error>\n    </mat-form-field>\n  </ng-template>\n";
    var MaterialTextfieldComponent = /** @class */ (function (_super) {
        __extends(MaterialTextfieldComponent, _super);
        function MaterialTextfieldComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.inputType = 'text';
            return _this;
        }
        MaterialTextfieldComponent.prototype.ngAfterContentInit = function () {
            if (this.instance && this.control && this.instance.component.disabled) {
                this.control.disable();
            }
        };
        MaterialTextfieldComponent.prototype.getHint = function () {
            if (!this.instance || !this.control || !this.control.value) {
                return '';
            }
            var _a = this.instance.component, showWordCount = _a.showWordCount, showCharCount = _a.showCharCount;
            if (showWordCount && showCharCount) {
                return this.getWordsCount() + " words, " + this.control.value.length + " characters";
            }
            else if (showWordCount) {
                return this.getWordsCount() + " words";
            }
            else {
                return this.control.value.length + " characters";
            }
        };
        MaterialTextfieldComponent.prototype.getWordsCount = function () {
            var matches = this.control.value ? this.control.value.match(/[\w\d’'-]+/gi) : [];
            return matches ? matches.length : 0;
        };
        MaterialTextfieldComponent.prototype.getFormFieldAppearance = function () {
            var appearances = ['legacy', 'standard', 'fill', 'outline'];
            var appearance = this.instance.component.appearance ? this.instance.component.appearance.toLowerCase() : '';
            return appearances.includes(appearance) ? appearance : undefined;
        };
        MaterialTextfieldComponent.prototype.isError = function () {
            if (this.instance.error) {
                this.control.setErrors(this.instance.component.validate);
                return true;
            }
            else {
                return false;
            }
        };
        MaterialTextfieldComponent.prototype.getErrorMessage = function () {
            var e_1, _a;
            if (this.instance.error && this.instance.error.messages) {
                var messages = this.instance.error.messages;
                try {
                    for (var messages_1 = __values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                        var msg = messages_1_1.value;
                        if (msg.context && this.control.hasError(msg.context.validator)) {
                            return this.instance.error.message;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        return MaterialTextfieldComponent;
    }(MaterialComponent));
    MaterialTextfieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-textfield',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    TextFieldComponent__default['default'].MaterialComponent = MaterialTextfieldComponent;

    var MaterialPasswordComponent = /** @class */ (function (_super) {
        __extends(MaterialPasswordComponent, _super);
        function MaterialPasswordComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.inputType = 'password';
            return _this;
        }
        return MaterialPasswordComponent;
    }(MaterialTextfieldComponent));
    MaterialPasswordComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-password',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    PasswordComponent__default['default'].MaterialComponent = MaterialPasswordComponent;

    var MaterialEmailComponent = /** @class */ (function (_super) {
        __extends(MaterialEmailComponent, _super);
        function MaterialEmailComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.inputType = 'email';
            return _this;
        }
        return MaterialEmailComponent;
    }(MaterialTextfieldComponent));
    MaterialEmailComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-email',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    EmailComponent__default['default'].MaterialComponent = MaterialEmailComponent;

    var MaterialUrlComponent = /** @class */ (function (_super) {
        __extends(MaterialUrlComponent, _super);
        function MaterialUrlComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.inputType = 'url';
            return _this;
        }
        return MaterialUrlComponent;
    }(MaterialTextfieldComponent));
    MaterialUrlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-url',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    UrlComponent__default['default'].MaterialComponent = MaterialUrlComponent;

    var MaterialPhoneNumberComponent = /** @class */ (function (_super) {
        __extends(MaterialPhoneNumberComponent, _super);
        function MaterialPhoneNumberComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.inputType = 'text';
            return _this;
        }
        return MaterialPhoneNumberComponent;
    }(MaterialTextfieldComponent));
    MaterialPhoneNumberComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-phonenumber',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    PhoneNumberComponent__default['default'].MaterialComponent = MaterialPhoneNumberComponent;

    var MaterialNumberComponent = /** @class */ (function (_super) {
        __extends(MaterialNumberComponent, _super);
        function MaterialNumberComponent(element, ref, renderer) {
            var _this = _super.call(this, element, ref) || this;
            _this.element = element;
            _this.ref = ref;
            _this.renderer = renderer;
            _this.inputType = 'text';
            return _this;
        }
        MaterialNumberComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            _super.prototype.ngAfterViewInit.call(this);
            if (this.instance) {
                var instance_1 = this.instance;
                this.renderer.listen(this.input.nativeElement, 'blur', function () {
                    var value = instance_1.parseValue(_this.control.value);
                    value = instance_1.formatValue(value);
                    value = instance_1.getValueAsString(value);
                    _this.control.setValue(value);
                });
            }
        };
        MaterialNumberComponent.prototype.getValue = function () {
            var value = this.control.value;
            if (value && this.instance) {
                value = value.replace(this.instance.prefix, '');
                return !___default['default'].isNil(value) && value !== '' ? this.instance.parseNumber(value) : value;
            }
            return value;
        };
        MaterialNumberComponent.prototype.setValue = function (value) {
            if (this.instance) {
                var instance = this.instance;
                value = instance.formatValue(instance.parseValue(value));
            }
            else {
                value = value.toString();
            }
            return _super.prototype.setValue.call(this, value);
        };
        MaterialNumberComponent.prototype.onChange = function () {
            _super.prototype.onChange.call(this, true);
        };
        return MaterialNumberComponent;
    }(MaterialTextfieldComponent));
    MaterialNumberComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-number',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    MaterialNumberComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 }
    ]; };
    NumberComponent__default['default'].MaterialComponent = MaterialNumberComponent;

    var MaterialCurrencyComponent = /** @class */ (function (_super) {
        __extends(MaterialCurrencyComponent, _super);
        function MaterialCurrencyComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.inputType = 'text';
            return _this;
        }
        MaterialCurrencyComponent.prototype.onChange = function () {
            var newValue = ___default['default'].isNil(this.getValue()) ? '' : this.getValue();
            this.instance.updateValue(newValue, { modified: true });
        };
        return MaterialCurrencyComponent;
    }(MaterialNumberComponent));
    MaterialCurrencyComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-currency',
                    template: TEXTFIELD_TEMPLATE
                },] }
    ];
    CurrencyComponent__default['default'].MaterialComponent = MaterialCurrencyComponent;

    DayComponent__default['default'].prototype.getFieldValue = function (name) {
        return this.refs[name] ? this.refs[name].value : '';
    };
    var MaterialDayComponent = /** @class */ (function (_super) {
        __extends(MaterialDayComponent, _super);
        function MaterialDayComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.dayControl = new forms.FormControl();
            _this.monthControl = new forms.FormControl();
            _this.yearControl = new forms.FormControl();
            return _this;
        }
        MaterialDayComponent.prototype.setInstance = function (instance) {
            // Add stub methods to match dom elements.
            this.dayControl.setAttribute = function () { };
            this.dayControl.removeAttribute = function () { };
            this.monthControl.setAttribute = function () { };
            this.monthControl.removeAttribute = function () { };
            this.yearControl.setAttribute = function () { };
            this.yearControl.removeAttribute = function () { };
            instance.refs = {
                day: this.dayControl,
                month: this.monthControl,
                year: this.yearControl
            };
            return _super.prototype.setInstance.call(this, instance);
        };
        MaterialDayComponent.prototype.setDisabled = function (disabled) {
            if (disabled) {
                this.dayControl.disable();
                this.monthControl.disable();
                this.yearControl.disable();
            }
            else {
                this.dayControl.enable();
                this.monthControl.enable();
                this.yearControl.enable();
            }
        };
        MaterialDayComponent.prototype.getValue = function () {
            return this.instance.getDate();
        };
        MaterialDayComponent.prototype.setValue = function (value) {
            if (value) {
                this.dayControl.setValue(parseInt(utils_js.momentDate(value).format('D')));
                this.monthControl.setValue(parseInt(utils_js.momentDate(value).format('M')));
                this.yearControl.setValue(parseInt(utils_js.momentDate(value).format('YYYY')));
            }
            this.instance.setValueAt(0, value);
        };
        return MaterialDayComponent;
    }(MaterialComponent));
    MaterialDayComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-day',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-label *ngIf=\"hasLabel\">\n        <span [instance]=\"instance\" matFormioLabel></span>\n      </mat-label>\n      <mat-form-field *ngIf=\"instance.dayFirst && instance.showDay\">\n        <mat-label *ngIf=\"!instance.component.hideInputLabels\">Day</mat-label>\n        <mat-select [formControl]=\"dayControl\" (selectionChange)=\"onChange()\" [required]=\"instance.dayRequired\">\n          <mat-option *ngFor=\"let day of instance.days\" [value]=\"day.value\">\n            {{day.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"instance.showMonth\">\n        <mat-label *ngIf=\"!instance.component.hideInputLabels\">Month</mat-label>\n        <mat-select [formControl]=\"monthControl\" (selectionChange)=\"onChange()\" [required]=\"instance.monthRequired\">\n          <mat-option *ngFor=\"let month of instance.months\" [value]=\"month.value\">\n            {{month.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"!instance.dayFirst && instance.showDay\">\n        <mat-label *ngIf=\"!instance.component.hideInputLabels\">Day</mat-label>\n        <mat-select [formControl]=\"dayControl\" (selectionChange)=\"onChange()\" [required]=\"instance.dayRequired\">\n          <mat-option *ngFor=\"let day of instance.days\" [value]=\"day.value\">\n            {{day.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"instance.showYear\">\n        <mat-label *ngIf=\"!instance.component.hideInputLabels\">Year</mat-label>\n        <mat-select [formControl]=\"yearControl\" (selectionChange)=\"onChange()\" [required]=\"instance.yearRequired\">\n          <mat-option *ngFor=\"let year of instance.years\" [value]=\"year.value\">\n            {{year.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n    </ng-template>\n  "
                },] }
    ];
    DayComponent__default['default'].MaterialComponent = MaterialDayComponent;

    var MaterialHiddenComponent = /** @class */ (function (_super) {
        __extends(MaterialHiddenComponent, _super);
        function MaterialHiddenComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MaterialHiddenComponent;
    }(MaterialComponent));
    MaterialHiddenComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-hidden',
                    template: "<input matInput type=\"hidden\" [formControl]=\"control\" #input>"
                },] }
    ];
    HiddenComponent__default['default'].MaterialComponent = MaterialHiddenComponent;

    var MaterialHtmlComponent = /** @class */ (function (_super) {
        __extends(MaterialHtmlComponent, _super);
        function MaterialHtmlComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialHtmlComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            _super.prototype.ngAfterViewInit.call(this);
            if (this.instance.component.refreshOnChange) {
                this.instance.checkRefreshOn = function () {
                    _this.htmlBody.nativeElement.innerHTML = _this.instance.renderContent();
                };
            }
        };
        return MaterialHtmlComponent;
    }(MaterialComponent));
    MaterialHtmlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-html',
                    template: "<div #htmlBody></div>"
                },] }
    ];
    MaterialHtmlComponent.propDecorators = {
        htmlBody: [{ type: core.ViewChild, args: ['htmlBody',] }]
    };
    HtmlComponent__default['default'].MaterialComponent = MaterialHtmlComponent;

    var MaterialTagsComponent = /** @class */ (function (_super) {
        __extends(MaterialTagsComponent, _super);
        function MaterialTagsComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            _this.tags = [];
            return _this;
        }
        MaterialTagsComponent.prototype.add = function (event) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.tags.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.onChange();
        };
        MaterialTagsComponent.prototype.remove = function (index) {
            if (index >= 0 && index < this.tags.length) {
                this.tags.splice(index, 1);
            }
            this.onChange();
        };
        MaterialTagsComponent.prototype.getValue = function () {
            return (this.instance.component.storeas === 'string') ? this.tags.join(this.instance.delimiter) : this.tags;
        };
        MaterialTagsComponent.prototype.setValue = function (value) {
            if (typeof value === 'string') {
                value = value.split(this.instance.delimiter);
            }
            if (value && !Array.isArray(value)) {
                value = [value];
            }
            this.tags = value;
        };
        return MaterialTagsComponent;
    }(MaterialComponent));
    MaterialTagsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-tags',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-form-field class=\"example-chip-list\" fxFill>\n\n        <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n        </mat-label>\n\n        <mat-chip-list #chipList [attr.aria-label]=\"instance.component.label\">\n          <mat-chip *ngFor=\"let tag of tags; index as i;\"\n                    [selectable]=\"true\"\n                    [removable]=\"true\"\n                    (removed)=\"remove(i)\"\n          >\n            {{tag}}\n            <mat-icon matChipRemove>cancel</mat-icon>\n          </mat-chip>\n\n          <input [formControl]=\"control\"\n                 [matChipInputFor]=\"chipList\"\n                 [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                 [matChipInputAddOnBlur]=\"true\"\n                 (matChipInputTokenEnd)=\"add($event)\"\n          >\n        </mat-chip-list>\n      </mat-form-field>\n    </ng-template>\n  "
                },] }
    ];
    TagsComponent__default['default'].MaterialComponent = MaterialTagsComponent;

    var ButtonsThemes;
    (function (ButtonsThemes) {
        ButtonsThemes["PRIMARY"] = "primary";
        ButtonsThemes["SECONDARY"] = "secondary";
        ButtonsThemes["INFO"] = "info";
        ButtonsThemes["WARNING"] = "warning";
        ButtonsThemes["DANGER"] = "danger";
        ButtonsThemes["SUCCESS"] = "success";
    })(ButtonsThemes || (ButtonsThemes = {}));
    var AngularButtonsThemes;
    (function (AngularButtonsThemes) {
        AngularButtonsThemes["WARN"] = "warn";
        AngularButtonsThemes["PRIMARY"] = "primary";
        AngularButtonsThemes["BASIC"] = "basic";
        AngularButtonsThemes["ACCENT"] = "accent";
    })(AngularButtonsThemes || (AngularButtonsThemes = {}));

    var MaterialButtonComponent = /** @class */ (function (_super) {
        __extends(MaterialButtonComponent, _super);
        function MaterialButtonComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.loading = false;
            _this.done = false;
            _this.error = false;
            _this.disabled = false;
            _this.clicked = false;
            return _this;
        }
        Object.defineProperty(MaterialButtonComponent.prototype, "color", {
            get: function () {
                if (this.error) {
                    return AngularButtonsThemes.WARN;
                }
                var theme = this.angularButtonTheme;
                return theme || AngularButtonsThemes.PRIMARY;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaterialButtonComponent.prototype, "angularButtonTheme", {
            get: function () {
                switch (this.instance.component.theme) {
                    case ButtonsThemes.PRIMARY:
                        return AngularButtonsThemes.PRIMARY;
                    case ButtonsThemes.WARNING:
                        return AngularButtonsThemes.ACCENT;
                    case ButtonsThemes.DANGER:
                        return AngularButtonsThemes.WARN;
                    case ButtonsThemes.SECONDARY:
                        return AngularButtonsThemes.BASIC;
                    default:
                        return '';
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaterialButtonComponent.prototype, "buttonClass", {
            get: function () {
                var className = this.instance.component.block ? 'mat-formio-button-block' : '';
                className += this.instance.component.size ? " mat-formio-button-" + this.instance.component.size : '';
                className += !this.angularButtonTheme ? " mat-formio-theme-" + this.instance.component.theme : '';
                return className;
            },
            enumerable: false,
            configurable: true
        });
        MaterialButtonComponent.prototype.onClick = function (event) {
            this.clicked = true;
            this.instance.onClick(event);
        };
        MaterialButtonComponent.prototype.getValue = function () {
            return this.clicked;
        };
        MaterialButtonComponent.prototype.setState = function (loading, error, done) {
            this.loading = loading;
            this.done = done;
            this.error = error;
        };
        MaterialButtonComponent.prototype.getIconFontSet = function (icon) {
            var fontSet = icon.split(' ')[0];
            return fontSet;
        };
        MaterialButtonComponent.prototype.getIconName = function (icon) {
            return icon.replace(this.getIconFontSet(icon), '');
        };
        MaterialButtonComponent.prototype.setInstance = function (instance) {
            var _this = this;
            var retVal = _super.prototype.setInstance.call(this, instance);
            this.disabled = instance.shouldDisabled;
            instance.on('submitButton', function () { return _this.setState(true, false, false); });
            instance.on('submitDone', function () { return _this.setState(false, false, true); });
            instance.on('submitError', function () { return _this.setState(false, true, false); });
            instance.on('requestButton', function () { return _this.setState(true, false, false); });
            instance.on('requestDone', function () { return _this.setState(false, false, true); });
            instance.on('change', function (event) {
                _this.disabled = _this.instance.shouldDisabled || (_this.instance.component.disableOnInvalid && !event.isValid);
                if (event.isValid) {
                    _this.loading = false;
                    _this.error = false;
                }
            });
            return retVal;
        };
        return MaterialButtonComponent;
    }(MaterialComponent));
    MaterialButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-button',
                    template: "<button *ngIf=\"instance\"\n        [ngClass]=\"buttonClass\"\n        type=\"{{ instance.component.action }}\"\n        mat-raised-button [color]=\"color\"\n        [disabled]=\"disabled\"\n        (click)=\"instance.onClick($event)\"\n>\n  <mat-icon *ngIf=\"instance.component.leftIcon\">{{instance.component.leftIcon}}</mat-icon>\n  <mat-icon *ngIf=\"done\">done</mat-icon>\n  <mat-icon *ngIf=\"error\">close</mat-icon>\n  <mat-icon class=\"mat-icon-spin\" *ngIf=\"loading\">autorenew</mat-icon>\n  {{ instance.component.label }}\n  <mat-icon *ngIf=\"instance.component.rightIcon\">{{instance.component.rightIcon}}</mat-icon>\n</button>\n",
                    styles: ["@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host .mat-icon-spin{-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:spin;-webkit-animation-timing-function:linear;animation-duration:1s;animation-iteration-count:infinite;animation-name:spin;animation-timing-function:linear}.mat-formio-theme-success{background-color:#63d644!important}.mat-formio-theme-info{background-color:#49d9f4!important}.mat-formio-button-sm{font-size:14px;padding:8px 12px}.mat-formio-button-xs{font-size:14px;padding:4px 6px}.mat-formio-button-md{font-size:15px;padding:8px 12px}.mat-formio-button-lg{font-size:19px;padding:16px 20px}.mat-formio-button-block{display:block;width:100%}"]
                },] }
    ];
    ButtonComponent__default['default'].MaterialComponent = MaterialButtonComponent;

    var MaterialTextareaComponent = /** @class */ (function (_super) {
        __extends(MaterialTextareaComponent, _super);
        function MaterialTextareaComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialTextareaComponent.prototype.ngAfterViewInit = function () {
            // Attach the element so the wysiwyg will work.
            this.instance.attachElement(this.textarea.nativeElement);
        };
        MaterialTextareaComponent.prototype.getValue = function () {
            return isNil__default['default'](this.control.value) ? '' : this.control.value;
        };
        return MaterialTextareaComponent;
    }(MaterialComponent));
    MaterialTextareaComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-textarea',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-form-field class=\"mat-formio-textarea\"\n                      [ngClass]=\"{'editor-enabled': !!instance.component.editor}\"\n                      fxFill\n                      fxFlexAlign=\"center\"\n      >\n        <mat-label fxFill *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n        </mat-label>\n        <span *ngIf=\"instance.component.prefix\" matPrefix>{{ instance.component.prefix }}&nbsp;</span>\n        <textarea matInput\n                  [placeholder]=\"instance.component.placeholder\"\n                  [formControl]=\"control\"\n                  [rows]=\"(instance.component.rows || 3)\"\n                  (input)=\"onChange()\"\n                   #textarea\n        >\n        </textarea>\n        <span *ngIf=\"instance.component.suffix\" matSuffix>{{ instance.component.suffix }}</span>\n        <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n      </mat-form-field>\n    </ng-template>\n  ",
                    styles: [".mat-input-element{min-height:16px}"]
                },] }
    ];
    MaterialTextareaComponent.propDecorators = {
        textarea: [{ type: core.ViewChild, args: ['textarea',] }]
    };
    TextAreaComponent__default['default'].MaterialComponent = MaterialTextareaComponent;

    var MaterialNestedComponent = /** @class */ (function (_super) {
        __extends(MaterialNestedComponent, _super);
        function MaterialNestedComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialNestedComponent.prototype.setInstance = function (instance) {
            var _this = this;
            instance.viewContainer = function () {
                return _this.viewContainers ? _this.viewContainers[0] : null;
            };
            _super.prototype.setInstance.call(this, instance);
        };
        MaterialNestedComponent.prototype.renderComponents = function () {
            if (this.instance.renderComponents) {
                this.instance.renderComponents();
            }
        };
        MaterialNestedComponent.prototype.render = function () {
            this.viewContainers = this.components.toArray();
            this.renderComponents();
            this.ref.detectChanges();
        };
        MaterialNestedComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.components.changes.subscribe(function () { return _this.render(); });
            this.render();
        };
        return MaterialNestedComponent;
    }(MaterialComponent));
    MaterialNestedComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-nested',
                    template: '<ng-template #components></ng-template>'
                },] }
    ];
    MaterialNestedComponent.propDecorators = {
        components: [{ type: core.ViewChildren, args: ['components', { read: core.ViewContainerRef },] }]
    };

    var MaterialPanelComponent = /** @class */ (function (_super) {
        __extends(MaterialPanelComponent, _super);
        function MaterialPanelComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MaterialPanelComponent;
    }(MaterialNestedComponent));
    MaterialPanelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-panel',
                    template: "\n    <mat-card *ngIf=\"!instance.component.collapsible\">\n      <mat-card-title *ngIf=\"instance?.component?.title\">\n        {{ instance.component.title }}\n      </mat-card-title>\n      <mat-card-content fxLayout=\"column\" fxLayoutGap=\"1em\">\n        <ng-template #components></ng-template>\n      </mat-card-content>\n    </mat-card>\n    <mat-expansion-panel *ngIf=\"instance.component.collapsible\"\n                         [expanded]=\"!instance.component.collapsed\"\n    >\n      <mat-expansion-panel-header *ngIf=\"instance?.component?.title\">\n        <mat-panel-title>\n          {{ instance.component.title }}\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-template #components></ng-template>\n    </mat-expansion-panel>\n  ",
                    styles: [':host { margin-bottom: 1em; }']
                },] }
    ];
    PanelComponent__default['default'].MaterialComponent = MaterialPanelComponent;

    var MaterialColumnsComponent = /** @class */ (function (_super) {
        __extends(MaterialColumnsComponent, _super);
        function MaterialColumnsComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.flexGap = 0.5;
            _this.totalSpace = 0;
            return _this;
        }
        MaterialColumnsComponent.prototype.setInstance = function (instance) {
            var _this = this;
            this.totalSpace = 100 - ((instance.component.columns.length - 1) * this.flexGap);
            _super.prototype.setInstance.call(this, instance);
            instance.viewContainer = function (component) {
                return _this.viewContainers ? _this.viewContainers[component.column] : null;
            };
        };
        MaterialColumnsComponent.prototype.flexWidth = function (column, index) {
            if (index >= (this.instance.component.columns.length - 1)) {
                return Math.ceil(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
            }
            else {
                return Math.floor(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
            }
        };
        return MaterialColumnsComponent;
    }(MaterialNestedComponent));
    MaterialColumnsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-columns',
                    template: "\n    <div class=\"container\"\n         fxLayout=\"row\"\n         fxLayout.xs=\"column\"\n         fxLayoutWrap\n         fxLayoutGap=\"{{ flexGap }}%\"\n         fxLayoutAlign=\"center\"\n    >\n      <div\n        *ngFor=\"let column of instance.component.columns; let i = index\"\n        [fxFlex]=\"flexWidth(column, i)\"\n        fxLayout=\"column\"\n        fxLayoutGap=\"1em\">\n        <ng-template #components></ng-template>\n      </div>\n    </div>\n  "
                },] }
    ];
    ColumnsComponent__default['default'].MaterialComponent = MaterialColumnsComponent;

    var MaterialContainerComponent = /** @class */ (function (_super) {
        __extends(MaterialContainerComponent, _super);
        function MaterialContainerComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MaterialContainerComponent;
    }(MaterialNestedComponent));
    MaterialContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-container',
                    template: "\n    <div fxLayout=\"column\" fxLayoutGap=\"1em\">\n      <ng-template #components></ng-template>\n    </div>"
                },] }
    ];
    ContainerComponent__default['default'].MaterialComponent = MaterialContainerComponent;

    var MaterialTabsComponent = /** @class */ (function (_super) {
        __extends(MaterialTabsComponent, _super);
        function MaterialTabsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialTabsComponent.prototype.setInstance = function (instance) {
            var _this = this;
            _super.prototype.setInstance.call(this, instance);
            instance.viewContainer = function (component) {
                return _this.viewContainers ? _this.viewContainers[component.tab] : null;
            };
        };
        return MaterialTabsComponent;
    }(MaterialNestedComponent));
    MaterialTabsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-tabs',
                    template: "\n    <mat-tab-group>\n      <mat-tab *ngFor=\"let tab of instance.component.components\" [label]=\"tab.label\">\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\" style=\"border: 1px dotted rgba(0, 0, 0, 0.125)\">\n          <ng-template #components></ng-template>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  "
                },] }
    ];
    TabsComponent__default['default'].MaterialComponent = MaterialTabsComponent;

    var MaterialDateComponent = /** @class */ (function (_super) {
        __extends(MaterialDateComponent, _super);
        function MaterialDateComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.timeControl = new forms.FormControl();
            _this.displayControl = new forms.FormControl();
            _this.selectedTime = '00:00';
            _this.allowManualInput = true;
            _this.formatTime = function (value) {
                if (!value) {
                    return _this.instance.emptyValue;
                }
                return utils_js.momentDate(value).format(_this.instance.component.format);
            };
            _this.dateFilter = function (d) {
                var isValid = _this.instance.component.datePicker.disableWeekends ? _this.disableWeekends(d) : true;
                return _this.instance.component.widget.disabledDates && isValid ?
                    _this.disableDates(_this.instance.component.widget.disabledDates.split(','), d) : isValid;
            };
            return _this;
        }
        Object.defineProperty(MaterialDateComponent.prototype, "enableDate", {
            get: function () {
                return this.instance && this.instance.component.enableDate !== false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MaterialDateComponent.prototype, "enableTime", {
            get: function () {
                return this.instance && this.instance.component.enableTime === true;
            },
            enumerable: false,
            configurable: true
        });
        MaterialDateComponent.prototype.setDisplayControlValue = function (value) {
            if (value === void 0) { value = null; }
            var format = "MM/DD/YYYY" + (this.enableTime ? 'THH:mm' : '');
            value = value || this.getDateTimeValue();
            if (value) {
                this.displayControl.setValue(utils_js.momentDate(value).format(format));
            }
            else {
                this.displayControl.setValue('');
            }
        };
        MaterialDateComponent.prototype.onChangeDate = function (event) {
            this.selectedDate = utils_js.momentDate(event).utc().format();
            this.control.setValue(this.selectedDate);
            this.setDateTime();
        };
        MaterialDateComponent.prototype.onChangeTime = function (time) {
            this.selectedTime = time;
            if (this.selectedDate || (this.enableTime && !this.enableDate)) {
                this.setDateTime();
            }
        };
        MaterialDateComponent.prototype.onChangeInput = function () {
            var value = this.dateFilter(this.displayControl.value) &&
                this.checkMinMax(this.displayControl.value) ? this.displayControl.value : '';
            this.control.setValue(value);
            this.onChange();
        };
        MaterialDateComponent.prototype.getDateTimeValue = function () {
            var newDate = '';
            var isSelectedTime = false;
            if (this.calendar && this.calendar.selectedTime) {
                var selectedTime = this.calendar.selectedTime;
                isSelectedTime = true;
                if (this.selectedTime !== selectedTime) {
                    this.selectedTime = selectedTime;
                }
            }
            if (this.enableTime && this.enableDate) {
                var _a = __read(this.selectedTime.split(':'), 2), hours = _a[0], minutes = _a[1];
                newDate = isSelectedTime
                    ? utils_js.momentDate(this.selectedDate)
                        .hours(Number.parseInt(hours))
                        .minutes(Number.parseInt(minutes))
                        .utc()
                    : this.selectedDate;
            }
            if (!this.enableTime && this.enableDate) {
                newDate = this.selectedDate;
            }
            if (this.enableTime && !this.enableDate) {
                var _b = __read(this.selectedTime.split(':'), 2), hours = _b[0], minutes = _b[1];
                newDate = utils_js.momentDate(new Date())
                    .hours(Number.parseInt(hours))
                    .minutes(Number.parseInt(minutes))
                    .seconds(0)
                    .utc();
            }
            return newDate;
        };
        MaterialDateComponent.prototype.setDateTime = function () {
            this.control.setValue(this.getDateTimeValue());
            this.onChange();
        };
        MaterialDateComponent.prototype.setInstance = function (instance) {
            _super.prototype.setInstance.call(this, instance);
            this.isDisabled() ? this.control.disable() : this.control.enable();
            this.isDisabled() ? this.displayControl.disable() : this.displayControl.enable();
            if (this.instance) {
                this.allowManualInput = this.instance.component.allowInput === false ? false : true;
                if (this.instance.component && this.instance.component.datePicker) {
                    var _a = this.instance.component.datePicker, min = _a.minDate, max = _a.maxDate;
                    // It improves the date to the full format if the customer set only a year. Otherwise we will have conflicts into the moment.js.
                    var _b = this.improveMinMaxDate(min, max), minDate = _b.minDate, maxDate = _b.maxDate;
                    this.instance.component.datePicker.minDate = minDate;
                    this.instance.component.datePicker.maxDate = maxDate;
                }
            }
        };
        MaterialDateComponent.prototype.toggleCalendar = function (event) {
            if (!this.isDisabled()) {
                if (!this.isPickerOpened) {
                    var date = this.getValue();
                    if (date && this.checkMinMax(date)) {
                        if (this.enableDate && this.calendar && !this.calendar.selectedDate) {
                            this.calendar.setExistedDate(utils_js.momentDate(date).toDate());
                        }
                        if (this.enableTime && this.calendar && !this.calendar.selectedTime) {
                            var time = utils_js.momentDate(date);
                            this.calendar.setExistedTime(time.format('HH:mm'), time.format('h:mm:A'));
                        }
                    }
                }
                this.isPickerOpened = !this.isPickerOpened;
                event.stopPropagation();
            }
        };
        MaterialDateComponent.prototype.isDisabled = function () {
            var _a = this.instance.component, readonly = _a.readonly, disabled = _a.disabled;
            return readonly || disabled || this.instance.root.options.readOnly;
        };
        MaterialDateComponent.prototype.setValue = function (value) {
            if (this.dateFilter(value) && this.checkMinMax(value)) {
                this.setDisplayControlValue(value);
                _super.prototype.setValue.call(this, value);
            }
        };
        MaterialDateComponent.prototype.onChange = function () {
            var value = this.dateFilter(this.getValue()) && this.checkMinMax(this.getValue()) ? this.getValue() : '';
            this.setDisplayControlValue(value);
        };
        MaterialDateComponent.prototype.beforeSubmit = function () {
            this.onChange();
            _super.prototype.beforeSubmit.call(this);
        };
        MaterialDateComponent.prototype.checkMinMax = function (value) {
            var isValid = true;
            var _a = this.instance.component.datePicker, min = _a.minDate, max = _a.maxDate;
            var _b = this.improveMinMaxDate(min, max), minDate = _b.minDate, maxDate = _b.maxDate;
            if (minDate) {
                isValid = utils_js.momentDate(value).isSameOrAfter(minDate);
            }
            if (maxDate && isValid) {
                isValid = utils_js.momentDate(value).isSameOrBefore(maxDate);
            }
            return isValid;
        };
        MaterialDateComponent.prototype.disableWeekends = function (d) {
            if (d && d.getDay) {
                var day = d.getDay();
                return day !== 0 && day !== 6;
            }
            return true;
        };
        MaterialDateComponent.prototype.disableDates = function (dates, d) {
            var formattedDates = dates.map(function (date) { return utils_js.momentDate(date).format('MM/DD/YYYY'); });
            return !formattedDates.includes(utils_js.momentDate(d).format('MM/DD/YYYY'));
        };
        MaterialDateComponent.prototype.clickOutside = function (event) {
            if (!this.calendar.element.nativeElement.contains(event.target) && this.isPickerOpened)
                this.toggleCalendar(event);
        };
        MaterialDateComponent.prototype.improveMinMaxDate = function (minDate, maxDate) {
            if (minDate && minDate.length === 4) {
                minDate = utils_js.momentDate(minDate + "-01-01").format('MM/DD/YYYY');
            }
            if (maxDate && maxDate.length === 4) {
                maxDate = utils_js.momentDate(maxDate + "-01-01").subtract(1, 'day').format('MM/DD/YYYY');
            }
            return { minDate: minDate, maxDate: maxDate };
        };
        return MaterialDateComponent;
    }(MaterialComponent));
    MaterialDateComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-date',
                    host: {
                        '(document:click)': 'clickOutside($event)',
                    },
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-label *ngIf=\"hasLabel\" fxFill>\n        <span [instance]=\"instance\" matFormioLabel></span>\n      </mat-label>\n\n      <form class=\"example-form\">\n        <mat-datepicker-toggle [disabled]=\"isDisabled()\" (click)=\"toggleCalendar($event)\">\n          <mat-icon matDatepickerToggleIcon *ngIf=\"enableTime && !enableDate\">schedule</mat-icon>\n        </mat-datepicker-toggle>\n        <mat-form-field class=\"example-full-width\">\n          <input\n            *ngIf=\"enableTime && enableDate\"\n            matInput\n            type=\"datetime-local\"\n            [placeholder]=\"instance.component.placeholder\"\n            [formControl]=\"displayControl\"\n            (input)=\"onChangeInput()\"\n            [readonly]=\"!allowManualInput\"\n          >\n          <input\n            *ngIf=\"enableTime && !enableDate\"\n            matInput\n            [placeholder]=\"instance.component.placeholder\"\n            [formControl]=\"displayControl\"\n            [matMask]=\"formatTime\"\n            (input)=\"onChangeInput()\"\n            [readonly]=\"!allowManualInput\"\n          >\n          <input\n            *ngIf=\"!enableTime && enableDate\"\n            matInput\n            [placeholder]=\"instance.component.placeholder\"\n            [formControl]=\"displayControl\"\n            (input)=\"onChangeInput()\"\n            [readonly]=\"!allowManualInput\"\n          >\n        </mat-form-field>\n\n        <mat-formio-calendar\n          #calendar\n          [minDate]=\"instance.component.datePicker.minDate || ''\"\n          [maxDate]=\"instance.component.datePicker.maxDate || ''\"\n          [dateFilter]=\"dateFilter\"\n          [hidden]=\"!isPickerOpened\"\n          (dateSelectEvent)=\"onChangeDate($event)\"\n          (timeSelectEvent)=\"onChangeTime($event)\"\n          [enableDate]=\"enableDate\"\n          [enableTime]=\"enableTime\"\n          [hourStep]=\"instance.component.timePicker.hourStep\"\n          [minuteStep]=\"instance.component.timePicker.minuteStep\"\n          [instance]=\"instance\"\n        ></mat-formio-calendar>\n        <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n      </form>\n    </ng-template>\n  "
                },] }
    ];
    MaterialDateComponent.propDecorators = {
        calendar: [{ type: core.ViewChild, args: ['calendar',] }]
    };
    DateTimeComponent__default['default'].MaterialComponent = MaterialDateComponent;

    var MaterialCheckboxComponent = /** @class */ (function (_super) {
        __extends(MaterialCheckboxComponent, _super);
        function MaterialCheckboxComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialCheckboxComponent.prototype.getValue = function () {
            return ___default['default'].isNil(this.control.value) ? '' : this.control.value;
        };
        return MaterialCheckboxComponent;
    }(MaterialComponent));
    MaterialCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-checkbox',
                    template: "\n    <mat-checkbox (change)=\"onChange()\" [ngClass]=\"{'validation-error' : !!instance.error}\"\n                  [formControl]=\"control\"\n    >\n      <span matFormioLabel [instance]=\"instance\"></span>\n      <mat-icon *ngIf=\"instance.component.tooltip\" matSuffix\n                matTooltip=\"{{ instance.component.tooltip }}\" style=\"font-size: 1rem;\">info\n      </mat-icon>\n    </mat-checkbox>\n    <mat-hint>\n      {{ instance.component.description  }}\n    </mat-hint>\n    <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n  ",
                    styles: ['::ng-deep .mat-checkbox.validation-error .mat-checkbox-frame {border-color: red; }']
                },] }
    ];
    CheckboxComponent__default['default'].MaterialComponent = MaterialCheckboxComponent;

    var MaterialFieldsetComponent = /** @class */ (function (_super) {
        __extends(MaterialFieldsetComponent, _super);
        function MaterialFieldsetComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MaterialFieldsetComponent;
    }(MaterialNestedComponent));
    MaterialFieldsetComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-fieldset',
                    template: "\n    <fieldset>\n      <legend [attr.ref]=\"'header'\">\n        {{ instance.component.legend }}\n        <mat-icon *ngIf=\"instance.component.tooltip\"\n                  matSuffix\n                  matTooltip=\"{{ instance.component.tooltip }}\"\n        >\n          info\n        </mat-icon>\n      </legend>\n      <div class=\"fieldset-body\" [attr.ref]=\"instance.component.key\" fxLayout=\"column\" fxLayoutGap=\"1em\">\n        <ng-template #components></ng-template>\n      </div>\n    </fieldset>\n  "
                },] }
    ];
    FieldsetComponent__default['default'].MaterialComponent = MaterialFieldsetComponent;

    var MaterialContentComponent = /** @class */ (function (_super) {
        __extends(MaterialContentComponent, _super);
        function MaterialContentComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MaterialContentComponent;
    }(MaterialComponent));
    MaterialContentComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-content',
                    template: "<div [innerHTML]=\"instance.content\"></div>"
                },] }
    ];
    ContentComponent__default['default'].MaterialComponent = MaterialContentComponent;

    var MaterialSignatureComponent = /** @class */ (function (_super) {
        __extends(MaterialSignatureComponent, _super);
        function MaterialSignatureComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialSignatureComponent.prototype.renderComponents = function () {
            if (this.signatureElement) {
                this.instance.attach(this.signatureElement.nativeElement);
            }
        };
        MaterialSignatureComponent.prototype.ngAfterViewInit = function () {
            this.renderComponents();
        };
        return MaterialSignatureComponent;
    }(MaterialComponent));
    MaterialSignatureComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-signature',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <div #signature>\n\n        <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n        </mat-label>\n\n        <button mat-icon-button [ngStyle]=\"{position: 'absolute'}\" ref=\"refresh\">\n          <mat-icon>refresh</mat-icon>\n        </button>\n\n        <div class=\"signature-pad-body\"\n             [ngStyle]=\"{width: instance.component.width, height: instance.component.height, padding: 0, margin: 0}\"\n             [attr.tabindex]=\"instance.component.tabindex || 0\"\n             ref=\"padBody\"\n        >\n          <canvas class=\"signature-pad-canvas\"\n                  [attr.height]=\"instance.component.height\"\n                  ref=\"canvas\"\n          ></canvas>\n          <img fxFlexFill [ngStyle]=\"{display: 'none' }\" ref=\"signatureImage\">\n        </div>\n        <div *ngIf=\"instance.component.footer\"\n             class=\"signature-pad-footer\"\n             fxLayout=\"row\"\n             fxLayoutAlign=\"center center\"\n        >\n          <mat-hint>{{ instance.t(instance.component.footer) }}</mat-hint>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] }
    ];
    MaterialSignatureComponent.propDecorators = {
        signatureElement: [{ type: core.ViewChild, args: ['signature',] }]
    };
    SignatureComponent__default['default'].MaterialComponent = MaterialSignatureComponent;

    var MaterialSurveyComponent = /** @class */ (function (_super) {
        __extends(MaterialSurveyComponent, _super);
        function MaterialSurveyComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.controls = {};
            return _this;
        }
        MaterialSurveyComponent.prototype.getFormControl = function (question) {
            if (!this.controls[question]) {
                this.controls[question] = new forms.FormControl();
                if (this.instance.shouldDisabled) {
                    this.controls[question].disable();
                }
            }
            return this.controls[question];
        };
        MaterialSurveyComponent.prototype.setDisabled = function (disabled) {
            var method = disabled ? 'disable' : 'enable';
            for (var question in this.controls) {
                if (this.controls.hasOwnProperty(question)) {
                    this.controls[question][method]();
                }
            }
        };
        MaterialSurveyComponent.prototype.getValue = function () {
            var values = {};
            for (var question in this.controls) {
                if (this.controls.hasOwnProperty(question)) {
                    values[question] = this.controls[question].value || false;
                }
            }
            return values;
        };
        MaterialSurveyComponent.prototype.setValue = function (value) {
            for (var question in value) {
                if (value.hasOwnProperty(question)) {
                    var control = this.getFormControl(question);
                    if (control) {
                        control.setValue(value[question] || false);
                    }
                }
            }
        };
        MaterialSurveyComponent.prototype.getUniqueName = function (question) {
            return this.instance.id + "-" + question;
        };
        return MaterialSurveyComponent;
    }(MaterialComponent));
    MaterialSurveyComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-survey',
                    template: "\n\n      <mat-formio-form-field\n              [instance]=\"instance\"\n              [componentTemplate]=\"componentTemplate\"\n              [showDescription]=\"false\"\n      ></mat-formio-form-field>\n      <ng-template #componentTemplate let-hasLabel>\n\n        <table class=\"mat-elevation-z8 mat-table\" fxFill>\n          <thead>\n          <tr class=\"mat-header-row\">\n            <th class=\"mat-header-cell\">\n              <h2 *ngIf=\"hasLabel\">\n                <span [instance]=\"instance\" matFormioLabel></span>\n              </h2>\n            </th>\n            <th class=\"mat-header-cell\"\n                *ngFor=\"let value of instance.component.values\"\n                style=\"text-align: center;\"\n            >\n              {{ value.label }}\n            </th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr class=\"mat-row\" *ngFor=\"let question of instance.component.questions; index as i;\">\n            <td class=\"mat-cell\">{{ question.label }}</td>\n            <td class=\"mat-cell\"\n                *ngFor=\"let value of instance.component.values; index as j;\"\n                style=\"text-align: center;\"\n            >\n              <mat-radio-group (change)=\"onChange()\"\n                               [formControl]=\"getFormControl(question.value)\"\n                               [name]=\"getUniqueName(question.value)\"\n              >\n                <mat-radio-button [value]=\"value.value\"></mat-radio-button>\n              </mat-radio-group>\n            </td>\n          </tr>\n          <mat-hint *ngIf=\"instance.component.description\" class=\"mat-formio-component-description\">\n            {{ instance.component.description }}\n          </mat-hint>\n          </tbody>\n\n          <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n        </table>\n      </ng-template>\n    "
                },] }
    ];
    SurveyComponent__default['default'].MaterialComponent = MaterialSurveyComponent;

    var MaterialRadioComponent = /** @class */ (function (_super) {
        __extends(MaterialRadioComponent, _super);
        function MaterialRadioComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialRadioComponent.prototype.getLayout = function () {
            return this.instance.component.inline ? 'row' : 'column';
        };
        MaterialRadioComponent.prototype.isRadioChecked = function (option) {
            return option.value === this.instance.dataValue;
        };
        MaterialRadioComponent.prototype.clearValue = function (event, option) {
            if (this.isRadioChecked(option)) {
                event.preventDefault();
                this.deselectValue();
            }
        };
        MaterialRadioComponent.prototype.deselectValue = function () {
            this.instance.updateValue(null, {
                modified: true,
            });
        };
        return MaterialRadioComponent;
    }(MaterialComponent));
    MaterialRadioComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-radio',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <div fxLayout=\"column\">\n        <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n        </mat-label>\n\n        <mat-radio-group\n                (change)=\"onChange()\"\n                [formControl]=\"control\"\n                fxFlexOffset=\"10px\"\n                fxLayout=\"{{ getLayout() }}\"\n                fxLayoutGap=\"10px\"\n        >\n          <mat-radio-button *ngFor=\"let option of instance.component.values\"\n                            value=\"{{ option.value }}\"\n                            [checked]=\"isRadioChecked(option)\"\n                            (keyup.space)=\"clearValue($event, option)\"\n                            (click)=\"clearValue($event, option)\"\n          >\n            {{ option.label }}\n          </mat-radio-button>\n          <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n        </mat-radio-group>\n      </div>\n    </ng-template>\n  "
                },] }
    ];
    RadioComponent__default['default'].MaterialComponent = MaterialRadioComponent;

    var MaterialSelectBoxesComponent = /** @class */ (function (_super) {
        __extends(MaterialSelectBoxesComponent, _super);
        function MaterialSelectBoxesComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.value = {};
            _this.disabled = false;
            return _this;
        }
        MaterialSelectBoxesComponent.prototype.setInstance = function (instance) {
            var _this = this;
            instance.component.values.forEach(function (option) {
                _this.value[option.value] = false;
            });
            _super.prototype.setInstance.call(this, instance);
        };
        MaterialSelectBoxesComponent.prototype.getValue = function () {
            return this.value;
        };
        MaterialSelectBoxesComponent.prototype.setValue = function (value) {
            var normalizedValue = this.instance.normalizeValue(value);
            for (var prop in normalizedValue) {
                if (normalizedValue.hasOwnProperty(prop)) {
                    this.value[prop] = normalizedValue[prop];
                }
            }
        };
        MaterialSelectBoxesComponent.prototype.setDisabled = function (disabled) {
            this.disabled = !!disabled;
        };
        MaterialSelectBoxesComponent.prototype.onChange = function () {
            this.instance.updateValue(this.getValue(), { modified: true });
            this.instance.triggerChange({ modified: true });
        };
        return MaterialSelectBoxesComponent;
    }(MaterialRadioComponent));
    MaterialSelectBoxesComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-selectboxes',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <div fxLayout=\"column\">\n        <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n        </mat-label>\n        <div\n                fxFlexOffset=\"10px\"\n                fxLayout=\"{{ getLayout() }}\"\n                fxLayoutGap=\"10px\"\n        >\n          <mat-checkbox\n                  *ngFor=\"let option of instance.component.values\"\n                  (change)=\"onChange()\"\n                  [(ngModel)]=\"value[option.value]\"\n                  [disabled]=\"disabled\"\n          >\n            {{ option.label }}\n          </mat-checkbox>\n          <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] }
    ];
    SelectBoxesComponent__default['default'].MaterialComponent = MaterialSelectBoxesComponent;

    var MaterialSelectComponent = /** @class */ (function (_super) {
        __extends(MaterialSelectComponent, _super);
        function MaterialSelectComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialSelectComponent.prototype.setInstance = function (instance) {
            _super.prototype.setInstance.call(this, instance);
            this.instance.triggerUpdate();
        };
        MaterialSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.selectOptions = new Promise(function (resolve) {
                _this.selectOptionsResolve = resolve;
            });
            this.selectOptions.then(function (options) {
                _this.filteredOptionsLength = options.length;
            });
            this.filteredOptions = this.selectOptions;
        };
        MaterialSelectComponent.prototype.onFilter = function (value) {
            var _this = this;
            this.filteredOptions = this.selectOptions.then(function (options) {
                var filtered = options.filter(function (option) { return option.label.indexOf(value) !== -1; });
                _this.filteredOptionsLength = filtered.length;
                return filtered;
            });
        };
        MaterialSelectComponent.prototype.compareObjects = function (o1, o2) {
            return ___default['default'].isEqual(o1, o2);
        };
        return MaterialSelectComponent;
    }(MaterialComponent));
    MaterialSelectComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-select',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-form-field fxFill>\n\n        <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n        </mat-label>\n\n        <span *ngIf=\"instance.component.prefix\" matPrefix>\n          {{ instance.component.prefix }}&nbsp;\n        </span>\n        <mat-select\n                [multiple]=\"instance.component.multiple\"\n                [formControl]=\"control\"\n                [placeholder]=\"instance.component.placeholder\"\n                (selectionChange)=\"onChange()\"\n                [compareWith]=\"compareObjects\"\n        >\n          <div class=\"mat-option\">\n            <input class=\"mat-input-element\" placeholder=\"Type to search\" (input)=\"onFilter($event.target.value)\">\n          </div>\n          <mat-option *ngIf=\"!filteredOptionsLength\" disabled>\n            <span>Nothing was found</span>\n          </mat-option>\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.value\">\n            <span [innerHTML]=\"option.label\"></span>\n          </mat-option>\n        </mat-select>\n\n        <span *ngIf=\"instance.component.suffix\" matSuffix>\n          {{ instance.component.suffix }}\n        </span>\n        <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n      </mat-form-field>\n    </ng-template>\n  "
                },] }
    ];
    SelectComponent__default['default'].MaterialComponent = MaterialSelectComponent;
    // Make sure we detect changes when new items make their way into the select dropdown.
    var setItems = SelectComponent__default['default'].prototype.setItems;
    SelectComponent__default['default'].prototype.setItems = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setItems.call.apply(setItems, __spread([this], args));
        if (this.materialComponent && this.materialComponent.selectOptionsResolve) {
            this.materialComponent.selectOptionsResolve(this.selectOptions);
        }
    };

    var MaterialWellComponent = /** @class */ (function (_super) {
        __extends(MaterialWellComponent, _super);
        function MaterialWellComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MaterialWellComponent;
    }(MaterialNestedComponent));
    MaterialWellComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-well',
                    template: "\n    <mat-card>\n      <mat-card-content fxLayout=\"column\"\n                        fxLayoutGap=\"1em\"\n                        [ngStyle]=\"{\n                           'background-color':'#f5f5f5',\n                           'padding': '1.5em'\n                         }\"\n      >\n        <ng-template #components></ng-template>\n      </mat-card-content>\n    </mat-card>\n  "
                },] }
    ];
    WellComponent__default['default'].MaterialComponent = MaterialWellComponent;

    var MaterialDataGridComponent = /** @class */ (function (_super) {
        __extends(MaterialDataGridComponent, _super);
        function MaterialDataGridComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.dataSource = new table.MatTableDataSource();
            return _this;
        }
        MaterialDataGridComponent.prototype.getColumnLabel = function (column) {
            return column.label || column.key;
        };
        MaterialDataGridComponent.prototype.setInstance = function (instance) {
            var _this = this;
            _super.prototype.setInstance.call(this, instance);
            this.dataSource.data = instance.dataValue;
            this.columns = {};
            this.displayedColumns = [];
            this.formColumns = [];
            instance.getColumns().map(function (column) {
                _this.formColumns.push(column.key);
                _this.displayedColumns.push(column.key);
                _this.columns[column.key] = column;
            });
            this.displayedColumns.push('__removeRow');
            if (this.instance.component.reorder) {
                this.displayedColumns.push('position');
            }
            instance.viewContainer = function (component) {
                var viewContainer;
                if (_this.instance.component.disabled) {
                    component.component.disabled = true;
                }
                _this.viewContainers.forEach(function (container) {
                    var td = container.element.nativeElement.parentNode;
                    if (component.rowIndex === parseInt(td.getAttribute('rowIndex'), 10) &&
                        component.component.key === td.getAttribute('component')) {
                        viewContainer = container;
                    }
                });
                return viewContainer ? viewContainer : null;
            };
        };
        MaterialDataGridComponent.prototype.addAnother = function () {
            this.checkRowsNumber();
            this.instance.addRow();
            if (this.dataSource.data.length < this.instance.rows.length) {
                this.dataSource.data.push({});
            }
            this.dataSource.data = __spread(this.dataSource.data);
        };
        MaterialDataGridComponent.prototype.checkRowsNumber = function () {
            while (this.instance.rows.length < this.dataSource.data.length) {
                this.instance.addRow();
            }
        };
        MaterialDataGridComponent.prototype.removeRow = function (index) {
            this.instance.removeRow(index);
            this.dataSource.data.splice(index, 1);
            this.dataSource.data = __spread(this.dataSource.data);
        };
        MaterialDataGridComponent.prototype.dropTable = function (event) {
            var prevIndex = this.dataSource.data.findIndex(function (d) { return d === event.item.data; });
            dragDrop.moveItemInArray(this.control.value, prevIndex, event.currentIndex);
            this.renderComponents();
        };
        MaterialDataGridComponent.prototype.renderComponents = function () {
            this.instance.getRows();
            this.instance.setValue(this.control.value || []);
        };
        MaterialDataGridComponent.prototype.setValue = function (value) {
            var gridLength = value ? value.length : 0;
            while (this.instance.rows.length < gridLength) {
                this.addAnother();
                this.instance.dataValue = value;
                this.instance.setValue(value);
            }
            if (!value && this.instance.component.clearOnHide) {
                this.dataSource = new table.MatTableDataSource(this.instance.defaultValue);
            }
            _super.prototype.setValue.call(this, value);
        };
        return MaterialDataGridComponent;
    }(MaterialNestedComponent));
    MaterialDataGridComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-datagrid',
                    template: "\n    <mat-formio-form-field [instance]=\"instance\"\n                           [componentTemplate]=\"componentTemplate\"\n                           [labelTemplate]=\"labelTemplate\"\n    ></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-card fxFill>\n        <ng-container *ngIf=\"hasLabel\">\n          <ng-container *ngTemplateOutlet=\"labelTemplate\"></ng-container>\n        </ng-container>\n        <mat-card-content>\n          <mat-card-actions\n                  *ngIf=\"instance.hasAddButton() && (instance.component.addAnotherPosition === 'both' || instance.component.addAnotherPosition === 'top')\">\n            <button mat-raised-button color=\"primary\" (click)=\"addAnother()\">\n              <mat-icon>add</mat-icon>\n              {{instance.component.addAnother || 'Add Another'}}\n            </button>\n          </mat-card-actions>\n          <table\n                  mat-table\n                  [dataSource]=\"dataSource\"\n                  class=\"mat-elevation-z8\"\n                  fxFill\n                  cdkDropList\n                  [cdkDropListData]=\"dataSource\"\n                  (cdkDropListDropped)=\"dropTable($event)\">\n            >\n            <ng-container *ngFor=\"let column of formColumns\" [matColumnDef]=\"column\">\n              <th mat-header-cell *matHeaderCellDef>{{ getColumnLabel(columns[column]) }}</th>\n              <td mat-cell *matCellDef=\"let i = index;\" [attr.rowIndex]=\"i\" [attr.component]=\"column\">\n                <ng-template #components></ng-template>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"__removeRow\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let i = index;\">\n                <button mat-button *ngIf=\"instance.hasRemoveButtons()\" (click)=\"removeRow(i)\">\n                  <mat-icon aria-hidden=\"false\" aria-label=\"Remove row\">delete</mat-icon>\n                </button>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"position\" *ngIf=\"instance.component.reorder\">\n              <th mat-header-cell *matHeaderCellDef> No.</th>\n              <td mat-cell *matCellDef=\"let element\">\n                <mat-icon cdkDragHandle>reorder</mat-icon>\n              </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <div *ngIf=\"instance?.component?.reorder\">\n              <tr class=\"datagrid-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\" cdkDrag\n                  [cdkDragData]=\"row\"></tr>\n            </div>\n            <div *ngIf=\"!instance?.component?.reorder\">\n              <tr class=\"datagrid-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </div>\n          </table>\n        </mat-card-content>\n        <mat-card-actions *ngIf=\"instance.hasAddButton() && instance.component.addAnotherPosition !== 'top'\">\n          <button mat-raised-button color=\"primary\" (click)=\"addAnother()\">\n            <mat-icon>add</mat-icon>\n            {{instance.component.addAnother || 'Add Another'}}\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n\n    <ng-template #labelTemplate>\n      <mat-card-title>\n        <span [instance]=\"instance\" matFormioLabel></span>\n      </mat-card-title>\n    </ng-template>\n  ",
                    styles: ['.datagrid-row { height: auto; }']
                },] }
    ];
    DataGridComponent__default['default'].MaterialComponent = MaterialDataGridComponent;

    var EditRowState;
    (function (EditRowState) {
        EditRowState["NEW"] = "new";
        EditRowState["EDITING"] = "editing";
        EditRowState["SAVED"] = "saved";
        EditRowState["REMOVED"] = "removed";
        EditRowState["DRAFT"] = "draft";
    })(EditRowState || (EditRowState = {}));
    ;
    /* tslint:disable no-bitwise only-arrow-functions */
    var hashCode = function (str) {
        var hash = 0;
        var i = 0;
        var chr;
        str = str.replace(/\s/g, '');
        if (str.length === 0) {
            return hash;
        }
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    var ɵ0 = hashCode;
    /* tslint:enable no-bitwise only-arrow-functions */
    // Do nothing to createRowComponents, let mat-formio handle it.
    /* tslint:disable only-arrow-functions */
    EditGridComponent__default['default'].prototype.createRowComponents = function () {
        return [];
    };
    var checkRow = EditGridComponent__default['default'].prototype.checkRow;
    EditGridComponent__default['default'].prototype.checkRow = function (data, editRow, flags) {
        if (flags === void 0) { flags = {}; }
        if (flags.checkRow) {
            return checkRow.call(this, data, editRow, flags);
        }
        else {
            return true;
        }
    };
    /* tslint:enable only-arrow-functions */
    var DEFAULT_HEADER_TEMPLATES = [
        hashCode(EditGridComponent__default['default'].defaultHeaderTemplate),
        hashCode("\n  <div class=\"row\">\n    {% (components || []).forEach(function(component) { %}\n      <div class=\"col-sm-2\">{{ component.label }}</div>\n    {% }) %}\n  </div>")
    ];
    var DEFAULT_ROW_TEMPLATES = [
        hashCode(EditGridComponent__default['default'].defaultRowTemplate),
        hashCode("<div class=\"row\">\n  {% util.eachComponent(components, function(component) { %}\n    <div class=\"col-sm-2\">\n      {{ getView(component, row[component.key]) }}\n    </div>\n  {% }) %}\n  {% if (!instance.options.readOnly) { %}\n    <div class=\"col-sm-2\">\n      <div class=\"btn-group pull-right\">\n        <button class=\"btn btn-default btn-sm editRow\">Edit</button>\n        <button class=\"btn btn-danger btn-sm removeRow\">Delete</button>\n      </div>\n    </div>\n  {% } %}\n</div>")
    ];
    var MaterialEditGridComponent = /** @class */ (function (_super) {
        __extends(MaterialEditGridComponent, _super);
        function MaterialEditGridComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.columns = {};
            _this.colWidth = 0;
            _this.valid = true;
            _this.RowStates = EditRowState;
            return _this;
        }
        MaterialEditGridComponent.prototype.getRowTemplate = function (content) {
            return "<mat-list style=\"display: flex;\">\n      {% (components || []).forEach(function(component) { %}\n        {% if (!component.hasOwnProperty('tableView') || component.tableView) { %}\n          <mat-list-item style=\"width: {{ colWidth }}%; margin: 0 0.8rem\">" + content + "</mat-list-item>\n        {% } %}\n      {% }) %}\n    </mat-list>";
        };
        MaterialEditGridComponent.prototype.validate = function (index) {
            if (!this.forms) {
                return;
            }
            var forms = this.forms.toArray();
            if (!forms[index]) {
                return;
            }
            var formioComponent = forms[index];
            var data = formioComponent.formio.submission.data;
            var isInvalid = Object.keys(data).some(function (value) { return isString__default['default'](data[value]) && data[value].length === 0; });
            if (isInvalid) {
                this.valid = false;
            }
            else {
                this.valid = true;
            }
        };
        MaterialEditGridComponent.prototype.setInstance = function (instance) {
            var _this = this;
            if (instance.component.templates.header &&
                (DEFAULT_HEADER_TEMPLATES.indexOf(hashCode(instance.component.templates.header)) !== -1)) {
                instance.component.templates.header = this.getRowTemplate('{{ component.label }}');
            }
            if (instance.component.templates.row &&
                (DEFAULT_ROW_TEMPLATES.indexOf(hashCode(instance.component.templates.row)) !== -1)) {
                instance.component.templates.row = this.getRowTemplate('{{ getView(component, row[component.key]) }}');
            }
            this.displayedColumns = instance.component.components.map(function (comp) {
                if (comp.hasOwnProperty('tableView') && !comp.tableView) {
                    return false;
                }
                _this.columns[comp.key] = comp;
                return comp.key;
            }).filter(function (name) { return !!name; });
            var dataValue = instance.dataValue || [];
            this.colWidth = instance.component.components.length ? Math.floor(100 / instance.component.components.length) : 100;
            if (instance.component.templates && instance.component.templates.header) {
                this.header = instance.renderString(instance.component.templates.header, {
                    components: instance.component.components,
                    value: dataValue,
                    colWidth: this.colWidth
                });
            }
            if (instance.component.templates && instance.component.templates.footer) {
                this.footer = instance.renderString(instance.component.templates.footer, {
                    components: instance.component.components,
                    value: dataValue,
                    colWidth: this.colWidth
                });
            }
            setTimeout(function () {
                _this.renderTemplate(_this.headerElement, _this.header);
                _this.renderTemplate(_this.footerElement, _this.footer);
            }, 0);
            _super.prototype.setInstance.call(this, instance);
        };
        MaterialEditGridComponent.prototype.addAnother = function () {
            var row = this.instance.addRow();
        };
        MaterialEditGridComponent.prototype.editRow = function (row, index) {
            var state = row.state;
            var _a = this.RowStates, NEW = _a.NEW, REMOVED = _a.REMOVED;
            if (state === NEW || state === REMOVED) {
                return;
            }
            this.instance.editRow(index);
            var forms = this.forms.toArray();
            if (forms[index]) {
                forms[index].formio.submission = { data: JSON.parse(JSON.stringify(row.data)) };
            }
        };
        /**
         * Updates the row template.
         *
         * @param row
         * @param index
         */
        MaterialEditGridComponent.prototype.updateRowTemplate = function (rowElement, index, comps) {
            var self = this;
            var editRow = Object.assign({}, this.instance.editRows[index]);
            if (editRow.state !== this.RowStates.NEW) {
                this.renderTemplate(rowElement, this.instance.renderString(this.instance.component.templates.row, {
                    row: this.instance.dataValue[index] || {},
                    data: this.instance.data,
                    rowIndex: index,
                    colWidth: this.colWidth,
                    components: this.instance.component.components,
                    getView: function getView(component, data) {
                        if (!comps[component.type]) {
                            comps[component.type] = Components__default['default'].create(component, {}, {}, true);
                        }
                        return comps[component.type] ? comps[component.type].getView(data) : '';
                    }
                }));
            }
        };
        /**
         * Saves a row.
         *
         * @param row - The edit grid row.
         * @param index - The index for this row.
         */
        MaterialEditGridComponent.prototype.saveRow = function (row, index) {
            var forms = this.forms.toArray();
            if (forms[index]) {
                var formioComponent = forms[index];
                row.data = JSON.parse(JSON.stringify(formioComponent.formio.submission.data));
                this.instance.saveRow(index);
                var rows = this.rowElements.toArray();
                if (rows && rows[index]) {
                    this.updateRowTemplate(rows[index], index, {});
                }
            }
        };
        MaterialEditGridComponent.prototype.cancelRow = function (index) {
            this.instance.cancelRow(index);
            this.valid = true;
        };
        MaterialEditGridComponent.prototype.renderTemplate = function (element, template) {
            if (!element || !element.nativeElement) {
                return;
            }
            element.nativeElement.innerHTML = template;
        };
        MaterialEditGridComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.rowElements.changes.subscribe(function (rows) {
                var rowCache = {};
                rows.forEach(function (row, index) { return _this.updateRowTemplate(row, index, rowCache); });
            });
        };
        return MaterialEditGridComponent;
    }(MaterialNestedComponent));
    MaterialEditGridComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-editgrid',
                    template: "<mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\" [labelTemplate]=\"labelTemplate\">\n</mat-formio-form-field>\n<ng-template #componentTemplate let-hasLabel>\n\n  <span fxLayout=\"column\" fxLayoutGap=\"1em\" fxFill>\n    <ng-container *ngIf=\"hasLabel\">\n      <ng-container *ngTemplateOutlet=\"labelTemplate\"></ng-container>\n    </ng-container>\n    <mat-accordion>\n      <mat-expansion-panel *ngIf=\"header\" disabled=\"true\">\n        <mat-expansion-panel-header>\n          <span #header fxFill></span>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngFor=\"let row of instance.editRows; index as i;\" [expanded]=\"instance.isOpen(row)\">\n        <mat-expansion-panel-header (click)=\"editRow(row, i)\">\n          <span *ngIf=\"row.state !== RowStates.NEW\" #rows fxFill></span>\n        </mat-expansion-panel-header>\n\n        <mat-formio [form]=\"instance.component\" #forms (change)=\"validate(i)\"></mat-formio>\n\n        <span fxLayout=\"row\" fxLayoutGap=\"1em\">\n          <button mat-raised-button color=\"primary\" [disabled]=\"!valid\" (click)=\"saveRow(row, i)\">Save</button>\n          <button mat-raised-button color=\"secondary\" (click)=\"cancelRow(i)\">Cancel</button>\n          <button mat-raised-button color=\"warn\" (click)=\"instance.removeRow(i)\" class=\"delete-button\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </span>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngIf=\"footer\" disabled=\"true\">\n        <mat-expansion-panel-header>\n          <span #footer></span>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <span fxFill=\"none\" *ngIf=\"instance.hasAddButton()\">\n      <button mat-raised-button color=\"primary\" (click)=\"addAnother()\">\n        <mat-icon>add</mat-icon> Add Another\n      </button>\n    </span>\n  </span>\n</ng-template>\n\n<ng-template #labelTemplate>\n  <mat-card-title>\n    <span [instance]=\"instance\" matFormioLabel></span>\n  </mat-card-title>\n</ng-template>\n",
                    styles: [":host .delete-button{margin-left:auto;order:2}"]
                },] }
    ];
    MaterialEditGridComponent.propDecorators = {
        headerElement: [{ type: core.ViewChild, args: ['header',] }],
        footerElement: [{ type: core.ViewChild, args: ['footer',] }],
        rowElements: [{ type: core.ViewChildren, args: ['rows',] }],
        forms: [{ type: core.ViewChildren, args: ['forms',] }]
    };
    EditGridComponent__default['default'].MaterialComponent = MaterialEditGridComponent;

    var MaterialTableComponent = /** @class */ (function (_super) {
        __extends(MaterialTableComponent, _super);
        function MaterialTableComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaterialTableComponent.prototype.setInstance = function (instance) {
            var _this = this;
            _super.prototype.setInstance.call(this, instance);
            instance.viewContainer = function (component) {
                return _this.viewContainers ?
                    _this.viewContainers[(component.tableRow * _this.instance.component.numCols) + component.tableColumn] :
                    null;
            };
        };
        MaterialTableComponent.prototype.getTableColClasses = function () {
            var _a;
            if (!this.instance) {
                return;
            }
            var _b = this.instance.component, condensed = _b.condensed, cellAlignment = _b.cellAlignment;
            return Object.assign({ 'is-condensed': condensed }, (cellAlignment && (_a = {}, _a[cellAlignment] = true, _a)));
        };
        return MaterialTableComponent;
    }(MaterialNestedComponent));
    MaterialTableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-table',
                    template: "\n      <table class=\"mat-table\" style=\"width: 100%;\" [ngClass]=\"{'is-bordered' : instance.component.bordered}\">\n        <thead>\n        <tr class=\"mat-header-row\">\n          <th *ngFor=\"let header of instance.component.header\"\n              class=\"mat-header-cell\"\n          >\n            {{ instance.t(header) }}\n          </th>\n        </tr>\n        </thead>\n\n        <tbody>\n        <tr *ngFor=\"let row of instance.table; let i = index\"\n            role=\"row\"\n            class=\"mat-row\"\n            [ngClass]=\"{\n                'is-hover': instance.component.hover,\n                'is-striped': instance.component.striped && i % 2 === 0\n              }\"\n        >\n          <td *ngFor=\"let col of row\"\n              role=\"gridcell\"\n              class=\"mat-cell\"\n              [ngClass]=\"getTableColClasses()\"\n          >\n            <ng-template #components></ng-template>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n  ",
                    styles: [".mat-table.is-bordered{border:1px solid #ddd}.mat-row.is-hover:hover{background-color:#f5f5f5}.mat-cell{padding:8px}.mat-cell.is-condensed{padding:3px}.mat-row.is-striped{background-color:#eee}.mat-cell.center{text-align:center}.mat-cell.right{text-align:right}"]
                },] }
    ];
    TableComponent__default['default'].MaterialComponent = MaterialTableComponent;

    var MaterialWizardComponent = /** @class */ (function (_super) {
        __extends(MaterialWizardComponent, _super);
        function MaterialWizardComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.isLinear = true;
            _this.prevNumOfPages = 0;
            return _this;
        }
        MaterialWizardComponent.prototype.setInstance = function (instance) {
            var _this = this;
            this.isLinear = (instance.options &&
                instance.options.breadcrumbSettings &&
                instance.options.breadcrumbSettings.clickable) ? false : true;
            this.updatePages(instance);
            instance.on('pagesChanged', function () { return _this.updatePages(); });
            _super.prototype.setInstance.call(this, instance);
        };
        MaterialWizardComponent.prototype.updatePages = function (instance) {
            var _this = this;
            if (instance === void 0) { instance = this.instance; }
            if (this.prevNumOfPages !== instance.pages.length) {
                instance.pages.forEach(function (page, pageIndex) {
                    page.viewContainer = function () {
                        return _this.viewContainers ? _this.viewContainers[pageIndex] : null;
                    };
                });
                this.prevNumOfPages = instance.pages.length;
            }
        };
        MaterialWizardComponent.prototype.resetWizard = function () {
            this.instance.cancel();
            this.stepper.reset();
        };
        MaterialWizardComponent.prototype.nextPage = function () {
            var _this = this;
            this.instance.nextPage().then(function () { return _this.stepper.next(); });
        };
        MaterialWizardComponent.prototype.prevPage = function () {
            var _this = this;
            this.instance.prevPage().then(function () { return _this.stepper.previous(); });
        };
        MaterialWizardComponent.prototype.submit = function () {
            this.instance.submit();
        };
        MaterialWizardComponent.prototype.renderComponents = function () {
            if (this.instance.renderComponents && this.instance.pages) {
                this.instance.renderComponents(this.instance.pages.reduce(function (comps, page) {
                    return comps.concat(page.components);
                }, []));
            }
        };
        return MaterialWizardComponent;
    }(MaterialNestedComponent));
    MaterialWizardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-wizard',
                    template: "\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n      <mat-step *ngFor=\"let page of instance.pages\" [label]=\"page.component.title\">\n        <ng-template #components></ng-template>\n        <div class=\"navigation-button-row\">\n          <button *ngIf=\"instance.hasButton('cancel')\" mat-raised-button (click)=\"resetWizard()\">Cancel</button>\n          <button *ngIf=\"instance.hasButton('previous')\" mat-raised-button color=\"primary\" (click)=\"prevPage()\">Previous</button>\n          <button *ngIf=\"instance.hasButton('next')\" mat-raised-button color=\"primary\" (click)=\"nextPage()\">Next</button>\n          <button *ngIf=\"instance.hasButton('submit')\" mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>",
                    styles: [':host .navigation-button-row { margin-top: 8px; }',
                        ':host .navigation-button-row button { margin-right: 8px; }']
                },] }
    ];
    MaterialWizardComponent.propDecorators = {
        stepper: [{ type: core.ViewChild, args: ['stepper', { static: true },] }]
    };
    Wizard__default['default'].MaterialComponent = MaterialWizardComponent;
    Displays__default['default'].addDisplay('wizard', Wizard__default['default']);

    var MaterialTimeComponent = /** @class */ (function (_super) {
        __extends(MaterialTimeComponent, _super);
        function MaterialTimeComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.disabled = false;
            _this.period = 'AM';
            _this.hourControl = new forms.FormControl();
            _this.minuteControl = new forms.FormControl();
            _this.secondControl = new forms.FormControl();
            _this.selectedEvent = new core.EventEmitter();
            _this.hourStep = 1;
            _this.minuteStep = 1;
            _this.secondStep = 1;
            _this.renderElementOnly = false;
            return _this;
        }
        MaterialTimeComponent.prototype.setDisabled = function (disabled) {
            if (disabled) {
                this.hourControl.disable();
                this.minuteControl.disable();
                this.secondControl.disable();
            }
        };
        Object.defineProperty(MaterialTimeComponent.prototype, "dataFormat", {
            get: function () {
                var format = this.instance.component.dataFormat;
                format = format ? format : 'HH:mm';
                return format;
            },
            enumerable: false,
            configurable: true
        });
        MaterialTimeComponent.prototype.setInstance = function (instance) {
            _super.prototype.setInstance.call(this, instance);
            // this.control.setValue('00:00:00');
            this.onChange();
        };
        MaterialTimeComponent.prototype.onChange = function () {
            var hours = this.hourControl.value;
            var minutes = this.minuteControl.value || '00';
            var seconds = this.secondControl.value || '';
            var rawValue = (hours || '00') + ":" + minutes + (seconds ? ':' + seconds : '') + " " + this.period;
            var value = this.getTwentyFourHourTime(rawValue);
            if (!hours) {
                value = this.instance.emptyValue;
            }
            this.control.setValue(value);
            if (this.instance) {
                _super.prototype.onChange.call(this);
            }
            this.selectedEvent.emit(this.control);
        };
        MaterialTimeComponent.prototype.setValue = function (value) {
            if (!value) {
                return;
            }
            _super.prototype.setValue.call(this, value);
            var _a = __read(value.split(':'), 3), hourValue = _a[0], minuteValue = _a[1], period = _a[2];
            this.hourControl.setValue(hourValue);
            this.minuteControl.setValue(minuteValue);
            // fix for default value with seconds instead of period
            this.period = period === ('AM' || 'PM') ? period : this.period;
        };
        MaterialTimeComponent.prototype.getTwentyFourHourTime = function (amPmString) {
            var moment = moment___namespace;
            return moment(amPmString, ['h:mm:ss A']).format(this.dataFormat);
        };
        MaterialTimeComponent.prototype.changePeriod = function () {
            this.period = this.period === 'AM' ? 'PM' : 'AM';
            this.onChange();
        };
        return MaterialTimeComponent;
    }(MaterialComponent));
    MaterialTimeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-time',
                    template: "\n    <mat-formio-form-field\n      [instance]=\"instance\"\n      [componentTemplate]=\"componentTemplate\"\n      [renderElementOnly]=\"renderElementOnly\"\n    ></mat-formio-form-field>\n    <ng-template #componentTemplate let-hasLabel>\n      <mat-label fxFill *ngIf=\"hasLabel\">\n        <span [instance]=\"instance\" matFormioLabel></span>\n      </mat-label>\n\n      <div style=\"display: block\">\n        <div fxLayout=\"row\" fxLayoutGap=\"5%\">\n          <input\n            [formControl]=\"hourControl\"\n            [step]=\"hourStep\"\n            [min]=\"0\"\n            [max]=\"12\"\n            type=\"number\"\n            fxFlex=\"25%\"\n            (input)=\"onChange()\"\n          >\n          <input\n            [formControl]=\"minuteControl\"\n            [step]=\"minuteStep\"\n            [min]=\"0\"\n            [max]=\"59\"\n            type=\"number\"\n            fxFlex=\"25%\"\n            (input)=\"onChange()\"\n          >\n          <input\n            [formControl]=\"secondControl\"\n            [step]=\"secondStep\"\n            [min]=\"0\"\n            [max]=\"59\"\n            type=\"number\"\n            fxFlex=\"25%\"\n            (input)=\"onChange()\"\n            *ngIf=\"instance?.component?.dataFormat === 'HH:mm:ss' ||\n             instance?.component?.dataFormat === 'HH:mm:ss.SSS'\"\n          >\n          <button\n            [disabled]=\"instance?.component?.disabled\"\n            fxFlex=\"25%\"\n            (click)=\"changePeriod()\"\n          >\n            {{period}}\n          </button>\n        </div>\n        <mat-error *ngIf=\"instance.error\">{{ instance.error.message }}</mat-error>\n      </div>\n    </ng-template>\n  "
                },] }
    ];
    MaterialTimeComponent.propDecorators = {
        selectedEvent: [{ type: core.Output }],
        hourStep: [{ type: core.Input }],
        minuteStep: [{ type: core.Input }],
        secondStep: [{ type: core.Input }],
        renderElementOnly: [{ type: core.Input }]
    };
    TimeComponent__default['default'].MaterialComponent = MaterialTimeComponent;

    var Components = require('formiojs/components/Components').default;
    // Set the components.
    var components = {
        textfield: TextFieldComponent__default['default'],
        password: PasswordComponent__default['default'],
        url: UrlComponent__default['default'],
        checkbox: CheckboxComponent__default['default'],
        email: EmailComponent__default['default'],
        phoneNumber: PhoneNumberComponent__default['default'],
        number: NumberComponent__default['default'],
        currency: CurrencyComponent__default['default'],
        day: DayComponent__default['default'],
        hidden: HiddenComponent__default['default'],
        htmlelement: HtmlComponent__default['default'],
        tags: TagsComponent__default['default'],
        textarea: TextAreaComponent__default['default'],
        button: ButtonComponent__default['default'],
        datetime: DateTimeComponent__default['default'],
        panel: PanelComponent__default['default'],
        columns: ColumnsComponent__default['default'],
        tabs: TabsComponent__default['default'],
        table: TableComponent__default['default'],
        well: WellComponent__default['default'],
        fieldset: FieldsetComponent__default['default'],
        content: ContentComponent__default['default'],
        signature: SignatureComponent__default['default'],
        survey: SurveyComponent__default['default'],
        selectboxes: SelectBoxesComponent__default['default'],
        radio: RadioComponent__default['default'],
        select: SelectComponent__default['default'],
        container: ContainerComponent__default['default'],
        datagrid: DataGridComponent__default['default'],
        editgrid: EditGridComponent__default['default'],
        unknown: FormioComponent,
        time: TimeComponent__default['default'],
        wizard: Wizard__default['default']
    };
    function getComponents() {
        var e_1, _a;
        var _loop_1 = function (type) {
            var CompClass = components[type];
            CompClass.prototype.render = (function () {
                if (this.materialComponent) {
                    return this.materialComponent.renderComponents();
                }
                var viewContainer = this.parent ? this.parent.viewContainer(this) : this.viewContainer(this);
                if (!viewContainer) {
                    return;
                }
                var factory = this.options.viewResolver.resolveComponentFactory(CompClass.MaterialComponent);
                var componentRef = viewContainer.createComponent(factory);
                componentRef.instance.setInstance(this);
            });
            var setValue = CompClass.prototype.setValue;
            CompClass.prototype.setValue = (function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.materialComponent) {
                    this.materialComponent.setValue(args[0]);
                }
                return setValue.call.apply(setValue, __spread([this], args));
            });
            components[type] = CompClass;
        };
        try {
            for (var _b = __values(Object.keys(components)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var type = _c.value;
                _loop_1(type);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return components;
    }
    function registerComponent(name, CompClass) {
        var DummyComponent = /** @class */ (function (_super) {
            __extends(DummyComponent, _super);
            function DummyComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DummyComponent;
        }(FormioComponent__default['default']));
        ;
        var formIOComp = DummyComponent;
        formIOComp.MaterialComponent = CompClass;
        formIOComp.prototype.render = (function () {
            if (this.materialComponent) {
                return this.materialComponent;
            }
            var viewContainer = this.parent ? this.parent.viewContainer(this) : this.viewContainer(this);
            if (!viewContainer) {
                return;
            }
            var factory = this.options.viewResolver.resolveComponentFactory(formIOComp.MaterialComponent);
            var componentRef = viewContainer.createComponent(factory);
            componentRef.instance.setInstance(this);
        });
        var setValue = formIOComp.prototype.setValue;
        formIOComp.prototype.setValue = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.materialComponent) {
                this.materialComponent.setValue(args[0]);
            }
            return setValue.call.apply(setValue, __spread([this], args));
        });
        Components.addComponent(name, formIOComp);
    }

    var Components$1 = require('formiojs/components/Components').default;
    var Formio = require('formiojs/Formio').default;
    var Form = require('formiojs/Form').default;
    var Utils = require('formiojs/utils').default;
    function initRenderer() {
        Components$1.setComponents(getComponents());
        Formio.Components = Components$1;
        Formio.Templates = {};
    }

    var FormioComponent$1 = /** @class */ (function (_super) {
        __extends(FormioComponent, _super);
        function FormioComponent(resolver, cd, ngZone, config) {
            var _this = _super.call(this, ngZone, config) || this;
            _this.resolver = resolver;
            _this.cd = cd;
            _this.ngZone = ngZone;
            _this.config = config;
            return _this;
        }
        FormioComponent.prototype.getRendererOptions = function () {
            var rendererOptions = _super.prototype.getRendererOptions.call(this);
            return Object.assign(Object.assign({}, rendererOptions), { validateOnInit: _.get(rendererOptions, 'validateOnInit', true) });
        };
        FormioComponent.prototype.createRenderer = function () {
            var _this = this;
            var options = this.getRendererOptions();
            var flags = {
                validateOnInit: options.validateOnInit
            };
            options.viewResolver = this.resolver;
            var form = new Form();
            form._form = this.form;
            form.options = options;
            form.options.events = form.events;
            form.instance = form.create(this.form.display);
            form.instance.viewContainer = function () { return _this.formioViewContainer; };
            if (this.submission && this.submission.data) {
                form.instance.data = this.submission.data;
            }
            this.ngZone.run(function () { return form.instance.setForm(_this.form, flags)
                .then(function () { return form.readyResolve(form.instance); })
                .catch(function () { return form.readyReject(); }); });
            return form.instance;
        };
        return FormioComponent;
    }(angular.FormioBaseComponent));
    FormioComponent$1.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio',
                    template: "\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n    <div *ngIf=\"!this.options?.disableAlerts\">\n      <div *ngFor=\"let alert of alerts.alerts\"\n           class=\"alert alert-{{ alert.type }}\"\n           role=\"alert\"\n      >\n        {{ alert.message }}\n      </div>\n    </div>\n    <div fxLayout=\"column\" fxLayoutGap=\"1em\">\n      <ng-template #formio></ng-template>\n    </div>\n  ",
                    styles: [".alert-danger {\n      color: #721c24;\n      background-color: #f8d7da;\n      border-color: #f5c6cb;\n    }\n    .alert-success {\n      color: #155724;\n      background-color: #d4edda;\n      border-color: #c3e6cb;\n    }\n    .alert {\n      position: relative;\n      padding: .75rem 1.25rem;\n      margin-bottom: 0.5rem;\n      border: 1px solid transparent;\n      border-radius: .25rem;\n    }\n    ::ng-deep mat-card {\n        box-sizing: border-box;\n        -moz-box-sizing: border-box;\n    }\n    "]
                },] }
    ];
    FormioComponent$1.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: angular.FormioAppConfig, decorators: [{ type: core.Optional }] }
    ]; };
    FormioComponent$1.propDecorators = {
        formioViewContainer: [{ type: core.ViewChild, args: ['formio', { static: true, read: core.ViewContainerRef },] }]
    };

    var MaterialCalendarComponent = /** @class */ (function (_super) {
        __extends(MaterialCalendarComponent, _super);
        function MaterialCalendarComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.timeSelectEvent = new core.EventEmitter();
            _this.dateSelectEvent = new core.EventEmitter();
            return _this;
        }
        MaterialCalendarComponent.prototype.setInstance = function (instance) {
            _super.prototype.setInstance.call(this, instance);
        };
        MaterialCalendarComponent.prototype.setExistedDate = function (value) {
            this.selectedDate = value;
        };
        MaterialCalendarComponent.prototype.setExistedTime = function (value, forTime) {
            this.selectedTime = value;
            this.time.setValue(forTime);
        };
        MaterialCalendarComponent.prototype.onDate = function (event) {
            this.selectedDate = event;
            this.dateSelectEvent.emit(this.selectedDate);
        };
        MaterialCalendarComponent.prototype.onTime = function (event) {
            this.selectedTime = event.value;
            this.timeSelectEvent.emit(this.selectedTime);
        };
        MaterialCalendarComponent.prototype.getPopupStyles = function () {
            return {
                position: 'absolute',
                zIndex: '1000',
                display: 'flex',
                maxWidth: '100%',
                maxHeight: '100%',
                top: '90px',
                left: '30px'
            };
        };
        return MaterialCalendarComponent;
    }(MaterialComponent));
    MaterialCalendarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-calendar',
                    template: "\n    <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"0.5%\">\n      <div [ngStyle]=\"getPopupStyles()\">\n        <mat-card style=\"padding: 0;\">\n          <mat-calendar\n                  [dateFilter]=\"dateFilter\"\n                  [maxDate]=\"maxDate\"\n                  [minDate]=\"minDate\"\n                  [selected]=\"selectedDate\"\n                  (selectedChange)=\"onDate($event)\"\n                  class=\"calendar\"\n                  *ngIf=\"enableDate !== false\"\n          >\n          </mat-calendar>\n          <mat-formio-time\n                  #time\n                  [hourStep]=\"hourStep\"\n                  [instance]=\"instance\"\n                  [renderElementOnly]=\"true\"\n                  [minuteStep]=\"minuteStep\"\n                  (selectedEvent)=\"onTime($event)\"\n                  class=\"ml-3 formio-time\"\n                  *ngIf=\"enableTime\"\n          >\n          </mat-formio-time>\n        </mat-card>\n      </div>\n    </div>\n  ",
                    styles: [".calendar, .formio-time {\n      padding: 16px;\n      background-color: white;\n      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n    }\n    .formio-time {\n      display: flex;\n    }\n    "]
                },] }
    ];
    MaterialCalendarComponent.propDecorators = {
        time: [{ type: core.ViewChild, args: ['time',] }],
        enableDate: [{ type: core.Input }],
        enableTime: [{ type: core.Input }],
        minDate: [{ type: core.Input }],
        maxDate: [{ type: core.Input }],
        dateFilter: [{ type: core.Input }],
        hourStep: [{ type: core.Input }],
        minuteStep: [{ type: core.Input }],
        timeSelectEvent: [{ type: core.Output }],
        dateSelectEvent: [{ type: core.Output }]
    };

    var LabelPositions;
    (function (LabelPositions) {
        LabelPositions["RIGHT_RIGHT"] = "right-right";
        LabelPositions["RIGHT_LEFT"] = "right-left";
        LabelPositions["LEFT_LEFT"] = "left-left";
        LabelPositions["LEFT_RIGHT"] = "left-right";
        LabelPositions["BOTTOM"] = "bottom";
        LabelPositions["TOP"] = "top";
    })(LabelPositions || (LabelPositions = {}));

    var FormioFormFieldComponent = /** @class */ (function () {
        function FormioFormFieldComponent() {
            this.labelPositions = LabelPositions;
            this.renderTopLabel = false;
            this.showDescription = true;
            this.renderElementOnly = false;
        }
        Object.defineProperty(FormioFormFieldComponent.prototype, "instance", {
            get: function () {
                return this._instance;
            },
            set: function (instance) {
                this._instance = instance;
                if (instance) {
                    this.componentTemplateContext = { $implicit: this.hasLabel(['top']) };
                }
            },
            enumerable: false,
            configurable: true
        });
        FormioFormFieldComponent.prototype.hasLabel = function (labelPositions) {
            var component = this.instance.component;
            var hasNoLabel = !component.label || component.hideLabel;
            var labelPositionIsNotSpecified = !labelPositions ||
                !labelPositions.length ||
                !component.labelPosition;
            if (hasNoLabel || labelPositionIsNotSpecified || this.renderElementOnly) {
                return false;
            }
            if (labelPositions.includes(component.labelPosition)) {
                return true;
            }
        };
        return FormioFormFieldComponent;
    }());
    FormioFormFieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-formio-form-field',
                    template: "<div class=\"mat-formio-component-wrapper\" *ngIf=\"instance && !renderElementOnly\"\n     [ngClass]=\"{\n        'mat-formio-label-right': hasLabel([labelPositions.RIGHT_RIGHT, labelPositions.RIGHT_LEFT]),\n        'mat-formio-label-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.LEFT_RIGHT])\n     }\"\n>\n  <span *ngIf=\"renderTopLabel && hasLabel([labelPositions.TOP])\"\n        class=\"mat-formio-label\"\n        [ngClass]=\"{\n          'mat-formio-label-align-right': hasLabel([labelPositions.LEFT_RIGHT, labelPositions.RIGHT_RIGHT]),\n          'mat-formio-label-align-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.RIGHT_LEFT])\n        }\"\n  >\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultLabel\"></ng-container>\n  </span>\n\n  <div class=\"mat-formio-component\" *ngTemplateOutlet=\"componentTemplate; context: componentTemplateContext\"></div>\n\n  <span *ngIf=\"hasLabel([\n                          labelPositions.BOTTOM,\n                          labelPositions.RIGHT_RIGHT,\n                          labelPositions.RIGHT_LEFT,\n                          labelPositions.LEFT_LEFT,\n                          labelPositions.LEFT_RIGHT\n                        ])\"\n        class=\"mat-formio-label\"\n        [ngClass]=\"{\n          'mat-formio-label-align-right': hasLabel([labelPositions.LEFT_RIGHT, labelPositions.RIGHT_RIGHT]),\n          'mat-formio-label-align-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.RIGHT_LEFT])\n        }\"\n  >\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultLabel\"></ng-container>\n  </span>\n\n  <mat-hint *ngIf=\"showDescription && instance.component.description\" class=\"mat-formio-component-description\">\n    {{ instance.component.description }}\n  </mat-hint>\n</div>\n\n<div class=\"mat-formio-component-wrapper\" *ngIf=\"renderElementOnly\">\n  <div class=\"mat-formio-component\" *ngTemplateOutlet=\"componentTemplate; context: componentTemplateContext\"></div>\n</div>\n\n<ng-template #defaultLabel>\n  <mat-label>\n    <span style=\"display: block;\"\n          [instance]=\"instance\" matFormioLabel>\n    </span>\n  </mat-label>\n</ng-template>\n",
                    styles: [".mat-formio-component-description{-ms-grid-column:1;-ms-grid-row:2;display:block;grid-area:description}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-component-description{-ms-grid-column:2;-ms-grid-row:2}.mat-formio-component{-ms-grid-column:1;-ms-grid-row:1;grid-area:component}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-component{-ms-grid-column:2;-ms-grid-row:1}.mat-formio-label{-ms-grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-area:label}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-label{-ms-grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2}.mat-formio-label.mat-formio-label-align-right{margin-left:auto}.mat-formio-label.mat-formio-label-align-left{margin-right:auto}.mat-formio-component-wrapper.mat-formio-label-left,.mat-formio-component-wrapper.mat-formio-label-right{-ms-grid-columns:auto auto;display:-ms-grid;display:grid;grid-column-gap:1em;grid-template-columns:auto auto}.mat-formio-component-wrapper.mat-formio-label-right{grid-template-areas:\"component label\" \"description label\"}.mat-formio-component-wrapper.mat-formio-label-left{grid-template-areas:\"label component\" \"label description\"}"]
                },] }
    ];
    FormioFormFieldComponent.propDecorators = {
        labelTemplate: [{ type: core.Input }],
        renderTopLabel: [{ type: core.Input }],
        showDescription: [{ type: core.Input }],
        renderElementOnly: [{ type: core.Input }],
        instance: [{ type: core.Input, args: ['instance',] }],
        componentTemplate: [{ type: core.Input }]
    };

    var LabelComponent = /** @class */ (function () {
        function LabelComponent() {
        }
        return LabelComponent;
    }());
    LabelComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'span[matFormioLabel]',
                    template: "<ng-container *ngIf=\"instance\">\n  {{ instance.component.label }}<span class=\"required-star\" *ngIf=\"instance.component.validate.required\">*</span>\n  <mat-icon *ngIf=\"instance.component.tooltip\" style=\"font-size: 1rem;\"\n            matTooltip=\"{{ instance.component.tooltip }}\" matSuffix\n  >\n    info\n  </mat-icon>\n</ng-container>\n",
                    styles: [":host{display:block;pointer-events:all}.required-star{color:red;font-size:.8rem;margin-left:.2rem;vertical-align:top}"]
                },] }
    ];
    LabelComponent.propDecorators = {
        instance: [{ type: core.Input }]
    };

    var MaskDirective = /** @class */ (function () {
        function MaskDirective(elementRef) {
            this.elementRef = elementRef;
        }
        Object.defineProperty(MaskDirective.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.formatValue(value);
            },
            enumerable: false,
            configurable: true
        });
        MaskDirective.prototype.formatValue = function (value) {
            if (value !== null) {
                this.elementRef.nativeElement.value = this.format(value);
            }
            else {
                this.elementRef.nativeElement.value = '';
            }
        };
        MaskDirective.prototype._onChange = function (value) {
        };
        MaskDirective.prototype.writeValue = function (value) {
            this._value = value;
            this.formatValue(this._value); // format Value
        };
        MaskDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        MaskDirective.prototype.registerOnTouched = function () {
        };
        return MaskDirective;
    }());
    MaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[matMask]',
                    providers: [
                        { provide: input.MAT_INPUT_VALUE_ACCESSOR, useExisting: MaskDirective },
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return MaskDirective; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    MaskDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    MaskDirective.propDecorators = {
        format: [{ type: core.Input, args: ['matMask',] }],
        value: [{ type: core.Input, args: ['value',] }]
    };

    var MatFormioModule = /** @class */ (function () {
        function MatFormioModule() {
            initRenderer();
        }
        return MatFormioModule;
    }());
    MatFormioModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        FormioComponent$1,
                        MaterialButtonComponent,
                        MaterialTextfieldComponent,
                        MaterialPasswordComponent,
                        MaterialUrlComponent,
                        MaterialEmailComponent,
                        MaterialPhoneNumberComponent,
                        MaterialNumberComponent,
                        MaterialCurrencyComponent,
                        MaterialDayComponent,
                        MaterialHiddenComponent,
                        MaterialHtmlComponent,
                        MaterialTagsComponent,
                        MaterialTextareaComponent,
                        MaterialColumnsComponent,
                        MaterialContainerComponent,
                        MaterialDataGridComponent,
                        MaterialEditGridComponent,
                        MaterialPanelComponent,
                        MaterialCheckboxComponent,
                        MaterialFieldsetComponent,
                        MaterialContentComponent,
                        MaterialSignatureComponent,
                        MaterialSurveyComponent,
                        MaterialSelectBoxesComponent,
                        MaterialRadioComponent,
                        MaterialSelectComponent,
                        MaterialTabsComponent,
                        MaterialTableComponent,
                        MaterialDateComponent,
                        MaterialWellComponent,
                        MaterialWizardComponent,
                        MaterialComponent,
                        MaterialNestedComponent,
                        MaterialTimeComponent,
                        MaterialCalendarComponent,
                        FormioFormFieldComponent,
                        LabelComponent,
                        MaskDirective
                    ],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        flexLayout.FlexLayoutModule,
                        input.MatInputModule,
                        formField.MatFormFieldModule,
                        checkbox.MatCheckboxModule,
                        radio.MatRadioModule,
                        select.MatSelectModule,
                        list.MatListModule,
                        chips.MatChipsModule,
                        expansion.MatExpansionModule,
                        button.MatButtonModule,
                        card.MatCardModule,
                        stepper.MatStepperModule,
                        tabs.MatTabsModule,
                        table.MatTableModule,
                        core$1.MatNativeDateModule,
                        datepicker.MatDatepickerModule,
                        progressSpinner.MatProgressSpinnerModule,
                        tooltip.MatTooltipModule,
                        icon.MatIconModule,
                        menu.MatMenuModule,
                        dragDrop.DragDropModule
                    ],
                    exports: [
                        FormioComponent$1,
                        flexLayout.FlexLayoutModule,
                        input.MatInputModule,
                        formField.MatFormFieldModule,
                        checkbox.MatCheckboxModule,
                        radio.MatRadioModule,
                        select.MatSelectModule,
                        list.MatListModule,
                        chips.MatChipsModule,
                        expansion.MatExpansionModule,
                        button.MatButtonModule,
                        card.MatCardModule,
                        tabs.MatTabsModule,
                        table.MatTableModule,
                        core$1.MatNativeDateModule,
                        datepicker.MatDatepickerModule,
                        progressSpinner.MatProgressSpinnerModule,
                        tooltip.MatTooltipModule,
                        icon.MatIconModule
                    ],
                    entryComponents: [
                        MaterialButtonComponent,
                        MaterialTextfieldComponent,
                        MaterialPasswordComponent,
                        MaterialUrlComponent,
                        MaterialEmailComponent,
                        MaterialPhoneNumberComponent,
                        MaterialNumberComponent,
                        MaterialCurrencyComponent,
                        MaterialDayComponent,
                        MaterialHiddenComponent,
                        MaterialHtmlComponent,
                        MaterialTagsComponent,
                        MaterialTextareaComponent,
                        MaterialColumnsComponent,
                        MaterialContainerComponent,
                        MaterialDataGridComponent,
                        MaterialEditGridComponent,
                        MaterialPanelComponent,
                        MaterialCheckboxComponent,
                        MaterialFieldsetComponent,
                        MaterialContentComponent,
                        MaterialSignatureComponent,
                        MaterialSurveyComponent,
                        MaterialSelectBoxesComponent,
                        MaterialRadioComponent,
                        MaterialSelectComponent,
                        MaterialTabsComponent,
                        MaterialTableComponent,
                        MaterialDateComponent,
                        MaterialWellComponent,
                        MaterialComponent,
                        MaterialNestedComponent,
                        MaterialTimeComponent,
                        MaterialWizardComponent
                    ],
                    providers: []
                },] }
    ];
    MatFormioModule.ctorParameters = function () { return []; };

    /*
     * Public API Surface of angular-material-formio
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Components = Components$1;
    exports.Form = Form;
    exports.Formio = Formio;
    exports.FormioComponent = FormioComponent$1;
    exports.MatFormioModule = MatFormioModule;
    exports.MaterialButtonComponent = MaterialButtonComponent;
    exports.MaterialCheckboxComponent = MaterialCheckboxComponent;
    exports.MaterialColumnsComponent = MaterialColumnsComponent;
    exports.MaterialComponent = MaterialComponent;
    exports.MaterialContainerComponent = MaterialContainerComponent;
    exports.MaterialContentComponent = MaterialContentComponent;
    exports.MaterialCurrencyComponent = MaterialCurrencyComponent;
    exports.MaterialDataGridComponent = MaterialDataGridComponent;
    exports.MaterialDateComponent = MaterialDateComponent;
    exports.MaterialDayComponent = MaterialDayComponent;
    exports.MaterialEditGridComponent = MaterialEditGridComponent;
    exports.MaterialEmailComponent = MaterialEmailComponent;
    exports.MaterialFieldsetComponent = MaterialFieldsetComponent;
    exports.MaterialHiddenComponent = MaterialHiddenComponent;
    exports.MaterialHtmlComponent = MaterialHtmlComponent;
    exports.MaterialNestedComponent = MaterialNestedComponent;
    exports.MaterialNumberComponent = MaterialNumberComponent;
    exports.MaterialPanelComponent = MaterialPanelComponent;
    exports.MaterialPasswordComponent = MaterialPasswordComponent;
    exports.MaterialPhoneNumberComponent = MaterialPhoneNumberComponent;
    exports.MaterialRadioComponent = MaterialRadioComponent;
    exports.MaterialSelectBoxesComponent = MaterialSelectBoxesComponent;
    exports.MaterialSelectComponent = MaterialSelectComponent;
    exports.MaterialSignatureComponent = MaterialSignatureComponent;
    exports.MaterialSurveyComponent = MaterialSurveyComponent;
    exports.MaterialTableComponent = MaterialTableComponent;
    exports.MaterialTabsComponent = MaterialTabsComponent;
    exports.MaterialTagsComponent = MaterialTagsComponent;
    exports.MaterialTextareaComponent = MaterialTextareaComponent;
    exports.MaterialTextfieldComponent = MaterialTextfieldComponent;
    exports.MaterialTimeComponent = MaterialTimeComponent;
    exports.MaterialUrlComponent = MaterialUrlComponent;
    exports.MaterialWellComponent = MaterialWellComponent;
    exports.Utils = Utils;
    exports.initRenderer = initRenderer;
    exports.registerComponent = registerComponent;
    exports.ɵa = TEXTFIELD_TEMPLATE;
    exports.ɵb = MaterialWizardComponent;
    exports.ɵc = MaterialCalendarComponent;
    exports.ɵd = FormioFormFieldComponent;
    exports.ɵe = LabelComponent;
    exports.ɵf = MaskDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=formio-angular-material.umd.js.map
