
    var chart_config = {
        "chart": {
            "container": "#collapsable-example",

            "animateOnInit": true,
            
            "node": {
                "collapsable": true
            },
            "animation": {
                "nodeAnimation": "easeOutBounce",
                "nodeSpeed": 700,
                "connectorsAnimation": "bounce",
                "connectorsSpeed": 700
            }
        },
        "nodeStructure": {
            "text": {name: "5"},
            "children": [
                {
                    "text": {name: "4"},
                    "children": [
                        {
                            "text": {name: "2"},
							"children": [
							{},
							{
								"text": {name: "3"},
								"children": [
								{},
								{}
								]
							}
							]
                        },
						{}
                    ]
                },
                {
                    "text": {name: "9"},
                    "children": [
                        {
                            "text": {name: "7"},
							"children": [
							{
								"text": {name: "6"},
								"children": [
								{},
								{}
								]
							},
							{}
							]
						},
						{
							"text": {name: "11"},
							"children": [
							{
								"text": {name: "10"},
								"children": [
								{},
								{}
								]
							},
							{
								"text": {name: "12"},
								"children": [
								{},
								{}
								]
							}
							]
						}
                    ]
                }
            ]
        }
    };