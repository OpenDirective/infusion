/*
Copyright 2014 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt

*/

var fluid_1_5 = fluid_1_5 || {};

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("fluid.overviewPanel");
    fluid.overviewPanel.preventDefault = function (event) {
        event.preventDefault();
    };

    fluid.defaults("fluid.overviewPanel", {
        gradeNames: ["fluid.rendererComponent", "fluid.modelComponent", "autoInit"],
        resources: {
            template: {
                href: "../html/overviewPanelTemplate.html"
            }
        },
        listeners: {
            "onCreate.setVisibility": "{that}.setVisibility",
            "onCreate.showTemplate": "fluid.overviewPanel.showTemplate",
            "afterRender.registerToggleListener": {
                "this": "{that}.dom.toggleControl",
                "method": "click",
                "args": "{that}.togglePanel"
            },
            "afterRender.preventDefaultOnToggleControl": {
                "this": "{that}.dom.toggleControl",
                "method": "click",
                "args": fluid.overviewPanel.preventDefault
            },
            "afterRender.registerCloseListener": {
                "this": "{that}.dom.closeControl",
                "method": "click",
                "args": "{that}.closePanel"
            },
            "afterRender.preventDefaultOnCloseControl": {
                "this": "{that}.dom.closeControl",
                "method": "click",
                "args": fluid.overviewPanel.preventDefault
            },
            "afterRender.setTitleLinkHref": {
                "this": "{that}.dom.titleLink",
                "method": "attr",
                "args": ["href", "{that}.options.links.titleLinkHref"]
            },
            "afterRender.setCodeLinkHref": {
                "this": "{that}.dom.codeLink",
                "method": "attr",
                "args": ["href", "{that}.options.links.codeLinkHref"]
            },
            "afterRender.setApiLinkHref": {
                "this": "{that}.dom.apiLink",
                "method": "attr",
                "args": ["href", "{that}.options.links.apiLinkHref"]
            },
            "afterRender.setDesignLinkHref": {
                "this": "{that}.dom.designLink",
                "method": "attr",
                "args": ["href", "{that}.options.links.designLinkHref"]
            },
            "afterRender.setFeedbackLinkHref": {
                "this": "{that}.dom.feedbackLink",
                "method": "attr",
                "args": ["href", "{that}.options.links.feedbackLinkHref"]
            },
            "afterRender.setToggleControlAria": {
                "this": "{that}.dom.toggleControl",
                "method": "attr",
                "args": {
                    "role": "button",
                    "aria-controls": { expander: { "this": "{that}.container", "method": "attr", args: "id" } }
                }
            },
            "afterRender.setCloseControlAria": {
                "this": "{that}.dom.closeControl",
                "method": "attr",
                "args": {
                    "role": "button",
                    "aria-label": "{that}.options.strings.closePanelLabel",
                    "aria-controls": { expander: { "this": "{that}.container", "method": "attr", args: "id" } }
                }
            },
            "afterRender.setAriaStates": "{that}.setAriaStates"
        },
        model: {
            showPanel: true
        },
        modelListeners: {
            "showPanel.setVisibility": "{that}.setVisibility",
            "showPanel.setAriaStates": "{that}.setAriaStates"
        },
        invokers: {
            setVisibility: {
                funcName: "fluid.overviewPanel.setVisibility",
                args: ["{that}", "{that}.model.showPanel"],
                dynamic: true
            },
            togglePanel: {
                funcName: "fluid.overviewPanel.togglePanel",
                args: ["{that}", "{that}.model.showPanel"],
                dynamic: true
            },
            closePanel: {
                funcName: "fluid.overviewPanel.closePanel",
                args: "{that}"
            },
            setAriaStates: {
                funcName: "fluid.overviewPanel.setAriaStates",
                args: ["{that}", "{that}.model.showPanel"],
                dynamic: true
            }
        },
        selectors: {
            toggleControl: ".flc-overviewPanel-toggleControl",
            titleBegin: ".flc-overviewPanel-title-begin",
            titleLink: ".flc-overviewPanel-titleLink",
            titleLinkText: ".flc-overviewPanel-title-linkText",
            titleEnd: ".flc-overviewPanel-title-end",
            componentName: ".flc-overviewPanel-componentName",
            description: ".flc-overviewPanel-description",
            instructionsHeading: ".flc-overviewPanel-instructionsHeading",
            instructions: ".flc-overviewPanel-instructions",
            codeLink: ".flc-overviewPanel-codeLink",
            codeLinkText: ".flc-overviewPanel-codeLinkText",
            apiLink: ".flc-overviewPanel-apiLink",
            apiLinkText: ".flc-overviewPanel-apiLinkText",
            designLink: ".flc-overviewPanel-designLink",
            designLinkText: ".flc-overviewPanel-designLinkText",
            feedbackText: ".flc-overviewPanel-feedbackText",
            feedbackLink: ".flc-overviewPanel-feedbackLink",
            feedbackLinkText: ".flc-overviewPanel-feedbackLinkText",
            closeControl: ".flc-overviewPanel-closeControl",
            closeText: ".flc-overviewPanel-closeText"
        },
        selectorsToIgnore: ["toggleControl", "titleLink", "codeLink", "apiLink", "designLink", "feedbackLink", "closeControl"],
        protoTree: {
            titleBegin: {messagekey: "titleBegin"},
            titleLinkText: {messagekey: "titleLinkText"},
            titleEnd: {messagekey: "titleEnd"},
            componentName: {messagekey: "componentName"},
            description: {markup: "${{that}.options.markup.description}"},
            instructionsHeading: {messagekey: "instructionsHeading"},
            instructions: {markup: "${{that}.options.markup.instructions}"},
            codeLinkText: {messagekey: "codeLinkText"},
            apiLinkText: {messagekey: "apiLinkText"},
            designLinkText: {messagekey: "designLinkText"},
            feedbackText: {messagekey: "feedbackText"},
            feedbackLinkText: {messagekey: "feedbackLinkText"},
            closeText: {messagekey: "closeText"}
        },
        styles: {
            hidden: "fl-overviewPanel-hidden"
        },
        strings: {
            titleBegin: "An",
            titleLinkText: "Infusion",
            titleEnd: "component demo",
            componentName: "Component Name",
            instructionsHeading: "Instructions",
            codeLinkText: "code",
            apiLinkText: "API",
            designLinkText: "design",
            feedbackText: "Feedback statement and link",
            feedbackLinkText: "Link text",
            closeText: "close",
            openPanelLabel: "Open demo instructions",
            closePanelLabel: "Close demo instructions"
        },
        markup: {
            description: "A description of the component should appear here. It should say: <ul><li>What the component does.</li><li>Why it is interesting / useful.</li></ul>",
            instructions: "<p>Do this to do this. Do that to do that.</p>"
        },
        links: {
            titleLinkHref: "http://fluidproject.org/products/infusion/",
            codeLinkHref: "#",
            apiLinkHref: "#",
            designLinkHref: "#",
            feedbackLinkHref: "#"
        }
    });

    fluid.overviewPanel.setVisibility = function (that, showPanel) {
        that.container.toggleClass(that.options.styles.hidden, !showPanel);
    };

    fluid.overviewPanel.showTemplate = function (that) {
        fluid.fetchResources(that.options.resources, function () {
            that.refreshView();
        });
    };

    fluid.overviewPanel.togglePanel = function (that, showPanel) {
        that.applier.requestChange("showPanel", !showPanel);
    };

    fluid.overviewPanel.closePanel = function (that) {
        that.applier.requestChange("showPanel", false);
    };

    fluid.overviewPanel.setAriaStates = function (that, showPanel) {
        that.locate("toggleControl").attr("aria-pressed", !showPanel);
        that.locate("toggleControl").attr("aria-expanded", showPanel);
        that.locate("closeControl").attr("aria-expanded", showPanel);
        if (showPanel) {
            that.locate("toggleControl").attr("aria-label", that.options.strings.closePanelLabel);
        } else {
            that.locate("toggleControl").attr("aria-label", that.options.strings.openPanelLabel);
        }
    };

})(jQuery, fluid_1_5);
