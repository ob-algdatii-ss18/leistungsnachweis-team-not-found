
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
            "text": {name: "5", balance: "0"},
            "children": [
                {
                    "text": {name: "4", balance: "-2"},
                    "children": [
                        {
                            "text": {name: "2", balance: "1"},
							"children": [
							{},
							{
								"text": {name: "3", balance: "0"},
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
                    "text": {name: "9", balance: "0"},
                    "children": [
                        {
                            "text": {name: "7", balance: "-1"},
							"children": [
							{
								"text": {name: "6", balance: "0"},
								"children": [
								{},
								{}
								]
							},
							{}
							]
						},
						{
							"text": {name: "11", balance: "0"},
							"children": [
							{
								"text": {name: "10", balance: "0"},
								"children": [
								{},
								{}
								]
							},
							{
								"text": {name: "12", balance: "0"},
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