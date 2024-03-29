var requirejs, require, define; !
function(global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }
    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }
    function each(e, t) {
        if (e) {
            var i;
            for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
        }
    }
    function eachReverse(e, t) {
        if (e) {
            var i;
            for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
        }
    }
    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }
    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }
    function eachProp(e, t) {
        var i;
        for (i in e) if (hasProp(e, i) && t(e[i], i)) break
    }
    function mixin(e, t, i, r) {
        return t && eachProp(t,
        function(t, n) { ! i && hasProp(e, n) || (r && "string" != typeof t ? (e[n] || (e[n] = {}), mixin(e[n], t, i, r)) : e[n] = t)
        }),
        e
    }
    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."),
        function(e) {
            t = t[e]
        }),
        t
    }
    function makeError(e, t, i, r) {
        var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return n.requireType = e,
        n.requireModules = r,
        i && (n.originalError = i),
        n
    }
    function newContext(e) {
        function t(e) {
            var t, i;
            for (t = 0; e[t]; t += 1) if (i = e[t], "." === i) e.splice(t, 1),
            t -= 1;
            else if (".." === i) {
                if (1 === t && (".." === e[2] || ".." === e[0])) break;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }
        function i(e, i, r) {
            var n, a, o, s, c, u, d, p, f, l, h, m = i && i.split("/"),
            g = m,
            v = y.map,
            x = v && v["*"];
            if (e && "." === e.charAt(0) && (i ? (g = getOwn(y.pkgs, i) ? m = [i] : m.slice(0, m.length - 1), e = g.concat(e.split("/")), t(e), a = getOwn(y.pkgs, n = e[0]), e = e.join("/"), a && e === n + "/" + a.main && (e = n)) : 0 === e.indexOf("./") && (e = e.substring(2))), r && (m || x) && v) {
                for (s = e.split("/"), c = s.length; c > 0; c -= 1) {
                    if (d = s.slice(0, c).join("/"), m) for (u = m.length; u > 0; u -= 1) if (o = getOwn(v, m.slice(0, u).join("/")), o && (o = getOwn(o, d))) {
                        p = o,
                        f = c;
                        break
                    }
                    if (p) break; ! l && x && getOwn(x, d) && (l = getOwn(x, d), h = c)
                } ! p && l && (p = l, f = h),
                p && (s.splice(0, f, p), e = s.join("/"))
            }
            return e
        }
        function r(e) {
            isBrowser && each(scripts(),
            function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }
        function n(e) {
            var t = getOwn(y.paths, e);
            return t && isArray(t) && t.length > 1 ? (r(e), t.shift(), q.require.undef(e), q.require([e]), !0) : void 0
        }
        function a(e) {
            var t, i = e ? e.indexOf("!") : -1;
            return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)),
            [t, e]
        }
        function o(e, t, r, n) {
            var o, s, c, u, d = null,
            p = t ? t.name: null,
            f = e,
            l = !0,
            h = "";
            return e || (l = !1, e = "_@r" + (P += 1)),
            u = a(e),
            d = u[0],
            e = u[1],
            d && (d = i(d, p, n), s = getOwn(O, d)),
            e && (d ? h = s && s.normalize ? s.normalize(e,
            function(e) {
                return i(e, p, n)
            }) : i(e, p, n) : (h = i(e, p, n), u = a(h), d = u[0], h = u[1], r = !0, o = q.nameToUrl(h))),
            c = !d || s || r ? "": "_unnormalized" + (A += 1),
            {
                prefix: d,
                name: h,
                parentMap: t,
                unnormalized: !!c,
                url: o,
                originalName: f,
                isDefine: l,
                id: (d ? d + "!" + h: h) + c
            }
        }
        function s(e) {
            var t = e.id,
            i = getOwn(k, t);
            return i || (i = k[t] = new q.Module(e)),
            i
        }
        function c(e, t, i) {
            var r = e.id,
            n = getOwn(k, r); ! hasProp(O, r) || n && !n.defineEmitComplete ? s(e).on(t, i) : "defined" === t && i(O[r])
        }
        function u(e, t) {
            var i = e.requireModules,
            r = !1;
            t ? t(e) : (each(i,
            function(t) {
                var i = getOwn(k, t);
                i && (i.error = e, i.events.error && (r = !0, i.emit("error", e)))
            }), r || req.onError(e))
        }
        function d() {
            globalDefQueue.length && (apsp.apply(S, [S.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }
        function p(e) {
            delete k[e]
        }
        function f(e, t, i) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps,
            function(r, n) {
                var a = r.id,
                o = getOwn(k, a); ! o || e.depMatched[n] || i[a] || (getOwn(t, a) ? (e.defineDep(n, O[a]), e.check()) : f(o, t, i))
            }), i[r] = !0)
        }
        function l() {
            var e, t, i, a, o = 1e3 * y.waitSeconds,
            s = o && q.startTime + o < (new Date).getTime(),
            c = [],
            d = [],
            p = !1,
            h = !0;
            if (!x) {
                if (x = !0, eachProp(k,
                function(i) {
                    if (e = i.map, t = e.id, i.enabled && (e.isDefine || d.push(i), !i.error)) if (!i.inited && s) n(t) ? (a = !0, p = !0) : (c.push(t), r(t));
                    else if (!i.inited && i.fetched && e.isDefine && (p = !0, !e.prefix)) return h = !1
                }), s && c.length) return i = makeError("timeout", "Load timeout for modules: " + c, null, c),
                i.contextName = q.contextName,
                u(i);
                h && each(d,
                function(e) {
                    f(e, {},
                    {})
                }),
                s && !a || !p || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
                    w = 0,
                    l()
                },
                50)),
                x = !1
            }
        }
        function h(e) {
            hasProp(O, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2])
        }
        function m(e, t, i, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
        }
        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, q.onScriptLoad, "load", "onreadystatechange"),
            m(t, q.onScriptError, "error"),
            {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }
        function v() {
            var e;
            for (d(); S.length;) {
                if (e = S.shift(), null === e[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
        }
        var x, b, q, E, w, y = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            pkgs: {},
            shim: {},
            map: {},
            config: {}
        },
        k = {},
        M = {},
        S = [],
        O = {},
        j = {},
        P = 1,
        A = 1;
        return E = {
            require: function(e) {
                return e.require ? e.require: e.require = q.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0,
                e.map.isDefine ? e.exports ? e.exports: e.exports = O[e.map.id] = {}: void 0
            },
            module: function(e) {
                return e.module ? e.module: e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return y.config && getOwn(y.config, e.map.id) || {}
                    },
                    exports: O[e.map.id]
                }
            }
        },
        b = function(e) {
            this.events = getOwn(M, e.id) || {},
            this.map = e,
            this.shim = getOwn(y.shim, e.id),
            this.depExports = [],
            this.depMaps = [],
            this.depMatched = [],
            this.pluginMaps = {},
            this.depCount = 0
        },
        b.prototype = {
            init: function(e, t, i, r) {
                r = r || {},
                this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this,
                function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0,
                    q.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void q.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this,
                    function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                j[e] || (j[e] = !0, q.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, i = this.map.id,
                    r = this.depExports,
                    n = this.exports,
                    a = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(a)) {
                                    if (this.events.error) try {
                                        n = q.execCb(i, a, r, n)
                                    } catch(o) {
                                        e = o
                                    } else n = q.execCb(i, a, r, n);
                                    if (this.map.isDefine && (t = this.module, t && void 0 !== t.exports && t.exports !== this.exports ? n = t.exports: void 0 === n && this.usingExports && (n = this.exports)), e) return e.requireMap = this.map,
                                    e.requireModules = [this.map.id],
                                    e.requireType = "define",
                                    u(this.error = e)
                                } else n = a;
                                this.exports = n,
                                this.map.isDefine && !this.ignore && (O[i] = n, req.onResourceLoad && req.onResourceLoad(q, this.map, this.depMaps)),
                                delete k[i],
                                this.defined = !0
                            }
                            this.defining = !1,
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                t = e.id,
                r = o(e.prefix);
                this.depMaps.push(r),
                c(r, "defined", bind(this,
                function(r) {
                    var n, a, d, f = this.map.name,
                    l = this.map.parentMap ? this.map.parentMap.name: null,
                    h = q.makeRequire(e.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (r.normalize && (f = r.normalize(f,
                    function(e) {
                        return i(e, l, !0)
                    }) || ""), a = o(e.prefix + "!" + f, this.map.parentMap), c(a, "defined", bind(this,
                    function(e) {
                        this.init([],
                        function() {
                            return e
                        },
                        null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), d = getOwn(k, a.id), void(d && (this.depMaps.push(a), this.events.error && d.on("error", bind(this,
                    function(e) {
                        this.emit("error", e)
                    })), d.enable()))) : (n = bind(this,
                    function(e) {
                        this.init([],
                        function() {
                            return e
                        },
                        null, {
                            enabled: !0
                        })
                    }), n.error = bind(this,
                    function(e) {
                        this.inited = !0,
                        this.error = e,
                        e.requireModules = [t],
                        eachProp(k,
                        function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && p(e.map.id)
                        }),
                        u(e)
                    }), n.fromText = bind(this,
                    function(i, r) {
                        var a = e.name,
                        c = o(a),
                        d = useInteractive;
                        r && (i = r),
                        d && (useInteractive = !1),
                        s(c),
                        hasProp(y.config, t) && (y.config[a] = y.config[t]);
                        try {
                            req.exec(i)
                        } catch(p) {
                            return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + p, p, [t]))
                        }
                        d && (useInteractive = !0),
                        this.depMaps.push(c),
                        q.completeLoad(a),
                        h([a], n)
                    }), void r.load(e.name, h, n, y))
                })),
                q.enable(r, this),
                this.pluginMaps[r.id] = r
            },
            enable: function() {
                this.enabled = !0,
                this.enabling = !0,
                each(this.depMaps, bind(this,
                function(e, t) {
                    var i, r, n;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map: this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = getOwn(E, e.id)) return void(this.depExports[t] = n(this));
                        this.depCount += 1,
                        c(e, "defined", bind(this,
                        function(e) {
                            this.defineDep(t, e),
                            this.check()
                        })),
                        this.errback && c(e, "error", this.errback)
                    }
                    i = e.id,
                    r = k[i],
                    hasProp(E, i) || !r || r.enabled || q.enable(e, this)
                })),
                eachProp(this.pluginMaps, bind(this,
                function(e) {
                    var t = getOwn(k, e.id);
                    t && !t.enabled && q.enable(e, this)
                })),
                this.enabling = !1,
                this.check()
            },
            on: function(e, t) {
                var i = this.events[e];
                i || (i = this.events[e] = []),
                i.push(t)
            },
            emit: function(e, t) {
                each(this.events[e],
                function(e) {
                    e(t)
                }),
                "error" === e && delete this.events[e]
            }
        },
        q = {
            config: y,
            contextName: e,
            registry: k,
            defined: O,
            urlFetched: j,
            defQueue: S,
            Module: b,
            makeModuleMap: o,
            nextTick: req.nextTick,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = y.pkgs,
                i = y.shim,
                r = {
                    paths: !0,
                    config: !0,
                    map: !0
                };
                eachProp(e,
                function(e, t) {
                    r[t] ? "map" === t ? mixin(y[t], e, !0, !0) : mixin(y[t], e, !0) : y[t] = e
                }),
                e.shim && (eachProp(e.shim,
                function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }),
                    !e.exports && !e.init || e.exportsFn || (e.exportsFn = q.makeShimExports(e)),
                    i[t] = e
                }), y.shim = i),
                e.packages && (each(e.packages,
                function(e) {
                    var i;
                    e = "string" == typeof e ? {
                        name: e
                    }: e,
                    i = e.location,
                    t[e.name] = {
                        name: e.name,
                        location: i || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), y.pkgs = t),
                eachProp(k,
                function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = o(t))
                }),
                (e.deps || e.callback) && q.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)),
                    t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, r) {
                function n(i, a, c) {
                    var d, p, f;
                    return r.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0),
                    "string" == typeof i ? isFunction(a) ? u(makeError("requireargs", "Invalid require call"), c) : t && hasProp(E, i) ? E[i](k[t.id]) : req.get ? req.get(q, i, t) : (p = o(i, t, !1, !0), d = p.id, hasProp(O, d) ? O[d] : u(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "": ". Use require([])")))) : (v(), q.nextTick(function() {
                        v(),
                        f = s(o(null, t)),
                        f.skipMap = r.skipMap,
                        f.init(i, a, c, {
                            enabled: !0
                        }),
                        l()
                    }), n)
                }
                return r = r || {},
                mixin(n, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var r, n, a = e.lastIndexOf("."),
                        o = e.split("/")[0],
                        s = "." === o || ".." === o;
                        return - 1 !== a && (!s || a > 1) && (r = e.substring(a, e.length), e = e.substring(0, a)),
                        n = q.nameToUrl(i(e, t && t.id, !0), r || ".fake"),
                        r ? n: n.substring(0, n.length - 5)
                    },
                    defined: function(e) {
                        return hasProp(O, o(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = o(e, t, !1, !0).id,
                        hasProp(O, e) || hasProp(k, e)
                    }
                }),
                t || (n.undef = function(e) {
                    d();
                    var i = o(e, t, !0),
                    r = getOwn(k, e);
                    delete O[e],
                    delete j[i.url],
                    delete M[e],
                    r && (r.events.defined && (M[e] = r.events), p(e))
                }),
                n
            },
            enable: function(e) {
                var t = getOwn(k, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, i, r, a = getOwn(y.shim, e) || {},
                o = a.exports;
                for (d(); S.length;) {
                    if (i = S.shift(), null === i[0]) {
                        if (i[0] = e, t) break;
                        t = !0
                    } else i[0] === e && (t = !0);
                    h(i)
                }
                if (r = getOwn(k, e), !t && !hasProp(O, e) && r && !r.inited) {
                    if (! (!y.enforceDefine || o && getGlobal(o))) return n(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                    h([e, a.deps || [], a.exportsFn])
                }
                l()
            },
            nameToUrl: function(e, t) {
                var i, r, n, a, o, s, c, u, d;
                if (req.jsExtRegExp.test(e)) u = e + (t || "");
                else {
                    for (i = y.paths, r = y.pkgs, o = e.split("/"), s = o.length; s > 0; s -= 1) {
                        if (c = o.slice(0, s).join("/"), n = getOwn(r, c), d = getOwn(i, c)) {
                            isArray(d) && (d = d[0]),
                            o.splice(0, s, d);
                            break
                        }
                        if (n) {
                            a = e === n.name ? n.location + "/" + n.main: n.location,
                            o.splice(0, s, a);
                            break
                        }
                    }
                    u = o.join("/"),
                    u += t || (/\?/.test(u) ? "": ".js"),
                    u = ("/" === u.charAt(0) || u.match(/^[\w\+\.\-]+:/) ? "": y.baseUrl) + u
                }
                return y.urlArgs ? u + (( - 1 === u.indexOf("?") ? "?": "&") + y.urlArgs) : u
            },
            load: function(e, t) {
                req.load(q, e, t)
            },
            execCb: function(e, t, i, r) {
                return t.apply(r, i)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    q.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                return n(t.id) ? void 0 : u(makeError("scripterror", "Script error", e, [t.id]))
            }
        },
        q.require = q.makeRequire(),
        q
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript: (eachReverse(scripts(),
        function(e) {
            return "interactive" === e.readyState ? interactiveScript = e: void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.4",
    commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    ap = Array.prototype,
    apsp = ap.splice,
    isBrowser = !("undefined" == typeof window || !navigator || !document),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/: /^(complete|loaded)$/,
    defContextName = "_",
    isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs,
            requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0),
        req = requirejs = function(e, t, i, r) {
            var n, a, o = defContextName;
            return isArray(e) || "string" == typeof e || (a = e, isArray(t) ? (e = t, t = i, i = r) : e = []),
            a && a.context && (o = a.context),
            n = getOwn(contexts, o),
            n || (n = contexts[o] = req.s.newContext(o)),
            a && n.configure(a),
            n.require(e, t, i)
        },
        req.config = function(e) {
            return req(e)
        },
        req.nextTick = "undefined" != typeof setTimeout ?
        function(e) {
            setTimeout(e, 4)
        }: function(e) {
            e()
        },
        require || (require = req),
        req.version = version,
        req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser,
        s = req.s = {
            contexts: contexts,
            newContext: newContext
        },
        req({}),
        each(["toUrl", "undef", "defined", "specified"],
        function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }),
        isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)),
        req.onError = function(e) {
            throw e
        },
        req.load = function(e, t, i) {
            var r, n = e && e.config || {};
            return isBrowser ? (r = n.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), r.type = n.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = i, currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r) : void(isWebWorker && (importScripts(i), e.completeLoad(t)))
        },
        isBrowser && eachReverse(scripts(),
        function(e) {
            return head || (head = e.parentNode),
            dataMain = e.getAttribute("data-main"),
            dataMain ? (cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/": "./", cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ""), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0) : void 0
        }),
        define = function(e, t, i) {
            var r, n;
            "string" != typeof e && (i = t, t = e, e = null),
            isArray(t) || (i = t, t = []),
            !t.length && isFunction(i) && i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp,
            function(e, i) {
                t.push(i)
            }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t)),
            useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), n = contexts[r.getAttribute("data-requirecontext")])),
            (n ? n.defQueue: globalDefQueue).push([e, t, i])
        },
        define.amd = {
            jQuery: !0
        },
        req.exec = function(text) {
            return eval(text)
        },
        req(cfg)
    }
} (this);
/* kaka:160812125125,mollyywang */
