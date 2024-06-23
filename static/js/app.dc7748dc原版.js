(function () {
    "use strict";

    var t = {
        8067: function (t, a, n) {
            var p, s, o = n(7195),
                e = function () {
                    var t = this,
                        a = t._self._c;
                    return a("div", { class: ["page"] }, [a("router-view")], 1)
                },
                u = [],
                l = {
                    name: "App",
                    data() {
                        return {}
                    },
                    methods: {},
                    mounted() {},
                    beforeDestroy() {}
                },
                m = l,
                r = n(1001),
                h = (0, r.Z)(m, e, u, !1, null, null, null),
                c = h.exports,
                i = n(2241),
                d = function () {
                    var t = this;
                    t._self._c;
                    return t._m(0)
                },
                g = [function () {
                    var t = this,
                        a = t._self._c;
                    return a("div", { staticClass: "header" }, [
                        a("div", { staticClass: "container" }, [
                            a("div", { staticClass: "left" }, [
                                a("a", { attrs: { href: "/" } }, [
                                    a("div", { staticClass: "logo" }, [t._v("HelloWindows.cn")])
                                ]),
                                a("div", { staticClass: "desc" }, [t._v("精校 完整 极致 Windows系统下载仓储站")])
                            ]),
                            a("div", { staticClass: "right" }, [
                                a("div", [t._v("关于")])
                            ])
                        ])
                    ])
                }],
                b = {
                    name: "Header",
                    data() {
                        return {}
                    },
                    methods: {
                        hello() {
                            console.log("hello")
                        }
                    },
                    mounted() {}
                },
                w = b,
                A = (0, r.Z)(w, d, g, !1, null, null, null),
                v = A.exports,
                C = function () {
                    var t = this,
                        a = t._self._c;
                    return a("div", { class: ["container", { isPhone: t.isPhone }] }, [
                        t.showPwd ? a("div", { class: ["password", { isPhone: t.isPhone }] }, [
                            a("div", { staticClass: "pass-box" }, [
                                a("div", { staticClass: "input-box" }, [
                                    a("el-input", {
                                        attrs: { placeholder: "请输入6位验证码" },
                                        model: {
                                            value: t.inputPwd,
                                            callback: function (a) {
                                                t.inputPwd = a
                                            },
                                            expression: "inputPwd"
                                        }
                                    }),
                                    a("el-button", {
                                        staticClass: "pwdButton",
                                        attrs: { type: "danger" },
                                        on: { click: t.submitPwd }
                                    }, [t._v("确认")])
                                ], 1),
                                t._m(0),
                                a("img", { staticClass: "wechat", attrs: { src: n(2551) } })
                            ])
                        ]) : t._e(),
                        t.showPwd ? t._e() : a("div", [
                            t._m(1),
                            a("div", { staticClass: "item-tabs" }, [
                                a("el-tabs", { attrs: { tabPosition: "left", value: "Adobe" } }, t._l(t.db, (function (n, p) {
                                    return a("el-tab-pane", {
                                        key: p,
                                        staticClass: "tab-66",
                                        attrs: { name: n.tab, lazy: "", disabled: !n.tab }
                                    }, [
                                        a("span", {
                                            staticClass: "tab-title",
                                            attrs: { slot: "label" },
                                            slot: "label"
                                        }, [t._v(t._s(n.tab))]),
                                        a("div", { staticClass: "tab-content" }, [
                                            a("el-collapse", {
                                                staticClass: "11111111111",
                                                attrs: { accordion: "" }
                                            }, t._l(n.list, (function (n, p) {
                                                return a("el-collapse-item", {
                                                    key: p,
                                                    staticClass: "item",
                                                    attrs: { name: n.title, disabled: !n.nav.length }
                                                }, [
                                                    a("template", { slot: "title" }, [
                                                        a("el-image", {
                                                            staticClass: "img",
                                                            attrs: { src: n.icon }
                                                        }, [
                                                            a("span", {
                                                                staticClass: "img-err",
                                                                attrs: { slot: "error" },
                                                                slot: "error"
                                                            }, [t._v(" " + t._s(n.title[0]) + " ")])
                                                        ]),
                                                        a("span", { staticClass: "item-name" }, [t._v(t._s(n.title))])
                                                    ], 1),
                                                    a("div", { staticClass: "item-content" }, t._l(n.nav, (function (n, p) {
                                                        return a("a", {
                                                            key: p,
                                                            staticClass: "nav",
                                                            attrs: { href: n.url, target: "_blank" }
                                                        }, [
                                                            a("div", { staticClass: "name" }, [t._v(t._s(n.name))]),
                                                            a("div", { staticClass: "urls" }, [
                                                                n.url ? a("a", {
                                                                    staticClass: "url",
                                                                    attrs: { href: n.url, target: "_blank" }
                                                                }, [t._v("百度网盘")]) : t._e(),
                                                                n.uc ? a("a", {
                                                                    staticClass: "uc url",
                                                                    attrs: { href: n.uc, target: "_blank" }
                                                                }, [t._v("夸克网盘")]) : t._e(),
                                                                n.post ? a("a", {
                                                                    staticClass: "post url",
                                                                    attrs: { href: n.post, target: "_blank" }
                                                                }, [t._v("教程")]) : t._e(),
                                                                a("div", { staticClass: "el-icon-arrow-right" })
                                                            ])
                                                        ])
                                                    })), 0)
                                                ])
                                            })), 1)
                                        ], 1)
                                    ])
                                })), 1)
                            ]),
                            a("div", { staticClass: "footer" }, [
                                a("a", { staticClass: "time", attrs: { href: "/" } }, [
                                    t._v("共收录" + t._s(t.softCount) + "个软件"),
                                    a("br"),
                                    t._v("Copyright © " + t._s(t.time) + " XU5.CC")
                                ])
                            ])
                        ])
                    ])
                },
                D = [function () {
                    var t = this,
                        a = t._self._c;
                    return a("div", { staticClass: "desc" }, [
                        t._v(" 流量异常，请搜索并关注公众号"),
                        a("span", [t._v("软仓")]),
                        t._v("，发送"),
                        a("span", [t._v("验证码")]),
                        t._v("，即可免费获取验证码！"),
                        a("br"),
                        a("br"),
                        t._v(" 一直免费，从未收费！也永远不会收费！ ")
                    ])
                }, function () {
                    var t = this,
                        a = t._self._c;
                    return a("div", { staticClass: "head" }, [
                        a("a", { staticClass: "sitename", attrs: { href: "/" } }, [t._v("XU5.CC")]),
						
                      a("div", { staticClass: "des" }, [
                       t._v("如果你想分享好软件请"),
                       a("a", { attrs: { href: "https://www.lvsefx.com/348.html" } }, [t._v("点击提交")]),
                     t._v("")
                            ])
                    ])
                }],
                f = JSON.parse('[{"tab":"Adobe","icon":"","list":[{"title":"Acrobat","icon":"static/img/icons/Acrobat_20DC.svg","nav":[{"name":"Ac|便携版","url":"https://pan.baidu.com/s/1G_BgCWeaXxcF1hDNxvec7A?pwd=tkha","uc":"https://pan.quark.cn/s/d72ad448e114"},{"name":"Ac|完整免激活","url":"https://pan.baidu.com/s/1FGtQWfD-C5llvfkbKo8E5w?pwd=307i","uc":"https://pan.quark.cn/s/2e25a38d422a"}]},{"title":"After Effects","icon":"/static/img/icons/after-effects.svg","nav":[{"name":"AE|完整免激活","url":"https://pan.baidu.com/s/1Urug5wVCET74ICccRHrTkQ?pwd=1wp0"}]},{"title":"Animate","icon":"/static/img/icons/animate.svg","nav":[{"name":"AN|便携版","url":"https://pan.baidu.com/s/1Og3F-5H9mVkbTz99NpC_Mg?pwd=gxj4","uc":"https://pan.quark.cn/s/22593caa2aca"},{"name":"AN|完整免激活","url":"https://pan.baidu.com/s/1vfs2D9MToTAAN-RBhvVX2A?pwd=x3l5","uc":"https://pan.quark.cn/s/90f1ed79277f"}]},{"title":"Audition","icon":"/static/img/icons/audition.svg","nav":[{"name":"AU|便携版","url":"https://pan.baidu.com/s/1CH2arhz9q2mLbHizjekBpA?pwd=jwt2","uc":"https://pan.quark.cn/s/e23a7edcd4e4"},{"name":"AU|完整免激活","url":"https://pan.baidu.com/s/1fZ7oRc99UV-KqVzilsl-Qw?pwd=rtfx","uc":"https://pan.quark.cn/s/d4e4f8a8cdc2"}]},{"title":"Bridge","icon":"/static/img/icons/bridge.svg","nav":[{"name":"BR|完整免激活","url":"https://pan.baidu.com/s/11P9wffvG1wbrBQx1BZQF7w?pwd=4fbb","uc":"https://pan.quark.cn/s/a3dd6c22a944"}]},{"title":"Character Animator","icon":"/static/img/icons/character-animator.svg","nav":[{"name":"CH|便携版","url":"https://pan.baidu.com/s/1n923Gu3zcg9Prng6KTSMng?pwd=xexo","uc":"https://pan.quark.cn/s/47869bffe4ef"},{"name":"CH|完整免激活","url":"https://pan.baidu.com/s/1GO0t5WgJdMdMpY3zCr_TwQ?pwd=du27","uc":"https://pan.quark.cn/s/1f7449df4418"}]},{"title":"Dimension","icon":"/static/img/icons/dimension.svg","nav":[{"name":"DN|完整免激活","url":"https://pan.baidu.com/s/1KT5wHB93pzJsFco_TROQzQ?pwd=f517","uc":"https://pan.quark.cn/s/49a0430daeb4"}]},{"title":"Dreamweaver","icon":"/static/img/icons/dreamweaver.svg","nav":[{"name":"DW|完整免激活","url":"https://pan.baidu.com/s/1qYaSWeVq8KXyh8KbCrZCbg?pwd=5txv","uc":"https://pan.quark.cn/s/4dfdd6ad1f86"}]},{"title":"illustrator","icon":"/static/img/icons/illustrator.svg","nav":[{"name":"AI|便携版","url":"https://pan.baidu.com/s/19XOwIp6OzgNAcRK38A2Z1Q?pwd=j1dh","uc":"https://pan.quark.cn/s/b6baf71ec61d"},{"name":"AI|完整免激活","url":"https://pan.baidu.com/s/1-Rzt3CdRbt_47_OaubSKCQ?pwd=rbl3","uc":"https://pan.quark.cn/s/fbae14ab6406"}]},{"title":"InCopy","icon":"/static/img/icons/incopy.svg","nav":[{"name":"IC|完整免激活","url":"https://pan.baidu.com/s/1KurQ9C7ZD95Z7708HHCXgA?pwd=5uxv","uc":"https://pan.quark.cn/s/ffcb06355dc4"}]},{"title":"InDesign","icon":"/static/img/icons/indesign.svg","nav":[{"name":"ID|完整免激活","url":"https://pan.baidu.com/s/1_yMFVE0al9fx1VkFDPA9uQ?pwd=lmvp","uc":"https://pan.quark.cn/s/f6e084b7d27c"}]},{"title":"Lightroom Classic","icon":"/static/img/icons/lightroom-classic.svg","nav":[{"name":"LRC|完整免激活","url":"https://pan.baidu.com/s/1b2cQXgxZkZkZTLIg5rsljA?pwd=fm7y","uc":"https://pan.quark.cn/s/4579d5bab3e3"}]},{"title":"Midea Encoder","icon":"/static/img/icons/media-encoder.svg","nav":[{"name":"ME|便携版","url":"https://pan.baidu.com/s/14LxbntA5A4duAlPrhsdQBA?pwd=mmm7","uc":"https://pan.quark.cn/s/5cd1b0c60cd7"},{"name":"ME|完整免激活","url":"https://pan.baidu.com/s/1_3XRS774j3h9vI2fqENtdg?pwd=qvcm","uc":"https://pan.quark.cn/s/266151e9eefc"}]},{"title":"Photoshop","icon":"/static/img/icons/photoshop.svg","nav":[{"name":"PS|便携版","url":"https://pan.baidu.com/s/1oiClfN653pQzyUeQiy2xHg?pwd=skg3","uc":"https://pan.quark.cn/s/c64354ce4c8a"},{"name":"PS|完整免激活","url":"https://pan.baidu.com/s/10cP9oQVBS-ObUvVX4QN2IQ?pwd=8noi","uc":"https://pan.quark.cn/s/14ffb873dd43"}]},{"title":"Photoshop Elements","icon":"/static/img/icons/Photoshop-Elements.svg","nav":[{"name":"PS|完整免激活","url":"https://pan.baidu.com/s/1bFWcQerJUstmlEe1D_g3Zw?pwd=r2tm","uc":"https://pan.quark.cn/s/5188fa645dac"}]},{"title":"Prelude","icon":"/static/img/icons/Prelude.svg","nav":[{"name":"PL|完整免激活","url":"https://pan.baidu.com/s/1rFO1LMMY17QKQ3nTr6PXlA?pwd=l0ff","uc":"https://pan.quark.cn/s/595de9175769"}]},{"title":"Premiere","icon":"/static/img/icons/premiere.svg","nav":[{"name":"PR|便携版","url":"https://pan.baidu.com/s/1NUIgEeSvXs66RAEWj0_tyA?pwd=vvx5","uc":"https://pan.quark.cn/s/6218e49dd0b3"},{"name":"PR|完整免激活","url":"https://pan.baidu.com/s/1ATPjkiW_MY9ixETXPpiL0A?pwd=q0u9","uc":"https://pan.quark.cn/s/78bdb8459899"}]},{"title":"Premiere Elements ","icon":"/static/img/icons/PremiereElements.svg","nav":[{"name":"PR|完整免激活","url":"https://pan.baidu.com/s/1sIGSxvhWj9bqy3k14O_hcg?pwd=7s63","uc":"https://pan.quark.cn/s/a94fee0fb612"}]}]},{"tab":"Autodesk","icon":"","list":[{"title":"AutoCAD","icon":"static/img/icons/AutoCAD.svg","nav":[{"name":"CAD|04-2025完整","url":"https://pan.baidu.com/s/1s6kQzX9cod-LxvtjWROTtw?pwd=s5t1","uc":"https://pan.quark.cn/s/9c5f48732cf7"},{"name":"CAD|07-2025精简","url":"https://pan.baidu.com/s/1nRgJrD5fs0h8wTeFd8lRjA?pwd=fxwk","uc":"https://pan.quark.cn/s/66bc34e003cd"}]},{"title":"Autodesk Inventor Professional","icon":"static/img/icons/Inventor.png","nav":[{"name":"Inventor|2022-2025版","url":"https://pan.baidu.com/s/1JrI8kUXXr-Z1_9xkbL9TeQ?pwd=b74f","uc":"https://pan.quark.cn/s/1123dec86d86"}]},{"title":"Autodesk revit","icon":"static/img/icons/Revit.png","nav":[{"name":"revit|2022-2025版","url":"https://pan.baidu.com/s/1i-h1M5KlnAsYLd6FoB7Jjw?pwd=8obh","uc":"https://pan.quark.cn/s/39004a2efc48"}]},{"title":"3D Studio Max","icon":"static/img/icons/3DSMax.png","nav":[{"name":"3DMX|2022-2025","url":"https://pan.baidu.com/s/1X9awlS-1mcwx2V0uRBaSxQ?pwd=0we3","uc":"https://pan.quark.cn/s/9f0ab560ed0f"}]},{"title":"Autodesk Maya","icon":"static/img/icons/MAYA.png","nav":[{"name":"Maya|2023-2025","url":"https://pan.baidu.com/s/1t6f2OHtsZO5mzwZsVjXvfA?pwd=fn0j","uc":"https://pan.quark.cn/s/dbb32a8094c8"}]}]},{"tab":"办公工具","icon":"","list":[{"title":"office 全家桶|支持2024版","icon":"static/img/icons/1.jpeg","nav":[{"name":"Office Installer工具","url":"https://pan.baidu.com/s/1PPN0o2wPkwVdwmdFQZnfMg?pwd=qgfi","uc":"https://pan.quark.cn/s/4cbf430a2ee5"},{"name":"office部署工具","url":"https://pan.baidu.com/s/1TgG9Amzvw_WbxeliFgtV5Q?pwd=796w","uc":"https://pan.quark.cn/s/27d4127e7107"},{"name":"Office Tool Plus","url":"https://pan.baidu.com/s/1t7A8c8Br6ouMBeiYopqQGw?pwd=akfx","uc":"https://pan.quark.cn/s/52d2057be8ec"}]},{"title":"XMind思维导图","icon":"static/img/icons/2.jpeg","nav":[{"name":"XMind|2024","url":"https://pan.baidu.com/s/1uaK24sFlSfTHMjL_74x-sw?pwd=v2zm","uc":"https://pan.quark.cn/s/08b4388ae48f"},{"name":"XMind|2023","url":"https://pan.baidu.com/s/1wgFRjYvQ_S-1MjD0hWzYNg?pwd=yb6n","uc":"https://pan.quark.cn/s/4524196f8eb6"}]}]},{"tab":"其它设计","icon":"","list":[{"title":"ACDSee","icon":"static/img/icons/ACDSee.png","nav":[{"name":"ACDSee|2020-2024","url":"https://pan.baidu.com/s/1HYgNGQ1annp3Ao9icGc8Pg?pwd=thyv","uc":"https://pan.quark.cn/s/28f9f22f6c6a"}]},{"title":"SolidWorks","icon":"static/img/icons/SolidWorks.svg","nav":[{"name":"SW|2017-2024","url":"https://pan.baidu.com/s/1VhYIRzs7oX7Fn1BaoIn0EQ?pwd=bjm8","uc":"https://pan.quark.cn/s/a37db6132035"}]}]}]'),
                P = {
                    name: "index",
                    data() {
                        return {
                            db: f,
                            showPwd: !1,
                            pwd: "242526",
                            expiredDay: 15,
                            inputPwd: "",
                            isPhone: !1
                        }
                    },
                    methods: {
                        submitPwd() {
                            if (this.inputPwd === this.pwd) {
                                let t = new Date;
                                t.setDate(t.getDate() + this.expiredDay);
                                document.cookie = "password=" + this.pwd + ";path=/;expires=" + t.toGMTString() + ";";
                                this.showPwd = !1
                            } else this.$message.error("验证码错误，请输入6位验证码")
                        },
                        handleResize() {
                            this.isPhone = /Mobile/.test(navigator.userAgent)
                        }
                    },
                    computed: {
                        time() {
                            const t = new Date;
                            return "2017-" + t.getFullYear()
                        },
                        softCount() {
                            let t = 0;
                            return this.db.forEach((a => {
                                a.list.forEach((a => {
                                    t += a.nav.length
                                }))
                            })), t
                        }
                    },
                    mounted() {
                        let t = new RegExp("password=" + this.pwd, "g");
                        t.test(document.cookie) || (this.showPwd = !0);
                        this.handleResize();
                        window.addEventListener("resize", this.handleResize)
                    },
                    beforeDestroy() {
                        window.removeEventListener("resize", this.handleResize)
                    }
                },
                k = P,
                Q = (0, r.Z)(k, C, D, !1, null, null, null),
                R = Q.exports,
                S = {},
                y = (0, r.Z)(S, p, s, !1, null, null, null),
                _ = y.exports,
                M = n(5114);
            o["default"].use(i.ZP);
            o["default"].component("Header", v);
            const x = [{ path: "/", component: R }, { path: "/admin", component: _ }, { path: "*", redirect: "/" }];
            o["default"].use(M.Button);
            o["default"].use(M.Tabs);
            o["default"].use(M.TabPane);
            o["default"].use(M.Collapse);
            o["default"].use(M.CollapseItem);
            o["default"].use(M.Image);
            o["default"].use(M.Icon);
            o["default"].use(M.Select);
            o["default"].use(M.Option);
            o["default"].use(M.Input);
            o["default"].prototype.$message = M.Message;
            o["default"].prototype.$prompt = M.MessageBox.prompt;
            o["default"].config.productionTip = !1;
            const E = new i.ZP({ routes: x, mode: "history" });
            new o["default"]({ render: t => t(c), router: E }).$mount("#app")
        },
        2551: function (t, a, n) {
            t.exports = n.p + "img/wx-rc-white.837c33c9.png"
        }
    },
        a = {};

    function n(p) {
        var s = a[p];
        if (void 0 !== s) return s.exports;
        var o = a[p] = { id: p, loaded: !1, exports: {} };
        return t[p].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }
    n.m = t;
    (function () {
        n.amdO = {}
    })();
    (function () {
        var t = [];
        n.O = function (a, p, s, o) {
            if (!p) {
                var e = 1 / 0;
                for (r = 0; r < t.length; r++) {
                    p = t[r][0], s = t[r][1], o = t[r][2];
                    for (var u = !0, l = 0; l < p.length; l++)(!1 & o || e >= o) && Object.keys(n.O).every((function (t) {
                        return n.O[t](p[l])
                    })) ? p.splice(l--, 1) : (u = !1, o < e && (e = o));
                    if (u) {
                        t.splice(r--, 1);
                        var m = s();
                        void 0 !== m && (a = m)
                    }
                }
                return a
            }
            o = o || 0;
            for (var r = t.length; r > 0 && t[r - 1][2] > o; r--) t[r] = t[r - 1];
            t[r] = [p, s, o]
        }
    })();
    (function () {
        n.n = function (t) {
            var a = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return n.d(a, { a: a }), a
        }
    })();
    (function () {
        n.d = function (t, a) {
            for (var p in a) n.o(a, p) && !n.o(t, p) && Object.defineProperty(t, p, { enumerable: !0, get: a[p] })
        }
    })();
    (function () {
        n.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window) return window
            }
        }
    })();
    (function () {
        n.o = function (t, a) {
            return Object.prototype.hasOwnProperty.call(t, a)
        }
    })();
    (function () {
        n.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
            Object.defineProperty(t, "__esModule", { value: !0 })
        }
    })();
    (function () {
        n.nmd = function (t) {
            return t.paths = [], t.children || (t.children = []), t
        }
    })();
    (function () {
        n.p = "/"
    })();
    (function () {
        var t = { 143: 0 };
        n.O.j = function (a) {
            return 0 === t[a]
        };
        var a = function (a, p) {
            var s, o, e = p[0],
                u = p[1],
                l = p[2],
                m = 0;
            if (e.some((function (a) {
                return 0 !== t[a]
            }))) {
                for (s in u) n.o(u, s) && (n.m[s] = u[s]);
                if (l) var r = l(n)
            }
            for (a && a(p); m < e.length; m++) o = e[m], n.o(t, o) && t[o] && t[o][0](), t[o] = 0;
            return n.O(r)
        },
            p = self["webpackChunkname"] = self["webpackChunkname"] || [];
        p.forEach(a.bind(null, 0)), p.push = a.bind(null, p.push.bind(p))
    })();
    var p = n.O(void 0, [998], (function () {
        return n(8067)
    }));
    p = n.O(p)
})();
