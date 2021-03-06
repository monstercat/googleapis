"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var apirequest_1 = require("../../lib/apirequest");
// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.
// tslint:disable: no-any
/**
 * Ad Exchange Seller API
 *
 * Accesses the inventory of Ad Exchange seller users and generates reports.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangeseller = google.adexchangeseller('v1.1');
 *
 * @namespace adexchangeseller
 * @type {Function}
 * @version v1.1
 * @variation v1.1
 * @param {object=} options Options for Adexchangeseller
 */
function Adexchangeseller(options) {
    var self = this;
    self._options = options || {};
    self.accounts = {
        /**
         * adexchangeseller.accounts.get
         * @desc Get information about the selected Ad Exchange account.
         * @alias adexchangeseller.accounts.get
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to get information about. Tip: 'myaccount' is a valid ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adexchangeseller/v1.1/accounts/{accountId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.adclients = {
        /**
         * adexchangeseller.adclients.list
         * @desc List all ad clients in this Ad Exchange account.
         * @alias adexchangeseller.adclients.list
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adexchangeseller/v1.1/adclients')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.adunits = {
        /**
         * adexchangeseller.adunits.get
         * @desc Gets the specified ad unit in the specified ad client.
         * @alias adexchangeseller.adunits.get
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to get the ad unit.
         * @param {string} params.adUnitId Ad unit to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/adexchangeseller/v1.1/adclients/{adClientId}/adunits/{adUnitId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId', 'adUnitId'],
                pathParams: ['adClientId', 'adUnitId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/adexchangeseller/v1.1/adclients/{adClientId}/adunits')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        customchannels: {
            /**
             * adexchangeseller.adunits.customchannels.list
             * @desc List all custom channels which the specified ad unit belongs to.
             * @alias adexchangeseller.adunits.customchannels.list
             * @memberOf! adexchangeseller(v1.1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.adClientId Ad client which contains the ad unit.
             * @param {string} params.adUnitId Ad unit for which to list custom channels.
             * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
             * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/adexchangeseller/v1.1/adclients/{adClientId}/adunits/{adUnitId}/customchannels')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['adClientId', 'adUnitId'],
                    pathParams: ['adClientId', 'adUnitId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.alerts = {
        /**
         * adexchangeseller.alerts.list
         * @desc List the alerts for this Ad Exchange account.
         * @alias adexchangeseller.alerts.list
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adexchangeseller/v1.1/alerts')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.customchannels = {
        /**
         * adexchangeseller.customchannels.get
         * @desc Get the specified custom channel from the specified ad client.
         * @alias adexchangeseller.customchannels.get
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the custom channel.
         * @param {string} params.customChannelId Custom channel to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/adexchangeseller/v1.1/adclients/{adClientId}/customchannels/{customChannelId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId', 'customChannelId'],
                pathParams: ['adClientId', 'customChannelId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/adexchangeseller/v1.1/adclients/{adClientId}/customchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        adunits: {
            /**
             * adexchangeseller.customchannels.adunits.list
             * @desc List all ad units in the specified custom channel.
             * @alias adexchangeseller.customchannels.adunits.list
             * @memberOf! adexchangeseller(v1.1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.adClientId Ad client which contains the custom channel.
             * @param {string} params.customChannelId Custom channel for which to list ad units.
             * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
             * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
             * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl +
                            '/adexchangeseller/v1.1/adclients/{adClientId}/customchannels/{customChannelId}/adunits')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['adClientId', 'customChannelId'],
                    pathParams: ['adClientId', 'customChannelId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.metadata = {
        dimensions: {
            /**
             * adexchangeseller.metadata.dimensions.list
             * @desc List the metadata for the dimensions available to this AdExchange
             * account.
             * @alias adexchangeseller.metadata.dimensions.list
             * @memberOf! adexchangeseller(v1.1)
             *
             * @param {object=} params Parameters for request
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/adexchangeseller/v1.1/metadata/dimensions')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        },
        metrics: {
            /**
             * adexchangeseller.metadata.metrics.list
             * @desc List the metadata for the metrics available to this AdExchange
             * account.
             * @alias adexchangeseller.metadata.metrics.list
             * @memberOf! adexchangeseller(v1.1)
             *
             * @param {object=} params Parameters for request
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/adexchangeseller/v1.1/metadata/metrics')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.preferreddeals = {
        /**
         * adexchangeseller.preferreddeals.get
         * @desc Get information about the selected Ad Exchange Preferred Deal.
         * @alias adexchangeseller.preferreddeals.get
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.dealId Preferred deal to get information about.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adexchangeseller/v1.1/preferreddeals/{dealId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['dealId'],
                pathParams: ['dealId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adexchangeseller/v1.1/preferreddeals')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
    self.reports = {
        /**
         * adexchangeseller.reports.generate
         * @desc Generate an Ad Exchange report based on the report request sent in
         * the query parameters. Returns the result as JSON; to retrieve output in
         * CSV format specify "alt=csv" as a query parameter.
         * @alias adexchangeseller.reports.generate
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.dimension Dimensions to base the report on.
         * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {string=} params.filter Filters to be run on the report.
         * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param {integer=} params.maxResults The maximum number of rows of report data to return.
         * @param {string=} params.metric Numeric columns to include in the report.
         * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
         * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {integer=} params.startIndex Index of the first row of report data to return.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl + '/adexchangeseller/v1.1/reports')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['startDate', 'endDate'],
                pathParams: [],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        },
        saved: {
            /**
             * adexchangeseller.reports.saved.generate
             * @desc Generate an Ad Exchange report based on the saved report ID sent
             * in the query parameters.
             * @alias adexchangeseller.reports.saved.generate
             * @memberOf! adexchangeseller(v1.1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
             * @param {integer=} params.maxResults The maximum number of rows of report data to return.
             * @param {string} params.savedReportId The saved report to retrieve.
             * @param {integer=} params.startIndex Index of the first row of report data to return.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            generate: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/adexchangeseller/v1.1/reports/{savedReportId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['savedReportId'],
                    pathParams: ['savedReportId'],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            },
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options = options || {};
                var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                var parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/adexchangeseller/v1.1/reports/saved')
                            .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.createAPIRequest(parameters, callback);
            }
        }
    };
    self.urlchannels = {
        /**
         * adexchangeseller.urlchannels.list
         * @desc List all URL channels in the specified ad client for this Ad
         * Exchange account.
         * @alias adexchangeseller.urlchannels.list
         * @memberOf! adexchangeseller(v1.1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list URL channels.
         * @param {integer=} params.maxResults The maximum number of URL channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            var rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            var parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/adexchangeseller/v1.1/adclients/{adClientId}/urlchannels')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['adClientId'],
                pathParams: ['adClientId'],
                context: self
            };
            return apirequest_1.createAPIRequest(parameters, callback);
        }
    };
}
module.exports = Adexchangeseller;
//# sourceMappingURL=v1.1.js.map