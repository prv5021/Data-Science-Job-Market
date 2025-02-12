/*!
 jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 Version: v3.2.46
 Url: https://xdsoft.net/jodit/
 License(s): GPL-2.0-or-later OR MIT OR Commercial https://xdsoft.net/jodit/commercial/
*/

! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var o = t();
        for (var i in o)("object" == typeof exports ? exports : e)[i] = o[i]
    }
}(window, function() {
    return i = {}, n.m = o = [function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(2),
            i = o(4),
            r = o(9),
            a = (d.detach = function(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }, d.unwrap = function(e) {
                var t = e.parentNode,
                    o = e;
                if (t) {
                    for (; o.firstChild;) t.insertBefore(o.firstChild, o);
                    d.safeRemove(o)
                }
            }, d.each = function(e, t) {
                var o = e.firstChild;
                if (o)
                    for (; o;) {
                        if (!1 === t.call(o, o) || !d.each(o, t)) return !1;
                        o = d.next(o, function(e) {
                            return !!e
                        }, e)
                    }
                return !0
            }, d.replace = function(e, t, o, i, n) {
                void 0 === o && (o = !1), void 0 === i && (i = !1);
                var r = "string" == typeof t ? n.createElement(t) : t;
                if (!i)
                    for (; e.firstChild;) r.appendChild(e.firstChild);
                return o && Array.from(e.attributes).forEach(function(e) {
                    r.setAttribute(e.name, e.value)
                }), e.parentNode && e.parentNode.replaceChild(r, e), r
            }, d.isEmptyTextNode = function(e) {
                return e && e.nodeType === Node.TEXT_NODE && (!e.nodeValue || 0 === e.nodeValue.replace(n.INVISIBLE_SPACE_REG_EXP, "").length)
            }, d.isEmpty = function(e, t) {
                return void 0 === t && (t = /^(img|svg|canvas|input|textarea|form)$/), !e || (e.nodeType === Node.TEXT_NODE ? null === e.nodeValue || 0 === r.trim(e.nodeValue).length : !e.nodeName.toLowerCase().match(t) && d.each(e, function(e) {
                    if (e && e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && 0 !== r.trim(e.nodeValue).length || e && e.nodeType === Node.ELEMENT_NODE && t.test(e.nodeName.toLowerCase())) return !1
                }))
            }, d.isNode = function(e, t) {
                return !("object" != typeof t || !t || "function" != typeof t.Node && "object" != typeof t.Node) && e instanceof t.Node
            }, d.isCell = function(e, t) {
                return d.isNode(e, t) && /^(td|th)$/i.test(e.nodeName)
            }, d.isImage = function(e, t) {
                return d.isNode(e, t) && /^(img|svg|picture|canvas)$/i.test(e.nodeName)
            }, d.isBlock = function(e, t) {
                return e && "object" == typeof e && d.isNode(e, t) && n.IS_BLOCK.test(e.nodeName)
            }, d.isInlineBlock = function(e) {
                return !!e && e.nodeType === Node.ELEMENT_NODE && !!~["inline", "inline-block"].indexOf("" + i.css(e, "display"))
            }, d.canSplitBlock = function(e, t) {
                return e && e instanceof t.HTMLElement && this.isBlock(e, t) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && void 0 !== e.style && !/^(fixed|absolute)/i.test(e.style.position)
            }, d.prev = function(e, t, o, i) {
                return void 0 === i && (i = !0), d.find(e, t, o, !1, "previousSibling", !!i && "lastChild")
            }, d.next = function(e, t, o, i) {
                return void 0 === i && (i = !0), d.find(e, t, o, void 0, void 0, i ? "firstChild" : "")
            }, d.prevWithClass = function(e, t) {
                return this.prev(e, function(e) {
                    return e && e.nodeType === Node.ELEMENT_NODE && e.classList.contains(t)
                }, e.parentNode)
            }, d.nextWithClass = function(e, t) {
                return this.next(e, function(e) {
                    return e && e.nodeType === Node.ELEMENT_NODE && e.classList.contains(t)
                }, e.parentNode)
            }, d.find = function(e, t, o, i, n, r) {
                if (void 0 === i && (i = !1), void 0 === n && (n = "nextSibling"), void 0 === r && (r = "firstChild"), i && t(e)) return e;
                var a, s = e;
                do {
                    if (t(a = s[n])) return a || !1;
                    if (r && a && a[r]) {
                        var l = d.find(a[r], t, a, !0, n, r);
                        if (l) return l
                    }
                    s = a = a || s.parentNode
                } while (s && s !== o);
                return !1
            }, d.findWithCurrent = function(e, t, o, i, n) {
                void 0 === i && (i = "nextSibling"), void 0 === n && (n = "firstChild");
                var r = e;
                do {
                    if (t(r)) return r || !1;
                    if (n && r && r[n]) {
                        var a = d.findWithCurrent(r[n], t, r, i, n);
                        if (a) return a
                    }
                    for (; r && !r[i] && r !== o;) r = r.parentNode;
                    r && r[i] && r !== o && (r = r[i])
                } while (r && r !== o);
                return !1
            }, d.up = function(e, t, o) {
                var i = e;
                if (!e) return !1;
                do {
                    if (t(i)) return i;
                    if (i === o || !i.parentNode) break;
                    i = i.parentNode
                } while (i && i !== o);
                return !1
            }, d.closest = function(e, t, o) {
                return d.up(e, "function" == typeof t ? t : t instanceof RegExp ? function(e) {
                    return e && t.test(e.nodeName)
                } : function(e) {
                    return e && RegExp("^(" + t + ")$", "i").test(e.nodeName)
                }, o)
            }, d.after = function(e, t) {
                var o = e.parentNode;
                o && (o.lastChild === e ? o.appendChild(t) : o.insertBefore(t, e.nextSibling))
            }, d.moveContent = function(e, t, o) {
                void 0 === o && (o = !1);
                var i = (e.ownerDocument || document).createDocumentFragment();
                [].slice.call(e.childNodes).forEach(function(e) {
                    e.nodeType === Node.TEXT_NODE && e.nodeValue === n.INVISIBLE_SPACE || i.appendChild(e)
                }), o && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
            }, d.all = function(e, t, o) {
                void 0 === o && (o = !1);
                var i = e.childNodes ? Array.prototype.slice.call(e.childNodes) : [];
                if (t(e)) return e;
                o && (i = i.reverse()), i.forEach(function(e) {
                    d.all(e, t, o)
                })
            }, d.safeRemove = function(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }, d.wrapInline = function(e, t, o) {
                for (var i, n = e, r = e, a = o.selection.save(), s = !1; s = !1, (i = n.previousSibling) && !d.isBlock(i, o.editorWindow) && (s = !0, n = i), s;);
                for (; s = !1, (i = r.nextSibling) && !d.isBlock(i, o.editorWindow) && (s = !0, r = i), s;);
                var l = "string" == typeof t ? o.create.inside.element(t) : t;
                n.parentNode && n.parentNode.insertBefore(l, n);
                for (var c = n; c && (c = n.nextSibling, l.appendChild(n), n !== r && c);) n = c;
                return o.selection.restore(a), l
            }, d.wrap = function(e, t, o) {
                var i = o.selection.save(),
                    n = "string" == typeof t ? o.editorDocument.createElement(t) : t;
                return e.parentNode ? (e.parentNode.insertBefore(n, e), n.appendChild(e), o.selection.restore(i), n) : null
            }, d.findInline = function(e, t, o) {
                var i = e,
                    n = null;
                do {
                    if (!i) break;
                    if ((n = t ? i.previousSibling : i.nextSibling) || !i.parentNode || i.parentNode === o || !d.isInlineBlock(i.parentNode)) break;
                    i = i.parentNode
                } while (!n);
                for (; n && d.isInlineBlock(n) && (t ? n.lastChild : n.firstChild);) n = t ? n.lastChild : n.firstChild;
                return n
            }, d.contains = function(e, t) {
                for (; t.parentNode;) {
                    if (t.parentNode === e) return !0;
                    t = t.parentNode
                }
                return !1
            }, d.isOrContains = function(e, t, o) {
                return void 0 === o && (o = !1), t && e && (e === t && !o || d.contains(e, t))
            }, d);

        function d() {}
        t.Dom = a
    }, function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "__extends", function() {
            return n
        }), o.d(t, "__assign", function() {
            return r
        }), o.d(t, "__rest", function() {
            return a
        }), o.d(t, "__decorate", function() {
            return s
        }), o.d(t, "__param", function() {
            return l
        }), o.d(t, "__metadata", function() {
            return c
        }), o.d(t, "__awaiter", function() {
            return d
        }), o.d(t, "__generator", function() {
            return u
        }), o.d(t, "__exportStar", function() {
            return f
        }), o.d(t, "__values", function() {
            return p
        }), o.d(t, "__read", function() {
            return h
        }), o.d(t, "__spread", function() {
            return v
        }), o.d(t, "__spreadArrays", function() {
            return m
        }), o.d(t, "__await", function() {
            return g
        }), o.d(t, "__asyncGenerator", function() {
            return _
        }), o.d(t, "__asyncDelegator", function() {
            return b
        }), o.d(t, "__asyncValues", function() {
            return y
        }), o.d(t, "__makeTemplateObject", function() {
            return w
        }), o.d(t, "__importStar", function() {
            return C
        }), o.d(t, "__importDefault", function() {
            return E
        });
        var i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        };

        function n(e, t) {
            function o() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }
        var r = function() {
            return (r = Object.assign || function(e) {
                for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        };

        function a(e, t) {
            var o = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && !~t.indexOf(i) && (o[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) !~t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (o[i[n]] = e[i[n]])
            }
            return o
        }

        function s(e, t, o, i) {
            var n, r = arguments.length,
                a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; 0 <= s; s--)(n = e[s]) && (a = (r < 3 ? n(a) : 3 < r ? n(t, o, a) : n(t, o)) || a);
            return 3 < r && a && Object.defineProperty(t, o, a), a
        }

        function l(o, i) {
            return function(e, t) {
                i(e, t, o)
            }
        }

        function c(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function d(r, a, s, l) {
            return new(s = s || Promise)(function(e, t) {
                function o(e) {
                    try {
                        n(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        n(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(t) {
                    t.done ? e(t.value) : new s(function(e) {
                        e(t.value)
                    }).then(o, i)
                }
                n((l = l.apply(r, a || [])).next())
            })
        }

        function u(o, i) {
            var n, r, a, e, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || a[0] < t[1] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = i.call(o, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            n = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }

        function f(e, t) {
            for (var o in e) t.hasOwnProperty(o) || (t[o] = e[o])
        }

        function p(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator],
                o = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && e.length <= o && (e = void 0), {
                        value: e && e[o++],
                        done: !e
                    }
                }
            }
        }

        function h(e, t) {
            var o = "function" == typeof Symbol && e[Symbol.iterator];
            if (!o) return e;
            var i, n, r = o.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || 0 < t--) && !(i = r.next()).done;) a.push(i.value)
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (o = r.return) && o.call(r)
                } finally {
                    if (n) throw n.error
                }
            }
            return a
        }

        function v() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
            return e
        }

        function m() {
            for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
            var i = Array(e),
                n = 0;
            for (t = 0; t < o; t++)
                for (var r = arguments[t], a = 0, s = r.length; a < s; a++, n++) i[n] = r[a];
            return i
        }

        function g(e) {
            return this instanceof g ? (this.v = e, this) : new g(e)
        }

        function _(e, t, o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, r = o.apply(e, t || []),
                a = [];
            return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                return this
            }, n;

            function i(i) {
                r[i] && (n[i] = function(o) {
                    return new Promise(function(e, t) {
                        1 < a.push([i, o, e, t]) || s(i, o)
                    })
                })
            }

            function s(e, t) {
                try {
                    (o = r[e](t)).value instanceof g ? Promise.resolve(o.value.v).then(l, c) : d(a[0][2], o)
                } catch (e) {
                    d(a[0][3], e)
                }
                var o
            }

            function l(e) {
                s("next", e)
            }

            function c(e) {
                s("throw", e)
            }

            function d(e, t) {
                e(t), a.shift(), a.length && s(a[0][0], a[0][1])
            }
        }

        function b(i) {
            var e, n;
            return e = {}, t("next"), t("throw", function(e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function() {
                return this
            }, e;

            function t(t, o) {
                e[t] = i[t] ? function(e) {
                    return (n = !n) ? {
                        value: g(i[t](e)),
                        done: "return" === t
                    } : o ? o(e) : e
                } : o
            }
        }

        function y(s) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, t = s[Symbol.asyncIterator];
            return t ? t.call(s) : (s = p(s), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function() {
                return this
            }, e);

            function o(a) {
                e[a] = s[a] && function(r) {
                    return new Promise(function(e, t) {
                        var o, i, n;
                        o = e, i = t, n = (r = s[a](r)).done, Promise.resolve(r.value).then(function(e) {
                            o({
                                value: e,
                                done: n
                            })
                        }, i)
                    })
                }
            }
        }

        function w(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t, e
        }

        function C(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var o in e) Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t.default = e, t
        }

        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INVISIBLE_SPACE = "\ufeff", t.INVISIBLE_SPACE_REG_EXP = /[\uFEFF]/g, t.INVISIBLE_SPACE_REG_EXP_END = /[\uFEFF]+$/g, t.INVISIBLE_SPACE_REG_EXP_START = /^[\uFEFF]+/g, t.SPACE_REG_EXP = /[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_START = /^[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_END = /[\s\n\t\r\uFEFF\u200b]+$/g, t.IS_BLOCK = /^(PRE|DIV|P|LI|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML|FIGCAPTION|FIGURE|DT|DD)$/i, t.IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/, t.MAY_BE_REMOVED_WITH_KEY = /^(IMG|BR|IFRAME|SCRIPT|INPUT|TEXTAREA|HR|JODIT|JODIT-MEDIA)$/, t.KEY_BACKSPACE = 8, t.KEY_TAB = 9, t.KEY_ENTER = 13, t.KEY_ESC = 27, t.KEY_LEFT = 37, t.KEY_UP = 38, t.KEY_RIGHT = 39, t.KEY_DOWN = 40, t.KEY_DELETE = 46, t.KEY_F = 70, t.KEY_R = 82, t.KEY_H = 72, t.KEY_Y = 89, t.KEY_V = 86, t.KEY_Z = 90, t.KEY_F3 = 114, t.NEARBY = 5, t.ACCURACY = 10, t.COMMAND_KEYS = [t.KEY_BACKSPACE, t.KEY_DELETE, t.KEY_UP, t.KEY_DOWN, t.KEY_RIGHT, t.KEY_LEFT, t.KEY_ENTER, t.KEY_ESC, t.KEY_F3, t.KEY_TAB], t.BR = "br", t.PARAGRAPH = "p", t.MODE_WYSIWYG = 1, t.MODE_SOURCE = 2, t.MODE_SPLIT = 3, t.IS_IE = "undefined" != typeof navigator && (!!~navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent)), t.URL_LIST = t.IS_IE ? "url" : "text/uri-list", t.TEXT_PLAIN = t.IS_IE ? "text" : "text/plain", t.TEXT_HTML = t.IS_IE ? "text" : "text/html", t.MARKER_CLASS = "jodit_selection_marker", t.EMULATE_DBLCLICK_TIMEOUT = 300, t.JODIT_SELECTED_CELL_MARKER = "data-jodit-selected-cell", t.INSERT_AS_HTML = "insert_as_html", t.INSERT_CLEAR_HTML = "insert_clear_html", t.INSERT_AS_TEXT = "insert_as_text", t.INSERT_ONLY_TEXT = "insert_only_text", t.IS_MAC = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t.KEY_ALIASES = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: t.IS_MAC ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta"
        }
    }, function(e, t, o) {
        "use strict";
        var s = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(1),
            i = o(2),
            n = o(17),
            c = n.Widget.TabsWidget,
            d = n.Widget.FileSelectorWidget,
            a = o(0),
            u = o(4),
            f = o(6),
            p = o(14),
            h = (Object.defineProperty(r, "defaultOptions", {
                get: function() {
                    return r.__defaultOptions || (r.__defaultOptions = new r), r.__defaultOptions
                },
                enumerable: !0,
                configurable: !0
            }), r);

        function r() {
            this.iframe = !1, this.license = "", this.preset = "custom", this.presets = {
                inline: {
                    inline: !0,
                    toolbar: !1,
                    toolbarInline: !0,
                    popup: {
                        selection: ["bold", "underline", "italic", "ul", "ol", "outdent", "indent", "\n", "fontsize", "brush", "paragraph", "link", "align", "cut", "dots"]
                    },
                    showXPathInStatusbar: !1,
                    showCharsCounter: !1,
                    showWordsCounter: !1,
                    showPlaceholder: !1
                }
            }, this.ownerDocument = "undefined" != typeof document ? document : null, this.ownerWindow = "undefined" != typeof window ? window : null, this.zIndex = 0, this.readonly = !1, this.disabled = !1, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.toolbarButtonSize = "middle", this.inline = !1, this.theme = "default", this.saveModeInStorage = !1, this.saveHeightInStorage = !1, this.spellcheck = !0, this.editorCssClass = !1, this.triggerChangeEvent = !0, this.width = "auto", this.minWidth = "200px", this.maxWidth = "100%", this.height = "auto", this.minHeight = 200, this.direction = "", this.language = "auto", this.debugLanguage = !1, this.i18n = "en", this.tabIndex = -1, this.toolbar = !0, this.showTooltip = !0, this.showTooltipDelay = 500, this.useNativeTooltip = !1, this.enter = i.PARAGRAPH, this.enterBlock = i.PARAGRAPH, this.defaultMode = i.MODE_WYSIWYG, this.useSplitMode = !1, this.colors = {
                greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"],
                palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"],
                full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"]
            }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraButtons = [], this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = ["source", "|", "bold", "strikethrough", "underline", "italic", "|", "superscript", "subscript", "|", "ul", "ol", "|", "outdent", "indent", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "file", "video", "table", "link", "|", "align", "undo", "redo", "\n", "cut", "hr", "eraser", "copyformat", "|", "symbol", "fullsize", "selectall", "print", "about"], this.buttonsMD = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "hr", "eraser", "copyformat", "fullsize", "dots"], this.buttonsSM = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "eraser", "copyformat", "fullsize", "dots"], this.buttonsXS = ["bold", "image", "|", "brush", "paragraph", "|", "align", "|", "undo", "redo", "|", "eraser", "dots"], this.events = {}, this.textIcons = !1, this.showBrowserColorPicker = !1
        }
        t.Config = h, t.OptionsDefault = function(e) {
            var i = this,
                n = this;
            if (void 0 !== (n.plainOptions = e) && "object" == typeof e) {
                var r = function(e, t) {
                    if ("preset" === t && void 0 !== h.defaultOptions.presets[e.preset]) {
                        var o = h.defaultOptions.presets[e.preset];
                        Object.keys(o).forEach(r.bind(i, o))
                    }
                    n[t] = "object" != typeof h.defaultOptions[t] || Array.isArray(h.defaultOptions[t]) ? e[t] : p.extend(!0, {}, h.defaultOptions[t], e[t])
                };
                Object.keys(e).forEach(r.bind(this, e))
            }
        }, h.prototype.controls = {
            print: {
                exec: function(e) {
                    var t = window.open("", "PRINT");
                    t && (e.options.iframe ? (e.events.fire("generateDocumentStructure.iframe", t.document, e), t.document.body.innerHTML = e.value) : (t.document.write('<!doctype html><html lang="' + u.defaultLanguage(e.options.language) + '"><head><title></title></head><body>' + e.value + "</body></html>"), t.document.close()), t.focus(), t.print(), t.close())
                },
                mode: i.MODE_SOURCE + i.MODE_WYSIWYG
            },
            about: {
                exec: function(e) {
                    var t = e.getInstance("Dialog");
                    t.setTitle(e.i18n("About Jodit")), t.setContent('<div class="jodit_about">\t\t\t\t\t\t\t\t\t\t<div>' + e.i18n("Jodit Editor") + " v." + e.getVersion() + " </div><div>" + e.i18n("License: %s", u.isLicense(e.options.license) ? u.normalizeLicense(e.options.license) : e.i18n("GNU General Public License, version 2 or later")) + '</div><div><a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a></div><div><a href="https://xdsoft.net/jodit/doc/" target="_blank">' + e.i18n("Jodit User's Guide") + "</a> " + e.i18n("contains detailed help for using") + "</div><div>" + e.i18n("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.") + "</div></div>"), t.open()
                },
                tooltip: "About Jodit",
                mode: i.MODE_SOURCE + i.MODE_WYSIWYG
            },
            hr: {
                command: "insertHorizontalRule",
                tags: ["hr"],
                tooltip: "Insert Horizontal Line"
            },
            image: {
                popup: function(n, e, t, r) {
                    var a = null;
                    return e && e.nodeType !== Node.TEXT_NODE && ("IMG" === e.tagName || u.$$("img", e).length) && (a = "IMG" === e.tagName ? e : u.$$("img", e)[0]), d(n, {
                        filebrowser: function(o) {
                            return l.__awaiter(s, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!o.files || !o.files.length) return [3, 4];
                                            t = 0, e.label = 1;
                                        case 1:
                                            return t < o.files.length ? [4, n.selection.insertImage(o.baseurl + o.files[t], null, n.options.imageDefaultWidth)] : [3, 4];
                                        case 2:
                                            e.sent(), e.label = 3;
                                        case 3:
                                            return t += 1, [3, 1];
                                        case 4:
                                            return r(), [2]
                                    }
                                })
                            })
                        },
                        upload: function(o) {
                            return l.__awaiter(s, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!o.files || !o.files.length) return [3, 4];
                                            t = 0, e.label = 1;
                                        case 1:
                                            return t < o.files.length ? [4, n.selection.insertImage(o.baseurl + o.files[t], null, n.options.imageDefaultWidth)] : [3, 4];
                                        case 2:
                                            e.sent(), e.label = 3;
                                        case 3:
                                            return t += 1, [3, 1];
                                        case 4:
                                            return r(), [2]
                                    }
                                })
                            })
                        },
                        url: function(o, i) {
                            return l.__awaiter(s, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return (t = a || n.create.inside.element("img")).setAttribute("src", o), t.setAttribute("alt", i), a ? [3, 2] : [4, n.selection.insertImage(t, null, n.options.imageDefaultWidth)];
                                        case 1:
                                            e.sent(), e.label = 2;
                                        case 2:
                                            return r(), [2]
                                    }
                                })
                            })
                        }
                    }, a, r)
                },
                tags: ["img"],
                tooltip: "Insert Image"
            },
            file: {
                popup: function(o, e, t, i) {
                    function n(e, t) {
                        void 0 === t && (t = ""), o.selection.insertNode(o.create.inside.fromHTML('<a href="' + e + '" title="' + t + '">' + (t || e) + "</a>"))
                    }
                    var r = null;
                    return e && ("A" === e.nodeName || a.Dom.closest(e, "A", o.editor)) && (r = "A" === e.nodeName ? e : a.Dom.closest(e, "A", o.editor)), d(o, {
                        filebrowser: function(e) {
                            if (e.files && e.files.length) {
                                var t = void 0;
                                for (t = 0; t < e.files.length; t += 1) n(e.baseurl + e.files[t])
                            }
                            i()
                        },
                        upload: function(e) {
                            var t;
                            if (e.files && e.files.length)
                                for (t = 0; t < e.files.length; t += 1) n(e.baseurl + e.files[t]);
                            i()
                        },
                        url: function(e, t) {
                            r ? (r.setAttribute("href", e), r.setAttribute("title", t)) : n(e, t), i()
                        }
                    }, r, i, !1)
                },
                tags: ["a"],
                tooltip: "Insert file"
            },
            video: {
                popup: function(t, e, o, i) {
                    function n(e) {
                        t.selection.restore(l), t.selection.insertHTML(e), i()
                    }
                    var r = t.create.fromHTML('<form class="jodit_form">\n\t\t\t\t\t\t\t\t\t\t\t\t<input required name="code" placeholder="http://" type="url"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="submit">' + t.i18n("Insert") + "</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>"),
                        a = t.create.fromHTML('<form class="jodit_form">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea required name="code" placeholder="' + t.i18n("Embed code") + '"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="submit">' + t.i18n("Insert") + "</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>"),
                        s = {},
                        l = t.selection.save();
                    return t.options.textIcons ? (s[t.i18n("Link")] = r, s[t.i18n("Code")] = a) : (s[f.ToolbarIcon.getIcon("link") + "&nbsp;" + t.i18n("Link")] = r, s[f.ToolbarIcon.getIcon("source") + "&nbsp;" + t.i18n("Code")] = a), a.addEventListener("submit", function(e) {
                        return e.preventDefault(), u.trim(u.val(a, "textarea[name=code]")) ? n(u.val(a, "textarea[name=code]")) : (a.querySelector("textarea[name=code]").focus(), a.querySelector("textarea[name=code]").classList.add("jodit_error")), !1
                    }), r.addEventListener("submit", function(e) {
                        return e.preventDefault(), u.isURL(u.val(r, "input[name=code]")) ? n(u.convertMediaURLToVideoEmbed(u.val(r, "input[name=code]"))) : (r.querySelector("input[name=code]").focus(), r.querySelector("input[name=code]").classList.add("jodit_error")), !1
                    }), c(t, s)
                },
                tags: ["iframe"],
                tooltip: "Insert youtube/vimeo video"
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(29), t), i.__exportStar(o(5), t), i.__exportStar(o(14), t), i.__exportStar(o(43), t), i.__exportStar(o(82), t), i.__exportStar(o(46), t), i.__exportStar(o(19), t), i.__exportStar(o(23), t), i.__exportStar(o(9), t), i.__exportStar(o(50), t), i.__exportStar(o(101), t), i.__exportStar(o(102), t), i.__exportStar(o(10), t), i.__exportStar(o(53), t), i.__exportStar(o(103), t), i.__exportStar(o(54), t), i.__exportStar(o(24), t), i.__exportStar(o(51), t), i.__exportStar(o(104), t), i.__exportStar(o(31), t), i.__exportStar(o(30), t), i.__exportStar(o(52), t), i.__exportStar(o(105), t), i.__exportStar(o(11), t), i.__exportStar(o(32), t), i.__exportStar(o(106), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(41), t), i.__exportStar(o(18), t), i.__exportStar(o(76), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.exists = function(e) {
            return void 0 !== n.icons[e]
        }, n.getIcon = function(e, t) {
            return void 0 === t && (t = "<span></span>"), void 0 !== n.icons[e] ? n.icons[e] : t
        }, n.icons = {}, n);

        function n() {}
        t.ToolbarIcon = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(8),
            a = (n.__extends(s, i = r.Component), s);

        function s(e) {
            var t = i.call(this, e) || this;
            return t.destruct = function() {
                t.isDestructed || (t.jodit.events && t.jodit.events.off("beforeDestruct", t.destruct), t.beforeDestruct(t.jodit), i.prototype.destruct.call(t))
            }, e.events.on("afterInit", t.afterInit.bind(t, e)).on("beforeDestruct", t.destruct), t
        }
        t.Plugin = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(15),
            n = (Object.defineProperty(r.prototype, "isDestructed", {
                get: function() {
                    return this.__isDestructed
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.destruct = function() {
                this.jodit && (this.jodit = void 0), this.__isDestructed = !0
            }, r);

        function r(e) {
            this.__isDestructed = !1, e && e instanceof r && i.isJoditObject(this.jodit = e) && e.components.push(this)
        }
        t.Component = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(47), t), i.__exportStar(o(48), t), i.__exportStar(o(86), t), i.__exportStar(o(33), t)
    }, function(e, p, t) {
        "use strict";
        Object.defineProperty(p, "__esModule", {
            value: !0
        });
        var h = t(21),
            v = t(22),
            m = t(49),
            g = t(47),
            _ = t(48);
        p.css = function(e, t, o, i) {
            void 0 === i && (i = !1);
            var n = /^left|top|bottom|right|width|min|max|height|margin|padding|font-size/i;
            if (h.isPlainObject(t) || void 0 !== o) {
                var r = function(e, t, o) {
                    null != o && n.test(t) && v.isNumeric("" + o) && (o = parseInt("" + o, 10) + "px"), void 0 !== o && p.css(e, t, void 0, !0) !== m.normilizeCSSValue(t, o) && (e.style[t] = o)
                };
                if (h.isPlainObject(t))
                    for (var a = Object.keys(t), s = 0; s < a.length; s += 1) r(e, g.camelCase(a[s]), t[a[s]]);
                else r(e, g.camelCase(t), o);
                return ""
            }
            var l = _.fromCamelCase(t),
                c = e.ownerDocument || document,
                d = !!c && (c.defaultView || c.parentWindow),
                u = e.style[t],
                f = void 0 !== u && "" !== u ? u : d && !i ? d.getComputedStyle(e).getPropertyValue(l) : "";
            return n.test(t) && /^[\-+]?[0-9.]+px$/.test("" + f) && (f = parseInt("" + f, 10)), m.normilizeCSSValue(t, f)
        }
    }, function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(2),
            a = 1;
        i.$$ = function(e, t) {
            var o;
            if (!/:scope/.test(e) || !r.IS_IE || "undefined" != typeof HTMLDocument && t instanceof HTMLDocument) o = t.querySelectorAll(e);
            else {
                var i = t.id,
                    n = i || "_selector_id_" + ("" + Math.random()).slice(2) + a++;
                e = e.replace(/:scope/g, "#" + n), i || t.setAttribute("id", n), o = t.parentNode.querySelectorAll(e), i || t.removeAttribute("id")
            }
            return [].slice.call(o)
        }, i.getXPathByElement = function(t, e) {
            if (!t || 1 !== t.nodeType) return "";
            if (!t.parentNode || e === t) return "";
            if (t.id) return "//*[@id='" + t.id + "']";
            var o = [].filter.call(t.parentNode.childNodes, function(e) {
                return e.nodeName === t.nodeName
            });
            return i.getXPathByElement(t.parentNode, e) + "/" + t.nodeName.toLowerCase() + (1 < o.length ? "[" + (1 + Array.from(o).indexOf(t)) + "]" : "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(1),
            u = o(3),
            s = o(2),
            l = o(0),
            f = o(4),
            i = o(31),
            n = o(30),
            c = o(55),
            d = o(58),
            p = o(108),
            h = o(59),
            v = o(34),
            r = o(60),
            m = o(115),
            Jodit = function(r) {
                function Jodit(t, i) {
                    var n = r.call(this) || this;
                    if (n.__defaultStyleDisplayKey = "data-jodit-default-style-display", n.__defaultClassesKey = "data-jodit-default-classes", n.commands = {}, n.__selectionLocked = null, n.__wasReadOnly = !1, n.storage = new v.Storage(new h.LocalStorageProvider), n.editor = n.create.div(), n.iframe = null, n.__plugins = {}, n.mode = s.MODE_WYSIWYG, n.__callChangeCount = 0, n.isInited = !1, n.options = new u.OptionsDefault(i), n.editorDocument = n.options.ownerDocument, n.editorWindow = n.options.ownerWindow, n.ownerDocument = n.options.ownerDocument, n.ownerWindow = n.options.ownerWindow, "string" == typeof t) try {
                        n.element = n.ownerDocument.querySelector(t)
                    } catch (e) {
                        throw Error('String "' + t + '" should be valid HTML selector')
                    } else n.element = t;
                    if (!n.element || "object" != typeof n.element || n.element.nodeType !== Node.ELEMENT_NODE || !n.element.cloneNode) throw Error('Element "' + t + '" should be string or HTMLElement instance');
                    n.element.attributes && Array.from(n.element.attributes).forEach(function(e) {
                        var t = e.name,
                            o = e.value;
                        void 0 === Jodit.defaultOptions[t] || i && void 0 !== i[t] || (~["readonly", "disabled"].indexOf(t) && (o = "" === o || "true" === o), /^[0-9]+(\.)?([0-9]+)?$/.test("" + o) && (o = +o), n.options[t] = o)
                    }), n.options.events && Object.keys(n.options.events).forEach(function(e) {
                        n.events.on(e, n.options.events[e])
                    }), n.container.classList.add("jodit_container"), n.container.setAttribute("contenteditable", "false"), n.selection = new d.Select(n), n.events.on("removeMarkers", function() {
                        n.selection && n.selection.removeMarkers()
                    }), n.observer = new c.Observer(n);
                    var e = null;
                    n.options.inline && (~["TEXTAREA", "INPUT"].indexOf(n.element.nodeName) || (n.container = n.element, n.element.setAttribute(n.__defaultClassesKey, "" + n.element.className), e = n.container.innerHTML, n.container.innerHTML = ""), n.container.classList.add("jodit_inline"), n.container.classList.add("jodit_container")), n.element !== n.container && (n.element.style.display && n.element.setAttribute(n.__defaultStyleDisplayKey, n.element.style.display), n.element.style.display = "none"), n.container.classList.add("jodit_" + (n.options.theme || "default") + "_theme"), n.options.zIndex && (n.container.style.zIndex = "" + parseInt("" + n.options.zIndex, 10)), n.workplace = n.create.div("jodit_workplace", {
                        contenteditable: !1
                    }), n.options.toolbar && n.toolbar.build(f.splitArray(n.options.buttons).concat(n.options.extraButtons), n.container);
                    var o = n.options.toolbarButtonSize.toLowerCase();
                    return n.container.classList.add("jodit_toolbar_size-" + (~["middle", "large", "small"].indexOf(o) ? o : "middle")), n.options.textIcons && n.container.classList.add("jodit_text_icons"), n.events.on(n.ownerWindow, "resize", function() {
                        n.events && n.events.fire("resize")
                    }), n.container.appendChild(n.workplace), n.statusbar = new p.StatusBar(n, n.container), n.workplace.appendChild(n.progress_bar), n.element.parentNode && n.element !== n.container && n.element.parentNode.insertBefore(n.container, n.element), n.id = n.element.getAttribute("id") || "" + (new Date).getTime(), n.editor = n.create.div("jodit_wysiwyg", {
                        contenteditable: !0,
                        "aria-disabled": !1,
                        tabindex: n.options.tabIndex
                    }), n.workplace.appendChild(n.editor), n.__initPlugines(), n.__initEditor(e).then(function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.isDestructed ? [2] : (this.options.enableDragAndDropFileToEditor && this.options.uploader && (this.options.uploader.url || this.options.uploader.insertImageAsBase64URI) && this.uploader.bind(this.editor), this.isInited = !0, [4, this.events.fire("afterInit", this)]);
                                    case 1:
                                        return e.sent(), this.events.fire("afterConstructor", this), [2]
                                }
                            })
                        })
                    }), n
                }
                return a.__extends(Jodit, r), Object.defineProperty(Jodit.prototype, "value", {
                    get: function() {
                        return this.getEditorValue()
                    },
                    set: function(e) {
                        this.setEditorValue(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "defaultTimeout", {
                    get: function() {
                        return this.options && this.options.observer ? this.options.observer.timeout : Jodit.defaultOptions.observer.timeout
                    },
                    enumerable: !0,
                    configurable: !0
                }), Jodit.Array = function(e) {
                    return new i.JoditArray(e)
                }, Jodit.Object = function(e) {
                    return new n.JoditObject(e)
                }, Jodit.fireEach = function(i) {
                    for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                    Object.keys(Jodit.instances).forEach(function(e) {
                        var t, o = Jodit.instances[e];
                        !o.isDestructed && o.events && (t = o.events).fire.apply(t, [i].concat(n))
                    })
                }, Object.defineProperty(Jodit.prototype, "uploader", {
                    get: function() {
                        return this.getInstance("Uploader")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "filebrowser", {
                    get: function() {
                        return this.getInstance("FileBrowser")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Jodit.prototype.getElementValue = function() {
                    return void 0 !== this.element.value ? this.element.value : this.element.innerHTML
                }, Jodit.prototype.getNativeEditorValue = function() {
                    return this.editor ? this.editor.innerHTML : this.getElementValue()
                }, Jodit.prototype.getEditorValue = function(e) {
                    var t;
                    if (void 0 === e && (e = !0), void 0 !== (t = this.events.fire("beforeGetValueFromEditor"))) return t;
                    t = this.getNativeEditorValue().replace(s.INVISIBLE_SPACE_REG_EXP, ""), e && (t = t.replace(/<span[^>]+id="jodit_selection_marker_[^>]+><\/span>/g, "")), "<br>" === t && (t = "");
                    var o = {
                        value: t
                    };
                    return this.events.fire("afterGetValueFromEditor", o), o.value
                }, Jodit.prototype.getEditorText = function() {
                    if (this.editor) return this.editor.innerText;
                    var e = this.create.inside.div();
                    return e.innerHTML = this.getElementValue(), e.innerText
                }, Jodit.prototype.setElementValue = function(e) {
                    if ("string" != typeof e && void 0 !== e) throw Error("value must be string");
                    void 0 !== e ? this.element !== this.container && (void 0 !== this.element.value ? this.element.value = e : this.element.innerHTML = e) : e = this.getElementValue(), e !== this.getEditorValue() && this.setEditorValue(e)
                }, Jodit.prototype.setEditorValue = function(e) {
                    var t = this.events.fire("beforeSetValueToEditor", e);
                    if (!1 !== t)
                        if ("string" == typeof t && (e = t), this.editor) {
                            if ("string" != typeof e && void 0 !== e) throw Error("value must be string");
                            void 0 !== e && this.editor.innerHTML !== e && (this.editor.innerHTML = e);
                            var o = this.getElementValue(),
                                i = this.getEditorValue();
                            if (o !== i && this.__callChangeCount < 10) {
                                this.setElementValue(i), this.__callChangeCount += 1;
                                try {
                                    this.events.fire("change", i, o)
                                } finally {
                                    this.__callChangeCount = 0
                                }
                            }
                        } else void 0 !== e && this.setElementValue(e)
                }, Jodit.prototype.registerCommand = function(e, t) {
                    var o = e.toLowerCase();
                    if (void 0 === this.commands[o] && (this.commands[o] = []), this.commands[o].push(t), "function" != typeof t) {
                        var i = this.options.commandToHotkeys[o] || this.options.commandToHotkeys[e] || t.hotkeys;
                        i && this.registerHotkeyToCommand(i, o)
                    }
                    return this
                }, Jodit.prototype.registerHotkeyToCommand = function(e, t) {
                    var o = this,
                        i = f.asArray(e).map(f.normalizeKeyAliases).map(function(e) {
                            return e + ".hotkey"
                        }).join(" ");
                    this.events.off(i).on(i, function() {
                        return o.execCommand(t)
                    })
                }, Jodit.prototype.execCommand = function(e, t, o) {
                    if (void 0 === t && (t = !1), void 0 === o && (o = null), !this.options.readonly || "selectall" === e) {
                        var i;
                        if (e = e.toLowerCase(), !1 !== (i = this.events.fire("beforeCommand", e, t, o)) && (i = this.execCustomCommands(e, t, o)), !1 !== i)
                            if (this.selection.focus(), "selectall" === e) this.selection.select(this.editor, !0);
                            else try {
                                i = this.editorDocument.execCommand(e, t, o)
                            } catch (e) {}
                        return this.events.fire("afterCommand", e, t, o), this.setEditorValue(), i
                    }
                }, Jodit.prototype.execCustomCommands = function(e, t, o) {
                    var i, n;
                    if (void 0 === t && (t = !1), void 0 === o && (o = null), e = e.toLowerCase(), void 0 !== this.commands[e]) {
                        for (var r, a = 0; a < this.commands[e].length; a += 1) void 0 !== (n = ("function" == typeof(i = this.commands[e][a]) ? i : i.exec).call(this, e, t, o)) && (r = n);
                        return r
                    }
                }, Jodit.prototype.lock = function(e) {
                    return void 0 === e && (e = "any"), !!r.prototype.lock.call(this, e) && (this.__selectionLocked = this.selection.save(), this.editor.classList.add("jodit_disabled"), !0)
                }, Jodit.prototype.unlock = function() {
                    return !!r.prototype.unlock.call(this) && (this.editor.classList.remove("jodit_disabled"), this.__selectionLocked && this.selection.restore(this.__selectionLocked), !0)
                }, Jodit.prototype.getMode = function() {
                    return this.mode
                }, Jodit.prototype.isEditorMode = function() {
                    return this.getRealMode() === s.MODE_WYSIWYG
                }, Jodit.prototype.getRealMode = function() {
                    if (this.getMode() !== s.MODE_SPLIT) return this.getMode();
                    var e = this.ownerDocument.activeElement;
                    return e && (l.Dom.isOrContains(this.editor, e) || l.Dom.isOrContains(this.toolbar.container, e)) ? s.MODE_WYSIWYG : s.MODE_SOURCE
                }, Jodit.prototype.setMode = function(e) {
                    var t = this,
                        o = this.getMode(),
                        i = {
                            mode: parseInt("" + e, 10)
                        },
                        n = ["jodit_wysiwyg_mode", "jodit_source_mode", "jodit_split_mode"];
                    !1 !== this.events.fire("beforeSetMode", i) && (this.mode = f.inArray(i.mode, [s.MODE_SOURCE, s.MODE_WYSIWYG, s.MODE_SPLIT]) ? i.mode : s.MODE_WYSIWYG, this.options.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), n.forEach(function(e) {
                        t.container.classList.remove(e)
                    }), this.container.classList.add(n[this.mode - 1]), o !== this.getMode() && this.events.fire("afterSetMode"))
                }, Jodit.prototype.toggleMode = function() {
                    var e = this.getMode();
                    f.inArray(e + 1, [s.MODE_SOURCE, s.MODE_WYSIWYG, this.options.useSplitMode ? s.MODE_SPLIT : 9]) ? e += 1 : e = s.MODE_WYSIWYG, this.setMode(e)
                }, Jodit.prototype.i18n = function(e) {
                    for (var t = this, o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];

                    function n(e) {
                        return o.length ? f.sprintf.apply(t, [e].concat(o)) : e
                    }
                    var r, a = void 0 !== this.options && this.options.debugLanguage,
                        s = "auto" === u.Config.defaultOptions.language ? f.defaultLanguage(u.Config.defaultOptions.language) : u.Config.defaultOptions.language,
                        l = f.defaultLanguage(this.options ? this.options.language : s);
                    if (r = void 0 !== this.options && void 0 !== Jodit.lang[l] ? Jodit.lang[l] : void 0 !== Jodit.lang[s] ? Jodit.lang[s] : Jodit.lang.en, void 0 !== this.options && void 0 !== this.options.i18n[l] && this.options.i18n[l][e]) return n(this.options.i18n[l][e]);
                    if ("string" == typeof r[e] && r[e]) return n(r[e]);
                    var c = e.toLowerCase();
                    if ("string" == typeof r[c] && r[c]) return n(r[c]);
                    var d = m.ucfirst(e);
                    return "string" == typeof r[d] && r[d] ? n(r[d]) : a ? "{" + e + "}" : n("string" == typeof Jodit.lang.en[e] && Jodit.lang.en[e] ? Jodit.lang.en[e] : e)
                }, Jodit.prototype.setDisabled = function(e) {
                    this.options.disabled = e;
                    var t = this.__wasReadOnly;
                    this.setReadOnly(e || t), this.__wasReadOnly = t, this.editor && (this.editor.setAttribute("aria-disabled", "" + e), this.container.classList.toggle("jodit_disabled", e), this.events.fire("disabled", e))
                }, Jodit.prototype.getDisabled = function() {
                    return this.options.disabled
                }, Jodit.prototype.setReadOnly = function(e) {
                    this.__wasReadOnly !== e && (this.__wasReadOnly = e, (this.options.readonly = e) ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.events && this.events.fire("readonly", e))
                }, Jodit.prototype.getReadOnly = function() {
                    return this.options.readonly
                }, Jodit.prototype.__initPlugines = function() {
                    var t = this,
                        o = Array.isArray(this.options.disablePlugins) ? this.options.disablePlugins.map(function(e) {
                            return e.toLowerCase()
                        }) : this.options.disablePlugins.toLowerCase().split(/[\s,]+/);
                    Object.keys(Jodit.plugins).forEach(function(e) {
                        ~o.indexOf(e.toLowerCase()) || (t.__plugins[e] = new Jodit.plugins[e](t))
                    })
                }, Jodit.prototype.__initEditor = function(i) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, o;
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.__createEditor()];
                                case 1:
                                    if (e.sent(), this.isDestructed) return [2];
                                    this.element !== this.container ? this.setElementValue() : null !== i && this.setEditorValue(i), t = (Jodit.instances[this.id] = this).options.defaultMode, this.options.saveModeInStorage && null !== (o = this.storage.get("jodit_default_mode")) && (t = parseInt(o, 10)), this.setMode(t), this.options.readonly && this.setReadOnly(!0), this.options.disabled && this.setDisabled(!0);
                                    try {
                                        this.editorDocument.execCommand("defaultParagraphSeparator", !1, this.options.enter.toLowerCase())
                                    } catch (e) {}
                                    try {
                                        this.editorDocument.execCommand("enableObjectResizing", !1, "false")
                                    } catch (e) {}
                                    try {
                                        this.editorDocument.execCommand("enableInlineTableEditing", !1, "false")
                                    } catch (e) {}
                                    return [2]
                            }
                        })
                    })
                }, Jodit.prototype.__createEditor = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, o, i, n = this;
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = this.editor, [4, this.events.fire("createEditor", this)];
                                case 1:
                                    return o = e.sent(), this.isDestructed || (!1 === o && l.Dom.safeRemove(t), this.options.editorCssClass && this.editor.classList.add(this.options.editorCssClass), this.events.on("synchro", function() {
                                        n.setEditorValue()
                                    }).on(this.editor, "selectionchange selectionstart keydown keyup keypress mousedown mouseup mousepress click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", function(e) {
                                        if (!n.options.readonly && n.events && n.events.fire) {
                                            if (!1 === n.events.fire(e.type, e)) return !1;
                                            n.setEditorValue()
                                        }
                                    }), this.options.spellcheck && this.editor.setAttribute("spellcheck", "true"), this.options.direction && (i = "rtl" == this.options.direction.toLowerCase() ? "rtl" : "ltr", this.editor.style.direction = i, this.container.style.direction = i, this.editor.setAttribute("dir", i), this.container.setAttribute("dir", i), this.toolbar.setDirection(i)), this.options.triggerChangeEvent && this.events.on("change", f.debounce(function() {
                                        n.events && n.events.fire(n.element, "change")
                                    }, this.defaultTimeout))), [2]
                            }
                        })
                    })
                }, Jodit.prototype.destruct = function() {
                    var o = this;
                    if (!this.isDestructed && !1 !== this.events.fire("beforeDestruct") && this.editor) {
                        var e = this.getEditorValue();
                        this.element !== this.container ? this.element.hasAttribute(this.__defaultStyleDisplayKey) ? (this.element.style.display = this.element.getAttribute(this.__defaultStyleDisplayKey), this.element.removeAttribute(this.__defaultStyleDisplayKey)) : this.element.style.display = "" : this.element.hasAttribute(this.__defaultClassesKey) && (this.element.className = this.element.getAttribute(this.__defaultClassesKey) || "", this.element.removeAttribute(this.__defaultClassesKey)), this.element.hasAttribute("style") && !this.element.getAttribute("style") && this.element.removeAttribute("style"), Object.keys(this.__plugins).forEach(function(e) {
                            var t = o.__plugins[e];
                            void 0 !== t && void 0 !== t.destruct && "function" == typeof t.destruct && t.destruct(), delete o.__plugins[e]
                        }), this.observer.destruct(), this.statusbar.destruct(), delete this.observer, delete this.statusbar, delete this.storage, this.components.forEach(function(e) {
                            void 0 === e.destruct || "function" != typeof e.destruct || e.isDestructed || e.destruct()
                        }), this.components.length = 0, this.commands = {}, delete this.selection, this.__selectionLocked = null, this.events.off(this.ownerWindow), this.events.off(this.ownerDocument), this.events.off(this.ownerDocument.body), this.events.off(this.element), this.events.off(this.editor), l.Dom.safeRemove(this.workplace), l.Dom.safeRemove(this.editor), l.Dom.safeRemove(this.progress_bar), l.Dom.safeRemove(this.iframe), this.container !== this.element && l.Dom.safeRemove(this.container), delete this.workplace, delete this.editor, delete this.progress_bar, delete this.iframe, this.container === this.element && (this.element.innerHTML = e), delete Jodit.instances[this.id], r.prototype.destruct.call(this), delete this.container
                    }
                }, Jodit.plugins = {}, Jodit.modules = {}, Jodit.instances = {}, Jodit.lang = {}, Jodit
            }(r.ViewWithToolbar);
        t.Jodit = Jodit
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(16);
        t.Dialog = i.Dialog;
        var n = o(133);
        t.Alert = n.Alert;
        var r = o(64);
        t.Promt = r.Promt;
        var a = o(65);
        t.Confirm = a.Confirm
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = o(30),
            v = o(31),
            m = o(32),
            g = o(21);
        t.extend = function e() {
            for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
            var i, n, r, a, s, l, c, d = t.length,
                u = t[0] || {},
                f = 1,
                p = !1;
            for ("boolean" == typeof u && (p = u, u = t[f] || {}, f += 1), "object" != typeof u && "function" === m.type(u) && (u = {}), f === d && (u = this, f += 1); f < d; f += 1)
                if (null != (i = t[f]))
                    for (c = Object.keys(i), l = 0; l < c.length; l += 1) r = u[n = c[l]], u !== (a = i[n]) && (p && a && (g.isPlainObject(a) && !(a instanceof h.JoditObject) || Array.isArray(a) && !(a instanceof v.JoditArray)) ? (s = Array.isArray(a) ? r && Array.isArray(r) ? r : [] : r && g.isPlainObject(r) ? r : {}, u[n] = e(p, s, a)) : void 0 !== a && (u[n] = a));
            return u
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isJoditObject = function(e) {
            return !!(e && e instanceof Object && "function" == typeof e.constructor && "Jodit" === e.constructor.name)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = o(3),
            s = o(2),
            l = o(4),
            i = o(61),
            n = o(0),
            c = o(15);
        a.Config.prototype.dialog = {
            resizable: !0,
            draggable: !0,
            buttons: ["dialog.close"],
            removeButtons: []
        }, a.Config.prototype.controls.dialog = {
            close: {
                icon: "cancel",
                exec: function(e) {
                    e.close()
                }
            },
            fullsize: {
                icon: "fullsize",
                getLabel: function(e, t, o) {
                    if (a.Config.prototype.controls.fullsize && a.Config.prototype.controls.fullsize.getLabel && "function" == typeof a.Config.prototype.controls.fullsize.getLabel) return a.Config.prototype.controls.fullsize.getLabel(e, t, o)
                },
                exec: function(e) {
                    e.toggleFullSize()
                }
            }
        };
        var d, u = (r.__extends(f, d = i.View), f.prototype.setElements = function(o, e) {
            var i = this,
                n = [];
            l.asArray(e).forEach(function(e) {
                var t = "string" == typeof e ? i.create.fromHTML(e) : e;
                n.push(t), t.parentNode !== o && o.appendChild(t)
            }), Array.from(o.childNodes).forEach(function(e) {
                ~n.indexOf(e) || o.removeChild(e)
            })
        }, f.prototype.onResizerMouseDown = function(e) {
            this.resizable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.jodit.events && this.jodit.events.fire(this, "startResize")
        }, f.prototype.setSize = function(e, t) {
            e && l.css(this.dialog, "width", e), t && l.css(this.dialog, "height", t)
        }, f.prototype.setPosition = function(e, t) {
            var o = this.window.innerWidth / 2 - this.dialog.offsetWidth / 2,
                i = this.window.innerHeight / 2 - this.dialog.offsetHeight / 2;
            o < 0 && (o = 0), i < 0 && (i = 0), void 0 !== e && void 0 !== t && (this.offsetX = e, this.offsetY = t, this.moved = 100 < Math.abs(e - o) || 100 < Math.abs(t - i)), this.dialog.style.left = (e || o) + "px", this.dialog.style.top = (t || i) + "px"
        }, f.prototype.setTitle = function(e) {
            this.setElements(this.dialogbox_header, e)
        }, f.prototype.setContent = function(e) {
            this.setElements(this.dialogbox_content, e)
        }, f.prototype.setFooter = function(e) {
            this.setElements(this.dialogbox_footer, e), this.dialog.classList.toggle("with_footer", !!e)
        }, f.prototype.getZIndex = function() {
            return parseInt(this.container.style.zIndex || "0", 10)
        }, f.prototype.getMaxZIndexDialog = function() {
            var t, o, i = 0,
                n = this;
            return l.$$(".jodit_dialog_box", this.destination).forEach(function(e) {
                t = e.__jodit_dialog, o = parseInt(l.css(e, "zIndex"), 10), t.isOpened() && !isNaN(o) && i < o && (n = t, i = o)
            }), n
        }, f.prototype.setMaxZIndex = function() {
            var t = 0,
                o = 0;
            l.$$(".jodit_dialog_box", this.destination).forEach(function(e) {
                o = parseInt(l.css(e, "zIndex"), 10), t = Math.max(isNaN(o) ? 0 : o, t)
            }), this.container.style.zIndex = "" + (t + 1)
        }, f.prototype.maximization = function(t) {
            return "boolean" != typeof t && (t = !this.container.classList.contains("jodit_dialog_box-fullsize")), this.container.classList.toggle("jodit_dialog_box-fullsize", t), [this.destination, this.destination.parentNode].forEach(function(e) {
                e && e.classList && e.classList.toggle("jodit_fullsize_box", t)
            }), this.iSetMaximization = t
        }, f.prototype.open = function(e, t, o, i) {
            this.jodit && this.jodit.events && !1 === this.jodit.events.fire(this, "beforeOpen") || (this.destroyAfterClose = !0 === o, void 0 !== t && this.setTitle(t), e && this.setContent(e), this.container.classList.add("active"), i && this.container.classList.add("jodit_modal"), this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex(), this.options.fullsize && this.maximization(!0), this.jodit && this.jodit.events && this.jodit.events.fire("afterOpen", this))
        }, f.prototype.isOpened = function() {
            return !this.isDestructed && this.container && this.container.classList.contains("active")
        }, f.prototype.destruct = function() {
            this.isDestructed || (this.toolbar && (this.toolbar.destruct(), delete this.toolbar), this.events && this.events.off(this.window, "mousemove", this.onMouseMove).off(this.window, "mouseup", this.onMouseUp).off(this.window, "keydown", this.onKeyDown).off(this.window, "resize", this.onResize), !this.jodit && this.events && (this.events.destruct(), delete this.events), this.container && (n.Dom.safeRemove(this.container), delete this.container), d.prototype.destruct.call(this))
        }, f);

        function f(e, t) {
            void 0 === t && (t = a.Config.prototype.dialog);
            var o = d.call(this, e, t) || this;
            o.destination = document.body, o.destroyAfterClose = !1, o.moved = !1, o.iSetMaximization = !1, o.resizable = !1, o.draggable = !1, o.startX = 0, o.startY = 0, o.startPoint = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }, o.lockSelect = function() {
                o.container.classList.add("jodit_dialog_box-moved")
            }, o.unlockSelect = function() {
                o.container.classList.remove("jodit_dialog_box-moved")
            }, o.onMouseUp = function() {
                (o.draggable || o.resizable) && (o.draggable = !1, o.resizable = !1, o.unlockSelect(), o.jodit && o.jodit.events && o.jodit.events.fire(o, "endResize endMove"))
            }, o.onHeaderMouseDown = function(e) {
                var t = e.target;
                !o.options.draggable || t && t.nodeName.match(/^(INPUT|SELECT)$/) || (o.draggable = !0, o.startX = e.clientX, o.startY = e.clientY, o.startPoint.x = l.css(o.dialog, "left"), o.startPoint.y = l.css(o.dialog, "top"), o.setMaxZIndex(), e.preventDefault(), o.lockSelect(), o.jodit && o.jodit.events && o.jodit.events.fire(o, "startMove"))
            }, o.onMouseMove = function(e) {
                o.draggable && o.options.draggable && (o.setPosition(o.startPoint.x + e.clientX - o.startX, o.startPoint.y + e.clientY - o.startY), o.jodit && o.jodit.events && o.jodit.events.fire(o, "move", e.clientX - o.startX, e.clientY - o.startY), e.stopImmediatePropagation(), e.preventDefault()), o.resizable && o.options.resizable && (o.setSize(o.startPoint.w + e.clientX - o.startX, o.startPoint.h + e.clientY - o.startY), o.jodit && o.jodit.events && o.jodit.events.fire(o, "resizeDialog", e.clientX - o.startX, e.clientY - o.startY), e.stopImmediatePropagation(), e.preventDefault())
            }, o.onKeyDown = function(e) {
                if (o.isOpened() && e.which === s.KEY_ESC) {
                    var t = o.getMaxZIndexDialog();
                    t ? t.close() : o.close(), e.stopImmediatePropagation()
                }
            }, o.onResize = function() {
                o.options && o.options.resizable && !o.moved && o.isOpened() && !o.offsetX && !o.offsetY && o.setPosition()
            }, o.document = document, o.window = window, o.close = function(e) {
                o.isDestructed || (e && (e.stopImmediatePropagation(), e.preventDefault()), o.jodit && o.jodit.events && o.jodit.events.fire("beforeClose", o), o.container && o.container.classList && o.container.classList.remove("active"), o.iSetMaximization && o.maximization(!1), o.destroyAfterClose && o.destruct(), o.jodit && o.jodit.events && (o.jodit.events.fire(o, "afterClose"), o.jodit.events.fire(o.ownerWindow, "jodit_close_dialog")))
            }, c.isJoditObject(e) && (o.window = e.ownerWindow, o.document = e.ownerDocument, e.events.on("beforeDestruct", function() {
                o.destruct()
            }));
            var i = o;
            i.options = r.__assign({}, e && e.options ? e.options.dialog : a.Config.prototype.dialog, i.options), i.container = o.create.fromHTML('<div style="z-index:' + i.options.zIndex + '" class="jodit jodit_dialog_box"><div class="jodit_dialog_overlay"></div><div class="jodit_dialog"><div class="jodit_dialog_header non-selected"><div class="jodit_dialog_header-title"></div><div class="jodit_dialog_header-toolbar"></div></div><div class="jodit_dialog_content"></div><div class="jodit_dialog_footer"></div>' + (i.options.resizable ? '<div class="jodit_dialog_resizer"></div>' : "") + "</div></div>"), e && e.id && i.container.setAttribute("data-editor_id", e.id), Object.defineProperty(i.container, "__jodit_dialog", {
                value: i
            }), i.dialog = i.container.querySelector(".jodit_dialog"), i.resizer = i.container.querySelector(".jodit_dialog_resizer"), i.jodit && i.jodit.options && i.jodit.options.textIcons && i.container.classList.add("jodit_text_icons"), i.dialogbox_header = i.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-title"), i.dialogbox_content = i.container.querySelector(".jodit_dialog_content"), i.dialogbox_footer = i.container.querySelector(".jodit_dialog_footer"), i.dialogbox_toolbar = i.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-toolbar"), i.destination.appendChild(i.container), i.container.addEventListener("close_dialog", i.close), i.toolbar = h.JoditToolbarCollection.makeCollection(i), i.toolbar.build(i.options.buttons, i.dialogbox_toolbar), i.events.on(o.window, "mousemove", i.onMouseMove).on(o.window, "mouseup", i.onMouseUp).on(o.window, "keydown", i.onKeyDown).on(o.window, "resize", i.onResize);
            var n = i.container.querySelector(".jodit_dialog_header");
            return n && n.addEventListener("mousedown", i.onHeaderMouseDown.bind(i)), i.options.resizable && i.resizer.addEventListener("mousedown", i.onResizerMouseDown.bind(i)), p.Jodit.plugins.fullsize(i), o
        }
        t.Dialog = u;
        var p = o(12),
            h = o(36)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u, d = o(0),
            f = o(4),
            p = o(6);
        (u = t.Widget || (t.Widget = {})).ColorPickerWidget = function(n, r, e) {
            function a(e, t) {
                e.innerHTML = p.ToolbarIcon.getIcon("eye"), e.classList.add("active");
                var o = f.hexToRgb(t);
                o && (e.firstChild.style.fill = "rgb(" + (255 - o.r) + "," + (255 - o.g) + "," + (255 - o.b) + ")")
            }
            var i = f.normalizeColor(e),
                s = n.create.div("jodit_colorpicker"),
                l = n.options.textIcons ? "" : p.ToolbarIcon.getIcon("eye"),
                t = n.options.textIcons ? "<span>" + n.i18n("eraser") + "</span>" : p.ToolbarIcon.getIcon("eraser"),
                o = n.options.textIcons ? "<span>" + n.i18n("palette") + "</span>" : p.ToolbarIcon.getIcon("palette"),
                c = function(t) {
                    var o = [];
                    return f.isPlainObject(t) ? Object.keys(t).forEach(function(e) {
                        o.push('<div class="jodit_colorpicker_group jodit_colorpicker_group-' + e + '">'), o.push(c(t[e])), o.push("</div>")
                    }) : Array.isArray(t) && t.forEach(function(e) {
                        o.push("<a " + (i === e ? ' class="active" ' : "") + ' title="' + e + '" style="background-color:' + e + '" data-color="' + e + '" href="javascript:void(0)">' + (i === e ? l : "") + "</a>")
                    }), o.join("")
                };
            return s.appendChild(n.create.fromHTML("<div>" + c(n.options.colors) + "</div>")), s.appendChild(n.create.fromHTML("<a " + (n.options.textIcons ? 'class="jodit_text_icon"' : "") + ' data-color="" href="javascript:void(0)">' + t + "</a>")), n.options.showBrowserColorPicker && f.hasBrowserColorPicker() && (s.appendChild(n.create.fromHTML("<span><em " + (n.options.textIcons ? 'class="jodit_text_icon"' : "") + ">" + o + '</em><input type="color" value=""/></span>')), n.events.on(s, "change", function(e) {
                e.stopPropagation();
                var t = e.target;
                if (t && t.tagName && "INPUT" == t.tagName.toUpperCase()) {
                    var o = t.value || "";
                    o && a(t, o), r && "function" == typeof r && r(o), e.preventDefault()
                }
            })), n.events.on(s, "mousedown touchend", function(e) {
                e.stopPropagation();
                var t = e.target;
                if (t && t.tagName && "SVG" != t.tagName.toUpperCase() && "PATH" != t.tagName.toUpperCase() || !t.parentNode || (t = d.Dom.closest(t.parentNode, "A", n.editor)), "A" == t.tagName.toUpperCase()) {
                    var o = s.querySelector("a.active");
                    o && (o.classList.remove("active"), o.innerHTML = "");
                    var i = t.getAttribute("data-color") || "";
                    i && a(t, i), r && "function" == typeof r && r(i), e.preventDefault()
                }
            }), s
        }, u.TabsWidget = function(r, e, a) {
            var t = r.create.div("jodit_tabs"),
                s = r.create.div("jodit_tabs_wrapper"),
                l = r.create.div("jodit_tabs_buttons"),
                c = {},
                d = "",
                u = 0;
            return t.appendChild(l), t.appendChild(s), f.each(e, function(t, o) {
                var i = r.create.div("jodit_tab"),
                    n = r.create.element("a", {
                        href: "javascript:void(0);"
                    });
                d = d || "" + t, n.innerHTML = /<svg/.test("" + t) ? t : r.i18n("" + t), l.appendChild(n), i.appendChild("function" != typeof o ? o : r.create.div("jodit_tab_empty")), s.appendChild(i), r.events.on(n, "mousedown touchend", function(e) {
                    return f.$$("a", l).forEach(function(e) {
                        e.classList.remove("active")
                    }), f.$$(".jodit_tab", s).forEach(function(e) {
                        e.classList.remove("active")
                    }), n.classList.add("active"), i.classList.add("active"), "function" == typeof o && o.call(r), e.stopPropagation(), a && (a.__activeTab = "" + t), !1
                }), c[t] = {
                    button: n,
                    tab: i
                }, u += 1
            }), u && (f.$$("a", l).forEach(function(e) {
                e.style.width = (100 / u).toFixed(10) + "%"
            }), a && a.__activeTab && c[a.__activeTab] ? (c[a.__activeTab].button.classList.add("active"), c[a.__activeTab].tab.classList.add("active")) : (c[d].button.classList.add("active"), c[d].tab.classList.add("active"))), t
        }, u.FileSelectorWidget = function(t, o, e, i, n) {
            var r;
            void 0 === n && (n = !0);
            var a = {};
            if (o.upload && t.options.uploader && (t.options.uploader.url || t.options.uploader.insertImageAsBase64URI)) {
                var s = t.create.fromHTML('<div class="jodit_draganddrop_file_box"><strong>' + t.i18n(n ? "Drop image" : "Drop file") + "</strong><span><br> " + t.i18n("or click") + '</span><input type="file" accept="' + (n ? "image/*" : "*") + 'image/*" tabindex="-1" dir="auto" multiple=""/></div>');
                t.getInstance("Uploader").bind(s, function(e) {
                    "function" == typeof o.upload && o.upload.call(t, {
                        baseurl: e.baseurl,
                        files: e.files
                    })
                }, function(e) {
                    t.events.fire("errorMessage", e.message)
                }), a[(t.options.textIcons ? "" : p.ToolbarIcon.getIcon("upload")) + t.i18n("Upload")] = s
            }
            if (o.filebrowser && (t.options.filebrowser.ajax.url || t.options.filebrowser.items.url) && (a[(t.options.textIcons ? "" : p.ToolbarIcon.getIcon("folder")) + t.i18n("Browse")] = function() {
                    i && i(), o.filebrowser && t.getInstance("FileBrowser").open(o.filebrowser, n)
                }), o.url) {
                var l = t.create.fromHTML('<form onsubmit="return false;" class="jodit_form"><input type="text" required name="url" placeholder="http://"/><input type="text" name="text" placeholder="' + t.i18n("Alternative text") + '"/><div style="text-align: right"><button>' + t.i18n("Insert") + "</button></div></form>"),
                    c = l.querySelector("button"),
                    d = l.querySelector("input[name=url]");
                r = null, e && e.nodeType !== Node.TEXT_NODE && ("IMG" === e.tagName || f.$$("img", e).length) && (r = "IMG" === e.tagName ? e : f.$$("img", e)[0], f.val(l, "input[name=url]", r.getAttribute("src")), f.val(l, "input[name=text]", r.getAttribute("alt")), c.innerText = t.i18n("Update")), e && e.nodeType !== Node.TEXT_NODE && "A" === e.nodeName && (f.val(l, "input[name=url]", e.getAttribute("href") || ""), f.val(l, "input[name=text]", e.getAttribute("title") || ""), c.innerText = t.i18n("Update")), l.addEventListener("submit", function(e) {
                    return e.preventDefault(), e.stopPropagation(), f.val(l, "input[name=url]") ? "function" == typeof o.url && o.url.call(t, f.val(l, "input[name=url]"), f.val(l, "input[name=text]")) : (d.focus(), d.classList.add("jodit_error")), !1
                }, !1), a[(t.options.textIcons ? "" : p.ToolbarIcon.getIcon("link")) + " URL"] = l
            }
            return u.TabsWidget(t, a)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setTimeout = function(e, t, o, i, n) {
            return t ? window.setTimeout.call(window, e, t, o, i, n) : (e.call(null, o, i, n), 0)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(90), t), i.__exportStar(o(91), t), i.__exportStar(o(92), t), i.__exportStar(o(93), t), i.__exportStar(o(94), t), i.__exportStar(o(95), t), i.__exportStar(o(96), t), i.__exportStar(o(49), t), i.__exportStar(o(97), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, i = o(1),
            n = o(35),
            a = o(0),
            l = o(10),
            r = o(2),
            c = o(15),
            d = (i.__extends(u, s = n.ToolbarCollection), u.prototype.buttonIsActive = function(e) {
                var t = this,
                    o = s.prototype.buttonIsActive.call(this, e);
                if (void 0 !== o) return o;
                var i, n, r = !!this.jodit.selection && this.jodit.selection.current();
                return !(!r || !((e.control.tags || e.control.options && e.control.options.tags) && (i = e.control.tags || e.control.options && e.control.options.tags, a.Dom.up(r, function(e) {
                    if (e && ~i.indexOf(e.nodeName.toLowerCase())) return !0
                }, this.jodit.editor)) || (e.control.css || e.control.options && e.control.options.css) && (n = e.control.css || e.control.options && e.control.options.css, a.Dom.up(r, function(e) {
                    if (e && e.nodeType !== Node.TEXT_NODE) return t.checkActiveStatus(n, e)
                }, this.jodit.editor))))
            }, u.prototype.buttonIsDisabled = function(e) {
                var t = s.prototype.buttonIsDisabled.call(this, e);
                if (void 0 !== t) return t;
                var o = void 0 === e.control || void 0 === e.control.mode ? r.MODE_WYSIWYG : e.control.mode;
                return !(o === r.MODE_SPLIT || o === this.jodit.getRealMode())
            }, u.prototype.getTarget = function(e) {
                return e.target || this.jodit.selection.current() || void 0
            }, u.makeCollection = function(e) {
                var t = c.isJoditObject(e) ? new u(e) : new n.ToolbarCollection(e);
                return e.options.textIcons && t.container.classList.add("jodit_text_icons"), t
            }, u);

        function u() {
            var a = null !== s && s.apply(this, arguments) || this;
            return a.checkActiveStatus = function(o, i) {
                var n = 0,
                    r = 0;
                return Object.keys(o).forEach(function(e) {
                    var t = o[e];
                    "function" == typeof t ? t(a.jodit, "" + l.css(i, e)) && (n += 1) : ~t.indexOf("" + l.css(i, e)) && (n += 1), r += 1
                }), r === n
            }, a
        }
        t.JoditToolbarCollection = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(42),
            n = o(32);
        t.isPlainObject = function(e) {
            return !("object" != typeof e || e.nodeType || i.isWindow(e) || e.constructor && !n.hasOwn.call(e.constructor.prototype, "isPrototypeOf"))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isNumeric = function(e) {
            if ("string" == typeof e) {
                if (!e.match(/^([+\-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) return !1;
                e = parseFloat(e)
            }
            return !isNaN(e) && isFinite(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(98), t), i.__exportStar(o(99), t), i.__exportStar(o(100), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.each = function(e, t) {
            var o, i, n;
            if (Array.isArray(e)) {
                for (o = e.length, n = 0; n < o; n += 1)
                    if (!1 === t.call(e[n], n, e[n])) return !1
            } else
                for (i = Object.keys(e), n = 0; n < i.length; n += 1)
                    if (!1 === t.call(e[i[n]], i[n], e[i[n]])) return !1;
            return !0
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = o(1),
            r = o(8),
            a = o(35),
            s = o(6),
            l = o(0),
            c = o(9),
            d = (i.__extends(u, n = r.Component), u.prototype.focus = function() {
                this.container.focus()
            }, u.prototype.destruct = function() {
                this.isDestructed || (l.Dom.safeRemove(this.container), this.parentToolbar = void 0, n.prototype.destruct.call(this))
            }, u.prototype.createIcon = function(e, t) {
                var o = t ? t.icon || t.name : e;
                if (this.jodit.options.textIcons) return this.jodit.create.fromHTML('<span class="jodit_icon">' + this.jodit.i18n(t ? t.name : e) + "</span>");
                var i = this.jodit.events.fire("getIcon", o, t, e),
                    n = void 0;
                return t && t.iconURL && void 0 === i ? (n = this.jodit.create.element("i")).style.backgroundImage = "url(" + t.iconURL + ")" : (void 0 === i && (i = s.ToolbarIcon.exists(o) ? s.ToolbarIcon.getIcon(o) : s.ToolbarIcon.getIcon("empty")), n = "string" == typeof i ? this.jodit.create.fromHTML(c.trim(i)) : i), n.classList.add("jodit_icon", "jodit_icon_" + e), n
            }, u);

        function u(e, t, o) {
            void 0 === t && (t = "li"), void 0 === o && (o = "jodit_toolbar_btn");
            var i = this;
            return e instanceof a.ToolbarCollection ? (i = n.call(this, e.jodit) || this).parentToolbar = e : i = n.call(this, e) || this, i.container = i.jodit.create.element(t), i.container.classList.add(o), i
        }
        t.ToolbarElement = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l, i = o(1),
            c = o(0),
            d = o(4),
            n = o(25),
            u = o(112),
            f = o(27),
            p = o(113),
            h = o(15),
            v = o(2),
            r = (i.__extends(a, l = n.ToolbarElement), Object.defineProperty(a.prototype, "disable", {
                get: function() {
                    return this.__disabled
                },
                set: function(e) {
                    this.__disabled = e, this.container.classList.toggle("jodit_disabled", e), e ? this.container.hasAttribute("disabled") || this.container.setAttribute("disabled", "disabled") : this.container.hasAttribute("disabled") && this.container.removeAttribute("disabled")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a.prototype, "active", {
                get: function() {
                    return this.__actived
                },
                set: function(e) {
                    this.__actived = e, this.container.classList.toggle("jodit_active", e)
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.isDisable = function() {
                return !(!this.parentToolbar || !this.parentToolbar.buttonIsDisabled(this))
            }, a.prototype.isActive = function() {
                return !(!this.parentToolbar || !this.parentToolbar.buttonIsActive(this))
            }, Object.defineProperty(a.prototype, "tooltipText", {
                get: function() {
                    return this.control.tooltip ? this.jodit.i18n(this.control.tooltip) + (this.control.hotkeys ? "<br>" + d.asArray(this.control.hotkeys).join(" ") : "") : ""
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.focus = function() {
                this.anchor.focus()
            }, a.prototype.destruct = function() {
                this.isDestructed || (this.jodit && this.jodit.events && this.jodit.events.off(this.container), l.prototype.destruct.call(this), this.tooltip && (this.tooltip.destruct(), delete this.tooltip))
            }, a);

        function a(e, t, o) {
            var a = l.call(this, e) || this;
            a.__disabled = !1, a.__actived = !1, a.onMouseDown = function(e) {
                if ("keydown" !== e.type || e.which === v.KEY_ENTER) {
                    if (e.stopImmediatePropagation(), e.preventDefault(), a.disable) return !1;
                    var t = a.control,
                        o = function() {
                            return a.parentToolbar && a.parentToolbar.getTarget(a) || a.target || !1
                        };
                    if (t.list) {
                        var i = new u.PopupList(a.jodit, a.container, a.target);
                        i.open(t), a.jodit.events.fire("closeAllPopups", i.container), a.anchor.setAttribute("aria-expanded", "true"), a.jodit.events.on(i, "afterClose", function() {
                            a.anchor.setAttribute("aria-expanded", "false")
                        })
                    } else if (void 0 !== t.exec && "function" == typeof t.exec) t.exec(a.jodit, o(), t, e, a.container), a.jodit.events.fire("synchro"), a.parentToolbar && a.parentToolbar.immedateCheckActiveButtons(), a.jodit.events.fire("closeAllPopups afterExec");
                    else if (void 0 !== t.popup && "function" == typeof t.popup) {
                        var n = new f.Popup(a.jodit, a.container, a.target);
                        if (!1 !== a.jodit.events.fire(d.camelCase("before-" + t.name + "-OpenPopup"), o(), t, n)) {
                            var r = t.popup(a.jodit, o(), t, n.close, a);
                            r && n.open(r)
                        }
                        a.jodit.events.fire(d.camelCase("after-" + t.name + "-OpenPopup") + " closeAllPopups", n.container)
                    } else(t.command || t.name) && (h.isJoditObject(a.jodit) ? a.jodit.execCommand(t.command || t.name, t.args && t.args[0] || !1, t.args && t.args[1] || null) : a.jodit.ownerDocument.execCommand(t.command || t.name, t.args && t.args[0] || !1, t.args && t.args[1] || null), a.jodit.events.fire("closeAllPopups"))
                }
            }, a.control = t, a.target = o, a.anchor = a.jodit.create.element("a", {
                role: "button",
                href: "javascript:void(0)"
            }), a.container.appendChild(a.anchor), a.jodit.options.showTooltip && t.tooltip && (a.jodit.options.useNativeTooltip ? a.anchor.setAttribute("title", a.tooltipText) : a.tooltip = new p.ToolbarTooltip(a), a.anchor.setAttribute("aria-label", a.tooltipText)), a.textBox = a.jodit.create.span(), a.anchor.appendChild(a.textBox);
            var i = t.name.replace(/[^a-zA-Z0-9]/g, "_");
            if (t.getContent && "function" == typeof t.getContent) {
                c.Dom.detach(a.container);
                var n = t.getContent(a.jodit, t, a);
                a.container.appendChild("string" == typeof n ? a.jodit.create.fromHTML(n) : n)
            } else {
                if (t.list && a.anchor) {
                    var r = a.jodit.ownerDocument.createElement("span");
                    r.classList.add("jodit_with_dropdownlist-trigger"), a.container.classList.add("jodit_with_dropdownlist"), a.anchor.appendChild(r)
                }
                a.textBox.appendChild(a.createIcon(i, t))
            }
            if (a.container.classList.add("jodit_toolbar_btn-" + i), a.jodit.options.direction) {
                var s = a.jodit.options.direction.toLowerCase();
                a.container.style.direction = "rtl" == s ? "rtl" : "ltr"
            }
            return t.isInput ? a.container.classList.add("jodit_toolbar-input") : a.jodit.events.on(a.container, "mousedown touchend keydown", a.onMouseDown).on("click-" + i + "-btn", a.onMouseDown), a
        }
        t.ToolbarButton = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, i = o(1),
            a = o(0),
            s = o(4),
            n = o(8),
            l = (i.__extends(c, r = n.Component), c.prototype.calcPosition = function() {
                if (this.isOpened && !this.isDestructed) {
                    var t = this.container,
                        e = s.offset(this.jodit.container, this.jodit, this.jodit.ownerDocument, !0),
                        o = s.offset(t, this.jodit, this.jodit.ownerDocument, !0),
                        i = s.css(t, "marginLeft") || 0;
                    o.left -= i;
                    var n = i,
                        r = "auto";
                    if (n = o.left < e.left ? e.left - o.left : o.left + o.width < e.left + e.width ? 0 : -(o.left + o.width - (e.left + e.width)), o.width < e.width || (n = e.left - o.left, r = e.width), n !== i) try {
                        t.style.setProperty("margin-left", n + "px", "important")
                    } catch (e) {
                        t.style.marginLeft = n + "px"
                    }
                    var a = t.querySelector(".jodit_popup_triangle");
                    a && (a.style.marginLeft = -n + "px"), s.css(t, "width", r)
                }
            }, c.prototype.doOpen = function(e) {
                e && (a.Dom.detach(this.container), this.container.innerHTML = '<span class="jodit_popup_triangle"></span>', this.container.appendChild(a.Dom.isNode(e, this.jodit.ownerWindow) ? e : this.jodit.create.fromHTML("" + e)), this.container.style.display = "block", this.container.style.marginLeft = null)
            }, c.prototype.doClose = function() {}, c.prototype.open = function(e, t, o) {
                void 0 === o && (o = !1), d.Jodit.fireEach("beforeOpenPopup closeAllPopups", this, e), o || this.jodit.events.on("closeAllPopups", this.close), this.container.classList.add(this.className + "-open"), this.doOpen(e), this.target.appendChild(this.container), this.jodit.options.textIcons && this.firstInFocus(), void 0 !== t && this.container.classList.toggle("jodit_right", t), !o && this.container.parentNode && this.jodit.events.fire(this.container.parentNode, "afterOpenPopup", this.container), this.isOpened = !0, o || this.calcPosition()
            }, c.prototype.firstInFocus = function() {}, c.prototype.destruct = function() {
                this.isDestructed || (this.jodit.events.off([this.jodit.ownerWindow, this.jodit.events], "resize", this.throttleCalcPosition), a.Dom.safeRemove(this.container), delete this.container, r.prototype.destruct.call(this))
            }, c);

        function c(e, t, o, i) {
            void 0 === i && (i = "jodit_toolbar_popup");
            var n = r.call(this, e) || this;
            return n.target = t, n.current = o, n.className = i, n.throttleCalcPosition = s.throttle(n.calcPosition, n.jodit.defaultTimeout), n.isOpened = !1, n.close = function(e) {
                (n.isOpened || n.isDestructed) && (e && a.Dom.isOrContains(n.container, e instanceof c ? e.target : e) || (n.isOpened = !1, n.jodit.events.off("closeAllPopups", n.close), n.doClose(), a.Dom.safeRemove(n.container), n.jodit.events.fire("removeMarkers"), n.jodit.events.fire(n, "afterClose")))
            }, n.container = n.jodit.create.div(i, {
                "data-editor_id": e.id
            }), n.jodit.events.on(n.container, "mousedown touchstart touchend", function(e) {
                e.stopPropagation()
            }).on([n.jodit.ownerWindow, n.jodit.events], "resize", n.throttleCalcPosition), n
        }
        t.Popup = l;
        var d = o(12)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = o(2),
            v = o(0),
            m = o(4),
            i = (g.addSelected = function(e) {
                e.setAttribute(h.JODIT_SELECTED_CELL_MARKER, "1")
            }, g.restoreSelection = function(e) {
                e.removeAttribute(h.JODIT_SELECTED_CELL_MARKER)
            }, g.getAllSelectedCells = function(e) {
                return e ? m.$$("td[" + h.JODIT_SELECTED_CELL_MARKER + "],th[" + h.JODIT_SELECTED_CELL_MARKER + "]", e) : []
            }, g.getRowsCount = function(e) {
                return e.rows.length
            }, g.getColumnsCount = function(e) {
                return g.formalMatrix(e).reduce(function(e, t) {
                    return Math.max(e, t.length)
                }, 0)
            }, g.formalMatrix = function(e, s) {
                for (var l = [
                        []
                    ], t = Array.prototype.slice.call(e.rows), o = function(e, t) {
                        void 0 === l[t] && (l[t] = []);
                        for (var o, i, n = e.colSpan, r = e.rowSpan, a = 0; l[t][a];) a += 1;
                        for (i = 0; i < r; i += 1)
                            for (o = 0; o < n; o += 1) {
                                if (void 0 === l[t + i] && (l[t + i] = []), s && !1 === s(e, t + i, a + o, n, r)) return !1;
                                l[t + i][a + o] = e
                            }
                    }, i = 0, n = void 0; i < t.length; i += 1) {
                    var r = Array.prototype.slice.call(t[i].cells);
                    for (n = 0; n < r.length; n += 1)
                        if (!1 === o(r[n], i)) return l
                }
                return l
            }, g.formalCoordinate = function(e, r, a) {
                void 0 === a && (a = !1);
                var s = 0,
                    l = 0,
                    c = 1,
                    d = 1;
                return g.formalMatrix(e, function(e, t, o, i, n) {
                    if (r === e) return s = t, l = o, c = i || 1, d = n || 1, a && (l += (i || 1) - 1, s += (n || 1) - 1), !1
                }), [s, l, c, d]
            }, g.appendRow = function(e, t, o) {
                void 0 === t && (t = !1), void 0 === o && (o = !0);
                for (var i = e.ownerDocument || document, n = g.getColumnsCount(e), r = i.createElement("tr"), a = 0; a < n; a += 1) r.appendChild(i.createElement("td"));
                o && t && t.nextSibling ? t.parentNode && t.parentNode.insertBefore(r, t.nextSibling) : !o && t ? t.parentNode && t.parentNode.insertBefore(r, t) : (m.$$(":scope>tbody", e)[0] || e).appendChild(r)
            }, g.removeRow = function(r, a) {
                var s, l = g.formalMatrix(r),
                    c = r.rows[a];
                m.each(l[a], function(e, t) {
                    if (s = !1, a - 1 < 0 || l[a - 1][e] !== t)
                        if (l[a + 1] && l[a + 1][e] === t) {
                            if (t.parentNode === c && t.parentNode.nextSibling) {
                                s = !0;
                                for (var o = e + 1; l[a + 1][o] === t;) o += 1;
                                var i = v.Dom.next(t.parentNode, function(e) {
                                    return e && e.nodeType === Node.ELEMENT_NODE && "TR" === e.nodeName
                                }, r);
                                l[a + 1][o] ? i.insertBefore(t, l[a + 1][o]) : i.appendChild(t)
                            }
                        } else v.Dom.safeRemove(t);
                    else s = !0;
                    if (s && (t.parentNode === c || t !== l[a][e - 1])) {
                        var n = t.rowSpan;
                        1 < n - 1 ? t.setAttribute("rowspan", "" + (n - 1)) : t.removeAttribute("rowspan")
                    }
                }), v.Dom.safeRemove(c)
            }, g.appendColumn = function(e, t, o) {
                void 0 === o && (o = !0);
                var i, n = g.formalMatrix(e);
                for (void 0 === t && (t = g.getColumnsCount(e) - 1), i = 0; i < n.length; i += 1) {
                    var r = (e.ownerDocument || document).createElement("td"),
                        a = n[i][t],
                        s = !1;
                    o ? (n[i] && a && n[i].length <= t + 1 || a !== n[i][t + 1]) && (a.nextSibling ? a.parentNode && a.parentNode.insertBefore(r, a.nextSibling) : a.parentNode && a.parentNode.appendChild(r), s = !0) : (t - 1 < 0 || n[i][t] !== n[i][t - 1] && n[i][t].parentNode) && (a.parentNode && a.parentNode.insertBefore(r, n[i][t]), s = !0), s || n[i][t].setAttribute("colspan", "" + (parseInt(n[i][t].getAttribute("colspan") || "1", 10) + 1))
                }
            }, g.removeColumn = function(e, n) {
                var r, a = g.formalMatrix(e);
                m.each(a, function(e, t) {
                    var o = t[n];
                    if (r = !1, n - 1 < 0 || a[e][n - 1] !== o ? n + 1 < t.length && a[e][n + 1] === o ? r = !0 : v.Dom.safeRemove(o) : r = !0, r && (e - 1 < 0 || o !== a[e - 1][n])) {
                        var i = o.colSpan;
                        1 < i - 1 ? o.setAttribute("colspan", "" + (i - 1)) : o.removeAttribute("colspan")
                    }
                })
            }, g.getSelectedBound = function(e, t) {
                var o, i, n, r = [
                        [1 / 0, 1 / 0],
                        [0, 0]
                    ],
                    a = g.formalMatrix(e);
                for (o = 0; o < a.length; o += 1)
                    for (i = 0; i < a[o].length; i += 1) ~t.indexOf(a[o][i]) && (r[0][0] = Math.min(o, r[0][0]), r[0][1] = Math.min(i, r[0][1]), r[1][0] = Math.max(o, r[1][0]), r[1][1] = Math.max(i, r[1][1]));
                for (o = r[0][0]; o <= r[1][0]; o += 1)
                    for (i = r[0][n = 1]; i <= r[1][1]; i += 1) {
                        for (; a[o][i - n] && a[o][i] === a[o][i - n];) r[0][1] = Math.min(i - n, r[0][1]), r[1][1] = Math.max(i - n, r[1][1]), n += 1;
                        for (n = 1; a[o][i + n] && a[o][i] === a[o][i + n];) r[0][1] = Math.min(i + n, r[0][1]), r[1][1] = Math.max(i + n, r[1][1]), n += 1;
                        for (n = 1; a[o - n] && a[o][i] === a[o - n][i];) r[0][0] = Math.min(o - n, r[0][0]), r[1][0] = Math.max(o - n, r[1][0]), n += 1;
                        for (n = 1; a[o + n] && a[o][i] === a[o + n][i];) r[0][0] = Math.min(o + n, r[0][0]), r[1][0] = Math.max(o + n, r[1][0]), n += 1
                    }
                return r
            }, g.normalizeTable = function(e) {
                var t, o, i, n, r = [],
                    a = g.formalMatrix(e);
                for (o = 0; o < a[0].length; o += 1) {
                    for (n = !(i = 1e6), t = 0; t < a.length; t += 1)
                        if (void 0 !== a[t][o]) {
                            if (a[t][o].colSpan < 2) {
                                n = !0;
                                break
                            }
                            i = Math.min(i, a[t][o].colSpan)
                        }
                    if (!n)
                        for (t = 0; t < a.length; t += 1) void 0 !== a[t][o] && g.__mark(a[t][o], "colspan", a[t][o].colSpan - i + 1, r)
                }
                for (t = 0; t < a.length; t += 1) {
                    for (n = !(i = 1e6), o = 0; o < a[t].length; o += 1)
                        if (void 0 !== a[t][o]) {
                            if (a[t][o].rowSpan < 2) {
                                n = !0;
                                break
                            }
                            i = Math.min(i, a[t][o].rowSpan)
                        }
                    if (!n)
                        for (o = 0; o < a[t].length; o += 1) void 0 !== a[t][o] && g.__mark(a[t][o], "rowspan", a[t][o].rowSpan - i + 1, r)
                }
                for (t = 0; t < a.length; t += 1)
                    for (o = 0; o < a[t].length; o += 1) void 0 !== a[t][o] && (a[t][o].hasAttribute("rowspan") && 1 === a[t][o].rowSpan && a[t][o].removeAttribute("rowspan"), a[t][o].hasAttribute("colspan") && 1 === a[t][o].colSpan && a[t][o].removeAttribute("colspan"), a[t][o].hasAttribute("class") && !a[t][o].getAttribute("class") && a[t][o].removeAttribute("class"));
                g.__unmark(r)
            }, g.mergeSelected = function(e) {
                var r, a = [],
                    s = g.getSelectedBound(e, g.getAllSelectedCells(e)),
                    l = 0,
                    c = null,
                    d = 0,
                    u = 0,
                    f = 0,
                    p = [];
                s && (s[0][0] - s[1][0] || s[0][1] - s[1][1]) && (g.formalMatrix(e, function(e, t, o, i, n) {
                    if (!(t < s[0][0] || s[1][0] < t || o < s[0][1] || s[1][1] < o)) {
                        if ((r = e).__i_am_already_was) return;
                        r.__i_am_already_was = !0, t === s[0][0] && r.style.width && (l += r.offsetWidth), m.trim(e.innerHTML.replace(/<br(\/)?>/g, "")) && a.push(e.innerHTML), 1 < i && (u += i - 1), 1 < n && (f += n - 1), c ? g.__mark(r, "remove", 1, p) : (c = e, d = o)
                    }
                }), u = s[1][1] - s[0][1] + 1, f = s[1][0] - s[0][0] + 1, c && (1 < u && g.__mark(c, "colspan", u, p), 1 < f && g.__mark(c, "rowspan", f, p), l && (g.__mark(c, "width", (l / e.offsetWidth * 100).toFixed(h.ACCURACY) + "%", p), d && g.setColumnWidthByDelta(e, d, 0, !0, p)), c.innerHTML = a.join("<br/>"), delete c.__i_am_already_was, g.__unmark(p), g.normalizeTable(e), m.each(Array.from(e.rows), function(e, t) {
                    t.cells.length || v.Dom.safeRemove(t)
                })))
            }, g.splitHorizontal = function(n) {
                var r, e, t, a, s, l = [],
                    o = n.ownerDocument || document;
                g.getAllSelectedCells(n).forEach(function(i) {
                    (e = o.createElement("td")).appendChild(o.createElement("br")), t = o.createElement("tr"), r = g.formalCoordinate(n, i), i.rowSpan < 2 ? (g.formalMatrix(n, function(e, t, o) {
                        r[0] === t && r[1] !== o && e !== i && g.__mark(e, "rowspan", e.rowSpan + 1, l)
                    }), v.Dom.after(v.Dom.closest(i, "tr", n), t), t.appendChild(e)) : (g.__mark(i, "rowspan", i.rowSpan - 1, l), g.formalMatrix(n, function(e, t, o) {
                        r[0] < t && t < r[0] + i.rowSpan && o < r[1] && e.parentNode.rowIndex === t && (s = e), r[0] < t && e === i && (a = n.rows[t])
                    }), s ? v.Dom.after(s, e) : a.insertBefore(e, a.firstChild)), 1 < i.colSpan && g.__mark(e, "colspan", i.colSpan, l), g.__unmark(l), g.restoreSelection(i)
                }), this.normalizeTable(n)
            }, g.splitVertical = function(t) {
                var n, o, r, a = [],
                    s = t.ownerDocument || document;
                g.getAllSelectedCells(t).forEach(function(i) {
                    n = g.formalCoordinate(t, i), i.colSpan < 2 ? g.formalMatrix(t, function(e, t, o) {
                        n[1] === o && n[0] !== t && e !== i && g.__mark(e, "colspan", e.colSpan + 1, a)
                    }) : g.__mark(i, "colspan", i.colSpan - 1, a), (o = s.createElement("td")).appendChild(s.createElement("br")), 1 < i.rowSpan && g.__mark(o, "rowspan", i.rowSpan, a);
                    var e = i.offsetWidth;
                    v.Dom.after(i, o), g.__mark(i, "width", (100 * (r = e / t.offsetWidth / 2)).toFixed(h.ACCURACY) + "%", a), g.__mark(o, "width", (100 * r).toFixed(h.ACCURACY) + "%", a), g.__unmark(a), g.restoreSelection(i)
                }), g.normalizeTable(t)
            }, g.setColumnWidthByDelta = function(e, t, o, i, n) {
                var r, a = g.formalMatrix(e);
                for (r = 0; r < a.length; r += 1) g.__mark(a[r][t], "width", ((a[r][t].offsetWidth + o) / e.offsetWidth * 100).toFixed(h.ACCURACY) + "%", n);
                i || g.__unmark(n)
            }, g.__mark = function(e, t, o, i) {
                i.push(e), e.__marked_value || (e.__marked_value = {}), e.__marked_value[t] = void 0 === o ? 1 : o
            }, g.__unmark = function(e) {
                e.forEach(function(o) {
                    o.__marked_value && (m.each(o.__marked_value, function(e, t) {
                        switch (e) {
                            case "remove":
                                v.Dom.safeRemove(o);
                                break;
                            case "rowspan":
                                1 < t ? o.setAttribute("rowspan", "" + t) : o.removeAttribute("rowspan");
                                break;
                            case "colspan":
                                1 < t ? o.setAttribute("colspan", "" + t) : o.removeAttribute("colspan");
                                break;
                            case "width":
                                o.style.width = "" + t
                        }
                        delete o.__marked_value[e]
                    }), delete o.__marked_value)
                })
            }, g);

        function g() {}
        t.Table = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(40);
        t.asArray = i.asArray;
        var n = o(74);
        t.inArray = n.inArray;
        var r = o(75);
        t.splitArray = r.splitArray
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(14);
        t.JoditObject = function(e) {
            i.extend(!0, this, e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(14),
            n = (r.prototype.toString = function() {
                for (var e = [], t = 0; t < this.length; t += 1) e[t] = this[t];
                return "" + e
            }, r);

        function r(e) {
            var t = this;
            i.extend(!(this.length = 0), this, e), this.length = e.length;
            var o = Array.prototype;
            ["map", "forEach", "reduce", "push", "pop", "shift", "unshift", "slice", "splice"].forEach(function(e) {
                t[e] = o[e]
            })
        }
        t.JoditArray = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {},
            n = i.toString;
        t.hasOwn = i.hasOwnProperty, ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "HTMLDocument", "Window", "HTMLElement", "HTMLBodyElement", "Text", "DocumentFragment", "DOMStringList", "HTMLCollection"].forEach(function(e) {
            i["[object " + e + "]"] = e.toLowerCase()
        }), t.type = function(e) {
            return null === e ? "null" : "object" == typeof e || "function" == typeof e ? i[n.call(e)] || "object" : typeof e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(2);
        t.trim = function(e) {
            return e.replace(i.SPACE_REG_EXP_START, "").replace(i.SPACE_REG_EXP_END, "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(9),
            n = (r.prototype.set = function(e, t) {
                this.provider.set(i.camelCase(this.prefix + e), t)
            }, r.prototype.get = function(e) {
                return this.provider.get(i.camelCase(this.prefix + e))
            }, r);

        function r(e) {
            this.provider = e, this.prefix = "Jodit_"
        }
        t.Storage = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = o(1),
            n = o(5),
            r = o(111),
            s = o(26),
            l = o(114),
            c = o(0),
            d = o(8),
            u = o(3),
            f = (a.__extends(p, i = d.Component), p.prototype.getButtonsList = function() {
                return this.__buttons.map(function(e) {
                    return e instanceof s.ToolbarButton ? e.control.name : ""
                }).filter(function(e) {
                    return "" !== e
                })
            }, p.prototype.appendChild = function(e) {
                this.__buttons.push(e), this.container.appendChild(e.container)
            }, Object.defineProperty(p.prototype, "firstButton", {
                get: function() {
                    return this.__buttons[0]
                },
                enumerable: !0,
                configurable: !0
            }), p.prototype.removeChild = function(e) {
                var t = this.__buttons.indexOf(e); - 1 != t && (this.__buttons.splice(t, 1), e.container.parentNode === this.container && c.Dom.safeRemove(e.container))
            }, p.prototype.build = function(e, t, o) {
                var i = this,
                    n = !1;
                this.clear(), ("string" == typeof e ? e.split(/[,\s]+/) : e).map(this.__getControlType).forEach(function(e) {
                    var t = null;
                    if (!~i.jodit.options.removeButtons.indexOf(e.name)) {
                        switch (e.name) {
                            case "\n":
                                t = new r.ToolbarBreak(i);
                                break;
                            case "|":
                                n || (n = !0, t = new l.ToolbarSeparator(i));
                                break;
                            default:
                                n = !1, t = new s.ToolbarButton(i, e, o)
                        }
                        t && i.appendChild(t)
                    }
                }), this.container.parentNode !== t && t.appendChild(this.container), this.immedateCheckActiveButtons()
            }, p.prototype.clear = function() {
                var t = this;
                this.__buttons.slice().forEach(function(e) {
                    t.removeChild(e), e.destruct()
                }), this.__buttons.length = 0
            }, p.prototype.buttonIsActive = function(e) {
                if ("function" == typeof e.control.isActive) return e.control.isActive(this.jodit, e.control, e)
            }, p.prototype.buttonIsDisabled = function(e) {
                return !!this.jodit.options.disabled || !(!this.jodit.options.readonly || this.jodit.options.activeButtonsInReadOnly && ~this.jodit.options.activeButtonsInReadOnly.indexOf(e.control.name)) || ("function" == typeof e.control.isDisable && (t = e.control.isDisable(this.jodit, e.control, e)), t);
                var t
            }, p.prototype.getTarget = function(e) {
                return e.target
            }, p.prototype.setDirection = function(e) {
                this.container.style.direction = e, this.container.setAttribute("dir", e)
            }, p.prototype.destruct = function() {
                this.isDestructed || (this.jodit.events.off(this.jodit.ownerWindow, "mousedown touchstart", this.closeAll).off(this.listenEvents, this.checkActiveButtons).off("afterSetMode focus", this.immedateCheckActiveButtons), this.clear(), c.Dom.safeRemove(this.container), delete this.container, i.prototype.destruct.call(this))
            }, p);

        function p(e) {
            var r = i.call(this, e) || this;
            return r.__buttons = [], r.__getControlType = function(e) {
                var t, o = r.jodit.options.controls || u.Config.defaultOptions.controls;
                if ("string" != typeof e) void 0 !== o[(t = a.__assign({
                    name: "empty"
                }, e)).name] && (t = a.__assign({}, o[t.name], t));
                else {
                    var i = e.split(/\./),
                        n = o;
                    1 < i.length && void 0 !== o[i[0]] && (n = o[i[0]], e = i[1]), t = void 0 !== n[e] ? a.__assign({
                        name: e
                    }, n[e]) : {
                        name: e,
                        command: e,
                        tooltip: e
                    }
                }
                return t
            }, r.closeAll = function() {
                r.jodit && r.jodit.events && r.jodit.events.fire("closeAllPopups")
            }, r.initEvents = function() {
                r.jodit.events.on(r.jodit.ownerWindow, "mousedown touchend", r.closeAll).on(r.listenEvents, r.checkActiveButtons).on("afterSetMode focus", r.immedateCheckActiveButtons)
            }, r.listenEvents = "changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart", r.immedateCheckActiveButtons = function() {
                r.isDestructed || r.jodit.isLocked() || (r.__buttons.filter(function(e) {
                    return e instanceof s.ToolbarButton
                }).forEach(function(e) {
                    e.disable = e.isDisable(), e.disable || (e.active = e.isActive()), "function" == typeof e.control.getLabel && e.control.getLabel(r.jodit, e.control, e)
                }), r.jodit.events && r.jodit.events.fire("updateToolbar"))
            }, r.checkActiveButtons = n.debounce(r.immedateCheckActiveButtons, r.jodit.defaultTimeout), r.container = r.jodit.create.element("ul"), r.container.classList.add("jodit_toolbar"), r.initEvents(), r
        }
        t.ToolbarCollection = f
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(37);
        t.Ajax = i.Ajax;
        var n = o(62);
        t.EventsNative = n.EventsNative;
        var r = o(8);
        t.Component = r.Component;
        var a = o(38);
        t.ContextMenu = a.ContextMenu;
        var s = o(132);
        t.Cookie = s.Cookie;
        var l = o(13);
        t.Alert = l.Alert, t.Confirm = l.Confirm, t.Promt = l.Promt, t.Dialog = l.Dialog;
        var c = o(0);
        t.Dom = c.Dom;
        var d = o(7);
        t.Plugin = d.Plugin;
        var u = o(63);
        t.Create = u.Create;
        var f = o(39);
        t.FileBrowser = f.FileBrowser;
        var p = o(4);
        t.Helpers = p;
        var h = o(141);
        t.ImageEditor = h.ImageEditor;
        var v = o(55);
        t.Observer = v.Observer;
        var m = o(58);
        t.Select = m.Select;
        var g = o(34);
        t.Storage = g.Storage;
        var _ = o(56);
        t.Snapshot = _.Snapshot;
        var b = o(28);
        t.Table = b.Table;
        var y = o(6);
        t.ToolbarIcon = y.ToolbarIcon;
        var w = o(20);
        t.JoditToolbarCollection = w.JoditToolbarCollection;
        var C = o(35);
        t.ToolbarCollection = C.ToolbarCollection;
        var E = o(26);
        t.ToolbarButton = E.ToolbarButton;
        var j = o(57);
        t.Stack = j.Stack;
        var T = o(17);
        t.Widget = T.Widget;
        var S = o(142);
        t.Uploader = S.Uploader
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            r = o(4);
        i.Config.prototype.defaultAjaxOptions = {
            dataType: "json",
            method: "GET",
            url: "",
            data: null,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                "X-REQUESTED-WITH": "XMLHttpRequest"
            },
            withCredentials: !1,
            xhr: function() {
                return new("undefined" == typeof XDomainRequest ? XMLHttpRequest : XDomainRequest)
            }
        };
        var n = (a.prototype.__buildParams = function(e, t) {
            if (this.options.queryBuild && "function" == typeof this.options.queryBuild) return this.options.queryBuild.call(this, e, t);
            if ("string" == typeof e || this.jodit.ownerWindow.FormData && e instanceof this.jodit.ownerWindow.FormData) return e;
            var o, i, n, r = [];
            for (o in e) e.hasOwnProperty(o) && (i = t ? t + "[" + o + "]" : o, r.push("object" == typeof(n = e[o]) ? this.__buildParams(n, i) : encodeURIComponent(i) + "=" + encodeURIComponent(n)));
            return r.join("&")
        }, a.prototype.abort = function() {
            try {
                this.xhr.abort()
            } catch (e) {}
            return this
        }, a.prototype.send = function() {
            var n = this;
            return new Promise(function(t, o) {
                function i(e) {
                    var t = null;
                    if ("json" === n.options.dataType && (t = JSON.parse(e)), !t) throw Error("No JSON format");
                    return t
                }
                if (n.xhr.onabort = function() {
                        o(Error(n.xhr.statusText))
                    }, n.xhr.onerror = function() {
                        o(Error(n.xhr.statusText))
                    }, n.xhr.ontimeout = function() {
                        o(Error(n.xhr.statusText))
                    }, n.xhr.onload = function() {
                        n.response = n.xhr.responseText, n.status = n.xhr.status, t.call(n.xhr, i(n.response) || {})
                    }, n.xhr.onreadystatechange = function() {
                        if (n.xhr.readyState === XMLHttpRequest.DONE) {
                            var e = n.xhr.responseText;
                            n.response = e, n.status = n.xhr.status, ~n.success_response_codes.indexOf(n.xhr.status) ? t.call(n.xhr, i(e)) : o.call(n.xhr, Error(n.xhr.statusText || n.jodit.i18n("Connection error!")))
                        }
                    }, n.xhr.withCredentials = n.options.withCredentials || !1, !n.options.url) throw Error("Need URL for AJAX request");
                n.xhr.open(n.options.method || "get", n.options.url, !0), n.options.contentType && n.xhr.setRequestHeader && n.xhr.setRequestHeader("Content-type", n.options.contentType), n.options.headers && n.xhr.setRequestHeader && r.each(n.options.headers, function(e, t) {
                    n.xhr.setRequestHeader(e, t)
                }), setTimeout(function() {
                    n.xhr.send(n.options.data ? n.__buildParams(n.options.data) : void 0)
                }, 0)
            })
        }, a);

        function a(e, t) {
            var o = this;
            this.success_response_codes = [200, 201, 202], this.jodit = e, this.options = r.extend(!0, {}, i.Config.prototype.defaultAjaxOptions, t), this.options.xhr && (this.xhr = this.options.xhr()), e && e.events && e.events.on("beforeDestruct", function() {
                o.abort()
            })
        }
        t.Ajax = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(8),
            a = o(10),
            s = o(6),
            l = o(0),
            c = (n.__extends(d, i = r.Component), d.prototype.show = function(e, t, o, i) {
                var n = this,
                    r = this;
                Array.isArray(o) && (i && (this.context.style.zIndex = "" + i), this.context.innerHTML = "", o.forEach(function(t) {
                    if (t) {
                        var e = n.jodit.create.fromHTML('<a href="javascript:void(0)">' + (t.icon ? s.ToolbarIcon.getIcon(t.icon) : "") + "<span></span></a>"),
                            o = e.querySelector("span");
                        e.addEventListener("click", function(e) {
                            return t.exec && t.exec.call(r, e), r.hide(), !1
                        }), o.innerText = r.jodit.i18n(t.title || ""), r.context.appendChild(e)
                    }
                }), a.css(r.context, {
                    left: e,
                    top: t
                }), this.jodit.events.on(this.jodit.ownerWindow, "mouseup jodit_close_dialog", r.hide), this.context.classList.add("jodit_context_menu-show"))
            }, d.prototype.destruct = function() {
                l.Dom.safeRemove(this.context), delete this.context, this.jodit.events.off(this.jodit.ownerWindow, "mouseup", this.hide), i.prototype.destruct.call(this)
            }, d);

        function d(e) {
            var t = i.call(this, e) || this;
            return t.hide = function() {
                t.context.classList.remove("jodit_context_menu-show"), t.jodit.ownerWindow.removeEventListener("mouseup", t.hide)
            }, t.context = e.create.div("jodit_context_menu", {
                "data-editor_id": t.jodit.id
            }), e.ownerDocument.body.appendChild(t.context), t
        }
        t.ContextMenu = c
    }, function(e, u, t) {
        "use strict";
        Object.defineProperty(u, "__esModule", {
            value: !0
        });
        var a = t(1),
            l = t(3),
            d = t(2),
            f = t(16),
            i = t(65),
            r = t(64),
            p = t(6),
            h = t(59),
            v = t(34),
            o = t(24),
            m = t(19),
            g = t(11),
            s = t(53),
            _ = t(14),
            b = t(18),
            n = t(60);
        t(134);
        var y = t(0),
            w = t(5),
            c = t(13),
            C = t(135),
            E = t(136),
            j = t(137),
            T = t(138),
            S = t(139),
            x = t(140);
        u.F_CLASS = "jodit_filebrowser", u.ITEM_CLASS = u.F_CLASS + "_files_item", u.ICON_LOADER = '<i class="jodit_icon-loader"></i>';
        var k, D = u.ITEM_CLASS + "-active-true",
            L = (a.__extends(z, k = n.ViewWithToolbar), Object.defineProperty(z.prototype, "defaultTimeout", {
                get: function() {
                    return this.jodit && this.jodit !== this ? this.jodit.defaultTimeout : l.Config.defaultOptions.observer.timeout
                },
                enumerable: !0,
                configurable: !0
            }), z.prototype.loadItems = function(t, o) {
                return void 0 === t && (t = this.dataProvider.currentPath), void 0 === o && (o = this.dataProvider.currentSource), a.__awaiter(this, void 0, void 0, function() {
                    var i = this;
                    return a.__generator(this, function(e) {
                        return this.files.classList.add("active"), this.files.appendChild(this.loader.cloneNode(!0)), [2, this.dataProvider.items(t, o).then(function(e) {
                            var t = i.options.items.process;
                            if (t = t || i.options.ajax.process) {
                                var o = t.call(self, e);
                                i.generateItemsList(o.data.sources), i.state.activeElements = []
                            }
                        }).catch(function(e) {
                            c.Alert(e.message), i.errorHandler(e)
                        })]
                    })
                })
            }, z.prototype.loadTree = function() {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, o, i, n, r = this;
                    return a.__generator(this, function(e) {
                        return t = this.dataProvider.currentPath, o = this.dataProvider.currentSource, this.uploader && (this.uploader.setPath(t), this.uploader.setSource(o)), this.tree.classList.add("active"), y.Dom.detach(this.tree), this.tree.appendChild(this.loader.cloneNode(!0)), this.options.showFoldersPanel ? (i = this.dataProvider.tree(t, o).then(function(e) {
                            var t = r.options.folder.process;
                            if (t = t || r.options.ajax.process) {
                                var o = t.call(self, e);
                                r.generateFolderTree(o.data.sources)
                            }
                        }).catch(function() {
                            r.errorHandler(Error(r.jodit.i18n("Error on load folders")))
                        }), n = this.loadItems(t, o), [2, Promise.all([i, n])]) : (this.tree.classList.remove("active"), [2])
                    })
                })
            }, z.prototype.deleteFile = function(o, i) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return a.__generator(this, function(e) {
                        return [2, this.dataProvider.fileRemove(this.dataProvider.currentPath, o, i).then(function(e) {
                            if (t.options.remove && t.options.remove.process && (e = t.options.remove.process.call(t, e)), !t.options.isSuccess(e)) throw Error(t.options.getMessage(e));
                            t.status(t.options.getMessage(e) || t.i18n('File "%s" was deleted', o), !0)
                        }).catch(this.status)]
                    })
                })
            }, z.prototype.generateFolderTree = function(e) {
                var i = [];
                o.each(e, function(t, o) {
                    o.folders.forEach(function(e) {
                        i.push({
                            name: e,
                            source: o,
                            sourceName: t
                        })
                    })
                }), this.state.folders = i
            }, z.prototype.generateItemsList = function(e) {
                var i = this,
                    n = [],
                    r = this.state;
                o.each(e, function(t, o) {
                    o.files && o.files.length && ("function" == typeof i.options.sort && o.files.sort(function(e, t) {
                        return i.options.sort(e, t, r.sortBy)
                    }), o.files.forEach(function(e) {
                        r.filterWord.length && void 0 !== i.options.filter && !i.options.filter(e, r.filterWord) || i.state.onlyImages && void 0 !== e.isImage && !e.isImage || n.push(T.FileBrowserItem.create(a.__assign({}, e, {
                            sourceName: t,
                            source: o
                        })))
                    }))
                }), this.state.elements = n
            }, z.prototype.onSelect = function(e) {
                var t = this;
                return function() {
                    if (t.state.activeElements.length) {
                        var o = [];
                        t.state.activeElements.forEach(function(e) {
                            var t = e.fileURL;
                            t && o.push(t)
                        }), t.close(), "function" == typeof e && e({
                            baseurl: "",
                            files: o
                        })
                    }
                    return !1
                }
            }, z.prototype.isOpened = function() {
                return this.dialog.isOpened() && "none" !== this.browser.style.display
            }, z.prototype.elementToItem = function(e) {
                return this.elementsMap[e.dataset.key || ""].item
            }, z.prototype.stateToView = function() {
                var l = this,
                    e = this.state,
                    t = this.files,
                    c = this.create,
                    d = this.options;
                e.on("beforeChange.activeElements", function() {
                    e.activeElements.forEach(function(e) {
                        var t = l.elementsMap[e.uniqueHashKey].elm;
                        t && t.classList.remove(D)
                    })
                }).on("change.activeElements", function() {
                    l.events.fire("changeSelection"), e.activeElements.forEach(function(e) {
                        var t = l.elementsMap[e.uniqueHashKey].elm;
                        t && t.classList.add(D)
                    })
                }).on("change.view", function() {
                    t.classList.remove(u.F_CLASS + "_files_view-tiles"), t.classList.remove(u.F_CLASS + "_files_view-list"), t.classList.add(u.F_CLASS + "_files_view-" + e.view), l.storage.set(u.F_CLASS + "_view", e.view)
                }).on("change.sortBy", function() {
                    l.storage.set(u.F_CLASS + "_sortby", e.sortBy)
                }).on("change.elements", w.debounce(function() {
                    y.Dom.detach(t), e.elements.length ? e.elements.forEach(function(e) {
                        l.files.appendChild(function(e) {
                            var t = e.uniqueHashKey;
                            if (l.elementsMap[t]) return l.elementsMap[t].elm;
                            var o = c.fromHTML(d.getThumbTemplate.call(l, e, e.source, "" + e.sourceName));
                            return l.elementsMap[o.dataset.key = t] = {
                                item: e,
                                elm: o
                            }, l.elementsMap[t].elm
                        }(e))
                    }) : t.appendChild(c.div(u.F_CLASS + "_no_files", l.i18n("There are no files")))
                }, this.defaultTimeout)).on("change.folders", w.debounce(function() {
                    function r(e, t, o) {
                        void 0 === o && (o = !1), e && s && (e !== s || o) && d.createNewFolder && l.dataProvider.canI("FolderCreate") && (l.tree.appendChild(c.a("jodit_button addfolder", {
                            href: "javascript:void(0)",
                            "data-path": m.normalizePath(e.path + "/"),
                            "data-source": t
                        }, p.ToolbarIcon.getIcon("plus") + " " + l.i18n("Add folder"))), s = e)
                    }
                    y.Dom.detach(l.tree);
                    var a = "default",
                        s = null;
                    e.folders.forEach(function(e) {
                        var t = e.name,
                            o = e.source,
                            i = e.sourceName;
                        i && i !== a && (l.tree.appendChild(c.div(u.F_CLASS + "_source_title", i)), a = i);
                        var n = c.a(u.F_CLASS + "_tree_item", {
                            draggable: "draggable",
                            href: "javascript:void(0)",
                            "data-path": m.normalizePath(o.path, t + "/"),
                            "data-name": t,
                            "data-source": i,
                            "data-source-path": o.path
                        }, c.span(u.F_CLASS + "_tree_item_title", t));
                        r(o, i), s = o, l.tree.appendChild(n), ".." !== t && "." !== t && (d.deleteFolder && l.dataProvider.canI("FolderRename") && n.appendChild(c.element("i", {
                            class: "jodit_icon_folder jodit_icon_folder_rename",
                            title: l.i18n("Rename")
                        }, p.ToolbarIcon.getIcon("pencil"))), d.deleteFolder && l.dataProvider.canI("FolderRemove") && n.appendChild(c.element("i", {
                            class: "jodit_icon_folder jodit_icon_folder_remove",
                            title: l.i18n("Delete")
                        }, p.ToolbarIcon.getIcon("cancel"))))
                    }), r(s, a, !0)
                }, this.defaultTimeout))
            }, z.prototype.initEventsListeners = function() {
                var t = this,
                    o = this.state,
                    n = this;
                n.events.on("view.filebrowser", function(e) {
                    e !== o.view && (o.view = e)
                }).on("sort.filebrowser", function(e) {
                    e !== o.sortBy && (o.sortBy = e, n.loadItems())
                }).on("filter.filebrowser", function(e) {
                    e !== o.filterWord && (o.filterWord = e, n.loadItems())
                }).on("fileRemove.filebrowser", function() {
                    n.state.activeElements.length && i.Confirm(n.i18n("Are you sure?"), "", function(e) {
                        if (e) {
                            var t = [];
                            n.state.activeElements.forEach(function(e) {
                                t.push(n.deleteFile(e.file || e.name || "", e.sourceName))
                            }), n.state.activeElements = [], Promise.all(t).then(function() {
                                return n.loadTree()
                            })
                        }
                    })
                }).on("edit.filebrowser", function() {
                    if (1 === n.state.activeElements.length) {
                        var e = t.state.activeElements[0];
                        n.openImageEditor(e.fileURL, e.file || "", e.path, e.sourceName)
                    }
                }).on("fileRename.filebrowser", function(t, o, i) {
                    1 === n.state.activeElements.length && r.Promt(n.i18n("Enter new name"), n.i18n("Rename"), function(e) {
                        if (!x.isValidName(e)) return n.status(n.i18n("Enter new name")), !1;
                        n.dataProvider.fileRename(o, t, e, i).then(function(e) {
                            if (n.options.fileRename && n.options.fileRename.process && (e = n.options.fileRename.process.call(n, e)), !n.options.isSuccess(e)) throw Error(n.options.getMessage(e));
                            n.state.activeElements = [], n.status(n.options.getMessage(e), !0), n.loadItems()
                        }).catch(n.status)
                    }, n.i18n("type name"), t)
                }).on("update.filebrowser", function() {
                    n.loadTree()
                })
            }, z.prototype.initNativeEventsListeners = function() {
                var t = this,
                    o = !1,
                    n = this;
                n.events.on(n.tree, "click", function(e) {
                    var t = this.parentNode,
                        o = t.getAttribute("data-path") || "";
                    return i.Confirm(n.i18n("Are you sure?"), n.i18n("Delete"), function(e) {
                        e && n.dataProvider.folderRemove(o, t.getAttribute("data-name") || "", t.getAttribute("data-source") || "").then(function(e) {
                            if (n.options.folderRemove && n.options.folderRemove.process && (e = n.options.folderRemove.process.call(n, e)), !n.options.isSuccess(e)) throw Error(n.options.getMessage(e));
                            n.state.activeElements = [], n.status(n.options.getMessage(e), !0), n.loadTree()
                        }).catch(n.status)
                    }), e.stopImmediatePropagation(), !1
                }, "a>.jodit_icon_folder_remove").on(n.tree, "click", function(e) {
                    var t = this.parentNode,
                        o = t.getAttribute("data-name") || "",
                        i = t.getAttribute("data-source-path") || "";
                    return r.Promt(n.i18n("Enter new name"), n.i18n("Rename"), function(e) {
                        if (!x.isValidName(e)) return n.status(n.i18n("Enter new name")), !1;
                        n.dataProvider.folderRename(i, t.getAttribute("data-name") || "", e, t.getAttribute("data-source") || "").then(function(e) {
                            if (n.options.folderRename && n.options.folderRename.process && (e = n.options.folderRename.process.call(n, e)), !n.options.isSuccess(e)) throw Error(n.options.getMessage(e));
                            n.state.activeElements = [], n.status(n.options.getMessage(e), !0), n.loadTree()
                        }).catch(n.status)
                    }, n.i18n("type name"), o), e.stopImmediatePropagation(), !1
                }, "a>.jodit_icon_folder_rename").on(n.tree, "click", function() {
                    var t = this;
                    this.classList.contains("addfolder") ? r.Promt(n.i18n("Enter Directory name"), n.i18n("Create directory"), function(e) {
                        n.dataProvider.createFolder(e, t.getAttribute("data-path") || "", t.getAttribute("data-source") || "").then(function(e) {
                            return n.options.isSuccess(e) ? n.loadTree() : n.status(n.options.getMessage(e)), e
                        }, n.status)
                    }, n.i18n("type name")) : (n.dataProvider.currentPath = this.getAttribute("data-path") || "", n.dataProvider.currentSource = this.getAttribute("data-source") || "", n.loadTree())
                }, "a").on(n.tree, "dragstart", function() {
                    n.options.moveFolder && (o = this)
                }, "a").on(n.tree, "drop", function() {
                    if ((n.options.moveFile || n.options.moveFolder) && o) {
                        var e = o.getAttribute("data-path") || "";
                        if (!n.options.moveFolder && o.classList.contains(u.F_CLASS + "_tree_item")) return !1;
                        if (o.classList.contains(u.ITEM_CLASS) && (e += o.getAttribute("data-name"), !n.options.moveFile)) return !1;
                        n.dataProvider.move(e, this.getAttribute("data-path") || "", this.getAttribute("data-source") || "", o.classList.contains(u.ITEM_CLASS)).then(function(e) {
                            n.options.isSuccess(e) ? n.loadTree() : n.status(n.options.getMessage(e))
                        }, n.status), o = !1
                    }
                }, "a").on(n.files, "contextmenu", E.default(n), "a").on(n.files, "click", function(e) {
                    s.ctrlKey(e) || (t.state.activeElements = [])
                }).on(n.files, "click", function(e) {
                    var t = n.elementToItem(this);
                    if (t) return n.state.activeElements = s.ctrlKey(e) ? n.state.activeElements.concat([t]) : [t], e.stopPropagation(), !1
                }, "a").on(n.files, "dragstart", function() {
                    n.options.moveFile && (o = this)
                }, "a").on(n.dialog.container, "drop", function(e) {
                    return e.preventDefault()
                })
            }, z.prototype.initUploader = function(e) {
                function t() {
                    o.loadItems()
                }
                var o = this,
                    i = this,
                    n = _.extend(!0, {}, l.Config.defaultOptions.uploader, i.options.uploader, e && e.options && null !== e.options.uploader ? a.__assign({}, e.options.uploader) : {});
                i.uploader = i.getInstance("Uploader", n), i.uploader.setPath(i.dataProvider.currentPath), i.uploader.setSource(i.dataProvider.currentSource), i.uploader.bind(i.browser, t, i.errorHandler), i.events.on("bindUploader.filebrowser", function(e) {
                    i.uploader.bind(e, t, i.errorHandler)
                })
            }, z.prototype.destruct = function() {
                this.dialog.destruct(), delete this.dialog, this.events && this.events.off(".filebrowser"), this.uploader && this.uploader.destruct(), delete this.uploader, k.prototype.destruct.call(this)
            }, z);

        function z(e, t) {
            var c = k.call(this, e, t) || this;
            c.loader = c.create.div(u.F_CLASS + "_loader", u.ICON_LOADER), c.browser = c.create.div(u.F_CLASS + " non-selected"), c.status_line = c.create.div(u.F_CLASS + "_status"), c.tree = c.create.div(u.F_CLASS + "_tree"), c.files = c.create.div(u.F_CLASS + "_files"), c.state = j.ObserveObject.create({
                activeElements: [],
                elements: [],
                folders: [],
                view: "tiles",
                sortBy: "changed-desc",
                filterWord: "",
                onlyImages: !1
            }), c.errorHandler = function(e) {
                c.status(e instanceof Error ? c.i18n(e.message) : c.options.getMessage(e))
            }, c.status = function(e, t) {
                "string" != typeof e && (e = e.message), clearTimeout(c.statusTimer), c.status_line.classList.remove("success"), c.status_line.classList.add("active");
                var o = c.create.div();
                o.textContent = e, c.status_line.appendChild(o), t && c.status_line.classList.add("success"), c.statusTimer = b.setTimeout(function() {
                    c.status_line.classList.remove("active"), y.Dom.detach(c.status_line)
                }, c.options.howLongShowMsg)
            }, c.close = function() {
                c.dialog.close()
            }, c.open = function(i, e) {
                return void 0 === e && (e = !1), c.state.onlyImages = e, new Promise(function(e) {
                    if (!c.options.items || !c.options.items.url) throw Error("Need set options.filebrowser.ajax.url");
                    var t = 0;
                    c.events.off(c.files, "dblclick").on(c.files, "dblclick", c.onSelect(i), "a").on(c.files, "touchstart", function() {
                        var e = (new Date).getTime();
                        e - t < d.EMULATE_DBLCLICK_TIMEOUT && c.onSelect(i)(), t = e
                    }, "a").off("select.filebrowser").on("select.filebrowser", c.onSelect(i));
                    var o = c.create.div();
                    c.toolbar.build(c.options.buttons, o), c.dialog.dialogbox_header.classList.add(u.F_CLASS + "_title_box"), c.dialog.open(c.browser, o), c.events.fire("sort.filebrowser", c.state.sortBy), c.loadTree().then(e)
                })
            }, c.openImageEditor = function(e, n, r, a, s, l) {
                return c.getInstance("ImageEditor").open(e, function(e, t, o, i) {
                    ("resize" === t.action ? c.dataProvider.resize(r, a, n, e, t.box) : c.dataProvider.crop(r, a, n, e, t.box)).then(function(e) {
                        c.options.isSuccess(e) ? c.loadTree().then(function() {
                            o(), s && s()
                        }) : (i(Error(c.options.getMessage(e))), l && l(Error(c.options.getMessage(e))))
                    }).catch(function(e) {
                        i(e), l && l(e)
                    })
                })
            }, c.elementsMap = {};
            var o = c,
                i = e ? e.ownerDocument : document,
                n = e ? e.editorDocument : i;
            e && (c.id = e.id), o.options = new l.OptionsDefault(_.extend(!0, {}, o.options, l.Config.defaultOptions.filebrowser, t, e ? e.options.filebrowser : void 0)), o.storage = new v.Storage(c.options.filebrowser.saveStateInStorage ? new h.LocalStorageProvider : new S.MemoryStorageProvider), o.dataProvider = new C.default(o.options, o.jodit || o), o.dialog = new f.Dialog(e || o, {
                fullsize: o.options.fullsize,
                buttons: ["dialog.fullsize", "dialog.close"]
            }), o.options.showFoldersPanel && o.browser.appendChild(o.tree), o.browser.appendChild(o.files), o.browser.appendChild(o.status_line), c.initEventsListeners(), c.initNativeEventsListeners(), o.dialog.setSize(o.options.width, o.options.height), ["getLocalFileByUrl", "crop", "resize", "create", "fileMove", "folderMove", "fileRename", "folderRename", "fileRemove", "folderRemove", "folder", "items", "permissions"].forEach(function(e) {
                null !== c.options[e] && (c.options[e] = _.extend(!0, {}, c.options.ajax, c.options[e]))
            }), o.stateToView();
            var r = c.storage.get(u.F_CLASS + "_view");
            o.state.view = r && null === c.options.view ? "list" === r ? "list" : "tiles" : "list" === o.options.view ? "list" : "tiles";
            var a = o.storage.get(u.F_CLASS + "_sortby");
            if (a) {
                var s = a.split("-");
                o.state.sortBy = ["changed", "name", "size"].includes(s[0]) ? a : "changed-desc"
            } else o.state.sortBy = o.options.sortBy || "changed-desc";
            return o.dataProvider.currentBaseUrl = g.$$("base", n).length ? g.$$("base", n)[0].getAttribute("href") || "" : location.protocol + "//" + location.host, o.initUploader(e), c
        }
        u.FileBrowser = L
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.asArray = function(e) {
            return Array.isArray(e) ? e : [e]
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(18);
        t.debounce = function(o, i, n, r) {
            3 === arguments.length && "boolean" != typeof n && (r = n, n = !1);
            var a = 0;
            return function() {
                var e = arguments,
                    t = r || this;
                (!n || a) && i || o.apply(t, e), i && (clearTimeout(a), a = s.setTimeout(function() {
                    n || o.apply(t, e), a = 0
                }, i))
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isWindow = function(e) {
            return null !== e && e === e.window
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(77), t), i.__exportStar(o(78), t), i.__exportStar(o(79), t), i.__exportStar(o(80), t), i.__exportStar(o(22), t), i.__exportStar(o(21), t), i.__exportStar(o(44), t), i.__exportStar(o(42), t), i.__exportStar(o(81), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isURL = function(e) {
            return /^(https?:\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.?)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.colorToHex = function(e) {
            if ("rgba(0, 0, 0, 0)" === e || "" === e) return !1;
            if (!e) return "#000000";
            if ("#" == e.substr(0, 1)) return e;
            var t, o, i, n = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);
            if (!n) return "#000000";
            for (o = parseInt(n[2], 10), i = parseInt(n[3], 10), t = (parseInt(n[4], 10) | i << 8 | o << 16).toString(16).toUpperCase(); t.length < 6;) t = "0" + t;
            return n[1] + "#" + t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(84), t), i.__exportStar(o(85), t), i.__exportStar(o(87), t), i.__exportStar(o(88), t), i.__exportStar(o(89), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.camelCase = function(e) {
            return e.replace(/([-_])(.)/g, function(e, t, o) {
                return o.toUpperCase()
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fromCamelCase = function(e) {
            return e.replace(/([A-Z]+)/g, function(e, t) {
                return "-" + t.toLowerCase()
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(22);
        t.normilizeCSSValue = function(e, t) {
            switch (e.toLowerCase()) {
                case "font-weight":
                    switch (("" + t).toLowerCase()) {
                        case "bold":
                            return 700;
                        case "normal":
                            return 400;
                        case "heavy":
                            return 900
                    }
                    return i.isNumeric(t) ? +t : t
            }
            return t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(51);
        t.appendScript = function(e, t, o, i) {
            void 0 === o && (o = "");
            var n = i.createElement("script");
            return n.className = o, n.type = "text/javascript", void 0 !== t && n.addEventListener("load", t), n.src = r.completeUrl(e), i.body.appendChild(n), {
                callback: t,
                element: n
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.completeUrl = function(e) {
            return "file:" === window.location.protocol && /^\/\//.test(e) && (e = "https:" + e), e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseQuery = function(e) {
            for (var t, o = {}, i = e.substr(1).split("&"), n = 0; n < i.length; n += 1) t = i[n].split("="), o[decodeURIComponent(t[0])] = decodeURIComponent(t[1] || "");
            return o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ctrlKey = function(e) {
            if ("undefined" != typeof navigator && ~navigator.userAgent.indexOf("Mac OS X")) {
                if (e.metaKey && !e.altKey) return !0
            } else if (e.ctrlKey && !e.altKey) return !0;
            return !1
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultLanguage = function(e) {
            return "auto" === e || void 0 === e ? document.documentElement && document.documentElement.lang || navigator.language && navigator.language.substr(0, 2) || !!navigator.browserLanguage && navigator.browserLanguage.substr(0, 2) || "en" : e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(8),
            a = o(5),
            s = o(56),
            l = o(57),
            c = o(107);
        n.Config.prototype.observer = {
            timeout: 100
        };
        var d, u = (i.__extends(f, d = r.Component), f.prototype.redo = function() {
            this.stack.redo() && (this.__startValue = this.snapshot.make(), this.changeStack())
        }, f.prototype.undo = function() {
            this.stack.undo() && (this.__startValue = this.snapshot.make(), this.changeStack())
        }, f.prototype.clear = function() {
            this.__startValue = this.snapshot.make(), this.stack.clear(), this.changeStack()
        }, f.prototype.changeStack = function() {
            this.jodit && !this.jodit.isDestructed && this.jodit.events && this.jodit.events.fire("changeStack")
        }, f.prototype.destruct = function() {
            this.jodit.events && this.jodit.events.off(".observer"), this.snapshot.destruct(), delete this.snapshot, delete this.stack, d.prototype.destruct.call(this)
        }, f);

        function f(e) {
            var t = d.call(this, e) || this;
            t.onChangeStack = function() {
                t.__newValue = t.snapshot.make(), s.Snapshot.equal(t.__newValue, t.__startValue) || (t.stack.push(new c.Command(t.__startValue, t.__newValue, t)), t.__startValue = t.__newValue, t.changeStack())
            }, t.stack = new l.Stack, t.snapshot = new s.Snapshot(e);
            var o = a.debounce(t.onChangeStack, e.defaultTimeout);
            return e.events.on("afterInit.observer", function() {
                t.isDestructed || (t.__startValue = t.snapshot.make(), e.events.on("changeSelection.observer selectionstart.observer selectionchange.observer mousedown.observer mouseup.observer keydown.observer keyup.observer", function() {
                    t.__startValue.html === t.jodit.getNativeEditorValue() && (t.__startValue = t.snapshot.make())
                }).on("change.observer", function() {
                    t.snapshot.isBlocked || o()
                }))
            }), t
        }
        t.Observer = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(8),
            a = o(0),
            s = (n.__extends(l, i = r.Component), l.equal = function(e, t) {
                return e.html === t.html && JSON.stringify(e.range) === JSON.stringify(t.range)
            }, l.countNodesBeforeInParent = function(e) {
                if (!e.parentNode) return 0;
                var t, o = e.parentNode.childNodes,
                    i = 0,
                    n = null;
                for (t = 0; t < o.length; t += 1) {
                    if (!n || o[t].nodeType === Node.TEXT_NODE && "" === o[t].textContent || n.nodeType === Node.TEXT_NODE && o[t].nodeType === Node.TEXT_NODE || (i += 1), o[t] === e) return i;
                    n = o[t]
                }
                return 0
            }, l.strokeOffset = function(e, t) {
                for (; e && e.nodeType === Node.TEXT_NODE;)(e = e.previousSibling) && e.nodeType === Node.TEXT_NODE && null !== e.textContent && (t += e.textContent.length);
                return t
            }, l.prototype.calcHierarchyLadder = function(e) {
                var t = [];
                if (!e || !e.parentNode || !a.Dom.isOrContains(this.jodit.editor, e)) return [];
                for (; e && e !== this.jodit.editor;) e && t.push(l.countNodesBeforeInParent(e)), e = e.parentNode;
                return t.reverse()
            }, l.prototype.getElementByLadder = function(e) {
                var t, o = this.jodit.editor;
                for (t = 0; o && t < e.length; t += 1) o = o.childNodes[e[t]];
                return o
            }, l.prototype.make = function() {
                var e = {
                    html: "",
                    range: {
                        startContainer: [],
                        startOffset: 0,
                        endContainer: [],
                        endOffset: 0
                    }
                };
                e.html = this.jodit.getNativeEditorValue();
                var t = this.jodit.editorWindow.getSelection();
                if (t && t.rangeCount) {
                    var o = t.getRangeAt(0),
                        i = this.calcHierarchyLadder(o.startContainer),
                        n = this.calcHierarchyLadder(o.endContainer),
                        r = l.strokeOffset(o.startContainer, o.startOffset),
                        a = l.strokeOffset(o.endContainer, o.endOffset);
                    i.length || o.startContainer === this.jodit.editor || (r = 0), n.length || o.endContainer === this.jodit.editor || (a = 0), e.range = {
                        startContainer: i,
                        startOffset: r,
                        endContainer: n,
                        endOffset: a
                    }
                }
                return e
            }, l.prototype.restore = function(e) {
                this.isBlocked = !0, this.jodit.setEditorValue(e.html);
                try {
                    if (e.range) {
                        var t = this.jodit.editorDocument.createRange();
                        t.setStart(this.getElementByLadder(e.range.startContainer), e.range.startOffset), t.setEnd(this.getElementByLadder(e.range.endContainer), e.range.endOffset), this.jodit.selection.selectRange(t)
                    }
                } catch (e) {}
                this.isBlocked = !1
            }, l.prototype.destruct = function() {
                this.isBlocked = !1, i.prototype.destruct.call(this)
            }, l);

        function l() {
            var e = null !== i && i.apply(this, arguments) || this;
            return e.isBlocked = !1, e
        }
        t.Snapshot = s
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.prototype.clearRedo = function() {
            this.commands.length = this.stackPosition + 1
        }, n.prototype.clear = function() {
            this.commands.length = 0, this.stackPosition = -1
        }, n.prototype.push = function(e) {
            this.clearRedo(), this.commands.push(e), this.stackPosition += 1
        }, n.prototype.undo = function() {
            return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, !0)
        }, n.prototype.redo = function() {
            return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), !0)
        }, n.prototype.canUndo = function() {
            return 0 <= this.stackPosition
        }, n.prototype.canRedo = function() {
            return this.stackPosition < this.commands.length - 1
        }, n);

        function n() {
            this.commands = [], this.stackPosition = -1
        }
        t.Stack = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var v = o(2),
            d = o(2),
            m = o(0),
            g = o(10),
            r = o(19),
            a = o(11),
            _ = o(43),
            b = o(24),
            y = o(9),
            i = (Object.defineProperty(n.prototype, "area", {
                get: function() {
                    return this.jodit.editor
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "win", {
                get: function() {
                    return this.jodit.editorWindow
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "doc", {
                get: function() {
                    return this.jodit.editorDocument
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "sel", {
                get: function() {
                    return this.win.getSelection()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "range", {
                get: function() {
                    var e = this.sel;
                    return e && e.rangeCount ? e.getRangeAt(0) : this.createRange()
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.createRange = function() {
                return this.doc.createRange()
            }, n.prototype.remove = function() {
                var e = this.sel,
                    t = this.current();
                if (e && t)
                    for (var o = 0; o < e.rangeCount; o += 1) e.getRangeAt(o).deleteContents(), e.getRangeAt(o).collapse(!0)
            }, n.prototype.insertCursorAtPoint = function(e, t) {
                this.removeMarkers();
                try {
                    var o = this.createRange();
                    if (this.doc.caretPositionFromPoint) {
                        var i = this.doc.caretPositionFromPoint(e, t);
                        o.setStart(i.offsetNode, i.offset)
                    } else this.doc.caretRangeFromPoint && (i = this.doc.caretRangeFromPoint(e, t), o.setStart(i.startContainer, i.startOffset));
                    if (o) {
                        o.collapse(!0);
                        var n = this.sel;
                        n && (n.removeAllRanges(), n.addRange(o))
                    } else if (void 0 !== this.doc.body.createTextRange) {
                        var r = this.doc.body.createTextRange();
                        r.moveToPoint(e, t);
                        var a = r.duplicate();
                        a.moveToPoint(e, t), r.setEndPoint("EndToEnd", a), r.select()
                    }
                    return !0
                } catch (e) {}
                return !1
            }, n.prototype.removeMarkers = function() {
                a.$$("span[data-" + v.MARKER_CLASS + "]", this.area).forEach(m.Dom.safeRemove)
            }, n.prototype.marker = function(e, t) {
                void 0 === e && (e = !1);
                var o = null;
                t && (o = t.cloneRange()).collapse(e);
                var i = this.jodit.create.inside.span();
                return i.id = v.MARKER_CLASS + "_" + +new Date + "_" + ("" + Math.random()).slice(2), i.style.lineHeight = "0", i.style.display = "none", i.setAttribute("data-" + v.MARKER_CLASS, e ? "start" : "end"), i.appendChild(this.jodit.create.inside.text(v.INVISIBLE_SPACE)), o && m.Dom.isOrContains(this.area, e ? o.startContainer : o.endContainer) && o.insertNode(i), i
            }, n.prototype.restore = function(e) {
                var r = this;
                if (void 0 === e && (e = []), Array.isArray(e)) {
                    var a = this.sel;
                    a && a.removeAllRanges(), e.forEach(function(e) {
                        var t = r.createRange(),
                            o = r.area.querySelector("#" + e.endId),
                            i = r.area.querySelector("#" + e.startId);
                        if (i) {
                            if (e.collapsed || !o) {
                                var n = i.previousSibling;
                                n && n.nodeType === Node.TEXT_NODE ? t.setStart(n, n.nodeValue ? n.nodeValue.length : 0) : t.setStartBefore(i), m.Dom.safeRemove(i), t.collapse(!0)
                            } else t.setStartAfter(i), m.Dom.safeRemove(i), t.setEndBefore(o), m.Dom.safeRemove(o);
                            a && a.addRange(t)
                        }
                    })
                }
            }, n.prototype.save = function() {
                var e = this.sel;
                if (!e || !e.rangeCount) return [];
                var t, o, i, n = [],
                    r = e.rangeCount,
                    a = [];
                for (t = 0; t < r; t += 1) a[t] = e.getRangeAt(t), n[t] = a[t].collapsed ? {
                    startId: (o = this.marker(!0, a[t])).id,
                    collapsed: !0,
                    startMarker: o.outerHTML
                } : (o = this.marker(!0, a[t]), i = this.marker(!1, a[t]), {
                    startId: o.id,
                    endId: i.id,
                    collapsed: !1,
                    startMarker: o.outerHTML,
                    endMarker: i.outerHTML
                });
                for (e.removeAllRanges(), t = r - 1; 0 <= t; --t) {
                    var s = this.doc.getElementById(n[t].startId);
                    if (s)
                        if (n[t].collapsed) a[t].setStartAfter(s), a[t].collapse(!0);
                        else if (a[t].setStartBefore(s), n[t].endId) {
                        var l = this.doc.getElementById(n[t].endId);
                        l && a[t].setEndAfter(l)
                    }
                    try {
                        e.addRange(a[t].cloneRange())
                    } catch (e) {}
                }
                return n
            }, n.prototype.isCollapsed = function() {
                for (var e = this.sel, t = 0; e && t < e.rangeCount; t += 1)
                    if (!e.getRangeAt(t).collapsed) return !1;
                return !0
            }, n.prototype.isFocused = function() {
                return this.doc.hasFocus && this.doc.hasFocus() && this.area === this.doc.activeElement
            }, n.prototype.current = function(e) {
                if (void 0 === e && (e = !0), this.jodit.getRealMode() === v.MODE_WYSIWYG) {
                    var t = this.sel;
                    if (t && 0 < t.rangeCount) {
                        var o = t.getRangeAt(0),
                            i = o.startContainer,
                            n = !1,
                            r = function(e) {
                                return n ? e.lastChild : e.firstChild
                            };
                        if (i.nodeType !== Node.TEXT_NODE) {
                            if ((i = o.startContainer.childNodes[o.startOffset]) || (i = o.startContainer.childNodes[o.startOffset - 1], n = !0), i && t.isCollapsed && i.nodeType !== Node.TEXT_NODE)
                                if (!n && i.previousSibling && i.previousSibling.nodeType === Node.TEXT_NODE) i = i.previousSibling;
                                else if (e)
                                for (var a = r(i); a;) {
                                    if (a && a.nodeType === Node.TEXT_NODE) {
                                        i = a;
                                        break
                                    }
                                    a = r(a)
                                }
                            if (i && !t.isCollapsed && i.nodeType !== Node.TEXT_NODE) {
                                for (var s = i, l = i; l = l.lastChild, (s = s.firstChild) && l && s.nodeType !== Node.TEXT_NODE;);
                                s === l && s && s.nodeType === Node.TEXT_NODE && (i = s)
                            }
                        }
                        if (i && m.Dom.isOrContains(this.area, i)) return i
                    }
                }
                return !1
            }, n.prototype.insertNode = function(e, t, o) {
                if (void 0 === t && (t = !0), void 0 === o && (o = !0), !m.Dom.isNode(e, this.win)) throw Error("Parameter node most be instance of Node");
                this.focus();
                var i = this.sel;
                if (this.isCollapsed() || this.jodit.execCommand("Delete"), i && i.rangeCount) {
                    var n = i.getRangeAt(0);
                    m.Dom.isOrContains(this.area, n.commonAncestorContainer) ? (n.deleteContents(), n.insertNode(e)) : this.area.appendChild(e)
                } else this.area.appendChild(e);
                t && this.setCursorAfter(e), o && this.jodit.events && this.jodit.events.fire("synchro"), this.jodit.events && this.jodit.events.fire("afterInsertNode", e)
            }, n.prototype.insertHTML = function(e) {
                if ("" !== e) {
                    var t, o, i = this.jodit.create.inside.div(),
                        n = this.jodit.create.inside.fragment();
                    if (!this.isFocused() && this.jodit.isEditorMode() && this.focus(), e instanceof this.win.Node ? m.Dom.isNode(e, this.win) && i.appendChild(e) : i.innerHTML = "" + e, this.jodit.isEditorMode() || !1 !== this.jodit.events.fire("insertHTML", i.innerHTML)) {
                        for (t = i.lastChild; i.firstChild;) n.appendChild(t = i.firstChild);
                        for (this.insertNode(n, !1), t ? this.setCursorAfter(t) : this.setCursorIn(n), o = this.area.lastChild; o && o.nodeType === Node.TEXT_NODE && o.previousSibling && o.nodeValue && /^\s*$/.test(o.nodeValue);) o = o.previousSibling;
                        t && (o && t === o && t.nodeType === Node.ELEMENT_NODE && this.area.appendChild(this.jodit.create.inside.element("br")), this.setCursorAfter(t))
                    }
                }
            }, n.prototype.insertImage = function(e, t, o) {
                var i = "string" == typeof e ? this.jodit.create.inside.element("img") : e;
                if ("string" == typeof e && i.setAttribute("src", e), null !== o) {
                    var n = "" + o;
                    !n || "auto" === n || ~(n + "").indexOf("px") || ~(n + "").indexOf("%") || (n += "px"), g.css(i, "width", n)
                }
                t && "object" == typeof t && g.css(i, t);
                var r = function() {
                    (i.naturalHeight < i.offsetHeight || i.naturalWidth < i.offsetWidth) && (i.style.width = "", i.style.height = ""), i.removeEventListener("load", r)
                };
                i.addEventListener("load", r), i.complete && r();
                var a = this.insertNode(i);
                return this.jodit.events.fire("afterInsertImage", i), a
            }, n.prototype.setCursorAfter = function(e) {
                var t = this;
                if (!(e instanceof this.win.Node)) throw Error("Parameter node most be instance of Node");
                if (!m.Dom.up(e, function(e) {
                        return e === t.area || e && e.parentNode === t.area
                    }, this.area)) throw Error("Node element must be in editor");
                var o = this.createRange(),
                    i = !1;
                return e.nodeType !== Node.TEXT_NODE ? (i = this.doc.createTextNode(v.INVISIBLE_SPACE), o.setStartAfter(e), o.insertNode(i), o.selectNode(i)) : o.setEnd(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!1), this.selectRange(o), i
            }, n.prototype.cursorInTheEdge = function(o, i) {
                var e = this.sel,
                    t = e && e.rangeCount ? e.getRangeAt(0) : null;
                if (!t) return null;

                function n(e) {
                    for (; e;)
                        if (t = e, (e = o ? m.Dom.prev(t, function(e) {
                                return !!e
                            }, i) : m.Dom.next(t, function(e) {
                                return !!e
                            }, i)) && !m.Dom.isEmptyTextNode(e) && "BR" !== e.nodeName) return !1;
                    var t
                }
                var r = o ? t.startContainer : t.endContainer;
                if (r.nodeType === Node.TEXT_NODE) {
                    var a = r.nodeValue || "";
                    if (o && t.startOffset > a.length - a.replace(d.INVISIBLE_SPACE_REG_EXP_START, "").length) return !1;
                    if (!o && t.startOffset < a.replace(d.INVISIBLE_SPACE_REG_EXP_END, "").length) return !1;
                    if (!1 === n(r)) return !1
                }
                var s = this.current(!1);
                return s && m.Dom.isOrContains(i, s, !0) ? !(!o && t.startContainer.childNodes[t.startOffset] && s && !m.Dom.isEmptyTextNode(s)) && !1 !== n(s) : null
            }, n.prototype.setCursorBefore = function(e) {
                var t = this;
                if (!(e instanceof this.win.Node)) throw Error("Parameter node most be instance of Node");
                if (!m.Dom.up(e, function(e) {
                        return e === t.area || e && e.parentNode === t.area
                    }, this.area)) throw Error("Node element must be in editor");
                var o = this.createRange(),
                    i = !1;
                return e.nodeType !== Node.TEXT_NODE ? (i = this.doc.createTextNode(v.INVISIBLE_SPACE), o.setStartBefore(e), o.collapse(!0), o.insertNode(i), o.selectNode(i)) : o.setStart(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!0), this.selectRange(o), i
            }, n.prototype.setCursorIn = function(e, t) {
                var o = this;
                if (void 0 === t && (t = !1), !(e instanceof this.win.Node)) throw Error("Parameter node most be instance of Node");
                if (!m.Dom.up(e, function(e) {
                        return e === o.area || e && e.parentNode === o.area
                    }, this.area)) throw Error("Node element must be in editor");
                var i = this.createRange(),
                    n = e,
                    r = e;
                do {
                    if (n.nodeType === Node.TEXT_NODE) break;
                    r = n, n = t ? n.firstChild : n.lastChild
                } while (n);
                if (!n) {
                    var a = this.doc.createTextNode(v.INVISIBLE_SPACE);
                    /^(img|br|input)$/i.test(r.nodeName) ? n = r : (r.appendChild(a), r = a)
                }
                return i.selectNodeContents(n || r), i.collapse(t), this.selectRange(i), r
            }, n.prototype.selectRange = function(e) {
                var t = this.sel;
                t && (t.removeAllRanges(), t.addRange(e)), this.jodit.events.fire("changeSelection")
            }, n.prototype.select = function(e, t) {
                var o = this;
                if (void 0 === t && (t = !1), !m.Dom.isNode(e, this.win)) throw Error("Parameter node most be instance of Node");
                if (!m.Dom.up(e, function(e) {
                        return e === o.area || e && e.parentNode === o.area
                    }, this.area)) throw Error("Node element must be in editor");
                var i = this.createRange();
                i[t ? "selectNodeContents" : "selectNode"](e), this.selectRange(i)
            }, n.prototype.getHTML = function() {
                var e = this.sel;
                if (e && 0 < e.rangeCount) {
                    var t = e.getRangeAt(0).cloneContents(),
                        o = this.jodit.create.inside.div();
                    return o.appendChild(t), o.innerHTML
                }
                return ""
            }, n.prototype.applyCSS = function(s, l, t) {
                var c = this;

                function d(e) {
                    return null !== e && !m.Dom.isEmptyTextNode(e) && !c.isMarker(e)
                }

                function u(e) {
                    return !!e && (RegExp("^" + e.nodeName + "$", "i").test(l) || !(!t || ("FONT" === (i = e).nodeName || i.nodeType !== Node.ELEMENT_NODE || !(_.isPlainObject(t) && b.each(t, function(e, t) {
                        var o = g.css(i, e, void 0, !0);
                        return null !== o && "" !== o && !!~t.indexOf(("" + o).toLowerCase())
                    }) || "function" == typeof t && t(c.jodit, i))))) && d(e);
                    var i
                }

                function f(t) {
                    u(t) && (t.nodeName === h && s && Object.keys(s).forEach(function(e) {
                        0 === p || g.css(t, e) === r.normilizeCSSValue(e, s[e]) ? (g.css(t, e, ""), void 0 === p && (p = 0)) : (g.css(t, e, s[e]), void 0 === p && (p = 1))
                    }), m.Dom.isBlock(t, c.win) || t.getAttribute("style") && t.nodeName === h || (m.Dom.unwrap(t), void 0 === p && (p = 0)))
                }
                void 0 === l && (l = "span");
                var p, h = "SPAN";
                if (this.isCollapsed()) {
                    var e = !1;
                    if (this.current() && m.Dom.closest(this.current(), l, this.area)) {
                        e = !0;
                        var o = m.Dom.closest(this.current(), l, this.area);
                        o && this.setCursorAfter(o)
                    }
                    if (l.toUpperCase() == h || !e) {
                        var i = this.jodit.create.inside.element(l);
                        i.appendChild(this.jodit.create.inside.text(v.INVISIBLE_SPACE)), this.insertNode(i, !1, !1), l.toUpperCase() == h && s && g.css(i, s), this.setCursorIn(i)
                    }
                } else {
                    var n = this.save();
                    r.normalizeNode(this.area.firstChild), a.$$("*[style*=font-size]", this.area).forEach(function(e) {
                        e.style && e.style.fontSize && e.setAttribute("data-font-size", "" + e.style.fontSize)
                    }), this.doc.execCommand("fontsize", !1, "7"), a.$$("*[data-font-size]", this.area).forEach(function(e) {
                        e.style && e.getAttribute("data-font-size") && (e.style.fontSize = e.getAttribute("data-font-size"), e.removeAttribute("data-font-size"))
                    }), a.$$('font[size="7"]', this.area).forEach(function(e) {
                        if (m.Dom.next(e, d, e.parentNode) || m.Dom.prev(e, d, e.parentNode) || !u(e.parentNode) || e.parentNode === c.area || m.Dom.isBlock(e.parentNode, c.win) && !v.IS_BLOCK.test(l))
                            if (e.firstChild && !m.Dom.next(e.firstChild, d, e) && !m.Dom.prev(e.firstChild, d, e) && u(e.firstChild)) f(e.firstChild);
                            else if (m.Dom.closest(e, u, c.area)) {
                            var t = c.createRange(),
                                o = m.Dom.closest(e, u, c.area);
                            t.setStartBefore(o), t.setEndBefore(e);
                            var i = t.extractContents();
                            i.textContent && y.trim(i.textContent).length || !i.firstChild || m.Dom.unwrap(i.firstChild), o.parentNode && o.parentNode.insertBefore(i, o), t.setStartAfter(e), t.setEndAfter(o);
                            var n = t.extractContents();
                            n.textContent && y.trim(n.textContent).length || !n.firstChild || m.Dom.unwrap(n.firstChild), m.Dom.after(o, n), f(o)
                        } else {
                            var r, a = [];
                            e.firstChild && m.Dom.find(e.firstChild, function(e) {
                                return e && u(e) ? (void 0 === r && (r = !0), a.push(e)) : void 0 === r && (r = !1), !1
                            }, e, !0), a.forEach(m.Dom.unwrap), r || (void 0 === p && (p = 1), 1 === p && g.css(m.Dom.replace(e, l, !1, !1, c.doc), s && l.toUpperCase() == h ? s : {}))
                        } else f(e.parentNode);
                        e.parentNode && m.Dom.unwrap(e)
                    }), this.restore(n)
                }
            }, n);

        function n(e) {
            var c = this;
            this.jodit = e, this.isMarker = function(e) {
                return m.Dom.isNode(e, c.win) && e.nodeType === Node.ELEMENT_NODE && "SPAN" === e.nodeName && e.hasAttribute("data-" + v.MARKER_CLASS)
            }, this.focus = function() {
                if (c.isFocused()) return !1;
                c.jodit.iframe && "complete" == c.doc.readyState && c.jodit.iframe.focus(), c.win.focus(), c.area.focus();
                var e = c.sel,
                    t = c.createRange();
                return !e || e.rangeCount && c.current() || (t.setStart(c.area, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t)), !0
            }, this.eachSelection = function(o) {
                var e = c.sel;
                if (e && e.rangeCount) {
                    var t = e.getRangeAt(0),
                        i = [],
                        n = t.startOffset,
                        r = c.area.childNodes.length,
                        a = t.startContainer === c.area ? c.area.childNodes[n < r ? n : r - 1] : t.startContainer,
                        s = t.endContainer === c.area ? c.area.childNodes[t.endOffset - 1] : t.endContainer;
                    m.Dom.find(a, function(e) {
                        return !e || e === c.area || m.Dom.isEmptyTextNode(e) || c.isMarker(e) || i.push(e), e === s || e && e.contains(s)
                    }, c.area, !0, "nextSibling", !1);
                    var l = function(e) {
                        if (e.nodeName.match(/^(UL|OL)$/)) return [].slice.call(e.childNodes).forEach(l);
                        if ("LI" === e.nodeName)
                            if (e.firstChild) e = e.firstChild;
                            else {
                                var t = c.jodit.create.inside.text(d.INVISIBLE_SPACE);
                                e.appendChild(t), e = t
                            }
                        o(e)
                    };
                    0 === i.length && m.Dom.isEmptyTextNode(a) && i.push(a), i.forEach(l)
                }
            }
        }
        t.Select = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.prototype.set = function(t, o) {
            try {
                localStorage.setItem(t, "" + o)
            } catch (e) {
                this.data[t] = "" + o
            }
        }, n.prototype.get = function(e) {
            try {
                return localStorage.getItem(e)
            } catch (e) {}
            return this.data[e] || null
        }, n);

        function n() {
            this.data = {}
        }
        t.LocalStorageProvider = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(61),
            a = (n.__extends(s, i = r.View), s.prototype.destruct = function() {
                this.toolbar.destruct(), delete this.toolbar, i.prototype.destruct.call(this)
            }, s);

        function s() {
            var e = null !== i && i.apply(this, arguments) || this;
            return e.toolbar = l.JoditToolbarCollection.makeCollection(e), e
        }
        t.ViewWithToolbar = a;
        var l = o(20)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(62),
            a = o(110),
            s = (n.__extends(l, i = a.Panel), Object.defineProperty(l.prototype, "defaultTimeout", {
                get: function() {
                    return 100
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.i18n = function(e) {
                for (var t, o, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                return this.jodit && this.jodit !== this ? (t = this.jodit).i18n.apply(t, [e].concat(i)) : (o = c.Jodit.prototype).i18n.apply(o, [e].concat(i))
            }, l.prototype.toggleFullSize = function(e) {
                i.prototype.toggleFullSize.call(this, e), this.events && this.events.fire("toggleFullSize", e)
            }, l.prototype.getInstance = function(e, t) {
                if ("function" != typeof c.Jodit.modules[e]) throw Error("Need real module name");
                return void 0 === this.__modulesInstances[e] && (this.__modulesInstances[e] = new c.Jodit.modules[e](this.jodit || this, t)), this.__modulesInstances[e]
            }, l.prototype.destruct = function() {
                this.isDestructed || (this.events && (this.events.destruct(), delete this.events), delete this.options, i.prototype.destruct.call(this))
            }, l);

        function l(e, t) {
            var o = i.call(this, e) || this;
            return o.version = "3.2.46", o.__modulesInstances = {}, o.progress_bar = o.create.div("jodit_progress_bar", o.create.div()), o.options = {
                removeButtons: [],
                zIndex: 100002,
                fullsize: !1,
                showTooltip: !0,
                useNativeTooltip: !1,
                buttons: [],
                globalFullsize: !0
            }, o.components = [], o.getVersion = function() {
                return o.version
            }, o.id = e && e.id ? e.id : "" + (new Date).getTime(), o.jodit = e || o, o.events = e && e.events ? e.events : new r.EventsNative(o.ownerDocument), o.buffer = e && e.buffer ? e.buffer : {}, o.options = n.__assign({}, o.options, t), o
        }
        t.View = s;
        var c = o(12)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = o(109),
            i = (n.prototype.eachEvent = function(e, o) {
                var i = this;
                e.split(/[\s,]+/).forEach(function(e) {
                    var t = e.split(".");
                    o.call(i, t[0], t[1] || f.defaultNameSpace)
                })
            }, n.prototype.getStore = function(e) {
                if (void 0 === e[this.__key]) {
                    var t = new f.EventHandlersStore;
                    Object.defineProperty(e, this.__key, {
                        enumerable: !1,
                        configurable: !0,
                        value: t
                    })
                }
                return e[this.__key]
            }, n.prototype.clearStore = function(e) {
                void 0 !== e[this.__key] && delete e[this.__key]
            }, n.prototype.triggerNativeEvent = function(e, t) {
                var o = this.doc.createEvent("HTMLEvents");
                "string" == typeof t ? o.initEvent(t, !0, !0) : (o.initEvent(t.type, t.bubbles, t.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach(function(e) {
                    Object.defineProperty(o, e, {
                        value: t[e],
                        enumerable: !0
                    })
                }), Object.defineProperty(o, "originalEvent", {
                    value: t,
                    enumerable: !0
                })), e.dispatchEvent(o)
            }, n.prototype.removeStop = function(e) {
                if (e) {
                    var t = this.__stopped.indexOf(e); - 1 != t && this.__stopped.splice(t, 1)
                }
            }, n.prototype.isStopped = function(e) {
                return void 0 !== e && !!~this.__stopped.indexOf(e)
            }, n.prototype.on = function(e, t, o, i, n) {
                var r = this;
                void 0 === n && (n = !1);
                var a = "string" == typeof e ? this : e,
                    s = "string" == typeof t ? t : e,
                    l = o;
                void 0 === l && "function" == typeof t && (l = t);
                var c = this.getStore(a);
                if ("string" != typeof s || "" === s) throw Error("Need events names");
                if ("function" != typeof l) throw Error("Need event handler");
                if (Array.isArray(a)) return a.forEach(function(e) {
                    r.on(e, s, l, i)
                }), this;
                var d = "function" == typeof a.addEventListener,
                    u = this,
                    f = function(e) {
                        return l && l.apply(this, arguments)
                    };
                return d && (f = function(e) {
                    if (u.prepareEvent(e), l && !1 === l.call(this, e)) return e.preventDefault(), e.stopImmediatePropagation(), !1
                }, i && (f = function(e) {
                    u.prepareEvent(e);
                    for (var t = e.target; t && t !== this;) {
                        if (t.matches(i)) return Object.defineProperty(e, "target", {
                            value: t,
                            configurable: !0,
                            enumerable: !0
                        }), l && !1 === l.call(t, e) ? (e.preventDefault(), !1) : void 0;
                        t = t.parentNode
                    }
                })), this.eachEvent(s, function(e, t) {
                    if ("" === e) throw Error("Need event name");
                    !1 === c.indexOf(e, t, l) && (c.set(e, t, {
                        event: e,
                        originalCallback: l,
                        syntheticCallback: f
                    }, n), d && a.addEventListener(e, f, !1))
                }), this
            }, n.prototype.off = function(e, t, o) {
                var i = this,
                    n = "string" == typeof e ? this : e,
                    r = "string" == typeof t ? t : e,
                    a = this.getStore(n),
                    s = o;
                if ("string" != typeof r || !r) return a.namespaces().forEach(function(e) {
                    i.off(n, "." + e)
                }), this.clearStore(n), this;

                function l(e) {
                    c && n.removeEventListener(e.event, e.syntheticCallback, !1)
                }
                void 0 === s && "function" == typeof t && (s = t);
                var c = "function" == typeof n.removeEventListener,
                    d = function(e, t) {
                        if ("" !== e) {
                            var o = a.get(e, t);
                            if (o && o.length)
                                if ("function" != typeof s) o.forEach(l), o.length = 0;
                                else {
                                    var i = a.indexOf(e, t, s);
                                    !1 !== i && (l(o[i]), o.splice(i, 1))
                                }
                        } else a.events(t).forEach(function(e) {
                            "" !== e && d(e, t)
                        })
                    };
                return this.eachEvent(r, function(t, e) {
                    e === f.defaultNameSpace ? a.namespaces().forEach(function(e) {
                        d(t, e)
                    }) : d(t, e)
                }), this
            }, n.prototype.stopPropagation = function(e, t) {
                var i = this,
                    n = "string" == typeof e ? this : e,
                    o = "string" == typeof e ? e : t;
                if ("string" != typeof o) throw Error("Need event names");
                var r = this.getStore(n);
                this.eachEvent(o, function(t, e) {
                    var o = r.get(t, e);
                    o && i.__stopped.push(o), e === f.defaultNameSpace && r.namespaces(!0).forEach(function(e) {
                        return i.stopPropagation(n, t + "." + e)
                    })
                })
            }, n.prototype.fire = function(e, t) {
                for (var n = this, o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                var r, a = void 0,
                    s = "string" == typeof e ? this : e,
                    l = "string" == typeof e ? e : t,
                    c = "string" == typeof e ? [t].concat(o) : o,
                    d = "function" == typeof s.dispatchEvent;
                if (!d && "string" != typeof l) throw Error("Need events names");
                var u = this.getStore(s);
                return "string" != typeof l && d ? this.triggerNativeEvent(s, t) : this.eachEvent(l, function(o, t) {
                    if (d) n.triggerNativeEvent(s, o);
                    else {
                        var i = u.get(o, t);
                        if (i) try {
                            i.every(function(e) {
                                return !n.isStopped(i) && (n.current.push(o), r = e.syntheticCallback.apply(s, c), n.current.pop(), void 0 !== r && (a = r), !0)
                            })
                        } finally {
                            n.removeStop(i)
                        }
                        t !== f.defaultNameSpace || d || u.namespaces().filter(function(e) {
                            return e !== t
                        }).forEach(function(e) {
                            var t = n.fire.apply(n, [s, o + "." + e].concat(c));
                            void 0 !== t && (a = t)
                        })
                    }
                }), a
            }, n.prototype.destruct = function() {
                this.isDestructed && (this.isDestructed = !0, this.off(this), this.getStore(this).clear(), delete this[this.__key])
            }, n);

        function n(e) {
            var o = this;
            this.__key = "__JoditEventsNativeNamespaces", this.doc = document, this.__stopped = [], this.prepareEvent = function(t) {
                t.cancelBubble || (t.type.match(/^touch/) && t.changedTouches && t.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach(function(e) {
                    Object.defineProperty(t, e, {
                        value: t.changedTouches[0][e],
                        configurable: !0,
                        enumerable: !0
                    })
                }), t.originalEvent || (t.originalEvent = t), "paste" === t.type && void 0 === t.clipboardData && o.doc.defaultView.clipboardData && Object.defineProperty(t, "clipboardData", {
                    get: function() {
                        return o.doc.defaultView.clipboardData
                    },
                    configurable: !0,
                    enumerable: !0
                }))
            }, this.current = [], this.isDestructed = !1, e && (this.doc = e), this.__key += (new Date).getTime()
        }
        t.EventsNative = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(21),
            a = o(24),
            s = o(40),
            i = o(0),
            l = o(4),
            n = (c.prototype.setDocument = function(e) {
                this.doc = e
            }, c.prototype.element = function(e, t, o) {
                var i = this,
                    n = this.doc.createElement(e.toLowerCase());
                return t && (r.isPlainObject(t) ? a.each(t, function(e, t) {
                    r.isPlainObject(t) && "style" === e ? l.css(n, t) : n.setAttribute(e, "" + t)
                }) : o = t), o && s.asArray(o).forEach(function(e) {
                    return n.appendChild("string" == typeof e ? i.fromHTML(e) : e)
                }), n
            }, c.prototype.div = function(e, t, o) {
                var i = this.element("div", t, o);
                return e && (i.className = e), i
            }, c.prototype.span = function(e, t, o) {
                var i = this.element("span", t, o);
                return e && (i.className = e), i
            }, c.prototype.a = function(e, t, o) {
                var i = this.element("a", t, o);
                return e && (i.className = e), i
            }, c.prototype.text = function(e) {
                return this.doc.createTextNode(e)
            }, c.prototype.fragment = function() {
                return this.doc.createDocumentFragment()
            }, c.prototype.fromHTML = function(e) {
                var t = this.div();
                t.innerHTML = "" + e;
                var o = t.firstChild === t.lastChild && t.firstChild ? t.firstChild : t;
                return i.Dom.safeRemove(o), o
            }, c);

        function c(e, t) {
            this.doc = e, null !== t && (this.inside = t ? new c(t) : new c(e, null))
        }
        t.Create = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = o(16),
            p = o(6);
        t.Promt = function(e, t, o, i, n) {
            var r = new f.Dialog,
                a = r.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + p.ToolbarIcon.getIcon("cancel") + "<span>" + h.Jodit.prototype.i18n("Cancel") + "</span></a>"),
                s = r.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + p.ToolbarIcon.getIcon("check") + "<span>" + h.Jodit.prototype.i18n("Ok") + "</span></a>"),
                l = r.create.element("form", {
                    class: "jodit_promt"
                }),
                c = r.create.element("input", {
                    autofocus: !0,
                    class: "jodit_input"
                }),
                d = r.create.element("label");

            function u() {
                o && "function" == typeof o && !1 === o(c.value) || r.close()
            }
            return "function" == typeof t && (o = t, t = void 0), i && c.setAttribute("placeholder", i), d.appendChild(r.create.text(e)), l.appendChild(d), l.appendChild(c), a.addEventListener("click", r.close, !1), s.addEventListener("click", u), l.addEventListener("submit", function() {
                return u(), !1
            }), r.setFooter([s, a]), r.open(l, t || "&nbsp;", !0, !0), c.focus(), void 0 !== n && n.length && (c.value = n, c.select()), r
        };
        var h = o(12)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = o(16),
            d = o(6);
        t.Confirm = function(e, t, o) {
            var i = new c.Dialog,
                n = i.create.fromHTML('<form class="jodit_promt"></form>'),
                r = i.create.element("label");
            "function" == typeof t && (o = t, t = void 0), r.appendChild(i.create.fromHTML(e)), n.appendChild(r);
            var a = i.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + d.ToolbarIcon.getIcon("cancel") + "<span>" + u.Jodit.prototype.i18n("Cancel") + "</span></a>");

            function s() {
                o && o(!0), i.close()
            }
            a.addEventListener("click", function() {
                o && o(!1), i.close()
            });
            var l = i.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + d.ToolbarIcon.getIcon("check") + "<span>" + u.Jodit.prototype.i18n("Yes") + "</span></a>");
            return l.addEventListener("click", s), n.addEventListener("submit", function() {
                return s(), !1
            }), i.setFooter([l, a]), i.open(n, t || "&nbsp;", !0, !0), l.focus(), i
        };
        var u = o(12)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(67), "undefined" != typeof window && o(68);
        var i = o(12),
            n = o(2),
            r = o(116),
            a = o(36),
            s = o(143),
            l = o(184),
            c = o(3),
            d = o(6);

        function u(e) {
            return "__esModule" !== e
        }
        Object.keys(n).forEach(function(e) {
            i.Jodit[e] = n[e]
        }), Object.keys(l).filter(u).forEach(function(e) {
            d.ToolbarIcon.icons[e.replace("_", "-")] = l[e]
        }), Object.keys(a).filter(u).forEach(function(e) {
            i.Jodit.modules[e] = a[e]
        }), ["Confirm", "Alert", "Promt"].forEach(function(e) {
            i.Jodit[e] = a[e]
        }), Object.keys(s).filter(u).forEach(function(e) {
            i.Jodit.plugins[e] = s[e]
        }), Object.keys(r).filter(u).forEach(function(e) {
            i.Jodit.lang[e] = r[e]
        }), i.Jodit.defaultOptions = c.Config.defaultOptions, c.OptionsDefault.prototype = i.Jodit.defaultOptions, t.Jodit = i.Jodit, t.default = i.Jodit
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(69), o(70), (i = Element.prototype).matches || (i.matches = void 0 !== i.matchesSelector ? i.matchesSelector : function(e) {
            if (!this.ownerDocument) return [];
            var t = this.ownerDocument.querySelectorAll(e),
                o = this;
            return Array.prototype.some.call(t, function(e) {
                return e === o
            })
        }), Array.from || (Array.from = function(e) {
            return [].slice.call(e)
        })
    }, function(e, t) {
        "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
            "use strict";
            if ("Element" in e) {
                var t = "classList",
                    o = "prototype",
                    i = e.Element[o],
                    n = Object,
                    r = String[o].trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    a = Array[o].indexOf || function(e) {
                        for (var t = 0, o = this.length; t < o; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    },
                    s = function(e, t) {
                        this.name = e, this.code = DOMException[e], this.message = t
                    },
                    l = function(e, t) {
                        if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return a.call(e, t)
                    },
                    c = function(e) {
                        for (var t = r.call(e.getAttribute("class") || ""), o = t ? t.split(/\s+/) : [], i = 0, n = o.length; i < n; i++) this.push(o[i]);
                        this._updateClassName = function() {
                            e.setAttribute("class", "" + this)
                        }
                    },
                    d = c[o] = [],
                    u = function() {
                        return new c(this)
                    };
                if (s[o] = Error[o], d.item = function(e) {
                        return this[e] || null
                    }, d.contains = function(e) {
                        return -1 !== l(this, e += "")
                    }, d.add = function() {
                        for (var e, t = arguments, o = 0, i = t.length, n = !1; - 1 === l(this, e = t[o] + "") && (this.push(e), n = !0), ++o < i;);
                        n && this._updateClassName()
                    }, d.remove = function() {
                        var e, t, o = arguments,
                            i = 0,
                            n = o.length,
                            r = !1;
                        do {
                            for (t = l(this, e = o[i] + ""); - 1 !== t;) this.splice(t, 1), r = !0, t = l(this, e)
                        } while (++i < n);
                        r && this._updateClassName()
                    }, d.toggle = function(e, t) {
                        var o = this.contains(e += ""),
                            i = o ? !0 !== t && "remove" : !1 !== t && "add";
                        return i && this[i](e), !0 === t || !1 === t ? t : !o
                    }, d.toString = function() {
                        return this.join(" ")
                    }, n.defineProperty) {
                    var f = {
                        get: u,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        n.defineProperty(i, t, f)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (f.enumerable = !1, n.defineProperty(i, t, f))
                    }
                } else n[o].__defineGetter__ && i.__defineGetter__(t, u)
            }
        }(window.self), function() {
            "use strict";
            var e = document.createElement("_");
            if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                var t = function(e) {
                    var i = DOMTokenList.prototype[e];
                    DOMTokenList.prototype[e] = function(e) {
                        var t, o = arguments.length;
                        for (t = 0; t < o; t++) i.call(this, e = arguments[t])
                    }
                };
                t("add"), t("remove")
            }
            if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                var o = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(e, t) {
                    return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e)
                }
            }
            e = null
        }())
    }, function(e, t, o) {
        "use strict";
        e.exports = o(71).polyfill()
    }, function(e, t, o) {
        var B, H;
        B = o(72), H = o(73), e.exports = function() {
            "use strict";

            function l(e) {
                return "function" == typeof e
            }
            var o = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                i = 0,
                t = void 0,
                n = void 0,
                s = function(e, t) {
                    f[i] = e, f[i + 1] = t, 2 === (i += 2) && (n ? n(p) : _())
                },
                e = "undefined" != typeof window ? window : void 0,
                r = e || {},
                a = r.MutationObserver || r.WebKitMutationObserver,
                c = "undefined" == typeof self && void 0 !== B && "[object process]" === {}.toString.call(B),
                d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function u() {
                var e = setTimeout;
                return function() {
                    return e(p, 1)
                }
            }
            var f = Array(1e3);

            function p() {
                for (var e = 0; e < i; e += 2) {
                    (0, f[e])(f[e + 1]), f[e] = void 0, f[e + 1] = void 0
                }
                i = 0
            }
            var h, v, m, g, _ = void 0;

            function b(e, t) {
                var o = this,
                    i = new this.constructor(C);
                void 0 === i[w] && A(i);
                var n = o._state;
                if (n) {
                    var r = arguments[n - 1];
                    s(function() {
                        return I(n, i, r, o._result)
                    })
                } else z(o, i, e, t);
                return i
            }

            function y(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(C);
                return x(t, e), t
            }
            _ = c ? function() {
                return B.nextTick(p)
            } : a ? (v = 0, m = new a(p), g = document.createTextNode(""), m.observe(g, {
                characterData: !0
            }), function() {
                g.data = v = ++v % 2
            }) : d ? ((h = new MessageChannel).port1.onmessage = p, function() {
                return h.port2.postMessage(0)
            }) : void 0 === e ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 === (t = e.runOnLoop || e.runOnContext) ? u() : function() {
                        t(p)
                    }
                } catch (e) {
                    return u()
                }
            }() : u();
            var w = Math.random().toString(36).substring(2);

            function C() {}
            var E = void 0,
                j = 1,
                T = 2;

            function S(e, t, o) {
                var i, n, r, a;
                t.constructor === e.constructor && o === b && t.constructor.resolve === y ? (r = e, (a = t)._state === j ? D(r, a._result) : a._state === T ? L(r, a._result) : z(a, void 0, function(e) {
                    return x(r, e)
                }, function(e) {
                    return L(r, e)
                })) : void 0 === o ? D(e, t) : l(o) ? (i = t, n = o, s(function(t) {
                    var o = !1,
                        e = function(e, t, o, i) {
                            try {
                                e.call(t, o, i)
                            } catch (e) {
                                return e
                            }
                        }(n, i, function(e) {
                            o || (o = !0, i !== e ? x(t, e) : D(t, e))
                        }, function(e) {
                            o || (o = !0, L(t, e))
                        });
                    !o && e && (o = !0, L(t, e))
                }, e)) : D(e, t)
            }

            function x(t, e) {
                if (t === e) L(t, new TypeError("You cannot resolve a promise with itself"));
                else if (i = typeof e, null === e || "object" != i && "function" != i) D(t, e);
                else {
                    var o = void 0;
                    try {
                        o = e.then
                    } catch (e) {
                        return void L(t, e)
                    }
                    S(t, e, o)
                }
                var i
            }

            function k(e) {
                e._onerror && e._onerror(e._result), M(e)
            }

            function D(e, t) {
                e._state === E && (e._result = t, e._state = j, 0 !== e._subscribers.length && s(M, e))
            }

            function L(e, t) {
                e._state === E && (e._state = T, e._result = t, s(k, e))
            }

            function z(e, t, o, i) {
                var n = e._subscribers,
                    r = n.length;
                e._onerror = null, n[r] = t, n[r + j] = o, n[r + T] = i, 0 === r && e._state && s(M, e)
            }

            function M(e) {
                var t = e._subscribers,
                    o = e._state;
                if (0 !== t.length) {
                    for (var i = void 0, n = void 0, r = e._result, a = 0; a < t.length; a += 3) n = t[a + o], (i = t[a]) ? I(o, i, n, r) : n(r);
                    e._subscribers.length = 0
                }
            }

            function I(e, t, o, i) {
                var n = l(o),
                    r = void 0,
                    a = void 0,
                    s = !0;
                if (n) {
                    try {
                        r = o(i)
                    } catch (e) {
                        s = !1, a = e
                    }
                    if (t === r) return void L(t, new TypeError("A promises callback cannot return that same promise."))
                } else r = i;
                t._state !== E || (n && s ? x(t, r) : !1 === s ? L(t, a) : e === j ? D(t, r) : e === T && L(t, r))
            }
            var q = 0;

            function A(e) {
                e[w] = q++, e._state = void 0, e._result = void 0, e._subscribers = []
            }
            var N = (R.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === E && t < e.length; t++) this._eachEntry(e[t], t)
                }, R.prototype._eachEntry = function(t, e) {
                    var o = this._instanceConstructor,
                        i = o.resolve;
                    if (i === y) {
                        var n = void 0,
                            r = void 0,
                            a = !1;
                        try {
                            n = t.then
                        } catch (e) {
                            a = !0, r = e
                        }
                        if (n === b && t._state !== E) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof n) this._remaining--, this._result[e] = t;
                        else if (o === P) {
                            var s = new o(C);
                            a ? L(s, r) : S(s, t, n), this._willSettleAt(s, e)
                        } else this._willSettleAt(new o(function(e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(i(t), e)
                }, R.prototype._settledAt = function(e, t, o) {
                    var i = this.promise;
                    i._state === E && (this._remaining--, e === T ? L(i, o) : this._result[t] = o), 0 === this._remaining && D(i, this._result)
                }, R.prototype._willSettleAt = function(e, t) {
                    var o = this;
                    z(e, void 0, function(e) {
                        return o._settledAt(j, t, e)
                    }, function(e) {
                        return o._settledAt(T, t, e)
                    })
                }, R),
                P = (O.prototype.catch = function(e) {
                    return this.then(null, e)
                }, O.prototype.finally = function(t) {
                    var o = this.constructor;
                    return l(t) ? this.then(function(e) {
                        return o.resolve(t()).then(function() {
                            return e
                        })
                    }, function(e) {
                        return o.resolve(t()).then(function() {
                            throw e
                        })
                    }) : this.then(t, t)
                }, O);

            function O(e) {
                this[w] = q++, this._result = this._state = void 0, this._subscribers = [], C !== e && ("function" != typeof e && function() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }(), this instanceof O ? function(t, e) {
                    try {
                        e(function(e) {
                            x(t, e)
                        }, function(e) {
                            L(t, e)
                        })
                    } catch (e) {
                        L(t, e)
                    }
                }(this, e) : function() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }())
            }

            function R(e, t) {
                this._instanceConstructor = e, this.promise = new e(C), this.promise[w] || A(this.promise), o(t) ? (this.length = t.length, this._remaining = t.length, this._result = Array(this.length), 0 === this.length ? D(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && D(this.promise, this._result))) : L(this.promise, Error("Array Methods must be provided an Array"))
            }
            return P.prototype.then = b, P.all = function(e) {
                return new N(this, e).promise
            }, P.race = function(n) {
                var r = this;
                return o(n) ? new r(function(e, t) {
                    for (var o = n.length, i = 0; i < o; i++) r.resolve(n[i]).then(e, t)
                }) : new r(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, P.resolve = y, P.reject = function(e) {
                var t = new this(C);
                return L(t, e), t
            }, P._setScheduler = function(e) {
                n = e
            }, P._setAsap = function(e) {
                s = e
            }, P._asap = s, P.polyfill = function() {
                var e = void 0;
                if (void 0 !== H) e = H;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var o = null;
                    try {
                        o = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === o && !t.cast) return
                }
                e.Promise = P
            }, P.Promise = P
        }()
    }, function(e, t) {
        var o, i, n = e.exports = {};

        function r() {
            throw Error("setTimeout has not been defined")
        }

        function a() {
            throw Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (o === setTimeout) return setTimeout(t, 0);
            if ((o === r || !o) && setTimeout) return (o = setTimeout)(t, 0);
            try {
                return o(t, 0)
            } catch (e) {
                try {
                    return o.call(null, t, 0)
                } catch (e) {
                    return o.call(this, t, 0)
                }
            }
        }! function() {
            try {
                o = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                o = r
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        }();
        var l, c = [],
            d = !1,
            u = -1;

        function f() {
            d && l && (d = !1, l.length ? c = l.concat(c) : u = -1, c.length && p())
        }

        function p() {
            if (!d) {
                var e = s(f);
                d = !0;
                for (var t = c.length; t;) {
                    for (l = c, c = []; ++u < t;) l && l[u].run();
                    u = -1, t = c.length
                }
                l = null, d = !1,
                    function(t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === a || !i) && clearTimeout) return (i = clearTimeout)(t);
                        try {
                            i(t)
                        } catch (e) {
                            try {
                                return i.call(null, t)
                            } catch (e) {
                                return i.call(this, t)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function v() {}
        n.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            c.push(new h(e, t)), 1 !== c.length || d || s(p)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, n.listeners = function(e) {
            return []
        }, n.binding = function(e) {
            throw Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(e) {
            throw Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        }
    }, function(e, t) {
        var o;
        o = function() {
            return this
        }();
        try {
            o = o || Function("return this")()
        } catch (e) {
            "object" == typeof window && (o = window)
        }
        e.exports = o
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.inArray = function(e, t) {
            return !!~t.indexOf(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.splitArray = function(e) {
            return "string" == typeof e ? e.split(/[,\s]+/) : e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(18);
        t.throttle = function(t, o, i) {
            var n, r, a, s = null;
            return function() {
                n = arguments, r = !0;
                var e = i || this;
                o ? s || (a = function() {
                    s = r ? (t.apply(e, n), r = !1, l.setTimeout(a, o)) : null
                })() : t.apply(e, n)
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isHTML = function(e) {
            return /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isHTMLFromWord = function(e) {
            return -1 != e.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 != e.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 != e.search(/style="[^"]*mso-/) && -1 != e.search(/<font/)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(22);
        t.isInt = function(e) {
            return "string" == typeof e && i.isNumeric(e) && (e = parseFloat(e)), "number" == typeof e && Number.isFinite(e) && !(e % 1)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isLicense = function(e) {
            return "string" == typeof e && 32 === e.length && /^[a-z0-9]+$/.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasBrowserColorPicker = function() {
            var t = !0;
            try {
                var e = document.createElement("input");
                t = (e.type = "color") === e.type && "number" != typeof e.selectionStart
            } catch (e) {
                t = !1
            }
            return t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1);
        i.__exportStar(o(83), t), i.__exportStar(o(45), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hexToRgb = function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, o, i) {
                return t + t + o + o + i + i
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(0),
            l = o(11);
        t.applyStyles = function(e) {
            if (!~e.indexOf("<html ")) return e;
            e = (e = e.substring(e.indexOf("<html "), e.length)).substring(0, 7 + e.lastIndexOf("</html>"));
            var t = document.createElement("iframe");
            t.style.display = "none", document.body.appendChild(t);
            var o = "",
                i = [];
            try {
                var n = t.contentDocument || (t.contentWindow ? t.contentWindow.document : null);
                if (n) {
                    n.open(), n.write(e), n.close(), n.styleSheets.length && (i = n.styleSheets[n.styleSheets.length - 1].cssRules);
                    for (var r = function(t) {
                            if ("" === i[t].selectorText) return "continue";
                            l.$$(i[t].selectorText, n.body).forEach(function(e) {
                                e.style.cssText += i[t].style.cssText.replace(/mso-[a-z\-]+:[\s]*[^;]+;/g, "").replace(/border[a-z\-]*:[\s]*[^;]+;/g, "")
                            })
                        }, a = 0; a < i.length; a += 1) r(a);
                    o = n.firstChild ? n.body.innerHTML : ""
                }
            } catch (e) {} finally {
                s.Dom.safeRemove(t)
            }
            return o && (e = o), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0),
            r = o(9);
        t.cleanFromWord = function(e) {
            ~e.indexOf("<html ") && (e = (e = e.substring(e.indexOf("<html "), e.length)).substring(0, 7 + e.lastIndexOf("</html>")));
            var t = "";
            try {
                var o = document.createElement("div");
                o.innerHTML = e;
                var i = [];
                o.firstChild && n.Dom.all(o, function(t) {
                    if (t) switch (t.nodeType) {
                        case Node.ELEMENT_NODE:
                            switch (t.nodeName) {
                                case "STYLE":
                                case "LINK":
                                case "META":
                                    i.push(t);
                                    break;
                                case "W:SDT":
                                case "W:SDTPR":
                                case "FONT":
                                    n.Dom.unwrap(t);
                                    break;
                                default:
                                    Array.from(t.attributes).forEach(function(e) {
                                        ~["src", "href", "rel", "content"].indexOf(e.name.toLowerCase()) || t.removeAttribute(e.name)
                                    })
                            }
                            break;
                        case Node.TEXT_NODE:
                            break;
                        default:
                            i.push(t)
                    }
                }), i.forEach(n.Dom.safeRemove), t = o.innerHTML
            } catch (e) {}
            return t && (e = t), (e = e.split(/(\n)/).filter(r.trim).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sprintf = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];

            function g(e, t, o, i) {
                var n = e.length < t ? Array(1 + t - e.length >>> 0).join(o) : "";
                return i ? e + n : n + e
            }

            function _(e, t, o, i, n) {
                var r = i - e.length;
                return 0 < r && (e = o || !n ? g(e, i, " ", o) : e.slice(0, t.length) + g("", r, "0", !0) + e.slice(t.length)), e
            }

            function b(e, t, o, i, n, r, a) {
                var s = e >>> 0;
                return _((o = o && s && {
                    2: "0b",
                    8: "0",
                    16: "0x"
                }[t] || "") + g(s.toString(t), r || 0, "0", !1), o, i, n, a)
            }

            function y(e, t, o, i, n) {
                return null != i && (e = e.slice(0, i)), _(e, "", t, o, n)
            }
            var w = 0,
                C = e;
            return C[w++].replace(/%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g, function(e, t, o, i, n, r, a) {
                if ("%%" === e) return "%";
                for (var s = !1, l = "", c = !1, d = !1, u = 0; o && u < o.length; u++) switch (o[0 | u]) {
                    case " ":
                        l = " ";
                        break;
                    case "+":
                        l = "+";
                        break;
                    case "-":
                        s = !0;
                        break;
                    case "0":
                        c = !0;
                        break;
                    case "#":
                        d = !0
                }
                if ((i = i ? "*" === i ? +C[w++] : "*" == ("" + i)[0] ? +C[("" + i).slice(1, -1)] : +i : 0) < 0 && (i = -i, s = !0), !isFinite(i)) throw Error("sprintf: (minimum-)width must be finite");
                r = r ? "*" === r ? +C[w++] : "*" === r[0] ? +C[r.slice(1, -1)] : +r : ~"fFeE".indexOf(a) ? 6 : "d" === a ? 0 : void 0;
                var f = t ? C[t.slice(0, -1)] : C[w++];
                switch (a) {
                    case "s":
                        return y(f + "", s, i, r, c);
                    case "c":
                        return y(String.fromCharCode(+f), s, i, r, c);
                    case "b":
                        return b(f, 2, d, s, i, r, c);
                    case "o":
                        return b(f, 8, d, s, i, r, c);
                    case "x":
                        return b(f, 16, d, s, i, r, c);
                    case "X":
                        return b(f, 16, d, s, i, r, c).toUpperCase();
                    case "u":
                        return b(f, 10, d, s, i, r, c);
                    case "i":
                    case "d":
                        return _(f = (h = (p = parseInt("" + f, 10)) < 0 ? "-" : l) + g(Math.abs(p) + "", r, "0", !1), h, s, i, c);
                    case "e":
                    case "E":
                    case "f":
                    case "F":
                    case "g":
                    case "G":
                        var p, h = (p = +f) < 0 ? "-" : l,
                            v = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(a.toLowerCase())],
                            m = ["toString", "toUpperCase"]["eEfFgG".indexOf(a) % 2];
                        return _(f = h + Math.abs(p)[v](r), h, s, i, c)[m]();
                    default:
                        return e
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(33),
            n = o(2);
        t.clear = function(e, t) {
            return void 0 === t && (t = !1), e = i.trim(e).replace(n.INVISIBLE_SPACE_REG_EXP, "").replace(/[\s]*class=""/g, ""), t && (e = e.replace(/<p[^>]*>[\s\n\r\t]*(&nbsp;|<br>|<br\/>)?[\s\n\r\t]*<\/p>[\n\r]*/g, "")), e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.htmlspecialchars = function(e) {
            var t = document.createElement("div");
            return t.innerText = e, t.innerHTML
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stripTags = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.textContent || ""
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(9),
            n = o(2);
        t.normalizeKeyAliases = function(e) {
            var t = {};
            return e.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map(function(e) {
                return i.trim(e.toLowerCase())
            }).map(function(e) {
                return n.KEY_ALIASES[e] || e
            }).sort().filter(function(e) {
                return !t[e] && "" !== e && (t[e] = !0)
            }).join("+")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeLicense = function(e, t) {
            void 0 === t && (t = 8);
            for (var o = []; e.length;) o.push(e.substr(0, t)), e = e.substr(t);
            return o[1] = o[1].replace(/./g, "*"), o[2] = o[2].replace(/./g, "*"), o.join("-")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(2),
            n = o(0);
        t.normalizeNode = function(e) {
            if (e) {
                if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.parentNode)
                    for (; e.nextSibling && e.nextSibling.nodeType === Node.TEXT_NODE;) null !== e.nextSibling.nodeValue && (e.nodeValue += e.nextSibling.nodeValue), e.nodeValue = e.nodeValue.replace(i.INVISIBLE_SPACE_REG_EXP, ""), n.Dom.safeRemove(e.nextSibling);
                else t.normalizeNode(e.firstChild);
                t.normalizeNode(e.nextSibling)
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(9);
        t.normalizePath = function() {
            for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
            return o.filter(function(e) {
                return i.trim(e).length
            }).map(function(e, t) {
                return e = e.replace(/([^:])[\\\/]+/g, "$1/"), t && (e = e.replace(/^\//, "")), t !== o.length - 1 && (e = e.replace(/\/$/, "")), e
            }).join("/")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeRelativePath = function(e) {
            return e.split("/").reduce(function(e, t) {
                switch (t) {
                    case "":
                    case ".":
                        break;
                    case "..":
                        e.pop();
                        break;
                    default:
                        e.push(t)
                }
                return e
            }, []).join("/") + (e.endsWith("/") ? "/" : "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeSize = function(e) {
            return /^[0-9]+$/.test("" + e) ? e + "px" : "" + e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeURL = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return e.filter(function(e) {
                return e.length
            }).map(function(e) {
                return e.replace(/\/$/, "")
            }).join("/").replace(/([^:])[\\\/]+/g, "$1/")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(45),
            r = o(33);
        t.normalizeColor = function(e) {
            var t = ["#"],
                o = n.colorToHex(e);
            if (!o) return !1;
            if (3 !== (o = (o = r.trim(o.toUpperCase())).substr(1)).length) return 6 < o.length && (o = o.substr(0, 6)), "#" + o;
            for (var i = 0; i < 3; i += 1) t.push(o[i]), t.push(o[i]);
            return t.join("")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getContentWidth = function(e, t) {
            function o(e) {
                return parseInt(e, 10)
            }
            var i = t.getComputedStyle(e);
            return e.offsetWidth - o(i.getPropertyValue("padding-left") || "0") - o(i.getPropertyValue("padding-right") || "0")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.innerWidth = function(e, t) {
            var o = t.getComputedStyle(e);
            return e.clientWidth - (parseFloat(o.paddingLeft || "0") + parseFloat(o.paddingRight || "0"))
        }
    }, function(e, v, t) {
        "use strict";
        Object.defineProperty(v, "__esModule", {
            value: !0
        }), v.offset = function(e, t, o, i) {
            void 0 === i && (i = !1);
            var n, r, a = e.getBoundingClientRect(),
                s = o.body,
                l = o.documentElement || {
                    clientTop: 0,
                    clientLeft: 0,
                    scrollTop: 0,
                    scrollLeft: 0
                },
                c = o.defaultView || o.parentWindow,
                d = c.pageYOffset || l.scrollTop || s.scrollTop,
                u = c.pageXOffset || l.scrollLeft || s.scrollLeft,
                f = l.clientTop || s.clientTop || 0,
                p = l.clientLeft || s.clientLeft || 0;
            if (!i && t && t.options && t.options.iframe && t.iframe) {
                var h = v.offset(t.iframe, t, t.ownerDocument, !0);
                n = a.top + h.top, r = a.left + h.left
            } else n = a.top + d - f, r = a.left + u - p;
            return {
                top: Math.round(n),
                left: Math.round(r),
                width: a.width,
                height: a.height
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.browser = function(e) {
            var t = navigator.userAgent.toLowerCase(),
                o = /(firefox)[\s\/]([\w.]+)/.exec(t) || /(chrome)[\s\/]([\w.]+)/.exec(t) || /(webkit)[\s\/]([\w.]+)/.exec(t) || /(opera)(?:.*version)[\s\/]([\w.]+)/.exec(t) || /(msie)[\s]([\w.]+)/.exec(t) || /(trident)\/([\w.]+)/.exec(t) || !~t.indexOf("compatible") || [];
            return "version" === e ? o[2] : "webkit" === e ? "chrome" === o[1] || "webkit" === o[1] : "ff" === e ? "firefox" === o[1] : "msie" === e ? "trident" === o[1] || "msie" === o[1] : o[1] === e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(44),
            l = o(52);
        t.convertMediaURLToVideoEmbed = function(e, t, o) {
            if (void 0 === t && (t = 400), void 0 === o && (o = 345), !s.isURL(e)) return e;
            var i = document.createElement("a"),
                n = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
            i.href = e, t = t || 400, o = o || 345;
            var r = i.protocol || "";
            switch (i.hostname) {
                case "www.vimeo.com":
                case "vimeo.com":
                    return n.test(e) ? e.replace(n, '<iframe width="' + t + '" height="' + o + '" src="' + r + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e;
                case "youtube.com":
                case "www.youtube.com":
                case "youtu.be":
                case "www.youtu.be":
                    var a = i.search ? l.parseQuery(i.search) : {
                        v: i.pathname.substr(1)
                    };
                    return a.v ? '<iframe width="' + t + '" height="' + o + '" src="' + r + "//www.youtube.com/embed/" + a.v + '" frameborder="0" allowfullscreen></iframe>' : e
            }
            return e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "JoditDataBindKey";
        t.dataBind = function(e, t, o) {
            var i = e[n];
            if (i || Object.defineProperty(e, n, {
                    enumerable: (i = {}, !1),
                    configurable: !0,
                    value: i
                }), void 0 === o) return i[t];
            i[t] = o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.humanSizeToBytes = function(e) {
            if (/^[0-9.]+$/.test("" + e)) return parseFloat(e);
            var t = e.substr(-2, 2).toUpperCase(),
                o = ["KB", "MB", "GB", "TB"],
                i = parseFloat(e.substr(0, e.length - 2));
            return ~o.indexOf(t) ? i * Math.pow(1024, 1 + o.indexOf(t)) : parseInt(e, 10)
        }
    }, function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.inView = function(e, t, o) {
            var i = e.getBoundingClientRect(),
                n = e,
                r = i.top,
                a = i.height;
            do {
                if (n && n.parentNode) {
                    if (r > (i = (n = n.parentNode).getBoundingClientRect()).bottom) return !1;
                    if (r + a <= i.top) return !1
                }
            } while (n && n !== t && n.parentNode);
            return r <= (o.documentElement && o.documentElement.clientHeight || 0)
        }, i.scrollIntoView = function(e, t, o) {
            i.inView(e, t, o) || (t.clientHeight !== t.scrollHeight && (t.scrollTop = e.offsetTop), i.inView(e, t, o) || e.scrollIntoView())
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.val = function(e, t, o) {
            var i = e.querySelector(t);
            return i ? (o && (i.value = o), i.value) : ""
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.prototype.undo = function() {
            this.observer.snapshot.restore(this.oldValue)
        }, n.prototype.redo = function() {
            this.observer.snapshot.restore(this.newValue)
        }, n);

        function n(e, t, o) {
            this.observer = o, this.oldValue = e, this.newValue = t
        }
        t.Command = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(8),
            a = o(0),
            s = (n.__extends(l, i = r.Component), l.prototype.hide = function() {
                this.container && (this.container.style.display = "none")
            }, l.prototype.show = function() {
                this.container && (this.container.style.display = "block")
            }, l.prototype.append = function(e, t) {
                void 0 === t && (t = !1);
                var o = this.jodit.create.div("jodit_statusbar_item");
                t && o.classList.add("jodit_statusbar_item-right"), o.appendChild(e), this.container.appendChild(o), this.show(), this.jodit.events.fire("resize")
            }, l.prototype.destruct = function() {
                a.Dom.safeRemove(this.container), delete this.container, i.prototype.destruct.call(this)
            }, l);

        function l(e, t) {
            var o = i.call(this, e) || this;
            return o.target = t, o.container = e.create.div("jodit_statusbar"), t.appendChild(o.container), o.hide(), o
        }
        t.StatusBar = s
    }, function(e, o, t) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.defaultNameSpace = "JoditEventDefaultNamespace";
        var i = (n.prototype.get = function(e, t) {
            if (void 0 !== this.__store[t]) return this.__store[t][e]
        }, n.prototype.indexOf = function(e, t, o) {
            var i = this.get(e, t);
            if (i)
                for (var n = 0; n < i.length; n += 1)
                    if (i[n].originalCallback === o) return n;
            return !1
        }, n.prototype.namespaces = function(e) {
            void 0 === e && (e = !1);
            var t = Object.keys(this.__store);
            return e ? t.filter(function(e) {
                return e !== o.defaultNameSpace
            }) : t
        }, n.prototype.events = function(e) {
            return this.__store[e] ? Object.keys(this.__store[e]) : []
        }, n.prototype.set = function(e, t, o, i) {
            void 0 === i && (i = !1), void 0 === this.__store[t] && (this.__store[t] = {}), void 0 === this.__store[t][e] && (this.__store[t][e] = []), i ? this.__store[t][e].unshift(o) : this.__store[t][e].push(o)
        }, n.prototype.clear = function() {
            delete this.__store, this.__store = {}
        }, n);

        function n() {
            this.__store = {}
        }
        o.EventHandlersStore = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(8),
            a = o(0),
            s = o(63),
            l = o(15),
            c = (n.__extends(d, i = r.Component), d.prototype.destruct = function() {
                this.isDestructed && (a.Dom.safeRemove(this.container), delete this.container, i.prototype.destruct.call(this))
            }, d.prototype.lock = function(e) {
                return void 0 === e && (e = "any"), !this.isLocked() && (this.__whoLocked = e, !0)
            }, d.prototype.unlock = function() {
                return !!this.isLocked() && !(this.__whoLocked = "")
            }, d.prototype.toggleFullSize = function(e) {
                void 0 === e && (e = !this.__isFullSize), e !== this.__isFullSize && (this.__isFullSize = e)
            }, d);

        function d(e) {
            var t = i.call(this, e) || this;
            return t.__whoLocked = "", t.__isFullSize = !1, t.ownerDocument = document, t.ownerWindow = window, t.isLocked = function() {
                return "" !== t.__whoLocked
            }, t.isLockedNotBy = function(e) {
                return t.isLocked() && t.__whoLocked !== e
            }, t.isFullSize = function() {
                return t.__isFullSize
            }, e && e.ownerDocument && (t.ownerDocument = e.ownerDocument, t.ownerWindow = e.ownerWindow), t.create = new s.Create(t.ownerDocument, l.isJoditObject(e) ? e.editorDocument : void 0), t.container = t.create.div(), t
        }
        t.Panel = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(25),
            a = (n.__extends(s, i = r.ToolbarElement), s);

        function s(e) {
            var t = i.call(this, e) || this;
            return t.container.classList.add("jodit_toolbar_btn-break"), t
        }
        t.ToolbarBreak = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, s = o(1),
            i = o(4),
            l = o(26),
            n = o(27),
            c = o(20),
            a = (s.__extends(d, r = n.Popup), d.prototype.doClose = function() {
                this.toolbar && (this.toolbar.destruct(), delete this.toolbar)
            }, d.prototype.doOpen = function(r) {
                var a = this;
                this.toolbar = c.JoditToolbarCollection.makeCollection(this.jodit);
                var e = "string" == typeof r.list ? r.list.split(/[\s,]+/) : r.list;
                i.each(e, function(e, t) {
                    function o(e) {
                        return n && n[e]
                    }
                    var i, n = a.jodit.options.controls;
                    "string" == typeof t && o(t) ? i = new l.ToolbarButton(a.toolbar, s.__assign({
                        name: "" + t
                    }, o(t)), a.current) : "string" == typeof e && o(e) && "object" == typeof t ? i = new l.ToolbarButton(a.toolbar, s.__assign({
                        name: "" + e
                    }, o(e), t), a.current) : (i = new l.ToolbarButton(a.toolbar, {
                        name: "" + e,
                        exec: r.exec,
                        command: r.command,
                        isActive: r.isActiveChild,
                        isDisable: r.isDisableChild,
                        mode: r.mode,
                        args: [r.args && r.args[0] || e, r.args && r.args[1] || t]
                    }, a.current)).textBox.innerHTML = (r.template || a.defaultControl.template)(a.jodit, "" + e, "" + t), a.toolbar.appendChild(i)
                }), this.container.appendChild(this.toolbar.container), this.container.style.marginLeft = null, this.toolbar.checkActiveButtons()
            }, d.prototype.firstInFocus = function() {
                this.toolbar.firstButton.focus()
            }, d.prototype.destruct = function() {
                this.isDestructed || (this.doClose(), r.prototype.destruct.call(this))
            }, d);

        function d(e, t, o, i) {
            void 0 === i && (i = "jodit_toolbar_list");
            var n = r.call(this, e, t, o, i) || this;
            return n.target = t, n.current = o, n.className = i, n.defaultControl = {
                template: function(e, t, o) {
                    return n.jodit.i18n(o)
                }
            }, n
        }
        t.PopupList = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(0),
            a = o(5),
            s = o(25),
            l = (n.__extends(c, i = s.ToolbarElement), c.prototype.destruct = function() {
                return this.hide(), this.jodit && this.jodit.events && this.jodit.events.off("change updateToolbar scroll hidePopup closeAllPopups hideTooltip", this.hide), i.prototype.destruct.call(this)
            }, c);

        function c(e) {
            var t = i.call(this, e.parentToolbar || e.jodit, "div", "jodit_tooltip") || this;
            return t.button = e, t.timeout = 0, t.show = function() {
                var e = t.button.jodit.options.showTooltipDelay || 10 * t.button.jodit.defaultTimeout;
                t.button.jodit.events.fire("hideTooltip"), t.timeout = a.setTimeout(function() {
                    t.button.container.appendChild(t.container), t.container.style.marginLeft = -(t.container.offsetWidth - t.button.container.offsetWidth) / 2 + "px"
                }, e)
            }, t.hide = function() {
                window.clearTimeout(t.timeout), r.Dom.safeRemove(t.container)
            }, e.control.tooltip && (t.container.innerHTML = e.tooltipText, e.jodit.events.on(e.anchor, "mouseenter", t.show).on(e.anchor, "mouseleave", t.hide).on("change updateToolbar scroll hidePopup closeAllPopups hideTooltip", t.hide)), t
        }
        t.ToolbarTooltip = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(25),
            a = (n.__extends(s, i = r.ToolbarElement), s);

        function s(e) {
            var t = i.call(this, e) || this;
            return t.container.classList.add("jodit_toolbar_btn-separator"), t
        }
        t.ToolbarSeparator = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ucfirst = function(e) {
            return e.length ? e[0].toUpperCase() + e.substr(1) : ""
        }
    }, function(e, t, o) {
        "use strict";
        var i = o(117),
            n = o(118),
            r = o(119),
            a = o(120),
            s = o(121),
            l = o(122),
            c = o(123),
            d = o(124),
            u = o(125),
            f = o(126),
            p = o(127),
            h = o(128),
            v = o(129),
            m = o(130),
            g = o(131),
            _ = {
                ar: i.default,
                de: r.default,
                cs_cz: n.default,
                en: g.default,
                es: a.default,
                fr: s.default,
                he: l.default,
                hu: c.default,
                it: d.default,
                nl: u.default,
                pt_br: f.default,
                ru: p.default,
                tr: h.default,
                zh_cn: v.default,
                zh_tw: m.default
            },
            b = {};
        g.default.forEach(function(e, t) {
            b[t] = e
        }), Object.keys(_).forEach(function(o) {
            var e = _[o];
            Array.isArray(e) && (_[o] = {}, e.forEach(function(e, t) {
                _[o][b[t]] = e
            }))
        }), e.exports = _
    }, function(e, t) {
        e.exports.default = ["إبدأ في الكتابة...", "حول جوديت", "محرر جوديت", "الإصدار الغير تجاري مجاني", "رخصة جنو العمومية العامة ، الإصدار الثاني أو الأحدث", "دليل مستخدم جوديت", "يحتوي على مساعدة مفصلة للاستخدام", "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:", "شراء النسخة الكاملة", "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.", "مِرْساة", "فتح في نافذة جديدة", "فتح المحرر في الحجم الكامل", "مسح التنسيق", "ملء اللون أو تعيين لون النص", "إعادة", "تراجع", "عريض", "مائل", "إدراج قائمة غير مرتبة", "إدراج قائمة مرتبة", "محاذاة للوسط", "محاذاة مثبتة", "محاذاة لليسار", "محاذاة لليمين", "إدراج خط أفقي", "إدراج صورة", "ادخال الملف", "إدراج فيديو يوتيوب/فيميو ", "إدراج رابط", "حجم الخط", "نوع الخط", "إدراج كتلة تنسيق", "عادي", "عنوان 1", "عنوان 2", "عنوان 3", "عنوان 4", "إقتباس", "كود", "إدراج", "إدراج جدول", "تقليل المسافة البادئة", "زيادة المسافة البادئة", "تحديد أحرف خاصة", "إدراج حرف خاص", "تنسيق الرسم", "تغيير الوضع", "هوامش", "أعلى", "يمين", "أسفل", "يسار", "الأنماط", "الطبقات", "محاذاة", "اليمين", "الوسط", "اليسار", "--غير مضبوط--", "Src", "العنوان", "العنوان البديل", "الرابط", "افتح الرابط في نافذة جديدة", "الصورة", "ملف", "متقدم", "خصائص الصورة", "إلغاء", "حسنا", "متصفح الملفات", "حدث خطأ في تحميل القائمة ", "حدث خطأ في تحميل المجلدات", "هل أنت واثق؟", "أدخل اسم المجلد", "إنشاء مجلد", "أكتب إسم", "إسقاط صورة", "إسقاط الملف", "أو أنقر", "النص البديل", "رفع", "تصفح", "الخلفية", "نص", "أعلى", "الوسط", "الأسفل", "إدراج عمود قبل", "إدراج عمود بعد", "إدراج صف أعلى", "إدراج صف أسفل", "حذف الجدول", "حذف الصف", "حذف العمود", "خلية فارغة", "%d حرف", "%d كلام", "اضرب من خلال", "أكد", "حرف فوقي", "مخطوطة", "قطع الاختيار", "اختر الكل", "استراحة", "البحث عن", "استبدل ب", "يحل محل", "معجون", "اختر محتوى للصق", "مصدر", "بالخط العريض", "مائل", "شغل", "صلة", "إلغاء", "كرر", "طاولة", "صورة", "نظيف", "فقرة", "حجم الخط", "فيديو", "الخط", "حول المحرر", "طباعة", "رمز", "أكد", "شطب", "المسافة البادئة", "نتوء", "ملء الشاشة", "الحجم التقليدي", "نسخ التنسيق", "الخط", "قائمة", "قائمة مرقمة", "قطع", "اختر الكل", "قانون", "فتح الرابط", "تعديل الرابط", "سمة Nofollow", "إزالة الرابط", "تحديث", "لتحرير", "مراجعة", "URL", "تحرير", "محاذاة أفقية", "فلتر", "عن طريق التغيير", "بالاسم", "حسب الحجم", "إضافة مجلد", "إعادة", "احتفظ", "حفظ باسم", "تغيير الحجم", "حجم القطع", "عرض", "ارتفاع", "حافظ على النسب", "أن", "لا", "حذف", "تميز", "تميز %s", "محاذاة عمودية", "انشق، مزق", "اذهب", "أضف العمود", "اضف سطر", "رخصة %s", "حذف", "انقسام عمودي", "تقسيم أفقي", "الحدود", "يشبه الكود الخاص بك HTML. تبقي كما HTML؟", "الصق ك HTML", "احتفظ", "إدراج كنص", "إدراج النص فقط", "يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟", "تم تحميل الصورة بنجاح على الخادم!", "لوحة", "لا توجد ملفات في هذا الدليل.", "إعادة تسمية", "أدخل اسم جديد", "معاينة", "تحميل"]
    }, function(e, t) {
        e.exports.default = ["Napiš něco", "O Jodit", "Editor Jodit", "Verze pro nekomerční použití", "Licence GNU (GPL), verze 2 nebo vyšší", "Jodit Uživatelská příručka", "obsahuje detailní nápovědu", "Pro informace o licenci, prosím, přejděte na naši stránku:", "Koupit plnou verzi", "Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.", "Anchor", "Otevřít v nové záložce", "Otevřít v celoobrazovkovém režimu", "Vyčistit formátování", "Barva výplně a písma", "Vpřed", "Zpět", "Tučné", "Kurzíva", "Odrážky", "Číslovaný seznam", "Zarovnat na střed", "Zarovnat do bloku", "Zarovnat vlevo", "Zarovnat vpravo", "Vložit horizontální linku", "Vložit obrázek", "Vložit soubor", "Vložit video (YT/Vimeo)", "Vložit odkaz", "Velikost písma", "Typ písma", "Formátovat blok", "Normální text", "Nadpis 1", "Nadpis 2", "Nadpis 3", "Nadpis 4", "Citát", "Kód", "Vložit", "Vložit tabulku", "Zmenšit odsazení", "Zvětšit odsazení", "Vybrat speciální symbol", "Vložit speciální symbol", "Použít formát", "Změnit mód", "Okraje", "horní", "pravý", "spodní", "levý", "Styly", "Třídy", "Zarovnání", "Vpravo", "Na střed", "Vlevo", "--nenastaveno--", "src", "Titulek", "Alternativní text (alt)", "Link", "Otevřít link v nové záložce", "Obrázek", "soubor", "Rozšířené", "Vlastnosti obrázku", "Zpět", "Ok", "Prohlížeč souborů", "Chyba při načítání seznamu souborů", "Chyba při načítání složek", "Jste si jistý(á)?", "Název složky", "Vytvořit složku", "název", "Přetáhněte sem obrázek", "Přetáhněte sem soubor", "nebo klikněte", "Alternativní text", "Nahrát", "Server", "Pozadí", "Text", "Nahoru", "Na střed", "Dolu", "Vložit sloupec před", "Vložit sloupec za", "Vložit řádek nad", "Vložit řádek pod", "Vymazat tabulku", "Vymazat řádku", "Vymazat sloupec", "Vyčistit buňku", "Znaky: %d", "Slova: %d", "Přeškrtnuto", "Podtrženo", "Horní index", "Dolní index", "Vyjmout označené", "Označit vše", "Zalomení", "Najdi", "Nahradit za", "Nahradit", "Vložit", "Vyber obsah pro vložení", "HTML", "tučně", "kurzíva", "štětec", "odkaz", "zpět", "vpřed", "tabulka", "obrázek", "guma", "odstavec", "velikost písma", "video", "písmo", "о editoru", "tisk", "symbol", "podtrženo", "přeškrtnuto", "zvětšit odsazení", "zmenšit odsazení", "celoobrazovkový režim", "smrsknout", "Kopírovat formát", "Linka", "Odrážka", "Číslovaný seznam", "Vyjmout", "Označit vše", "Kód", "Otevřít odkaz", "Upravit odkaz", "Atribut no-follow", "Odstranit odkaz", "Aktualizovat", "Chcete-li upravit", "Zobrazit", "URL", "Editovat", "Horizontální zarovnání", "Filtr", "Dle poslední změny", "Dle názvu", "Dle velikosti", "Přidat složku", "Reset", "Uložit", "Uložit jako...", "Změnit rozměr", "Ořezat", "Šířka", "Výška", "Ponechat poměr", "Ano", "Ne", "Vyjmout", "Označit", "Označit %s", "Vertikální zarovnání", "Rozdělit", "Spojit", "Přidat sloupec", "Přidat řádek", "Licence: %s", "Vymazat", "Rozdělit vertikálně", "Rozdělit horizontálně", "Okraj", "Váš text se podobá HTML. Vložit ho jako HTML?", "Vložit jako HTML", "Ponechat originál", "Vložit jako TEXT", "Vložit pouze TEXT", "Můžete upravovat pouze své obrázky. Načíst obrázek?", "Obrázek byl úspěšně nahrán!", "paleta", "V tomto adresáři nejsou žádné soubory.", "přejmenovat", "Zadejte nový název", "náhled", "Stažení"]
    }, function(e, t) {
        e.exports.default = ["Bitte geben Sie einen Text ein", "Über Jodit", "Jodit Editor", "Freie Nicht-kommerzielle Version", "GNU General Public License, Version 2 oder höher", "Das Jodit Benutzerhandbuch", "beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.", "Für Lizenz-Informationen, besuchen Sie bitte unsere Webseite:", "Vollversion kaufen", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", "Anker", "In neuer Registerkarte öffnen", "Editor in voller Größe öffnen", "Formatierung löschen", "Füllfarbe oder Textfarbe ändern", "Wiederholen", "Rückgängig machen", "Fett", "Kursiv", "Ungeordnete Liste einfügen", "Sortierte Liste einfügen", "Mittig ausrichten", "Blocksatz", "Links ausrichten", "Rechts ausrichten", "Horizontale Linie einfügen", "Bild einfügen", "Datei einfügen", "Youtube/vimeo Video einfügen", "Link einfügen", "Schriftgröße", "Schriftfamilie", "Formatblock einfügen", "Normal", "Überschrift 1", "Überschrift 2", "Überschrift 3", "Überschrift 4", "Zitat", "Code", "Einfügen", "Tabelle einfügen", "Einzug verkleinern", "Einzug vergrößern", "Sonderzeichen auswählen", "Sonderzeichen einfügen", "Format kopieren", "Änderungsmodus", "Ränder", "Oben", "Rechts", "Unten", "Links", "CSS Stiel", "CSS Klassen", "Ausrichten", "Rechts", "Zentriert", "Links", "Keine", "Pfad", "Titel", "Alternativer Text", "Link", "Link in neuem Tab öffnen", "Bild", "Datei", "Fortgeschritten", "Bildeigenschaften", "Abbrechen", "OK", "Dateibrowser", "Fehler beim Laden der Liste", "Fehler beim Laden der Ordner", "Sind Sie sicher?", "Geben Sie den Verzeichnisnamen ein", "Verzeichnis erstellen", "Typname", "Bild hier hinziehen", "Datei löschen", "oder hier klicken", "Alternativtext", "Hochladen", "Auswählen", "Hintergrund", "Text", "Oben", "Mittig", "Unten", "Spalte einfügen vor", "Spalte einfügen nach", "Zeile einfügen oberhalb", "Zeile unterhalb einfügen", "Tabelle löschen", "Zeile löschen", "Spalte löschen", "Leere Zelle", "Zeichen: %d", "Wörter: %d", "Durchschlagen", "Unterstreichen", "hochgestellt", "Index", "Auswahl ausschneid", "Wählen Sie Alle aus", "Pause", "Suche nach", "Ersetzen durch", "Ersetzen", "Einfügen", "Wählen Sie Inhalt zum Einfügen", "HTML", "Fett gedruckt", "kursiv", "Bürste", "Verknüpfung", "rückgängig machen", "wiederholen", "Tabelle", "Bild", "Radiergummi", "Absatz", "Schriftgröße", "Video", "Schriftart", "Über", "drucken", "Symbol", "unterstreichen", "durchgestrichen", "Einzug", "Aussenseiter", "Vollgröße", "schrumpfen", "Format kopierenт", "die Linie", "Liste von", "Nummerierte Liste", "Schnitt", "Wählen Sie Alle aus", "Code einbetten", "Link öffnen", "Link bearbeiten", "Nofollow-Attribut", "Link entfernen", "Aktualisieren", "Bearbeiten", "Ansehen", "URL", "Bearbeiten", "Horizontale Ausrichtung", "filter", "Sortieren nach geändert", "Nach Name sortieren", "Nach Größe sortiert", "Ordner hinzufügen", "Wiederherstellen", "Speichern", "Speichern als", "Ändern Sie die Größe", "Größe anpassen", "Breite", "Höhe", "Halten Sie Proportionen", "Ja", "Nein", "Entfernen", "Markieren", "Markieren: %s", "Vertikale Ausrichtung", null, "Verschmelzen", "Spalte hinzufügen", "Zeile hinzufügen", null, "Löschen", "Split vertikal", "Split horizontally", "Rand", "Es scheint als dass Sie HTML-Text einfügen möchten", "Als HTML einfügen?", "Original speichern", "Als Text einfügen", "Nur Text einfügen", "Sie können nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?", "Das Bild wurde erfolgreich auf den Server hochgeladen!null", "Palette", "In diesem Verzeichnis befinden sich keine Dateien.", "umbenennen", "Geben Sie einen neuen Namen ein", "Vorschau", "Herunterladen"]
    }, function(e, t) {
        e.exports.default = ["Escriba algo...", "Acerca de Jodit", "Jodit Editor", "Versión gratis no comercial", "GNU General Public License, Versión 2 o posterior", "Guía de usuario Jodit", "contiene ayuda detallada para el uso.", "Para información sobre la licencia, por favor visite nuestro sitio:", "Compre la versión completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.", "Anclar", "Abrir en nueva pestaña", "Abrir editor en pantalla completa", "Limpiar formato", "Color de relleno o de letra", "Rehacer", "Deshacer", "Negrita", "Cursiva", "Insertar lista no ordenada", "Insertar lista ordenada", "Alinear Centrado", "Alinear Justificado", "Alinear Izquierda", "Alinear Derecha", "Insertar línea horizontal", "Insertar imagen", "Insertar archivo", "Insertar video de Youtube/vimeo", "Insertar vínculo", "Tamaño de letra", "Familia de letra", "Insertar bloque", "Normal", "Encabezado 1", "Encabezado 2", "Encabezado 3", "Encabezado 4", "Cita", "Código", "Insertar", "Insertar tabla", "Disminuir sangría", "Aumentar sangría", "Seleccionar caracter especial", "Insertar caracter especial", "Copiar formato", "Cambiar modo", "Márgenes", "arriba", "derecha", "abajo", "izquierda", "Estilos CSS", "Clases CSS", "Alinear", "Derecha", "Centrado", "Izquierda", "--No Establecido--", "Fuente", "Título", "Texto Alternativo", "Vínculo", "Abrir vínculo en nueva pestaña", "Imagen", "Archivo", "Avanzado", "Propiedades de imagen", "Cancelar", "Aceptar", "Buscar archivo", "Error al cargar la lista", "Error al cargar las carpetas", "¿Está seguro?", "Entre nombre de carpeta", "Crear carpeta", "Entre el nombre", "Soltar imagen", "Soltar archivo", "o click", "Texto alternativo", "Subir", "Buscar", "Fondo", "Texto", "Arriba", "Centro", "Abajo", "Insertar columna antes", "Interar columna después", "Insertar fila arriba", "Insertar fila debajo", "Borrar tabla", "Borrar fila", "Borrar columna", "Vaciar celda", "Caracteres: %d", "Palabras: %d", "Tachado", "Subrayado", "superíndice", "subíndice", "Cortar selección", "Seleccionar todo", "Pausa", "Buscar", "Reemplazar con", "Reemplazar", "Pegar", "Seleccionar contenido para pegar", "HTML", "negrita", "cursiva", "Brocha", "Vínculo", "deshacer", "rehacer", "Tabla", "Imagen", "Borrar", "Párrafo", "Tamaño de letra", "Video", "Letra", "Acerca de", "Imprimir", "Símbolo", "subrayar", "tachar", "sangría", "quitar sangría", "Tamaño completo", "encoger", "Copiar formato", "línea horizontal", "lista sin ordenar", "lista ordenada", "Cortar", "Seleccionar todo", "Incluir código", "Abrir vínculo", "Editar vínculo", "No seguir", "Desvincular", "Actualizar", "Para editar", "Ver", "URL", "Editar", "Alineación horizontal", "filtrar", "Ordenar por fecha modificación", "Ordenar por nombre", "Ordenar por tamaño", "Agregar carpeta", "Resetear", "Guardar", "Guardar como...", "Redimensionar", "Recortar", "Ancho", "Alto", "Mantener relación de aspecto", "Si", "No", "Quitar", "Seleccionar", "Seleccionar: %s", "Alineación vertical", null, "Mezclar", "Agregar columna", "Agregar fila", null, "Borrar", "Dividir vertical", "Dividir horizontal", "Borde", "El código es similar a HTML. ¿Mantener como HTML?", "Pegar como HTML?", "Mantener", "Insertar como texto", "Insertar solo texto", "Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?", "¡La imagen se ha subido correctamente al servidor!", "paleta", "No hay archivos en este directorio.", "renombrar", "Ingresa un nuevo nombre", "avance", "Descargar"]
    }, function(e, t) {
        e.exports.default = ["Ecrivez ici", "A propos de Jodit", "Editeur Jodit", "Version gratuite, non commerciale", "GNU General Public License, version 2 ou ultérieure", "Guide de l'utilisateur", "Aide détaillée à l'utilisation", "Consulter la licence sur notre site web:", "Acheter la version complète", "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.", "Ancre", "Ouvrir dans un nouvel onglet", "Ouvrir l'éditeur en pleine page", "Supprimer le formattage", "Modifier la couleur du fond ou du texte", "Refaire", "Défaire", "Gras", "Italique", "Liste non ordonnée", "Liste ordonnée", "Centrer", "Justifier", "Aligner à gauche ", "Aligner à droite", "Insérer une ligne horizontale", "Insérer une image", "Insérer un fichier", "Insérer une vidéo", "Insérer un lien", "Taille des caractères", "Famille des caractères", "Bloc formatté", "Normal", "Titre 1", "Titre 2", "Titre 3", "Titre 4", "Citation", "Code", "Insérer", "Insérer un tableau", "Diminuer le retrait", "Retrait plus", "Sélectionnez un caractère spécial", "Insérer un caractère spécial", "Cloner le format", "Mode wysiwyg <-> code html", "Marges", "haut", "droite", "Bas", "gauche", "Styles", "Classes", "Alignement", "Droite", "Centre", "Gauche", "--Non disponible--", "Source", "Titre", "Alternative", "Lien", "Ouvrir le lien dans un nouvel onglet", "Image", "fichier", "Avancé", "Propriétés de l'image", "Effacer", "OK", "Explorateur de fichiers", "Erreur de liste de chargement", "Erreur de dossier de chargement", "Etes-vous sûrs ?", "Entrer le non de dossier", "Créer un dossier", "type de fichier", "Coller une image", "Déposer un fichier", "ou cliquer", "Texte de remplacemement", "Charger", "Chercher", "Arrière-plan", "Texte", "Haut", "Milieu", "Bas", "Insérer une colonne avant", "Insérer une colonne après", "Insérer une ligne en dessus", "Insérer une ligne en dessous", "Supprimer le tableau", "Supprimer la ligne", "Supprimer la colonne", "Vider la cellule", "Symboles: %d", "Mots: %d", "Frapper à travers", "Souligner", "exposant", "indice", "Couper la sélection", "Tout sélectionner", "Pause", "Rechercher", "Remplacer par", "Remplacer", "Coller", "Choisissez le contenu à coller", "la source", "graisseux", "italique", "verser", "lien", "abolir", "prêt", "graphique", "Image", "la gommen", "clause", "taille de police", "Video", "police", "à propos de l'éditeur", "impression", "caractère", "souligné", "barré", "indentation", "indifférent", "taille réelle", "taille conventionnelle", "Format de copie", "la ligne", "Liste des", "Liste numérotée", "Couper", "Sélectionner tout", null, "Ouvrir le lien", "Modifier le lien", "Attribut Nofollow", "Supprimer le lien", "Mettre à jour", "Pour éditer", "Voir", "URL", null, "Alignement horizontal", "Filtre", "Trier par modifié", "Trier par nom", "Classer par taille", "Ajouter le dossier", "Restaurer", "Sauvegarder", "Enregistrer sous", "Changer la taille", "Taille de garniture", "Largeur", "Hauteur", "Garder les proportions", "Oui", "Non", "Supprimer", "Mettre en évidence", "Mettre en évidence: %s", "Alignement vertical", null, "aller", "Ajouter une colonne", "Ajouter une rangée", null, "Effacer", null, null, null, "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?", "Coller en HTML?", "Sauvegarder l'original", "Coller en tant que texte", "Coller le texte seulement", "Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?", "L'image a été téléchargée avec succès sur le serveur!null", "Palette", "Il n'y a aucun fichier dans ce répertoire.", "renommer", "Entrez un nouveau nom", "Aperçu", "Télécharger"]
    }, function(e, t) {
        e.exports.default = ["הקלד משהו...", "About Jodit", "Jodit Editor", "Free Non-commercial Version", "GNU General Public License, version 2 or later", "Jodit User's Guide", "contains detailed help for using.", "For information about the license, please go to our website:", "Buy full version", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "מקום עיגון", "פתח בכרטיסיה חדשה", "פתח את העורך בחלון חדש", "נקה עיצוב", "שנה צבע טקסט או רקע", "בצע שוב", "בטל", "מודגש", "נטוי", "הכנס רשימת תבליטים", "הכנס רשימה ממוספרת", "מרכז", "ישר ", "ישר לשמאל", "ישר לימין", "הכנס קו אופקי", "הכנס תמונה", "הכנס קובץ", "הכנס סרטון וידאו מYouTube/Vimeo", "הכנס קישור", "גודל גופן", "גופן", "מעוצב מראש", "רגיל", "כותרת 1", "כותרת 2", "כותרת 3", "כותרת 4", "ציטוט", "קוד", "הכנס", "הכנס טבלה", "הקטן כניסה", "הגדל כניסה", "בחר תו מיוחד", "הכנס תו מיוחד", "העתק עיצוב", "החלף מצב", "ריווח", "עליון", "ימין", "תחתון", "שמאל", "עיצוב CSS", "מחלקת CSS", "יישור", "ימין", "מרכז", "שמאל", "--לא נקבע--", "מקור", "כותרת", "כיתוב חלופי", "קישור", "פתח בכרטיסיה חדשה", "תמונה", "קובץ", "מתקדם", "מאפייני תמונה", "ביטול", "אישור", "סייר הקבצים", "שגיאה  בזמן טעינת רשימה", "שגיאה בזמן טעינת תקיות", "האם אתה בטוח?", "הכנס שם תקיה", "צור תקיה", "סוג הקובץ", "הסר תמונה", "הסר קובץ", "או לחץ", "כיתוב חלופי", "העלה", "סייר", "רקע", "טקסט", "עליון", "מרכז", "תחתון", "הכנס עמודה לפני", "הכנס עמודה אחרי", "הכנס שורה מעל", "הכנס שורה מתחת", "מחק טבלה", "מחק שורה", "מחק עמודה", "רוקן תא", "תווים: %d", "מילים: %d", "קו חוצה", "קו תחתון", "superscript", "subscript", "גזור בחירה", "בחר הכל", "שבירת שורה", "חפש", "החלף ב", "החלף", "הדבק", "בחר תוכן להדבקה", "HTML", "מודגש", "נטוי", "מברשת", "קישור", "בטל", "בצע שוב", "טבלה", "תמונה", "מחק", "פסקה", "גודל גופן", "וידאו", "גופן", "עלינו", "הדפס", "תו מיוחד", "קו תחתון", "קו חוצה", "הגדל כניסה", "הקטן כניסה", "גודל מלא", "כווץ", "העתק עיצוב", "קו אופקי", "רשימת תבליטים", "רשימה ממוספרת", "חתוך", "בחר הכל", "הוסף קוד", "פתח קישור", "ערוך קישור", "ללא מעקב", "בטל קישור", "עדכן", "כדי לערוך", "הצג", "כתובת", "ערוך", "יישור אופקי", "סנן", "מין לפי שינוי", "מיין לפי שם", "מיין לפי גודל", "הוסף תקייה", "אפס", "שמור", "שמור בשם...", "שנה גודל", "חתוך", "רוחב", "גובה", "שמור יחס", "כן", "לא", "הסר", "בחר", "נבחר: %s", "יישור אנכי", null, "מזג", "הוסף עמודה", "הוסף שורה", null, "מחק", "פיצול אנכי", "פיצול אופקי", "מסגרת", "הקוד דומה לHTML, האם להשאיר כHTML", "הדבק כHTML", "השאר", "הכנס כטקסט", "הכנס טקסט בלבד", "רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?", "התמונה עלתה בהצלחה!", "לוח", "אין קבצים בספריה זו.", "הונגרית", "הזן שם חדש", "תצוגה מקדימה", "הורד"]
    }, function(e, t) {
        e.exports.default = ["Írjon be valamit", "Joditról", "Jodit Editor", "Ingyenes változat", "GNU General Public License, Verzió 2 vagy későbbi", "Jodit útmutató", "további segítséget tartalmaz", "További licence információkért látogassa meg a weboldalunkat:", "Teljes verzió megvásárlása", "Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.", "Horgony", "Megnyitás új lapon", "Megnyitás teljes méretben", "Formázás törlése", "Háttér/szöveg szín", "Újra", "Visszavon", "Félkövér", "Dőlt", "Pontozott lista", "Számozott lista", "Középre zárt", "Sorkizárt", "Balra zárt", "Jobbra zárt", "Vízszintes vonal beszúrása", "Kép beszúrás", "Fájl beszúrás", "Youtube videó beszúrása", "Link beszúrás", "Betűméret", "Betűtípus", "Formázott blokk beszúrása", "Normál", "Fejléc 1", "Fejléc 2", "Fejléc 3", "Fejléc 4", "Idézet", "Kód", "Beszúr", "Táblázat beszúrása", "Behúzás csökkentése", "Behúzás növelése", "Speciális karakter kiválasztása", "Speciális karakter beszúrása", "Kép formázása", "Nézet váltása", "Szegélyek", "felső", "jobb", "alsó", "bal", "CSS stílusok", "CSS osztályok", "Igazítás", "Jobbra", "Középre", "Balra", "Nincs", "Forrás", "Cím", "Helyettesítő szöveg", "Link", "Link megnyitása új lapon", "Kép", "Fájl", "Haladó", "Kép tulajdonságai", "Mégsem", "OK", "Fájl tallózó", "Hiba a lista betöltése közben", "Hiba a mappák betöltése közben", "Biztosan ezt szeretné?", "Írjon be egy mappanevet", "Mappa létrehozása", "írjon be bevet", "Húzza ide a képet", "Húzza ide a fájlt", "vagy kattintson", "Helyettesítő szöveg", "Feltölt", "Tallóz", "Háttér", "Szöveg", "Fent", "Középen", "Lent", "Oszlop beszúrás elé", "Oszlop beszúrás utána", "Sor beszúrás fölé", "Sor beszúrás alá", "Táblázat törlése", "Sor törlése", "Oszlop törlése", "Cella tartalmának törlése", "Karakterek száma: %d", "Szavak száma: %d", "Áthúzott", "Aláhúzott", "Felső index", "Alsó index", "Kivágás", "Összes kijelölése", "Szünet", "Keresés", "Csere erre", "Csere", "Beillesztés", "Válasszon tartalmat a beillesztéshez", "HTML", "Félkövér", "Dőlt", "Ecset", "Link", "Visszavon", "Újra", "Táblázat", "Kép", "Törlés", "Paragráfus", "Betűméret", "Videó", "Betű", "Rólunk", "Nyomtat", "Szimbólum", "Aláhúzott", "Áthúzott", "Behúzás", "Aussenseiter", "Teljes méret", "Összenyom", "Formátum másolás", "Egyenes vonal", "Lista", "Számozott lista", "Kivág", "Összes kijelölése", "Beágyazott kód", "Link megnyitása", "Link szerkesztése", "Nincs követés", "Link leválasztása", "Frissít", "Szerkesztés", "felülvizsgálat", "URL", "Szerkeszt", "Vízszintes igazítás", "Szűrő", "Rendezés módosítás szerint", "Rendezés név szerint", "Rendezés méret szerint", "Mappa hozzáadás", "Visszaállít", "Mentés", "Mentés másként...", "Átméretezés", "Kivág", "Szélesség", "Magasság", "Képarány megtartása", "Igen", "Nem", "Eltávolít", "Kijelöl", "Kijelöl: %s", "Függőleges igazítás", "Felosztás", "Összevonás", "Oszlop hozzáadás", "Sor hozzáadás", null, "Törlés", "Függőleges felosztás", "Vízszintes felosztás", "Szegély", "A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?", "Beszúrás HTML-ként", "Megtartás", "Beszúrás szövegként", "Csak szöveg beillesztése", "Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?", "Kép sikeresen feltöltve!", "Palette", "Er zijn geen bestanden in deze map.", "átnevezés", "Adja meg az új nevet", "előnézet", "Letöltés"]
    }, function(e, t) {
        e.exports.default = ["Scrivi qualcosa...", "A proposito di Jodit", "Jodit Editor", "Versione gratuita non commerciale", "Licenza pubblica generale GNU, versione 2 o successiva", "Guida utente di Jodit", "contiene una guida dettagliata per l'uso.", "Per informazioni sulla licenza, si prega di visitare il nostro sito:", "Acquista la versione completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", "Ancora", "Apri in una nuova scheda", "Apri l'editor a schermo intero", "Formato chiaro", "Riempi colore o lettera", "Ripristina", "Annulla", "Grassetto", "Corsivo", "Inserisci lista non ordinata", "Inserisci l'elenco ordinato", "Allinea Centra", "Allineare Giustificato", "Allinea a Sinistra", "Allinea a Destra", "Inserisci la linea orizzontale", "Inserisci immagine", "Inserisci un file", "Inserisci video Youtube/Vimeo", "Inserisci il link", "Dimensione del carattere", "Tipo di font", "Inserisci blocco", "Normale", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Citazione", "Codice", "Inserisci", "Inserisci tabella", "Riduci il rientro", "Aumenta il rientro", "Seleziona una funzione speciale", "Inserisci un carattere speciale", "Copia formato", "Cambia modo", "Margini", "su", "destra", "giù", "sinistra", "Stili CSS", "Classi CSS", "Allinea", "Destra", "Centro", "Sinistra", "--Non Impostato--", "Fonte", "Titolo", "Testo Alternativo", "Link", "Apri il link in una nuova scheda", "Immagine", "Archivio", "Avanzato", "Proprietà dell'immagine", "Annulla", "Accetta", "Cerca il file", "Errore durante il caricamento dell'elenco", "Errore durante il caricamento delle cartelle", "Sei sicuro?", "Inserisci il nome della cartella", "Crea cartella", "Entre el nombre", "Rilascia l'immagine", "Rilascia file", "o click", "Testo alternativo", "Carica", "Sfoglia", "Sfondo", "Testo", "Su", "Centro", "Sotto", "Inserisci prima la colonna", "Inserisci colonna dopo", "Inserisci la riga sopra", "Inserisci la riga sotto", "Elimina tabella", "Elimina riga", "Elimina colonna", "Cella vuota", "Caratteri: %d", "Parole: %d", "Barrato", "Sottolineato", "indice", "deponente", "Taglia la selezione", "Seleziona tutto", "Pausa", "Cerca", "Sostituisci con", "Sostituisci", "Incolla", "Seleziona il contenuto da incollare", "HTML", "Grassetto", "Corsivo", "Pennello", "Link", "Annulla", "Ripristina", "Tabella", "Immagine", "Gomma", "Paragrafo", "Dimensione del carattere", "Video", "Font", "Approposito di", "Stampa", "Simbolo", "Sottolineato", "Barrato", "trattino", "annulla rientro", "A grandezza normale", "comprimere", "Copia il formato", "linea orizzontale", "lista non ordinata", "lista ordinata", "Taglia", "Seleziona tutto", "Includi codice", "Apri link", "Modifica link", "Non seguire", "Togli link", "Aggiornare", "Per modificare", "Recensione", " URL", "Modifica", "Allineamento orizzontale", "Filtro", "Ordina per data di modifica", "Ordina per nome", "Ordina per dimensione", "Aggiungi cartella", "Reset", "Salva", "Salva con nome...", "Ridimensiona", "Tagliare", "Larghezza", "Altezza", "Mantenere le proporzioni", "Si", "No", "Rimuovere", "Seleziona", "Seleziona: %s", "Allineamento verticala", null, "Fondi", "Aggiungi colonna", "Aggiungi riga", null, "Cancella", "Dividere verticalmente", "Diviso orizzontale", "Bordo", "Il codice è simile all'HTML. Mantieni come HTML?", "Incolla come HTML?", "Mantieni", "Inserisci come testo", "Inserisci solo il testo", "Puoi modificare solo le tue immagini. Scarica questa immagine sul server?", "L'immagine è stata caricata con successo sul server!", "tavolozza", "Non ci sono file in questa directory.", "ungherese", "Inserisci un nuovo nome", "anteprima", "Scaricare"]
    }, function(e, t) {
        e.exports.default = ["Begin met typen..", "Over Jodit", "Jodit Editor", "Gratis niet-commerciële versie", "GNU General Public License, versie 2 of hoger", "Jodit gebruikershandleiding", "bevat gedetailleerde informatie voor gebruik.", "Voor informatie over de licentie, ga naar onze website:", "Volledige versie kopen", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.", "Anker", "Open in nieuwe tab", "Editor in volledig scherm openen", "Opmaak verwijderen", "Vulkleur of tekstkleur aanpassen", "Opnieuw", "Ongedaan maken", "Vet", "Cursief", "Geordende list invoegen", "Ongeordende lijst invoegen", "Centreren", "Uitlijnen op volledige breedte", "Links uitlijnen", "Rechts uitlijnen", "Horizontale lijn invoegen", "Afbeelding invoegen", "Bestand invoegen", "Youtube/Vimeo video invoegen", "Link toevoegen", "Tekstgrootte", "Lettertype", "Format blok invoegen", "Normaal", "Koptekst 1", "Koptekst 2", "Koptekst 3", "Koptekst 4", "Citaat", "Code", "Invoegen", "Tabel invoegen", "Inspringing verkleinen", "Inspringing vergroten", "Symbool selecteren", "Symbool invoegen", "Opmaak kopieren", "Modus veranderen", "Marges", "Boven", "Rechts", "Onder", "Links", "CSS styles", "CSS classes", "Uitlijning", "Rechts", "Gecentreerd", "Links", "--Leeg--", "Src", "Titel", "Alternatieve tekst", "Link", "Link in nieuwe tab openen", "Afbeelding", "Bestand", "Geavanceerd", "Afbeeldingseigenschappen", "Annuleren", "OK", "Bestandsbrowser", "Fout bij het laden van de lijst", "Fout bij het laden van de mappenlijst", "Weet je het zeker?", "Geef de map een naam", "Map aanmaken", "Type naam", "Sleep hier een afbeelding naartoe", "Sleep hier een bestand naartoe", "of klik", "Alternatieve tekst", "Uploaden", "Bladeren", "Achtergrond", "Tekst", "Boven", "Midden", "Onder", "Kolom invoegen (voor)", "Kolom invoegen (na)", "Rij invoegen (boven)", "Rij invoegen (onder)", "Tabel verwijderen", "Rij verwijderen", "Kolom verwijderen", "Cel leegmaken", "Tekens: %d", "Woorden: %d", "Doorstrepen", "Onderstrepen", "Superscript", "Subscript", "Selectie knippen", "Selecteer alles", "Enter", "Zoek naar", "Vervangen door", "Vervangen", "Plakken", "Kies content om te plakken", "Broncode", "vet", "cursief", "kwast", "link", "ongedaan maken", "opnieuw", "tabel", "afbeelding", "gum", "paragraaf", "lettergrootte", "video", "lettertype", "over", "afdrukken", "symbool", "onderstreept", "doorgestreept", "inspringen", "minder inspringen", "volledige grootte", "kleiner maken", "opmaak kopiëren", "horizontale lijn", "lijst", "genummerde lijst", "knip", "alles selecteren", "Embed code", "link openen", "link aanpassen", "niet volgen", "link verwijderen", "Updaten", "Om te bewerken", "Recensie", " URL", "Bewerken", "Horizontaal uitlijnen", "Filteren", "Sorteren op wijzigingsdatum", "Sorteren op naam", "Sorteren op grootte", "Map toevoegen", "Herstellen", "Opslaan", "Opslaan als ...", "Grootte aanpassen", "Bijknippen", "Breedte", "Hoogte", "Verhouding behouden", "Ja", "Nee", "Verwijderen", "Selecteren", "Selecteer: %s", "Verticaal uitlijnen", null, "Samenvoegen", "Kolom toevoegen", "Rij toevoegen", null, "Verwijderen", "Verticaal splitsen", "Horizontaal splitsen", "Rand", "Deze code lijkt op HTML. Als HTML behouden?", "Invoegen als HTML", "Origineel behouden", "Als tekst invoegen", "Als onopgemaakte tekst invoegen", "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?", "De afbeelding is succesvol geüploadet!", "Palette", "Er zijn geen bestanden in deze map.", "Hongaars", "Voer een nieuwe naam in", "voorvertoning", "Download"]
    }, function(e, t) {
        e.exports.default = ["Escreva algo...", "Sobre o Jodit", "Editor Jodit", "Versão Gratuita não-comercial", "Licença Pública GNU General, Versão 2 ou posterior", "Guia de usuário Jodit", "contém ajuda detalhada para o uso.", "Para informação sobre a licença, por favor visite nosso site:", "Compre a versão completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.", "Link", "Abrir em nova aba", "Abrir editor em tela cheia", "Limpar formatação", "Cor de preenchimento ou cor do texto", "Refazer", "Desfazer", "Negrito", "Itálico", "Inserir lista não ordenada", "Inserir lista ordenada", "Centralizar", "Justificar", "Alinhar à Esquerda", "Alinhar à Direita", "Inserir linha horizontal", "Inserir imagem", "Inserir arquivo", "Inserir vídeo do Youtube/vimeo", "Inserir link", "Tamanho da letra", "Fonte", "Inserir bloco", "Normal", "Cabeçalho 1", "Cabeçalho 2", "Cabeçalho 3", "Cabeçalho 4", "Citação", "Código", "Inserir", "Inserir tabela", "Diminuir recuo", "Aumentar recuo", "Selecionar caractere especial", "Inserir caractere especial", "Copiar formato", "Mudar modo", "Margens", "cima", "direta", "baixo", "esquerda", "Estilos CSS", "Classes CSS", "Alinhamento", "Direita", "Centro", "Esquerda", "--Não Estabelecido--", "Fonte", "Título", "Texto Alternativo", "Link", "Abrir link em nova aba", "Imagem", "Arquivo", "Avançado", "Propriedades da imagem", "Cancelar", "Ok", "Procurar arquivo", "Erro ao carregar a lista", "Erro ao carregar as pastas", "Você tem certeza?", "Escreva o nome da pasta", "Criar pasta", "Escreva seu nome", "Soltar imagem", "Soltar arquivo", "ou clique", "Texto alternativo", "Upload", "Explorar", "Fundo", "Texto", "Cima", "Meio", "Baixo", "Inserir coluna antes", "Inserir coluna depois", "Inserir linha acima", "Inserir linha abaixo", "Excluir tabela", "Excluir linha", "Excluir coluna", "Limpar célula", "Caracteres: %d", "Palavras: %d", "Tachado", "Sublinhar", "sobrescrito", "subscrito", "Cortar seleção", "Selecionar tudo", "Pausa", "Procurar por", "Substituir com", "Substituir", "Colar", "Escolher conteúdo para colar", "HTML", "negrito", "itálico", "pincel", "link", "desfazer", "refazer", "tabela", "imagem", "apagar", "parágrafo", "tamanho da letra", "vídeo", "fonte", "Sobre de", "Imprimir", "Símbolo", "sublinhar", "tachado", "recuar", "diminuir recuo", "Tamanho completo", "diminuir", "Copiar formato", "linha horizontal", "lista não ordenada", "lista ordenada", "Cortar", "Selecionar tudo", "Incluir código", "Abrir link", "Editar link", "Não siga", "Remover link", "Atualizar", "Editar", "Visualizar", "URL", "Editar", "Alinhamento horizontal", "filtrar", "Ordenar por modificação", "Ordenar por nome", "Ordenar por tamanho", "Adicionar pasta", "Resetar", "Salvar", "Salvar como...", "Redimensionar", "Recortar", "Largura", "Altura", "Manter a proporção", "Sim", "Não", "Remover", "Selecionar", "Selecionar: %s", "Alinhamento vertical", null, "Mesclar", "Adicionar coluna", "Adicionar linha", null, "Excluir", "Dividir vertical", "Dividir horizontal", "Borda", "Seu código é simular ao HTML. Manter como HTML?", "Colar como HTML?", "Manter", "Inserir como Texto", "Inserir somente o Texto", "Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?", "A imagem foi enviada com sucesso para o servidor!", "Palette", "Não há arquivos nesse diretório.", "Húngara", "Digite um novo nome", "preview", "Baixar"]
    }, function(e, t) {
        e.exports.default = ["Напишите что-либо", "О Jodit", "Редактор Jodit", "Версия для не коммерческого использования", "Стандартная общественная лицензия GNU (GPL), версия 2 или выше", "Jodit Руководство пользователя", "содержит детальную информацию по использованию", "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:", "Купить полную версию", "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.", "Анкор", "Открывать ссылку в новой вкладке", "Открыть редактор в полном размере", "Очистить форматирование", "Цвет заливки или цвет текста", "Повтор", "Отмена", "Жирный", "Наклонный", "Вставка маркированного списка", "Вставить нумерованный список", "Выровнять по центру", "Выровнять по ширине", "Выровнять по левому краю", "Выровнять по правому краю", "Вставить горизонтальную линию", "Вставить изображение", "Вставить файл", "Вставьте видео", "Вставить ссылку", "Размер шрифта", "Шрифт", "Вставить блочный элемент", "Нормальный текст", "Заголовок 1", "Заголовок 2", "Заголовок 3", "Заголовок 4", "Цитата", "Код", "Вставить", "Вставить таблицу", "Уменьшить отступ", "Увеличить отступ", "Выберите специальный символ", "Вставить специальный символ", "Формат краски", "Источник", "Отступы", "сверху", "справа", "снизу", "слева", "Стили", "Классы", "Выравнивание", "По правому краю", "По центру", "По левому краю", "--не устанавливать--", "src", "Заголовок", "Альтернативный текст (alt)", "Ссылка", "Открывать ссылку в новом окне", "Изображение", "Файл", "Расширенные", "Свойства изображения", "Отмена", "Ок", "Браузер файлов", "Ошибка при загрузке списка изображений", "Ошибка при загрузке списка директорий", "Вы уверены?", "Введите название директории", "Создать директорию", "введите название", "Перетащите сюда изображение", "Перетащите сюда файл", "или нажмите", "Альтернативный текст", "Загрузка", "Сервер", "Фон", "Текст", " К верху", "По середине", "К низу", "Вставить столбец до", "Вставить столбец после", "Вставить ряд выше", "Вставить ряд ниже", "Удалить таблицу", "Удалять ряд", "Удалить столбец", "Отчистить ячейку", "Символов: %d", "Слов: %d", "Перечеркнуть", "Подчеркивание", "верхний индекс", "индекс", "Вырезать", "Выделить все", "Разделитель", "Найти", "Заменить на", "Заменить", "Вставить", "Выбрать контент для вставки", "HTML", "жирный", "курсив", "заливка", "ссылка", "отменить", "повторить", "таблица", "изображение", "очистить", "параграф", "размер шрифта", "видео", "шрифт", "о редакторе", "печать", "символ", "подчеркнутый", "перечеркнутый", "отступ", "выступ", "во весь экран", "обычный размер", "Копировать формат", "линия", "Список", "Нумерованный список", "Вырезать", "Выделить все", "Код", "Открыть ссылку", "Редактировать ссылку", "Атрибут nofollow", "Убрать ссылку", "Обновить", "Редактировать", "Просмотр", "URL", "Редактировать", "Горизонтальное выравнивание", "Фильтр", "По изменению", "По имени", "По размеру", "Добавить папку", "Восстановить", "Сохранить", "Сохранить как", "Изменить размер", "Обрезать размер", "Ширина", "Высота", "Сохранять пропорции", "Да", "Нет", "Удалить", "Выделить", "Выделить: %s", "Вертикальное выравнивание", "Разделить", "Объеденить в одну", "Добавить столбец", "Добавить строку", "Лицензия: %s", "Удалить", "Разделить по вертикали", "Разделить по горизонтали", "Рамка", "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?", "Вставить как HTML?", "Сохранить оригинал", "Вставить как текст", "Вставить только текст", "Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?", "Изображение успешно загружено на сервер!", "палитра", "В данном каталоге нет файлов", "Переименовать", "Введите новое имя", "Предпросмотр", "Скачать"]
    }, function(e, t) {
        e.exports.default = ["Bir şey yazın.", "Jodit Hakkında", "Jodit Editor", "Ücretsiz, ticari olmayan versiyon", "GNU General Public License, Versiyon 2 ve sonrası için", "Jodit Kullanım Kılavuzu", "kullanım için detaylı bilgiler içerir", "Lisans hakkında bilgi için lütfen web sitemize gidin:", "Tam versiyon satın al", "Copyright © XDSoft.net - Chupurnov Valeriy. Tüm Hakları Saklıdır", "Bağlantı", "Yeni sekmede aç", "Tam ekran editör", "Stili temizle", "Dolgu ve yazı rengi seç", "İleri Al", "Geri Al", "Kalın", "İtalik", "Sırasız Liste Ekle", "Sıralı Liste Ekle", "Ortala", "Kenarlara Yasla", "Sola Yasla", "Sağa Yasla", "Yatay Çizgi Ekle", "Resim Ekle", "Dosya Ekle", "Youtube/vimeo Videosu Ekle", "Bağlantı Ekle", "Font Boyutu", "Font Ailesi", "Blok Ekle", "Normal", "Başlık 1", "Başlık 2", "Başlık 3", "Başlık 4", "Alıntı", "Code", "Ekle", "Tablo Ekle", "Girintiyi Azalt", "Girintiyi Arttır", "Özel Karakter Seç", "Özel Karakter Ekle", "Resim Biçimi", "Mod Değiştir", "MEsafeler", "Üst", "Sağ", "Alt", "Sol", "CSS Stilleri", "CSS Sınıfları", "Hizalama", "Sağ", "Ortalı", "Sol", "Belirlenmedi", "Kaynak", "Başlık", "Alternatif Yazı", "Link", "Bağlantıyı yeni sekmede aç", "Resim", "Dosya", "Gelişmiş", "Resim özellikleri", "İptal", "Tamam", "Dosya Gezgini", "Liste yüklenirken hata oluştu", "Klasörler yüklenirken hata oluştur", "Emin misiniz?", "Dizin yolu giriniz", "Dizin oluştur", "Typname", "Resim bırak", "Dosya bırak", "veya tıkla", "Alternatif yazı", "Yükle", "Ekle", "Arka plan", "Yazı", "Üst", "Orta", "Aşağı", "Öncesine kolon ekle", "Sonrasına kolon ekle", "Üstüne satır ekle", "Altına satır ekle", "Tabloyu sil", "Satır sil", "Kolon sil", "Hücreyi boşalt", "Harfler: %d", "Kelimeler: %d", "Durchschlagen", "Alt çizgi", "Üst yazı", "Alt yazı", "Seçilimi kes", "Tümünü seç", "Durdur", "Ara", "Şununla değiştir", "Değiştir", "Yapıştır", "Yapıştırılacak içerik seç", "Kaynak", "Kalın", "italik", "Fırça", "Bağlantı", "Geri al", "İleri al", "Tablo", "Resim", "Silgi", "Paragraf", "Font boyutu", "Video", "Font", "Hakkında", "Yazdır", "Sembol", "Alt çizgi", "Üstü çizili", "Girinti", "Çıkıntı", "Tam ekran", "Küçült", "Kopyalama Biçimi", "Ayraç", "Sırasız liste", "Sıralı liste", "Kes", "Tümünü seç", "Kod ekle", "Bağlantıyı aç", "Bağlantıyı düzenle", "Nofollow özelliği", "Bağlantıyı kaldır", "Güncelle", "Düzenlemek için", "Yorumu", "URL", "Düzenle", "Yatay hizalama", "Filtre", "Değişime göre sırala", "İsme göre sırala", "Boyuta göre sırala", "Klasör ekle", "Sıfırla", "Kaydet", "Farklı kaydet", "Boyutlandır", "Kırp", "Genişlik", "Yükseklik", "En boy oranını koru", "Evet", "Hayır", "Sil", "Seç", "Seç: %s", "Dikey hizalama", null, "Birleştir", "Kolon ekle", "Satır ekle", null, "Sil", "Dikey ayır", "Yatay ayır", "Kenarlık", "Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?", "HTML olarak yapıştır", "Sakla", "Yazı olarak ekle", "Nur Text einfügen", "Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?", "Görsel başarıyla hostunuza yüklendi", "Palette", "Bu dizinde dosya yok.", "Macarca", "Yeni isim girin", "Ön izleme", "İndir"]
    }, function(e, t) {
        e.exports.default = ["输入一些内容", "关于Jodit", "Jodit Editor", "Free Non-commercial Version", "GNU General Public License, version 2 or later", "开发者指南", "使用帮助", "有关许可证的信息，请访问我们的网站：", "购买完整版本", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "在新窗口打开", "全屏编辑", "清除样式", "颜色", "重做", "撤销", "粗体", "斜体", "符号列表", "编号", "居中", "对齐文本", "左对齐", "右对齐", "分割线", "图片", "文件", "youtube/vimeo 视频", "链接", "字号", "字体", "格式块", "文本", "标题1", "标题2", "标题3", "标题4", "引用", "代码", "插入", "表格", "减少缩进", "增加缩进", "选择特殊符号", "特殊符号", "格式复制", "改变模式", "外边距（Margins）", "top", "right", "bottom", "left", "样式", "Classes", "对齐方式", "居右", "居中", "居左", "无", "Src", "Title", "Alternative", "Link", "在新窗口打开链接", "图片", "file", "高级", "图片属性", "取消", "确定", "文件管理", "加载list错误", "加载folders错误", "你确定吗？", "输入路径", "创建路径", "type name", "拖动图片到此", "拖动文件到此", "或点击", "Alternative text", "上传", "浏览", "背景色", "字体颜色", "顶部", "中间", "底部", "在之前插入列", "在之后插入列", "在之前插入行", "在之后插入行", "删除表格", "删除行", "删除列", "清除内容", "字符数: %d", "单词数: %d", "删除线", "下划线", "上标", "下标", "剪切", "全选", "Pause", "查找", "替换为", "替换", "粘贴", "选择内容并粘贴", "源码", "粗体", "斜体", "颜色", "链接", "撤销", "重做", "表格", "图片", "橡皮擦", "段落", "字号", "视频", "字体", "关于", "打印", "符号", "下划线", "上出现", "增加缩进", "减少缩进", "全屏", "收缩", "复制格式", "分割线", "无序列表", "顺序列表", "剪切", "全选", null, "打开链接", "编辑链接", "No follow", "Unlink", "更新", "要編輯", "回顧", "URL", null, "水平对齐", "筛选", "修改时间排序", "名称排序", "大小排序", "新建文件夹", "重置", "保存", "保存为", "调整大小", "Crop", "宽", "高", "保存长宽比", "是", "不", "移除", "选择", "选择: %s", "垂直对齐", null, "合并", "添加列", "添加行", null, "删除", null, null, null, "你粘贴的文本是一段html代码，是否保留源格式", "html粘贴", "保留源格式", "把html代码视为普通文本", "只保留文本", "你只能编辑你自己的图片。Download this image on the host?", "图片上传成功", "Palette", "此目錄中沒有文件。", "匈牙利", "输入新名称", "預習", "下載"]
    }, function(e, t) {
        e.exports.default = ["輸入一些內容", "關於Jodit", "Jodit Editor", "Free Non-commercial Version", "GNU General Public License, version 2 or later", "開發者指南", "使用幫助", "有關許可證的信息，請訪問我們的網站：", "購買完整版本", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "在新窗口打開", "全屏編輯", "清除樣式", "顏色", "重做", "撤銷", "粗體", "斜體", "符號列表", "編號", "居中", "對齊文本", "左對齊", "右對齊", "分割線", "圖片", "文件", "youtube/vimeo 影片", "鏈接", "字號", "字體", "格式塊", "文本", "標題1", "標題2", "標題3", "標題4", "引用", "代碼", "插入", "表格", "減少縮進", "增加縮進", "選擇特殊符號", "特殊符號", "格式複製", "改變模式", "外邊距（Margins）", "top", "right", "bottom", "left", "樣式", "Classes", "對齊方式", "居右", "居中", "居左", "無", "Src", "Title", "Alternative", "Link", "在新窗口打開鏈接", "圖片", "file", "高級", "圖片屬性", "取消", "確定", "文件管理", "加載list錯誤", "加載folders錯誤", "你確定嗎？", "輸入路徑", "創建路徑", "type name", "拖動圖片到此", "拖動文件到此", "或點擊", "Alternative text", "上傳", "瀏覽", "背景色", "字體顏色", "頂部", "中間", "底部", "在之前插入列", "在之後插入列", "在之前插入行", "在之後插入行", "刪除表格", "刪除行", "刪除列", "清除內容", "字符數: %d", "單詞數: %d", "刪除線", "下劃線", "上標", "下標", "剪切", "全選", "Pause", "查找", "替換為", "替換", "黏貼", "選擇內容並黏貼", "源碼", "粗體", "斜體", "顏色", "鏈接", "撤銷", "重做", "表格", "圖片", "橡皮擦", "段落", "字號", "影片", "字體", "關於", "打印", "符號", "下劃線", "上出現", "增加縮進", "減少縮進", "全屏", "收縮", "複製格式", "分割線", "無序列表", "順序列表", "剪切", "全選", null, "打開鏈接", "編輯鏈接", "No follow", "Unlink", "更新", "要編輯", "回顧", "URL", null, "水平對齊", "篩選", "修改時間排序", "名稱排序", "大小排序", "新建文件夾", "重置", "保存", "保存為", "調整大小", "Crop", "寬", "高", "保存長寬比", "是", "不", "移除", "選擇", "選擇: %s", "垂直對齊", null, "合併", "添加列", "添加行", null, "刪除", null, null, null, "你黏貼的文本是一段html代碼，是否保留源格式", "html黏貼", "保留源格式", "把html代碼視為普通文本", "只保留文本", "你只能編輯你自己的圖片。Download this image on the host?", "圖片上傳成功", "Palette", "此目錄中沒有文件。", "匈牙利", "输入新名称", "預習", "下載"]
    }, function(e, t) {
        e.exports.default = ["Type something", "About Jodit", "Jodit Editor", "Free Non-commercial Version", "GNU General Public License, version 2 or later", "Jodit User's Guide", "contains detailed help for using", "For information about the license, please go to our website:", "Buy full version", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "Open in new tab", "Open editor in fullsize", "Clear Formatting", "Fill color or set the text color", "Redo", "Undo", "Bold", "Italic", "Insert Unordered List", "Insert Ordered List", "Align Center", "Align Justify", "Align Left", "Align Right", "Insert Horizontal Line", "Insert Image", "Insert file", "Insert youtube/vimeo video", "Insert link", "Font size", "Font family", "Insert format block", "Normal", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Quote", "Code", "Insert", "Insert table", "Decrease Indent", "Increase Indent", "Select Special Character", "Insert Special Character", "Paint format", "Change mode", "Margins", "top", "right", "bottom", "left", "Styles", "Classes", "Align", "Right", "Center", "Left", "--Not Set--", "Src", "Title", "Alternative", "Link", "Open link in new tab", "Image", "file", "Advanced", "Image properties", "Cancel", "Ok", "File Browser", "Error on load list", "Error on load folders", "Are you sure?", "Enter Directory name", "Create directory", "type name", "Drop image", "Drop file", "or click", "Alternative text", "Upload", "Browse", "Background", "Text", "Top", "Middle", "Bottom", "Insert column before", "Insert column after", "Insert row above", "Insert row below", "Delete table", "Delete row", "Delete column", "Empty cell", "Chars: %d", "Words: %d", "Strike through", "Underline", "superscript", "subscript", "Cut selection", "Select all", "Break", "Search for", "Replace with", "Replace", "Paste", "Choose Content to Paste", "source", "bold", "italic", "brush", "link", "undo", "redo", "table", "image", "eraser", "paragraph", "fontsize", "video", "font", "about", "print", "symbol", "underline", "strikethrough", "indent", "outdent", "fullsize", "shrink", "copyformat", "hr", "ul", "ol", "cut", "selectall", "Embed code", "Open link", "Edit link", "No follow", "Unlink", "Update", "pencil", "Eye", " URL", "Edit", "Horizontal align", "Filter", "Sort by changed", "Sort by name", "Sort by size", "Add folder", "Reset", "Save", "Save as ...", "Resize", "Crop", "Width", "Height", "Keep Aspect Ratio", "Yes", "No", "Remove", "Select", "Select %s", "Vertical align", "Split", "Merge", "Add column", "Add row", "License: %s", "Delete", "Split vertical", "Split horizontal", "Border", "Your code is similar to HTML. Keep as HTML?", "Paste as HTML", "Keep", "Insert as Text", "Insert only Text", "You can only edit your own images. Download this image on the host?", "The image has been successfully uploaded to the host!", "palette", "There are no files", "rename", "Enter new name", "preview", "download"]
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.prototype.set = function(e, t, o) {
            var i, n;
            i = o ? ((n = new Date).setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + n.toUTCString()) : "", document.cookie = e + "=" + t + i + "; path=/"
        }, n.prototype.get = function(e) {
            var t, o, i = e + "=",
                n = document.cookie.split(";");
            for (t = 0; t < n.length; t += 1) {
                for (o = n[t];
                    " " == o[0];) o = o.substring(1, o.length);
                if (!o.indexOf(i)) return o.substring(i.length, o.length)
            }
            return null
        }, n.prototype.remove = function(e) {
            this.set(e, "", -1)
        }, n);

        function n() {}
        t.Cookie = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(16),
            l = o(6);
        t.Alert = function(e, t, o, i) {
            void 0 === i && (i = "jodit_alert"), "function" == typeof t && (o = t, t = void 0);
            var n = new s.Dialog,
                r = n.create.div(i),
                a = n.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + l.ToolbarIcon.getIcon("cancel") + "<span>" + c.Jodit.prototype.i18n("Ok") + "</span></a>");
            return d.asArray(e).forEach(function(e) {
                r.appendChild(u.Dom.isNode(e, n.window) ? e : n.create.fromHTML(e))
            }), a.addEventListener("click", function() {
                o && "function" == typeof o && !1 === o(n) || n.close()
            }), n.setFooter([a]), n.open(r, t || "&nbsp;", !0, !0), a.focus(), n
        };
        var c = o(12),
            d = o(29),
            u = o(0)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(6),
            r = o(41),
            c = o(4),
            l = o(39);
        i.Config.prototype.filebrowser = {
            filter: function(e, t) {
                return t = t.toLowerCase(), "string" == typeof e ? !!~e.toLowerCase().indexOf(t) : "string" == typeof e.name ? !!~e.name.toLowerCase().indexOf(t) : "string" != typeof e.file || !!~e.file.toLowerCase().indexOf(t)
            },
            sortBy: "changed-desc",
            sort: function(e, t, o) {
                function i(e, t) {
                    return e < t ? a ? -1 : 1 : t < e ? a ? 1 : -1 : 0
                }
                var n = o.toLowerCase().split("-"),
                    r = n[0],
                    a = "asc" === n[1];
                if ("string" == typeof e) return i(e.toLowerCase(), t.toLowerCase());
                if (void 0 === e[r] || "name" === r) return "string" == typeof e.name ? i(e.name.toLowerCase(), t.name.toLowerCase()) : "string" == typeof e.file ? i(e.file.toLowerCase(), t.file.toLowerCase()) : 0;
                switch (r) {
                    case "changed":
                        var s = new Date(e.changed).getTime(),
                            l = new Date(t.changed).getTime();
                        return a ? s - l : l - s;
                    case "size":
                        return s = c.humanSizeToBytes(e.size), l = c.humanSizeToBytes(t.size), a ? s - l : l - s
                }
                return 0
            },
            editImage: !0,
            preview: !0,
            showPreviewNavigation: !0,
            showSelectButtonInPreview: !0,
            contextMenu: !0,
            howLongShowMsg: 3e3,
            createNewFolder: !0,
            deleteFolder: !0,
            moveFolder: !0,
            moveFile: !0,
            showFoldersPanel: !0,
            width: 859,
            height: 400,
            buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"],
            removeButtons: [],
            fullsize: !1,
            showTooltip: !0,
            view: null,
            isSuccess: function(e) {
                return e.success
            },
            getMessage: function(e) {
                return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            showFileName: !0,
            showFileSize: !0,
            showFileChangeTime: !0,
            saveStateInStorage: !0,
            getThumbTemplate: function(e, t, o) {
                var i = this.options,
                    n = i.showFileName,
                    r = i.showFileSize && e.size,
                    a = i.showFileChangeTime && e.time,
                    s = "";
                return void 0 !== e.file && (s = e.file), '<a data-is-file="' + (e.isImage ? 0 : 1) + '" draggable="true" class="' + l.ITEM_CLASS + '" href="' + e.fileURL + '" data-source="' + o + '" data-path="' + e.path + '" data-name="' + s + '" title="' + s + '" data-url="' + e.fileURL + '"><img data-is-file="' + (e.isImage ? 0 : 1) + '" data-src="' + e.fileURL + '" src="' + e.imageURL + '" alt="' + s + '" loading="lazy" />' + (n || r || a ? '<div class="' + l.ITEM_CLASS + '-info">' + (n ? '<span class="' + l.ITEM_CLASS + '-info-filename">' + s + "</span>" : "") + (r ? '<span class="' + l.ITEM_CLASS + '-info-filesize">' + e.size + "</span>" : "") + (a ? '<span class="' + l.ITEM_CLASS + '-info-filechanged">' + a + "</span>" : "") + "</div>" : "") + "</a>"
            },
            ajax: {
                url: "",
                async: !0,
                data: {},
                cache: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                method: "POST",
                processData: !0,
                dataType: "json",
                headers: {},
                prepareData: function(e) {
                    return e
                },
                process: function(e) {
                    return e
                }
            },
            create: {
                data: {
                    action: "folderCreate"
                }
            },
            getLocalFileByUrl: {
                data: {
                    action: "getLocalFileByUrl"
                }
            },
            resize: {
                data: {
                    action: "imageResize"
                }
            },
            crop: {
                data: {
                    action: "imageCrop"
                }
            },
            fileMove: {
                data: {
                    action: "fileMove"
                }
            },
            folderMove: {
                data: {
                    action: "folderMove"
                }
            },
            fileRename: {
                data: {
                    action: "fileRename"
                }
            },
            folderRename: {
                data: {
                    action: "folderRename"
                }
            },
            fileRemove: {
                data: {
                    action: "fileRemove"
                }
            },
            folderRemove: {
                data: {
                    action: "folderRemove"
                }
            },
            items: {
                data: {
                    action: "files"
                }
            },
            folder: {
                data: {
                    action: "folders"
                }
            },
            permissions: {
                data: {
                    action: "permissions"
                }
            },
            uploader: null
        }, i.Config.prototype.controls.filebrowser = {
            upload: {
                icon: "plus",
                isInput: !0,
                exec: function() {},
                isDisable: function(e) {
                    return !e.dataProvider.canI("FileUpload")
                },
                getContent: function(e, t) {
                    var o = e.create.fromHTML('<span class="jodit_upload_button">' + n.ToolbarIcon.getIcon("plus") + '<input type="file" accept="' + (e.state.onlyImages ? "image/*" : "*") + '" tabindex="-1" dir="auto" multiple=""/></span>'),
                        i = o.querySelector("input");
                    return e.events.on("updateToolbar", function() {
                        t && t.isDisable && (t.isDisable(e, t) ? i.setAttribute("disabled", "disabled") : i.removeAttribute("disabled"))
                    }).fire("bindUploader.filebrowser", o), o
                }
            },
            remove: {
                icon: "bin",
                isDisable: function(e) {
                    return !e.state.activeElements.length || !e.dataProvider.canI("FileRemove")
                },
                exec: function(e) {
                    e.events.fire("fileRemove.filebrowser")
                }
            },
            update: {
                exec: function(e) {
                    e.events.fire("update.filebrowser")
                }
            },
            select: {
                icon: "check",
                isDisable: function(e) {
                    return !e.state.activeElements.length
                },
                exec: function(e) {
                    e.events.fire("select.filebrowser")
                }
            },
            edit: {
                icon: "pencil",
                isDisable: function(e) {
                    var t = e.state.activeElements;
                    return 1 !== t.length || !t[0].isImage || !(e.dataProvider.canI("ImageCrop") || e.dataProvider.canI("ImageResize"))
                },
                exec: function(e) {
                    e.events.fire("edit.filebrowser")
                }
            },
            tiles: {
                icon: "th",
                isActive: function(e) {
                    return "tiles" === e.state.view
                },
                exec: function(e) {
                    e.events.fire("view.filebrowser", "tiles")
                }
            },
            list: {
                icon: "th-list",
                isActive: function(e) {
                    return "list" === e.state.view
                },
                exec: function(e) {
                    e.events.fire("view.filebrowser", "list")
                }
            },
            filter: {
                isInput: !0,
                getContent: function(e) {
                    var t = e.create.element("input", {
                        class: "jodit_input",
                        placeholder: e.i18n("Filter")
                    });
                    return e.events.on(t, "keydown mousedown", r.debounce(function() {
                        e.events.fire("filter.filebrowser", t.value)
                    }, e.defaultTimeout)), t
                }
            },
            sort: {
                isInput: !0,
                getContent: function(e) {
                    var t = e.create.fromHTML('<select class="jodit_input"><option value="changed-asc">' + e.i18n("Sort by changed") + ' (⬆)</option><option value="changed-desc">' + e.i18n("Sort by changed") + ' (⬇)</option><option value="name-asc">' + e.i18n("Sort by name") + ' (⬆)</option><option value="name-desc">' + e.i18n("Sort by name") + ' (⬇)</option><option value="size-asc">' + e.i18n("Sort by size") + ' (⬆)</option><option value="size-desc">' + e.i18n("Sort by size") + " (⬇)</option></select>");
                    return e.events.on("sort.filebrowser", function(e) {
                        t.value !== e && (t.value = e)
                    }).on(t, "change", function() {
                        e.events.fire("sort.filebrowser", t.value)
                    }), t
                }
            }
        }
    }, function(e, o, t) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = t(1),
            r = t(4),
            a = t(37);
        o.DEFAULT_SOURCE_NAME = "default";
        var i = (s.prototype.canI = function(e) {
            var t = "allow" + e;
            return null === this.__currentPermissions || void 0 === this.__currentPermissions[t] || this.__currentPermissions[t]
        }, s.prototype.get = function(e, t, o) {
            var i = r.extend(!0, {}, this.options.ajax, void 0 !== this.options[e] ? this.options[e] : this.options.ajax);
            i.prepareData && (i.data = i.prepareData.call(this, i.data));
            var n = new a.Ajax(this.parent, i).send();
            return t && n.then(t), o && n.catch(o), n
        }, s.prototype.permissions = function(t, o) {
            return void 0 === t && (t = this.currentPath), void 0 === o && (o = this.currentSource), n.__awaiter(this, void 0, void 0, function() {
                var i = this;
                return n.__generator(this, function(e) {
                    return this.options.permissions ? (this.options.permissions.data.path = t, this.options.permissions.data.source = o, this.options.permissions.url ? [2, this.get("permissions").then(function(e) {
                        var t = i.options.permissions.process;
                        if (t = t || i.options.ajax.process) {
                            var o = t.call(self, e);
                            o.data.permissions && (i.__currentPermissions = o.data.permissions)
                        }
                    })] : [2, Promise.resolve()]) : [2, Promise.resolve()]
                })
            })
        }, s.prototype.items = function(o, i) {
            return void 0 === o && (o = this.currentPath), void 0 === i && (i = this.currentSource), n.__awaiter(this, void 0, void 0, function() {
                var t;
                return n.__generator(this, function(e) {
                    return (t = this.options).items ? (t.items.data.path = o, t.items.data.source = i, [2, this.get("items")]) : [2, Promise.reject("Set Items api options")]
                })
            })
        }, s.prototype.tree = function(t, o) {
            return void 0 === t && (t = this.currentPath), void 0 === o && (o = this.currentSource), n.__awaiter(this, void 0, void 0, function() {
                return n.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = r.normalizeRelativePath(t), [4, this.permissions(t, o)];
                        case 1:
                            return e.sent(), this.options.folder ? (this.options.folder.data.path = t, this.options.folder.data.source = o, [2, this.get("folder")]) : [2, Promise.reject("Set Folder Api options")]
                    }
                })
            })
        }, s.prototype.createFolder = function(e, t, o) {
            var i = this;
            return this.options.create ? (this.options.create.data.source = o, this.options.create.data.path = t, this.options.create.data.name = e, this.get("create").then(function(e) {
                return i.currentPath = t, i.currentSource = o, e
            })) : Promise.reject("Set Create api options")
        }, s.prototype.move = function(e, t, o, i) {
            var n = i ? "fileMove" : "folderMove",
                r = this.options[n];
            return r ? (r.data.from = e, r.data.path = t, r.data.source = o, this.get(n)) : Promise.reject("Set Move api options")
        }, s.prototype.fileRemove = function(e, t, o) {
            return this.options.fileRemove ? (this.options.fileRemove.data.path = e, this.options.fileRemove.data.name = t, this.options.fileRemove.data.source = o, this.get("fileRemove")) : Promise.reject("Set fileRemove api options")
        }, s.prototype.folderRemove = function(e, t, o) {
            return this.options.folderRemove ? (this.options.folderRemove.data.path = e, this.options.folderRemove.data.name = t, this.options.folderRemove.data.source = o, this.get("folderRemove")) : Promise.reject("Set folderRemove api options")
        }, s.prototype.folderRename = function(e, t, o, i) {
            return this.options.folderRename ? (this.options.folderRename.data.path = e, this.options.folderRename.data.name = t, this.options.folderRename.data.newname = o, this.options.folderRename.data.source = i, this.get("folderRename")) : Promise.reject("Set folderRename api options")
        }, s.prototype.fileRename = function(e, t, o, i) {
            return this.options.fileRename ? (this.options.fileRename.data.path = e, this.options.fileRename.data.name = t, this.options.fileRename.data.newname = o, this.options.fileRename.data.source = i, this.get("fileRename")) : Promise.reject("Set fileRename api options")
        }, s.prototype.crop = function(e, t, o, i, n) {
            return this.options.crop || (this.options.crop = {
                data: {}
            }), void 0 === this.options.crop.data && (this.options.crop.data = {
                action: "crop"
            }), this.options.crop.data.newname = i || o, n && (this.options.crop.data.box = n), this.options.crop.data.path = e, this.options.crop.data.name = o, this.options.crop.data.source = t, this.get("crop")
        }, s.prototype.resize = function(e, t, o, i, n) {
            return this.options.resize || (this.options.resize = {
                data: {}
            }), void 0 === this.options.resize.data && (this.options.resize.data = {
                action: "resize"
            }), this.options.resize.data.newname = i || o, n && (this.options.resize.data.box = n), this.options.resize.data.path = e, this.options.resize.data.name = o, this.options.resize.data.source = t, this.get("resize")
        }, s);

        function s(e, t) {
            var n = this;
            this.options = e, this.parent = t, this.__currentPermissions = null, this.currentPath = "", this.currentSource = o.DEFAULT_SOURCE_NAME, this.currentBaseUrl = "", this.getPathByUrl = function(e, t, o) {
                var i = "getLocalFileByUrl";
                return n.options[i].data.url = e, n.get(i, function(e) {
                    n.options.isSuccess(e) ? t(e.data.path, e.data.name, e.data.source) : o(Error(n.options.getMessage(e)))
                }, o)
            }
        }
        o.default = i
    }, function(e, t, o) {
        "use strict";

        function u(e, t) {
            return void 0 === e && (e = "next"), void 0 === t && (t = "right"), '<a href="javascript:void(0)" class="' + v + "navigation " + v + "navigation-" + e + '">' + i.ToolbarIcon.getIcon("angle-" + t) + "</a>"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            r = o(38),
            a = o(5),
            f = o(13),
            p = o(0),
            h = o(39),
            i = o(36),
            v = h.F_CLASS + "preview_";
        t.default = function(d) {
            if (!d.options.contextMenu) return function() {};
            var i = new r.ContextMenu(d.jodit || d);
            return function(e) {
                function t(e) {
                    return l.getAttribute(e) || ""
                }
                var o = this,
                    l = this,
                    c = d.options;
                return a.setTimeout(function() {
                    i.show(e.pageX, e.pageY, [!("1" === t("data-is-file") || !c.editImage || !d.dataProvider.canI("ImageResize") && !d.dataProvider.canI("ImageCrop")) && {
                        icon: "pencil",
                        title: "Edit",
                        exec: function() {
                            d.openImageEditor(t("href"), t("data-name"), t("data-path"), t("data-source"))
                        }
                    }, !!d.dataProvider.canI("FileRename") && {
                        icon: "italic",
                        title: "Rename",
                        exec: function() {
                            return n.__awaiter(o, void 0, void 0, function() {
                                return n.__generator(this, function(e) {
                                    return d.events.fire("fileRename.filebrowser", t("data-name"), t("data-path"), t("data-source")), [2]
                                })
                            })
                        }
                    }, !!d.dataProvider.canI("FileRemove") && {
                        icon: "bin",
                        title: "Delete",
                        exec: function() {
                            return n.__awaiter(o, void 0, void 0, function() {
                                return n.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, d.deleteFile(t("data-name"), t("data-source"))];
                                        case 1:
                                            return e.sent(), d.state.activeElements = [], d.loadTree(), [2]
                                    }
                                })
                            })
                        }
                    }, !!c.preview && {
                        icon: "eye",
                        title: "Preview",
                        exec: function() {
                            function e(e) {
                                var t = d.create.element("img");
                                t.setAttribute("src", e);
                                var o = function() {
                                    t.removeEventListener("load", o), n.innerHTML = "", c.showPreviewNavigation && (p.Dom.prevWithClass(l, h.ITEM_CLASS) && n.appendChild(s), p.Dom.nextWithClass(l, h.ITEM_CLASS) && n.appendChild(a)), n.appendChild(r), r.appendChild(t), i.setPosition()
                                };
                                t.addEventListener("load", o), t.complete && o()
                            }
                            var i = new f.Dialog(d),
                                n = d.create.div(h.F_CLASS + "preview", h.ICON_LOADER),
                                r = d.create.div(h.F_CLASS + "preview_box"),
                                a = d.create.fromHTML(u()),
                                s = d.create.fromHTML(u("prev", "left"));
                            e(t("href")), d.events.on([a, s], "click", function() {
                                if (!(l = this.classList.contains(v + "navigation-next") ? p.Dom.nextWithClass(l, h.ITEM_CLASS) : p.Dom.prevWithClass(l, h.ITEM_CLASS))) throw Error("Need element");
                                p.Dom.detach(n), p.Dom.detach(r), n.innerHTML = h.ICON_LOADER, e(t("href"))
                            }), i.setContent(n), i.setPosition(), i.open()
                        }
                    }, {
                        icon: "upload",
                        title: "Download",
                        exec: function() {
                            var e = t("href");
                            e && d.ownerWindow.open(e)
                        }
                    }], d.dialog.getZIndex() + 1)
                }, d.defaultTimeout), e.stopPropagation(), e.preventDefault(), !1
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.prototype.on = function(e, t) {
            var o = this;
            return Array.isArray(e) ? e.map(function(e) {
                return o.on(e, t)
            }) : (this.__onEvents[e] || (this.__onEvents[e] = []), this.__onEvents[e].push(t)), this
        }, n.prototype.fire = function(e) {
            for (var t = this, o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            if (Array.isArray(e)) e.map(function(e) {
                return t.fire.apply(t, [e].concat(o))
            });
            else try {
                !this.__lockEvent[e] && this.__onEvents[e] && (this.__lockEvent[e] = !0, this.__onEvents[e].forEach(function(e) {
                    return e.call.apply(e, [t].concat(o))
                }))
            } catch (e) {} finally {
                this.__lockEvent[e] = !1
            }
        }, n.create = function(e) {
            return new n(e)
        }, n);

        function n(o) {
            var i = this;
            this.data = o, this.__onEvents = {}, this.__lockEvent = {}, Object.keys(o).forEach(function(t) {
                Object.defineProperty(i, t, {
                    set: function(e) {
                        i.fire(["beforeChange", "beforeChange." + t], t, e), i.fire(["change", "change." + t], t, o[t] = e)
                    },
                    get: function() {
                        return o[t]
                    }
                })
            })
        }
        t.ObserveObject = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(14),
            n = o(19),
            r = (a.create = function(e) {
                return new a(e)
            }, Object.defineProperty(a.prototype, "path", {
                get: function() {
                    return n.normalizePath(this.data.source.path ? this.data.source.path + "/" : "/")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a.prototype, "imageURL", {
                get: function() {
                    var e = "" + (new Date).getTime(),
                        t = this.data,
                        o = t.source,
                        i = t.thumb || t.file;
                    return t.thumbIsAbsolute && i ? i : n.normalizeURL(o.baseurl, o.path, i || "") + "?_tmst=" + e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a.prototype, "fileURL", {
                get: function() {
                    var e = this.data,
                        t = e.name,
                        o = e.file,
                        i = e.source;
                    return void 0 !== o && (t = o), e.fileIsAbsolute && t ? t : n.normalizeURL(i.baseurl, i.path, t || "")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a.prototype, "time", {
                get: function() {
                    var e = this.data.changed;
                    return e && ("number" == typeof e ? new Date(e).toLocaleString() : e) || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a.prototype, "uniqueHashKey", {
                get: function() {
                    var e = this.data,
                        t = [e.sourceName, e.name, e.file, this.time, e.thumb].join("_");
                    return t.toLowerCase().replace(/[^0-9a-z\-.]/g, "-")
                },
                enumerable: !0,
                configurable: !0
            }), a);

        function a(e) {
            this.data = e, i.extend(this, e)
        }
        t.FileBrowserItem = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = (n.prototype.set = function(e, t) {
            this.data[e] = "" + t
        }, n.prototype.get = function(e) {
            return this.data[e] || null
        }, n);

        function n() {
            this.data = {}
        }
        t.MemoryStorageProvider = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidName = function(e) {
            return !!e.length && !/[^0-9A-Za-zа-яА-ЯЁё\w\-_\.]/.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(8),
            a = o(13),
            s = o(4),
            l = o(6),
            c = o(0);
        n.Config.prototype.imageeditor = {
            min_width: 20,
            min_height: 20,
            closeAfterSave: !1,
            width: "85%",
            height: "85%",
            crop: !0,
            resize: !0,
            resizeUseRatio: !0,
            resizeMinWidth: 20,
            resizeMinHeight: 20,
            cropUseRatio: !0,
            cropDefaultWidth: "70%",
            cropDefaultHeight: "70%"
        };
        var d, u = (i.__extends(f, d = r.Component), f.prototype.destruct = function() {
            this.isDestructed || (this.dialog && (this.dialog.destruct(), delete this.dialog), c.Dom.safeRemove(this.editor), delete this.widthInput, delete this.heightInput, delete this.resize_box, delete this.crop_box, delete this.sizes, delete this.resizeHandler, delete this.cropHandler, delete this.editor, this.jodit.events && this.jodit.events.off(".jodit_image_editor"), d.prototype.destruct.call(this))
        }, f);

        function f(e) {
            var r = d.call(this, e) || this;
            return r.resizeUseRatio = !0, r.cropUseRatio = !0, r.clicked = !1, r.activeTab = "resize", r.cropBox = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }, r.resizeBox = {
                w: 0,
                h: 0
            }, r.calcValueByPercent = function(e, t) {
                var o, i = "" + t,
                    n = parseFloat("" + e);
                return (o = /^[\-+]?[0-9]+(px)?$/.exec(i)) ? parseInt(i, 10) : (o = /^([\-+]?[0-9.]+)%$/.exec(i)) ? Math.round(n * (parseFloat(o[1]) / 100)) : n || 0
            }, r.calcCropBox = function() {
                var e, t = .8 * r.crop_box.parentNode.offsetWidth,
                    o = .8 * r.crop_box.parentNode.offsetHeight,
                    i = t;
                e = r.naturalWidth < t && r.naturalHeight < o ? (i = r.naturalWidth, r.naturalHeight) : t / o < r.ratio ? r.naturalHeight * ((i = t) / r.naturalWidth) : (i = r.naturalWidth * (o / r.naturalHeight), o), s.css(r.crop_box, {
                    width: i,
                    height: e
                })
            }, r.showCrop = function() {
                r.cropImage && (r.calcCropBox(), r.new_w = r.calcValueByPercent(r.cropImage.offsetWidth || r.image.offsetWidth, r.options.cropDefaultWidth), r.new_h = r.cropUseRatio ? r.new_w / r.ratio : r.calcValueByPercent(r.cropImage.offsetHeight || r.image.offsetHeight, r.options.cropDefaultHeight), s.css(r.cropHandler, {
                    backgroundImage: "url(" + r.cropImage.getAttribute("src") + ")",
                    width: r.new_w,
                    height: r.new_h,
                    left: (r.cropImage.offsetWidth || r.image.offsetWidth) / 2 - r.new_w / 2,
                    top: (r.cropImage.offsetHeight || r.image.offsetHeight) / 2 - r.new_h / 2
                }), r.jodit.events.fire(r.cropHandler, "updatesize"))
            }, r.updateCropBox = function() {
                if (r.cropImage) {
                    var e = r.cropImage.offsetWidth / r.naturalWidth,
                        t = r.cropImage.offsetHeight / r.naturalHeight;
                    r.cropBox.x = s.css(r.cropHandler, "left") / e, r.cropBox.y = s.css(r.cropHandler, "top") / t, r.cropBox.w = r.cropHandler.offsetWidth / e, r.cropBox.h = r.cropHandler.offsetHeight / t, r.sizes.innerText = r.cropBox.w.toFixed(0) + "x" + r.cropBox.h.toFixed(0)
                }
            }, r.updateResizeBox = function() {
                r.resizeBox.w = r.image.offsetWidth || r.naturalWidth, r.resizeBox.h = r.image.offsetHeight || r.naturalHeight
            }, r.setHandlers = function() {
                var n = r;
                n.jodit.events.on([n.editor.querySelector(".jodit_bottomright"), n.cropHandler], "mousedown.jodit_image_editor", function(e) {
                    n.target = e.target || e.srcElement, e.preventDefault(), e.stopImmediatePropagation(), n.clicked = !0, n.start_x = e.clientX, n.start_y = e.clientY, n.height = "crop" === n.activeTab ? (n.top_x = s.css(n.cropHandler, "left"), n.top_y = s.css(n.cropHandler, "top"), n.width = n.cropHandler.offsetWidth, n.cropHandler.offsetHeight) : (n.width = n.image.offsetWidth, n.image.offsetHeight)
                }).off(r.jodit.ownerWindow, ".jodit_image_editor" + n.jodit.id).on(r.jodit.ownerWindow, "mousemove.jodit_image_editor" + n.jodit.id, s.throttle(function(e) {
                    n.clicked && (n.diff_x = e.clientX - n.start_x, n.diff_y = e.clientY - n.start_y, "resize" === n.activeTab && n.resizeUseRatio || "crop" === n.activeTab && n.cropUseRatio ? n.diff_x ? (n.new_w = n.width + n.diff_x, n.new_h = Math.round(n.new_w / n.ratio)) : (n.new_h = n.height + n.diff_y, n.new_w = Math.round(n.new_h * n.ratio)) : (n.new_w = n.width + n.diff_x, n.new_h = n.height + n.diff_y), "resize" === n.activeTab ? (n.options.resizeMinWidth < n.new_w && (s.css(n.image, "width", n.new_w + "px"), n.widthInput.value = "" + n.new_w), n.options.resizeMinHeight < n.new_h && (s.css(n.image, "height", n.new_h + "px"), n.heightInput.value = "" + n.new_h), r.jodit.events.fire(n.resizeHandler, "updatesize")) : (n.target !== n.cropHandler ? (n.cropImage.offsetWidth < n.top_x + n.new_w && (n.new_w = n.cropImage.offsetWidth - n.top_x), n.cropImage.offsetHeight < n.top_y + n.new_h && (n.new_h = n.cropImage.offsetHeight - n.top_y), s.css(n.cropHandler, {
                        width: n.new_w,
                        height: n.new_h
                    })) : (n.cropImage.offsetWidth < n.top_x + n.diff_x + n.cropHandler.offsetWidth && (n.diff_x = n.cropImage.offsetWidth - n.top_x - n.cropHandler.offsetWidth), s.css(n.cropHandler, "left", n.top_x + n.diff_x), n.cropImage.offsetHeight < n.top_y + n.diff_y + n.cropHandler.offsetHeight && (n.diff_y = n.cropImage.offsetHeight - n.top_y - n.cropHandler.offsetHeight), s.css(n.cropHandler, "top", n.top_y + n.diff_y)), r.jodit.events.fire(n.cropHandler, "updatesize")), e.stopImmediatePropagation())
                }, 5)).on(r.jodit.ownerWindow, "resize.jodit_image_editor" + n.jodit.id, function() {
                    r.jodit.events.fire(n.resizeHandler, "updatesize"), n.showCrop(), r.jodit.events.fire(n.cropHandler, "updatesize")
                }).on(r.jodit.ownerWindow, "mouseup.jodit_image_editor" + n.jodit.id + " keydown.jodit_image_editor" + n.jodit.id, function(e) {
                    n.clicked && (n.clicked = !1, e.stopImmediatePropagation())
                }), s.$$(".jodit_btn_group", n.editor).forEach(function(e) {
                    var t = e.querySelector("input");
                    n.jodit.events.on(e, "click change", function() {
                        s.$$("button", e).forEach(function(e) {
                            return e.classList.remove("active")
                        }), this.classList.add("active"), t.checked = !!this.getAttribute("data-yes"), n.jodit.events.fire(t, "change")
                    }, "button")
                }), n.jodit.events.on(r.editor, "click.jodit_image_editor", function() {
                    s.$$(".jodit_image_editor_slider,.jodit_image_editor_area", n.editor).forEach(function(e) {
                        return e.classList.remove("active")
                    });
                    var e = this.parentNode;
                    e.classList.add("active"), n.activeTab = e.getAttribute("data-area") || "resize";
                    var t = n.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_" + n.activeTab);
                    t && t.classList.add("active"), "crop" === n.activeTab && n.showCrop()
                }, ".jodit_image_editor_slider-title").on(n.widthInput, "change.jodit_image_editor mousedown.jodit_image_editor keydown.jodit_image_editor", s.debounce(function() {
                    var e, t = parseInt(n.widthInput.value, 10);
                    n.options.min_width < t && (s.css(n.image, "width", t + "px"), n.resizeUseRatio && n.options.min_height < (e = Math.round(t / n.ratio)) && (s.css(n.image, "height", e + "px"), n.heightInput.value = "" + e)), r.jodit.events.fire(n.resizeHandler, "updatesize")
                }, 200)).on(n.heightInput, "change.jodit_image_editor mousedown.jodit_image_editor keydown.jodit_image_editor", s.debounce(function() {
                    if (!r.isDestructed) {
                        var e, t = parseInt(n.heightInput.value, 10);
                        n.options.min_height < t && (s.css(n.image, "height", t + "px"), n.resizeUseRatio && n.options.min_width < (e = Math.round(t * n.ratio)) && (s.css(n.image, "width", e + "px"), n.widthInput.value = "" + e)), r.jodit.events.fire(n.resizeHandler, "updatesize")
                    }
                }, 200));
                var e = n.editor.querySelector(".jodit_image_editor_keep_spect_ratio");
                e && e.addEventListener("change", function() {
                    n.resizeUseRatio = e.checked
                });
                var t = n.editor.querySelector(".jodit_image_editor_keep_spect_ratio_crop");
                t && t.addEventListener("change", function() {
                    n.cropUseRatio = t.checked
                }), n.jodit.events.on(n.resizeHandler, "updatesize", function() {
                    s.css(n.resizeHandler, {
                        top: 0,
                        left: 0,
                        width: (n.image.offsetWidth || n.naturalWidth) + "px",
                        height: (n.image.offsetHeight || n.naturalHeight) + "px"
                    }), r.updateResizeBox()
                }).on(n.cropHandler, "updatesize", function() {
                    if (n.cropImage) {
                        var e = s.css(n.cropHandler, "left"),
                            t = s.css(n.cropHandler, "top"),
                            o = n.cropHandler.offsetWidth,
                            i = n.cropHandler.offsetHeight;
                        e < 0 && (e = 0), t < 0 && (t = 0), n.cropImage.offsetWidth < e + o && (o = n.cropImage.offsetWidth - e, n.cropUseRatio && (i = o / n.ratio)), n.cropImage.offsetHeight < t + i && (i = n.cropImage.offsetHeight - t, n.cropUseRatio && (o = i * n.ratio)), s.css(n.cropHandler, {
                            width: o,
                            height: i,
                            left: e,
                            top: t,
                            backgroundPosition: -e - 1 + "px " + (-t - 1) + "px",
                            backgroundSize: n.cropImage.offsetWidth + "px " + n.cropImage.offsetHeight + "px"
                        }), n.updateCropBox()
                    }
                }), n.buttons.forEach(function(e) {
                    e.addEventListener("mousedown", function(e) {
                        e.stopImmediatePropagation()
                    }), e.addEventListener("click", function() {
                        var t = {
                            action: n.activeTab,
                            box: "resize" === n.activeTab ? n.resizeBox : n.cropBox
                        };
                        switch (e.getAttribute("data-action")) {
                            case "saveas":
                                a.Promt(n.jodit.i18n("Enter new name"), n.jodit.i18n("Save in new file"), function(e) {
                                    if (!s.trim(e)) return a.Alert(n.jodit.i18n("The name should not be empty")), !1;
                                    n.onSave(e, t, n.hide, function(e) {
                                        a.Alert(e.message)
                                    })
                                });
                                break;
                            case "save":
                                n.onSave(void 0, t, n.hide, function(e) {
                                    a.Alert(e.message)
                                });
                                break;
                            case "reset":
                                "resize" === n.activeTab ? (s.css(n.image, {
                                    width: null,
                                    height: null
                                }), n.widthInput.value = "" + n.naturalWidth, n.heightInput.value = "" + n.naturalHeight, n.jodit.events.fire(n.resizeHandler, "updatesize")) : n.showCrop()
                        }
                    })
                })
            }, r.hide = function() {
                r.dialog.close()
            }, r.open = function(i, n) {
                return new Promise(function(e) {
                    var t = (new Date).getTime();
                    r.image = r.jodit.create.element("img"), s.$$("img,.jodit_icon-loader", r.resize_box).forEach(c.Dom.safeRemove), s.$$("img,.jodit_icon-loader", r.crop_box).forEach(c.Dom.safeRemove), s.css(r.cropHandler, "background", "transparent"), r.onSave = n, r.resize_box.appendChild(r.jodit.create.element("i", {
                        class: "jodit_icon-loader"
                    })), r.crop_box.appendChild(r.jodit.create.element("i", {
                        class: "jodit_icon-loader"
                    })), r.image.setAttribute("src", i += /\?/.test(i) ? "&_tst=" + t : "?_tst=" + t), r.dialog.open();
                    var o = function() {
                        r.isDestructed || (r.image.removeEventListener("load", o), r.naturalWidth = r.image.naturalWidth, r.naturalHeight = r.image.naturalHeight, r.widthInput.value = "" + r.naturalWidth, r.heightInput.value = "" + r.naturalHeight, r.ratio = r.naturalWidth / r.naturalHeight, r.resize_box.appendChild(r.image), r.cropImage = r.image.cloneNode(), r.crop_box.appendChild(r.cropImage), s.$$(".jodit_icon-loader", r.editor).forEach(c.Dom.safeRemove), "crop" === r.activeTab && r.showCrop(), r.jodit.events.fire(r.resizeHandler, "updatesize"), r.jodit.events.fire(r.cropHandler, "updatesize"), r.dialog.setPosition(), r.jodit.events.fire("afterImageEditor"), e(r.dialog))
                    };
                    r.image.addEventListener("load", o), r.image.complete && o()
                })
            }, r.options = e && e.options ? e.options.imageeditor : n.Config.defaultOptions.imageeditor, r.resizeUseRatio = r.options.resizeUseRatio, r.cropUseRatio = r.options.cropUseRatio, r.buttons = [r.jodit.create.fromHTML('<button data-action="reset" type="button" class="jodit_btn">' + l.ToolbarIcon.getIcon("update") + "&nbsp;" + e.i18n("Reset") + "</button>"), r.jodit.create.fromHTML('<button data-action="save" type="button" class="jodit_btn jodit_btn_success">' + l.ToolbarIcon.getIcon("save") + "&nbsp;" + e.i18n("Save") + "</button>"), r.jodit.create.fromHTML('<button data-action="saveas" type="button" class="jodit_btn jodit_btn_success">' + l.ToolbarIcon.getIcon("save") + "&nbsp;" + e.i18n("Save as ...") + "</button>")], r.activeTab = r.options.resize ? "resize" : "crop", r.editor = r.jodit.create.fromHTML('<form class="jodit_image_editor jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-3-4">' + (r.options.resize ? '<div class="jodit_image_editor_area jodit_image_editor_area_resize active">                                <div class="jodit_image_editor_box"></div>                                <div class="jodit_image_editor_resizer">                                    <i class="jodit_bottomright"></i>                                </div>                            </div>' : "") + (r.options.crop ? '<div class="jodit_image_editor_area jodit_image_editor_area_crop' + (r.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_box">                                    <div class="jodit_image_editor_croper">                                        <i class="jodit_bottomright"></i>                                        <i class="jodit_sizes"></i>                                    </div>                                </div>                            </div>' : "") + '</div><div class="jodit_col-lg-1-4">' + (r.options.resize ? '<div data-area="resize" class="jodit_image_editor_slider active">                                <div class="jodit_image_editor_slider-title">' + l.ToolbarIcon.getIcon("resize") + e.i18n("Resize") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_width">' + e.i18n("Width") + '</label>                                        <input type="number" class="jodit_image_editor_width"/>                                    </div>                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_height">' + e.i18n("Height") + '</label>                                        <input type="number" class="jodit_image_editor_height"/>                                    </div>                                    <div class="jodit_form_group">                                        <label>' + e.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (r.resizeUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio"/>                                            <button type="button"  data-yes="1"                                                 class="jodit_col6 jodit_btn jodit_btn_success ' + (r.resizeUseRatio ? "active" : "") + '">' + e.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn' + (r.resizeUseRatio ? "" : "active") + '">' + e.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + (r.options.crop ? '<div data-area="crop" class="jodit_image_editor_slider' + (r.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_slider-title">' + l.ToolbarIcon.getIcon("crop") + e.i18n("Crop") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label>' + e.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (r.cropUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio_crop"/>                                            <button type="button" data-yes="1"                                                 class="jodit_col6 jodit_btn jodit_btn_success ' + (r.cropUseRatio ? "active" : "") + '">' + e.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn ' + (r.cropUseRatio ? "" : "active") + '">' + e.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + "</div></div></form>"), r.widthInput = r.editor.querySelector(".jodit_image_editor_width"), r.heightInput = r.editor.querySelector(".jodit_image_editor_height"), r.resize_box = r.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_resize .jodit_image_editor_box"), r.crop_box = r.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box"), r.sizes = r.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_sizes"), r.resizeHandler = r.editor.querySelector(".jodit_image_editor_resizer"), r.cropHandler = r.editor.querySelector(".jodit_image_editor_croper"), r.dialog = new a.Dialog(e), r.dialog.setContent(r.editor), r.dialog.setSize(r.options.width, r.options.height), r.dialog.setTitle(r.buttons), r.setHandlers(), r
        }
        t.ImageEditor = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            f = o(2),
            r = o(37),
            _ = o(4),
            p = o(0),
            h = o(15),
            a = o(8);
        n.Config.prototype.enableDragAndDropFileToEditor = !0, n.Config.prototype.uploader = {
            url: "",
            insertImageAsBase64URI: !1,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            headers: null,
            data: null,
            format: "json",
            method: "POST",
            prepareData: function(e) {
                return e
            },
            isSuccess: function(e) {
                return e.success
            },
            getMessage: function(e) {
                return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            process: function(e) {
                return e.data
            },
            error: function(e) {
                this.jodit.events.fire("errorMessage", e.message, "error", 4e3)
            },
            defaultHandlerSuccess: function(a) {
                var s = this;
                a.files && a.files.length && a.files.forEach(function(e, t) {
                    var o = a.isImages && a.isImages[t] ? ["img", "src"] : ["a", "href"],
                        i = o[0],
                        n = o[1],
                        r = s.jodit.create.inside.element(i);
                    r.setAttribute(n, a.baseurl + e), "a" === i && (r.innerText = a.baseurl + e), h.isJoditObject(s.jodit) && ("img" === i ? s.jodit.selection.insertImage(r, null, s.jodit.options.imageDefaultWidth) : s.jodit.selection.insertNode(r))
                })
            },
            defaultHandlerError: function(e) {
                this.jodit.events.fire("errorMessage", e.message)
            },
            contentType: function(e) {
                return (void 0 === this.jodit.ownerWindow.FormData || "string" == typeof e) && "application/x-www-form-urlencoded; charset=UTF-8"
            }
        };
        var s, l = (i.__extends(v, s = a.Component), v.dataURItoBlob = function(e) {
            for (var t = atob(e.split(",")[1]), o = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), n = new Uint8Array(i), r = 0; r < t.length; r += 1) n[r] = t.charCodeAt(r);
            return new Blob([n], {
                type: o
            })
        }, v.prototype.buildData = function(t) {
            if (this.options.buildData && "function" == typeof this.options.buildData) return this.options.buildData.call(this, t);
            if (void 0 === this.jodit.ownerWindow.FormData) return t;
            if (t instanceof FormData) return t;
            if ("string" == typeof t) return t;
            var o = new FormData;
            return Object.keys(t).forEach(function(e) {
                o.append(e, t[e])
            }), o
        }, v.prototype.send = function(e, i) {
            function t(e) {
                var t = new r.Ajax(n.jodit || n, {
                    xhr: function() {
                        var e = new XMLHttpRequest;
                        return void 0 !== n.jodit.ownerWindow.FormData && e.upload ? e.upload.addEventListener("progress", function(e) {
                            if (e.lengthComputable) {
                                var t = e.loaded / e.total;
                                t *= 100, n.jodit.progress_bar.style.display = "block", n.jodit.progress_bar.style.width = t + "%", 100 == t && (n.jodit.progress_bar.style.display = "none")
                            }
                        }, !1) : n.jodit.progress_bar.style.display = "none", e
                    },
                    method: n.options.method || "POST",
                    data: e,
                    url: n.options.url,
                    headers: n.options.headers,
                    queryBuild: n.options.queryBuild,
                    contentType: n.options.contentType.call(n, e),
                    dataType: n.options.format || "json",
                    withCredentials: n.options.withCredentials || !1
                });

                function o() {
                    var e = n.ajaxInstances.indexOf(t); - 1 != e && n.ajaxInstances.splice(e, 1)
                }
                return n.ajaxInstances.push(t), t.send().then(function(e) {
                    o(), i.call(n, e)
                }).catch(function(e) {
                    o(), n.options.error.call(n, e)
                })
            }
            var n = this,
                o = this.buildData(e);
            return o instanceof Promise ? o.then(t).catch(function(e) {
                n.options.error.call(n, e)
            }) : t(o)
        }, v.prototype.sendFiles = function(e, i, t, o) {
            var n = this;
            if (!e) return Promise.reject(Error("Need files"));
            var r = this,
                a = Array.from(e);
            if (!a.length) return Promise.reject(Error("Need files"));
            var s = [];
            if (this.options.insertImageAsBase64URI) {
                var l, c = void 0,
                    d = function() {
                        if ((l = a[c]) && l.type) {
                            var e = l.type.match(/\/([a-z0-9]+)/i),
                                t = e[1] ? e[1].toLowerCase() : "";
                            if (~u.options.imagesExtensions.indexOf(t)) {
                                var o = new FileReader;
                                s.push(new Promise(function(t, e) {
                                    o.onerror = e, o.onloadend = function() {
                                        var e = {
                                            baseurl: "",
                                            files: [o.result],
                                            isImages: [!0]
                                        };
                                        "function" == typeof(i || r.options.defaultHandlerSuccess) && (i || r.options.defaultHandlerSuccess).call(r, e), t(e)
                                    }, o.readAsDataURL(l)
                                })), a[c] = null
                            }
                        }
                    },
                    u = this;
                for (c = 0; c < a.length; c += 1) d()
            }
            if ((a = a.filter(function(e) {
                    return e
                })).length) {
                var f = new FormData;
                f.append("path", r.path), f.append("source", r.source);
                var p = void 0;
                for (c = 0; c < a.length; c += 1)
                    if (p = a[c]) {
                        var h = p.type.match(/\/([a-z0-9]+)/i),
                            v = h && h[1] ? h[1].toLowerCase() : "",
                            m = a[c].name || ("" + Math.random()).replace(".", "");
                        if (v) {
                            var g = v;
                            ["jpeg", "jpg"].includes(g) && (g = "jpeg|jpg"), RegExp(".(" + g + ")$", "i").test(m) || (m += "." + v)
                        }
                        f.append("files[" + c + "]", a[c], m)
                    }
                o && o(f), r.options.data && _.isPlainObject(r.options.data) && Object.keys(r.options.data).forEach(function(e) {
                    f.append(e, r.options.data[e])
                }), r.options.prepareData.call(this, f), s.push(r.send(f, function(e) {
                    n.options.isSuccess.call(r, e) ? "function" == typeof(i || r.options.defaultHandlerSuccess) && (i || r.options.defaultHandlerSuccess).call(r, r.options.process.call(r, e)) : (t || r.options.defaultHandlerError).call(r, Error(r.options.getMessage.call(r, e)))
                }).then(function() {
                    n.jodit.events && n.jodit.events.fire("filesWereUploaded")
                }))
            }
            return Promise.all(s)
        }, v.prototype.setPath = function(e) {
            this.path = e
        }, v.prototype.setSource = function(e) {
            this.source = e
        }, v.prototype.bind = function(t, l, c) {
            function e(e) {
                function t(e) {
                    i && (e.append("extension", n), e.append("mimetype", i.type))
                }
                var o, i, n;
                if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length) return d.sendFiles(e.clipboardData.files, l, c), !1;
                if (_.browser("ff") || f.IS_IE) {
                    if (e.clipboardData && !e.clipboardData.types.length && e.clipboardData.types[0] !== f.TEXT_PLAIN) {
                        var r = d.jodit.create.fromHTML('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;" contenteditable="true"></div>');
                        d.jodit.ownerDocument.body.appendChild(r);
                        var a = d.jodit && h.isJoditObject(d.jodit) ? d.jodit.selection.save() : null;
                        r.focus(), setTimeout(function() {
                            var e = r.firstChild;
                            if (p.Dom.safeRemove(r), e && e.hasAttribute("src")) {
                                var t = e.getAttribute("src") || "";
                                a && d.jodit && h.isJoditObject(d.jodit) && d.jodit.selection.restore(a), u.sendFiles([v.dataURItoBlob(t)], l, c)
                            }
                        }, 200)
                    }
                } else if (e.clipboardData && e.clipboardData.items && e.clipboardData.items.length)
                    for (o = 0; o < e.clipboardData.items.length; o += 1)
                        if ("file" === e.clipboardData.items[o].kind && "image/png" === e.clipboardData.items[o].type) {
                            if (i = e.clipboardData.items[o].getAsFile()) {
                                var s = i.type.match(/\/([a-z0-9]+)/i);
                                n = s[1] ? s[1].toLowerCase() : "", d.sendFiles([i], l, c, t)
                            }
                            e.preventDefault();
                            break
                        }
            }
            var d = this,
                u = this;

            function o(e) {
                return !(!e.dataTransfer || !e.dataTransfer.files || 0 === e.dataTransfer.files.length)
            }
            this.jodit && this.jodit.editor !== t ? u.jodit.events.on(t, "paste", e) : u.jodit.events.on("beforePaste", e), u.jodit.events.on(t, "dragend dragover dragenter dragleave drop", function(e) {
                e.preventDefault()
            }).on(t, "dragover", function(e) {
                o(e) && (t.classList.contains("jodit_draghover") || t.classList.add("jodit_draghover"), e.preventDefault())
            }).on(t, "dragend", function(e) {
                o(e) && (t.classList.contains("jodit_draghover") && t.classList.remove("jodit_draghover"), e.preventDefault())
            }).on(t, "drop", function(e) {
                t.classList.remove("jodit_draghover"), o(e) && e.dataTransfer && e.dataTransfer.files && (e.preventDefault(), e.stopImmediatePropagation(), d.sendFiles(e.dataTransfer.files, l, c))
            });
            var i = t.querySelector("input[type=file]");
            i && u.jodit.events.on(i, "change", function() {
                u.sendFiles(this.files, l, c).then(function() {
                    i.value = "", /safari/i.test(navigator.userAgent) || (i.type = "", i.type = "file")
                })
            })
        }, v.prototype.uploadRemoteImage = function(e, t, o) {
            var i = this,
                n = this;
            n.send({
                action: "fileUploadRemote",
                url: e
            }, function(e) {
                if (n.options.isSuccess.call(n, e)) "function" == typeof t ? t.call(n, i.options.process.call(i, e)) : i.options.defaultHandlerSuccess.call(n, i.options.process.call(i, e));
                else if ("function" == typeof(o || n.options.defaultHandlerError)) return void(o || i.options.defaultHandlerError).call(n, Error(n.options.getMessage.call(i, e)))
            })
        }, v.prototype.destruct = function() {
            this.ajaxInstances.forEach(function(e) {
                try {
                    e.abort()
                } catch (e) {}
            }), delete this.options, s.prototype.destruct.call(this)
        }, v);

        function v(e, t) {
            var o = s.call(this, e) || this;
            return o.path = "", o.source = "default", o.ajaxInstances = [], o.options = _.extend(!0, {}, n.Config.defaultOptions.uploader, h.isJoditObject(e) ? e.options.uploader : null, t), o
        }
        t.Uploader = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(144);
        t.addNewLine = i.addNewLine;
        var n = o(145);
        t.autofocus = n.autofocus;
        var r = o(146);
        t.backspace = r.backspace;
        var a = o(147);
        t.bold = a.bold;
        var s = o(148);
        t.cleanHtml = s.cleanHtml;
        var l = o(149);
        t.color = l.color, o(150);
        var c = o(151);
        t.enter = c.enter;
        var d = o(152);
        t.errorMessages = d.errorMessages;
        var u = o(153);
        t.font = u.font;
        var f = o(154);
        t.formatBlock = f.formatBlock;
        var p = o(155);
        t.fullsize = p.fullsize;
        var h = o(156);
        t.iframe = h.iframe;
        var v = o(157);
        t.indent = v.indent;
        var m = o(158);
        t.imageProcessor = m.imageProcessor;
        var g = o(159);
        t.imageProperties = g.imageProperties;
        var _ = o(160);
        t.inlinePopup = _.inlinePopup;
        var b = o(161);
        t.justify = b.justify;
        var y = o(162);
        t.link = y.link;
        var w = o(163);
        t.limit = w.limit;
        var C = o(164);
        t.media = C.media;
        var E = o(165);
        t.mobile = E.mobile;
        var j = o(166);
        t.orderedlist = j.orderedlist;
        var T = o(167);
        t.paste = T.paste;
        var S = o(168);
        t.placeholder = S.placeholder;
        var x = o(169);
        t.redoundo = x.redoundo;
        var k = o(170);
        t.resizer = k.resizer;
        var D = o(171);
        t.size = D.size;
        var L = o(172);
        t.source = L.source;
        var z = o(173);
        t.symbols = z.symbols;
        var M = o(174);
        t.hotkeys = M.hotkeys;
        var I = o(175);
        t.table = I.TableProcessor;
        var q = o(176);
        t.tableKeyboardNavigation = q.tableKeyboardNavigation;
        var A = o(177);
        t.search = A.search;
        var N = o(178);
        t.sticky = N.sticky;
        var P = o(179);
        t.stat = P.stat;
        var O = o(180);
        t.xpath = O.xpath;
        var R = o(181);
        t.DragAndDropElement = R.DragAndDropElement;
        var B = o(182);
        t.DragAndDrop = B.DragAndDrop;
        var H = o(183);
        t.pasteStorage = H.pasteStorage
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            v = o(0),
            r = o(5),
            m = o(23),
            g = o(6);
        i.Config.prototype.addNewLine = !0, i.Config.prototype.addNewLineOnDBLClick = !0, i.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "jodit"], t.addNewLine = function(a) {
            if (a.options.addNewLine) {
                var s, l, c = a.create.fromHTML('<div role="button" tabIndex="-1" title="' + a.i18n("Break") + '" class="jodit-add-new-line"><span>' + g.ToolbarIcon.getIcon("enter") + "</span></div>"),
                    d = RegExp("^(" + a.options.addNewLineTagsTriggers.join("|") + ")$", "i"),
                    u = !1,
                    f = !1,
                    e = !1,
                    n = function() {
                        clearTimeout(s), e = !1, c.style.display = "none", u = !0
                    },
                    p = function(e) {
                        return null !== e && v.Dom.isBlock(e, a.editorWindow) && !/^(img|table|iframe|hr)$/i.test(e.nodeName)
                    },
                    h = function() {
                        u || e || (clearTimeout(s), s = r.setTimeout(n, 500))
                    };
                a.events.on("beforeDestruct", function() {
                    v.Dom.safeRemove(c)
                }).on("afterInit", function() {
                    a.container.appendChild(c), a.events.on(c, "mousemove", function(e) {
                        e.stopPropagation()
                    }).on(c, "mousedown touchstart", function(e) {
                        var t = a.editorDocument.createElement(a.options.enter);
                        f && l && l.parentNode ? l.parentNode.insertBefore(t, l) : a.editor.appendChild(t), a.selection.setCursorIn(t), a.events.fire("synchro"), n(), e.preventDefault()
                    })
                }).on("afterInit", function() {
                    a.events.on(a.editor, "scroll", function() {
                        n()
                    }).on(a.container, "mouseleave", h).on(c, "mouseenter", function() {
                        clearTimeout(s), e = !0
                    }).on(c, "mouseleave", function() {
                        e = !1
                    }).on(a.editor, "dblclick", function(e) {
                        if (!a.options.readonly && a.options.addNewLineOnDBLClick && e.target === a.editor && a.selection.isCollapsed()) {
                            var t = m.offset(a.editor, a, a.editorDocument),
                                o = e.pageY - a.editorWindow.pageYOffset,
                                i = a.editorDocument.createElement(a.options.enter);
                            Math.abs(o - t.top) < Math.abs(o - (t.height + t.top)) && a.editor.firstChild ? a.editor.insertBefore(i, a.editor.firstChild) : a.editor.appendChild(i), a.selection.setCursorIn(i), a.setEditorValue(), n(), e.preventDefault()
                        }
                    }).on(a.editor, "mousemove", r.debounce(function(e) {
                        var t = a.editorDocument.elementFromPoint(e.pageX - a.editorWindow.pageXOffset, e.pageY - a.editorWindow.pageYOffset);
                        if ((!t || !v.Dom.isOrContains(c, t)) && t && v.Dom.isOrContains(a.editor, t))
                            if (t && t.nodeName.match(d) && v.Dom.isOrContains(a.editor, t) || (t = v.Dom.closest(t, d, a.editor))) {
                                if (d.test(t.nodeName)) {
                                    var o = v.Dom.up(t, function(e) {
                                        return v.Dom.isBlock(e, a.editorWindow)
                                    }, a.editor);
                                    o && o !== a.editor && (t = o)
                                }
                                var i = m.offset(a.editor, a, a.editorDocument),
                                    n = m.offset(t, a, a.editorDocument),
                                    r = !1;
                                Math.abs(e.pageY - n.top) < 10 && ((r = n.top) - i.top < 20 || (r -= 15), f = !0), Math.abs(e.pageY - (n.top + n.height)) < 10 && (i.top + i.height - (r = n.top + n.height) < 25 || (r += 15), f = !1), !1 !== r && (f && !v.Dom.prev(t, p, a.editor) || !f && !v.Dom.next(t, p, a.editor)) ? (c.style.top = r + "px", l = t, a.options.readonly || a.isLocked() || a.container.classList.contains("jodit_popup_active") || (clearTimeout(s), c.classList.toggle("jodit-add-new-line_after", !f), c.style.display = "block", c.style.width = a.editor.clientWidth + "px", u = !1)) : (l = !1, h())
                            } else h()
                    }, a.defaultTimeout))
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(0),
            r = o(5);
        i.Config.prototype.autofocus = !1, t.autofocus = function(t) {
            var e;
            t.events.on("afterInit", function() {
                t.options.autofocus && (t.defaultTimeout ? e = r.setTimeout(t.selection.focus, 300) : t.selection.focus())
            }).on("mousedown", function(e) {
                t.isEditorMode() && e.target && n.Dom.isBlock(e.target, t.editorWindow) && !e.target.childNodes.length && (t.editor === e.target ? t.selection.focus() : t.selection.setCursorIn(e.target))
            }).on("beforeDestruct", function() {
                clearTimeout(e)
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var y = o(2),
            i = o(2),
            w = o(0),
            C = o(4);
        t.backspace = function(m) {
            function g(e) {
                var t, o = e;
                C.normalizeNode(e);
                do {
                    var i = o.innerHTML.replace(y.INVISIBLE_SPACE_REG_EXP, "");
                    if (i.length && "<br>" !== i || w.Dom.isCell(o, m.editorWindow) || !o.parentNode || e === m.editor) break;
                    t = o.parentNode, w.Dom.safeRemove(o), o = t
                } while (o && o !== m.editor)
            }

            function r(e) {
                if (e && t.test(e.nodeName)) return w.Dom.safeRemove(e), !1
            }

            function _(e, t, o) {
                if (e.node) {
                    var i = e.node;
                    if (void 0 !== c(e, t, o)) return !0;
                    if (e.node || (e.node = i.parentNode), e.node === m.editor) return !1;
                    var n = e.node;
                    if (!1 === r(n)) return !1;
                    for (n = n && (t ? n.previousSibling : n.nextSibling); n && n.nodeType === Node.TEXT_NODE && n.nodeValue && n.nodeValue.match(/^[\n\r]+$/);) n = t ? n.previousSibling : n.nextSibling;
                    return r(n)
                }
            }
            var c = function(e, t, o) {
                    if (e.node && e.node.nodeType === Node.TEXT_NODE && "string" == typeof e.node.nodeValue) {
                        for (var i = e.node.nodeValue, n = t ? i.length : 0, r = t ? -1 : 1, a = n; 0 <= n && n <= i.length && i[n + (t ? -1 : 0)] === y.INVISIBLE_SPACE;) n += r;
                        n !== a && (t ? i = i.substr(0, n) + i.substr(a) : (i = i.substr(0, a) + i.substr(n), n = a), e.node.nodeValue = i), o.setStart(e.node, n), o.collapse(!0), m.selection.selectRange(o);
                        var s = w.Dom.findInline(e.node, t, m.editor);
                        if (i.length) {
                            var l = !1;
                            if (t ? n && (l = !0) : n < i.length && (l = !0), l) return !0
                        } else o.setStartBefore(e.node), o.collapse(!0), m.selection.selectRange(o), w.Dom.safeRemove(e.node), e.node = s;
                        if (s && (w.Dom.isInlineBlock(s) && (s = t ? s.lastChild : s.firstChild), s && s.nodeType === Node.TEXT_NODE)) return e.node = s, c(e, t, o)
                    }
                },
                t = i.MAY_BE_REMOVED_WITH_KEY,
                b = function(e) {
                    return !(null !== e.nodeName.match(/^(TD|TH|TR|TABLE|LI)$/) || !w.Dom.isEmpty(e) && null === e.nodeName.match(t) && (e.nodeType === Node.TEXT_NODE && !w.Dom.isEmptyTextNode(e) || e.childNodes.length && !Array.from(e.childNodes).every(b)))
                };
            m.events.on("afterCommand", function(e) {
                if ("delete" === e) {
                    var t = m.selection.current();
                    if (t && t.firstChild && "BR" === t.firstChild.nodeName && w.Dom.safeRemove(t.firstChild), !(C.trim(m.editor.innerText) || m.editor.querySelector("img") || t && w.Dom.closest(t, "table", m.editor))) {
                        m.editor.innerHTML = "";
                        var o = m.selection.setCursorIn(m.editor);
                        w.Dom.safeRemove(o)
                    }
                }
            }).on("keydown", function(e) {
                if (e.which === y.KEY_BACKSPACE || e.which === y.KEY_DELETE) {
                    var t = e.which === y.KEY_BACKSPACE;
                    if (m.selection.isFocused() || m.selection.focus(), !m.selection.isCollapsed()) return m.execCommand("Delete"), !1;
                    var o = m.selection.sel,
                        i = !(!o || !o.rangeCount) && o.getRangeAt(0);
                    if (!i) return !1;
                    var n = m.ownerDocument.createTextNode(y.INVISIBLE_SPACE),
                        r = m.editorDocument.createElement("span");
                    try {
                        if (i.insertNode(n), !w.Dom.isOrContains(m.editor, n)) return !1;
                        var a = w.Dom.up(n, function(e) {
                                return w.Dom.isBlock(e, m.editorWindow)
                            }, m.editor),
                            s = w.Dom.findInline(n, t, m.editor),
                            l = {
                                node: s
                            },
                            c = void 0;
                        if (s ? c = _(l, t, i) : n.parentNode && (c = _({
                                node: t ? n.parentNode.previousSibling : n.parentNode.nextSibling
                            }, t, i)), void 0 !== c) return !!c && void 0;
                        if (a && a.nodeName.match(/^(TD)$/)) return !1;
                        var d = t ? w.Dom.prev(l.node || n, function(e) {
                            return w.Dom.isBlock(e, m.editorWindow)
                        }, m.editor) : w.Dom.next(l.node || n, function(e) {
                            return w.Dom.isBlock(e, m.editorWindow)
                        }, m.editor);
                        if (!d && a && a.parentNode) {
                            d = m.create.inside.element(m.options.enter);
                            for (var u = a; u && u.parentNode && u.parentNode !== m.editor;) u = u.parentNode;
                            u.parentNode && u.parentNode.insertBefore(d, u)
                        } else if (d && b(d)) return w.Dom.safeRemove(d), !1;
                        if (d) {
                            var f = m.selection.setCursorIn(d, !t);
                            m.selection.insertNode(r, !1, !1), f.nodeType === Node.TEXT_NODE && f.nodeValue === y.INVISIBLE_SPACE && w.Dom.safeRemove(f)
                        }
                        if (a) {
                            if (g(a), d && a.parentNode && (a.nodeName === d.nodeName && a.parentNode && d.parentNode && a.parentNode !== m.editor && d.parentNode !== m.editor && a.parentNode !== d.parentNode && a.parentNode.nodeName === d.parentNode.nodeName && (a = a.parentNode, d = d.parentNode), w.Dom.moveContent(a, d, !t), C.normalizeNode(d)), d && "LI" === d.nodeName) {
                                var p = w.Dom.closest(d, "Ul|OL", m.editor);
                                if (p) {
                                    var h = p.nextSibling;
                                    h && h.nodeName === p.nodeName && p !== h && (w.Dom.moveContent(h, p, !t), w.Dom.safeRemove(h))
                                }
                            }
                            return g(a), !1
                        }
                    } finally {
                        if (n.parentNode && n.nodeValue === y.INVISIBLE_SPACE) {
                            var v = n.parentNode;
                            w.Dom.safeRemove(n), !v.firstChild && v.parentNode && v !== m.editor && w.Dom.safeRemove(v)
                        }
                        r && w.Dom.isOrContains(m.editor, r, !0) && (f = m.selection.setCursorBefore(r), w.Dom.safeRemove(r), f && f.parentNode && (w.Dom.findInline(f, !0, f.parentNode) || w.Dom.findInline(f, !0, f.parentNode)) && w.Dom.safeRemove(f)), m.setEditorValue()
                    }
                    return !1
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = o(3);
        a.Config.prototype.controls.subscript = {
            tags: ["sub"],
            tooltip: "subscript"
        }, a.Config.prototype.controls.superscript = {
            tags: ["sup"],
            tooltip: "superscript"
        }, a.Config.prototype.controls.bold = {
            tagRegExp: /^(strong|b)$/i,
            tags: ["strong", "b"],
            css: {
                "font-weight": ["bold", "700"]
            },
            tooltip: "Bold"
        }, a.Config.prototype.controls.italic = {
            tagRegExp: /^(em|i)$/i,
            tags: ["em", "i"],
            css: {
                "font-style": "italic"
            },
            tooltip: "Italic"
        }, a.Config.prototype.controls.underline = {
            tagRegExp: /^(u)$/i,
            tags: ["u"],
            css: {
                "text-decoration": "underline"
            },
            tooltip: "Underline"
        }, a.Config.prototype.controls.strikethrough = {
            tagRegExp: /^(s)$/i,
            tags: ["s"],
            css: {
                "text-decoration": "line-through"
            },
            tooltip: "Strike through"
        }, t.bold = function(n) {
            function e(e) {
                var t = a.Config.defaultOptions.controls[e],
                    o = r.__assign({}, t.css),
                    i = {};
                return Object.keys(o).forEach(function(e) {
                    i[e] = Array.isArray(o[e]) ? o[e][0] : o[e]
                }), n.selection.applyCSS(i, t.tags ? t.tags[0] : void 0, t.css), n.events.fire("synchro"), !1
            }
            n.registerCommand("bold", {
                exec: e,
                hotkeys: ["ctrl+b", "cmd+b"]
            }).registerCommand("italic", {
                exec: e,
                hotkeys: ["ctrl+i", "cmd+i"]
            }).registerCommand("underline", {
                exec: e,
                hotkeys: ["ctrl+u", "cmd+u"]
            }).registerCommand("strikethrough", {
                exec: e
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            l = o(2),
            v = o(2),
            m = o(0),
            g = o(4);
        i.Config.prototype.cleanHTML = {
            timeout: 300,
            removeEmptyElements: !0,
            fillEmptyParagraph: !0,
            replaceNBSP: !0,
            cleanOnPaste: !0,
            replaceOldTags: {
                i: "em",
                b: "strong"
            },
            allowTags: !1,
            denyTags: !1
        }, i.Config.prototype.controls.eraser = {
            command: "removeFormat",
            tooltip: "Clear Formatting"
        }, t.cleanHtml = function(d) {
            function e(t) {
                var n = {};
                return "string" == typeof t ? (t.split(a).map(function(e) {
                    e = g.trim(e);
                    var t = r.exec(e),
                        o = {};
                    if (t) {
                        var i = t[2].split(a);
                        t[1] && (i.forEach(function(e) {
                            e = g.trim(e);
                            var t = s.exec(e);
                            t ? o[t[1]] = t[2] : o[e] = !0
                        }), n[t[1].toUpperCase()] = o)
                    } else n[e.toUpperCase()] = !0
                }), n) : !!t && (Object.keys(t).forEach(function(e) {
                    n[e.toUpperCase()] = t[e]
                }), n)
            }

            function u(e, t) {
                void 0 === t && (t = !1);
                for (var o = t ? e.nextSibling : e.previousSibling; o;) {
                    if (o.nodeType === Node.ELEMENT_NODE || !m.Dom.isEmptyTextNode(o)) return !0;
                    o = t ? o.nextSibling : o.previousSibling
                }
                return !1
            }
            d.options.cleanHTML.cleanOnPaste && d.events.on("processPaste", function(e, t) {
                return g.cleanFromWord(t)
            });
            var f, r = /([^\[]*)\[([^\]]+)]/,
                a = /[\s]*,[\s]*/,
                s = /^(.*)[\s]*=[\s]*(.*)$/,
                p = e(d.options.cleanHTML.allowTags),
                h = e(d.options.cleanHTML.denyTags);
            d.events.on("change afterSetMode afterInit mousedown keydown", g.debounce(function() {
                if (!d.isDestructed && d.isEditorMode() && d.selection) {
                    f = d.selection.current();
                    var e = null,
                        r = !1,
                        a = 0,
                        s = [],
                        t = d.options.cleanHTML.replaceOldTags;
                    if (t && f) {
                        var o = Object.keys(t).join("|");
                        if (d.selection.isCollapsed()) {
                            var i = m.Dom.closest(f, o, d.editor);
                            if (i) {
                                var n = d.selection.save(),
                                    l = t[i.nodeName.toLowerCase()] || t[i.nodeName];
                                m.Dom.replace(i, l, !0, !1, d.editorDocument), d.selection.restore(n)
                            }
                        }
                    }
                    var c = function(t) {
                        if (t) {
                            if ((n = t).nodeType !== Node.TEXT_NODE && (p && !p[n.nodeName] || h && h[n.nodeName]) || f && "BR" === n.nodeName && u(n) && !u(n, !0) && m.Dom.up(n, function(e) {
                                    return m.Dom.isBlock(e, d.editorWindow)
                                }, d.editor) !== m.Dom.up(f, function(e) {
                                    return m.Dom.isBlock(e, d.editorWindow)
                                }, d.editor) || d.options.cleanHTML.removeEmptyElements && !1 !== f && n.nodeType === Node.ELEMENT_NODE && null !== n.nodeName.match(v.IS_INLINE) && !d.selection.isMarker(n) && 0 === g.trim(n.innerHTML).length && !m.Dom.isOrContains(n, f)) return s.push(t), c(t.nextSibling);
                            if (d.options.cleanHTML.fillEmptyParagraph && m.Dom.isBlock(t, d.editorWindow) && m.Dom.isEmpty(t, /^(img|svg|canvas|input|textarea|form|br)$/)) {
                                var e = d.create.inside.element("br");
                                t.appendChild(e)
                            }
                            if (p && !0 !== p[t.nodeName]) {
                                var o = t.attributes;
                                if (o && o.length) {
                                    var i = [];
                                    for (a = 0; a < o.length; a += 1) p[t.nodeName][o[a].name] && (!0 === p[t.nodeName][o[a].name] || p[t.nodeName][o[a].name] === o[a].value) || i.push(o[a].name);
                                    i.length && (r = !0), i.forEach(function(e) {
                                        t.removeAttribute(e)
                                    })
                                }
                            }
                            c(t.firstChild), c(t.nextSibling)
                        }
                        var n
                    };
                    d.editor.firstChild && (e = d.editor.firstChild), c(e), s.forEach(m.Dom.safeRemove), (s.length || r) && d.events && d.events.fire("syncho")
                }
            }, d.options.cleanHTML.timeout)).on("keyup", function() {
                if (!d.options.readonly) {
                    var t = d.selection.current();
                    if (t) {
                        var e = m.Dom.up(t, function(e) {
                            return m.Dom.isBlock(e, d.editorWindow)
                        }, d.editor);
                        e && m.Dom.all(e, function(e) {
                            e && e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && l.INVISIBLE_SPACE_REG_EXP.test(e.nodeValue) && 0 !== e.nodeValue.replace(l.INVISIBLE_SPACE_REG_EXP, "").length && (e.nodeValue = e.nodeValue.replace(l.INVISIBLE_SPACE_REG_EXP, ""), e === t && d.selection.isCollapsed() && d.selection.setCursorAfter(e))
                        })
                    }
                }
            }).on("afterCommand", function(e) {
                var t, o, i = d.selection;
                switch (e.toLowerCase()) {
                    case "inserthorizontalrule":
                        (t = d.editor.querySelector("hr[id=null]")) && ((o = m.Dom.next(t, function(e) {
                            return m.Dom.isBlock(e, d.editorWindow)
                        }, d.editor, !1)) || (o = d.create.inside.element(d.options.enter)) && m.Dom.after(t, o), i.setCursorIn(o));
                        break;
                    case "removeformat":
                        o = i.current();
                        var n = function(t) {
                            switch (t.nodeType) {
                                case Node.ELEMENT_NODE:
                                    m.Dom.each(t, n), "FONT" === t.nodeName ? m.Dom.unwrap(t) : ([].slice.call(t.attributes).forEach(function(e) {
                                        ~["src", "href", "rel", "content"].indexOf(e.name.toLowerCase()) || t.removeAttribute(e.name)
                                    }), g.normalizeNode(t));
                                    break;
                                case Node.TEXT_NODE:
                                    d.options.cleanHTML.replaceNBSP && t.nodeType === Node.TEXT_NODE && null !== t.nodeValue && t.nodeValue.match(l.SPACE_REG_EXP) && (t.nodeValue = t.nodeValue.replace(l.SPACE_REG_EXP, " "));
                                    break;
                                default:
                                    m.Dom.safeRemove(t)
                            }
                        };
                        if (i.isCollapsed())
                            for (; o && o.nodeType !== Node.ELEMENT_NODE && o !== d.editor;) n(o), o = o && o.parentNode;
                        else d.selection.eachSelection(function(e) {
                            n(e)
                        })
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(17),
            c = n.Widget.TabsWidget,
            d = n.Widget.ColorPickerWidget,
            u = o(0),
            f = o(4);
        i.Config.prototype.controls.brush = {
            isActive: function(t, e, o) {
                if (!o) return !0;
                var i = t.selection.current(),
                    n = o.container.querySelector("svg");
                if (i) {
                    var r = u.Dom.closest(i, function(e) {
                            return u.Dom.isBlock(e, t.editorWindow) || e && u.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                        }, t.editor) || t.editor,
                        a = "" + f.css(r, "color"),
                        s = "" + f.css(r, "background-color");
                    if (a != "" + f.css(t.editor, "color")) return n && (n.style.fill = a), !0;
                    if (s != "" + f.css(t.editor, "background-color")) return n && (n.style.fill = s), !0
                }
                return n && n.style.fill && (n.style.fill = null), !1
            },
            popup: function(t, e, o, i) {
                var n = "",
                    r = "",
                    a = null;
                e && e !== t.editor && u.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE && (n = "" + f.css(e, "color"), r = "" + f.css(e, "background-color"), a = e);
                var s = d(t, function(e) {
                        a ? a.style.backgroundColor = e : t.execCommand("background", !1, e), i()
                    }, r),
                    l = d(t, function(e) {
                        a ? a.style.color = e : t.execCommand("forecolor", !1, e), i()
                    }, n);
                return c(t, "background" === t.options.colorPickerDefaultTab ? {
                    Background: s,
                    Text: l
                } : {
                    Text: l,
                    Background: s
                }, a)
            },
            tooltip: "Fill color or set the text color"
        }, t.color = function(n) {
            function e(e, t, o) {
                var i = f.normalizeColor(o);
                switch (e) {
                    case "background":
                        n.selection.applyCSS({
                            backgroundColor: i || ""
                        });
                        break;
                    case "forecolor":
                        n.selection.applyCSS({
                            color: i || ""
                        })
                }
                return n.setEditorValue(), !1
            }
            n.registerCommand("forecolor", e).registerCommand("background", e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            d = o(0),
            u = o(4),
            f = "copyformat",
            p = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"],
            h = function(e, t, o, i) {
                var n = u.css(o, t);
                return n === i[t] && (n = o.parentNode && o !== e.editor && o.parentNode !== e.editor ? h(e, t, o.parentNode, i) : void 0), n
            };
        i.Config.prototype.controls.copyformat = {
            exec: function(t, e) {
                if (e)
                    if (t.buffer[f]) t.buffer[f] = !1, t.events.off(t.editor, "mouseup." + f);
                    else {
                        var o = {},
                            i = d.Dom.up(e, function(e) {
                                return e && e.nodeType !== Node.TEXT_NODE
                            }, t.editor) || t.editor,
                            n = t.create.inside.span();
                        t.editor.appendChild(n), p.forEach(function(e) {
                            o[e] = u.css(n, e)
                        }), n !== t.editor && d.Dom.safeRemove(n);
                        var r = (a = t, l = o, c = {}, (s = i) && p.forEach(function(e) {
                            c[e] = h(a, e, s, l), e.match(/border(Style|Color)/) && !c.borderWidth && (c[e] = void 0)
                        }), c);
                        t.events.on(t.editor, "mouseup." + f, function() {
                            t.buffer[f] = !1;
                            var e = t.selection.current();
                            e && ("IMG" === e.nodeName ? u.css(e, r) : t.selection.applyCSS(r)), t.events.off(t.editor, "mouseup." + f)
                        }), t.buffer[f] = !0
                    }
                var a, s, l, c
            },
            isActive: function(e) {
                return !!e.buffer[f]
            },
            tooltip: "Paint format"
        }
    }, function(e, g, t) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var _ = t(2),
            b = t(0),
            y = t(4);
        g.insertParagraph = function(e, t, o, i) {
            var n = e.create.inside.element(o),
                r = e.create.inside.element("br");
            n.appendChild(r), i && i.cssText && n.setAttribute("style", i.cssText), e.selection.insertNode(n, !1, !1), e.selection.setCursorBefore(r);
            var a = e.editorDocument.createRange();
            return a.setStartBefore("br" != o.toLowerCase() ? r : n), a.collapse(!0), e.selection.selectRange(a), b.Dom.safeRemove(t), y.scrollIntoView(n, e.editor, e.editorDocument), e.events && e.events.fire("synchro"), n
        }, g.enter = function(m) {
            m.options.enterBlock || (m.options.enterBlock = "br" == m.options.enter.toLowerCase() ? _.PARAGRAPH : m.options.enter.toLowerCase()), m.events.on("keydown", function(e) {
                if (e.which === _.KEY_ENTER) {
                    var t = m.events.fire("beforeEnter", e);
                    if (void 0 !== t) return t;
                    m.selection.isCollapsed() || m.execCommand("Delete"), m.selection.focus();
                    var o = m.selection.current(!1),
                        i = m.selection.sel,
                        n = i && i.rangeCount ? i.getRangeAt(0) : m.editorDocument.createRange();
                    o && o !== m.editor || (m.selection.current(), o = m.create.inside.text(_.INVISIBLE_SPACE), i && i.rangeCount ? n.insertNode(o) : m.editor.appendChild(o), n.selectNode(o), n.collapse(!1), i && (i.removeAllRanges(), i.addRange(n)));
                    var r = !!o && b.Dom.up(o, function(e) {
                            return b.Dom.isBlock(e, m.editorWindow)
                        }, m.editor),
                        a = r && "LI" === r.nodeName;
                    if (!a && (m.options.enter.toLowerCase() == _.BR.toLowerCase() || e.shiftKey || b.Dom.closest(o, "PRE|BLOCKQUOTE", m.editor))) {
                        var s = m.create.inside.element("br");
                        return m.selection.insertNode(s, !0), y.scrollIntoView(s, m.editor, m.editorDocument), !1
                    }
                    if (!r && o && !b.Dom.prev(o, function(e) {
                            return b.Dom.isBlock(e, m.editorWindow) || !!e && b.Dom.isImage(e, m.editorWindow)
                        }, m.editor)) {
                        var l = o;
                        if (b.Dom.up(l, function(e) {
                                e && e.hasChildNodes() && e !== m.editor && (l = e)
                            }, m.editor), r = b.Dom.wrapInline(l, m.options.enter, m), b.Dom.isEmpty(r)) {
                            var c = m.editorDocument.createElement("br");
                            r.appendChild(c), m.selection.setCursorBefore(c)
                        }
                        n = i && i.rangeCount ? i.getRangeAt(0) : m.editorDocument.createRange()
                    }
                    var d = !1,
                        u = !1;
                    if (r) {
                        if (!b.Dom.canSplitBlock(r, m.editorWindow)) return s = m.create.inside.element("br"), m.selection.insertNode(s, !1), m.selection.setCursorAfter(s), !1;
                        if (a && b.Dom.isEmpty(r)) {
                            var f = !1,
                                p = b.Dom.closest(r, "ol|ul", m.editor);
                            if (b.Dom.prev(r, function(e) {
                                    return e && "LI" === e.nodeName
                                }, p))
                                if (b.Dom.next(r, function(e) {
                                        return e && "LI" === e.nodeName
                                    }, p)) {
                                    (v = m.editorDocument.createRange()).setStartBefore(p), v.setEndAfter(r);
                                    var h = v.extractContents();
                                    p.parentNode && p.parentNode.insertBefore(h, p), f = m.selection.setCursorBefore(p)
                                } else f = m.selection.setCursorAfter(p);
                            else f = m.selection.setCursorBefore(p);
                            return b.Dom.safeRemove(r), g.insertParagraph(m, f, m.options.enter), y.$$("li", p).length || b.Dom.safeRemove(p), !1
                        }
                        if (m.selection.cursorInTheEdge(!0, r)) return d = m.selection.setCursorBefore(r), g.insertParagraph(m, d, a ? "li" : m.options.enter, r.style), r && m.selection.setCursorIn(r, !0), !1;
                        var v;
                        if (!1 === m.selection.cursorInTheEdge(!1, r))(v = m.editorDocument.createRange()).setStartBefore(r), v.setEnd(n.startContainer, n.startOffset), h = v.extractContents(), r.parentNode && r.parentNode.insertBefore(h, r), m.selection.setCursorIn(r, !0);
                        else d = m.selection.setCursorAfter(r)
                    } else u = !0;
                    return (u || d) && g.insertParagraph(m, d, a ? "li" : m.options.enter, r ? r.style : void 0), !1
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            s = o(0),
            l = o(5),
            c = o(4);
        i.Config.prototype.showMessageErrors = !0, i.Config.prototype.showMessageErrorTime = 3e3, i.Config.prototype.showMessageErrorOffsetPx = 3, t.errorMessages = function(n) {
            if (n.options.showMessageErrors) {
                var t, r = n.create.div("jodit_error_box_for_messages"),
                    a = function() {
                        t = 5, Array.from(r.childNodes).forEach(function(e) {
                            c.css(r, "bottom", t + "px"), t += e.offsetWidth + n.options.showMessageErrorOffsetPx
                        })
                    };
                n.workplace.appendChild(r), n.events.on("beforeDestruct", function() {
                    s.Dom.safeRemove(r)
                }).on("errorMessage", function(e, t, o) {
                    var i = n.create.div("active " + (t || ""), e);
                    r.appendChild(i), a(), l.setTimeout(function() {
                        i.classList.remove("active"), l.setTimeout(function() {
                            s.Dom.safeRemove(i), a()
                        }, 300)
                    }, o || n.options.showMessageErrorTime)
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            a = o(0),
            s = o(4);
        i.Config.prototype.controls.fontsize = {
            command: "fontSize",
            list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"],
            template: function(e, t, o) {
                return o
            },
            tooltip: "Font size",
            isActiveChild: function(t, e) {
                var o = t.selection.current();
                if (o) {
                    var i = a.Dom.closest(o, function(e) {
                            return a.Dom.isBlock(e, t.editorWindow) || e && a.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                        }, t.editor) || t.editor,
                        n = s.css(i, "font-size");
                    return !(!n || !e.args || "" + e.args[1] != "" + n)
                }
                return !1
            },
            isActive: function(t) {
                var e = t.selection.current();
                if (e) {
                    var o = a.Dom.closest(e, function(e) {
                        return a.Dom.isBlock(e, t.editorWindow) || e && a.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                    }, t.editor) || t.editor;
                    return "" + s.css(o, "font-size") != "" + s.css(t.editor, "font-size")
                }
                return !1
            }
        }, i.Config.prototype.controls.font = {
            command: "fontname",
            exec: function(e, t, o) {
                e.execCommand(o.command, !1, o.args ? o.args[0] : void 0)
            },
            list: {
                "Helvetica,sans-serif": "Helvetica",
                "Arial,Helvetica,sans-serif": "Arial",
                "Georgia,serif": "Georgia",
                "Impact,Charcoal,sans-serif": "Impact",
                "Tahoma,Geneva,sans-serif": "Tahoma",
                "'Times New Roman',Times,serif": "Times New Roman",
                "Verdana,Geneva,sans-serif": "Verdana"
            },
            template: function(e, t, o) {
                return '<span style="font-family: ' + t + '">' + o + "</span>"
            },
            isActiveChild: function(t, e) {
                function o(e) {
                    return e.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",")
                }
                var i = t.selection.current();
                if (i) {
                    var n = a.Dom.closest(i, function(e) {
                            return a.Dom.isBlock(e, t.editorWindow) || e && a.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                        }, t.editor) || t.editor,
                        r = "" + s.css(n, "font-family");
                    return !(!r || !e.args || o("" + e.args[0]) !== o(r))
                }
                return !1
            },
            isActive: function(t) {
                var e = t.selection.current();
                if (e) {
                    var o = a.Dom.closest(e, function(e) {
                        return a.Dom.isBlock(e, t.editorWindow) || a.Dom.isNode(e, t.editorWindow) && e && e.nodeType === Node.ELEMENT_NODE
                    }, t.editor) || t.editor;
                    return "" + s.css(o, "font-family") != "" + s.css(t.editor, "font-family")
                }
                return !1
            },
            tooltip: "Font family"
        }, t.font = function(i) {
            function e(e, t, o) {
                switch (e) {
                    case "fontsize":
                        i.selection.applyCSS({
                            fontSize: s.normalizeSize(o)
                        });
                        break;
                    case "fontname":
                        i.selection.applyCSS({
                            fontFamily: o
                        })
                }
                return i.events.fire("synchro"), !1
            }
            i.registerCommand("fontsize", e).registerCommand("fontname", e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            a = o(2),
            s = o(0);
        i.Config.prototype.controls.paragraph = {
            command: "formatBlock",
            getLabel: function(t, e, o) {
                var i = t.selection.current();
                if (i && t.options.textIcons) {
                    var n = (s.Dom.closest(i, function(e) {
                            return s.Dom.isBlock(e, t.editorWindow)
                        }, t.editor) || t.editor).nodeName.toLowerCase(),
                        r = e.list;
                    o && e.data && e.data.currentValue !== n && e.list && r[n] && (o.textBox.innerHTML = "<span>" + t.i18n(r[n]) + "</span>", o.textBox.firstChild.classList.add("jodit_icon"), e.data.currentValue = n)
                }
                return !1
            },
            exec: function(e, t, o) {
                e.execCommand(o.command, !1, o.args ? o.args[0] : void 0)
            },
            data: {
                currentValue: "left"
            },
            list: {
                p: "Normal",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                blockquote: "Quote"
            },
            isActiveChild: function(t, e) {
                var o = t.selection.current();
                if (o) {
                    var i = s.Dom.closest(o, function(e) {
                        return s.Dom.isBlock(e, t.editorWindow)
                    }, t.editor);
                    return i && i !== t.editor && void 0 !== e.args && i.nodeName.toLowerCase() === e.args[0]
                }
                return !1
            },
            isActive: function(t, e) {
                var o = t.selection.current();
                if (o) {
                    var i = s.Dom.closest(o, function(e) {
                        return s.Dom.isBlock(e, t.editorWindow)
                    }, t.editor);
                    return i && i !== t.editor && void 0 !== e.list && "p" != i.nodeName.toLowerCase() && void 0 !== e.list[i.nodeName.toLowerCase()]
                }
                return !1
            },
            template: function(e, t, o) {
                return "<" + t + ' class="jodit_list_element"><span>' + e.i18n(o) + "</span></" + t + "></li>"
            },
            tooltip: "Insert format block"
        }, t.formatBlock = function(r) {
            r.registerCommand("formatblock", function(e, t, i) {
                r.selection.focus();
                var n = !1;
                if (r.selection.eachSelection(function(e) {
                        var t = r.selection.save(),
                            o = !!e && s.Dom.up(e, function(e) {
                                return s.Dom.isBlock(e, r.editorWindow)
                            }, r.editor);
                        o && "LI" !== o.nodeName || !e || (o = s.Dom.wrapInline(e, r.options.enter, r)), o && (o.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i) ? r.selection.isCollapsed() ? s.Dom.wrapInline(e, i, r) : r.selection.applyCSS({}, i) : i === r.options.enterBlock.toLowerCase() && o.parentNode && "LI" === o.parentNode.nodeName ? s.Dom.unwrap(o) : s.Dom.replace(o, i, !0, !1, r.editorDocument), n = !0), r.selection.restore(t)
                    }), !n) {
                    var o = r.editorDocument.createElement(i);
                    o.innerHTML = a.INVISIBLE_SPACE, r.selection.insertNode(o, !1), r.selection.setCursorIn(o)
                }
                return r.setEditorValue(), !1
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(2),
            s = o(4),
            r = o(6);
        i.Config.prototype.fullsize = !1, i.Config.prototype.globalFullsize = !0, i.Config.prototype.controls.fullsize = {
            exec: function(e) {
                e.toggleFullSize()
            },
            isActive: function(e) {
                return e.isFullSize()
            },
            getLabel: function(e, t, o) {
                var i = e.isFullSize() ? "shrink" : "fullsize";
                o && (o.textBox.innerHTML = e.options.textIcons ? "<span>" + e.i18n(i) + "</span>" : r.ToolbarIcon.getIcon(i), o.textBox.firstChild.classList.add("jodit_icon"))
            },
            tooltip: "Open editor in fullsize",
            mode: n.MODE_SOURCE + n.MODE_WYSIWYG
        }, t.fullsize = function(o) {
            function i() {
                o.events && (n ? (t = s.css(o.container, "height"), r = s.css(o.container, "width"), s.css(o.container, {
                    height: o.ownerWindow.innerHeight,
                    width: o.ownerWindow.innerWidth
                }), a = !0) : a && s.css(o.container, {
                    height: t || "auto",
                    width: r || "auto"
                }))
            }

            function e(e) {
                if (o.container) {
                    if (void 0 === e && (e = !o.container.classList.contains("jodit_fullsize")), o.options.fullsize = !!e, o.container.classList.toggle("jodit_fullsize", n = e), o.toolbar && s.css(o.toolbar.container, "width", "auto"), o.options.globalFullsize) {
                        for (var t = o.container.parentNode; t && !(t instanceof Document);) t.classList.toggle("jodit_fullsize_box", e), t = t.parentNode;
                        i()
                    }
                    o.events.fire("afterResize")
                }
            }
            var n = !1,
                t = 0,
                r = 0,
                a = !1;
            o.options.globalFullsize && o.events.on(o.ownerWindow, "resize", i), o.events.on("afterInit afterOpen", function() {
                o.toggleFullSize(o.options.fullsize)
            }).on("toggleFullSize", e).on("beforeDestruct beforeClose", function() {
                e(!1)
            }).on("beforeDestruct", function() {
                o.events && o.events.off(o.ownerWindow, "resize", i)
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            i = o(3),
            a = o(54),
            s = o(5),
            l = o(10);
        i.Config.prototype.iframeBaseUrl = "", i.Config.prototype.iframeDefaultSrc = "about:blank", i.Config.prototype.iframeStyle = 'html{margin: 0px;min-height: 100%;}body{box-sizing: border-box;font-size: 13px;    line-height: 1.6;padding:10px;background:transparent;color:#000;position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}table{width:100%;border: none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}td[data-jodit-selected-cell],th[data-jodit-selected-cell]{border: 1px double #1e88e5}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', i.Config.prototype.iframeCSSLinks = [], t.iframe = function(n) {
            var e = this;
            n.events.on("afterSetMode", function() {
                n.isEditorMode() && n.selection.focus()
            }).on("generateDocumentStructure.iframe", function(e, t) {
                var o = e || t.iframe.contentWindow.document;
                if (o.open(), o.write('<!DOCTYPE html><html dir="' + t.options.direction + '" class="jodit" lang="' + a.defaultLanguage(t.options.language) + '"><head><title>Jodit Editor</title>' + (t.options.iframeBaseUrl ? '<base href="' + t.options.iframeBaseUrl + '"/>' : "") + '</head><body class="jodit_wysiwyg" style="outline:none" contenteditable="true"></body></html>'), o.close(), t.options.iframeCSSLinks && t.options.iframeCSSLinks.forEach(function(e) {
                        var t = o.createElement("link");
                        t.setAttribute("rel", "stylesheet"), t.setAttribute("href", e), o.head && o.head.appendChild(t)
                    }), t.options.iframeStyle) {
                    var i = o.createElement("style");
                    i.innerHTML = t.options.iframeStyle, o.head && o.head.appendChild(i)
                }
            }).on("createEditor", function() {
                return r.__awaiter(e, void 0, void 0, function() {
                    var o, i;
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return n.options.iframe ? (delete n.editor, n.iframe = n.ownerDocument.createElement("iframe"), n.iframe.style.display = "block", n.iframe.src = "about:blank", n.iframe.className = "jodit_wysiwyg_iframe", n.iframe.setAttribute("allowtransparency", "true"), n.iframe.setAttribute("tabindex", "0"), n.iframe.setAttribute("frameborder", "0"), n.workplace.appendChild(n.iframe), [4, n.events.fire("generateDocumentStructure.iframe", null, n)]) : [2];
                            case 1:
                                return e.sent(), n.editorDocument = o = n.iframe.contentWindow.document, n.editorWindow = n.iframe.contentWindow, n.create.inside.setDocument(o), n.editor = o.body, "auto" === n.options.height && (o.documentElement && (o.documentElement.style.overflowY = "hidden"), i = s.throttle(function() {
                                    n.editor && n.iframe && "auto" === n.options.height && l.css(n.iframe, "height", n.editor.offsetHeight)
                                }, n.defaultTimeout / 2), n.events.on("change afterInit afterSetMode resize", i).on([n.iframe, n.editorWindow, o.documentElement], "load", i).on(o, "readystatechange DOMContentLoaded", i)), (t = n.editorWindow.Element.prototype).matches || (t.matches = Element.prototype.matches), n.editorDocument.documentElement && n.events.on(n.editorDocument.documentElement, "mousedown touchend", function() {
                                    n.selection.isFocused() || (n.selection.focus(), n.selection.setCursorIn(n.editor))
                                }).on(n.editorWindow, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", function(e) {
                                    n.events && n.events.fire && n.events.fire(n.ownerWindow, e)
                                }), [2, !1]
                        }
                        var t
                    })
                })
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            c = o(2),
            d = o(0);
        i.Config.prototype.controls.indent = {
            tooltip: "Increase Indent"
        }, i.Config.prototype.controls.outdent = {
            isDisable: function(t) {
                var e = t.selection.current();
                if (e) {
                    var o = d.Dom.closest(e, function(e) {
                        return d.Dom.isBlock(e, t.editorWindow)
                    }, t.editor);
                    if (o && o.style && o.style.marginLeft) return parseInt(o.style.marginLeft, 10) <= 0
                }
                return !0
            },
            tooltip: "Decrease Indent"
        }, i.Config.prototype.indentMargin = 10, t.indent = function(l) {
            function e(a) {
                var s = [];
                return l.selection.eachSelection(function(e) {
                    var t = l.selection.save(),
                        o = !!e && d.Dom.up(e, function(e) {
                            return d.Dom.isBlock(e, l.editorWindow)
                        }, l.editor),
                        i = l.options.enter;
                    if (!o && e && (o = d.Dom.wrapInline(e, i !== c.BR ? i : c.PARAGRAPH, l)), !o) return l.selection.restore(t), !1;
                    var n = !!~s.indexOf(o);
                    if (o && o.style && !n) {
                        s.push(o);
                        var r = o.style.marginLeft ? parseInt(o.style.marginLeft, 10) : 0;
                        o.style.marginLeft = 0 < (r += l.options.indentMargin * ("outdent" === a ? -1 : 1)) ? r + "px" : "", o.getAttribute("style") || o.removeAttribute("style")
                    }
                    l.selection.restore(t)
                }), l.setEditorValue(), !1
            }
            l.registerCommand("indent", {
                exec: e,
                hotkeys: ["ctrl+]", "cmd+]"]
            }), l.registerCommand("outdent", {
                exec: e,
                hotkeys: ["ctrl+[", "cmd+["]
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(4),
            n = "__jodit_imageprocessor_binded";
        t.imageProcessor = function(o) {
            o.events.on("change afterInit", i.debounce(function() {
                o.editor && i.$$("img", o.editor).forEach(function(t) {
                    t[n] || (t[n] = !0, t.complete || t.addEventListener("load", function e() {
                        o.events && o.events.fire && o.events.fire("resize"), t.removeEventListener("load", e)
                    }), o.events.on(t, "mousedown touchstart", function() {
                        o.selection.select(t)
                    }))
                })
            }, o.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            T = o(13),
            S = o(0),
            x = o(4),
            k = o(6),
            n = o(17),
            D = n.Widget.TabsWidget,
            L = n.Widget.FileSelectorWidget,
            z = o(27);
        i.Config.prototype.image = {
            openOnDblClick: !0,
            editSrc: !0,
            useImageEditor: !0,
            editTitle: !0,
            editAlt: !0,
            editLink: !0,
            editSize: !0,
            editBorderRadius: !0,
            editMargins: !0,
            editClass: !0,
            editStyle: !0,
            editId: !0,
            editAlign: !0,
            showPreview: !0,
            selectImageAfterClose: !0
        }, t.imageProperties = function(j) {
            function t(e) {
                var t = this;
                if (!j.options.readonly) {
                    e && e.stopImmediatePropagation();
                    var o, i = j.create.fromHTML.bind(j.create),
                        r = this,
                        n = new T.Dialog(j),
                        a = i('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + k.ToolbarIcon.getIcon("cancel") + "<span>" + j.i18n("Cancel") + "</span></a>"),
                        s = i('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + k.ToolbarIcon.getIcon("check") + "<span>" + j.i18n("Ok") + "</span></a>"),
                        l = {
                            remove: i('<a href="javascript:void(0)" class="jodit_button">' + k.ToolbarIcon.getIcon("bin") + " " + j.i18n("Delete") + "</a>")
                        },
                        c = i('<form class="jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-2-5"><div class="jodit_properties_view_box"><div style="' + (j.options.image.showPreview ? "" : "display:none") + '" class="jodit_properties_image_view"><img class="imageViewSrc" src="" alt=""/></div><div style="' + (j.options.image.editSize ? "" : "display:none") + '" class="jodit_form_group jodit_properties_image_sizes"><input type="number" class="imageWidth"/><a class="jodit_lock_helper jodit_lock_size" href="javascript:void(0)">' + k.ToolbarIcon.getIcon("lock") + '</a><input type="number" class="imageHeight"/></div></div></div><div class="jodit_col-lg-3-5 tabsbox"></div></div></form>'),
                        d = i('<div style="' + (j.options.image.editMargins ? "" : "display:none") + '" class="jodit_form_group"><label>' + j.i18n("Margins") + '</label><div class="jodit_grid"><input class="jodit_col-lg-1-5 margins marginTop" data-id="marginTop" type="text" placeholder="' + j.i18n("top") + '"/><a style="text-align: center;" class="jodit_lock_helper jodit_lock_margin jodit_col-lg-1-5" href="javascript:void(0)">' + k.ToolbarIcon.getIcon("lock") + '</a><input disabled="true" class="jodit_col-lg-1-5 margins marginRight" data-id="marginRight" type="text" placeholder="' + j.i18n("right") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginBottom" data-id="marginBottom" type="text" placeholder="' + j.i18n("bottom") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginLeft" data-id="marginLeft" type="text" placeholder="' + j.i18n("left") + '"/></div></div><div style="' + (j.options.image.editStyle ? "" : "display:none") + '" class="jodit_form_group"><label>' + j.i18n("Styles") + '</label><input type="text" class="style"/></div><div style="' + (j.options.image.editClass ? "" : "display:none") + '" class="jodit_form_group"><label for="classes">' + j.i18n("Classes") + '</label><input type="text" class="classes"/></div><div style="' + (j.options.image.editId ? "" : "display:none") + '" class="jodit_form_group"><label for="id">Id</label><input type="text" class="id"/></div><div style="' + (j.options.image.editBorderRadius ? "" : "display:none") + '" class="jodit_form_group"><label for="border_radius">Border radius</label><input type="number" class="border_radius"/></div><div style="' + (j.options.image.editAlign ? "" : "display:none") + '" class="jodit_form_group"><label for="align">' + j.i18n("Align") + '</label><select class="select align"><option value="">' + j.i18n("--Not Set--") + '</option><option value="left">' + j.i18n("Left") + '</option><option value="center">' + j.i18n("Center") + '</option><option value="right">' + j.i18n("Right") + "</option></optgroup></select></div>"),
                        u = i('<div style="' + (j.options.image.editSrc ? "" : "display:none") + '" class="jodit_form_group"><label>' + j.i18n("Src") + '</label><div class="jodit_input_group"><input type="text" class="imageSrc"/>' + (j.options.filebrowser.ajax.url || j.options.uploader.url ? '<div class="jodit_input_group-buttons">' + (j.options.filebrowser.ajax.url || j.options.uploader.url ? '<a class="jodit_button jodit_rechange" href="javascript:void(0)">' + k.ToolbarIcon.getIcon("image") + "</a>" : "") + (j.options.image.useImageEditor && j.options.filebrowser.ajax.url ? '<a class="jodit_button jodit_use_image_editor" href="javascript:void(0)">' + k.ToolbarIcon.getIcon("crop") + "</a>" : "") + "</div>" : "") + '</div></div><div style="' + (j.options.image.editTitle ? "" : "display:none") + '" class="jodit_form_group"><label for="imageTitle">' + j.i18n("Title") + '</label><input type="text" class="imageTitle"/></div><div style="' + (j.options.image.editAlt ? "" : "display:none") + '" class="jodit_form_group"><label for="imageAlt">' + j.i18n("Alternative") + '</label><input type="text" class="imageAlt"/></div><div style="' + (j.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><label for="imageLink">' + j.i18n("Link") + '</label><input type="text" class="imageLink"/></div><div style="' + (j.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><input type="checkbox" class="imageLinkOpenInNewTab"/> ' + j.i18n("Open link in new tab") + "</div>"),
                        f = r.naturalWidth / r.naturalHeight || 1,
                        p = c.querySelector(".imageWidth"),
                        h = c.querySelector(".imageHeight"),
                        v = function() {
                            x.val(c, ".imageSrc", r.getAttribute("src") || "");
                            var e = c.querySelector(".imageViewSrc");
                            e && e.setAttribute("src", r.getAttribute("src") || "")
                        },
                        m = function() {
                            v(),
                                function() {
                                    r.hasAttribute("title") && x.val(c, ".imageTitle", r.getAttribute("title") || ""), r.hasAttribute("alt") && x.val(c, ".imageAlt", r.getAttribute("alt") || "");
                                    var e = S.Dom.closest(r, "a", j.editor);
                                    e && (x.val(c, ".imageLink", e.getAttribute("href") || ""), c.querySelector(".imageLinkOpenInNewTab").checked = "_blank" === e.getAttribute("target"))
                                }(), p.value = "" + r.offsetWidth, h.value = "" + r.offsetHeight,
                                function() {
                                    if (j.options.image.editMargins) {
                                        var i = !1;
                                        x.$$(".margins", c).forEach(function(e) {
                                            var t = e.getAttribute("data-id") || "",
                                                o = r.style[t];
                                            o && (/^[0-9]+(px)?$/.test(o) && (o = parseInt(o, 10)), e.value = "" + o || "", i || "marginTop" === t || e.value === x.val(c, ".marginTop") || (i = !0))
                                        }), _ = !i;
                                        var e = c.querySelector(".jodit_lock_margin");
                                        e && (e.innerHTML = k.ToolbarIcon.getIcon(_ ? "lock" : "unlock")), x.$$(".margins:not(.marginTop)", c).forEach(function(e) {
                                            return _ ? e.setAttribute("disabled", "true") : e.removeAttribute("disabled")
                                        })
                                    }
                                }(), x.val(c, ".classes", (r.getAttribute("class") || "").replace(/jodit_focused_image[\s]*/, "")), x.val(c, ".id", r.getAttribute("id") || ""), x.val(c, ".border_radius", "" + (parseInt(r.style.borderRadius || "0", 10) || "0")), r.style.cssFloat && ~["left", "right"].indexOf(r.style.cssFloat.toLowerCase()) ? x.val(c, ".align", x.css(r, "float")) : "block" === x.css(r, "display") && "auto" === r.style.marginLeft && "auto" === r.style.marginRight && x.val(c, ".align", "center"), x.val(c, ".style", r.getAttribute("style") || "")
                        },
                        g = !0,
                        _ = !0,
                        b = {},
                        y = c.querySelector(".tabsbox");
                    b[j.i18n("Image")] = u, b[j.i18n("Advanced")] = d, y && y.appendChild(D(j, b)), m(), j.events.on(n, "afterClose", function() {
                        n.destruct(), r.parentNode && j.options.image.selectImageAfterClose && j.selection.select(r)
                    }), l.remove.addEventListener("click", function() {
                        S.Dom.safeRemove(r), n.close()
                    }), j.options.image.useImageEditor && x.$$(".jodit_use_image_editor", u).forEach(function(e) {
                        j.events.on(e, "mousedown touchstart", function() {
                            function t() {
                                n.host === location.host || T.Confirm(j.i18n("You can only edit your own images. Download this image on the host?"), function(e) {
                                    e && j.uploader && j.uploader.uploadRemoteImage("" + n.href, function(e) {
                                        T.Alert(j.i18n("The image has been successfully uploaded to the host!"), function() {
                                            "string" == typeof e.newfilename && (r.setAttribute("src", e.baseurl + e.newfilename), v())
                                        })
                                    }, function(e) {
                                        T.Alert(j.i18n("There was an error loading %s", e.message))
                                    })
                                })
                            }
                            var i = r.getAttribute("src") || "",
                                n = j.create.element("a");
                            n.href = i, j.getInstance("FileBrowser").dataProvider.getPathByUrl("" + n.href, function(e, t, o) {
                                j.getInstance("FileBrowser").openImageEditor(n.href, t, e, o, function() {
                                    var e = (new Date).getTime();
                                    r.setAttribute("src", i + (~i.indexOf("?") ? "" : "?") + "&_tmp=" + e), v()
                                }, function(e) {
                                    T.Alert(e.message)
                                })
                            }, function(e) {
                                T.Alert(e.message, t)
                            })
                        })
                    }), x.$$(".jodit_rechange", u).forEach(function(o) {
                        o.addEventListener("mousedown", function(e) {
                            o.classList.toggle("active");
                            var t = new z.Popup(j, o);
                            t.open(L(j, {
                                upload: function(e) {
                                    e.files && e.files.length && r.setAttribute("src", e.baseurl + e.files[0]), m(), t.close()
                                },
                                filebrowser: function(e) {
                                    e && e.files && Array.isArray(e.files) && e.files.length && (r.setAttribute("src", e.files[0]), t.close(), m())
                                }
                            }, r, t.close), !0), e.stopPropagation()
                        })
                    });
                    var w = c.querySelector(".jodit_lock_helper.jodit_lock_size"),
                        C = c.querySelector(".jodit_lock_helper.jodit_lock_margin");
                    w && w.addEventListener("click", function() {
                        this.innerHTML = k.ToolbarIcon.getIcon((g = !g) ? "lock" : "unlock"), j.events.fire(p, "change")
                    }), C && C.addEventListener("click", function() {
                        this.innerHTML = k.ToolbarIcon.getIcon((_ = !_) ? "lock" : "unlock"), _ ? x.$$(".margins", c).forEach(function(e) {
                            e.matches(".marginTop") || e.setAttribute("disabled", "true")
                        }) : x.$$(".margins", c).forEach(function(e) {
                            e.matches(".marginTop") || e.removeAttribute("disabled")
                        })
                    });
                    var E = function(e) {
                        var t = parseInt(p.value, 10),
                            o = parseInt(h.value, 10);
                        e.target === p ? h.value = "" + Math.round(t / f) : p.value = "" + Math.round(o * f)
                    };
                    return j.events.on([p, h], "change keydown mousedown paste", function(e) {
                        g && (j.defaultTimeout ? (clearTimeout(o), o = x.setTimeout(E.bind(t, e), j.defaultTimeout)) : E(e))
                    }), n.setTitle([j.i18n("Image properties"), l.remove]), n.setContent(c), a.addEventListener("click", function() {
                        n.close()
                    }), s.addEventListener("click", function() {
                        if (j.options.image.editStyle && (x.val(c, ".style") ? r.setAttribute("style", x.val(c, ".style")) : r.removeAttribute("style")), !x.val(c, ".imageSrc")) return S.Dom.safeRemove(r), void n.close();
                        r.setAttribute("src", x.val(c, ".imageSrc")), r.style.borderRadius = "0" !== x.val(c, ".border_radius") && /^[0-9]+$/.test(x.val(c, ".border_radius")) ? x.val(c, ".border_radius") + "px" : "", x.val(c, ".imageTitle") ? r.setAttribute("title", x.val(c, ".imageTitle")) : r.removeAttribute("title"), x.val(c, ".imageAlt") ? r.setAttribute("alt", x.val(c, ".imageAlt")) : r.removeAttribute("alt");
                        var e = S.Dom.closest(r, "a", j.editor);

                        function o(e) {
                            return e = x.trim(e), /^[0-9]+$/.test(e) ? e + "px" : e
                        }

                        function t() {
                            "block" === x.css(r, "display") && x.css(r, "display", ""), "auto" === r.style.marginLeft && "auto" === r.style.marginRight && (r.style.marginLeft = "", r.style.marginRight = "")
                        }
                        x.val(c, ".imageLink") ? ((e = e || S.Dom.wrap(r, "a", j)).setAttribute("href", x.val(c, ".imageLink")), c.querySelector(".imageLinkOpenInNewTab").checked ? e.setAttribute("target", "_blank") : e.removeAttribute("target")) : e && e.parentNode && e.parentNode.replaceChild(r, e), p.value === "" + r.offsetWidth && h.value === "" + r.offsetHeight || x.css(r, {
                            width: x.trim(p.value) ? o(p.value) : null,
                            height: x.trim(h.value) ? o(h.value) : null
                        }), j.options.image.editMargins && (_ ? x.css(r, "margin", o(x.val(c, ".marginTop"))) : x.$$(".margins", c).forEach(function(e) {
                            var t = e.getAttribute("data-id") || "";
                            x.css(r, t, o(e.value))
                        })), j.options.image.editClass && (x.val(c, ".classes") ? r.setAttribute("class", x.val(c, ".classes")) : r.removeAttribute("class")), j.options.image.editId && (x.val(c, ".id") ? r.setAttribute("id", x.val(c, ".id")) : r.removeAttribute("id")), j.options.image.editAlign && (x.val(c, ".align") ? ~["right", "left"].indexOf(x.val(c, ".align").toLowerCase()) ? (x.css(r, "float", x.val(c, ".align")), t()) : (x.css(r, "float", ""), x.css(r, {
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        })) : (x.css(r, "float") && ~["right", "left"].indexOf(("" + x.css(r, "float")).toLowerCase()) && x.css(r, "float", ""), t())), r.getAttribute("style") || r.removeAttribute("style"), j.setEditorValue(), n.close()
                    }), n.setFooter([s, a]), n.setSize(500), n.open(), e && e.preventDefault(), !1
                }
            }
            j.events.on("afterInit", function() {
                j.events.on(j.editor, "dblclick", j.options.image.openOnDblClick ? t : function(e) {
                    e.stopImmediatePropagation(), j.selection.select(this)
                }, "img")
            }).on("openImageProperties", function(e) {
                t.call(e)
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(17),
            c = r.Widget.ColorPickerWidget,
            d = r.Widget.TabsWidget,
            a = o(0),
            u = o(4),
            s = o(7),
            f = o(28),
            l = o(27),
            p = o(20);
        n.Config.prototype.toolbarInline = !0, n.Config.prototype.toolbarInlineDisableFor = [], n.Config.prototype.popup = {
            a: [{
                name: "eye",
                tooltip: "Open link",
                exec: function(e, t) {
                    var o = t.getAttribute("href");
                    t && o && e.ownerWindow.open(o)
                }
            }, {
                name: "link",
                tooltip: "Edit link",
                icon: "pencil"
            }, "Unlink", "brush", "file"],
            jodit: [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t.parentNode && (a.Dom.safeRemove(t), e.events.fire("hidePopup"))
                }
            }],
            "jodit-media": [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t.parentNode && (a.Dom.safeRemove(t), e.events.fire("hidePopup"))
                }
            }],
            img: [{
                name: "delete",
                icon: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t.parentNode && (a.Dom.safeRemove(t), e.events.fire("hidePopup"))
                }
            }, {
                name: "pencil",
                exec: function(e, t) {
                    "img" == t.tagName.toLowerCase() && e.events.fire("openImageProperties", t)
                },
                tooltip: "Edit"
            }, {
                name: "valign",
                list: ["Top", "Middle", "Bottom"],
                tooltip: "Vertical align",
                exec: function(e, t, o) {
                    if ("img" == t.tagName.toLowerCase()) {
                        var i = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                        u.css(t, "vertical-align", i), e.events.fire("recalcPositionPopup")
                    }
                }
            }, {
                name: "left",
                list: ["Left", "Right", "Center", "Normal"],
                exec: function(e, t, o) {
                    if ("img" == t.tagName.toLowerCase()) {
                        var i = function() {
                                "block" === u.css(t, "display") && u.css(t, "display", ""), "auto" === t.style.marginLeft && "auto" === t.style.marginRight && (t.style.marginLeft = "", t.style.marginRight = "")
                            },
                            n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                        "normal" != n ? ~["right", "left"].indexOf(n) ? (u.css(t, "float", n), i()) : (u.css(t, "float", ""), u.css(t, {
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        })) : (u.css(t, "float") && ~["right", "left"].indexOf(u.css(t, "float").toLowerCase()) && u.css(t, "float", ""), i()), e.events.fire("recalcPositionPopup")
                    }
                },
                tooltip: "Horizontal align"
            }],
            table: [{
                name: "brush",
                popup: function(e, t) {
                    var o, i, n, r, a, s, l = f.Table.getAllSelectedCells(t);
                    return !!l.length && (r = u.css(l[0], "color"), s = u.css(l[0], "background-color"), a = u.css(l[0], "border-color"), o = c(e, function(t) {
                        l.forEach(function(e) {
                            u.css(e, "background-color", t)
                        }), e.setEditorValue()
                    }, s), i = c(e, function(t) {
                        l.forEach(function(e) {
                            u.css(e, "color", t)
                        }), e.setEditorValue()
                    }, r), n = c(e, function(t) {
                        l.forEach(function(e) {
                            u.css(e, "border-color", t)
                        }), e.setEditorValue()
                    }, a), d(e, {
                        Background: o,
                        Text: i,
                        Border: n
                    }))
                },
                tooltip: "Background"
            }, {
                name: "valign",
                list: ["Top", "Middle", "Bottom"],
                exec: function(e, t, o) {
                    var i = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                    f.Table.getAllSelectedCells(t).forEach(function(e) {
                        u.css(e, "vertical-align", i)
                    })
                },
                tooltip: "Vertical align"
            }, {
                name: "splitv",
                list: {
                    tablesplitv: "Split vertical",
                    tablesplitg: "Split horizontal"
                },
                tooltip: "Split"
            }, {
                name: "align",
                icon: "left"
            }, "\n", {
                name: "merge",
                command: "tablemerge",
                tooltip: "Merge"
            }, {
                name: "addcolumn",
                list: {
                    tableaddcolumnbefore: "Insert column before",
                    tableaddcolumnafter: "Insert column after"
                },
                exec: function(e, t, o) {
                    var i = o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "";
                    e.execCommand(i, !1, t)
                },
                tooltip: "Add column"
            }, {
                name: "addrow",
                list: {
                    tableaddrowbefore: "Insert row above",
                    tableaddrowafter: "Insert row below"
                },
                exec: function(e, t, o) {
                    var i = o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "";
                    e.execCommand(i, !1, t)
                },
                tooltip: "Add row"
            }, {
                name: "delete",
                icon: "bin",
                list: {
                    tablebin: "Delete table",
                    tablebinrow: "Delete row",
                    tablebincolumn: "Delete column",
                    tableempty: "Empty cell"
                },
                exec: function(e, t, o) {
                    var i = o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "";
                    e.execCommand(i, !1, t), e.events.fire("hidePopup")
                },
                tooltip: "Delete"
            }]
        };
        var h, v = (i.__extends(m, h = s.Plugin), m.prototype.isExcludedTarget = function(e) {
            return !!~u.splitArray(this.jodit.options.toolbarInlineDisableFor).map(function(e) {
                return e.toLowerCase()
            }).indexOf(e.toLowerCase())
        }, m.prototype.hideIfCollapsed = function() {
            return !!this.jodit.selection.isCollapsed() && (this.hidePopup(), !0)
        }, m.prototype.afterInit = function(t) {
            var i = this;
            this.toolbar = p.JoditToolbarCollection.makeCollection(t), this.target = t.create.div("jodit_toolbar_popup-inline-target"), this.container = t.create.div(), this.popup = new l.Popup(t, this.target, void 0, "jodit_toolbar_popup-inline"), t.events.on(this.target, "mousedown keydown touchstart", function(e) {
                e.stopPropagation()
            }).on("beforeOpenPopup hidePopup afterSetMode", this.hidePopup).on("recalcPositionPopup", this.reCalcPosition).on("getDiffButtons.mobile", function(e) {
                if (i.toolbar === e) return u.splitArray(t.options.buttons).filter(function(e) {
                    return "|" !== e && "\n" !== e
                }).filter(function(e) {
                    return !~i.toolbar.getButtonsList().indexOf(e)
                })
            }).on("selectionchange", this.onChangeSelection).on("afterCommand afterExec", function() {
                i.isShown && i.isSelectionPopup && i.onChangeSelection()
            }).on("showPopup", function(e, t) {
                var o = ("string" == typeof e ? e : e.nodeName).toLowerCase();
                i.isSelectionPopup = !1, i.showPopup(t, o, "string" == typeof e ? void 0 : e)
            }).on("mousedown keydown touchstart", this.onSelectionStart).on([t.ownerWindow, t.editor], "scroll resize", this.reCalcPosition).on([t.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).on([t.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent)
        }, m.prototype.beforeDestruct = function(e) {
            this.popup && this.popup.destruct(), delete this.popup, this.toolbar && this.toolbar.destruct(), delete this.toolbar, a.Dom.safeRemove(this.target), a.Dom.safeRemove(this.container), e.events && e.events.off([e.ownerWindow], "scroll resize", this.reCalcPosition).off([e.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).off([e.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent)
        }, m);

        function m() {
            var s = null !== h && h.apply(this, arguments) || this;
            return s._hiddenClass = "jodit_toolbar_popup-inline-target-hidden", s.isSelectionStarted = !1, s.onSelectionEnd = u.debounce(function() {
                !s.isDestructed && s.jodit.isEditorMode() && (s.isSelectionStarted && (s.isTargetAction || s.onChangeSelection()), s.isSelectionStarted = !1, s.isTargetAction = !1)
            }, s.jodit.defaultTimeout), s.isTargetAction = !1, s.isSelectionPopup = !1, s.calcWindSizes = function() {
                var e = s.jodit.ownerWindow,
                    t = s.jodit.ownerDocument.documentElement;
                if (!t) return {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
                var o = s.jodit.ownerDocument.body,
                    i = t.clientTop || o.clientTop || 0,
                    n = t.clientLeft || o.clientLeft || 0;
                return {
                    left: n,
                    top: i,
                    width: t.clientWidth + (e.pageXOffset || t.scrollLeft || o.scrollLeft) - n,
                    height: t.clientHeight + (e.pageYOffset || t.scrollTop || o.scrollTop) - i
                }
            }, s.calcPosition = function(e, t) {
                if (!s.isDestructed) {
                    s.popup.target.classList.remove(s._hiddenClass);
                    var o = e.left + e.width / 2,
                        i = u.offset(s.jodit.workplace, s.jodit, s.jodit.ownerDocument, !0),
                        n = e.top + e.height + 10;
                    s.target.style.left = o + "px", s.target.style.top = n + "px", s.jodit.isFullSize() && (s.target.style.zIndex = "" + u.css(s.jodit.container, "zIndex"));
                    var r = s.container.offsetWidth / 2,
                        a = -r;
                    s.popup.container.classList.remove("jodit_toolbar_popup-inline-top"), t.height < n + s.container.offsetHeight && (s.target.style.top = (n = e.top - s.container.offsetHeight - 10) + "px", s.popup.container.classList.add("jodit_toolbar_popup-inline-top")), o - r < 0 && (a = -(e.width / 2 + e.left)), t.width < o + r && (a = -(s.container.offsetWidth - (t.width - o))), s.container.style.marginLeft = a + "px", (50 < i.top - n || 50 < n - (i.top + i.height)) && s.popup.target.classList.add(s._hiddenClass)
                }
            }, s.reCalcPosition = function() {
                s.__getRect && s.calcPosition(s.__getRect(), s.calcWindSizes())
            }, s.showPopup = function(e, t, o) {
                if (!s.jodit.options.toolbarInline || !s.jodit.options.popup[t.toLowerCase()]) return !1;
                if (s.isExcludedTarget(t)) return !0;
                s.isShown = !0, s.isTargetAction = !0;
                var i = s.calcWindSizes();
                return s.target.parentNode || s.jodit.ownerDocument.body.appendChild(s.target), s.toolbar.build(s.jodit.options.popup[t.toLowerCase()], s.container, o), s.popup.open(s.container, !1, !0), s.__getRect = e, s.calcPosition(e(), i), !0
            }, s.hidePopup = function(e) {
                s.isDestructed || e && (a.Dom.isNode(e, s.jodit.editorWindow || window) || e instanceof l.Popup) && a.Dom.isOrContains(s.target, e instanceof l.Popup ? e.target : e) || (s.isTargetAction = !1, s.isShown = !1, s.popup.close(), a.Dom.safeRemove(s.target))
            }, s.onSelectionStart = function(e) {
                if (!s.isDestructed && s.jodit.isEditorMode() && (s.isTargetAction = !1, s.isSelectionPopup = !1, !s.isSelectionStarted)) {
                    var t = Object.keys(s.jodit.options.popup).join("|"),
                        o = "IMG" === e.target.nodeName ? e.target : a.Dom.closest(e.target, t, s.jodit.editor);
                    o && s.showPopup(function() {
                        return u.offset(o, s.jodit, s.jodit.editorDocument)
                    }, o.nodeName, o) || (s.isSelectionStarted = !0)
                }
            }, s.checkIsTargetEvent = function() {
                s.isTargetAction ? s.isTargetAction = !1 : s.hidePopup()
            }, s.isShown = !1, s.onChangeSelection = function() {
                if (s.jodit.options.toolbarInline && s.jodit.isEditorMode() && !s.hideIfCollapsed() && void 0 !== s.jodit.options.popup.selection) {
                    var e = s.jodit.selection.sel;
                    if (e && e.rangeCount) {
                        s.isSelectionPopup = !0;
                        var t = e.getRangeAt(0);
                        s.showPopup(function() {
                            return u.offset(t, s.jodit, s.jodit.editorDocument)
                        }, "selection")
                    }
                }
            }, s
        }
        t.inlinePopup = v
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            a = o(0),
            s = o(4),
            l = o(6);
        i.Config.prototype.controls.align = {
            name: "left",
            tooltip: "Align",
            getLabel: function(t, e, o) {
                var i = t.selection.current();
                if (i) {
                    var n = a.Dom.closest(i, function(e) {
                            return a.Dom.isBlock(e, t.editorWindow)
                        }, t.editor) || t.editor,
                        r = "" + s.css(n, "text-align");
                    e.defaultValue && ~e.defaultValue.indexOf(r) && (r = "left"), o && e.data && e.data.currentValue !== r && e.list && ~e.list.indexOf(r) && (o.textBox.innerHTML = t.options.textIcons ? "<span>" + r + "</span>" : l.ToolbarIcon.getIcon(r, ""), o.textBox.firstChild.classList.add("jodit_icon"), e.data.currentValue = r)
                }
                return !1
            },
            isActive: function(t, e) {
                var o = t.selection.current();
                if (o && e.defaultValue) {
                    var i = a.Dom.closest(o, function(e) {
                        return a.Dom.isBlock(e, t.editorWindow)
                    }, t.editor) || t.editor;
                    return !~e.defaultValue.indexOf("" + s.css(i, "text-align"))
                }
                return !1
            },
            defaultValue: ["left", "start", "inherit"],
            data: {
                currentValue: "left"
            },
            list: ["center", "left", "right", "justify"]
        }, i.Config.prototype.controls.center = {
            command: "justifyCenter",
            css: {
                "text-align": "center"
            },
            tooltip: "Align Center"
        }, i.Config.prototype.controls.justify = {
            command: "justifyFull",
            css: {
                "text-align": "justify"
            },
            tooltip: "Align Justify"
        }, i.Config.prototype.controls.left = {
            command: "justifyLeft",
            css: {
                "text-align": "left"
            },
            tooltip: "Align Left"
        }, i.Config.prototype.controls.right = {
            command: "justifyRight",
            css: {
                "text-align": "right"
            },
            tooltip: "Align Right"
        }, t.justify = function(i) {
            function e(t) {
                function o(e) {
                    if (e instanceof i.editorWindow.HTMLElement) switch (t.toLowerCase()) {
                        case "justifyfull":
                            e.style.textAlign = "justify";
                            break;
                        case "justifyright":
                            e.style.textAlign = "right";
                            break;
                        case "justifyleft":
                            e.style.textAlign = "left";
                            break;
                        case "justifycenter":
                            e.style.textAlign = "center"
                    }
                }
                return i.selection.focus(), i.selection.eachSelection(function(e) {
                    if (!e && i.editor.querySelector(".jodit_selected_cell")) return s.$$(".jodit_selected_cell", i.editor).forEach(o), !1;
                    if (e instanceof i.editorWindow.Node) {
                        var t = !!e && a.Dom.up(e, function(e) {
                            return a.Dom.isBlock(e, i.editorWindow)
                        }, i.editor);
                        !t && e && (t = a.Dom.wrapInline(e, i.options.enterBlock, i)), o(t)
                    }
                }), !1
            }
            i.registerCommand("justifyfull", e), i.registerCommand("justifyright", e), i.registerCommand("justifyleft", e), i.registerCommand("justifycenter", e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            c = o(0),
            d = o(4);
        i.Config.prototype.link = {
            followOnDblClick: !0,
            processVideoLink: !0,
            processPastedLink: !0,
            openLinkDialogAfterPost: !0,
            removeLinkAfterFormat: !0,
            noFollowCheckbox: !0,
            openInNewTabCheckbox: !0
        }, i.Config.prototype.controls.unlink = {
            exec: function(e, t) {
                var o = c.Dom.closest(t, "A", e.editor);
                o && c.Dom.unwrap(o), e.events.fire("hidePopup")
            }
        }, i.Config.prototype.controls.link = {
            isActive: function(e) {
                var t = e.selection.current();
                return t && !1 !== c.Dom.closest(t, "a", e.editor)
            },
            popup: function(o, i, e, n) {
                var t = o.selection.sel,
                    r = o.create.fromHTML('<form class="jodit_form"><input required type="text" name="url" placeholder="http://" type="text"/><input name="text" placeholder="' + o.i18n("Text") + '" type="text"/>' + (o.options.link.openInNewTabCheckbox ? '<label><input name="target" type="checkbox"/> ' + o.i18n("Open in new tab") + "</label>" : "") + (o.options.link.noFollowCheckbox ? '<label><input name="nofollow" type="checkbox"/> ' + o.i18n("No follow") + "</label>" : "") + '<div style="text-align: right"><button class="jodit_unlink_button" type="button">' + o.i18n("Unlink") + '</button> &nbsp;&nbsp;<button class="jodit_link_insert_button" type="submit"></button></div><form/>');
                i = !(!i || !c.Dom.closest(i, "A", o.editor)) && c.Dom.closest(i, "A", o.editor);
                var a = r.querySelector(".jodit_link_insert_button"),
                    s = r.querySelector(".jodit_unlink_button");
                i ? (d.val(r, "input[name=url]", i.getAttribute("href") || ""), d.val(r, "input[name=text]", i.innerText), o.options.link.openInNewTabCheckbox && (r.querySelector("input[name=target]").checked = "_blank" === i.getAttribute("target")), o.options.link.noFollowCheckbox && (r.querySelector("input[name=nofollow]").checked = "nofollow" === i.getAttribute("rel")), a && (a.innerHTML = o.i18n("Update"))) : (s && (s.style.display = "none"), d.val(r, "input[name=text]", t ? "" + t : ""), a && (a.innerHTML = o.i18n("Insert")));
                var l = o.selection.save();
                return s && s.addEventListener("mousedown", function(e) {
                    i && c.Dom.unwrap(i), o.selection.restore(l), n(), e.preventDefault()
                }), r.addEventListener("submit", function(e) {
                    e.preventDefault(), o.selection.restore(l);
                    var t = i || o.editorDocument.createElement("a");
                    return d.val(r, "input[name=url]") ? (t.setAttribute("href", d.val(r, "input[name=url]")), t.innerText = d.val(r, "input[name=text]"), o.options.link.openInNewTabCheckbox && (r.querySelector("input[name=target]").checked ? t.setAttribute("target", "_blank") : t.removeAttribute("target")), o.options.link.noFollowCheckbox && (r.querySelector("input[name=nofollow]").checked ? t.setAttribute("rel", "nofollow") : t.removeAttribute("rel")), i || o.selection.insertNode(t), n()) : (r.querySelector("input[name=url]").focus(), r.querySelector("input[name=url]").classList.add("jodit_error")), !1
                }), r
            },
            tags: ["a"],
            tooltip: "Insert link"
        }, t.link = function(n) {
            n.options.link.followOnDblClick && n.events.on("afterInit", function() {
                n.events.on(n.editor, "dblclick", function(e) {
                    var t = this.getAttribute("href");
                    t && (location.href = t, e.preventDefault())
                }, "a")
            }), n.options.link.processPastedLink && n.events.on("processPaste", function(e, t) {
                if (d.isURL(t)) {
                    var o = d.convertMediaURLToVideoEmbed(t);
                    if (o !== t) return n.create.inside.fromHTML(o);
                    var i = n.create.inside.element("a");
                    return i.setAttribute("href", t), i.innerText = t, i
                }
            }), n.options.link.removeLinkAfterFormat && n.events.on("afterCommand", function(e) {
                var t, o;
                "removeFormat" === e && ((o = n.selection.current()) && "A" !== o.nodeName && (o = c.Dom.closest(o, "A", n.editor)), o && "A" === o.nodeName && (o.innerHTML === o.innerText ? t = n.editorDocument.createTextNode(o.innerHTML) : (t = n.editorDocument.createElement("span")).innerHTML = o.innerHTML, o.parentNode && (o.parentNode.replaceChild(t, o), n.selection.setCursorIn(t, !0))))
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(2),
            r = o(5),
            a = o(46);
        i.Config.prototype.limitWords = !1, i.Config.prototype.limitChars = !1, i.Config.prototype.limitHTML = !1, t.limit = function(i) {
            if (i && (i.options.limitWords || i.options.limitChars)) {
                var o = function(e, t) {
                        void 0 === t && (t = "");
                        var o = (t || (i.options.limitHTML ? i.value : i.getEditorText())).replace(n.INVISIBLE_SPACE_REG_EXP, "").split(n.SPACE_REG_EXP).filter(function(e) {
                            return e.length
                        });
                        if (!e || !~n.COMMAND_KEYS.indexOf(e.which)) return i.options.limitWords && i.options.limitWords <= o.length ? i.options.limitWords === o.length : i.options.limitChars && i.options.limitChars <= o.join("").length ? i.options.limitChars === o.join("").length : void 0
                    },
                    e = null;
                i.events.on("beforePaste", function() {
                    e = i.observer.snapshot.make()
                }).on("keydown keyup beforeEnter beforePaste", function(e) {
                    if (void 0 !== o(e)) return !1
                }).on("change", r.debounce(function(e, t) {
                    !1 === o(null, i.options.limitHTML ? e : a.stripTags(e)) && (i.value = t)
                }, i.defaultTimeout)).on("afterPaste", function() {
                    if (!1 === o(null) && e) return i.observer.snapshot.restore(e), !1
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            r = o(2),
            a = o(5),
            s = o(11);
        i.Config.prototype.mediaFakeTag = "jodit-media", i.Config.prototype.mediaInFakeBlock = !0, i.Config.prototype.mediaBlocks = ["video", "audio"], t.media = function(o) {
            var i = "jodit_fake_wrapper",
                e = o.options,
                n = e.mediaFakeTag,
                t = e.mediaBlocks;
            e.mediaInFakeBlock && o.events.on("afterGetValueFromEditor", function(e) {
                var t = RegExp("<" + n + "[^>]+data-" + i + "[^>]+>(.+?)</" + n + ">", "ig");
                t.test(e.value) && (e.value = e.value.replace(t, "$1"))
            }).on("change afterInit afterSetMode", a.debounce(function() {
                o.isDestructed || o.getMode() === r.MODE_SOURCE || s.$$(t.join(","), o.editor).forEach(function(e) {
                    e["__" + i] || (e["__" + i] = !0, function(e) {
                        if (e.parentNode && e.parentNode.getAttribute("data-jodit_iframe_wrapper")) e = e.parentNode;
                        else {
                            var t = void 0;
                            (t = o.create.inside.fromHTML("<" + n + ' data-jodit-temp="1" contenteditable="false" draggable="true" data-' + i + '="1"></' + n + ">")).style.display = "inline-block" === e.style.display ? "inline-block" : "block", t.style.width = e.offsetWidth + "px", t.style.height = e.offsetHeight + "px", e.parentNode && e.parentNode.insertBefore(t, e), t.appendChild(e), e = t
                        }
                        o.events.off(e, "mousedown.select touchstart.select").on(e, "mousedown.select touchstart.select", function() {
                            o.selection.setCursorAfter(e)
                        })
                    }(e))
                })
            }, o.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(2),
            a = o(29),
            s = o(20);
        i.Config.prototype.mobileTapTimeout = 300, i.Config.prototype.toolbarAdaptive = !0, i.Config.prototype.controls.dots = {
            mode: n.MODE_SOURCE + n.MODE_WYSIWYG,
            popup: function(t, e, o, i, n) {
                var r = o.data;
                return void 0 === r && ((r = {
                    container: t.create.div(),
                    toolbar: s.JoditToolbarCollection.makeCollection(t),
                    rebuild: function() {
                        if (n) {
                            var e = t.events.fire("getDiffButtons.mobile", n.parentToolbar);
                            e && r && r.toolbar.build(a.splitArray(e), r.container)
                        }
                    }
                }).container.style.width = "100px", o.data = r), r.rebuild(), r.container
            }
        }, t.mobile = function(o) {
            var t, i = 0,
                n = a.splitArray(o.options.buttons);
            o.events.on("touchend", function(e) {
                e.changedTouches && e.changedTouches.length && (t = (new Date).getTime(), o.options.mobileTapTimeout < t - i && (i = t, o.selection.insertCursorAtPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY)))
            }).on("getDiffButtons.mobile", function(e) {
                if (e === o.toolbar) return a.splitArray(o.options.buttons).filter(function(e) {
                    return !~n.indexOf(e)
                })
            }), o.options.toolbarAdaptive && o.events.on("resize afterInit", function() {
                if (o.options.toolbar) {
                    var e, t = o.container.offsetWidth;
                    "" + (e = a.splitArray(t < o.options.sizeLG ? t < o.options.sizeMD ? t < o.options.sizeSM ? o.options.buttonsXS : o.options.buttonsSM : o.options.buttonsMD : o.options.buttons)) != "" + n && o.toolbar.build((n = e).concat(o.options.extraButtons), o.container)
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(0);
        i.Config.prototype.controls.ul = {
            command: "insertUnorderedList",
            controlName: "ul",
            tags: ["ul"],
            tooltip: "Insert Unordered List"
        }, i.Config.prototype.controls.ol = {
            command: "insertOrderedList",
            controlName: "ol",
            tags: ["ol"],
            tooltip: "Insert Ordered List"
        }, t.orderedlist = function(i) {
            i.events.on("afterCommand", function(e) {
                if (/insert(un)?orderedlist/i.test(e)) {
                    var t = n.Dom.up(i.selection.current(), function(e) {
                        return e && /^UL|OL$/i.test(e.nodeName)
                    }, i.editor);
                    if (t && t.parentNode && "P" === t.parentNode.nodeName) {
                        var o = i.selection.save();
                        n.Dom.unwrap(t.parentNode), Array.from(t.childNodes).forEach(function(e) {
                            e.lastChild && e.lastChild.nodeType === Node.ELEMENT_NODE && "BR" === e.lastChild.nodeName && n.Dom.safeRemove(e.lastChild)
                        }), i.selection.restore(o)
                    }
                    i.setEditorValue()
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            v = o(2),
            m = o(13),
            g = o(4),
            _ = o(0);
        i.Config.prototype.askBeforePasteHTML = !0, i.Config.prototype.askBeforePasteFromWord = !0, i.Config.prototype.defaultActionOnPaste = v.INSERT_AS_HTML, i.Config.prototype.controls.cut = {
            command: "cut",
            isDisable: function(e) {
                var t = e.selection.sel;
                return !t || t.isCollapsed
            },
            tooltip: "Cut selection"
        }, t.paste = function(d) {
            function c(e, t, o, i, n) {
                if (void 0 === i && (i = "Clean"), void 0 === n && (n = "Insert only Text"), !d.events || !1 !== d.events.fire("beforeOpenPasteDialog", e, t, o, i, n)) {
                    var r = m.Confirm('<div style="word-break: normal; white-space: normal">' + e + "</div>", t, o);
                    r.container.setAttribute("data-editor_id", d.id);
                    var a = r.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n("Keep") + "</span></a>"),
                        s = r.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n(i) + "</span></a>"),
                        l = r.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n(n) + "</span></a>"),
                        c = r.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + d.i18n("Cancel") + "</span></a>");
                    return d.events.on(a, "click", function() {
                        r.close(), o && o(!0)
                    }), d.events.on(s, "click", function() {
                        r.close(), o && o(!1)
                    }), d.events.on(l, "click", function() {
                        r.close(), o && o(0)
                    }), d.events.on(c, "click", function() {
                        r.close()
                    }), r.setFooter([a, s, n ? l : "", c]), d.events && d.events.fire("afterOpenPasteDialog", r, e, t, o, i, n), r
                }
            }

            function a(e, t) {
                switch (t) {
                    case v.INSERT_CLEAR_HTML:
                        e = g.cleanFromWord(e);
                        break;
                    case v.INSERT_ONLY_TEXT:
                        e = g.stripTags(e);
                        break;
                    case v.INSERT_AS_TEXT:
                        e = g.htmlspecialchars(e)
                }
                d.selection.insertHTML(e)
            }

            function u(o, i) {
                if (g.isHTML(o) && h !== p(o)) return d.events.stopPropagation("beforePaste"), o = p(o), c(d.i18n("Your code is similar to HTML. Keep as HTML?"), d.i18n("Paste as HTML"), function(e) {
                    var t = v.INSERT_AS_HTML;
                    !1 === e && (t = v.INSERT_AS_TEXT), 0 === e && (t = v.INSERT_ONLY_TEXT), "drop" === i.type && d.selection.insertCursorAtPoint(i.clientX, i.clientY), a(o, t), d.setEditorValue()
                }, "Insert as Text"), !1
            }

            function f(e) {
                return e.clipboardData ? e.clipboardData : e.dataTransfer || new DataTransfer
            }

            function p(e) {
                var t = e.search(/<!--StartFragment-->/i); - 1 != t && (e = e.substr(20 + t));
                var o = e.search(/<!--EndFragment-->/i);
                return -1 != o && (e = e.substr(0, o)), e
            }
            var h = "";
            d.events.on("copy cut", function(e) {
                var t = d.selection.getHTML(),
                    o = f(e) || f(d.editorWindow) || f(e.originalEvent);
                o && (o.setData(v.TEXT_PLAIN, g.stripTags(t)), o.setData(v.TEXT_HTML, t)), h = t, "cut" === e.type && (d.selection.remove(), d.selection.focus()), e.preventDefault(), d.events.fire("afterCopy", t)
            }).on("paste", function(e) {
                if (!1 === d.events.fire("beforePaste", e)) return e.preventDefault(), !1;
                var t = f(e);
                if (e && t) {
                    var o = t.types,
                        i = void 0,
                        n = "",
                        r = "";
                    if (Array.isArray(o) || "domstringlist" === g.type(o))
                        for (i = 0; i < o.length; i += 1) n += o[i] + ";";
                    else n = "" + o;
                    /text\/html/i.test(n) ? r = t.getData("text/html") : /text\/rtf/i.test(n) && g.browser("safari") ? r = t.getData("text/rtf") : /text\/plain/i.test(n) && !g.browser("mozilla") ? r = t.getData(v.TEXT_PLAIN) : /text/i.test(n) && v.IS_IE && (r = t.getData(v.TEXT_PLAIN)), (r instanceof d.editorWindow.Node || g.trim(r)) && (r = p(r), h !== r && (r = d.events.fire("processPaste", e, r)), ("string" == typeof r || r instanceof d.editorWindow.Node) && ("drop" === e.type && d.selection.insertCursorAtPoint(e.clientX, e.clientY), a(r, d.options.defaultActionOnPaste)), e.preventDefault(), e.stopPropagation())
                }
                return !1 !== d.events.fire("afterPaste", e) && void 0
            }), d.options.askBeforePasteHTML && d.events.on("beforePaste", function(e) {
                var t = f(e);
                if (e && t && t.getData(v.TEXT_PLAIN)) return u(t.getData(v.TEXT_PLAIN), e)
            }), d.options.askBeforePasteFromWord && d.events.on("beforePaste", function(e) {
                var t = f(e);
                if (e && t && t.getData && t.getData(v.TEXT_HTML)) {
                    var o = function(t) {
                        if (g.isHTML(t) && h !== p(t)) return g.isHTMLFromWord(t) ? c(d.i18n("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?"), d.i18n("Word Paste Detected"), function(e) {
                            !0 === e && (t = g.applyStyles(t), d.options.beautifyHTML && d.ownerWindow.html_beautify && (t = d.ownerWindow.html_beautify(t))), !1 === e && (t = g.cleanFromWord(t)), 0 === e && (t = g.stripTags(g.cleanFromWord(t))), d.selection.insertHTML(t), d.setEditorValue()
                        }) : u(t, e), !1
                    };
                    if (t.types && ~Array.from(t.types).indexOf("text/html")) {
                        var i = t.getData(v.TEXT_HTML);
                        return o(i)
                    }
                    if ("drop" !== e.type) {
                        var n = d.create.div(void 0, {
                            tabindex: -1,
                            contenteditable: !0,
                            style: {
                                left: -9999,
                                top: 0,
                                width: 0,
                                height: "100%",
                                lineHeight: "140%",
                                overflow: "hidden",
                                position: "fixed",
                                zIndex: 2147483647,
                                wordBreak: "break-all"
                            }
                        });
                        d.container.appendChild(n);
                        var r = d.selection.save();
                        n.focus();
                        var a = 0,
                            s = function() {
                                _.Dom.safeRemove(n), d.selection.restore(r)
                            },
                            l = function() {
                                if (a += 1, n.childNodes && 0 < n.childNodes.length) {
                                    var e = n.innerHTML;
                                    s(), !1 !== o(e) && d.selection.insertHTML(e)
                                } else a < 5 ? g.setTimeout(l, 20) : s()
                            };
                        l()
                    }
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            a = o(2),
            s = o(10),
            l = o(5),
            c = o(0);
        i.Config.prototype.showPlaceholder = !0, i.Config.prototype.useInputsPlaceholder = !0, i.Config.prototype.placeholder = "Type something", t.placeholder = function(n) {
            if (n.options.showPlaceholder) {
                this.destruct = function() {
                    c.Dom.safeRemove(r)
                };
                var t = function() {
                        r.parentNode && (r.style.display = "none")
                    },
                    o = l.debounce(function() {
                        if (null !== r.parentNode && n.editor) {
                            if (n.getRealMode() !== a.MODE_WYSIWYG) return t();
                            var e = n.getEditorValue();
                            e && !/^<(p|div|h[1-6])><\/\1>$/.test(e) ? t() : function() {
                                if (r.parentNode && !n.options.readonly) {
                                    var e = 0,
                                        t = 0,
                                        o = n.editorWindow.getComputedStyle(n.editor);
                                    if (n.editor.firstChild && n.editor.firstChild.nodeType === Node.ELEMENT_NODE) {
                                        var i = n.editorWindow.getComputedStyle(n.editor.firstChild);
                                        e = parseInt(i.getPropertyValue("margin-top"), 10), t = parseInt(i.getPropertyValue("margin-left"), 10), r.style.fontSize = parseInt(i.getPropertyValue("font-size"), 10) + "px", r.style.lineHeight = i.getPropertyValue("line-height")
                                    } else r.style.fontSize = parseInt(o.getPropertyValue("font-size"), 10) + "px", r.style.lineHeight = o.getPropertyValue("line-height");
                                    s.css(r, {
                                        display: "block",
                                        marginTop: Math.max(parseInt(o.getPropertyValue("margin-top"), 10), e),
                                        marginLeft: Math.max(parseInt(o.getPropertyValue("margin-left"), 10), t)
                                    })
                                }
                            }()
                        }
                    }, n.defaultTimeout / 10),
                    r = n.create.fromHTML('<span style="display: none;" class="jodit_placeholder">' + n.i18n(n.options.placeholder) + "</span>");
                "rtl" === n.options.direction && (r.style.right = "0px", r.style.direction = "rtl"), n.options.useInputsPlaceholder && n.element.hasAttribute("placeholder") && (r.innerHTML = n.element.getAttribute("placeholder") || ""), n.events.on("readonly", function(e) {
                    e ? t() : o()
                }).on("afterInit", function() {
                    n.workplace.appendChild(r), o(), n.events.fire("placeholder", r.innerHTML), n.events.on("change keyup mouseup keydown mousedown afterSetMode", o).on(window, "load", o)
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(2),
            a = o(7);
        n.Config.prototype.controls.redo = {
            mode: r.MODE_SPLIT,
            isDisable: function(e) {
                return !e.observer.stack.canRedo()
            },
            tooltip: "Redo"
        }, n.Config.prototype.controls.undo = {
            mode: r.MODE_SPLIT,
            isDisable: function(e) {
                return !e.observer.stack.canUndo()
            },
            tooltip: "Undo"
        };
        var s, l = (i.__extends(c, s = a.Plugin), c.prototype.beforeDestruct = function() {}, c.prototype.afterInit = function(t) {
            function e(e) {
                return t.getRealMode() === r.MODE_WYSIWYG && t.observer[e](), !1
            }
            t.registerCommand("redo", {
                exec: e,
                hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"]
            }), t.registerCommand("undo", {
                exec: e,
                hotkeys: ["ctrl+z", "cmd+z"]
            })
        }, c);

        function c() {
            return null !== s && s.apply(this, arguments) || this
        }
        t.redoundo = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            T = o(2),
            S = o(2),
            x = o(0),
            k = o(11),
            D = o(5),
            L = o(23),
            z = o(4);
        i.Config.prototype.useIframeResizer = !0, i.Config.prototype.useTableResizer = !0, i.Config.prototype.useImageResizer = !0, i.Config.prototype.resizer = {
            showSize: !0,
            hideSizeTimeout: 1e3,
            min_width: 10,
            min_height: 10
        }, t.resizer = function(r) {
            function n() {
                w = y = !1, c = null, E.style.display = "none"
            }

            function a() {
                j.style.opacity = "0"
            }

            function s() {
                if (w && c && E) {
                    var e = L.offset(E.parentNode || r.ownerDocument.documentElement, r, r.ownerDocument, !0),
                        t = L.offset(c, r, r.editorDocument),
                        o = parseInt(E.style.left || "0", 10),
                        i = t.top - 1 - e.top,
                        n = t.left - 1 - e.left;
                    parseInt(E.style.top || "0", 10) === i && o === n && E.offsetWidth === c.offsetWidth && E.offsetHeight === c.offsetHeight || (E.style.top = i + "px", E.style.left = n + "px", E.style.width = c.offsetWidth + "px", E.style.height = c.offsetHeight + "px", r.events && (r.events.fire(c, "changesize"), isNaN(o) || r.events.fire("resize")))
                }
            }
            var l, c, d, u, f, p, h, v, m, g, _, b = !1,
                y = !1,
                w = !1,
                C = 0,
                E = r.create.fromHTML('<div data-editor_id="' + r.id + '" style="display:none" class="jodit_resizer"><i class="jodit_resizer-topleft"></i><i class="jodit_resizer-topright"></i><i class="jodit_resizer-bottomright"></i><i class="jodit_resizer-bottomleft"></i><span>100x100</span></div>'),
                j = E.getElementsByTagName("span")[0];
            k.$$("i", E).forEach(function(t) {
                r.events.on(t, "mousedown touchstart", function(e) {
                    if (!c || !c.parentNode) return n(), !1;
                    l = t, e.preventDefault(), e.stopImmediatePropagation(), h = (f = c.offsetWidth) / (p = c.offsetHeight), y = !0, d = e.clientX, u = e.clientY, r.events.fire("hidePopup"), r.lock("resizer")
                })
            }), r.events.on("readonly", function(e) {
                e && n()
            }).on("beforeDestruct", function() {
                x.Dom.safeRemove(E)
            }).on("afterInit", function() {
                r.events.on(r.editor, "keydown", function(e) {
                    w && e.which === T.KEY_DELETE && c && "table" != c.tagName.toLowerCase() && ("JODIT" !== c.tagName ? r.selection.select(c) : (x.Dom.safeRemove(c), n(), e.preventDefault()))
                }).on(r.ownerWindow, "mousemove touchmove", function(e) {
                    if (y) {
                        if (g = e.clientX - d, _ = e.clientY - u, !c) return;
                        var t = l.className;
                        "IMG" === c.tagName ? (g ? (m = f + (t.match(/left/) ? -1 : 1) * g, v = Math.round(m / h)) : (v = p + (t.match(/top/) ? -1 : 1) * _, m = Math.round(v * h)), m > L.innerWidth(r.editor, r.ownerWindow) && (m = L.innerWidth(r.editor, r.ownerWindow), v = Math.round(m / h))) : (m = f + (t.match(/left/) ? -1 : 1) * g, v = p + (t.match(/top/) ? -1 : 1) * _), r.options.resizer.min_width < m && (c.style.width = m < E.parentNode.offsetWidth ? m + "px" : "100%"), r.options.resizer.min_height < v && (c.style.height = v + "px"), s(), o = c.offsetWidth, i = c.offsetHeight, r.options.resizer.showSize && (o < j.offsetWidth || i < j.offsetHeight ? a() : (j.style.opacity = "1", j.innerHTML = o + " x " + i, clearTimeout(C), C = D.setTimeout(a, r.options.resizer.hideSizeTimeout))), e.stopImmediatePropagation()
                    }
                    var o, i
                }).on(r.ownerWindow, "resize", function() {
                    w && s()
                }).on(r.ownerWindow, "mouseup keydown touchend", function(e) {
                    w && !b && (y ? (r.unlock(), y = !1, r.setEditorValue(), e.stopImmediatePropagation()) : n())
                }).on([r.ownerWindow, r.editor], "scroll", function() {
                    w && !y && n()
                })
            }).on("afterGetValueFromEditor", function(e) {
                var t = /<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi;
                t.test(e.value) && (e.value = e.value.replace(t, "$1"))
            }).on("hideResizer", n).on("change afterInit afterSetMode", D.debounce(function() {
                w && (c && c.parentNode ? s() : n()), r.isDestructed || k.$$("img, table, iframe", r.editor).forEach(function(e) {
                    r.getMode() !== T.MODE_SOURCE && !e.__jodit_resizer_binded && ("IFRAME" === e.tagName && r.options.useIframeResizer || "IMG" === e.tagName && r.options.useImageResizer || "TABLE" === e.tagName && r.options.useTableResizer) && (e.__jodit_resizer_binded = !0, function(t) {
                        var e, o;
                        if ("IFRAME" === t.tagName) {
                            var i = t;
                            t = t.parentNode && t.parentNode.getAttribute("data-jodit_iframe_wrapper") ? t.parentNode : ((e = r.create.inside.fromHTML('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>')).style.display = "inline-block" === t.style.display ? "inline-block" : "block", e.style.width = t.offsetWidth + "px", e.style.height = t.offsetHeight + "px", t.parentNode && t.parentNode.insertBefore(e, t), e.appendChild(t), e), r.events.off(t, "mousedown.select touchstart.select").on(t, "mousedown.select touchstart.select", function() {
                                r.selection.select(t)
                            }), r.events.off(t, "changesize").on(t, "changesize", function() {
                                i.setAttribute("width", t.offsetWidth + "px"), i.setAttribute("height", t.offsetHeight + "px")
                            })
                        }
                        r.events.on(t, "dragstart", n).on(t, "mousedown", function(e) {
                            S.IS_IE && "IMG" === t.nodeName && e.preventDefault()
                        }).on(t, "mousedown touchstart", function() {
                            b || (b = !0, c = t, r.options.readonly || (E.parentNode || r.workplace.appendChild(E), w = !0, E.style.display = "block", r.isFullSize() && (E.style.zIndex = "" + z.css(r.container, "zIndex")), s()), "IMG" !== c.tagName || c.complete || c.addEventListener("load", function e() {
                                s(), c && c.removeEventListener("load", e)
                            }), clearTimeout(o)), o = D.setTimeout(function() {
                                b = !1
                            }, 400)
                        })
                    }(e))
                })
            }, r.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            u = o(5),
            f = o(10);
        i.Config.prototype.allowResizeX = !1, i.Config.prototype.allowResizeY = !0, t.size = function(i) {
            function o(e) {
                f.css(i.container, "height", e), i.options.saveHeightInStorage && i.storage.set("height", e)
            }

            function n(e) {
                return f.css(i.container, "width", e)
            }

            function t(e) {
                return f.css(i.workplace, "height", e)
            }
            if ("auto" !== i.options.height && (i.options.allowResizeX || i.options.allowResizeY)) {
                var r = i.create.div("jodit_editor_resize", '<a href="javascript:void(0)"></a>'),
                    a = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0
                    },
                    s = !1;
                i.events.on(r, "mousedown touchstart", function(e) {
                    s = !0, a.x = e.clientX, a.y = e.clientY, a.w = i.container.offsetWidth, a.h = i.container.offsetHeight, i.lock(), e.preventDefault()
                }).on(i.ownerWindow, "mousemove touchmove", u.throttle(function(e) {
                    s && (i.options.allowResizeY && o(a.h + e.clientY - a.y), i.options.allowResizeX && n(a.w + e.clientX - a.x), c(), i.events.fire("resize"))
                }, i.defaultTimeout / 10)).on(i.ownerWindow, "mouseup touchsend", function() {
                    s && (s = !1, i.unlock())
                }).on("afterInit", function() {
                    i.container.appendChild(r)
                }).on("toggleFullSize", function(e) {
                    r.style.display = e ? "none" : "block"
                })
            }

            function e() {
                return (i.options.toolbar ? i.toolbar.container.offsetHeight : 0) + (i.statusbar ? i.statusbar.container.offsetHeight : 0)
            }

            function l() {
                if (i.container && i.container.parentNode) {
                    var o = f.css(i.container, "minHeight") - e();
                    [i.workplace, i.iframe, i.editor].map(function(e) {
                        var t = e === i.editor ? o - 2 : o;
                        e && f.css(e, "minHeight", t), i.events.fire("setMinHeight", t)
                    })
                }
            }
            var c = function() {
                    i && !i.isDestructed && i.options && !i.options.inline && (l(), i.container && ("auto" !== i.options.height || i.isFullSize()) && t(i.container.offsetHeight - e()))
                },
                d = u.debounce(c, i.defaultTimeout);
            i.events.on("toggleFullSize", function(e) {
                e || "auto" !== i.options.height || (t("auto"), l())
            }).on("afterInit", function() {
                i.options.inline || (f.css(i.editor, {
                    minHeight: "100%"
                }), f.css(i.container, {
                    minHeight: i.options.minHeight,
                    minWidth: i.options.minWidth,
                    maxWidth: i.options.maxWidth
                }));
                var e = i.options.height;
                if (i.options.saveHeightInStorage && "auto" !== e) {
                    var t = i.storage.get("height");
                    t && (e = t)
                }
                i.options.inline || (o(e), n(i.options.width)), c()
            }, void 0, void 0, !0).on(window, "load", d).on("afterInit resize updateToolbar scroll afterResize", d)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            u = o(2),
            r = o(2),
            a = o(7),
            s = o(50),
            l = o(5),
            f = o(11),
            c = o(10),
            d = o(0);
        n.Config.prototype.beautifyHTML = !0, n.Config.prototype.useAceEditor = !0, n.Config.prototype.sourceEditorNativeOptions = {
            showGutter: !0,
            theme: "ace/theme/idle_fingers",
            mode: "ace/mode/html",
            wrap: !0,
            highlightActiveLine: !0
        }, n.Config.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js"], n.Config.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify-html.min.js"], n.Config.prototype.controls.source = {
            mode: u.MODE_SPLIT,
            exec: function(e) {
                e.toggleMode()
            },
            isActive: function(e) {
                return e.getRealMode() === u.MODE_SOURCE
            },
            tooltip: "Change mode"
        };
        var p, h = (i.__extends(v, p = a.Plugin), v.prototype.getMirrorValue = function() {
            return this.mirror.value
        }, v.prototype.setMirrorValue = function(e) {
            this.mirror.value = e
        }, v.prototype.setFocusToMirror = function() {
            this.mirror.focus()
        }, v.prototype.replaceMirrorToACE = function() {
            function t() {
                i && c.getRealMode() === u.MODE_SOURCE && (c.events.fire("canRedo", i.hasRedo()), c.events.fire("canUndo", i.hasUndo()))
            }

            function n(e) {
                return s.session.getLine(e).length
            }

            function r() {
                for (var e = s.session.getLength(), t = [], o = 0, i = 0; i < e; i++) o += n(i), 0 < i && (o += 1), t[i] = o;
                return t
            }

            function a(e) {
                var t = r();
                if (e <= t[0]) return {
                    row: 0,
                    column: e
                };
                for (var o = 1, i = 1; i < t.length; i++) t[i] < e && (o = i + 1);
                return {
                    row: o,
                    column: e - t[o - 1] - 1
                }
            }

            function o(e, t) {
                return r()[e] - n(e) + t
            }
            var s, i, l = this,
                c = this.jodit,
                d = function() {
                    if (void 0 === s && void 0 !== l.jodit.ownerWindow.ace) {
                        l.jodit.events.off(l.jodit.ownerWindow, "aceReady", d);
                        var e = l.jodit.create.div("jodit_source_mirror-fake");
                        l.mirrorContainer.insertBefore(e, l.mirrorContainer.firstChild), l.aceEditor = s = l.jodit.ownerWindow.ace.edit(e), s.setTheme(c.options.sourceEditorNativeOptions.theme), s.renderer.setShowGutter(c.options.sourceEditorNativeOptions.showGutter), s.getSession().setMode(c.options.sourceEditorNativeOptions.mode), s.setHighlightActiveLine(c.options.sourceEditorNativeOptions.highlightActiveLine), s.getSession().setUseWrapMode(!0), s.setOption("indentedSoftWrap", !1), s.setOption("wrap", c.options.sourceEditorNativeOptions.wrap), s.getSession().setUseWorker(!1), s.$blockScrolling = 1 / 0, s.setOptions({
                            maxLines: 1 / 0
                        }), s.on("change", l.toWYSIWYG), s.on("focus", l.__proxyOnFocus), s.on("mousedown", l.__proxyOnMouseDown), l.mirror.style.display = "none", i = s.getSession().getUndoManager(), l.setMirrorValue = function(e) {
                            s.setValue(c.options.beautifyHTML && c.ownerWindow.html_beautify ? c.ownerWindow.html_beautify(e) : e), s.clearSelection(), t()
                        }, l.jodit.getRealMode() !== u.MODE_WYSIWYG && l.setMirrorValue(l.getMirrorValue()), l.getMirrorValue = function() {
                            return s.getValue()
                        }, l.setFocusToMirror = function() {
                            s.focus()
                        }, l.getSelectionStart = function() {
                            var e = s.selection.getRange();
                            return o(e.start.row, e.start.column)
                        }, l.getSelectionEnd = function() {
                            var e = s.selection.getRange();
                            return o(e.end.row, e.end.column)
                        }, l.selectAll = function() {
                            s.selection.selectAll()
                        }, l.insertHTML = function(e) {
                            var t = s.selection.getCursor(),
                                o = s.session.insert(t, e);
                            s.selection.setRange({
                                start: t,
                                end: o
                            }, !1)
                        }, l.setMirrorSelectionRange = function(e, t) {
                            var o, i, n;
                            o = t, i = a(e), n = a(o), s.getSelection().setSelectionRange({
                                start: i,
                                end: n
                            })
                        }, c.events.on("afterResize", function() {
                            s.resize()
                        }).fire("aceInited", c)
                    }
                };
            c.events.on(this.jodit.ownerWindow, "aceReady", d).on("aceReady", d).on("afterSetMode", function() {
                c.getRealMode() !== u.MODE_SOURCE && c.getMode() !== u.MODE_SPLIT || (l.fromWYSIWYG(), d())
            }).on("beforeCommand", function(e) {
                if (c.getRealMode() !== u.MODE_WYSIWYG && ("redo" === e || "undo" === e) && i) return i["has" + e.substr(0, 1).toUpperCase() + e.substr(1)] && s[e](), t(), !1
            }), d(), void 0 !== this.jodit.ownerWindow.ace || f.$$("script." + this.className, this.jodit.ownerDocument.body).length || this.loadNext(0, c.options.sourceEditorCDNUrlsJS, "aceReady", this.className)
        }, v.prototype.afterInit = function(t) {
            var o = this;

            function e() {
                t.events.off("beforeSetMode.source afterSetMode.source").on("beforeSetMode.source", o.saveSelection).on("afterSetMode.source", o.restoreSelection)
            }
            this.mirrorContainer = t.create.div("jodit_source"), this.mirror = t.create.fromHTML('<textarea class="jodit_source_mirror"/>'), e(), this.onReadonlyReact(), t.events.on(this.mirror, "mousedown keydown touchstart input", l.debounce(this.toWYSIWYG, t.defaultTimeout)).on(this.mirror, "change keydown mousedown touchstart input", this.autosize).on("afterSetMode.source", this.autosize).on(this.mirror, "mousedown focus", function(e) {
                t.events.fire(e.type, e)
            }), t.events.on("setMinHeight.source", function(e) {
                o.mirror && c.css(o.mirror, "minHeight", e)
            }).on("insertHTML.source", function(e) {
                if (!t.options.readonly && !o.jodit.isEditorMode()) return o.insertHTML(e), !1
            }).on("aceInited", function() {
                o.onReadonlyReact(), e()
            }, void 0, void 0, !0).on("readonly.source", this.onReadonlyReact).on("placeholder.source", function(e) {
                o.mirror.setAttribute("placeholder", e)
            }).on("beforeCommand.source", this.onSelectAll).on("change.source", this.fromWYSIWYG), this.mirrorContainer.appendChild(this.mirror), t.workplace.appendChild(this.mirrorContainer), this.autosize();
            var i = "beutyfy_html_jodit_helper";
            t.options.beautifyHTML && void 0 === t.ownerWindow.html_beautify && !f.$$("script." + i, t.ownerDocument.body).length && this.loadNext(0, t.options.beautifyHTMLCDNUrlsJS, !1, i), t.options.useAceEditor && this.replaceMirrorToACE(), this.fromWYSIWYG()
        }, v.prototype.beforeDestruct = function(e) {
            d.Dom.safeRemove(this.mirrorContainer), d.Dom.safeRemove(this.mirror), e && e.events && e.events.off("aceInited.source"), this.aceEditor && (this.setFocusToMirror = function() {}, this.aceEditor.off("change", this.toWYSIWYG), this.aceEditor.off("focus", this.__proxyOnFocus), this.aceEditor.off("mousedown", this.__proxyOnMouseDown), this.aceEditor.destroy(), delete this.aceEditor), this.lastTuple && this.lastTuple.element.removeEventListener("load", this.lastTuple.callback)
        }, v);

        function v() {
            var a = null !== p && p.apply(this, arguments) || this;
            return a.className = "jodit_ace_editor", a.__lock = !1, a.__oldMirrorValue = "", a.autosize = l.debounce(function() {
                a.mirror.style.height = "auto", a.mirror.style.height = a.mirror.scrollHeight + "px"
            }, a.jodit.defaultTimeout), a.tempMarkerStart = "{start-jodit-selection}", a.tempMarkerStartReg = /{start-jodit-selection}/g, a.tempMarkerEnd = "{end-jodit-selection}", a.tempMarkerEndReg = /{end-jodit-selection}/g, a.selInfo = [], a.lastTuple = null, a.loadNext = function(e, t, o, i) {
                if (void 0 === o && (o = "aceReady"), void 0 === i && (i = a.className), o && void 0 === t[e] && !a.isDestructed) return a.jodit && a.jodit.events && a.jodit.events.fire(o), void(a.jodit && a.jodit.events && a.jodit.events.fire(a.jodit.ownerWindow, o));
                void 0 !== t[e] && (a.lastTuple && a.lastTuple.element.removeEventListener("load", a.lastTuple.callback), a.lastTuple = s.appendScript(t[e], function() {
                    a.isDestructed || a.loadNext(e + 1, t, o, i)
                }, i, a.jodit.ownerDocument))
            }, a.insertHTML = function(e) {
                if (a.mirror.selectionStart || 0 === a.mirror.selectionStart) {
                    var t = a.mirror.selectionEnd;
                    a.mirror.value = a.mirror.value.substring(0, a.mirror.selectionStart) + e + a.mirror.value.substring(t, a.mirror.value.length)
                } else a.mirror.value += a.mirror;
                a.toWYSIWYG()
            }, a.fromWYSIWYG = function(e) {
                if (void 0 === e && (e = !1), !a.__lock || !0 === e) {
                    a.__lock = !0;
                    var t = a.jodit.getEditorValue(!1);
                    t !== a.getMirrorValue() && a.setMirrorValue(t), a.__lock = !1
                }
            }, a.toWYSIWYG = function() {
                if (!a.__lock) {
                    var e = a.getMirrorValue();
                    e !== a.__oldMirrorValue && (a.__lock = !0, a.jodit.setEditorValue(e), a.__lock = !1, a.__oldMirrorValue = e)
                }
            }, a.getNormalPosition = function(e, t) {
                for (var o = e; 0 < o;) {
                    if ("<" === t[--o] && void 0 !== t[o + 1] && t[o + 1].match(/[\w\/]+/i)) return o;
                    if (">" === t[o]) return e
                }
                return e
            }, a.__clear = function(e) {
                return e.replace(u.INVISIBLE_SPACE_REG_EXP, "")
            }, a.selectAll = function() {
                a.mirror.select()
            }, a.onSelectAll = function(e) {
                if ("selectall" == e.toLowerCase() && a.jodit.getRealMode() === r.MODE_SOURCE) return a.selectAll(), !1
            }, a.getSelectionStart = function() {
                return a.mirror.selectionStart
            }, a.getSelectionEnd = function() {
                return a.mirror.selectionEnd
            }, a.saveSelection = function() {
                if (a.jodit.getRealMode() === u.MODE_WYSIWYG) a.selInfo = a.jodit.selection.save() || [], a.jodit.setEditorValue(), a.fromWYSIWYG(!0);
                else {
                    a.selInfo.length = 0;
                    var e = a.getMirrorValue();
                    if (a.getSelectionStart() === a.getSelectionEnd()) {
                        var t = a.jodit.selection.marker(!0);
                        a.selInfo[0] = {
                            startId: t.id,
                            collapsed: !0,
                            startMarker: t.outerHTML
                        };
                        var o = a.getNormalPosition(a.getSelectionStart(), a.getMirrorValue());
                        a.setMirrorValue(e.substr(0, o) + a.__clear(a.selInfo[0].startMarker) + e.substr(o))
                    } else {
                        var i = a.jodit.selection.marker(!0),
                            n = a.jodit.selection.marker(!1);
                        a.selInfo[0] = {
                            startId: i.id,
                            endId: n.id,
                            collapsed: !1,
                            startMarker: a.__clear(i.outerHTML),
                            endMarker: a.__clear(n.outerHTML)
                        }, o = a.getNormalPosition(a.getSelectionStart(), e);
                        var r = a.getNormalPosition(a.getSelectionEnd(), e);
                        a.setMirrorValue(e.substr(0, o) + a.selInfo[0].startMarker + e.substr(o, r - o) + a.selInfo[0].endMarker + e.substr(r))
                    }
                    a.toWYSIWYG()
                }
            }, a.restoreSelection = function() {
                if (a.selInfo.length) {
                    if (a.jodit.getRealMode() === u.MODE_WYSIWYG) return a.__lock = !0, a.jodit.selection.restore(a.selInfo), void(a.__lock = !1);
                    var e = a.getMirrorValue(),
                        t = 0,
                        o = 0;
                    try {
                        a.selInfo[0].startMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="start"[^>]*>[<>]*?<\/span>/gim, a.tempMarkerStart)), a.selInfo[0].endMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="end"[^>]*>[<>]*?<\/span>/gim, a.tempMarkerEnd)), a.jodit.ownerWindow.html_beautify && a.jodit.options.beautifyHTML && (e = a.jodit.ownerWindow.html_beautify(e)), o = t = e.indexOf(a.tempMarkerStart), e = e.replace(a.tempMarkerStartReg, ""), a.selInfo[0].collapsed && -1 !== t || (o = e.indexOf(a.tempMarkerEnd), -1 === t && (t = o)), e = e.replace(a.tempMarkerEndReg, "")
                    } finally {
                        e = e.replace(a.tempMarkerEndReg, "").replace(a.tempMarkerStartReg, "")
                    }
                    a.setMirrorValue(e), a.setMirrorSelectionRange(t, o), a.toWYSIWYG(), a.setFocusToMirror()
                }
            }, a.__proxyOnFocus = function(e) {
                a.jodit.events.fire("focus", e)
            }, a.__proxyOnMouseDown = function(e) {
                a.jodit.events.fire("mousedown", e)
            }, a.setMirrorSelectionRange = function(e, t) {
                a.mirror.setSelectionRange(e, t)
            }, a.onReadonlyReact = function() {
                var e = a.jodit.options.readonly;
                e ? a.mirror.setAttribute("readonly", "true") : a.mirror.removeAttribute("readonly"), a.aceEditor && a.aceEditor.setReadOnly(e)
            }, a
        }
        t.source = h
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            f = o(2),
            l = o(13);
        i.Config.prototype.usePopupForSpecialCharacters = !1, i.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], i.Config.prototype.controls.symbol = {
            icon: "omega",
            hotkeys: ["ctrl+shift+i", "cmd+shift+i"],
            tooltip: "Insert Special Character",
            popup: function(e, t, o, i) {
                var n = e.events.fire("generateSpecialCharactersTable.symbols");
                if (n) {
                    if (e.options.usePopupForSpecialCharacters) {
                        var r = e.ownerDocument.createElement("div");
                        return r.classList.add("jodit_symbols"), r.appendChild(n), e.events.on(n, "close_dialog", i), r
                    }
                    var a = l.Alert(n, e.i18n("Select Special Character"), void 0, "jodit_symbols"),
                        s = n.querySelector("a");
                    s && s.focus(), e.events.on("beforeDestruct", function() {
                        a && a.close()
                    })
                }
            }
        }, t.symbols = function(d) {
            var u = this;
            this.countInRow = 17, d.events.on("generateSpecialCharactersTable.symbols", function() {
                for (var e = d.create.fromHTML('<div class="jodit_symbols-container"><div class="jodit_symbols-container_table"><table><tbody></tbody></table></div><div class="jodit_symbols-container_preview"><div class="jodit_symbols-preview"></div></div></div>'), t = e.querySelector(".jodit_symbols-preview"), o = e.querySelector("table").tBodies[0], r = [], i = 0; i < d.options.specialCharacters.length;) {
                    for (var n = d.create.element("tr"), a = 0; a < u.countInRow && i < d.options.specialCharacters.length; a += 1, i += 1) {
                        var s = d.create.element("td"),
                            l = d.create.fromHTML('<a\n                                    data-index="' + i + '"\n                                    data-index-j="' + a + '"\n                                    href="javascript:void(0)"\n                                    role="option"\n                                    tabindex="-1"\n                                >' + d.options.specialCharacters[i] + "</a>");
                        r.push(l), s.appendChild(l), n.appendChild(s)
                    }
                    o.appendChild(n)
                }
                var c = u;
                return d.events.on(r, "focus", function() {
                    t.innerHTML = this.innerHTML
                }).on(r, "mousedown", function(e) {
                    this && "A" === this.nodeName && (d.selection.focus(), d.selection.insertHTML(this.innerHTML), d.events.fire(this, "close_dialog"), e && e.preventDefault(), e && e.stopImmediatePropagation())
                }).on(r, "mouseenter", function() {
                    this && "A" === this.nodeName && this.focus()
                }).on(r, "keydown", function(e) {
                    var t = e.target;
                    if (t && "A" === t.nodeName) {
                        var o = parseInt(t.getAttribute("data-index") || "0", 10),
                            i = parseInt(t.getAttribute("data-index-j") || "0", 10),
                            n = void 0;
                        switch (e.which) {
                            case f.KEY_UP:
                            case f.KEY_DOWN:
                                void 0 === r[n = e.which === f.KEY_UP ? o - c.countInRow : o + c.countInRow] && r.length - 1 < (n = e.which === f.KEY_UP ? Math.floor(r.length / c.countInRow) * c.countInRow + i : i) && (n -= c.countInRow), r[n] && r[n].focus();
                                break;
                            case f.KEY_RIGHT:
                            case f.KEY_LEFT:
                                void 0 === r[n = e.which === f.KEY_LEFT ? o - 1 : o + 1] && (n = e.which === f.KEY_LEFT ? r.length - 1 : 0), r[n] && r[n].focus();
                                break;
                            case f.KEY_ENTER:
                                d.events.fire(t, "mousedown"), e.stopImmediatePropagation(), e.preventDefault()
                        }
                    }
                }), e
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(7),
            a = o(19);
        n.Config.prototype.commandToHotkeys = {
            removeFormat: ["ctrl+shift+m", "cmd+shift+m"],
            insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"],
            insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"],
            selectall: ["ctrl+a", "cmd+a"]
        };
        var s, l = (i.__extends(c, s = r.Plugin), c.prototype.afterInit = function(o) {
            var i = this;
            Object.keys(o.options.commandToHotkeys).forEach(function(e) {
                var t = o.options.commandToHotkeys[e];
                t && o.registerHotkeyToCommand(t, e)
            });
            var n = !1;
            o.events.on("keydown.hotkeys", function(e) {
                var t = i.onKeyPress(e);
                if (!1 === i.jodit.events.fire(t + ".hotkey", e.type)) return n = !0, o.events.stopPropagation("keydown"), !1
            }, void 0, void 0, !0).on("keyup.hotkeys", function() {
                if (n) return n = !1, o.events.stopPropagation("keyup"), !1
            }, void 0, void 0, !0)
        }, c.prototype.beforeDestruct = function(e) {
            e.events && e.events.off(".hotkeys")
        }, c);

        function c() {
            var n = null !== s && s.apply(this, arguments) || this;
            return n.onKeyPress = function(t) {
                var o = n.specialKeys[t.which],
                    e = (t.key || String.fromCharCode(t.which)).toLowerCase(),
                    i = [o || e];
                return ["alt", "ctrl", "shift", "meta"].forEach(function(e) {
                    t[e + "Key"] && o !== e && i.push(e)
                }), a.normalizeKeyAliases(i.join("+"))
            }, n.specialKeys = {
                8: "backspace",
                9: "tab",
                10: "return",
                13: "return",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "del",
                59: ";",
                61: "=",
                91: "meta",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                144: "numlock",
                145: "scroll",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, n
        }
        t.hotkeys = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            c = o(2),
            r = o(7),
            b = o(0),
            f = o(28),
            y = o(4),
            a = o(5);
        n.Config.prototype.useTableProcessor = !0, n.Config.prototype.useExtraClassesOptions = !0, n.Config.prototype.controls.table = {
            data: {
                cols: 10,
                rows: 10,
                classList: {
                    "table table-bordered": "Bootstrap Bordered",
                    "table table-striped": "Bootstrap Striped",
                    "table table-dark": "Bootstrap Dark"
                }
            },
            popup: function(v, e, i, m, t) {
                var n = i.data && i.data.rows ? i.data.rows : 10,
                    g = i.data && i.data.cols ? i.data.cols : 10,
                    o = v.create.fromHTML('<form class="jodit_form jodit_form_inserter"><label><span>1</span> &times; <span>1</span></label><div class="jodit_form-table-creator-box"><div class="jodit_form-container"></div><div class="jodit_form-options">' + function() {
                        if (!v.options.useExtraClassesOptions) return "";
                        var t = [];
                        if (i.data) {
                            var o = i.data.classList;
                            Object.keys(o).forEach(function(e) {
                                t.push('<label><input value="' + e + '" type="checkbox"/>' + o[e] + "</label>")
                            })
                        }
                        return t.join("")
                    }() + "</div></div></form>"),
                    s = o.querySelectorAll("span")[0],
                    l = o.querySelectorAll("span")[1],
                    r = o.querySelector(".jodit_form-container"),
                    a = o.querySelector(".jodit_form-table-creator-box"),
                    _ = o.querySelector(".jodit_form-options"),
                    c = [];
                return r.addEventListener("mousemove", function(e, t) {
                    var o = e.target;
                    if (o && "DIV" === o.tagName) {
                        for (var i = void 0 === t || isNaN(t) ? parseInt(o.getAttribute("data-index") || "0", 10) : t || 0, n = Math.ceil((i + 1) / g), r = i % g + 1, a = 0; a < c.length; a += 1) c[a].className = r < a % g + 1 || n < Math.ceil((a + 1) / g) ? "" : "hovered";
                        l.innerText = "" + r, s.innerText = "" + n
                    }
                }), v.events.on(r, "touchstart mousedown", function(e) {
                    var t = e.target;
                    if (e.preventDefault(), e.stopImmediatePropagation(), "DIV" === t.tagName) {
                        var o = parseInt(t.getAttribute("data-index") || "0", 10),
                            i = Math.ceil((o + 1) / g),
                            n = o % g + 1,
                            r = v.create.inside,
                            a = r.element("tbody"),
                            s = r.element("table");
                        s.appendChild(a), s.style.width = "100%";
                        for (var l, c, d = null, u = 1; u <= i; u += 1) {
                            l = r.element("tr");
                            for (var f = 1; f <= n; f += 1) c = r.element("td"), d = d || c, c.appendChild(r.element("br")), l.appendChild(r.text("\n")), l.appendChild(r.text("\t")), l.appendChild(c);
                            a.appendChild(r.text("\n")), a.appendChild(l)
                        }
                        var p = v.selection.current();
                        if (p && v.selection.isCollapsed()) {
                            var h = b.Dom.closest(p, function(e) {
                                return b.Dom.isBlock(e, v.editorWindow)
                            }, v.editor);
                            h && h !== v.editor && !h.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/) && v.selection.setCursorAfter(h)
                        }
                        y.$$("input[type=checkbox]:checked", _).forEach(function(e) {
                            e.value.split(/[\s]+/).forEach(function(e) {
                                s.classList.add(e)
                            })
                        }), v.selection.insertNode(r.text("\n")), v.selection.insertNode(s, !1), d && (v.selection.setCursorIn(d), y.scrollIntoView(d, v.editor, v.editorDocument)), m()
                    }
                }), t && t.parentToolbar && v.events.off(t.parentToolbar.container, "afterOpenPopup.tableGenerator").on(t.parentToolbar.container, "afterOpenPopup.tableGenerator", function() {
                    ! function() {
                        var e = n * g;
                        if (e < c.length) {
                            for (var t = e; t < c.length; t += 1) b.Dom.safeRemove(c[t]), delete c[t];
                            c.length = e
                        }
                        for (t = 0; t < e; t += 1)
                            if (!c[t]) {
                                var o = v.create.div();
                                o.setAttribute("data-index", "" + t), c.push(o)
                            }
                        c.forEach(function(e) {
                            r.appendChild(e)
                        });
                        var i = (c[0].offsetWidth || 18) * g;
                        r.style.width = i + "px", a.style.width = i + _.offsetWidth + 1 + "px"
                    }(), c[0] && (c[0].className = "hovered")
                }, "", !0), o
            },
            tooltip: "Insert table"
        };
        var s, l = (i.__extends(p, s = r.Plugin), p.isCell = function(e) {
            return !!e && /^TD|TH$/i.test(e.nodeName)
        }, p.prototype.showResizer = function() {
            clearTimeout(this.hideTimeout), this.__resizerHandler.style.display = "block"
        }, p.prototype.hideResizer = function() {
            var e = this;
            clearTimeout(this.hideTimeout), this.hideTimeout = a.setTimeout(function() {
                e.__resizerHandler.style.display = "none"
            }, this.jodit.defaultTimeout)
        }, p.prototype.__deSelectAll = function(e, t) {
            var o = f.Table.getAllSelectedCells(e || this.jodit.editor);
            o.length && o.forEach(function(e) {
                t && t === e || f.Table.restoreSelection(e)
            })
        }, p.prototype.__setWorkCell = function(e, t) {
            void 0 === t && (t = null), this.__wholeTable = t, this.__workCell = e, this.__workTable = b.Dom.up(e, function(e) {
                return e && "TABLE" === e.nodeName
            }, this.jodit.editor)
        }, p.prototype.__calcResizerPosition = function(e, t, o, i) {
            void 0 === o && (o = 0), void 0 === i && (i = 0);
            var n = y.offset(t, this.jodit, this.jodit.editorDocument);
            if (c.NEARBY < o && c.NEARBY < n.width - o) this.hideResizer();
            else {
                var r = y.offset(this.__resizerHandler.parentNode || this.jodit.ownerDocument.documentElement, this.jodit, this.jodit.ownerDocument, !0),
                    a = y.offset(e, this.jodit, this.jodit.editorDocument);
                if (this.__resizerHandler.style.left = (c.NEARBY < o ? n.left + n.width : n.left) - r.left + i + "px", this.__resizerHandler.style.height = a.height + "px", this.__resizerHandler.style.top = a.top - r.top + "px", this.showResizer(), c.NEARBY < o) {
                    var s = b.Dom.next(t, p.isCell, t.parentNode);
                    this.__setWorkCell(t, !!s && null)
                } else {
                    var l = b.Dom.prev(t, p.isCell, t.parentNode);
                    l ? this.__setWorkCell(l) : this.__setWorkCell(t, !0)
                }
            }
        }, p.prototype.observe = function(c) {
            var d, u = this;
            c[this.__key] = !0, this.jodit.events.on(c, "mousedown.table touchstart.table", function(e) {
                if (!u.jodit.options.readonly) {
                    var t = b.Dom.up(e.target, p.isCell, c);
                    t && t instanceof u.jodit.editorWindow.HTMLElement && (t.firstChild || t.appendChild(u.jodit.editorDocument.createElement("br")), f.Table.addSelected(d = t), u.__selectMode = !0)
                }
            }).on(c, "mouseleave.table", function(e) {
                u.__resizerHandler && u.__resizerHandler !== e.relatedTarget && u.hideResizer()
            }).on(c, "mousemove.table touchmove.table", function(e) {
                if (!u.jodit.options.readonly && !u.__drag && !u.jodit.isLockedNotBy(u.__key)) {
                    var t = b.Dom.up(e.target, p.isCell, c);
                    if (t)
                        if (u.__selectMode) {
                            if (t !== d) {
                                u.jodit.lock(u.__key);
                                var o = u.jodit.selection.sel;
                                o && o.removeAllRanges(), e.preventDefault && e.preventDefault()
                            }
                            u.__deSelectAll(c);
                            for (var i = f.Table.getSelectedBound(c, [t, d]), n = f.Table.formalMatrix(c), r = i[0][0]; r <= i[1][0]; r += 1)
                                for (var a = i[0][1]; a <= i[1][1]; a += 1) f.Table.addSelected(n[r][a]);
                            var s = n[i[1][0]][i[1][1]],
                                l = n[i[0][0]][i[0][1]];
                            u.jodit.events.fire("showPopup", c, function() {
                                var e = y.offset(l, u.jodit, u.jodit.editorDocument),
                                    t = y.offset(s, u.jodit, u.jodit.editorDocument);
                                return {
                                    left: e.left,
                                    top: e.top,
                                    width: t.left - e.left + t.width,
                                    height: t.top - e.top + t.height
                                }
                            }), e.stopPropagation()
                        } else u.__calcResizerPosition(c, t, e.offsetX)
                }
            }), this.__addResizer()
        }, p.prototype.afterInit = function(r) {
            var a = this;
            r.options.useTableProcessor && r.events.on(this.jodit.ownerWindow, "mouseup.table touchend.table", function() {
                if ((a.__selectMode || a.__drag) && (a.__selectMode = !1, a.jodit.unlock()), a.__resizerHandler && a.__drag) {
                    if (a.__drag = !1, a.__resizerHandler.classList.remove("jodit_table_resizer-moved"), null === a.__wholeTable) {
                        var e = [];
                        f.Table.setColumnWidthByDelta(a.__workTable, f.Table.formalCoordinate(a.__workTable, a.__workCell, !0)[1], a.__resizerDelta, !0, e);
                        var t = b.Dom.next(a.__workCell, p.isCell, a.__workCell.parentNode);
                        f.Table.setColumnWidthByDelta(a.__workTable, f.Table.formalCoordinate(a.__workTable, t)[1], -a.__resizerDelta, !1, e)
                    } else {
                        var o = a.__workTable.offsetWidth,
                            i = y.getContentWidth(a.__workTable.parentNode, a.jodit.editorWindow);
                        if (a.__wholeTable) {
                            var n = parseInt(a.jodit.editorWindow.getComputedStyle(a.__workTable).marginLeft || "0", 10);
                            a.__workTable.style.width = (o - a.__resizerDelta) / i * 100 + "%", a.__workTable.style.marginLeft = (n + a.__resizerDelta) / i * 100 + "%"
                        } else a.__workTable.style.width = (o + a.__resizerDelta) / i * 100 + "%"
                    }
                    r.setEditorValue(), r.selection.focus()
                }
            }).on(this.jodit.ownerWindow, "scroll.table", function() {
                if (a.__drag) {
                    var e = b.Dom.up(a.__workCell, function(e) {
                        return e && "TABLE" === e.nodeName
                    }, r.editor);
                    if (e) {
                        var t = e.getBoundingClientRect();
                        a.__resizerHandler.style.top = t.top + "px"
                    }
                }
            }).on(this.jodit.ownerWindow, "mousedown.table touchend.table", function(e) {
                var t = b.Dom.closest(e.originalEvent.target, "TD|TH", a.jodit.editor),
                    o = null;
                t instanceof a.jodit.editorWindow.HTMLTableCellElement && (o = b.Dom.closest(t, "table", a.jodit.editor)), o ? a.__deSelectAll(o, t instanceof a.jodit.editorWindow.HTMLTableCellElement && t) : a.__deSelectAll()
            }).on("afterGetValueFromEditor.table", function(e) {
                var t = RegExp("([s]*)" + c.JODIT_SELECTED_CELL_MARKER + '="1"', "g");
                t.test(e.value) && (e.value = e.value.replace(t, ""))
            }).on("change.table afterCommand.table afterSetMode.table", function() {
                y.$$("table", r.editor).forEach(function(e) {
                    e[a.__key] || a.observe(e)
                })
            }).on("beforeSetMode.table", function() {
                f.Table.getAllSelectedCells(r.editor).forEach(function(e) {
                    f.Table.restoreSelection(e), f.Table.normalizeTable(b.Dom.closest(e, "table", r.editor))
                })
            }).on("keydown.table", function(e) {
                e.which === c.KEY_TAB && y.$$("table", r.editor).forEach(function(e) {
                    a.__deSelectAll(e)
                })
            }).on("beforeCommand.table", this.onExecCommand.bind(this))
        }, p.prototype.beforeDestruct = function(e) {
            e.events && (e.events.off(this.jodit.ownerWindow, ".table"), e.events.off(".table"))
        }, p);

        function p() {
            var a = null !== s && s.apply(this, arguments) || this;
            return a.__key = "table_processor_observer", a.__selectMode = !1, a.__resizerDelta = 0, a.__drag = !1, a.__addResizer = function() {
                if (!a.__resizerHandler && (a.__resizerHandler = a.jodit.container.querySelector(".jodit_table_resizer"), !a.__resizerHandler)) {
                    a.__resizerHandler = a.jodit.create.div("jodit_table_resizer");
                    var r = 0;
                    a.jodit.events.on(a.__resizerHandler, "mousedown.table touchstart.table", function(e) {
                        a.__drag = !0, r = e.clientX, a.jodit.lock(a.__key), a.__resizerHandler.classList.add("jodit_table_resizer-moved");
                        var i, t = a.__workTable.getBoundingClientRect();
                        if (a.__minX = 0, a.__maxX = 1e6, null !== a.__wholeTable) t = a.__workTable.parentNode.getBoundingClientRect(), a.__minX = t.left, a.__maxX = t.left + t.width;
                        else {
                            var n = f.Table.formalCoordinate(a.__workTable, a.__workCell, !0);
                            f.Table.formalMatrix(a.__workTable, function(e, t, o) {
                                n[1] === o && (i = e.getBoundingClientRect(), a.__minX = Math.max(i.left + c.NEARBY / 2, a.__minX)), n[1] + 1 === o && (i = e.getBoundingClientRect(), a.__maxX = Math.min(i.left + i.width - c.NEARBY / 2, a.__maxX))
                            })
                        }
                        return !1
                    }).on(a.__resizerHandler, "mouseenter.table", function() {
                        clearTimeout(a.hideTimeout)
                    }).on(a.jodit.editorWindow, "mousemove.table touchmove.table", function(e) {
                        if (a.__drag) {
                            var t = e.clientX,
                                o = y.offset(a.__resizerHandler.parentNode || a.jodit.ownerDocument.documentElement, a.jodit, a.jodit.ownerDocument, !0);
                            t < a.__minX && (t = a.__minX), a.__maxX < t && (t = a.__maxX), a.__resizerDelta = t - r + (a.jodit.options.iframe ? o.left : 0), a.__resizerHandler.style.left = t - (a.jodit.options.iframe ? 0 : o.left) + "px";
                            var i = a.jodit.selection.sel;
                            i && i.removeAllRanges(), e.preventDefault && e.preventDefault()
                        }
                    }), a.jodit.workplace.appendChild(a.__resizerHandler)
                }
            }, a.onExecCommand = function(e) {
                if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e)) {
                    e = e.replace("table", "");
                    var t = f.Table.getAllSelectedCells(a.jodit.editor);
                    if (t.length) {
                        var o = t.shift();
                        if (!o) return;
                        var i = b.Dom.closest(o, "table", a.jodit.editor);
                        switch (e) {
                            case "splitv":
                                f.Table.splitVertical(i);
                                break;
                            case "splitg":
                                f.Table.splitHorizontal(i);
                                break;
                            case "merge":
                                f.Table.mergeSelected(i);
                                break;
                            case "empty":
                                f.Table.getAllSelectedCells(a.jodit.editor).forEach(function(e) {
                                    return e.innerHTML = ""
                                });
                                break;
                            case "bin":
                                b.Dom.safeRemove(i);
                                break;
                            case "binrow":
                                f.Table.removeRow(i, o.parentNode.rowIndex);
                                break;
                            case "bincolumn":
                                f.Table.removeColumn(i, o.cellIndex);
                                break;
                            case "addcolumnafter":
                            case "addcolumnbefore":
                                f.Table.appendColumn(i, o.cellIndex, "addcolumnafter" === e);
                                break;
                            case "addrowafter":
                            case "addrowbefore":
                                f.Table.appendRow(i, o.parentNode, "addrowafter" === e)
                        }
                    }
                    return !1
                }
            }, a
        }
        t.TableProcessor = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = o(2),
            p = o(0),
            h = o(28);
        t.tableKeyboardNavigation = function(u) {
            u.events.on("keydown", function(t) {
                var e, i;
                if ((t.which === f.KEY_TAB || t.which === f.KEY_LEFT || t.which === f.KEY_RIGHT || t.which === f.KEY_UP || t.which === f.KEY_DOWN) && (e = u.selection.current(), i = p.Dom.up(e, function(e) {
                        return e && e.nodeName && /^td|th$/i.test(e.nodeName)
                    }, u.editor))) {
                    var o = u.selection.range;
                    if (t.which === f.KEY_TAB || e === i || (t.which !== f.KEY_LEFT && t.which !== f.KEY_UP || !(p.Dom.prev(e, function(e) {
                            return t.which === f.KEY_UP ? e && "BR" === e.nodeName : !!e
                        }, i) || t.which !== f.KEY_UP && e.nodeType === Node.TEXT_NODE && 0 !== o.startOffset)) && (t.which !== f.KEY_RIGHT && t.which !== f.KEY_DOWN || !(p.Dom.next(e, function(e) {
                            return t.which === f.KEY_DOWN ? e && "BR" === e.nodeName : !!e
                        }, i) || t.which !== f.KEY_DOWN && e.nodeType === Node.TEXT_NODE && e.nodeValue && o.startOffset !== e.nodeValue.length))) {
                        var n = p.Dom.up(i, function(e) {
                                return e && /^table$/i.test(e.nodeName)
                            }, u.editor),
                            r = null;
                        switch (t.which) {
                            case f.KEY_TAB:
                            case f.KEY_LEFT:
                                var a = t.which === f.KEY_LEFT || t.shiftKey ? "prev" : "next";
                                (r = p.Dom[a](i, function(e) {
                                    return e && /^td|th$/i.test(e.tagName)
                                }, n)) || (h.Table.appendRow(n, "next" != a && n.querySelector("tr"), "next" == a), r = p.Dom[a](i, function(e) {
                                    return e && p.Dom.isCell(e, u.editorWindow)
                                }, n));
                                break;
                            case f.KEY_UP:
                            case f.KEY_DOWN:
                                var s = 0,
                                    l = 0,
                                    c = h.Table.formalMatrix(n, function(e, t, o) {
                                        e === i && (s = t, l = o)
                                    });
                                t.which === f.KEY_UP ? void 0 !== c[s - 1] && (r = c[s - 1][l]) : void 0 !== c[s + 1] && (r = c[s + 1][l])
                        }
                        if (r) {
                            if (r.firstChild) t.which === f.KEY_TAB ? u.selection.select(r, !0) : u.selection.setCursorIn(r, t.which === f.KEY_RIGHT || t.which === f.KEY_DOWN);
                            else {
                                var d = u.editorDocument.createElement("br");
                                r.appendChild(d), u.selection.setCursorBefore(d)
                            }
                            return !1
                        }
                    }
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            u = o(2),
            r = o(2),
            p = o(0),
            a = o(6),
            s = o(7),
            l = o(5),
            h = o(9);
        n.Config.prototype.useSearch = !0;
        var c, d = (i.__extends(v, c = s.Plugin), v.getSomePartOfStringIndex = function(e, t, o) {
            return void 0 === o && (o = !0), this.findSomePartOfString(e, t, o, !0)
        }, v.findSomePartOfString = function(e, t, o, i) {
            void 0 === o && (o = !0), void 0 === i && (i = !1), e = h.trim(e.toLowerCase().replace(u.SPACE_REG_EXP, " ")), t = t.toLowerCase();
            for (var n = o ? 0 : t.length - 1, r = o ? 0 : e.length - 1, a = 0, s = null, l = o ? 1 : -1, c = []; void 0 !== t[n]; n += l) {
                var d = e[r] === t[n];
                if (d || null !== s && u.SPACE_REG_EXP.test(t[n]) ? (null !== s && o || (s = n), c.push(t[n]), d && (a += 1, r += l)) : (s = null, a = c.length = 0, r = o ? 0 : e.length - 1), a === e.length) return !i || s
            }
            return i ? null !== s && s : !!c.length && (o ? c.join("") : c.reverse().join(""))
        }, v.prototype.boundAlreadyWas = function(t, e) {
            return e.some(function(e) {
                return e.startContainer === t.startContainer && e.endContainer === t.endContainer && e.startOffset === t.startOffset && e.endOffset === t.endOffset
            }, !1)
        }, v.prototype.tryScrollToElement = function(e) {
            var t = p.Dom.closest(e, function(e) {
                return e && e.nodeType === Node.ELEMENT_NODE
            }, this.jodit.editor);
            (t = t || p.Dom.prev(e, function(e) {
                return e && e.nodeType === Node.ELEMENT_NODE
            }, this.jodit.editor)) && t !== this.jodit.editor && t.scrollIntoView()
        }, v.prototype.afterInit = function(i) {
            var t = this;
            if (i.options.useSearch) {
                var n = this;
                n.searchBox = i.create.fromHTML(n.template);
                var e = n.searchBox.querySelector.bind(n.searchBox);
                n.queryInput = e("input.jodit_search-query"), n.replaceInput = e("input.jodit_search-replace"), n.closeButton = e(".jodit_search_buttons-cancel"), n.nextButton = e(".jodit_search_buttons-next"), n.prevButton = e(".jodit_search_buttons-prev"), n.replaceButton = e(".jodit_search_buttons-replace"), n.counterBox = e(".jodit_search_counts span"), i.workplace.appendChild(this.searchBox), i.events.on(n.closeButton, "click", this.close).on(n.queryInput, "mousedown", function() {
                    i.selection.isFocused() && (i.selection.removeMarkers(), n.selInfo = i.selection.save())
                }).on(n.replaceButton, "click", function(e) {
                    n.findAndReplace(i.selection.current() || i.editor.firstChild, n.queryInput.value), t.updateCounters(), e.preventDefault(), e.stopImmediatePropagation()
                }).on([n.nextButton, n.prevButton], "click", function(e) {
                    i.events.fire(n.nextButton === this ? "searchNext" : "searchPrevious"), e.preventDefault(), e.stopImmediatePropagation()
                }).on(this.queryInput, "keydown", l.debounce(function(e) {
                    switch (e.which) {
                        case u.KEY_ENTER:
                            e.preventDefault(), e.stopImmediatePropagation(), i.events.fire("searchNext") && t.close();
                            break;
                        default:
                            t.updateCounters()
                    }
                }, this.jodit.defaultTimeout)).on(this.jodit.container, "keydown.search", function(e) {
                    if (i.getRealMode() === r.MODE_WYSIWYG) switch (e.which) {
                        case u.KEY_ESC:
                            t.close();
                            break;
                        case u.KEY_F3:
                            n.queryInput.value && (i.events.fire(e.shiftKey ? "searchPrevious" : "searchNext"), e.preventDefault())
                    }
                }).on("beforeSetMode.search", function() {
                    t.close()
                }).on("keydown.search mousedown.search", function() {
                    t.selInfo && (i.selection.removeMarkers(), t.selInfo = null), t.isOpened && (t.current = t.jodit.selection.current(), t.updateCounters())
                }).on("searchNext.search searchPrevious.search", function() {
                    return n.findAndSelect(i.selection.current() || i.editor.firstChild, n.queryInput.value, "searchNext" === i.events.current[i.events.current.length - 1])
                }).on("search.search", function(e, t) {
                    void 0 === t && (t = !0), i.execCommand("search", e, t)
                }), i.registerCommand("search", {
                    exec: function(e, t, o) {
                        return void 0 === o && (o = !0), n.findAndSelect(i.selection.current() || i.editor.firstChild, t || "", o), !1
                    }
                }), i.registerCommand("openSearchDialog", {
                    exec: function() {
                        return n.open(), !1
                    },
                    hotkeys: ["ctrl+f", "cmd+f"]
                }), i.registerCommand("openReplaceDialog", {
                    exec: function() {
                        return i.options.readonly || n.open(!0), !1
                    },
                    hotkeys: ["ctrl+h", "cmd+h"]
                })
            }
        }, v.prototype.beforeDestruct = function(e) {
            p.Dom.safeRemove(this.searchBox), e.events && e.events.off(".search"), e.events && e.events.off(e.container, ".search")
        }, v);

        function v() {
            var f = null !== c && c.apply(this, arguments) || this;
            return f.template = '<div class="jodit_search"><div class="jodit_search_box"><div class="jodit_search_inputs"><input tabindex="0" class="jodit_search-query" placeholder="' + f.jodit.i18n("Search for") + '" type="text"/><input tabindex="0" class="jodit_search-replace" placeholder="' + f.jodit.i18n("Replace with") + '" type="text"/></div><div class="jodit_search_counts"><span>0/0</span></div><div class="jodit_search_buttons"><button tabindex="0" type="button" class="jodit_search_buttons-next">' + a.ToolbarIcon.getIcon("angle-down") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-prev">' + a.ToolbarIcon.getIcon("angle-up") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-cancel">' + a.ToolbarIcon.getIcon("cancel") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-replace">' + f.jodit.i18n("Replace") + "</button></div></div></div>", f.isOpened = !1, f.selInfo = null, f.current = !1, f.eachMap = function(e, t, o) {
                p.Dom.findWithCurrent(e, function(e) {
                    return !!e && t(e)
                }, f.jodit.editor, o ? "nextSibling" : "previousSibling", o ? "firstChild" : "lastChild")
            }, f.updateCounters = function() {
                if (f.isOpened) {
                    f.counterBox.style.display = f.queryInput.value.length ? "inline-block" : "none";
                    var e = f.calcCounts(f.queryInput.value, f.jodit.selection.range);
                    f.counterBox.innerText = e.join("/")
                }
            }, f.calcCounts = function(e, t) {
                void 0 === t && (t = !1);
                for (var o = [], i = 0, n = 0, r = !1, a = f.jodit.editor.firstChild; a && e.length;)
                    if (r = f.find(a, e, !0, 0, r || f.jodit.editorDocument.createRange())) {
                        if (f.boundAlreadyWas(r, o)) break;
                        o.push(r), a = r.startContainer, n += 1, t && f.boundAlreadyWas(t, [r]) && (i = n)
                    } else a = null;
                return [i, n]
            }, f.findAndReplace = function(e, t) {
                var o = f.find(e, t, !0, 0, f.jodit.selection.range);
                if (o && o.startContainer && o.endContainer) {
                    var i = f.jodit.editorDocument.createRange();
                    try {
                        if (o && o.startContainer && o.endContainer) {
                            i.setStart(o.startContainer, o.startOffset), i.setEnd(o.endContainer, o.endOffset), i.deleteContents();
                            var n = f.jodit.editorDocument.createTextNode(f.replaceInput.value);
                            i.insertNode(n), f.jodit.selection.select(n), f.tryScrollToElement(n)
                        }
                    } catch (e) {}
                    return !0
                }
                return !1
            }, f.findAndSelect = function(e, t, o) {
                var i = f.find(e, t, o, 0, f.jodit.selection.range);
                if (i && i.startContainer && i.endContainer) {
                    var n = f.jodit.editorDocument.createRange();
                    try {
                        n.setStart(i.startContainer, i.startOffset), n.setEnd(i.endContainer, i.endOffset), f.jodit.selection.selectRange(n)
                    } catch (e) {}
                    return f.tryScrollToElement(i.startContainer), f.current = i.startContainer, f.updateCounters(), !0
                }
                return !1
            }, f.find = function(e, a, s, l, c) {
                if (e && a.length) {
                    var d = "",
                        u = {
                            startContainer: null,
                            startOffset: null,
                            endContainer: null,
                            endOffset: null
                        };
                    if (f.eachMap(e, function(e) {
                            if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.nodeValue.length) {
                                var t = e.nodeValue;
                                s || e !== c.startContainer ? s && e === c.endContainer && (t = l ? t.substr(0, c.startOffset) : t.substr(c.endOffset)) : t = l ? t.substr(c.endOffset) : t.substr(0, c.startOffset);
                                var o = s ? d + t : t + d,
                                    i = v.findSomePartOfString(a, o, s);
                                if (!1 !== i) {
                                    var n = v.findSomePartOfString(a, t, s);
                                    !0 === n ? n = h.trim(a) : !1 === n && !0 === (n = v.findSomePartOfString(t, a, s)) && (n = h.trim(t));
                                    var r = v.getSomePartOfStringIndex(a, t, s) || 0;
                                    if ((s && !l || !s && l) && 0 < e.nodeValue.length - t.length && (r += e.nodeValue.length - t.length), null === u.startContainer && (u.startContainer = e, u.startOffset = r), !0 === i) return u.endContainer = e, u.endOffset = r, u.endOffset += n.length, !0;
                                    d = o
                                } else d = "", u = {
                                    startContainer: null,
                                    startOffset: null,
                                    endContainer: null,
                                    endOffset: null
                                }
                            } else p.Dom.isBlock(e, f.jodit.editorWindow) && "" !== d && (d = s ? d + " " : " " + d);
                            return !1
                        }, s), u.startContainer && u.endContainer) return u;
                    if (!l) return f.current = s ? f.jodit.editor.firstChild : f.jodit.editor.lastChild, f.find(f.current, a, s, l + 1, c)
                }
                return !1
            }, f.open = function(e) {
                void 0 === e && (e = !1), f.isOpened || (f.searchBox.classList.add("jodit_search-active"), f.isOpened = !0), f.jodit.events.fire("hidePopup"), f.searchBox.classList.toggle("jodit_search-and-replace", e), f.current = f.jodit.selection.current(), f.selInfo = f.jodit.selection.save();
                var t = "" + (f.jodit.selection.sel || "");
                t && (f.queryInput.value = t), f.updateCounters(), t ? f.queryInput.select() : f.queryInput.focus()
            }, f.close = function() {
                f.isOpened && (f.selInfo && (f.jodit.selection.restore(f.selInfo), f.selInfo = null), f.searchBox.classList.remove("jodit_search-active"), f.isOpened = !1)
            }, f
        }
        t.search = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(2),
            a = o(7),
            s = o(10),
            l = o(23),
            c = o(0);
        n.Config.prototype.toolbarSticky = !0, n.Config.prototype.toolbarDisableStickyForMobile = !0, n.Config.prototype.toolbarStickyOffset = 0;
        var d, u = (i.__extends(f, d = a.Plugin), f.prototype.isMobile = function() {
            return this.jodit && this.jodit.options && this.jodit.container && this.jodit.container.offsetWidth <= this.jodit.options.sizeSM
        }, f.prototype.afterInit = function(i) {
            var n = this;
            i.events.on(i.ownerWindow, "scroll wheel mousewheel resize", function() {
                var e = i.ownerWindow.pageYOffset || i.ownerDocument.documentElement && i.ownerDocument.documentElement.scrollTop || 0,
                    t = l.offset(i.container, i, i.ownerDocument, !0),
                    o = i.getMode() === r.MODE_WYSIWYG && t.top < e + i.options.toolbarStickyOffset && e + i.options.toolbarStickyOffset < t.top + t.height && !(i.options.toolbarDisableStickyForMobile && n.isMobile());
                i.options.toolbarSticky && i.options.toolbar && (o ? n.addSticky(i.toolbar.container) : n.removeSticky(i.toolbar.container)), i.events.fire("toggleSticky", o)
            })
        }, f.prototype.beforeDestruct = function(e) {
            c.Dom.safeRemove(this.dummyBox)
        }, f);

        function f() {
            var t = null !== d && d.apply(this, arguments) || this;
            return t.isToolbarSticked = !1, t.createDummy = function(e) {
                t.dummyBox || (t.dummyBox = t.jodit.create.div(), t.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), t.jodit.container.insertBefore(t.dummyBox, e))
            }, t.addSticky = function(e) {
                t.isToolbarSticked || (t.createDummy(e), t.jodit.container.classList.add("jodit_sticky"), t.isToolbarSticked = !0), s.css(e, {
                    top: t.jodit.options.toolbarStickyOffset,
                    width: t.jodit.container.offsetWidth
                }), s.css(t.dummyBox, {
                    height: e.offsetHeight
                })
            }, t.removeSticky = function(e) {
                t.isToolbarSticked && (s.css(e, {
                    width: "",
                    top: ""
                }), t.jodit.container.classList.remove("jodit_sticky"), t.isToolbarSticked = !1)
            }, t
        }
        t.sticky = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(2),
            a = o(5),
            s = o(7),
            l = o(0);
        n.Config.prototype.showCharsCounter = !0, n.Config.prototype.showWordsCounter = !0;
        var c, d = (i.__extends(u, c = s.Plugin), u.prototype.afterInit = function() {
            this.jodit.options.showCharsCounter && (this.charCounter = this.jodit.create.span(), this.jodit.statusbar.append(this.charCounter, !0)), this.jodit.options.showWordsCounter && (this.wordCounter = this.jodit.create.span(), this.jodit.statusbar.append(this.wordCounter, !0)), this.jodit.events.on("change", this.calc), this.calc()
        }, u.prototype.beforeDestruct = function() {
            l.Dom.safeRemove(this.charCounter), l.Dom.safeRemove(this.wordCounter), this.charCounter = null, this.wordCounter = null
        }, u);

        function u() {
            var t = null !== c && c.apply(this, arguments) || this;
            return t.calc = a.throttle(function() {
                var e = t.jodit.getEditorText();
                t.jodit.options.showCharsCounter && t.charCounter && (t.charCounter.innerText = t.jodit.i18n("Chars: %d", e.replace(r.SPACE_REG_EXP, "").length)), t.jodit.options.showWordsCounter && t.wordCounter && (t.wordCounter.innerText = t.jodit.i18n("Words: %d", e.replace(r.INVISIBLE_SPACE_REG_EXP, "").split(r.SPACE_REG_EXP).filter(function(e) {
                    return e.length
                }).length))
            }, t.jodit.defaultTimeout), t
        }
        t.stat = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(2),
            s = o(38),
            l = o(0),
            c = o(5),
            d = o(11),
            a = o(7),
            u = o(26);
        n.Config.prototype.controls.selectall = {
            icon: "select-all",
            command: "selectall",
            tooltip: "Select all"
        }, n.Config.prototype.showXPathInStatusbar = !0;
        var f, p = (i.__extends(h, f = a.Plugin), h.prototype.afterInit = function() {
            var e = this;
            this.jodit.options.showXPathInStatusbar && (this.container = this.jodit.create.element("ul"), this.container.classList.add("jodit_xpath"), this.jodit.statusbar.append(this.container), this.jodit.events.on("mouseup.xpath change.xpath keydown.xpath changeSelection.xpath", this.calcPath).on("afterSetMode.xpath afterInit.xpath", function() {
                e.jodit.getRealMode() === r.MODE_WYSIWYG ? e.calcPath() : (e.container && (e.container.innerHTML = r.INVISIBLE_SPACE), e.appendSelectAll())
            }), this.calcPath())
        }, h.prototype.beforeDestruct = function() {
            this.jodit && this.jodit.events && this.jodit.events.off(".xpath"), this.removeSelectAll(), this.menu && this.menu.destruct(), l.Dom.safeRemove(this.container), this.menu = null, this.container = null
        }, h);

        function h() {
            var a = null !== f && f.apply(this, arguments) || this;
            return a.onContext = function(e, t) {
                return a.menu || (a.menu = new s.ContextMenu(a.jodit)), a.menu.show(t.clientX, t.clientY, [{
                    icon: "bin",
                    title: e === a.jodit.editor ? "Clear" : "Remove",
                    exec: function() {
                        e !== a.jodit.editor ? l.Dom.safeRemove(e) : a.jodit.value = "", a.jodit.setEditorValue()
                    }
                }, {
                    icon: "select-all",
                    title: "Select",
                    exec: function() {
                        a.jodit.selection.select(e)
                    }
                }]), !1
            }, a.onSelectPath = function(e, t) {
                a.jodit.selection.focus();
                var o = t.target.getAttribute("data-path") || "/";
                if ("/" === o) return a.jodit.execCommand("selectall"), !1;
                try {
                    var i = a.jodit.editorDocument.evaluate(o, a.jodit.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                    if (i) return a.jodit.selection.select(i), !1
                } catch (e) {}
                return a.jodit.selection.select(e), !1
            }, a.tpl = function(e, t, o, i) {
                var n = a.jodit.create.fromHTML('<li><a role="button" data-path="' + t + '" href="javascript:void(0)" title="' + i + '" tabindex="-1">' + o + "</a></li>"),
                    r = n.firstChild;
                return a.jodit.events.on(r, "click", a.onSelectPath.bind(a, e)).on(r, "contextmenu", a.onContext.bind(a, e)), n
            }, a.removeSelectAll = function() {
                a.selectAllButton && (a.selectAllButton.destruct(), delete a.selectAllButton)
            }, a.appendSelectAll = function() {
                a.removeSelectAll(), a.selectAllButton = new u.ToolbarButton(a.jodit, i.__assign({
                    name: "selectall"
                }, a.jodit.options.controls.selectall)), a.container && a.container.insertBefore(a.selectAllButton.container, a.container.firstChild)
            }, a.calcPathImd = function() {
                if (!a.isDestructed) {
                    var t, o, i, e = a.jodit.selection.current();
                    a.container && (a.container.innerHTML = r.INVISIBLE_SPACE), e && l.Dom.up(e, function(e) {
                        e && a.jodit.editor !== e && e.nodeType !== Node.TEXT_NODE && (t = e.nodeName.toLowerCase(), o = d.getXPathByElement(e, a.jodit.editor).replace(/^\//, ""), i = a.tpl(e, o, t, a.jodit.i18n("Select %s", t)), a.container && a.container.insertBefore(i, a.container.firstChild))
                    }, a.jodit.editor), a.appendSelectAll()
                }
            }, a.calcPath = c.debounce(a.calcPathImd, 2 * a.jodit.defaultTimeout), a.container = null, a.menu = null, a
        }
        t.xpath = p
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            n = o(3),
            r = o(4),
            a = o(7),
            s = o(0);
        n.Config.prototype.draggableTags = ["img", "a", "jodit-media", "jodit"];
        var l, c = (i.__extends(d, l = a.Plugin), d.prototype.afterInit = function() {
            this.dragList = this.jodit.options.draggableTags ? r.splitArray(this.jodit.options.draggableTags).filter(function(e) {
                return e
            }).map(function(e) {
                return e.toLowerCase()
            }) : [], this.dragList.length && this.jodit.events.on(this.jodit.editor, "mousemove touchmove", this.onDrag).on(this.jodit.editor, "mousedown touchstart dragstart", this.onDragStart).on("mouseup touchend", this.onDrop).on(window, "mouseup touchend", this.onDragEnd)
        }, d.prototype.beforeDestruct = function() {
            this.onDragEnd()
        }, d);

        function d() {
            var i = null !== l && l.apply(this, arguments) || this;
            return i.dragList = [], i.isCopyMode = !1, i.draggable = null, i.wasMoved = !1, i.timeout = 0, i.onDrag = r.throttle(function(e) {
                i.draggable && (i.wasMoved = !0, i.jodit.events.fire("hidePopup hideResizer"), i.draggable.parentNode || i.jodit.ownerDocument.body.appendChild(i.draggable), r.css(i.draggable, {
                    left: e.clientX + 20,
                    top: e.clientY + 20
                }), i.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY))
            }, i.jodit.defaultTimeout), i.onDragStart = function(t) {
                var e = t.target,
                    o = null;
                if (i.dragList.length) {
                    for (; ~i.dragList.indexOf(e.nodeName.toLowerCase()) && (o && (e.firstChild !== o || e.lastChild !== o) || (o = e)), (e = e.parentNode) && e !== i.jodit.editor;);
                    o && (i.isCopyMode = r.ctrlKey(t), i.onDragEnd(), i.timeout = r.setTimeout(function(e) {
                        e && (i.draggable = e.cloneNode(!0), r.dataBind(i.draggable, "target", e), r.css(i.draggable, {
                            "z-index": 1e14,
                            "pointer-events": "none",
                            position: "fixed",
                            display: "inlin-block",
                            left: t.clientX,
                            top: t.clientY,
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        }))
                    }, i.jodit.defaultTimeout, o), t.preventDefault())
                }
            }, i.onDragEnd = function() {
                window.clearTimeout(i.timeout), i.draggable && (s.Dom.safeRemove(i.draggable), i.draggable = null, i.wasMoved = !1)
            }, i.onDrop = function() {
                if (i.draggable && i.wasMoved) {
                    var e = r.dataBind(i.draggable, "target");
                    i.onDragEnd(), i.isCopyMode && (e = e.cloneNode(!0)), i.jodit.selection.insertNode(e, !0, !1), "IMG" === e.nodeName && i.jodit.events && i.jodit.events.fire("afterInsertImage", e), i.jodit.events.fire("synchro")
                } else i.onDragEnd()
            }, i
        }
        t.DragAndDropElement = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = o(1),
            r = o(2),
            a = o(0),
            l = o(4),
            s = o(7),
            c = (n.__extends(d, i = s.Plugin), d.prototype.afterInit = function() {
                this.jodit.events.on(window, "dragover", this.onDrag).on([window, this.jodit.editorDocument, this.jodit.editor], "dragstart", this.onDragStart).on("drop", this.onDrop).on(window, "dragend drop mouseup", this.onDragEnd)
            }, d.prototype.beforeDestruct = function() {
                this.onDragEnd()
            }, d);

        function d() {
            var s = null !== i && i.apply(this, arguments) || this;
            return s.isFragmentFromEditor = !1, s.isCopyMode = !1, s.startDragPoint = {
                x: 0,
                y: 0
            }, s.draggable = null, s.bufferRange = null, s.onDragEnd = function() {
                s.draggable && (a.Dom.safeRemove(s.draggable), s.draggable = null), s.isCopyMode = !1
            }, s.onDrag = function(e) {
                s.draggable && (s.draggable.parentNode || s.jodit.ownerDocument.body.appendChild(s.draggable), s.jodit.events.fire("hidePopup"), l.css(s.draggable, {
                    left: e.clientX + 20,
                    top: e.clientY + 20
                }), s.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY), e.preventDefault(), e.stopPropagation())
            }, s.onDrop = function(e) {
                if (!e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length) {
                    if (!s.isFragmentFromEditor && !s.draggable) return s.jodit.events.fire("paste", e), e.preventDefault(), e.stopPropagation(), !1;
                    var t = s.jodit.selection.sel,
                        o = s.bufferRange || (t && t.rangeCount ? t.getRangeAt(0) : null),
                        i = null;
                    if (!s.draggable && o) i = s.isCopyMode ? o.cloneContents() : o.extractContents();
                    else if (s.draggable)
                        if (s.isCopyMode) {
                            var n = "1" === s.draggable.getAttribute("data-is-file") ? ["a", "href"] : ["img", "src"],
                                r = n[0],
                                a = n[1];
                            (i = s.jodit.editorDocument.createElement(r)).setAttribute(a, s.draggable.getAttribute("data-src") || s.draggable.getAttribute("src") || ""), "a" === r && (i.innerText = i.getAttribute(a) || "")
                        } else i = l.dataBind(s.draggable, "target");
                    else s.getText(e) && (i = s.jodit.create.inside.fromHTML(s.getText(e)));
                    t && t.removeAllRanges(), s.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY), i && (s.jodit.selection.insertNode(i, !1, !1), o && i.firstChild && i.lastChild && (o.setStartBefore(i.firstChild), o.setEndAfter(i.lastChild), s.jodit.selection.selectRange(o), s.jodit.events.fire("synchro")), "IMG" === i.nodeName && s.jodit.events && s.jodit.events.fire("afterInsertImage", i)), e.preventDefault(), e.stopPropagation()
                }
                s.isFragmentFromEditor = !1
            }, s.onDragStart = function(e) {
                var t = e.target;
                if (s.onDragEnd(), s.isFragmentFromEditor = a.Dom.isOrContains(s.jodit.editor, t, !0), s.isCopyMode = !s.isFragmentFromEditor || l.ctrlKey(e), s.isFragmentFromEditor) {
                    var o = s.jodit.selection.sel,
                        i = o && o.rangeCount ? o.getRangeAt(0) : null;
                    i && (s.bufferRange = i.cloneRange())
                } else s.bufferRange = null;
                s.startDragPoint.x = e.clientX, s.startDragPoint.y = e.clientY, t.nodeType === Node.ELEMENT_NODE && t.matches(".jodit_filebrowser_files_item") && (t = t.querySelector("img")), "IMG" === t.nodeName && (s.draggable = t.cloneNode(!0), l.dataBind(s.draggable, "target", t), l.css(s.draggable, {
                    "z-index": 1e14,
                    "pointer-events": "none",
                    position: "fixed",
                    display: "inlin-block",
                    left: s.startDragPoint.x,
                    top: s.startDragPoint.y,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }))
            }, s.getDataTransfer = function(e) {
                return e.dataTransfer || new DataTransfer
            }, s.getText = function(e) {
                var t = s.getDataTransfer(e);
                return t.getData(r.TEXT_HTML) || t.getData(r.TEXT_PLAIN)
            }, s
        }
        t.DragAndDrop = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = o(1),
            r = o(2),
            a = o(16),
            s = o(7),
            l = o(0),
            c = o(18),
            d = (i.__extends(u, n = s.Plugin), u.prototype.createDialog = function() {
                var o = this;
                this.dialog = new a.Dialog(this.jodit);
                var e = this.jodit.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + this.jodit.i18n("Paste") + "</span></a>");
                e.addEventListener("click", this.paste);
                var t = this.jodit.create.fromHTML('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit_button"><span>' + this.jodit.i18n("Cancel") + "</span></a>");
                t.addEventListener("click", this.dialog.close), this.container = this.jodit.ownerDocument.createElement("div"), this.container.classList.add("jodit_paste_storage"), this.listBox = this.jodit.ownerDocument.createElement("div"), this.previewBox = this.jodit.ownerDocument.createElement("div"), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setTitle(this.jodit.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([e, t]), this.jodit.events.on(this.listBox, "click dblclick", function(e) {
                    var t = e.target;
                    return t && "A" === t.nodeName && t.hasAttribute("data-index") && o.selectIndex(parseInt(t.getAttribute("data-index") || "0", 10)), "dblclick" === e.type && o.paste(), !1
                }, "a")
            }, u.prototype.afterInit = function() {
                var t = this;
                this.jodit.events.on("afterCopy", function(e) {
                    ~t.list.indexOf(e) && t.list.splice(t.list.indexOf(e), 1), t.list.unshift(e), 5 < t.list.length && (t.list.length = 5)
                }), this.jodit.registerCommand("showPasteStorage", {
                    exec: this.showDialog,
                    hotkeys: ["ctrl+shift+v", "cmd+shift+v"]
                })
            }, u.prototype.beforeDestruct = function() {
                this.dialog && this.dialog.destruct(), l.Dom.safeRemove(this.previewBox), l.Dom.safeRemove(this.listBox), l.Dom.safeRemove(this.container), this.container = null, this.listBox = null, this.previewBox = null, this.dialog = null, this.list = []
            }, u);

        function u() {
            var i = null !== n && n.apply(this, arguments) || this;
            return i.currentIndex = 0, i.list = [], i.container = null, i.listBox = null, i.previewBox = null, i.dialog = null, i.paste = function() {
                if (i.jodit.selection.focus(), i.jodit.selection.insertHTML(i.list[i.currentIndex]), 0 !== i.currentIndex) {
                    var e = i.list[0];
                    i.list[0] = i.list[i.currentIndex], i.list[i.currentIndex] = e
                }
                i.dialog && i.dialog.close(), i.jodit.setEditorValue()
            }, i.onKeyDown = function(e) {
                var t = i.currentIndex;
                ~[r.KEY_UP, r.KEY_DOWN, r.KEY_ENTER].indexOf(e.which) && (e.which === r.KEY_UP && (0 === t ? t = i.list.length - 1 : t -= 1), e.which === r.KEY_DOWN && (t === i.list.length - 1 ? t = 0 : t += 1), e.which !== r.KEY_ENTER ? (t !== i.currentIndex && i.selectIndex(t), e.stopImmediatePropagation(), e.preventDefault()) : i.paste())
            }, i.selectIndex = function(o) {
                i.listBox && Array.from(i.listBox.childNodes).forEach(function(e, t) {
                    e.classList.remove("jodit_active"), o === t && i.previewBox && (e.classList.add("jodit_active"), i.previewBox.innerHTML = i.list[o], e.focus())
                }), i.currentIndex = o
            }, i.showDialog = function() {
                i.list.length < 2 || (i.dialog || i.createDialog(), i.listBox && (i.listBox.innerHTML = ""), i.previewBox && (i.previewBox.innerHTML = ""), i.list.forEach(function(e, t) {
                    var o = i.jodit.ownerDocument.createElement("a");
                    o.innerText = t + 1 + ". " + e.replace(r.SPACE_REG_EXP, ""), o.addEventListener("keydown", i.onKeyDown), o.setAttribute("href", "javascript:void(0)"), o.setAttribute("data-index", "" + t), o.setAttribute("tab-index", "-1"), i.listBox && i.listBox.appendChild(o)
                }), i.dialog && i.dialog.open(), c.setTimeout(function() {
                    i.selectIndex(0)
                }, 100))
            }, i
        }
        t.pasteStorage = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(185);
        t.about = i;
        var n = o(186);
        t.addcolumn = n;
        var r = o(187);
        t.addrow = r;
        var a = o(188);
        t.angle_down = a;
        var s = o(189);
        t.angle_left = s;
        var l = o(190);
        t.angle_right = l;
        var c = o(191);
        t.angle_up = c;
        var d = o(192);
        t.arrows_alt = d;
        var u = o(193);
        t.arrows_h = u;
        var f = o(194);
        t.attachment = f;
        var p = o(195);
        t.bin = p;
        var h = o(196);
        t.bold = h;
        var v = o(197);
        t.brush = v;
        var m = o(198);
        t.cancel = m;
        var g = o(199);
        t.center = g;
        var _ = o(200);
        t.chain_broken = _;
        var b = o(201);
        t.check_square = b;
        var y = o(202);
        t.check = y;
        var w = o(203);
        t.copyformat = w;
        var C = o(204);
        t.crop = C;
        var E = o(205);
        t.cut = E;
        var j = o(206);
        t.dedent = j;
        var T = o(207);
        t.dots = T;
        var S = o(208);
        t.enter = S;
        var x = o(209);
        t.eraser = x;
        var k = o(210);
        t.eye = k;
        var D = o(211);
        t.file = D;
        var L = o(212);
        t.folder = L;
        var z = o(213);
        t.font = z;
        var M = o(214);
        t.fontsize = M;
        var I = o(215);
        t.fullsize = I;
        var q = o(216);
        t.hr = q;
        var A = o(217);
        t.image = A;
        var N = o(218);
        t.indent = N;
        var P = o(219);
        t.info_circle = P;
        var O = o(220);
        t.italic = O;
        var R = o(221);
        t.justify = R;
        var B = o(222);
        t.left = B;
        var H = o(223);
        t.link = H;
        var W = o(224);
        t.lock = W;
        var F = o(225);
        t.menu = F;
        var V = o(226);
        t.merge = V;
        var Y = o(227);
        t.ol = Y;
        var U = o(228);
        t.omega = U;
        var K = o(229);
        t.outdent = K;
        var X = o(230);
        t.paragraph = X;
        var G = o(231);
        t.pencil = G;
        var $ = o(232);
        t.plus = $;
        var J = o(233);
        t.print = J;
        var Z = o(234);
        t.redo = Z;
        var Q = o(235);
        t.resize = Q;
        var ee = o(236);
        t.resizer = ee;
        var te = o(237);
        t.right = te;
        var oe = o(238);
        t.save = oe;
        var ie = o(239);
        t.select_all = ie;
        var ne = o(240);
        t.shrink = ne;
        var re = o(241);
        t.source = re;
        var ae = o(242);
        t.splitg = ae;
        var se = o(243);
        t.splitv = se;
        var le = o(244);
        t.strikethrough = le;
        var ce = o(245);
        t.subscript = ce;
        var de = o(246);
        t.superscript = de;
        var ue = o(247);
        t.table = ue;
        var fe = o(248);
        t.th_list = fe;
        var pe = o(249);
        t.th = pe;
        var he = o(250);
        t.ul = he;
        var ve = o(251);
        t.underline = ve;
        var me = o(252);
        t.undo = me;
        var ge = o(253);
        t.unlink = ge;
        var _e = o(254);
        t.unlock = _e;
        var be = o(255);
        t.update = be;
        var ye = o(256);
        t.upload = ye;
        var we = o(257);
        t.valign = we;
        var Ce = o(258);
        t.video = Ce;
        var Ee = o(259);
        t.palette = Ee
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n\t<path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 18.151 18.151">\n<g>\n\t<g>\n\t\t<path d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194\n\t\t\tc0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/>\n\t\t<path d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938\n\t\t\tS13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597\n\t\t\ts3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/>\n\t\t<polygon  points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868\n\t\t\t10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 \t\t"/>\n\t</g>\n</g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 432 432">\n<g>\n\t<g>\n\t\t<polygon points="203.688,96 0,96 0,144 155.688,144 \t\t"/>\n\t\t<polygon points="155.719,288 0,288 0,336 203.719,336 \t\t"/>\n\t\t<rect x="252" y="96"/>\n\t\t<rect/>\n\t\t<rect x="252" y="288"/>\n\t\t<rect y="384"/>\n\t\t<path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719\n\t\t\tL97.844,230.125z"/>\n\t\t<polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 \t\t"/>\n\t</g>\n</g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg  viewBox="0 0 1792 1792">\n    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 16 16" style="stroke: #000000;">\n    <g transform="translate(0,-1036.3622)">\n        <path d="m 2,1050.3622 12,-12"\n              style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>\n        <path d="m 2,1038.3622 12,12"\n              style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>\n    </g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 16 16"><path d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/></svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg\n        enable-background="new 0 0 24 24"\n        viewBox="0 0 24 24"\n        xml:space="preserve"\n\n       >\n    <circle cx="12" cy="12" r="2.2"/>\n    <circle cx="12" cy="5" r="2.2"/>\n    <circle cx="12" cy="19" r="2.2"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 128 128" xml:space="preserve">\n    <g>\n        <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125     16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594     112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125   "/>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" >\n\t<path d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z   M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg\n     viewBox="0 0 312 312">\n    <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none">\n        <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32\n-30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30\n25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27\n-503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960\n11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40\n-47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0\n-775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80\n-3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10\n164 12 777 10 l773 -3 3 -454z"/>\n        <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104\n190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4\n289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103\n-97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35\n-82 -78z"/>\n        <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0\n189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/>\n        <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95\n106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79\n79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95\n108 -6 10 -568 11 -577 1z"/>\n    </g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg role="img" viewBox="0 0 1792 1792">\n    <path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 270 270">\n\t<path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24"\n    >\n    <g>\n        <g transform="translate(-251.000000, -443.000000)">\n            <g transform="translate(215.000000, 119.000000)"/>\n            <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/>\n        </g>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 18 18">\n    <g fill-rule="evenodd" stroke="none" stroke-width="1">\n        <g transform="translate(-381.000000, -381.000000)">\n            <g transform="translate(381.000000, 381.000000)">\n                <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/>\n            </g>\n        </g>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 48 48">\n    <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/><path d="M0 0h48v48h-48z" fill="none"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 48 48">\n    <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/>\n    <path d="M0 0h48v48h-48z" fill="none"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg x="0px" y="0px" viewBox="0 0 459 459">\n<g>\n\t<g>\n\t\t<path d="M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5\n\t\t\tc-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z\n\t\t\t M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z\n\t\t\t M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z\n\t\t\t M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z\n\t\t\t M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z"\n\t\t/>\n\t</g>\n</g>\n</svg>\n'
    }], n.c = i, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(o, i, function(e) {
                return t[e]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/build/", n(n.s = 66);

    function n(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
    }
    var o, i
});