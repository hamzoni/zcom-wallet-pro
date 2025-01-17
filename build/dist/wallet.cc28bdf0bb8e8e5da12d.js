(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        1917: function(e, t, a) {
            "use strict";
            var n = a(0),
                l = a.n(n),
                r = a(2105),
                c = a(3),
                s = a.n(c),
                o = a(68),
                i = a(8),
                u = a.n(i),
                m = a(19),
                p = a(732),
                d = a(17),
                h = a.n(d),
                w = a(1),
                b = a.n(w),
                f = (a(1810),
                (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })());
            function E(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function v(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function _(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var y = (function(e) {
                function t() {
                    E(this, t);
                    var e = v(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {success: !1}), e;
                }
                return (
                    _(t, n["Component"]),
                    f(t, [
                        {
                            key: "onAccept",
                            value: function(e) {
                                var t = this;
                                e.preventDefault();
                                var a = this.state,
                                    n = a.old_password,
                                    l = a.new_password;
                                m.a
                                    .changePassword(n, l, !0)
                                    .then(function() {
                                        o.a.success("Password changed"),
                                            t.setState({success: !0});
                                    })
                                    .catch(function(e) {
                                        console.error(e),
                                            o.a.error(
                                                "Unable to change password: " +
                                                    e
                                            );
                                    });
                            }
                        },
                        {
                            key: "onOldPassword",
                            value: function(e) {
                                this.setState({old_password: e});
                            }
                        },
                        {
                            key: "onNewPassword",
                            value: function(e) {
                                this.setState({new_password: e});
                            }
                        },
                        {
                            key: "_onCancel",
                            value: function() {
                                this.setState({old_password: ""}),
                                    this.refs.pwd.cancel();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = !!this.state.new_password;
                                return this.state.success
                                    ? l.a.createElement(
                                          "div",
                                          null,
                                          l.a.createElement(s.a, {
                                              component: "p",
                                              content: "wallet.change_success"
                                          }),
                                          l.a.createElement(s.a, {
                                              component: "p",
                                              content: "wallet.change_backup"
                                          }),
                                          l.a.createElement(
                                              r.a,
                                              {to: "/wallet/backup/create"},
                                              l.a.createElement(
                                                  "div",
                                                  {className: "button outline"},
                                                  l.a.createElement(s.a, {
                                                      content:
                                                          "wallet.create_backup"
                                                  })
                                              )
                                          )
                                      )
                                    : l.a.createElement(
                                          "span",
                                          null,
                                          l.a.createElement(
                                              k,
                                              {
                                                  ref: "pwd",
                                                  onValid: this.onOldPassword.bind(
                                                      this
                                                  )
                                              },
                                              l.a.createElement(
                                                  p.a,
                                                  {
                                                      onSubmit: this.onAccept.bind(
                                                          this
                                                      ),
                                                      newPassword: !0,
                                                      onValid: this.onNewPassword.bind(
                                                          this
                                                      )
                                                  },
                                                  l.a.createElement(
                                                      "button",
                                                      {
                                                          className: u()(
                                                              "button outline",
                                                              {disabled: !e}
                                                          ),
                                                          type: "submit",
                                                          onClick: this.onAccept.bind(
                                                              this
                                                          )
                                                      },
                                                      l.a.createElement(s.a, {
                                                          content:
                                                              "wallet.accept"
                                                      })
                                                  ),
                                                  l.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "button outline",
                                                          onClick: this._onCancel.bind(
                                                              this
                                                          )
                                                      },
                                                      l.a.createElement(s.a, {
                                                          content:
                                                              "wallet.cancel"
                                                      })
                                                  )
                                              )
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = y;
            var k = (function(e) {
                function t() {
                    E(this, t);
                    var e = v(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {password: "", verified: !1}), e;
                }
                return (
                    _(t, n["Component"]),
                    f(t, [
                        {
                            key: "cancel",
                            value: function() {
                                this.setState({verified: !1, password: ""});
                            }
                        },
                        {
                            key: "onPassword",
                            value: function(e) {
                                e.preventDefault(),
                                    m.a.validatePassword(
                                        this.state.password,
                                        !0
                                    ).success
                                        ? (this.setState({verified: !0}),
                                          this.props.onValid(
                                              this.state.password
                                          ))
                                        : o.a.error("Invalid Password");
                            }
                        },
                        {
                            key: "formChange",
                            value: function(e) {
                                var t = {};
                                (t[e.target.id] = e.target.value),
                                    this.setState(t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.state.verified
                                    ? l.a.createElement(
                                          "div",
                                          {className: "grid-content"},
                                          this.props.children
                                      )
                                    : l.a.createElement(
                                          "form",
                                          {
                                              onSubmit: this.onPassword.bind(
                                                  this
                                              )
                                          },
                                          l.a.createElement(
                                              "section",
                                              null,
                                              l.a.createElement("input", {
                                                  placeholder: h.a.translate(
                                                      "wallet.current_pass"
                                                  ),
                                                  className:
                                                      "tq-input tq-setting-reset",
                                                  type: "password",
                                                  id: "current-password",
                                                  autoComplete:
                                                      "current-password",
                                                  onChange: this.formChange.bind(
                                                      this
                                                  ),
                                                  value: this.state.password
                                              })
                                          ),
                                          l.a.createElement(
                                              "button",
                                              {
                                                  className:
                                                      "tq-btn tq-setting-reset"
                                              },
                                              l.a.createElement(s.a, {
                                                  content: "wallet.submit"
                                              })
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            k.propTypes = {onValid: b.a.func.isRequired};
            !(function(e) {
                function t() {
                    return (
                        E(this, t),
                        v(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                _(t, n["Component"]),
                    f(t, [
                        {
                            key: "render",
                            value: function() {
                                var e =
                                    this.props.label ||
                                    l.a.createElement(s.a, {
                                        content: "wallet.reset"
                                    });
                                return l.a.createElement(
                                    "span",
                                    {
                                        className: "button outline",
                                        onClick: this.onReset.bind(this)
                                    },
                                    e
                                );
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                window.history.back();
                            }
                        }
                    ]);
            })();
        },
        1918: function(e, t, a) {
            "use strict";
            var n = a(0),
                l = a.n(n),
                r = a(104),
                c = a(3),
                s = a.n(c),
                o = a(71),
                i = a(19),
                u = a(10),
                m = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var p = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = e._getInitialState()), e;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, n["Component"]),
                    m(t, [
                        {
                            key: "_getInitialState",
                            value: function() {
                                return {
                                    password: null,
                                    brainkey: null,
                                    invalid_password: !1
                                };
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e,
                                    t = i.a.getWallet().brainkey_backup_date,
                                    a = t
                                        ? l.a.createElement(
                                              "div",
                                              null,
                                              l.a.createElement(s.a, {
                                                  content:
                                                      "wallet.brainkey_backed_up"
                                              }),
                                              ":",
                                              " ",
                                              l.a.createElement(r.a, {value: t})
                                          )
                                        : l.a.createElement(s.a, {
                                              className: "facolor-error",
                                              component: "p",
                                              content:
                                                  "wallet.brainkey_not_backed_up"
                                          });
                                if (this.state.verified) {
                                    var n = u.hash
                                        .sha1(this.state.brainkey)
                                        .toString("hex")
                                        .substring(0, 4);
                                    e = l.a.createElement(
                                        "div",
                                        null,
                                        l.a.createElement(
                                            "h3",
                                            null,
                                            l.a.createElement(s.a, {
                                                content: "wallet.brainkey"
                                            })
                                        ),
                                        l.a.createElement(
                                            "div",
                                            {className: "card"},
                                            l.a.createElement(
                                                "div",
                                                {className: "card-content"},
                                                l.a.createElement(
                                                    "h5",
                                                    null,
                                                    this.state.brainkey
                                                )
                                            )
                                        ),
                                        l.a.createElement("br", null),
                                        l.a.createElement(
                                            "pre",
                                            {className: "no-overflow"},
                                            "sha1 hash of the brainkey: ",
                                            n
                                        ),
                                        l.a.createElement("br", null),
                                        a
                                    );
                                }
                                if (!e && this.state.brainkey) {
                                    n = u.hash
                                        .sha1(this.state.brainkey)
                                        .toString("hex")
                                        .substring(0, 4);
                                    e = l.a.createElement(
                                        "span",
                                        null,
                                        l.a.createElement(
                                            "h3",
                                            null,
                                            l.a.createElement(s.a, {
                                                content: "wallet.brainkey"
                                            })
                                        ),
                                        l.a.createElement(
                                            "div",
                                            {className: "card"},
                                            l.a.createElement(
                                                "div",
                                                {className: "card-content"},
                                                l.a.createElement(
                                                    "h5",
                                                    null,
                                                    this.state.brainkey
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            "div",
                                            {style: {padding: "10px 0"}},
                                            l.a.createElement(
                                                "pre",
                                                {className: "no-overflow"},
                                                "sha1 hash of your brainkey: ",
                                                n
                                            )
                                        ),
                                        l.a.createElement("hr", null),
                                        l.a.createElement(
                                            "div",
                                            {style: {padding: "10px 0 20px 0"}},
                                            l.a.createElement(s.a, {
                                                content: "wallet.brainkey_w1"
                                            }),
                                            l.a.createElement("br", null),
                                            l.a.createElement(s.a, {
                                                content: "wallet.brainkey_w2"
                                            }),
                                            l.a.createElement("br", null),
                                            l.a.createElement(s.a, {
                                                content: "wallet.brainkey_w3"
                                            })
                                        ),
                                        l.a.createElement(
                                            "button",
                                            {
                                                className: "button success",
                                                onClick: this.onComplete.bind(
                                                    this
                                                )
                                            },
                                            l.a.createElement(s.a, {
                                                content: "wallet.verify"
                                            })
                                        ),
                                        l.a.createElement(
                                            "button",
                                            {
                                                className: "button cancel",
                                                onClick: this.reset.bind(this)
                                            },
                                            l.a.createElement(s.a, {
                                                content: "wallet.cancel"
                                            })
                                        )
                                    );
                                }
                                if (!e) {
                                    this.state.password && this.state.password;
                                    e = l.a.createElement(
                                        "span",
                                        null,
                                        l.a.createElement(
                                            "label",
                                            null,
                                            l.a.createElement(s.a, {
                                                content: "wallet.enter_password"
                                            })
                                        ),
                                        l.a.createElement(
                                            "form",
                                            {
                                                onSubmit: this.onSubmit.bind(
                                                    this
                                                ),
                                                className: "name-form",
                                                noValidate: !0
                                            },
                                            l.a.createElement("input", {
                                                type: "password",
                                                id: "password",
                                                onChange: this.onPassword.bind(
                                                    this
                                                )
                                            }),
                                            l.a.createElement(
                                                "p",
                                                null,
                                                this.state.invalid_password
                                                    ? l.a.createElement(
                                                          "span",
                                                          {className: "error"},
                                                          "Invalid password"
                                                      )
                                                    : l.a.createElement(
                                                          "span",
                                                          null,
                                                          l.a.createElement(
                                                              s.a,
                                                              {
                                                                  content:
                                                                      "wallet.pwd4brainkey"
                                                              }
                                                          )
                                                      )
                                            ),
                                            l.a.createElement(
                                                "div",
                                                null,
                                                a,
                                                l.a.createElement("br", null)
                                            ),
                                            l.a.createElement(
                                                "button",
                                                {className: "button success"},
                                                l.a.createElement(s.a, {
                                                    content:
                                                        "wallet.show_brainkey"
                                                })
                                            )
                                        )
                                    );
                                }
                                return l.a.createElement(
                                    "div",
                                    {className: "grid-block vertical"},
                                    l.a.createElement(
                                        "div",
                                        {className: "grid-content no-overflow"},
                                        e
                                    )
                                );
                            }
                        },
                        {
                            key: "onComplete",
                            value: function(e) {
                                this.setState({verified: !0}),
                                    o.a.setBrainkeyBackupDate();
                            }
                        },
                        {
                            key: "reset",
                            value: function(e) {
                                e && e.preventDefault(),
                                    this.setState(this._getInitialState());
                            }
                        },
                        {
                            key: "onBack",
                            value: function(e) {
                                e.preventDefault(), window.history.back();
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function(e) {
                                e.preventDefault();
                                var t = i.a.isLocked();
                                if (
                                    i.a.validatePassword(
                                        this.state.password,
                                        !0
                                    ).success
                                ) {
                                    var a = i.a.getBrainKey();
                                    t && i.a.onLock(),
                                        this.setState({brainkey: a});
                                } else this.setState({invalid_password: !0});
                            }
                        },
                        {
                            key: "onPassword",
                            value: function(e) {
                                this.setState({
                                    password: e.target.value,
                                    invalid_password: !1
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = p;
        },
        2099: function(e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, "WalletOptions", function() {
                    return T;
                }),
                a.d(t, "ChangeActiveWallet", function() {
                    return D;
                }),
                a.d(t, "WalletDelete", function() {
                    return W;
                });
            var n = a(0),
                l = a.n(n),
                r = a(2105),
                c = a(33),
                s = a(71),
                o = a(88),
                i = a(91),
                u = a(3),
                m = a.n(u),
                p = a(8),
                d = a.n(p),
                h = a(17),
                w = a.n(h),
                b = a(2120),
                f = a(2106),
                E = a(2104),
                v = a(1876),
                _ = a(1858),
                y = a(1917),
                k = a(554),
                g = a(547),
                N = a(1918),
                C = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function O(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function P(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function S(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var j = {
                    listenTo: function() {
                        return [i.a];
                    },
                    getProps: function() {
                        return i.a.getState();
                    }
                },
                x = (function(e) {
                    function t() {
                        return (
                            O(this, t),
                            P(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        S(t, n["Component"]),
                        C(t, [
                            {
                                key: "getTitle",
                                value: function() {
                                    switch (this.props.location.pathname) {
                                        case "/wallet/create":
                                            return "wallet.create_wallet";
                                        case "/wallet/backup/create":
                                            return "wallet.create_backup";
                                        case "/wallet/backup/restore":
                                            return "wallet.restore_backup";
                                        case "/wallet/backup/brainkey":
                                            return "wallet.backup_brainkey";
                                        case "/wallet/delete":
                                            return "wallet.delete_wallet";
                                        case "/wallet/change-password":
                                            return "wallet.change_password";
                                        case "/wallet/import-keys":
                                            return "wallet.import_keys";
                                        default:
                                            return "wallet.console";
                                    }
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return l.a.createElement(
                                        "div",
                                        {className: "grid-block vertical"},
                                        l.a.createElement(
                                            "div",
                                            {
                                                className: "grid-container",
                                                style: {maxWidth: "40rem"}
                                            },
                                            l.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                l.a.createElement(
                                                    "div",
                                                    {className: "page-header"},
                                                    l.a.createElement(m.a, {
                                                        component: "h3",
                                                        content: this.getTitle()
                                                    })
                                                ),
                                                l.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "content-block"
                                                    },
                                                    l.a.createElement(
                                                        b.a,
                                                        null,
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path: "/wallet",
                                                            component: T
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/change",
                                                            component: D
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/change-password",
                                                            component: y.a
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/import-keys",
                                                            component: v.a
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/brainkey",
                                                            component:
                                                                E.ExistingAccountOptions
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/create",
                                                            component: k.b
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/delete",
                                                            component: W
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/backup/restore",
                                                            component: g.b
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/backup/create",
                                                            component: g.a
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/backup/brainkey",
                                                            component: N.a
                                                        }),
                                                        l.a.createElement(f.a, {
                                                            exact: !0,
                                                            path:
                                                                "/wallet/balance-claims",
                                                            component: _.a
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            x = Object(c.connect)(x, j);
            var T = (function(e) {
                function t() {
                    return (
                        O(this, t),
                        P(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    S(t, n["Component"]),
                    C(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = !!this.props.current_wallet,
                                    t = this.props.wallet_names.size > 1,
                                    a = this.props.current_wallet
                                        ? this.props.current_wallet.toUpperCase()
                                        : "";
                                return l.a.createElement(
                                    "span",
                                    null,
                                    l.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        l.a.createElement(
                                            "div",
                                            {className: "grid-content"},
                                            l.a.createElement(
                                                "div",
                                                {className: "card"},
                                                l.a.createElement(
                                                    "div",
                                                    {className: "card-content"},
                                                    l.a.createElement(
                                                        "label",
                                                        null,
                                                        l.a.createElement(m.a, {
                                                            content:
                                                                "wallet.active_wallet"
                                                        }),
                                                        ":"
                                                    ),
                                                    l.a.createElement(
                                                        "div",
                                                        null,
                                                        a
                                                    ),
                                                    l.a.createElement(
                                                        "br",
                                                        null
                                                    ),
                                                    t
                                                        ? l.a.createElement(
                                                              r.a,
                                                              {
                                                                  to:
                                                                      "/wallet/change"
                                                              },
                                                              l.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "button outline success"
                                                                  },
                                                                  l.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          content:
                                                                              "wallet.change_wallet"
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                        : null
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            "div",
                                            {className: "grid-content"},
                                            l.a.createElement(
                                                "div",
                                                {className: "card"},
                                                l.a.createElement(
                                                    "div",
                                                    {className: "card-content"},
                                                    l.a.createElement(
                                                        "label",
                                                        null,
                                                        l.a.createElement(m.a, {
                                                            content:
                                                                "wallet.import_keys_tool"
                                                        })
                                                    ),
                                                    l.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                visibility:
                                                                    "hidden"
                                                            }
                                                        },
                                                        "Dummy"
                                                    ),
                                                    l.a.createElement(
                                                        "br",
                                                        null
                                                    ),
                                                    e
                                                        ? l.a.createElement(
                                                              r.a,
                                                              {
                                                                  to:
                                                                      "/wallet/import-keys"
                                                              },
                                                              l.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "button outline success"
                                                                  },
                                                                  l.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          content:
                                                                              "wallet.import_keys"
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                        : null
                                                )
                                            )
                                        ),
                                        e
                                            ? l.a.createElement(
                                                  "div",
                                                  {className: "grid-content"},
                                                  l.a.createElement(
                                                      "div",
                                                      {className: "card"},
                                                      l.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "card-content"
                                                          },
                                                          l.a.createElement(
                                                              "label",
                                                              null,
                                                              l.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      content:
                                                                          "wallet.balance_claims"
                                                                  }
                                                              )
                                                          ),
                                                          l.a.createElement(
                                                              "div",
                                                              {
                                                                  style: {
                                                                      visibility:
                                                                          "hidden"
                                                                  }
                                                              },
                                                              "Dummy"
                                                          ),
                                                          l.a.createElement(
                                                              "br",
                                                              null
                                                          ),
                                                          l.a.createElement(
                                                              r.a,
                                                              {
                                                                  to:
                                                                      "/wallet/balance-claims"
                                                              },
                                                              l.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "button outline success"
                                                                  },
                                                                  l.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          content:
                                                                              "wallet.balance_claim_lookup"
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                            : null
                                    ),
                                    e
                                        ? l.a.createElement(
                                              r.a,
                                              {to: "/wallet/backup/create"},
                                              l.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "button outline success"
                                                  },
                                                  l.a.createElement(m.a, {
                                                      content:
                                                          "wallet.create_backup"
                                                  })
                                              )
                                          )
                                        : null,
                                    e
                                        ? l.a.createElement(
                                              r.a,
                                              {to: "/wallet/backup/brainkey"},
                                              l.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "button outline success"
                                                  },
                                                  l.a.createElement(m.a, {
                                                      content:
                                                          "wallet.backup_brainkey"
                                                  })
                                              )
                                          )
                                        : null,
                                    l.a.createElement(
                                        r.a,
                                        {to: "/wallet/backup/restore"},
                                        l.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "button outline success"
                                            },
                                            l.a.createElement(m.a, {
                                                content: "wallet.restore_backup"
                                            })
                                        )
                                    ),
                                    l.a.createElement("br", null),
                                    e ? l.a.createElement("br", null) : null,
                                    l.a.createElement(
                                        r.a,
                                        {to: "/wallet/create"},
                                        l.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "button outline success"
                                            },
                                            l.a.createElement(m.a, {
                                                content: "wallet.new_wallet"
                                            })
                                        )
                                    ),
                                    e
                                        ? l.a.createElement(
                                              r.a,
                                              {to: "/wallet/delete"},
                                              l.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "button outline success"
                                                  },
                                                  l.a.createElement(m.a, {
                                                      content:
                                                          "wallet.delete_wallet"
                                                  })
                                              )
                                          )
                                        : null,
                                    e
                                        ? l.a.createElement(
                                              r.a,
                                              {to: "/wallet/change-password"},
                                              l.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "button outline success"
                                                  },
                                                  l.a.createElement(m.a, {
                                                      content:
                                                          "wallet.change_password"
                                                  })
                                              )
                                          )
                                        : null
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            T = Object(c.connect)(T, j);
            var D = (function(e) {
                function t() {
                    O(this, t);
                    var e = P(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {}), e;
                }
                return (
                    S(t, n["Component"]),
                    C(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = this.props.current_wallet;
                                this.setState({current_wallet: e});
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                e.current_wallet !==
                                    this.state.current_wallet &&
                                    this.setState({
                                        current_wallet: e.current_wallet
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = i.a.getState(),
                                    t = [];
                                e.wallet_names.forEach(function(e) {
                                    t.push(
                                        l.a.createElement(
                                            "option",
                                            {key: e, value: e},
                                            e.toLowerCase()
                                        )
                                    );
                                });
                                var a =
                                    this.state.current_wallet !==
                                    this.props.current_wallet;
                                return l.a.createElement(
                                    "div",
                                    null,
                                    l.a.createElement(
                                        "section",
                                        {className: "block-list"},
                                        l.a.createElement(
                                            "header",
                                            null,
                                            l.a.createElement(m.a, {
                                                content: "wallet.active_wallet"
                                            }),
                                            ":"
                                        ),
                                        l.a.createElement(
                                            "ul",
                                            null,
                                            l.a.createElement(
                                                "li",
                                                {
                                                    className: "with-dropdown",
                                                    style: {borderBottom: 0}
                                                },
                                                e.wallet_names.count() <= 1
                                                    ? l.a.createElement(
                                                          "div",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  lineHeight:
                                                                      "36px",
                                                                  borderRadius:
                                                                      "3px"
                                                              },
                                                              className:
                                                                  "settings-input"
                                                          },
                                                          this.state
                                                              .current_wallet
                                                      )
                                                    : l.a.createElement(
                                                          "select",
                                                          {
                                                              className:
                                                                  "settings-select",
                                                              value: this.state
                                                                  .current_wallet,
                                                              onChange: this.onChange.bind(
                                                                  this
                                                              )
                                                          },
                                                          t
                                                      )
                                            )
                                        )
                                    ),
                                    l.a.createElement(
                                        r.a,
                                        {to: "/wallet/create"},
                                        l.a.createElement(
                                            "div",
                                            {className: "button outline"},
                                            l.a.createElement(m.a, {
                                                content: "wallet.new_wallet"
                                            })
                                        )
                                    ),
                                    a
                                        ? l.a.createElement(
                                              "div",
                                              {
                                                  className: "button outline",
                                                  onClick: this.onConfirm.bind(
                                                      this
                                                  )
                                              },
                                              l.a.createElement(m.a, {
                                                  content: "wallet.change",
                                                  name: this.state
                                                      .current_wallet
                                              })
                                          )
                                        : null
                                );
                            }
                        },
                        {
                            key: "onConfirm",
                            value: function() {
                                s.a.setWallet(this.state.current_wallet),
                                    o.c.reset();
                            }
                        },
                        {
                            key: "onChange",
                            value: function(e) {
                                var t = e.target.value;
                                this.setState({current_wallet: t});
                            }
                        }
                    ]),
                    t
                );
            })();
            D = Object(c.connect)(D, j);
            var W = (function(e) {
                function t() {
                    O(this, t);
                    var e = P(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {selected_wallet: null, confirm: 0}), e;
                }
                return (
                    S(t, n["Component"]),
                    C(t, [
                        {
                            key: "_onCancel",
                            value: function() {
                                this.setState({
                                    confirm: 0,
                                    selected_wallet: null
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (1 === this.state.confirm)
                                    return l.a.createElement(
                                        "div",
                                        {style: {paddingTop: 20}},
                                        l.a.createElement(
                                            "h4",
                                            null,
                                            l.a.createElement(m.a, {
                                                content:
                                                    "wallet.delete_confirm_line1"
                                            })
                                        ),
                                        l.a.createElement(m.a, {
                                            component: "p",
                                            content:
                                                "wallet.delete_confirm_line3"
                                        }),
                                        l.a.createElement("br", null),
                                        l.a.createElement(
                                            "div",
                                            {
                                                className: "button outline",
                                                onClick: this.onConfirm2.bind(
                                                    this
                                                )
                                            },
                                            l.a.createElement(m.a, {
                                                content:
                                                    "wallet.delete_confirm_line4",
                                                name: this.state.selected_wallet
                                            })
                                        ),
                                        l.a.createElement(
                                            "div",
                                            {
                                                className: "button outline",
                                                onClick: this._onCancel.bind(
                                                    this
                                                )
                                            },
                                            l.a.createElement(m.a, {
                                                content: "wallet.cancel"
                                            })
                                        )
                                    );
                                var e = [
                                    l.a.createElement("option", {
                                        key: "placeholder",
                                        value: "",
                                        disabled:
                                            this.props.wallet_names.size > 1
                                    })
                                ];
                                e.push(
                                    l.a.createElement(
                                        "option",
                                        {key: "select_option", value: ""},
                                        w.a.translate("settings.delete_select"),
                                        "…"
                                    )
                                ),
                                    this.props.wallet_names.forEach(function(
                                        t
                                    ) {
                                        e.push(
                                            l.a.createElement(
                                                "option",
                                                {key: t, value: t},
                                                t.toLowerCase()
                                            )
                                        );
                                    });
                                var t = !!this.state.selected_wallet;
                                return l.a.createElement(
                                    "div",
                                    {style: {paddingTop: 20}},
                                    l.a.createElement(
                                        "section",
                                        {className: "block-list"},
                                        l.a.createElement(
                                            "header",
                                            null,
                                            l.a.createElement(m.a, {
                                                content: "wallet.delete_wallet"
                                            })
                                        ),
                                        l.a.createElement(
                                            "ul",
                                            null,
                                            l.a.createElement(
                                                "li",
                                                {
                                                    className: "with-dropdown",
                                                    style: {borderBottom: 0}
                                                },
                                                l.a.createElement(
                                                    "select",
                                                    {
                                                        className:
                                                            "settings-select",
                                                        value:
                                                            this.state
                                                                .selected_wallet ||
                                                            "",
                                                        style: {
                                                            margin: "0 auto"
                                                        },
                                                        onChange: this.onChange.bind(
                                                            this
                                                        )
                                                    },
                                                    e
                                                )
                                            )
                                        )
                                    ),
                                    l.a.createElement(
                                        "div",
                                        {
                                            className: d()("button outline", {
                                                disabled: !t
                                            }),
                                            onClick: this.onConfirm.bind(this)
                                        },
                                        l.a.createElement(m.a, {
                                            content: this.state.selected_wallet
                                                ? "wallet.delete_wallet_name"
                                                : "wallet.delete_wallet",
                                            name: this.state.selected_wallet
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "onConfirm",
                            value: function() {
                                this.setState({confirm: 1});
                            }
                        },
                        {
                            key: "onConfirm2",
                            value: function() {
                                s.a.deleteWallet(this.state.selected_wallet),
                                    this._onCancel();
                            }
                        },
                        {
                            key: "onChange",
                            value: function(e) {
                                var t = e.target.value;
                                this.setState({selected_wallet: t});
                            }
                        }
                    ]),
                    t
                );
            })();
            (W = Object(c.connect)(W, j)), (t.default = x);
        }
    }
]);
//# sourceMappingURL=wallet.js.map
