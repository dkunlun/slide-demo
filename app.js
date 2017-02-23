var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : Y[V.call(t)] || "object"
    }
    function e(e) {
        return "function" == t(e)
    }
    function n(t) {
        return null != t && t == t.window
    }
    function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function r(e) {
        return "object" == t(e)
    }
    function o(t) {
        return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function a(t) {
        return "number" == typeof t.length
    }
    function s(t) {
        return N.call(t, function(t) {
            return null != t
        })
    }
    function u(t) {
        return t.length > 0 ? T.fn.concat.apply([], t) : t
    }
    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(t) {
        return t in k ? k[t] : k[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function f(t, e) {
        return "number" != typeof e || Z[c(t)] ? e : e + "px"
    }
    function h(t) {
        var e, n;
        return M[t] || (e = O.createElement(t),
        O.body.appendChild(e),
        n = getComputedStyle(e, "").getPropertyValue("display"),
        e.parentNode.removeChild(e),
        "none" == n && (n = "block"),
        M[t] = n),
        M[t]
    }
    function p(t) {
        return "children"in t ? P.call(t.children) : T.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0
        })
    }
    function d(t, e, n) {
        for (E in e)
            n && (o(e[E]) || G(e[E])) ? (o(e[E]) && !o(t[E]) && (t[E] = {}),
            G(e[E]) && !G(t[E]) && (t[E] = []),
            d(t[E], e[E], n)) : e[E] !== b && (t[E] = e[E])
    }
    function m(t, e) {
        return null == e ? T(t) : T(t).filter(e)
    }
    function v(t, n, i, r) {
        return e(n) ? n.call(t, i, r) : n
    }
    function g(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function y(t, e) {
        var n = t.className || ""
          , i = n && n.baseVal !== b;
        return e === b ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e)
    }
    function x(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? T.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }
    function w(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++)
            w(t.childNodes[n], e)
    }
    var b, E, T, $, C, j, S = [], P = S.slice, N = S.filter, O = window.document, M = {}, k = {}, Z = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, _ = /^\s*<(\w+|!)[^>]*>/, L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, D = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, A = /^(?:body|html)$/i, R = /([A-Z])/g, z = ["val", "css", "html", "text", "data", "width", "height", "offset"], F = ["after", "prepend", "before", "append"], I = O.createElement("table"), X = O.createElement("tr"), q = {
        tr: O.createElement("tbody"),
        tbody: I,
        thead: I,
        tfoot: I,
        td: X,
        th: X,
        "*": O.createElement("div")
    }, H = /complete|loaded|interactive/, U = /^[\w-]*$/, Y = {}, V = Y.toString, B = {}, J = O.createElement("div"), W = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, G = Array.isArray || function(t) {
        return t instanceof Array
    }
    ;
    return B.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType)
            return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)
            return n.call(t, e);
        var i, r = t.parentNode, o = !r;
        return o && (r = J).appendChild(t),
        i = ~B.qsa(r, e).indexOf(t),
        o && J.removeChild(t),
        i
    }
    ,
    C = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }
    ,
    j = function(t) {
        return N.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }
    ,
    B.fragment = function(t, e, n) {
        var i, r, a;
        return L.test(t) && (i = T(O.createElement(RegExp.$1))),
        i || (t.replace && (t = t.replace(D, "<$1></$2>")),
        e === b && (e = _.test(t) && RegExp.$1),
        e in q || (e = "*"),
        a = q[e],
        a.innerHTML = "" + t,
        i = T.each(P.call(a.childNodes), function() {
            a.removeChild(this)
        })),
        o(n) && (r = T(i),
        T.each(n, function(t, e) {
            z.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
        })),
        i
    }
    ,
    B.Z = function(t, e) {
        return t = t || [],
        t.__proto__ = T.fn,
        t.selector = e || "",
        t
    }
    ,
    B.isZ = function(t) {
        return t instanceof B.Z
    }
    ,
    B.init = function(t, n) {
        var i;
        if (!t)
            return B.Z();
        if ("string" == typeof t)
            if (t = t.trim(),
            "<" == t[0] && _.test(t))
                i = B.fragment(t, RegExp.$1, n),
                t = null;
            else {
                if (n !== b)
                    return T(n).find(t);
                i = B.qsa(O, t)
            }
        else {
            if (e(t))
                return T(O).ready(t);
            if (B.isZ(t))
                return t;
            if (G(t))
                i = s(t);
            else if (r(t))
                i = [t],
                t = null;
            else if (_.test(t))
                i = B.fragment(t.trim(), RegExp.$1, n),
                t = null;
            else {
                if (n !== b)
                    return T(n).find(t);
                i = B.qsa(O, t)
            }
        }
        return B.Z(i, t)
    }
    ,
    T = function(t, e) {
        return B.init(t, e)
    }
    ,
    T.extend = function(t) {
        var e, n = P.call(arguments, 1);
        return "boolean" == typeof t && (e = t,
        t = n.shift()),
        n.forEach(function(n) {
            d(t, n, e)
        }),
        t
    }
    ,
    B.qsa = function(t, e) {
        var n, r = "#" == e[0], o = !r && "." == e[0], a = r || o ? e.slice(1) : e, s = U.test(a);
        return i(t) && s && r ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : P.call(s && !r ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }
    ,
    T.contains = O.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    }
    : function(t, e) {
        for (; e && (e = e.parentNode); )
            if (e === t)
                return !0;
        return !1
    }
    ,
    T.type = t,
    T.isFunction = e,
    T.isWindow = n,
    T.isArray = G,
    T.isPlainObject = o,
    T.isEmptyObject = function(t) {
        var e;
        for (e in t)
            return !1;
        return !0
    }
    ,
    T.inArray = function(t, e, n) {
        return S.indexOf.call(e, t, n)
    }
    ,
    T.camelCase = C,
    T.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }
    ,
    T.uuid = 0,
    T.support = {},
    T.expr = {},
    T.map = function(t, e) {
        var n, i, r, o = [];
        if (a(t))
            for (i = 0; i < t.length; i++)
                n = e(t[i], i),
                null != n && o.push(n);
        else
            for (r in t)
                n = e(t[r], r),
                null != n && o.push(n);
        return u(o)
    }
    ,
    T.each = function(t, e) {
        var n, i;
        if (a(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1)
                    return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1)
                    return t;
        return t
    }
    ,
    T.grep = function(t, e) {
        return N.call(t, e)
    }
    ,
    window.JSON && (T.parseJSON = JSON.parse),
    T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Y["[object " + e + "]"] = e.toLowerCase()
    }),
    T.fn = {
        forEach: S.forEach,
        reduce: S.reduce,
        push: S.push,
        sort: S.sort,
        indexOf: S.indexOf,
        concat: S.concat,
        map: function(t) {
            return T(T.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return T(P.apply(this, arguments))
        },
        ready: function(t) {
            return H.test(O.readyState) && O.body ? t(T) : O.addEventListener("DOMContentLoaded", function() {
                t(T)
            }, !1),
            this
        },
        get: function(t) {
            return t === b ? P.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return S.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function(t) {
            return e(t) ? this.not(this.not(t)) : T(N.call(this, function(e) {
                return B.matches(e, t)
            }))
        },
        add: function(t, e) {
            return T(j(this.concat(T(t, e))))
        },
        is: function(t) {
            return this.length > 0 && B.matches(this[0], t)
        },
        not: function(t) {
            var n = [];
            if (e(t) && t.call !== b)
                this.each(function(e) {
                    t.call(this, e) || n.push(this)
                });
            else {
                var i = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? P.call(t) : T(t);
                this.forEach(function(t) {
                    i.indexOf(t) < 0 && n.push(t)
                })
            }
            return T(n)
        },
        has: function(t) {
            return this.filter(function() {
                return r(t) ? T.contains(this, t) : T(this).find(t).size()
            })
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !r(t) ? t : T(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !r(t) ? t : T(t)
        },
        find: function(t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? T(t).filter(function() {
                var t = this;
                return S.some.call(n, function(e) {
                    return T.contains(e, t)
                })
            }) : 1 == this.length ? T(B.qsa(this[0], t)) : this.map(function() {
                return B.qsa(this, t)
            }) : T()
        },
        closest: function(t, e) {
            var n = this[0]
              , r = !1;
            for ("object" == typeof t && (r = T(t)); n && !(r ? r.indexOf(n) >= 0 : B.matches(n, t)); )
                n = n !== e && !i(n) && n.parentNode;
            return T(n)
        },
        parents: function(t) {
            for (var e = [], n = this; n.length > 0; )
                n = T.map(n, function(t) {
                    return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t),
                    t) : void 0
                });
            return m(e, t)
        },
        parent: function(t) {
            return m(j(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return m(this.map(function() {
                return p(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return P.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return m(this.map(function(t, e) {
                return N.call(p(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return T.map(this, function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var n = e(t);
            if (this[0] && !n)
                var i = T(t).get(0)
                  , r = i.parentNode || this.length > 1;
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                T(this[0]).before(t = T(t));
                for (var e; (e = t.children()).length; )
                    t = e.first();
                T(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
                var i = T(this)
                  , r = i.contents()
                  , o = n ? t.call(this, e) : t;
                r.length ? r.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                T(this).replaceWith(T(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var e = T(this);
                (t === b ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function(t) {
            return T(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return T(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = this.innerHTML;
                T(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                if (1 === this.nodeType)
                    if (r(t))
                        for (E in t)
                            g(this, E, t[E]);
                    else
                        g(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : b
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    g(this, t)
                }, this)
            })
        },
        prop: function(t, e) {
            return t = W[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, e) {
            var n = "data-" + t.replace(R, "-$1").toLowerCase()
              , i = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== i ? x(i) : b
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t)
                return this.each(function(e) {
                    var n = T(this)
                      , i = v(this, t, e, n.offset())
                      , r = n.offsetParent().offset()
                      , o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == n.css("position") && (o.position = "relative"),
                    n.css(o)
                });
            if (!this.length)
                return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2) {
                var i, r = this[0];
                if (!r)
                    return;
                if (i = getComputedStyle(r, ""),
                "string" == typeof e)
                    return r.style[C(e)] || i.getPropertyValue(e);
                if (G(e)) {
                    var o = {};
                    return T.each(e, function(t, e) {
                        o[e] = r.style[C(e)] || i.getPropertyValue(e)
                    }),
                    o
                }
            }
            var a = "";
            if ("string" == t(e))
                n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function() {
                    this.style.removeProperty(c(e))
                });
            else
                for (E in e)
                    e[E] || 0 === e[E] ? a += c(E) + ":" + f(E, e[E]) + ";" : this.each(function() {
                        this.style.removeProperty(c(E))
                    });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },
        index: function(t) {
            return t ? this.indexOf(T(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? S.some.call(this, function(t) {
                return this.test(y(t))
            }, l(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className"in this) {
                    $ = [];
                    var n = y(this)
                      , i = v(this, t, e, n);
                    i.split(/\s+/g).forEach(function(t) {
                        T(this).hasClass(t) || $.push(t)
                    }, this),
                    $.length && y(this, n + (n ? " " : "") + $.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(e) {
                if ("className"in this) {
                    if (t === b)
                        return y(this, "");
                    $ = y(this),
                    v(this, t, e, $).split(/\s+/g).forEach(function(t) {
                        $ = $.replace(l(t), " ")
                    }),
                    y(this, $.trim())
                }
            })
        },
        toggleClass: function(t, e) {
            return t ? this.each(function(n) {
                var i = T(this)
                  , r = v(this, t, n, y(this));
                r.split(/\s+/g).forEach(function(t) {
                    (e === b ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop"in this[0];
                return t === b ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                    this.scrollTop = t
                }
                : function() {
                    this.scrollTo(this.scrollX, t)
                }
                )
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft"in this[0];
                return t === b ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                    this.scrollLeft = t
                }
                : function() {
                    this.scrollTo(t, this.scrollY)
                }
                )
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0]
                  , e = this.offsetParent()
                  , n = this.offset()
                  , i = A.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return n.top -= parseFloat(T(t).css("margin-top")) || 0,
                n.left -= parseFloat(T(t).css("margin-left")) || 0,
                i.top += parseFloat(T(e[0]).css("border-top-width")) || 0,
                i.left += parseFloat(T(e[0]).css("border-left-width")) || 0,
                {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || O.body; t && !A.test(t.nodeName) && "static" == T(t).css("position"); )
                    t = t.offsetParent;
                return t
            })
        }
    },
    T.fn.detach = T.fn.remove,
    ["width", "height"].forEach(function(t) {
        var e = t.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        T.fn[t] = function(r) {
            var o, a = this[0];
            return r === b ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                a = T(this),
                a.css(t, v(this, r, e, a[t]()))
            })
        }
    }),
    F.forEach(function(e, n) {
        var i = n % 2;
        T.fn[e] = function() {
            var e, r, o = T.map(arguments, function(n) {
                return e = t(n),
                "object" == e || "array" == e || null == n ? n : B.fragment(n)
            }), a = this.length > 1;
            return o.length < 1 ? this : this.each(function(t, e) {
                r = i ? e : e.parentNode,
                e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var s = T.contains(O.documentElement, r);
                o.forEach(function(t) {
                    if (a)
                        t = t.cloneNode(!0);
                    else if (!r)
                        return T(t).remove();
                    r.insertBefore(t, e),
                    s && w(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }
        ,
        T.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
            return T(t)[e](this),
            this
        }
    }),
    B.Z.prototype = T.fn,
    B.uniq = j,
    B.deserializeValue = x,
    T.zepto = B,
    T
}();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }
    function n(t, n, o, a) {
        if (n = i(n),
        n.ns)
            var s = r(n.ns);
        return (v[e(t)] || []).filter(function(t) {
            return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
        })
    }
    function i(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function r(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(t, e) {
        return t.del && !y && t.e in x || !!e
    }
    function a(t) {
        return w[t] || y && x[t] || t
    }
    function s(n, r, s, u, l, h, p) {
        var d = e(n)
          , m = v[d] || (v[d] = []);
        r.split(/\s/).forEach(function(e) {
            if ("ready" == e)
                return t(document).ready(s);
            var r = i(e);
            r.fn = s,
            r.sel = l,
            r.e in w && (s = function(e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0
            }
            ),
            r.del = h;
            var d = h || s;
            r.proxy = function(t) {
                if (t = c(t),
                !t.isImmediatePropagationStopped()) {
                    t.data = u;
                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(),
                    t.stopPropagation()),
                    e
                }
            }
            ,
            r.i = m.length,
            m.push(r),
            "addEventListener"in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
        })
    }
    function u(t, i, r, s, u) {
        var c = e(t);
        (i || "").split(/\s/).forEach(function(e) {
            n(t, e, r, s).forEach(function(e) {
                delete v[c][e.i],
                "removeEventListener"in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
            })
        })
    }
    function c(e, n) {
        return (n || !e.isDefaultPrevented) && (n || (n = e),
        t.each($, function(t, i) {
            var r = n[t];
            e[t] = function() {
                return this[i] = b,
                r && r.apply(n, arguments)
            }
            ,
            e[i] = E
        }),
        (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue"in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)),
        e
    }
    function l(t) {
        var e, n = {
            originalEvent: t
        };
        for (e in t)
            T.test(e) || t[e] === f || (n[e] = t[e]);
        return c(n, t)
    }
    var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function(t) {
        return "string" == typeof t
    }, v = {}, g = {}, y = "onfocusin"in window, x = {
        focus: "focusin",
        blur: "focusout"
    }, w = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents",
    t.event = {
        add: s,
        remove: u
    },
    t.proxy = function(n, i) {
        var r = 2 in arguments && p.call(arguments, 2);
        if (d(n)) {
            var o = function() {
                return n.apply(i, r ? r.concat(p.call(arguments)) : arguments)
            };
            return o._zid = e(n),
            o
        }
        if (m(i))
            return r ? (r.unshift(n[i], n),
            t.proxy.apply(null, r)) : t.proxy(n[i], n);
        throw new TypeError("expected function")
    }
    ,
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    }
    ,
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    }
    ,
    t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1)
    }
    ;
    var b = function() {
        return !0
    }
      , E = function() {
        return !1
    }
      , T = /^([A-Z]|returnValue$|layer[XY]$)/
      , $ = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    }
    ,
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    }
    ,
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    }
    ,
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    }
    ,
    t.fn.on = function(e, n, i, r, o) {
        var a, c, h = this;
        return e && !m(e) ? (t.each(e, function(t, e) {
            h.on(t, n, i, e, o)
        }),
        h) : (m(n) || d(r) || r === !1 || (r = i,
        i = n,
        n = f),
        (d(i) || i === !1) && (r = i,
        i = f),
        r === !1 && (r = E),
        h.each(function(f, h) {
            o && (a = function(t) {
                return u(h, t.type, r),
                r.apply(this, arguments)
            }
            ),
            n && (c = function(e) {
                var i, o = t(e.target).closest(n, h).get(0);
                return o && o !== h ? (i = t.extend(l(e), {
                    currentTarget: o,
                    liveFired: h
                }),
                (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
            }
            ),
            s(h, e, r, i, n, c || a)
        }))
    }
    ,
    t.fn.off = function(e, n, i) {
        var r = this;
        return e && !m(e) ? (t.each(e, function(t, e) {
            r.off(t, n, e)
        }),
        r) : (m(n) || d(i) || i === !1 || (i = n,
        n = f),
        i === !1 && (i = E),
        r.each(function() {
            u(this, e, i, n)
        }))
    }
    ,
    t.fn.trigger = function(e, n) {
        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e),
        e._args = n,
        this.each(function() {
            e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }
    ,
    t.fn.triggerHandler = function(e, i) {
        var r, o;
        return this.each(function(a, s) {
            r = l(m(e) ? t.Event(e) : e),
            r._args = i,
            r.target = s,
            t.each(n(s, e.type || e), function(t, e) {
                return o = e.proxy(r),
                r.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        o
    }
    ,
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }),
    t.Event = function(t, e) {
        m(t) || (e = t,
        t = e.type);
        var n = document.createEvent(g[t] || "Events")
          , i = !0;
        if (e)
            for (var r in e)
                "bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0),
        c(n)
    }
}(Zepto),
$(function() {
    function t() {
        $(".move-item").not(".move-out").each(function(t) {
            t > v - 1 ? $(this).find(".move-content").css({
                opacity: "0",
                visibility: "hidden"
            }) : $(this).find(".move-content").css({
                opacity: "1",
                visibility: "visible"
            })
        })
    }
    function e(t) {
        var e, n = "anited";
        t && (n = ""),
        $(".move-item").not(".move-out").each(function(t) {
            $(this).find(".move-content").addClass(n).css({
                "-webkit-transform": "scale(" + (100 - t * m) / 100 + ") translate3d("+ 20 * t +"px," + 8 * t + "px,0)"
            })
        }),
        e = $(".move-out").length,
        $("#percentage").width(e / (p - 1) * 100 + "%")
    }
    var n, i, r, o, a, s, u, c, l, f, h, p, d, m, v;
    l = $(window).width(),
    f = $(window).height(),
    p = $(".move-item").length,
    m = 3,
    v = 3,
    $("body").height(f),
    t(),
    $(".move-item").each(function(t) {
        $(this).css({
            zIndex: p - t
        })
    }),
    setTimeout(function() {
        $("body, header").css("opacity", 1),
        e(!0)
    }, 500),
    $(".move-item").on("touchstart", function(t) {
        var e = t.touches[0];
        u = c = 0,
        r = n = e.pageX,
        o = i = e.pageY,
        h = !1,
        d = p == $(this).index() + 1 ? !0 : !1,
        a = $(this).position().left,
        s = $(this).position().top,
        $(this).addClass("moving")
    }),
    $(".move-item").on("touchmove", function(t) {
        var e = t.touches[0];
        return t.preventDefault(),
        r = e.pageX,
        o = e.pageY,
        u = r - n,
        c = o - i,
        d && 20 > c ? !1 : (0 > c && !h && (h = !0),
        void ((0 > c || h) && $(this).css({
            "-webkit-transform": "rotateZ(" + u / 15 + "deg) translate3d(" + (a + u) + "px, " + (s + c) + "px, 0)"
        })))
    }),
    $(".move-item").on("touchend", function(n) {
        if (h = !1,
        $(this).removeClass("moving"),
        80 > i - o || d)
            $(this).css({
                "-webkit-transform": "rotateZ(0deg) translate3d(0, 0, 0)"
            });
        else {
            var r = 1 * f;
            $(this).css({
                "-webkit-transform": "translate3d(" + -u / c * r + "px, " + -r + "px, 0)"
            }),
            $(this).addClass("move-out"),
            p == $(this).index() + 2 && $("body").addClass("blue") && console.log(1),
            e(),
            t(),
            "undefined" != typeof mixpanel && "undefined" != typeof article_id && mixpanel.track("card" + $(".move-out").length, {
                id: article_id
            }),
            0 == $(this).index() && $("#downloadbar").css({
                opacity: "0",
                "margin-top": "-56px"
            })
            $('#slide').hide();
        }
    }),
    
    $("#go-home").on("click", function() {
        return h ? !1 : ($(".move-out").each(function() {
            $(this).css({
                "-webkit-transform": "rotateZ(0deg) translate3d(0, 0, 0)"
            }).removeClass("move-out")
        }),
        $("#send-card").removeClass("anti"),
        $("header").removeClass("hide"),
        $("body").removeClass("blue"),
        e(),
        t(),
        !1)
    }),
    $(".open-other").tap(function() {
        var t = $(this).attr("for");
        $("#" + t).show()
    }),
    $(".extra-card .close").tap(function() {
        $(this).closest(".extra-card").hide()
    }),
    $("#see-btn").tap(function() {
        "undefined" != typeof mixpanel && mixpanel.track("seebtn-click", {
            id: article_id
        }),
        "#" === $(this).attr("href") && ($("#send-card").addClass("anti"),
        $("header").addClass("hide"))
    }),
    $("#go").tap(function() {
        "undefined" != typeof mixpanel && mixpanel.track("gobtn-click", {
            id: article_id
        })
    })
});
