(window.webpackJsonp = window.webpackJsonp || []).push([
    [18],
    {
        2116: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(2105),
                l = a(3),
                o = a.n(l),
                i = a(142),
                c = a(119),
                u = a(31),
                m = a(144),
                d = a(141),
                p = a(548),
                h = a(539),
                b = a(339),
                _ = a(15),
                f = (function() {
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
            var g = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (a.state = {time: e.time}), a;
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
                        })(t, r.a.Component),
                        f(t, [
                            {
                                key: "getHours",
                                value: function(e) {
                                    return e / 3600;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        this.getHours(this.state.time),
                                        "h"
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                E = a(10),
                y = a(13),
                v = a(27),
                k = a(553),
                x = a(8),
                w = a.n(x),
                A = a(256),
                O = a(309),
                P = a(434),
                N = (function() {
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
            function C(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var S = function(e, t) {
                    var a =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : function(e) {
                                  return e;
                              };
                    return function(n) {
                        return e.setState(C({}, t, a(n)));
                    };
                },
                j = function(e) {
                    return function(t) {
                        return t[e];
                    };
                },
                T = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.onAccountNameChanged = S(
                                a,
                                "funderAccountName"
                            )),
                            (a.onAccountChanged = S(a, "newFunderAccount")),
                            (a.onPoolInput = S(
                                a,
                                "fundPoolAmount",
                                j("amount")
                            )),
                            (a.onFundPool = function() {
                                return P.a.fundPool(
                                    a.state.newFunderAccount
                                        ? a.state.newFunderAccount.get("id")
                                        : null,
                                    a.props.core,
                                    a.props.asset,
                                    a.state.fundPoolAmount.replace(/,/g, "")
                                );
                            }),
                            (a.reset = function() {
                                a.setState(a.initialState());
                            }),
                            (a.initialState = function() {
                                return {
                                    funderAccountName:
                                        a.props.funderAccountName,
                                    fundPoolAmount: 0,
                                    fundPoolAsset: new v.a({
                                        amount: 0,
                                        precision: a.props.core.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.core.get("id")
                                    }),
                                    claimPoolAmount: 0,
                                    claimPoolAmountAsset: new v.a({
                                        amount: 0,
                                        precision: a.props.core.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.core.get("id")
                                    }),
                                    claimFeesAmount: 0,
                                    claimFeesAmountAsset: new v.a({
                                        amount: 0,
                                        precision: a.props.asset.get(
                                            "precision"
                                        ),
                                        asset_id: a.props.asset.get("id")
                                    })
                                };
                            }),
                            (a.onClaimPool = function() {
                                return P.a.claimPool(
                                    a.props.asset,
                                    a.state.claimPoolAmountAsset
                                );
                            }),
                            (a.state = a.initialState()),
                            a
                        );
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
                        })(t, r.a.Component),
                        N(t, [
                            {
                                key: "onClaimInput",
                                value: function(e, t) {
                                    var a = t.amount;
                                    this.state[e + "Asset"].setAmount({
                                        real: a
                                    }),
                                        this.setState(C({}, e, a));
                                }
                            },
                            {
                                key: "onClaimFees",
                                value: function() {
                                    var e = E.ChainStore.getAccount(
                                        this.props.funderAccountName
                                    );
                                    e &&
                                        P.a.claimPoolFees(
                                            e.get("id"),
                                            this.props.asset,
                                            this.state.claimFeesAmountAsset
                                        );
                                }
                            },
                            {
                                key: "renderFundPool",
                                value: function() {
                                    var e = this.props,
                                        t = this.state,
                                        a = this.onPoolInput,
                                        n = this.onFundPool,
                                        s = this.reset,
                                        l = this.onAccountNameChanged,
                                        i = this.onAccountChanged,
                                        c = e.asset,
                                        m = e.core,
                                        d = e.hideBalance,
                                        p = e.getDynamicObject,
                                        h = t.funderAccountName,
                                        b = t.fundPoolAmount,
                                        _ = t.newFunderAccount,
                                        f = null;
                                    d ||
                                        (f = p(c.get("dynamic_asset_data_id")));
                                    var g = m.get("id") || "1.3.0",
                                        y = 0;
                                    if (_) {
                                        var v = _.getIn(["balances", g]);
                                        if (v) {
                                            var k = E.ChainStore.getObject(v);
                                            k && (y = k.get("balance"));
                                        }
                                    }
                                    var x = r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "span",
                                            content: "transfer.available"
                                        }),
                                        ": ",
                                        r.a.createElement(u.a, {
                                            amount: y,
                                            asset: g
                                        })
                                    );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        d ||
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        paddingBottom: "1.5rem"
                                                    }
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.pool_balance"
                                                }),
                                                r.a.createElement(
                                                    "span",
                                                    null,
                                                    ": "
                                                ),
                                                f
                                                    ? r.a.createElement(u.a, {
                                                          amount: f.get(
                                                              "fee_pool"
                                                          ),
                                                          asset: g
                                                      })
                                                    : null
                                            ),
                                        r.a.createElement(A.a, {
                                            label:
                                                "transaction.funding_account",
                                            accountName: h,
                                            onChange: l,
                                            onAccountChanged: i,
                                            account: h,
                                            error: null,
                                            tabIndex: 1
                                        }),
                                        r.a.createElement(O.a, {
                                            label: "transfer.amount",
                                            display_balance: x,
                                            amount: b,
                                            onChange: a,
                                            asset: g,
                                            assets: [g],
                                            placeholder: "0.0",
                                            tabIndex: 2,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: w()("button", {
                                                        disabled: b <= 0
                                                    }),
                                                    onClick: n
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_fund_fee_pool"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: s
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderClaimPool",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = this.onClaimPool,
                                        n = this.reset,
                                        s = this.state.claimPoolAmount,
                                        l = t.asset,
                                        i = t.core,
                                        c = (0, t.getDynamicObject)(
                                            l.get("dynamic_asset_data_id")
                                        ),
                                        m = i.get("id") || "1.3.0",
                                        d = c
                                            ? r.a.createElement(
                                                  "span",
                                                  {
                                                      onClick: function() {
                                                          e.state.claimPoolAmountAsset.setAmount(
                                                              {
                                                                  sats: c.get(
                                                                      "fee_pool"
                                                                  )
                                                              }
                                                          ),
                                                              e.setState({
                                                                  claimPoolAmount: e.state.claimPoolAmountAsset.getAmount(
                                                                      {real: !0}
                                                                  )
                                                              });
                                                      }
                                                  },
                                                  r.a.createElement(o.a, {
                                                      component: "span",
                                                      content:
                                                          "transfer.available"
                                                  }),
                                                  ": ",
                                                  r.a.createElement(u.a, {
                                                      amount: c.get("fee_pool"),
                                                      asset: m
                                                  })
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.claim_pool_text"
                                        }),
                                        r.a.createElement(O.a, {
                                            label: "transfer.amount",
                                            display_balance: d,
                                            amount: s,
                                            onChange: this.onClaimInput.bind(
                                                this,
                                                "claimPoolAmount"
                                            ),
                                            asset: m,
                                            assets: [m],
                                            placeholder: "0.0",
                                            tabIndex: 2,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: w()("button", {
                                                        disabled: s <= 0
                                                    }),
                                                    onClick: a
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_claim_fee_pool"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: n
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderClaimFees",
                                value: function() {
                                    var e = this.props,
                                        t = this.state.claimFeesAmount,
                                        a = e.asset,
                                        n = (0, e.getDynamicObject)(
                                            a.get("dynamic_asset_data_id")
                                        ),
                                        s = n ? n.get("accumulated_fees") : 0,
                                        l =
                                            t > 0 &&
                                            this.state.claimFeesAmountAsset.getAmount() <=
                                                s,
                                        i = r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement(o.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ": ",
                                            r.a.createElement(u.a, {
                                                amount: s,
                                                asset: a.get("id")
                                            })
                                        );
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(o.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.claim_text",
                                            asset: a.get("symbol")
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {style: {paddingBottom: "1rem"}},
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.fee_pool.unclaimed_issuer_income"
                                            }),
                                            ": ",
                                            n
                                                ? r.a.createElement(u.a, {
                                                      amount: n.get(
                                                          "accumulated_fees"
                                                      ),
                                                      asset: a.get("id")
                                                  })
                                                : null
                                        ),
                                        r.a.createElement(O.a, {
                                            label: "transfer.amount",
                                            display_balance: i,
                                            amount: t,
                                            onChange: this.onClaimInput.bind(
                                                this,
                                                "claimFeesAmount"
                                            ),
                                            asset: a.get("id"),
                                            assets: [a.get("id")],
                                            placeholder: "0.0",
                                            tabIndex: 1,
                                            style: {
                                                width: "100%",
                                                paddingTop: 16
                                            }
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: "1rem"},
                                                className: "button-group"
                                            },
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: w()("button", {
                                                        disabled: !l
                                                    }),
                                                    onClick: this.onClaimFees.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.claim_fees"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "button outline",
                                                    onClick: this.reset.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.perm.reset"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return "fund" === this.props.type
                                        ? this.renderFundPool()
                                        : "claim" === this.props.type
                                            ? this.renderClaimPool()
                                            : "claim_fees" === this.props.type
                                                ? this.renderClaimFees()
                                                : void 0;
                                }
                            }
                        ]),
                        t
                    );
                })();
            T.defaultProps = {type: "fund"};
            var F = (T = Object(c.a)(T, {
                    propNames: ["asset", "core"],
                    defaultProps: {core: "1.3.0"},
                    withDynamic: !0
                })),
                q = a(24),
                R = a(33),
                I = a(38),
                D = a(49),
                B = (function() {
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
            function z(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var J = (function(e) {
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
                    return (
                        (e.state = {
                            new_issuer_account_id: null,
                            issuer_account_name: null
                        }),
                        e
                    );
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
                    })(t, r.a.Component),
                    B(t, [
                        {
                            key: "onAccountNameChanged",
                            value: function(e, t) {
                                this.setState(z({}, e, t));
                            }
                        },
                        {
                            key: "onAccountChanged",
                            value: function(e, t) {
                                this.setState(z({}, e, t ? t.get("id") : null));
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = this;
                                P.a
                                    .updateOwner(
                                        this.props.asset,
                                        this.state.new_issuer_account_id
                                    )
                                    .then(function() {
                                        e.onReset();
                                    });
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                this.setState({
                                    new_issuer_account_id: null,
                                    issuer_account_name: null
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.currentOwner;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "div",
                                        {style: {paddingBottom: "1rem"}},
                                        r.a.createElement(A.a, {
                                            label:
                                                "account.user_issued_assets.current_issuer",
                                            accountName: e.get("name"),
                                            account: e.get("name"),
                                            error: null,
                                            tabIndex: 1,
                                            disabled: !0
                                        })
                                    ),
                                    r.a.createElement(A.a, {
                                        label:
                                            "account.user_issued_assets.new_issuer",
                                        accountName: this.state
                                            .issuer_account_name,
                                        onChange: this.onAccountNameChanged.bind(
                                            this,
                                            "issuer_account_name"
                                        ),
                                        onAccountChanged: this.onAccountChanged.bind(
                                            this,
                                            "new_issuer_account_id"
                                        ),
                                        account: this.state.issuer_account_name,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: !0,
                                        excludeAccounts: [e.get("name")]
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {paddingTop: "1rem"},
                                            className: "button-group"
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: w()("button", {
                                                    disabled: !this.state
                                                        .new_issuer_account_id
                                                }),
                                                onClick: this.onSubmit.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(o.a, {
                                                content:
                                                    "account.user_issued_assets.update_owner"
                                            })
                                        ),
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: "button outline",
                                                onClick: this.onReset.bind(this)
                                            },
                                            r.a.createElement(o.a, {
                                                content: "account.perm.reset"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            J.propTypes = {
                account: I.a.ChainAccount.isRequired,
                currentOwner: I.a.ChainAccount.isRequired
            };
            var M = (J = Object(D.a)(J)),
                V = (function() {
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
            var L = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this
                                )
                            ),
                            n = new v.a({
                                amount: 0,
                                asset_id: e.quote.get("id"),
                                precision: e.quote.get("precision")
                            }),
                            r = new v.a({
                                amount: 0,
                                asset_id: e.base.get("id"),
                                precision: e.base.get("precision")
                            }),
                            s = new v.h({quote: n, base: r});
                        return (
                            (a.state = {price: s, realPriceValue: s.toReal()}),
                            a
                        );
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
                        })(t, r.a.Component),
                        V(t, [
                            {
                                key: "onPriceChanged",
                                value: function(e) {
                                    var t = e.amount;
                                    this.state.price.setPriceFromReal(
                                        parseFloat(t)
                                    ),
                                        this.setState({realPriceValue: t}),
                                        this.props.onPriceChanged &&
                                            this.props.onPriceChanged(
                                                this.state.price.clone()
                                            );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state,
                                        t = e.realPriceValue,
                                        a = e.price;
                                    return r.a.createElement(O.a, {
                                        label: this.props.label,
                                        amount: t,
                                        onChange: this.onPriceChanged.bind(
                                            this
                                        ),
                                        asset: a.base.asset_id,
                                        base: this.props.quote.get("symbol"),
                                        isPrice: !0,
                                        assets: [a.quote.asset_id],
                                        placeholder: "0.0",
                                        tabIndex: 1,
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    });
                                }
                            }
                        ]),
                        t
                    );
                })(),
                U = (L = Object(c.a)(L, {
                    propNames: ["quote", "base"],
                    defaultProps: {base: "1.3.0"}
                })),
                G = (function() {
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
            function H(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var Y = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var a = (function(e, t) {
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
                    return (a.state = a.resetState(e)), a;
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
                    })(t, r.a.Component),
                    G(t, [
                        {
                            key: "resetState",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props,
                                    t = e.account.get("id"),
                                    a = e.base.getIn([
                                        "bitasset",
                                        "current_feed"
                                    ]),
                                    n = a.get(
                                        "maintenance_collateral_ratio",
                                        1750
                                    ),
                                    r = a.get(
                                        "maximum_short_squeeze_ratio",
                                        1100
                                    );
                                return {
                                    publisher: e.account.get("name"),
                                    publisher_id: t,
                                    mcr: n,
                                    mcrValue: n / 1e3,
                                    mssr: r,
                                    mssrValue: r / 1e3
                                };
                            }
                        },
                        {
                            key: "onAccountNameChanged",
                            value: function(e, t) {
                                this.setState(H({}, e, t));
                            }
                        },
                        {
                            key: "onAccountChanged",
                            value: function(e, t) {
                                this.setState(H({}, e, t ? t.get("id") : null));
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                P.a.publishFeed({
                                    publisher: this.state.publisher_id,
                                    asset_id: this.props.base.get("id"),
                                    mcr: this.state.mcr,
                                    mssr: this.state.mssr,
                                    settlementPrice: this.state.settlementPrice,
                                    cer: this.state.cer
                                });
                            }
                        },
                        {
                            key: "onPriceChanged",
                            value: function(e, t) {
                                this.setState(H({}, e, t));
                            }
                        },
                        {
                            key: "onSetRatio",
                            value: function(e, t) {
                                var a,
                                    n = t.amount;
                                n &&
                                    "string" == typeof n &&
                                    -1 !== n.indexOf(".") &&
                                    n.indexOf(".") + 4 !== n.length &&
                                    (n = n.substr(0, n.indexOf(".") + 4)),
                                    this.setState(
                                        (H((a = {}), e + "Value", n),
                                        H(
                                            a,
                                            e,
                                            Math.floor(1e3 * parseFloat(n))
                                        ),
                                        a)
                                    );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.quote,
                                    a = e.base,
                                    n = this.state,
                                    s = n.mcrValue,
                                    l = n.mssrValue,
                                    i = n.publisher;
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(A.a, {
                                        label: "explorer.asset.feed_producer",
                                        accountName: i,
                                        onChange: this.onAccountNameChanged.bind(
                                            this,
                                            "publisher"
                                        ),
                                        onAccountChanged: this.onAccountChanged.bind(
                                            this,
                                            "publisher_id"
                                        ),
                                        account: i,
                                        error: null,
                                        tabIndex: 1,
                                        typeahead: !0
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(U, {
                                        onPriceChanged: this.onPriceChanged.bind(
                                            this,
                                            "cer"
                                        ),
                                        label:
                                            "explorer.asset.fee_pool.core_exchange_rate",
                                        quote: t.get("id"),
                                        base: a.get("id")
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(U, {
                                        onPriceChanged: this.onPriceChanged.bind(
                                            this,
                                            "settlementPrice"
                                        ),
                                        label:
                                            "explorer.asset.price_feed.settlement_price",
                                        quote: t.get("id"),
                                        base: a.get("id")
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(O.a, {
                                        label:
                                            "explorer.asset.price_feed.maintenance_collateral_ratio",
                                        amount: s,
                                        onChange: this.onSetRatio.bind(
                                            this,
                                            "mcr"
                                        ),
                                        placeholder: "0.0",
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(O.a, {
                                        label:
                                            "explorer.asset.price_feed.maximum_short_squeeze_ratio",
                                        amount: l,
                                        onChange: this.onSetRatio.bind(
                                            this,
                                            "mssr"
                                        ),
                                        placeholder: "0.0",
                                        style: {
                                            width: "100%",
                                            paddingRight: "10px"
                                        }
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            style: {paddingTop: "1rem"},
                                            className: "button-group"
                                        },
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: w()("button", {
                                                    disabled: !1
                                                }),
                                                onClick: this.onSubmit.bind(
                                                    this
                                                )
                                            },
                                            r.a.createElement(o.a, {
                                                content:
                                                    "transaction.trxTypes.asset_publish_feed"
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Y.propTypes = {account: I.a.ChainAccount.isRequired}),
                (Y = Object(D.a)(Y));
            var W = (Y = Object(c.a)(Y, {
                    propNames: ["quote", "base"],
                    defaultProps: {quote: "1.3.0"}
                })),
                Z = a(1814),
                K =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                Q = (function() {
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
            function X(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function $(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ee(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function te(e, t) {
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
            var ae = (function(e) {
                    function t() {
                        return (
                            $(this, t),
                            ee(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Q(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "span",
                                              {className: "asset-flag"},
                                              r.a.createElement(
                                                  "span",
                                                  {className: "label info"},
                                                  r.a.createElement(o.a, {
                                                      content:
                                                          "account.user_issued_assets." +
                                                          a
                                                  })
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ne = (function(e) {
                    function t() {
                        return (
                            $(this, t),
                            ee(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Q(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "span",
                                              {className: "asset-flag"},
                                              r.a.createElement(
                                                  "span",
                                                  {className: "label info"},
                                                  r.a.createElement(o.a, {
                                                      content:
                                                          "account.user_issued_assets." +
                                                          a
                                                  })
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                re = (function(e) {
                    function t(e) {
                        $(this, t);
                        var a = ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                callOrders: [],
                                marginTableSort: "price",
                                sortDirection: !0
                            }),
                            a
                        );
                    }
                    return (
                        te(t, r.a.Component),
                        Q(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    if (this.props.asset.has("bitasset")) {
                                        var t,
                                            a = (X(
                                                (t = {}),
                                                this.props.asset.get("id"),
                                                this.props.asset.toJS()
                                            ),
                                            X(
                                                t,
                                                this.props.backingAsset.get(
                                                    "id"
                                                ),
                                                this.props.backingAsset.toJS()
                                            ),
                                            t),
                                            n = this.props.asset.getIn(
                                                [
                                                    "bitasset",
                                                    "is_prediction_market"
                                                ],
                                                !1
                                            ),
                                            r = this.props.asset.getIn([
                                                "bitasset",
                                                "current_feed",
                                                "maximum_short_squeeze_ratio"
                                            ]),
                                            s = this.props.asset.getIn([
                                                "bitasset",
                                                "current_feed",
                                                "settlement_price"
                                            ]);
                                        n &&
                                            s.getIn(["base", "asset_id"]) ===
                                                s.getIn([
                                                    "quote",
                                                    "asset_id"
                                                ]) &&
                                            (a[
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            ] ||
                                                (a[
                                                    this.props.backingAsset.get(
                                                        "id"
                                                    )
                                                ] = {
                                                    precision: this.props.asset.get(
                                                        "precision"
                                                    )
                                                }),
                                            (s = (s = (s = (s = s.setIn(
                                                ["base", "amount"],
                                                1
                                            )).setIn(
                                                ["base", "asset_id"],
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            )).setIn(
                                                ["quote", "amount"],
                                                1
                                            )).setIn(
                                                ["quote", "asset_id"],
                                                this.props.asset.get("id")
                                            )),
                                            (r = 1e3));
                                        try {
                                            var l = new v.c({
                                                priceObject: s,
                                                market_base: this.props.asset.get(
                                                    "id"
                                                ),
                                                sqr: r,
                                                assets: a
                                            });
                                            y.Apis.instance()
                                                .db_api()
                                                .exec("get_call_orders", [
                                                    this.props.asset.get("id"),
                                                    300
                                                ])
                                                .then(function(t) {
                                                    var r = t.map(function(t) {
                                                        return new v.b(
                                                            t,
                                                            a,
                                                            e.props.asset.get(
                                                                "id"
                                                            ),
                                                            l,
                                                            n
                                                        );
                                                    });
                                                    e.setState({callOrders: r});
                                                });
                                        } catch (e) {}
                                    }
                                }
                            },
                            {
                                key: "_toggleSortOrder",
                                value: function(e) {
                                    e !== this.state.marginTableSort
                                        ? this.setState({marginTableSort: e})
                                        : this.setState({
                                              sortDirection: !this.state
                                                  .sortDirection
                                          });
                                }
                            },
                            {
                                key: "_assetType",
                                value: function(e) {
                                    return "bitasset" in e
                                        ? e.bitasset.is_prediction_market
                                            ? "Prediction"
                                            : "Smart"
                                        : "Simple";
                                }
                            },
                            {
                                key: "renderFlagIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(ae, {
                                                key: "flag_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "renderPermissionIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(ne, {
                                                key: "perm_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "formattedPrice",
                                value: function(e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1],
                                        a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2],
                                        n = e.base,
                                        s = e.quote;
                                    return r.a.createElement(m.a, {
                                        base_amount: n.amount,
                                        base_asset: n.asset_id,
                                        quote_amount: s.amount,
                                        quote_asset: s.asset_id,
                                        hide_value: a,
                                        hide_symbols: t
                                    });
                                }
                            },
                            {
                                key: "renderAuthorityList",
                                value: function(e) {
                                    return e.map(function(e) {
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement(i.a, {account: e})
                                        );
                                    });
                                }
                            },
                            {
                                key: "renderMarketList",
                                value: function(e, t) {
                                    var a = e.symbol;
                                    return t.map(
                                        function(e) {
                                            if (e == a) return null;
                                            var t = e + "_" + a,
                                                n = e + "/" + a;
                                            return r.a.createElement(
                                                "span",
                                                {key: t},
                                                r.a.createElement(
                                                    s.a,
                                                    {to: "/market/" + t},
                                                    n
                                                ),
                                                " "
                                            );
                                        }.bind(this)
                                    );
                                }
                            },
                            {
                                key: "renderAboutBox",
                                value: function(e, t) {
                                    var a = E.ChainStore.getObject(
                                            e.issuer,
                                            !1,
                                            !1
                                        ),
                                        n = a ? a.get("name") : "",
                                        l = b.a.parseDescription(
                                            e.options.description
                                        ),
                                        i = l.main,
                                        c = l.short_name ? l.short_name : null,
                                        u = (i =
                                            i && i.length > 0
                                                ? i + " "
                                                : i).match(
                                            /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g
                                        ),
                                        m = E.ChainStore.getAsset("1.3.0"),
                                        d = l.market
                                            ? l.market
                                            : m
                                                ? m.get("symbol")
                                                : "BTS";
                                    "bitasset" in e &&
                                        e.bitasset.is_prediction_market &&
                                        (d = (d = E.ChainStore.getAsset(
                                            e.bitasset.options
                                                .short_backing_asset
                                        ))
                                            ? d.get("symbol")
                                            : m.get("symbol")),
                                        e.symbol === m.get("symbol") &&
                                            (d = "USD"),
                                        u &&
                                            u.length &&
                                            u.forEach(function(e) {
                                                var t =
                                                    '<a target="_blank" rel="noopener noreferrer" href="' +
                                                    e +
                                                    '">' +
                                                    e +
                                                    "</a>";
                                                i = i.replace(e, t);
                                            });
                                    var p = _.a.replaceName(t),
                                        f = p.name,
                                        g = p.prefix;
                                    return r.a.createElement(
                                        "div",
                                        {style: {overflow: "visible"}},
                                        r.a.createElement(h.a, {
                                            path: "assets/" + e.symbol,
                                            alt_path: "assets/Asset",
                                            section: "summary",
                                            symbol: (g || "") + f,
                                            description: i,
                                            issuer: n,
                                            hide_issuer: "true"
                                        }),
                                        c
                                            ? r.a.createElement("p", null, c)
                                            : null,
                                        r.a.createElement(
                                            s.a,
                                            {
                                                className:
                                                    "button market-button",
                                                to:
                                                    "/market/" +
                                                    e.symbol +
                                                    "_" +
                                                    d
                                            },
                                            r.a.createElement(o.a, {
                                                content: "exchange.market"
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderSummary",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = b.a.getFlagBooleans(
                                            e.options.flags,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        s = Object.keys(n),
                                        l = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.current_supply"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount:
                                                              t.current_supply,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        c = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.stealth_supply"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount:
                                                              t.confidential_supply,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        m = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      a.market_fee_percent /
                                                          100,
                                                      " % "
                                                  )
                                              )
                                            : null,
                                        p = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.max_market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount: +a.max_market_fee,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(d.a, {
                                                name: e.symbol
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover"
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.summary.asset_type"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        this._assetType(e),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.summary.issuer"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(i.a, {
                                                            account: e.issuer
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.assets.precision"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        e.precision,
                                                        " "
                                                    )
                                                ),
                                                l,
                                                c,
                                                m,
                                                p
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        this.renderFlagIndicators(n, s)
                                    );
                                }
                            },
                            {
                                key: "renderPriceFeed",
                                value: function(e) {
                                    var t = r.a.createElement(o.a, {
                                            content:
                                                "explorer.asset.price_feed.title"
                                        }),
                                        a = e.bitasset;
                                    if (!("current_feed" in a))
                                        return r.a.createElement("div", {
                                            header: t
                                        });
                                    var n = a.current_feed,
                                        s =
                                            a.options
                                                .force_settlement_delay_sec,
                                        l =
                                            a.options
                                                .force_settlement_offset_percent,
                                        i = this.getGlobalSettlementPrice();
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            t
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.settlement_price"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.formattedPrice(
                                                            n.settlement_price
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maintenance_collateral_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        n.maintenance_collateral_ratio /
                                                            1e3
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maximum_short_squeeze_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        n.maximum_short_squeeze_ratio /
                                                            1e3
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.global_settlement_price"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        i || "-"
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {marginTop: "2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.settlement_delay"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(g, {
                                                            time: s
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.force_settlement_offset"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        l / 100,
                                                        "% "
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePool",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = E.ChainStore.getAsset("1.3.0");
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.fee_pool.title"
                                            })
                                        ),
                                        r.a.createElement(o.a, {
                                            component: "p",
                                            content:
                                                "explorer.asset.fee_pool.pool_text",
                                            unsafe: !0,
                                            asset: e.symbol,
                                            core: n.get("symbol")
                                        }),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.core_exchange_rate"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        this.formattedPrice(
                                                            a.core_exchange_rate
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.pool_balance"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        t
                                                            ? r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      asset:
                                                                          "1.3.0",
                                                                      amount:
                                                                          t.fee_pool
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.unclaimed_issuer_income"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        t
                                                            ? r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      asset:
                                                                          e.id,
                                                                      amount:
                                                                          t.accumulated_fees
                                                                  }
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderAssetOwnerUpdate",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding",
                                            style: {overflowY: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "account.user_issued_assets.update_owner"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "account.user_issued_assets.update_owner_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(M, {
                                                asset: e,
                                                account: this.props
                                                    .currentAccount,
                                                currentOwner: e.issuer
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeedPublish",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding",
                                            style: {overflowY: "visible"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "transaction.trxTypes.asset_publish_feed"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.feed_producer_text"
                                            }),
                                            r.a.createElement(W, {
                                                base: e.id,
                                                account: this.props
                                                    .currentAccount,
                                                currentOwner: e.issuer
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePoolFunding",
                                value: function(e) {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-content small-no-padding"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "asset-card no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: "card-divider"},
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.fee_pool.fund"
                                                })
                                            ),
                                            r.a.createElement(o.a, {
                                                component: "p",
                                                content:
                                                    "explorer.asset.fee_pool.fund_text",
                                                asset: e.symbol
                                            }),
                                            r.a.createElement(F, {
                                                asset: e.symbol,
                                                funderAccountName: this.props
                                                    .currentAccount,
                                                hideBalance: !0
                                            })
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePoolClaiming",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    return (
                                        t && (t = t.toJS()),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content small-no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "asset-card no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-divider"},
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "explorer.asset.fee_pool.claim_balance"
                                                    })
                                                ),
                                                r.a.createElement(F, {
                                                    asset: e.symbol,
                                                    funderAccountName: this
                                                        .props.currentAccount,
                                                    dynamic: t,
                                                    hideBalance: !0,
                                                    type: "claim"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeesClaiming",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    return (
                                        t && (t = t.toJS()),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content small-no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "asset-card no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-divider"},
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.trxTypes.asset_claim_fees"
                                                    })
                                                ),
                                                r.a.createElement(F, {
                                                    asset: e.symbol,
                                                    dynamic: t,
                                                    funderAccountName: this
                                                        .props.currentAccount,
                                                    hideBalance: !0,
                                                    type: "claim_fees"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderPermissions",
                                value: function(e) {
                                    var t = e.options,
                                        a = b.a.getFlagBooleans(
                                            e.options.issuer_permissions,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        n = Object.keys(a),
                                        s = a.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.permissions.max_market_fee"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      r.a.createElement(u.a, {
                                                          amount: +t.max_market_fee,
                                                          asset: e.id
                                                      })
                                                  )
                                              )
                                            : null,
                                        l = r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.permissions.max_supply"
                                                })
                                            ),
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(u.a, {
                                                    amount: +t.max_supply,
                                                    asset: e.id
                                                })
                                            )
                                        );
                                    a.white_list &&
                                        r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.blacklist_authorities"
                                            }),
                                            ":  ",
                                            this.renderAuthorityList(
                                                t.blacklist_authorities
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.blacklist_markets"
                                            }),
                                            ":  ",
                                            this.renderMarketList(
                                                e,
                                                t.blacklist_markets
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.whitelist_authorities"
                                            }),
                                            ":  ",
                                            this.renderAuthorityList(
                                                t.whitelist_authorities
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.whitelist_markets"
                                            }),
                                            ":  ",
                                            this.renderMarketList(
                                                e,
                                                t.whitelist_markets
                                            )
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "asset-card no-padding"},
                                        r.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.title"
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                s,
                                                l
                                            )
                                        ),
                                        r.a.createElement("br", null),
                                        this.renderPermissionIndicators(a, n),
                                        r.a.createElement("br", null)
                                    );
                                }
                            },
                            {
                                key: "getMarginPositions",
                                value: function() {
                                    var e = this.state.sortDirection,
                                        t = {
                                            name: function(t, a) {
                                                var n = E.ChainStore.getAccount(
                                                    t.borrower,
                                                    !1
                                                );
                                                n && (n = n.get("name"));
                                                var r = E.ChainStore.getAccount(
                                                    a.borrower,
                                                    !1
                                                );
                                                return (
                                                    r && (r = r.get("name")),
                                                    n > r
                                                        ? e
                                                            ? 1
                                                            : -1
                                                        : n < r
                                                            ? e
                                                                ? -1
                                                                : 1
                                                            : 0
                                                );
                                            },
                                            price: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.call_price.toReal() -
                                                        a.call_price.toReal())
                                                );
                                            },
                                            collateral: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a.collateral -
                                                        t.collateral)
                                                );
                                            },
                                            debt: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a.debt - t.debt)
                                                );
                                            },
                                            ratio: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.getRatio() -
                                                        a.getRatio())
                                                );
                                            }
                                        };
                                    return this.state.callOrders.sort(
                                        t[this.state.marginTableSort]
                                    );
                                }
                            },
                            {
                                key: "getGlobalSettlementPrice",
                                value: function() {
                                    if (!this.state.callOrders) return null;
                                    for (
                                        var e = null,
                                            t = null,
                                            a = this.state.callOrders.length,
                                            n = 0;
                                        n < a;
                                        n++
                                    ) {
                                        var s = this.state.callOrders[n];
                                        null == e
                                            ? ((e = s), (t = s.getRatio()))
                                            : s.getRatio() < t &&
                                              ((t = s.getRatio()), (e = s));
                                    }
                                    if (null == e) return null;
                                    var l = e.debt,
                                        o = e.collateral;
                                    return r.a.createElement(m.a, {
                                        base_amount: o,
                                        base_asset: e.call_price.base.asset_id,
                                        quote_amount: l,
                                        quote_asset: e.call_price.quote.asset_id
                                    });
                                }
                            },
                            {
                                key: "renderMarginPositions",
                                value: function(e, t) {
                                    var a = e.bitasset;
                                    if (
                                        !("feeds" in a) ||
                                        0 == a.feeds.length ||
                                        a.is_prediction_market
                                    )
                                        return null;
                                    var n = new Date().getTime(),
                                        s = new Date(
                                            n -
                                                1e3 *
                                                    e.bitasset.options
                                                        .feed_lifetime_sec
                                        ),
                                        l = a.feeds;
                                    if (
                                        !(l = l
                                            .filter(function(e) {
                                                return new Date(e[1][0]) > s;
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    new Date(t[1][0]) -
                                                    new Date(e[1][0])
                                                );
                                            })).length
                                    )
                                        return null;
                                    for (
                                        var c = [],
                                            d = l[0][1][1].settlement_price,
                                            h = l[0][1][1].core_exchange_rate,
                                            b = r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "left"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.publisher"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.settlement_price"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            d,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.core_exchange_rate"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            h,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maintenance_collateral_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maximum_short_squeeze_ratio"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            className:
                                                                "column-hide-small"
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.published"
                                                        })
                                                    )
                                                )
                                            ),
                                            _ = 0;
                                        _ < l.length;
                                        _++
                                    ) {
                                        var f = l[_],
                                            g = f[0],
                                            E = new Date(f[1][0] + "Z"),
                                            y = f[1][1].settlement_price,
                                            v = f[1][1].core_exchange_rate,
                                            k =
                                                "" +
                                                f[1][1]
                                                    .maintenance_collateral_ratio /
                                                    1e3,
                                            x =
                                                "" +
                                                f[1][1]
                                                    .maximum_short_squeeze_ratio /
                                                    1e3;
                                        c.push(
                                            r.a.createElement(
                                                "tr",
                                                {key: g},
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(i.a, {
                                                        account: g
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    this.formattedPrice(y, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    this.formattedPrice(v, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    k
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    x
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(p.a, {
                                                        time: E
                                                    })
                                                )
                                            )
                                        );
                                    }
                                    var w = r.a.createElement(
                                            "thead",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "name"
                                                        ),
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrower"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "collateral"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.collateral"
                                                    }),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      amount: this.state.callOrders[0]
                                                                          .getCollateral()
                                                                          .getAmount(),
                                                                      asset: this.state.callOrders[0].getCollateral()
                                                                          .asset_id,
                                                                      hide_amount: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "debt"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrow_amount"
                                                    }),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      amount: this.state.callOrders[0]
                                                                          .amountToReceive()
                                                                          .getAmount(),
                                                                      asset: this.state.callOrders[0].amountToReceive()
                                                                          .asset_id,
                                                                      hide_amount: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "clickable column-hide-small"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            onClick: this._toggleSortOrder.bind(
                                                                this,
                                                                "price"
                                                            )
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "exchange.call"
                                                        })
                                                    ),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      base_amount: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .base
                                                                          .amount,
                                                                      base_asset: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .base
                                                                          .asset_id,
                                                                      quote_amount: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .quote
                                                                          .amount,
                                                                      quote_asset: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .quote
                                                                          .asset_id,
                                                                      hide_value: !0,
                                                                      noPopOver: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.coll_ratio_target"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "ratio"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.coll_ratio"
                                                    })
                                                )
                                            )
                                        ),
                                        A = t.map(function(e) {
                                            return r.a.createElement(
                                                "tr",
                                                {
                                                    className: "margin-row",
                                                    key: e.id
                                                },
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(i.a, {
                                                        account: e.borrower
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(u.a, {
                                                        amount: e.collateral,
                                                        asset: e.getCollateral()
                                                            .asset_id,
                                                        hide_asset: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(u.a, {
                                                        amount: e.debt,
                                                        asset: e.amountToReceive()
                                                            .asset_id,
                                                        hide_asset: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right",
                                                            paddingRight: 10
                                                        },
                                                        className:
                                                            "column-hide-small"
                                                    },
                                                    r.a.createElement(m.a, {
                                                        base_amount:
                                                            e.call_price.base
                                                                .amount,
                                                        base_asset:
                                                            e.call_price.base
                                                                .asset_id,
                                                        quote_amount:
                                                            e.call_price.quote
                                                                .amount,
                                                        quote_asset:
                                                            e.call_price.quote
                                                                .asset_id,
                                                        hide_symbols: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right",
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    e.order
                                                        .target_collateral_ratio
                                                        ? (
                                                              e.order
                                                                  .target_collateral_ratio /
                                                              1e3
                                                          ).toFixed(3)
                                                        : "-"
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: e.getStatus(),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    e.getRatio().toFixed(3)
                                                )
                                            );
                                        });
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block",
                                            style: {paddingBottom: "1rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: ""},
                                                r.a.createElement(
                                                    Z.b,
                                                    {
                                                        defaultActiveTab: 0,
                                                        segmented: !1,
                                                        setting:
                                                            "bitassetDataTabs"
                                                    },
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.price_feed_data.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            b,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                c
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.margin_positions.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            w,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                A
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.asset.toJS(),
                                        t = this.getMarginPositions(),
                                        a =
                                            "bitasset" in e
                                                ? this.renderPriceFeed(e)
                                                : null,
                                        n =
                                            "bitasset" in e
                                                ? this.renderMarginPositions(
                                                      e,
                                                      t
                                                  )
                                                : null;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-container asset-page"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block page-layout"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block main-content wrap"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block medium-up-1",
                                                        style: {width: "100%"}
                                                    },
                                                    this.renderAboutBox(
                                                        e,
                                                        this.props.asset
                                                    )
                                                ),
                                                r.a.createElement(
                                                    Z.b,
                                                    {
                                                        setting:
                                                            "assetDataTabs",
                                                        className:
                                                            "grid-block vertical",
                                                        tabsClass:
                                                            "bordered-header content-block",
                                                        contentClass:
                                                            "tab-no-background",
                                                        segmented: !1
                                                    },
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.info"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                                                style: {
                                                                    paddingTop:
                                                                        "1rem"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderSummary(
                                                                    e
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderPermissions(
                                                                    e
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "grid-content small-no-padding"
                                                                },
                                                                this.renderFeePool(
                                                                    e
                                                                )
                                                            ),
                                                            a
                                                                ? r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grid-content small-no-padding"
                                                                      },
                                                                      this.renderPriceFeed(
                                                                          e
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        n || null
                                                    ),
                                                    r.a.createElement(
                                                        Z.a,
                                                        {
                                                            title:
                                                                "explorer.asset.actions"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                                                style: {
                                                                    paddingTop:
                                                                        "1rem"
                                                                }
                                                            },
                                                            this.renderFeePoolFunding(
                                                                e
                                                            ),
                                                            this.renderFeePoolClaiming(
                                                                e
                                                            ),
                                                            this.renderFeesClaiming(
                                                                e
                                                            ),
                                                            this.renderAssetOwnerUpdate(
                                                                e
                                                            ),
                                                            "bitasset" in e &&
                                                            !e.bitasset
                                                                .is_prediction_market
                                                                ? this.renderFeedPublish(
                                                                      e
                                                                  )
                                                                : null
                                                        )
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
            (re = Object(R.connect)(re, {
                listenTo: function() {
                    return [q.a];
                },
                getProps: function() {
                    return {
                        currentAccount:
                            q.a.getState().currentAccount ||
                            q.a.getState().passwordAccount
                    };
                }
            })),
                (re = Object(c.a)(re, {propNames: ["backingAsset"]}));
            var se = (function(e) {
                function t() {
                    return (
                        $(this, t),
                        ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    te(t, r.a.Component),
                    Q(t, [
                        {
                            key: "render",
                            value: function() {
                                if (null === this.props.asset)
                                    return r.a.createElement(k.a, {
                                        subtitle: "asset_not_found_subtitle"
                                    });
                                var e = this.props.asset.has("bitasset")
                                    ? this.props.asset.getIn([
                                          "bitasset",
                                          "options",
                                          "short_backing_asset"
                                      ])
                                    : "1.3.0";
                                return r.a.createElement(
                                    re,
                                    K({}, this.props, {backingAsset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            se = Object(c.a)(se, {withDynamic: !0});
            var le = (function(e) {
                function t() {
                    return (
                        $(this, t),
                        ee(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    te(t, r.a.Component),
                    Q(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.match.params.symbol.toUpperCase();
                                return r.a.createElement(
                                    se,
                                    K({}, this.props, {asset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = le;
        }
    }
]);
//# sourceMappingURL=asset.js.map
