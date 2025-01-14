import React from "react";
import PropTypes from "prop-types";
import AssetActions from "actions/AssetActions";
import SettingsActions from "actions/SettingsActions";
import {Link} from "react-router-dom";
import Immutable from "immutable";
import Translate from "react-translate-component";
import LinkToAccountById from "../Utility/LinkToAccountById";
import assetUtils from "common/asset_utils";
import counterpart from "counterpart";
import FormattedAsset from "../Utility/FormattedAsset";
import AssetName from "../Utility/AssetName";
import {ChainStore} from "zcomjs";
import cnames from "classnames";
import utils from "common/utils";
import LoadingIndicator from "../LoadingIndicator";
import ls from "common/localStorage";
import PaginatedList from "../Utility/PaginatedList";
import {Apis} from "zcomjs-ws";

let accountStorage = new ls("__graphene__");

class Assets extends React.Component {
    constructor(props) {
        super();

        let chainID = Apis.instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);
        else chainID = "4018d784";

        this.state = {
            chainID,
            foundLast: false,
            lastAsset: "",
            isLoading: false,
            totalAssets:
                typeof accountStorage.get(`totalAssets_${chainID}`) != "object"
                    ? accountStorage.get(`totalAssets_${chainID}`)
                    : chainID && chainID === "4018d784"
                        ? 3000
                        : 50, // mainnet has 3000+ assets, other chains may not have that many
            assetsFetched: 0,
            activeFilter: "market",
            filterUIA: props.filterUIA || "",
            filterMPA: props.filterMPA || "",
            filterPM: props.filterPM || ""
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !Immutable.is(nextProps.assets, this.props.assets) ||
            !utils.are_equal_shallow(nextState, this.state)
        );
    }

    componentWillMount() {
        this._checkAssets(this.props.assets, true);
    }

    _checkAssets(assets, force) {
        this.setState({isLoading: true});
        let lastAsset = assets
            .sort((a, b) => {
                if (a.symbol > b.symbol) {
                    return 1;
                } else if (a.symbol < b.symbol) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .last();

        if (assets.size === 0 || force) {
            AssetActions.getAssetList.defer("A", 100);
            this.setState({assetsFetched: 100});
        } else if (assets.size >= this.state.assetsFetched) {
            AssetActions.getAssetList.defer(lastAsset.symbol, 100);
            this.setState({assetsFetched: this.state.assetsFetched + 99});
        }

        if (assets.size > this.state.totalAssets) {
            accountStorage.set(
                `totalAssets_${this.state.chainID}`,
                assets.size
            );
        }

        if (this.state.assetsFetched >= this.state.totalAssets - 100) {
            this.setState({isLoading: false});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.assets !== this.props.assets) {
            this._checkAssets(nextProps.assets);
        }
    }

    linkToAccount(name_or_id) {
        if (!name_or_id) {
            return <span>-</span>;
        }

        return <LinkToAccountById account={name_or_id} />;
    }

    _toggleFilter(filter) {
        this.setState({
            activeFilter: filter
        });
    }

    _onFilter(type, e) {
        this.setState({[type]: e.target.value.toUpperCase()});
        SettingsActions.changeViewSetting({
            [type]: e.target.value.toUpperCase()
        });
    }

    render() {
        let {assets} = this.props;
        let {activeFilter} = this.state;

        let placeholder = counterpart.translate("markets.filter").toUpperCase();
        let coreAsset = ChainStore.getAsset("1.3.0");

        let uia;
        let mia;
        let pm;

        if (activeFilter == "user") {
            uia = assets
                .filter(a => {
                    return (
                        !a.market_asset &&
                        a.symbol.indexOf(this.state.filterUIA) !== -1
                    );
                })
                .map(asset => {
                    let description = assetUtils.parseDescription(
                        asset.options.description
                    );

                    let marketID =
                        asset.symbol +
                        "_" +
                        (description.market
                            ? description.market
                            : coreAsset
                                ? coreAsset.get("symbol")
                                : "BTS");

                    return (
                        <tr key={asset.symbol}>
                            <td>
                                <Link to={`/asset/${asset.symbol}`}>
                                    <AssetName name={asset.symbol} />
                                </Link>
                            </td>
                            <td>{this.linkToAccount(asset.issuer)}</td>
                            <td>
                                <FormattedAsset
                                    amount={asset.dynamic.current_supply}
                                    asset={asset.id}
                                    hide_asset={true}
                                />
                            </td>
                            <td>
                                <Link
                                    className="button outline"
                                    to={`/market/${marketID}`}
                                >
                                    <Translate content="header.exchange" />
                                </Link>
                            </td>
                        </tr>
                    );
                })
                .sort((a, b) => {
                    if (a.key > b.key) {
                        return 1;
                    } else if (a.key < b.key) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
                .toArray();
        }

        if (activeFilter == "market") {
            mia = assets
                .filter(a => {
                    return (
                        a.bitasset_data &&
                        !a.bitasset_data.is_prediction_market &&
                        a.symbol.indexOf(this.state.filterMPA) !== -1
                    );
                })
                .map(asset => {
                    let description = assetUtils.parseDescription(
                        asset.options.description
                    );

                    let marketID =
                        asset.symbol +
                        "_" +
                        (description.market
                            ? description.market
                            : coreAsset
                                ? coreAsset.get("symbol")
                                : "BTS");

                    return (
                        <tr key={asset.symbol}>
                            <td>
                                <Link to={`/asset/${asset.symbol}`}>
                                    <AssetName name={asset.symbol} />
                                </Link>
                            </td>
                            <td>{this.linkToAccount(asset.issuer)}</td>
                            <td>
                                <FormattedAsset
                                    amount={asset.dynamic.current_supply}
                                    asset={asset.id}
                                    hide_asset={true}
                                />
                            </td>
                            <td>
                                <Link
                                    className="button outline"
                                    to={`/market/${marketID}`}
                                >
                                    <Translate content="header.exchange" />
                                </Link>
                            </td>
                        </tr>
                    );
                })
                .sort((a, b) => {
                    if (a.key > b.key) {
                        return 1;
                    } else if (a.key < b.key) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
                .toArray();
        }

        if (activeFilter == "prediction") {
            pm = assets
                .filter(a => {
                    let description = assetUtils.parseDescription(
                        a.options.description
                    );

                    return (
                        a.bitasset_data &&
                        a.bitasset_data.is_prediction_market &&
                        (a.symbol
                            .toLowerCase()
                            .indexOf(this.state.filterPM.toLowerCase()) !==
                            -1 ||
                            description.main
                                .toLowerCase()
                                .indexOf(this.state.filterPM.toLowerCase()) !==
                                -1)
                    );
                })
                .map(asset => {
                    let description = assetUtils.parseDescription(
                        asset.options.description
                    );
                    let marketID =
                        asset.symbol +
                        "_" +
                        (description.market
                            ? description.market
                            : coreAsset
                                ? coreAsset.get("symbol")
                                : "BTS");

                    return (
                        <tr key={asset.id.split(".")[2]}>
                            <td style={{width: "80%"}}>
                                <div
                                    style={{paddingTop: 10, fontWeight: "bold"}}
                                >
                                    <Link to={`/asset/${asset.symbol}`}>
                                        <AssetName name={asset.symbol} />
                                    </Link>
                                    {description.condition ? (
                                        <span> ({description.condition})</span>
                                    ) : null}
                                </div>
                                {description ? (
                                    <div
                                        style={{
                                            padding: "10px 20px 5px 0",
                                            lineHeight: "18px"
                                        }}
                                    >
                                        {description.main}
                                    </div>
                                ) : null}
                                <div
                                    style={{
                                        padding: "0 20px 5px 0",
                                        lineHeight: "18px"
                                    }}
                                >
                                    <LinkToAccountById account={asset.issuer} />
                                    <span>
                                        {" "}
                                        -{" "}
                                        <FormattedAsset
                                            amount={
                                                asset.dynamic.current_supply
                                            }
                                            asset={asset.id}
                                        />
                                    </span>
                                    {description.expiry ? (
                                        <span> - {description.expiry}</span>
                                    ) : null}
                                </div>
                            </td>
                            <td style={{width: "20%"}}>
                                <Link
                                    className="button outline"
                                    to={`/market/${marketID}`}
                                >
                                    <Translate content="header.exchange" />
                                </Link>
                            </td>
                        </tr>
                    );
                })
                .sort((a, b) => {
                    if (a.key > b.key) {
                        return -1;
                    } else if (a.key < b.key) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
                .toArray();
        }

        let assetListHeader = (
            <tr>
                <th>
                    <Translate
                        component="span"
                        content="explorer.assets.symbol"
                    />
                </th>
                <th>
                    <Translate
                        component="span"
                        content="explorer.assets.issuer"
                    />
                </th>
                <th>
                    <Translate component="span" content="markets.supply" />
                </th>
                <th />
            </tr>
        );

        return (
            <div className="grid-block vertical">
                <div className="grid-block vertical">
                    <div className="grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical">
                        <div className="generic-bordered-box">
                            <div className="header-selector">
                                <div className="selector">
                                    <div
                                        className={cnames("inline-block", {
                                            inactive: activeFilter != "market"
                                        })}
                                        onClick={this._toggleFilter.bind(
                                            this,
                                            "market"
                                        )}
                                    >
                                        <Translate content="explorer.assets.market" />
                                    </div>
                                    <div
                                        className={cnames("inline-block", {
                                            inactive: activeFilter != "user"
                                        })}
                                        onClick={this._toggleFilter.bind(
                                            this,
                                            "user"
                                        )}
                                    >
                                        <Translate content="explorer.assets.user" />
                                    </div>
                                    <div
                                        className={cnames("inline-block", {
                                            inactive:
                                                activeFilter != "prediction"
                                        })}
                                        onClick={this._toggleFilter.bind(
                                            this,
                                            "prediction"
                                        )}
                                    >
                                        <Translate content="explorer.assets.prediction" />
                                    </div>
                                </div>
                            </div>
                            {this.state.isLoading ? <LoadingIndicator /> : null}
                            {activeFilter == "market" ? (
                                <div className="grid-block shrink">
                                    <div className="grid-content">
                                        <input
                                            style={{maxWidth: "500px"}}
                                            placeholder={placeholder}
                                            type="text"
                                            value={this.state.filterMPA}
                                            onChange={this._onFilter.bind(
                                                this,
                                                "filterMPA"
                                            )}
                                        />
                                    </div>
                                </div>
                            ) : null}
                            {activeFilter == "market" ? (
                                <div
                                    className="grid-block"
                                    style={{paddingBottom: 20}}
                                >
                                    <PaginatedList
                                        header={assetListHeader}
                                        rows={mia}
                                    />
                                </div>
                            ) : null}

                            {activeFilter == "user" ? (
                                <div className="grid-block shrink">
                                    <div className="grid-content">
                                        <input
                                            style={{maxWidth: "500px"}}
                                            placeholder={placeholder}
                                            type="text"
                                            value={this.state.filterUIA}
                                            onChange={this._onFilter.bind(
                                                this,
                                                "filterUIA"
                                            )}
                                        />
                                    </div>
                                </div>
                            ) : null}

                            {activeFilter == "user" ? (
                                <div
                                    className="grid-block"
                                    style={{paddingBottom: 20}}
                                >
                                    <PaginatedList
                                        header={assetListHeader}
                                        rows={uia}
                                    />
                                </div>
                            ) : null}

                            {activeFilter == "prediction" ? (
                                <div className="grid-block shrink">
                                    <div className="grid-content">
                                        <input
                                            style={{maxWidth: "500px"}}
                                            placeholder={counterpart
                                                .translate("markets.search")
                                                .toUpperCase()}
                                            type="text"
                                            value={this.state.filterPM}
                                            onChange={this._onFilter.bind(
                                                this,
                                                "filterPM"
                                            )}
                                        />
                                    </div>
                                </div>
                            ) : null}

                            {activeFilter == "prediction" ? (
                                <div
                                    className="grid-block"
                                    style={{paddingBottom: 20}}
                                >
                                    <PaginatedList rows={pm} pageSize={6} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Assets.defaultProps = {
    assets: {}
};

Assets.propTypes = {
    assets: PropTypes.object.isRequired
};

export default Assets;
