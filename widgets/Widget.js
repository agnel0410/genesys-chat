/***********************************************************************
 * Copyright Genesys Laboratories. All Rights Reserved
 ************************************************************************/

define(['jquery', 'config', 'text!stylesheets/Widget.css', 'text!stylesheets/widgets.min.css' ],
        function($, config, ourWidgetCSS, widgetCSS) {
    var log_prefix = "Widget: ";

    /**
     * Initialize this module
     */
    function initialize() {
        console.log(log_prefix + "initialize");
        $('head').append($('<style>' + widgetCSS + ourWidgetCSS + '</style>'));

        if (!window._genesys) window._genesys = {};
        if (!window._gt) window._gt = [];

        window._genesys.widgets = {
            main: {
                debug: true,
                theme: "dark",
                lang: "en",
                customStylesheetID: "genesys_widgets_custom",
                plugins: [
                    "cx-webchat",
                    "cx-webchat-service",
                    "cx-send-message",
                    "cx-send-message-service",
                    "cx-search",
                    "cx-knowledge-center-service",
                    "cx-appointment",
                    "cx-boiler",
                    "cx-buster",
                    "cx-calendar",
                    "cx-call-us",
                    "cx-callback",
                    "cx-callback-service",
                    //"cx-channel-selector",
                    "cx-chat-deflection",
                    "cx-cobrowse",
                    "cx-gwe",
                    "cx-offers",
                    "cx-overlay",
                    "cx-preferences",
                    //"cx-sidebar",
                    "cx-stats-service",
                    "cx-survey",
                    "cx-toaster",
                    "cx-watchman",
                    "cx-window-manager"
                ]
            },
            webchat: {
                dataURL: config.WEBCHAT_URL,
                emojis: true,
                autoInvite: {
                    enabled: false,
                    timeToInviteSeconds: 5,
                    inviteTimeoutSeconds: 30
                },
                chatButton: {
                    enabled: true,
                    openDelay: 1000,
                    effectDuration: 300,
                    hideDuringInvite: true
                }
            },
            sendmessage: {
                dataURL : config.URL,
                SendMessageButton: {
                    enabled: true,
                    openDelay: 1000,
                    effectDuration: 300,
                    hideDuringInvite: true
                }
            },
            knowledgecenter : {
                host: 'http://demosrv.genesyslab.com:7400/gks-server/v1',
                knowledgebases:['knowledgefaq', 'knowledgeartiles'],
                lang:'en',
                media:'chat',
                maxTrendingResults:5,
                maxSearchResults:3,
                apiClientId:'widget',
                apiClientMediaType:'selfservice',
                search: {
                    SearchButton: {
                        enabled: true,
                        effect: 'fade',
                        openDelay: 1000,
                        effectDuration: 300
                    }
                }
            },
            callus: {
                contacts: [
                    {
                        displayName: 'Payments',
                        i18n: 'Number001',
                        number: '1 202 555 0162'
                    },
                    {
                        displayName: 'Local',
                        i18n: 'Number002',
                        number: '202 555 0134'
                    },
                    {
                        displayName: 'International',
                        i18n: 'Number003',
                        number: '0647 555 0131'
                    }
                ],
                hours: [
                    '8am - 8pm Mon - Fri',
                    '10am - 6pm Sat - Sun'
                ]
            },
            callback: {
                dataURL: config.CALLBACK_URL,
                userData: {},
                countryCodes: true,
                formValidation: false,
                callDirection: 'USERTERMINATED'
            }
        };

        // defer the load until we have configuration
        require(['javascript/widgets.min', 'javascript/widget-plugin'], function(widget, widgetPlugin) {
            widgetPlugin.initialize();
            console.log(log_prefix + "initialize completed");
        });
    }

    return {
        initialize: initialize
    }
});
