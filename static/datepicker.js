if (browser) {
    !function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Datepicker = t()
    }(this, function () {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, n = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

        function a(e, t) {
            var n = (t || document).querySelectorAll(e);
            return Array.prototype.slice.call(n)
        }

        function r(e, t) {
            var n = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            return n && n.call(e, t)
        }

        function s(e, t, n) {
            for (var i = n && !n.contains(e); e && !i;) {
                if (r(e, t)) return e;
                i = n && !n.contains(e.parentNode), e = e.parentNode
            }
            return !1
        }

        function o(e, t) {
            e.classList.add.apply(e.classList, t.split(" ").filter(Boolean))
        }

        function l(e, t) {
            e.classList.remove.apply(e.classList, t.split(" ").filter(Boolean))
        }

        function h(e, t, n) {
            void 0 === n && (n = !function (e, t) {
                return t && e.classList.contains(t)
            }(e, t)), t && (n ? o(e, t) : l(e, t))
        }

        function d(e, t) {
            return e instanceof Date && (t = e.getMonth(), e = e.getFullYear()), [31, function (e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        }

        function u(e, t, n) {
            for (var i = 0; i < t.length; i++) {
                var a = e, r = t[i];
                if ("year" == n ? (a = a.getFullYear(), r = r.getFullYear()) : "month" == n ? (a = a.getMonth(), r = r.getMonth()) : (a = a.getTime(), r = r.getTime()), a == r) return !0
            }
            return !1
        }

        function c(e, t) {
            return e.getTime() - t.getTime()
        }

        function p(e) {
            return !!e && e instanceof Date && !isNaN(e.getTime())
        }

        function f(e) {
            return _(e, function (e) {
                return e && e.setHours(0, 0, 0, 0), e
            })
        }

        function g(e, t) {
            var n = e = new Date(e);
            e > (t = new Date(t)) && (e = t, t = n, n = e);
            for (var i = [new Date(n)]; n < t;) n.setDate(n.getDate() + 1), i.push(new Date(n));
            return i
        }

        function m(t) {
            if ("object" == (void 0 === t ? "undefined" : e(t)) && null !== t) {
                var n = Object.getPrototypeOf(t);
                return n === Object.prototype || null === n
            }
            return !1
        }

        function v(t) {
            for (var n = Array.prototype.slice.call(arguments, 1), i = 0; i < n.length; i++) for (var a in n[i]) void 0 !== t[a] && "object" === e(n[i][a]) && null !== n[i][a] && void 0 === n[i][a].nodeName ? (n[i][a] instanceof Date && (t[a] = new Date(n[i][a].getTime())), Array.isArray(n[i][a]) ? t[a] = n[i][a].slice(0) : t[a] = v(t[a], n[i][a])) : t[a] = n[i][a];
            return t
        }

        function _(e, t, n) {
            var i = [].concat(e).map(t, n);
            return 1 === i.length ? i[0] : i
        }

        function y(e, t) {
            var n = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
            return t ? n(t) : n
        }

        var w = {
            inline: !1,
            multiple: !1,
            ranged: !1,
            time: !1,
            openOn: "first",
            min: !1,
            max: !1,
            within: !1,
            without: !1,
            yearRange: 5,
            weekStart: 0,
            defaultTime: {start: [0, 0], end: [12, 0]},
            separator: ",",
            serialize: function (e) {
                var t = e.toLocaleDateString();
                if (this.get("time")) {
                    var n = e.toLocaleTimeString();
                    return t + "@" + (n = n.replace(/(\d{1,2}:\d{2}):00/, "$1"))
                }
                return t
            },
            deserialize: function (e) {
                return new Date(e)
            },
            toValue: !1,
            fromValue: !1,
            onInit: !1,
            onChange: !1,
            onRender: !1,
            i18n: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                time: ["Time", "Start", "End"]
            },
            classNames: {
                node: "datepicker",
                wrapper: "datepicker__wrapper",
                inline: "is-inline",
                selected: "is-selected",
                disabled: "is-disabled",
                highlighted: "is-highlighted",
                otherMonth: "is-otherMonth",
                weekend: "is-weekend",
                today: "is-today"
            },
            templates: {
                container: ['<div class="datepicker__container">', "<%= renderHeader() %>", "<%= renderTimepicker() %>", "<%= renderCalendar() %>", "</div>"].join(""),
                header: ['<header class="datepicker__header">', '<a class="datepicker__prev<%= (hasPrev) ? "" : " is-disabled" %>" data-prev>&lsaquo;</a>', '<span class="datepicker__title"><%= renderMonthSelect() %></span>', '<span class="datepicker__title"><%= renderYearSelect() %></span>', '<a class="datepicker__next<%= (hasNext) ? "" : " is-disabled" %>" data-next>&rsaquo;</a>', "</header>"].join(""),
                timepicker: ['<div class="datepicker__time">', '<span class="datepicker__label"><%= label %></span>', '<span class="datepicker__field"><%= renderHourSelect() %></span>:', '<span class="datepicker__field"><%= renderMinuteSelect() %></span>', '<span class="datepicker__field"><%= renderPeriodSelect() %></span>', "</div>"].join(""),
                calendar: ['<table class="datepicker__cal">', "<thead>", "<tr>", "<% weekdays.forEach(function(name) { %>", "<th><%= name %></th>", "<% }); %>", "</tr>", "</thead>", "<tbody>", "<% days.forEach(function(day, i) { %>", '<%= (i % 7 == 0) ? "<tr>" : "" %>', "<%= renderDay(day) %>", '<%= (i % 7 == 6) ? "</tr>" : "" %>', "<% }); %>", "</tbody>", "</table>"].join(""),
                day: ['<% classNames.push("datepicker__day"); %>', '<td class="<%= classNames.join(" ") %>" data-day="<%= timestamp %>"><div>', '<span class="datepicker__daynum"><%= daynum %></span>', "</div></td>"].join("")
            }
        };
        var b = function () {
            function e(n, i) {
                var r = this;
                if (t(this, e), "string" == typeof n) {
                    if ("#" != n.substr(0, 1)) return a(n).map(function (e) {
                        return new r.constructor(e, i)
                    });
                    n = document.getElementById(n.substr(1))
                }
                n || (n = document.createElement("input")), "input" !== n.tagName.toLowerCase() || /input|hidden/i.test(n.type) || (n.type = "text"), this._initDOM(n), this._initOptions(i), this._initEvents(), this.setValue(n.value || n.dataset.value || ""), this._opts.onInit && this._opts.onInit(n)
            }

            return n(e, [{
                key: "_initOptions", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._opts = {};
                    var n = function (e, t) {
                        var n = t.classNames.inline;
                        return this.node && (h(this.node, n, e), this.wrapper.style.position = e ? "" : "absolute", this.wrapper.style.display = e ? "" : "none"), this._isOpen = e, e
                    }.bind(this), i = function (e, t) {
                        var n = t.deserialize;
                        return !!p(e = !!e && _(e, n, this)) && e
                    }.bind(this), a = function (e, t) {
                        var n = t.deserialize;
                        return e.length && (e = f(_(e, n, this)), e = [].concat(e).filter(p)), !!e.length && e
                    }.bind(this), r = function (e, t) {
                        var n = t.deserialize;
                        if ("string" != typeof e || /^(first|last|today)$/.test(e) || p(e = n.call(this, e)) || (e = new Date), !this._month) {
                            var i = e;
                            "string" != typeof i && p(i) || (i = new Date), (i = f(new Date(i.getTime()))).setDate(1), this._month = i
                        }
                        return e
                    }.bind(this), s = function (e) {
                        return Math.min(Math.max(e, 0), 6)
                    }.bind(this), o = function (e, t) {
                        return m(e) ? v({}, e, t.defaultTime) : {start: e.slice(0), end: e.slice(0)}
                    }.bind(this), l = function (e, t) {
                        var n = e.node, i = e.inline, a = e.wrapper, r = t.inline;
                        if (this.node) for (var s in e) switch (s) {
                            case"node":
                            case"inline":
                                this.node.className = n + (r ? " " + i : "");
                                break;
                            case"wrapper":
                                this.wrapper.className = a
                        }
                        return e
                    }.bind(this), d = function (e) {
                        return "function" == typeof e && e.bind(this)
                    }.bind(this), u = function (e) {
                        for (var t in e) "select" !== t && (this._renderers[t] = y(e[t]));
                        return e
                    }.bind(this);
                    this._set = {
                        openOn: r,
                        inline: n,
                        weekstart: s,
                        min: i,
                        max: i,
                        within: a,
                        without: a,
                        defaultTime: o,
                        classNames: l,
                        templates: u
                    };
                    ["serialize", "deserialize", "onInit", "onChange", "onRender", "setValue", "getValue"].forEach(function (t) {
                        return e._set[t] = d
                    }), this._renderers = {select: y(['<span style="position:relative"><%= text %>', '<select data-<%= type %>="<%= value %>" data-index="<%= index %>"', 'style="position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0.005;cursor:pointer;">', "<% options.forEach(function(o) { %>", '<option value="<%= o.value %>"', '<%= o.selected ? " selected" : "" %>', '<%= o.disabled ? " disabled" : "" %>', "><%= o.text %></option>", "<% }); %>", "</select>", "</span>"].join(""))}, this.set(v({}, this.constructor.defaults, function (e) {
                        var t = function (e) {
                            return e.trim()
                        }, n = {};
                        if (!e || !e.dataset) return n;
                        for (var i in e.dataset) {
                            var a = e.dataset[i];
                            /true|false/.test(a.toLowerCase()) ? a = "true" == a.toLowerCase() : "[" == a[0] && "]" == a.substr(-1) ? a = _(a.substr(1, a.length - 2).split(","), t) : /^\d*$/.test(a) && (a = parseInt(a, 10)), n[i] = a
                        }
                        return n
                    }(this._el), t))
                }
            }, {
                key: "_initDOM", value: function (e) {
                    this.node || (this._el = e, this.node = document.createElement("div"), this.node.style.position = "relative", this.wrapper = document.createElement("div"), this.wrapper.style.zIndex = 9999, e.parentNode && e.parentNode.insertBefore(this.node, e), this.node.appendChild(e), this.node.appendChild(this.wrapper))
                }
            }, {
                key: "_initEvents", value: function () {
                    var e = this;
                    this._isInitialized || (this._highlighted = [], this._onmousedown = this._onmousedown.bind(this), this._onmousemove = this._onmousemove.bind(this), this._onmouseup = this._onmouseup.bind(this), this._onclick = this._onclick.bind(this), "input" !== this._el.tagName.toLowerCase() ? this._el.addEventListener("click", function () {
                        return e.toggle()
                    }) : this._el.addEventListener("focus", function () {
                        return e.open()
                    }), document.addEventListener("mousedown", function (t) {
                        e.node.contains(t.target) || e.hide()
                    }), this.node.onselectstart = function () {
                        return !1
                    }, this.node.addEventListener("mousedown", this._onmousedown), this.node.addEventListener("mousemove", this._onmousemove), this.node.addEventListener("mouseup", this._onmouseup), this.node.addEventListener("click", this._onclick), this._isInitialized = !0)
                }
            }, {
                key: "_onmousedown", value: function (e) {
                    var t = this, n = this._opts, i = n.ranged, r = n.multiple, d = n.classNames, u = d.selected,
                        c = d.highlighted, p = s(e.target, "[data-day]", this.wrapper),
                        f = p ? parseInt(p.dataset.day, 10) : null;
                    f && (i && this._dragStart ? this._onmousemove(e) : (this._deselect = !i && this.hasDate(new Date(f)), this._highlighted = [f], this._dragStart = f, r || a("[data-day]." + u, this.wrapper).forEach(function (e) {
                        l(e, u)
                    }), a('[data-day="' + f + '"]', this.wrapper).forEach(function (e) {
                        h(e, u, !t._deselect), o(e, c)
                    })))
                }
            }, {
                key: "_onmousemove", value: function (e) {
                    var t = this, n = this._opts, i = n.ranged, r = n.multiple, d = n.classNames, u = d.selected,
                        c = d.highlighted;
                    if ((i || r) && 1 === e.buttons) {
                        var p = s(e.target, "[data-day]", this.wrapper), f = p ? parseInt(p.dataset.day, 10) : null;
                        f && this._dragStart && (this._highlighted = g(this._dragStart, f).map(function (e) {
                            return e.getTime()
                        }), this._isDragging = f !== this._dragStart, a("[data-day]." + c, this.wrapper).forEach(function (e) {
                            var n = new Date(parseInt(e.dataset.day, 10));
                            h(e, u, !i && t.hasDate(n)), l(e, c)
                        }), this._highlighted.forEach(function (e) {
                            a('[data-day="' + e + '"]', t.wrapper).forEach(function (e) {
                                h(e, u, !t._deselect), o(e, c)
                            })
                        }))
                    }
                }
            }, {
                key: "_onmouseup", value: function (e) {
                    var t = this._opts, n = t.ranged, i = t.multiple, r = t.classNames.highlighted;
                    if (a("[data-day]." + r, this.wrapper).forEach(function (e) {
                        l(e, r)
                    }), this._dragStart && s(e.target, "[data-day]", this.node)) {
                        var o = this._highlighted.map(function (e) {
                            return new Date(e)
                        });
                        n || !i ? this.setDate(o) : this.toggleDate(o, !this._deselect), this.render(), i || n && !this._isDragging || this.hide()
                    }
                    n && !this._isDragging || (this._highlighted = [], this._dragStart = null), this._isDragging = !1
                }
            }, {
                key: "_onclick", value: function (e) {
                    var t = this, n = e.target;
                    n.hasAttribute("data-prev") ? this.prev(n.dataset.prev) : n.hasAttribute("data-next") ? this.next(n.dataset.next) : n.hasAttribute("data-year") && !n.onchange ? n.onchange = function () {
                        var e = n.dataset.year, i = t._month.getFullYear();
                        t._month.setFullYear(parseInt(n.value) - (e - i)), t.render()
                    } : n.hasAttribute("data-month") && !n.onchange ? n.onchange = function () {
                        t._month.setMonth(n.value - n.dataset.index), t.render()
                    } : n.hasAttribute("data-hour") && !n.onchange ? n.onchange = function () {
                        t.setTime(n.dataset.hour, n.value), n.parentNode.firstChild.textContent = n.selectedOptions[0].textContent
                    } : n.hasAttribute("data-minute") && !n.onchange ? n.onchange = function () {
                        t.setTime(n.dataset.minute, null, n.value), n.parentNode.firstChild.textContent = n.selectedOptions[0].textContent
                    } : n.hasAttribute("data-period") && !n.onchange && (n.onchange = function () {
                        var e = n.dataset.period, i = "am" === n.value ? -12 : 12;
                        a('[data-hour="' + e + '"] option', t.wrapper).forEach(function (e) {
                            e.value = parseInt(e.value) + i
                        }), t.setTime(e, (t._time ? t._time[e][0] : 0) + i), n.parentNode.firstChild.textContent = n.selectedOptions[0].textContent
                    })
                }
            }, {
                key: "set", value: function (e, t) {
                    if (e) {
                        if (m(e)) {
                            for (var n in this._noRender = !0, e.serialize && (this.set("serialize", e.serialize), delete e.serialize), e.deserialize && (this.set("deserialize", e.deserialize), delete e.deserialize), e) this.set(n, e[n]);
                            this._noRender = !1, t = this._opts
                        } else {
                            var i = v({}, this.constructor.defaults, this._opts);
                            e in this._set && (t = this._set[e](t, i)), m(t) && (t = v({}, i[e], t)), this._opts[e] = t
                        }
                        return this._isOpen && this.wrapper && this.render(), t
                    }
                }
            }, {
                key: "get", value: function (e) {
                    var t = this;
                    if (arguments.length > 1) return [].concat(Array.prototype.slice.call(arguments)).reduce(function (e, n) {
                        return e[n] = t.get(n), e
                    }, {});
                    var n = this._opts[e];
                    return m(n) && (n = v({}, n)), n
                }
            }, {
                key: "open", value: function (e) {
                    var t = [].concat(this.getDate());
                    "string" == typeof (e = e || this._opts.openOn || this._month) && ("first" === (e = e.toLowerCase()) && t.length ? e = t[0] : "last" === e && t.length ? e = t[t.length - 1] : "today" !== e && (e = this._opts.deserialize(e))), p(e) || (e = new Date), this.setTime(!!this._selected.length), this.goToDate(e), this.render(), this.show()
                }
            }, {
                key: "show", value: function () {
                    if (!this._opts.inline) {
                        this.wrapper.style.display = "block";
                        var e = this.node.getBoundingClientRect(), t = this._el.getBoundingClientRect(),
                            n = t.bottom - e.top + "px", i = e.bottom - t.top + "px";
                        this.wrapper.style.top = n, this.wrapper.style.right = "", this.wrapper.style.bottom = "", this.wrapper.style.left = 0;
                        var a = this.wrapper.getBoundingClientRect(), r = a.right > window.innerWidth,
                            s = a.bottom > window.innerHeight;
                        this.wrapper.style.top = s ? "" : n, this.wrapper.style.right = r ? 0 : "", this.wrapper.style.bottom = s ? i : "", this.wrapper.style.left = r ? "" : 0;
                        var o = (a = this.wrapper.getBoundingClientRect()).right >= a.width, l = a.bottom > a.height;
                        this.wrapper.style.top = s && l ? "" : n, this.wrapper.style.right = r && o ? 0 : "", this.wrapper.style.bottom = s && l ? i : "", this.wrapper.style.left = r && o ? "" : 0, this._isOpen = !0
                    }
                }
            }, {
                key: "hide", value: function () {
                    this._opts.inline || (this.wrapper.style.display = "none", this._isOpen = !1)
                }
            }, {
                key: "toggle", value: function () {
                    this._isOpen ? this.hide() : this.open()
                }
            }, {
                key: "next", value: function (e) {
                    var t = new Date(this._month.getTime());
                    e = Math.max(e || 1, 1), t.setMonth(t.getMonth() + e), this.goToDate(t)
                }
            }, {
                key: "prev", value: function (e) {
                    var t = new Date(this._month.getTime());
                    e = Math.max(e || 1, 1), t.setMonth(t.getMonth() - e), this.goToDate(t)
                }
            }, {
                key: "goToDate", value: function (e) {
                    (e = f(this._opts.deserialize(e))).setDate(1), this._month = e, this._isOpen && this.render(), this._opts.onNavigate && this._opts.onNavigate(e)
                }
            }, {
                key: "hasDate", value: function (e) {
                    return e = f(p(e) ? e : this._opts.deserialize(e)), !!this._selected && this._selected.indexOf(e.getTime()) > -1
                }
            }, {
                key: "addDate", value: function (e) {
                    this.toggleDate(e, !0)
                }
            }, {
                key: "removeDate", value: function (e) {
                    this.toggleDate(e, !1)
                }
            }, {
                key: "toggleDate", value: function (e, t) {
                    var n = this, i = this._opts, a = i.ranged, r = i.multiple, s = i.deserialize, o = [].concat(e);
                    o = (o = o.map(function (e) {
                        return p(e) ? e : s(e)
                    })).filter(function (e) {
                        return p(e) && n.dateAllowed(e)
                    }), a ? o = (o = o.concat(this.getDate()).sort(c)).length ? g(o[0], o.pop()) : [] : r || (o = o.slice(0, 1)), o.map(function (e) {
                        return f(e).getTime()
                    }).forEach(function (e) {
                        var i = n._selected.indexOf(e), s = i > -1;
                        s || !1 === t ? s && !0 !== t && n._selected.splice(i, 1) : a || r ? n._selected.push(e) : n._selected = [e]
                    }), this._update()
                }
            }, {
                key: "_update", value: function () {
                    var e = this._opts.onChange;
                    "input" === this._el.nodeName.toLowerCase() ? this._el.value = this.getValue() : this._el.dataset.value = this.getValue(), e && e(this.getDate())
                }
            }, {
                key: "getDate", value: function () {
                    var e = this._opts, t = e.ranged, n = e.multiple, i = e.time,
                        a = this._time ? this._time.start : [0, 0];
                    if (this._selected = (this._selected || []).sort(), n || t) {
                        var r = this._selected.map(function (e) {
                            return new Date(e)
                        });
                        if (i && r.length && (r[0].setHours(a[0], a[1]), r.length > 1)) {
                            var s = this._time ? this._time.end : [0, 0];
                            r[r.length - 1].setHours(s[0], s[1])
                        }
                        return r
                    }
                    if (this._selected.length) {
                        var o = new Date(this._selected[0]);
                        return o.setHours(a[0], a[1]), o
                    }
                }
            }, {
                key: "setDate", value: function (e) {
                    this._selected = [], this.addDate(e)
                }
            }, {
                key: "setTime", value: function (e, t, n) {
                    var i = this._opts, a = i.time, r = i.defaultTime;
                    a && (!0 !== e && this._time || (this._time = v({}, r)), e && !0 !== e && ("number" == typeof e && (n = t, t = e, e = "start"), e = "end" === e ? e : "start", t = !!t && parseInt(t, 10), n = !!n && parseInt(n, 10), t && !isNaN(t) && (this._time[e][0] = t), n && !isNaN(n) && (this._time[e][1] = n)), this._update())
                }
            }, {
                key: "getValue", value: function () {
                    var e = this._opts, t = e.ranged, n = e.separator, i = e.serialize, a = e.toValue,
                        r = [].concat(this.getDate() || []);
                    t && r.length > 1 && (r = [r[0], r.pop()]);
                    var s = r.map(i).join(n);
                    return a && (s = a(s, r)), s
                }
            }, {
                key: "setValue", value: function (e) {
                    var t = this._opts, n = t.ranged, i = t.time, a = t.separator, r = t.serialize, s = t.fromValue;
                    this._selected = [];
                    var o = s ? s(e) : e.split(a).filter(Boolean).map(r);
                    if (this.addDate(o), i && o.length) {
                        var l = o.sort(c)[0];
                        if (this.setTime("start", l.getHours(), l.getMinutes()), "ranged" === i || n) {
                            var h = o[o.length - 1];
                            this.setTime("end", h.getHours(), h.getMinutes())
                        }
                    }
                }
            }, {
                key: "dateAllowed", value: function (e, t) {
                    var n = this._opts, i = n.min, a = n.max, r = n.within, s = n.without, o = n.deserialize,
                        l = void 0, h = l = !0;
                    return e = f(p(e) ? e : o(e)), "month" == t ? (h = !i || e.getMonth() >= i.getMonth(), l = !a || e.getMonth() <= a.getMonth()) : "year" == t ? (h = !i || e.getFullYear() >= i.getFullYear(), l = !a || e.getFullYear() <= a.getFullYear()) : (h = !i || e >= i, l = !a || e <= a), h && l && (!s || !u(e, s, t)) && (!r || u(e, r, t))
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this._opts, n = t.ranged, a = t.time, r = t.onRender;
                    if (!this._noRender && this._renderers) {
                        var s = {}, o = function (t) {
                            return s[t] || (s[t] = e.getData(t))
                        };
                        this.wrapper.innerHTML = this._renderers.container({
                            renderHeader: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return e._renderHeader(o(t))
                            }, renderCalendar: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = o(t);
                                return e._renderers.calendar(i({}, n, {
                                    renderHeader: function () {
                                        return e._renderHeader(n)
                                    }, renderDay: function (t) {
                                        return e._renderers.day(t)
                                    }
                                }))
                            }, renderTimepicker: function () {
                                var t = "";
                                return a && (t = e._renderTimepicker("start"), ("ranged" === a || n) && (t += e._renderTimepicker("end"))), t
                            }
                        }), r && r(this.wrapper.firstChild)
                    }
                }
            }, {
                key: "getData", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = this._opts,
                        n = t.i18n, i = t.weekStart, a = t.serialize, r = t.min, s = t.max, o = t.classNames,
                        l = o.selected, h = o.disabled, u = o.otherMonth, c = o.weekend, p = o.today,
                        g = new Date(this._month.getTime());
                    g.setMonth(g.getMonth() + e);
                    var m = g.getMonth(), v = g.getFullYear(), _ = new Date(g.getTime());
                    _.setMonth(_.getMonth() + 1), _.setDate(1);
                    var y = new Date(g.getTime());
                    y.setMonth(y.getMonth() - 1), y.setDate(d(y));
                    for (var w = [], b = g.getDay() - i; b < 0;) b += 7;
                    for (var k = d(v, m) + b; k % 7;) k += 1;
                    for (var D = f(new Date), x = 0; x < k; x++) {
                        var M = new Date(v, m, x - b + 1), T = M.getMonth(), N = M.getDay(), S = this.hasDate(M),
                            C = !this.dateAllowed(M), E = T < m, z = T > m, O = !E && !z, j = 0 === N || 6 === N,
                            A = M.getTime() === D.getTime(), L = [];
                        S && L.push(l), C && L.push(h), O || L.push(u), j && L.push(c), A && L.push(p), w.push({
                            _date: M,
                            date: a(M),
                            daynum: M.getDate(),
                            timestamp: M.getTime(),
                            weekday: n.weekdays[N],
                            isSelected: S,
                            isDisabled: C,
                            isPrevMonth: E,
                            isNextMonth: z,
                            isThisMonth: O,
                            isWeekend: j,
                            isToday: A,
                            classNames: L
                        })
                    }
                    return {
                        _date: g,
                        index: e,
                        year: v,
                        month: n.months[m],
                        days: w,
                        weekdays: n.weekdays,
                        hasNext: !s || _ <= s,
                        hasPrev: !r || y >= r
                    }
                }
            }, {
                key: "_renderHeader", value: function (e) {
                    var t = this, n = this._opts, a = n.yearRange, r = n.i18n, s = e._date, o = e.index, l = e.year,
                        h = s.getMonth();
                    return this._renderers.header(i({}, e, {
                        renderMonthSelect: function () {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o, n = new Date(s.getTime()), i = [], a = 0; a < 12; a++) n.setMonth(a), i.push({
                                text: r.months[a],
                                disabled: !t.dateAllowed(n, "month"),
                                selected: a === h,
                                value: a
                            });
                            return t._renderers.select({
                                index: e,
                                type: "month",
                                text: r.months[h],
                                value: h,
                                options: i
                            })
                        }, renderYearSelect: function () {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o, n = new Date(s.getTime()), i = l - a, r = l + a, h = []; i <= r; i++) n.setFullYear(i), h.push({
                                disabled: !t.dateAllowed(n, "year"),
                                selected: i === l,
                                value: i,
                                text: i
                            });
                            return t._renderers.select({index: e, type: "year", text: l, value: l, options: h})
                        }
                    }))
                }
            }, {
                key: "_renderTimepicker", value: function (e) {
                    var t = this, n = this._opts, i = n.ranged, a = n.time, r = n.i18n;
                    if (a) {
                        this._time || this.setTime(!0);
                        var s = this._time[e], o = r.time[0];
                        return ("ranged" === a || i) && (o = r.time["start" === e ? 1 : 2]), this._renderers.timepicker({
                            label: o,
                            renderHourSelect: function () {
                                for (var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = [], a = s[0], r = n ? 24 : 12, o = 0; o < r; o++) i.push({
                                    text: n || o ? o : "12",
                                    selected: a === o,
                                    disabled: !1,
                                    value: o
                                });
                                !n && a >= 12 ? i.forEach(function (e) {
                                    return e.selected = (e.value += 12) === a
                                }) : n || i.push(i.shift());
                                var l = i.filter(function (e) {
                                    return e.selected
                                })[0].text;
                                return t._renderers.select({index: 0, type: "hour", value: e, options: i, text: l})
                            },
                            renderMinuteSelect: function () {
                                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15, i = [], a = 0; a < 60; a += n) i.push({
                                    text: a < 10 ? "0" + a : a,
                                    selected: s[1] === a,
                                    disabled: !1,
                                    value: a
                                });
                                var r = i.filter(function (e) {
                                    return e.selected
                                })[0].text;
                                return t._renderers.select({index: null, type: "minute", value: e, options: i, text: r})
                            },
                            renderPeriodSelect: function () {
                                return t._renderers.select({
                                    index: null,
                                    type: "period",
                                    text: s[0] >= 12 ? "PM" : "AM",
                                    value: e,
                                    options: [{text: "AM", value: "am", selected: s[0] < 12}, {
                                        text: "PM",
                                        value: "pm",
                                        selected: s[0] >= 12
                                    }]
                                })
                            }
                        })
                    }
                }
            }]), e
        }();
        return b.defaults = w, b
    });
}