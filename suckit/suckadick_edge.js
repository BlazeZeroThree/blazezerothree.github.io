/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'alex-brush, cursive': '<script src=\"http://use.edgefonts.net/alex-brush:n4:all.js\"></script>',
            'chewy, sans-serif': '<script src=\"http://use.edgefonts.net/chewy:n4:all.js\"></script>',
            'chunk, serif': '<script src=\"http://use.edgefonts.net/chunk:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['0px', '127px', '550px', '146px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​suck a dick</p>",
                            align: "center",
                            font: ['alex-brush, cursive', [0, "px"], "rgba(0,0,0,1)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['524px', '-127px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​WOW</p>",
                            align: "center",
                            font: ['chewy, sans-serif', [99.375, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​SUCK</p>",
                            align: "center",
                            font: ['chunk, serif', [135, "px"], "rgba(255,0,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4Copy',
                            type: 'text',
                            rect: ['5px', '97px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​A</p>",
                            align: "center",
                            font: ['chunk, serif', [135, "px"], "rgba(255,0,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4Copy2',
                            type: 'text',
                            rect: ['5px', '192px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​DICK</p>",
                            align: "center",
                            font: ['chunk, serif', [135, "px"], "rgba(255,0,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid21",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid22",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18",
                            "opacity",
                            3000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            1000,
                            1500,
                            "linear",
                            "${Text3}",
                            '524px',
                            '-153px'
                        ],
                        [
                            "eid27",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid32",
                            "color",
                            3750,
                            250,
                            "linear",
                            "${Text4Copy2}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,255,0,1.00)'
                        ],
                        [
                            "eid35",
                            "color",
                            4000,
                            250,
                            "linear",
                            "${Text4Copy2}",
                            'rgba(255,255,0,1)',
                            'rgba(0,255,0,1.00)'
                        ],
                        [
                            "eid38",
                            "color",
                            4250,
                            250,
                            "linear",
                            "${Text4Copy2}",
                            'rgba(0,255,0,1)',
                            'rgba(0,255,255,1.00)'
                        ],
                        [
                            "eid41",
                            "color",
                            4500,
                            250,
                            "linear",
                            "${Text4Copy2}",
                            'rgba(0,255,255,1)',
                            'rgba(0,0,255,1.00)'
                        ],
                        [
                            "eid28",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid30",
                            "color",
                            3750,
                            250,
                            "linear",
                            "${Text4Copy}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,255,0,1.00)'
                        ],
                        [
                            "eid33",
                            "color",
                            4000,
                            250,
                            "linear",
                            "${Text4Copy}",
                            'rgba(255,255,0,1)',
                            'rgba(0,255,0,1.00)'
                        ],
                        [
                            "eid36",
                            "color",
                            4250,
                            250,
                            "linear",
                            "${Text4Copy}",
                            'rgba(0,255,0,1)',
                            'rgba(0,255,255,1.00)'
                        ],
                        [
                            "eid39",
                            "color",
                            4500,
                            250,
                            "linear",
                            "${Text4Copy}",
                            'rgba(0,255,255,1)',
                            'rgba(0,0,255,1.00)'
                        ],
                        [
                            "eid29",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid31",
                            "color",
                            3750,
                            250,
                            "linear",
                            "${Text4}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,255,0,1.00)'
                        ],
                        [
                            "eid34",
                            "color",
                            4000,
                            250,
                            "linear",
                            "${Text4}",
                            'rgba(255,255,0,1)',
                            'rgba(0,255,0,1.00)'
                        ],
                        [
                            "eid37",
                            "color",
                            4250,
                            250,
                            "linear",
                            "${Text4}",
                            'rgba(0,255,0,1)',
                            'rgba(0,255,255,1.00)'
                        ],
                        [
                            "eid40",
                            "color",
                            4500,
                            250,
                            "linear",
                            "${Text4}",
                            'rgba(0,255,255,1)',
                            'rgba(0,0,255,1.00)'
                        ],
                        [
                            "eid16",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            2500,
                            0,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "font-size",
                            0,
                            1000,
                            "easeOutBack",
                            "${Text}",
                            '0px',
                            '106px'
                        ],
                        [
                            "eid5",
                            "font-size",
                            1500,
                            1000,
                            "easeInOutCubic",
                            "${Text}",
                            '106px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "top",
                            1000,
                            1500,
                            "linear",
                            "${Text3}",
                            '-127px',
                            '399px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("suckadick_edgeActions.js");
})("EDGE-101157644");
