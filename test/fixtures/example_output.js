// This file is generated automatically.
// See update_example_output.js

module.exports = {
  "ll0-lr0-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "A",
      "B",
      "C"
    ],
    "grammar.terminals": [
      "b",
      "i",
      "r",
      "d"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "b",
        "i",
        "r",
        "d"
      ],
      "nonterminalOrder": [
        "S",
        "A",
        "B",
        "C"
      ],
      "productionOrder": [
        "S",
        "A",
        "B",
        "C"
      ],
      "nonterminals": [
        "S",
        "A",
        "B",
        "C"
      ],
      "terminals": [
        "b",
        "i",
        "r",
        "d"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "b",
        "A",
        "i",
        "B"
      ],
      [
        "A"
      ],
      [
        "B",
        "r",
        "C"
      ],
      [
        "C",
        "d"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "A"
    ],
    "grammar.first": [
      [
        "S",
        "b"
      ],
      [
        "B",
        "r"
      ],
      [
        "C",
        "d"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "A",
        "i"
      ],
      [
        "B",
        "Grammar.END"
      ],
      [
        "C",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S",
      "B",
      "C"
    ],
    "grammar.sentences": [
      [
        "b",
        "i",
        "r",
        "d"
      ]
    ],
    "grammar.symbols": [
      "S",
      "b",
      "A",
      "i",
      "B",
      "r",
      "C",
      "d"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "b": [
          0
        ],
        "i": [],
        "r": [],
        "d": [],
        "Grammar.END": []
      },
      "A": {
        "b": [],
        "i": [
          1
        ],
        "r": [],
        "d": [],
        "Grammar.END": []
      },
      "B": {
        "b": [],
        "i": [],
        "r": [
          2
        ],
        "d": [],
        "Grammar.END": []
      },
      "C": {
        "b": [],
        "i": [],
        "r": [],
        "d": [
          3
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "b": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "A": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {
          "i": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "B": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "C": 7,
          "d": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "b": 2
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "A": 3
        },
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "i": 4
        },
        "reduce": []
      },
      {
        "shift": {
          "B": 5,
          "r": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "C": 7,
          "d": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "b": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "A": {
          "shift": 3
        },
        "i": {
          "reduce": [
            1
          ]
        }
      },
      {
        "i": {
          "shift": 4
        }
      },
      {
        "B": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "C": {
          "shift": 7
        },
        "d": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "b": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "i"
            ]
          }
        ],
        "transitions": {
          "A": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "i": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "B": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 7,
          "d": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "b": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "A": {
          "shift": 3
        },
        "i": {
          "reduce": [
            1
          ]
        }
      },
      {
        "i": {
          "shift": 4
        }
      },
      {
        "B": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "C": {
          "shift": 7
        },
        "d": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "b": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "i"
            ]
          }
        ],
        "transitions": {
          "A": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "i": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "B": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 7,
          "d": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "b": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "A": {
          "shift": 3
        },
        "i": {
          "reduce": [
            1
          ]
        }
      },
      {
        "i": {
          "shift": 4
        }
      },
      {
        "B": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "C": {
          "shift": 7
        },
        "d": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "b",
              "i",
              "B"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "b",
              "A",
              "i",
              "r",
              "C"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "B",
              "r",
              "d"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "b",
              "i",
              "B"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "b",
              "A",
              "i",
              "r",
              "C"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "B",
              "r",
              "d"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      }
    ]
  },
  "ll0-lr0-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "A",
      "B",
      "C"
    ],
    "grammar.terminals": [
      "a",
      "b",
      "x",
      "z"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "a",
        "b",
        "x",
        "z"
      ],
      "nonterminalOrder": [
        "A",
        "B",
        "C"
      ],
      "productionOrder": [
        "A",
        "B",
        "C"
      ],
      "nonterminals": [
        "A",
        "B",
        "C"
      ],
      "terminals": [
        "a",
        "b",
        "x",
        "z"
      ]
    },
    "grammar.start": "A",
    "grammar.productions": [
      [
        "A",
        "a",
        "b",
        "B",
        "C"
      ],
      [
        "B",
        "C",
        "x"
      ],
      [
        "C",
        "z"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "A",
        "a"
      ],
      [
        "C",
        "z"
      ],
      [
        "B",
        "z"
      ]
    ],
    "grammar.follow": [
      [
        "A",
        "Grammar.END"
      ],
      [
        "B",
        "z"
      ],
      [
        "C",
        "x"
      ],
      [
        "C",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "A",
      "C"
    ],
    "grammar.sentences": [
      [
        "a",
        "b",
        "z",
        "x",
        "z"
      ]
    ],
    "grammar.symbols": [
      "A",
      "a",
      "b",
      "B",
      "C",
      "x",
      "z"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "A": {
        "a": [
          0
        ],
        "b": [],
        "x": [],
        "z": [],
        "Grammar.END": []
      },
      "B": {
        "a": [],
        "b": [],
        "x": [],
        "z": [
          1
        ],
        "Grammar.END": []
      },
      "C": {
        "a": [],
        "b": [],
        "x": [],
        "z": [
          2
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          }
        ],
        "transitions": {
          "A": 1,
          "a": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "b": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "B": 4,
          "C": 5,
          "z": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "C": 7,
          "z": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "x": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "A": 1,
          "a": 2
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "b": 3
        },
        "reduce": []
      },
      {
        "shift": {
          "B": 4,
          "C": 5,
          "z": 6
        },
        "reduce": []
      },
      {
        "shift": {
          "C": 7,
          "z": 6
        },
        "reduce": []
      },
      {
        "shift": {
          "x": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "A": {
          "shift": 1
        },
        "a": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "b": {
          "shift": 3
        }
      },
      {
        "B": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "z": {
          "shift": 6
        }
      },
      {
        "C": {
          "shift": 7
        },
        "z": {
          "shift": 6
        }
      },
      {
        "x": {
          "shift": 8
        }
      },
      {
        "x": {
          "reduce": [
            2
          ]
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "z": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "a": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "z"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {
          "B": 4,
          "C": 5,
          "z": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 7,
          "z": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "transitions": {
          "x": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "A": {
          "shift": 1
        },
        "a": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "b": {
          "shift": 3
        }
      },
      {
        "B": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "z": {
          "shift": 6
        }
      },
      {
        "C": {
          "shift": 7
        },
        "z": {
          "shift": 8
        }
      },
      {
        "x": {
          "shift": 9
        }
      },
      {
        "x": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "z": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "a": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "z"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {
          "B": 4,
          "C": 5,
          "z": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 7,
          "z": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "transitions": {
          "x": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "x"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "x"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "z"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "A": {
          "shift": 1
        },
        "a": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "b": {
          "shift": 3
        }
      },
      {
        "B": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "z": {
          "shift": 6
        }
      },
      {
        "C": {
          "shift": 7
        },
        "z": {
          "shift": 6
        }
      },
      {
        "x": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "x": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "z": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "a",
              "b",
              "C",
              "x",
              "C"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "a",
              "b",
              "B",
              "z"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "B",
              "z",
              "x"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "a",
              "b",
              "C",
              "x",
              "C"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "a",
              "b",
              "B",
              "z"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "B",
              "z",
              "x"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ]
  },
  "ll0-lr0-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "Owns",
      "Object",
      "Animal",
      "Adverb",
      "Adjective",
      "Noun"
    ],
    "grammar.terminals": [
      "mary",
      "had",
      "a",
      "little",
      "lamb"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "mary",
        "had",
        "a",
        "little",
        "lamb"
      ],
      "nonterminalOrder": [
        "S",
        "Owns",
        "Object",
        "Animal",
        "Adverb",
        "Adjective",
        "Noun"
      ],
      "productionOrder": [
        "S",
        "Owns",
        "Object",
        "Animal",
        "Adverb",
        "Adjective",
        "Noun"
      ],
      "nonterminals": [
        "S",
        "Owns",
        "Object",
        "Animal",
        "Adverb",
        "Adjective",
        "Noun"
      ],
      "terminals": [
        "mary",
        "had",
        "a",
        "little",
        "lamb"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "mary",
        "Owns",
        "Object"
      ],
      [
        "Owns",
        "had"
      ],
      [
        "Object",
        "a",
        "Animal"
      ],
      [
        "Animal",
        "Adverb",
        "Adjective",
        "Noun"
      ],
      [
        "Adverb"
      ],
      [
        "Adjective",
        "little"
      ],
      [
        "Noun",
        "lamb"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "Adverb"
    ],
    "grammar.first": [
      [
        "S",
        "mary"
      ],
      [
        "Owns",
        "had"
      ],
      [
        "Object",
        "a"
      ],
      [
        "Adjective",
        "little"
      ],
      [
        "Noun",
        "lamb"
      ],
      [
        "Animal",
        "little"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "Owns",
        "a"
      ],
      [
        "Adverb",
        "little"
      ],
      [
        "Adjective",
        "lamb"
      ],
      [
        "Object",
        "Grammar.END"
      ],
      [
        "Animal",
        "Grammar.END"
      ],
      [
        "Noun",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S",
      "Object",
      "Animal",
      "Noun"
    ],
    "grammar.sentences": [
      [
        "mary",
        "had",
        "a",
        "little",
        "lamb"
      ]
    ],
    "grammar.symbols": [
      "S",
      "mary",
      "Owns",
      "Object",
      "had",
      "a",
      "Animal",
      "Adverb",
      "Adjective",
      "Noun",
      "little",
      "lamb"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "mary": [
          0
        ],
        "had": [],
        "a": [],
        "little": [],
        "lamb": [],
        "Grammar.END": []
      },
      "Owns": {
        "mary": [],
        "had": [
          1
        ],
        "a": [],
        "little": [],
        "lamb": [],
        "Grammar.END": []
      },
      "Object": {
        "mary": [],
        "had": [],
        "a": [
          2
        ],
        "little": [],
        "lamb": [],
        "Grammar.END": []
      },
      "Animal": {
        "mary": [],
        "had": [],
        "a": [],
        "little": [
          3
        ],
        "lamb": [],
        "Grammar.END": []
      },
      "Adverb": {
        "mary": [],
        "had": [],
        "a": [],
        "little": [
          4
        ],
        "lamb": [],
        "Grammar.END": []
      },
      "Adjective": {
        "mary": [],
        "had": [],
        "a": [],
        "little": [
          5
        ],
        "lamb": [],
        "Grammar.END": []
      },
      "Noun": {
        "mary": [],
        "had": [],
        "a": [],
        "little": [],
        "lamb": [
          6
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "mary": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "Owns": 3,
          "had": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "Object": 5,
          "a": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "Animal": 7,
          "Adverb": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 5,
            "index": 0
          }
        ],
        "transitions": {
          "Adjective": 9,
          "little": 10
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          },
          {
            "production": 6,
            "index": 0
          }
        ],
        "transitions": {
          "Noun": 11,
          "lamb": 12
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "mary": 2
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "Owns": 3,
          "had": 4
        },
        "reduce": []
      },
      {
        "shift": {
          "Object": 5,
          "a": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "Animal": 7,
          "Adverb": 8
        },
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "Adjective": 9,
          "little": 10
        },
        "reduce": []
      },
      {
        "shift": {
          "Noun": 11,
          "lamb": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          6
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "mary": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Owns": {
          "shift": 3
        },
        "had": {
          "shift": 4
        }
      },
      {
        "Object": {
          "shift": 5
        },
        "a": {
          "shift": 6
        }
      },
      {
        "a": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Animal": {
          "shift": 7
        },
        "Adverb": {
          "shift": 8
        },
        "little": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Adjective": {
          "shift": 9
        },
        "little": {
          "shift": 10
        }
      },
      {
        "Noun": {
          "shift": 11
        },
        "lamb": {
          "shift": 12
        }
      },
      {
        "lamb": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "mary": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "transitions": {
          "Owns": 3,
          "had": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Object": 5,
          "a": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "little"
            ]
          }
        ],
        "transitions": {
          "Animal": 7,
          "Adverb": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "lamb"
            ]
          }
        ],
        "transitions": {
          "Adjective": 9,
          "little": 10
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Noun": 11,
          "lamb": 12
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "lamb"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "lamb"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "mary": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Owns": {
          "shift": 3
        },
        "had": {
          "shift": 4
        }
      },
      {
        "Object": {
          "shift": 5
        },
        "a": {
          "shift": 6
        }
      },
      {
        "a": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Animal": {
          "shift": 7
        },
        "Adverb": {
          "shift": 8
        },
        "little": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Adjective": {
          "shift": 9
        },
        "little": {
          "shift": 10
        }
      },
      {
        "Noun": {
          "shift": 11
        },
        "lamb": {
          "shift": 12
        }
      },
      {
        "lamb": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "mary": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "transitions": {
          "Owns": 3,
          "had": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Object": 5,
          "a": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "little"
            ]
          }
        ],
        "transitions": {
          "Animal": 7,
          "Adverb": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "lamb"
            ]
          }
        ],
        "transitions": {
          "Adjective": 9,
          "little": 10
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Noun": 11,
          "lamb": 12
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "lamb"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "lamb"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "mary": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Owns": {
          "shift": 3
        },
        "had": {
          "shift": 4
        }
      },
      {
        "Object": {
          "shift": 5
        },
        "a": {
          "shift": 6
        }
      },
      {
        "a": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Animal": {
          "shift": 7
        },
        "Adverb": {
          "shift": 8
        },
        "little": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Adjective": {
          "shift": 9
        },
        "little": {
          "shift": 10
        }
      },
      {
        "Noun": {
          "shift": 11
        },
        "lamb": {
          "shift": 12
        }
      },
      {
        "lamb": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "mary",
              "had",
              "Object"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "mary",
              "Owns",
              "a",
              "Animal"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Object",
              "a",
              "Adverb",
              "Adjective",
              "Noun"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Animal",
              "Adjective",
              "Noun"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Animal",
              "Adverb",
              "little",
              "Noun"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Animal",
              "Adverb",
              "Adjective",
              "lamb"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "mary",
              "had",
              "Object"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "mary",
              "Owns",
              "a",
              "Animal"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Object",
              "a",
              "Adverb",
              "Adjective",
              "Noun"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Animal",
              "Adjective",
              "Noun"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Animal",
              "Adverb",
              "little",
              "Noun"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Animal",
              "Adverb",
              "Adjective",
              "lamb"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ]
  },
  "ll1-lalr1-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "S'",
      "V",
      "E"
    ],
    "grammar.terminals": [
      "id",
      "assign",
      "num"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "id",
        "assign",
        "num"
      ],
      "nonterminalOrder": [
        "S",
        "S'",
        "V",
        "E"
      ],
      "productionOrder": [
        "S",
        "S'",
        "V",
        "E"
      ],
      "nonterminals": [
        "S",
        "S'",
        "V",
        "E"
      ],
      "terminals": [
        "id",
        "assign",
        "num"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "id",
        "S'"
      ],
      [
        "S'",
        "V",
        "assign",
        "E"
      ],
      [
        "S'"
      ],
      [
        "V"
      ],
      [
        "E",
        "id",
        "V"
      ],
      [
        "E",
        "num"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "S'",
      "V"
    ],
    "grammar.first": [
      [
        "S",
        "id"
      ],
      [
        "S'",
        "assign"
      ],
      [
        "E",
        "id"
      ],
      [
        "E",
        "num"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "V",
        "assign"
      ],
      [
        "V",
        "Grammar.END"
      ],
      [
        "S'",
        "Grammar.END"
      ],
      [
        "E",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S",
      "V",
      "S'",
      "E"
    ],
    "grammar.sentences": [
      [
        "id"
      ],
      [
        "id",
        "assign",
        "num"
      ],
      [
        "id",
        "assign",
        "id"
      ]
    ],
    "grammar.symbols": [
      "S",
      "id",
      "S'",
      "V",
      "assign",
      "E",
      "num"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "id": [
          0
        ],
        "assign": [],
        "num": [],
        "Grammar.END": []
      },
      "S'": {
        "id": [],
        "assign": [
          1
        ],
        "num": [],
        "Grammar.END": [
          2
        ]
      },
      "V": {
        "id": [],
        "assign": [
          3
        ],
        "num": [],
        "Grammar.END": [
          3
        ]
      },
      "E": {
        "id": [
          4
        ],
        "assign": [],
        "num": [
          5
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "id": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "S'": 3,
          "V": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "assign": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          }
        ],
        "transitions": {
          "E": 6,
          "id": 7,
          "num": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "V": 9
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "id": 2
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "S'": 3,
          "V": 4
        },
        "reduce": [
          2,
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "assign": 5
        },
        "reduce": []
      },
      {
        "shift": {
          "E": 6,
          "id": 7,
          "num": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "V": 9
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "id": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "S'": {
          "shift": 3
        },
        "V": {
          "shift": 4
        },
        "Grammar.END": {
          "reduce": [
            2,
            3
          ]
        },
        "assign": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "assign": {
          "shift": 5
        }
      },
      {
        "E": {
          "shift": 6
        },
        "id": {
          "shift": 7
        },
        "num": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "V": {
          "shift": 9
        },
        "assign": {
          "reduce": [
            3
          ]
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "id": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "assign"
            ]
          }
        ],
        "transitions": {
          "S'": 3,
          "V": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "assign": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 6,
          "id": 7,
          "num": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "V": 9
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "id": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "S'": {
          "shift": 3
        },
        "V": {
          "shift": 4
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "assign": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "assign": {
          "shift": 5
        }
      },
      {
        "E": {
          "shift": 6
        },
        "id": {
          "shift": 7
        },
        "num": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "V": {
          "shift": 9
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "id": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "assign"
            ]
          }
        ],
        "transitions": {
          "S'": 3,
          "V": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "assign": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 6,
          "id": 7,
          "num": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "V": 9
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "id": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "S'": {
          "shift": 3
        },
        "V": {
          "shift": 4
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "assign": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "assign": {
          "shift": 5
        }
      },
      {
        "E": {
          "shift": 6
        },
        "id": {
          "shift": 7
        },
        "num": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "V": {
          "shift": 9
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "id",
              "V",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "id"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S'",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S'",
              "V",
              "assign",
              "id",
              "V"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S'",
              "V",
              "assign",
              "num"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "E",
              "id"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 1,
        "symbol": 0,
        "changes": [
          {
            "index": 1,
            "operation": "delete"
          },
          {
            "index": 1,
            "operation": "delete"
          },
          {
            "production": [
              "S'",
              "S'2"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S'"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "S'2",
              "V",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "id",
              "V",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "id"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S'",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S'",
              "V",
              "assign",
              "id",
              "V"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S'",
              "V",
              "assign",
              "num"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "E",
              "id"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 1,
        "symbol": 0,
        "changes": [
          {
            "index": 1,
            "operation": "delete"
          },
          {
            "index": 1,
            "operation": "delete"
          },
          {
            "production": [
              "S'",
              "S'2"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S'"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "S'2",
              "V",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ]
  },
  "ll1-lalr1-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "L",
      "V",
      "Var"
    ],
    "grammar.terminals": [
      "+",
      "num",
      "(",
      ")"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "+",
        "num",
        "(",
        ")"
      ],
      "nonterminalOrder": [
        "L",
        "V",
        "Var"
      ],
      "productionOrder": [
        "L",
        "V",
        "Var"
      ],
      "nonterminals": [
        "L",
        "V",
        "Var"
      ],
      "terminals": [
        "+",
        "num",
        "(",
        ")"
      ]
    },
    "grammar.start": "L",
    "grammar.productions": [
      [
        "L",
        "V",
        "+",
        "L"
      ],
      [
        "L",
        "num"
      ],
      [
        "V",
        "Var",
        "(",
        "Var",
        "+",
        "V",
        ")"
      ],
      [
        "V"
      ],
      [
        "Var"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "V",
      "Var"
    ],
    "grammar.first": [
      [
        "L",
        "+"
      ],
      [
        "L",
        "num"
      ],
      [
        "L",
        "("
      ],
      [
        "V",
        "("
      ]
    ],
    "grammar.follow": [
      [
        "L",
        "Grammar.END"
      ],
      [
        "V",
        "+"
      ],
      [
        "V",
        ")"
      ],
      [
        "Var",
        "("
      ],
      [
        "Var",
        "+"
      ]
    ],
    "grammar.endable": [
      "L"
    ],
    "grammar.sentences": [
      [
        "num"
      ],
      [
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        ")",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        ")",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "(",
        "+",
        ")",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "+",
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "+",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        ")",
        "+",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        "+",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "(",
        "+",
        ")",
        "+",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        "+",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        ")",
        "+",
        "+",
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "+",
        "(",
        "+",
        ")",
        "+",
        "(",
        "+",
        ")",
        "+",
        "num"
      ],
      [
        "+",
        "+",
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        "+",
        "num"
      ],
      [
        "(",
        "+",
        "(",
        "+",
        "(",
        "+",
        ")",
        ")",
        ")",
        "+",
        "num"
      ]
    ],
    "grammar.symbols": [
      "L",
      "V",
      "+",
      "num",
      "Var",
      "(",
      ")"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "L": {
        "+": [
          0
        ],
        "num": [
          1
        ],
        "(": [
          0
        ],
        ")": [],
        "Grammar.END": []
      },
      "V": {
        "+": [
          3
        ],
        "num": [],
        "(": [
          2
        ],
        ")": [
          3
        ],
        "Grammar.END": []
      },
      "Var": {
        "+": [
          4
        ],
        "num": [],
        "(": [
          4
        ],
        ")": [],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "L": 1,
          "V": 2,
          "num": 3,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "+": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {
          "(": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "L": 7,
          "V": 2,
          "num": 3,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "Var": 8
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3
          }
        ],
        "transitions": {
          "+": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 4
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "V": 10,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 5
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 5
          }
        ],
        "transitions": {
          ")": 11
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 6
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 6
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "L": 1,
          "V": 2,
          "num": 3,
          "Var": 4
        },
        "reduce": [
          3,
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "+": 5
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "(": 6
        },
        "reduce": []
      },
      {
        "shift": {
          "L": 7,
          "V": 2,
          "num": 3,
          "Var": 4
        },
        "reduce": [
          3,
          4
        ]
      },
      {
        "shift": {
          "Var": 8
        },
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "+": 9
        },
        "reduce": []
      },
      {
        "shift": {
          "V": 10,
          "Var": 4
        },
        "reduce": [
          3,
          4
        ]
      },
      {
        "shift": {
          ")": 11
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "L": {
          "shift": 1
        },
        "V": {
          "shift": 2
        },
        "num": {
          "shift": 3
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3,
            4
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "+": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "(": {
          "shift": 6
        }
      },
      {
        "L": {
          "shift": 7
        },
        "V": {
          "shift": 2
        },
        "num": {
          "shift": 3
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3,
            4
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Var": {
          "shift": 8
        },
        "(": {
          "reduce": [
            4
          ]
        },
        "+": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "+": {
          "shift": 9
        }
      },
      {
        "V": {
          "shift": 10
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3,
            4
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 11
        }
      },
      {
        "+": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "L": 1,
          "V": 2,
          "num": 3,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "+": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {
          "(": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          }
        ],
        "transitions": {
          "L": 7,
          "V": 2,
          "num": 3,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {
          "Var": 8
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {
          "+": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 4,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 4,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          }
        ],
        "transitions": {
          "V": 10,
          "Var": 11
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 5,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 5,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {
          ")": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "(": 13
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 6,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 6,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {
          "Var": 14
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "+": 15
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 4,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 4,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          }
        ],
        "transitions": {
          "V": 16,
          "Var": 11
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 5,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 5,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          ")": 17
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 6,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 6,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "L": {
          "shift": 1
        },
        "V": {
          "shift": 2
        },
        "num": {
          "shift": 3
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "+": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "(": {
          "shift": 6
        }
      },
      {
        "L": {
          "shift": 7
        },
        "V": {
          "shift": 2
        },
        "num": {
          "shift": 3
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Var": {
          "shift": 8
        },
        "+": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "+": {
          "shift": 9
        }
      },
      {
        "V": {
          "shift": 10
        },
        "Var": {
          "shift": 11
        },
        ")": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 12
        }
      },
      {
        "(": {
          "shift": 13
        }
      },
      {
        "+": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Var": {
          "shift": 14
        },
        "+": {
          "reduce": [
            4
          ]
        }
      },
      {
        "+": {
          "shift": 15
        }
      },
      {
        "V": {
          "shift": 16
        },
        "Var": {
          "shift": 11
        },
        ")": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 17
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "L": 1,
          "V": 2,
          "num": 3,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "+": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "transitions": {
          "(": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          }
        ],
        "transitions": {
          "L": 7,
          "V": 2,
          "num": 3,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")",
              "+"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          }
        ],
        "transitions": {
          "Var": 8
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "transitions": {
          "+": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 4,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 4,
            "lookaheads": [
              ")",
              "+"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "("
            ]
          }
        ],
        "transitions": {
          "V": 10,
          "Var": 4
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 5,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 5,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "transitions": {
          ")": 11
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 6,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 6,
            "lookaheads": [
              ")",
              "+"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "L": {
          "shift": 1
        },
        "V": {
          "shift": 2
        },
        "num": {
          "shift": 3
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "+": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "(": {
          "shift": 6
        }
      },
      {
        "L": {
          "shift": 7
        },
        "V": {
          "shift": 2
        },
        "num": {
          "shift": 3
        },
        "Var": {
          "shift": 4
        },
        "+": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Var": {
          "shift": 8
        },
        "+": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "+": {
          "shift": 9
        }
      },
      {
        "V": {
          "shift": 10
        },
        "Var": {
          "shift": 4
        },
        ")": {
          "reduce": [
            3
          ]
        },
        "(": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 11
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        },
        "+": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "L",
              "Var",
              "(",
              "Var",
              "+",
              "V",
              ")",
              "+",
              "L"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "L",
              "+",
              "L"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "L",
              "V",
              "+",
              "V",
              "+",
              "L"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "L",
              "V",
              "+",
              "num"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "V",
              "(",
              "Var",
              "+",
              "V",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "V",
              "Var",
              "(",
              "+",
              "V",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 5,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "V",
              "Var",
              "(",
              "Var",
              "+",
              "Var",
              "(",
              "Var",
              "+",
              "V",
              ")",
              ")"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "V",
              "Var",
              "(",
              "Var",
              "+",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "V",
              "V2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "V"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "V2",
              "Var",
              "(",
              "Var",
              "+",
              "V",
              ")"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "L",
              "Var",
              "(",
              "Var",
              "+",
              "V",
              ")",
              "+",
              "L"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "L",
              "+",
              "L"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "L",
              "V",
              "+",
              "V",
              "+",
              "L"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "L",
              "V",
              "+",
              "num"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "V",
              "(",
              "Var",
              "+",
              "V",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "V",
              "Var",
              "(",
              "+",
              "V",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 5,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "V",
              "Var",
              "(",
              "Var",
              "+",
              "Var",
              "(",
              "Var",
              "+",
              "V",
              ")",
              ")"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "V",
              "Var",
              "(",
              "Var",
              "+",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "V",
              "V2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "V"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "V2",
              "Var",
              "(",
              "Var",
              "+",
              "V",
              ")"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ]
  },
  "ll1-lalr1-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "P",
      "M",
      "StarM",
      "Q"
    ],
    "grammar.terminals": [
      "*",
      "(*",
      "*)",
      "(",
      ")",
      "o"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "*",
        "(*",
        "*)",
        "(",
        ")",
        "o"
      ],
      "nonterminalOrder": [
        "P",
        "M",
        "Q",
        "StarM"
      ],
      "productionOrder": [
        "P",
        "M",
        "StarM",
        "Q"
      ],
      "nonterminals": [
        "P",
        "M",
        "StarM",
        "Q"
      ],
      "terminals": [
        "*",
        "(*",
        "*)",
        "(",
        ")",
        "o"
      ]
    },
    "grammar.start": "P",
    "grammar.productions": [
      [
        "P",
        "M",
        "*"
      ],
      [
        "P"
      ],
      [
        "M",
        "Q",
        "StarM"
      ],
      [
        "M"
      ],
      [
        "StarM",
        "(*",
        "M",
        "*)"
      ],
      [
        "StarM",
        "(",
        "Q",
        "*",
        ")"
      ],
      [
        "Q",
        "o"
      ],
      [
        "Q"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "P",
      "M",
      "Q"
    ],
    "grammar.first": [
      [
        "P",
        "*"
      ],
      [
        "P",
        "o"
      ],
      [
        "P",
        "(*"
      ],
      [
        "P",
        "("
      ],
      [
        "StarM",
        "(*"
      ],
      [
        "StarM",
        "("
      ],
      [
        "Q",
        "o"
      ],
      [
        "M",
        "o"
      ],
      [
        "M",
        "(*"
      ],
      [
        "M",
        "("
      ]
    ],
    "grammar.follow": [
      [
        "P",
        "Grammar.END"
      ],
      [
        "M",
        "*"
      ],
      [
        "M",
        "*)"
      ],
      [
        "Q",
        "(*"
      ],
      [
        "Q",
        "("
      ],
      [
        "Q",
        "*"
      ],
      [
        "StarM",
        "*"
      ],
      [
        "StarM",
        "*)"
      ]
    ],
    "grammar.endable": [
      "P"
    ],
    "grammar.sentences": [
      [],
      [
        "*"
      ],
      [
        "(*",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "*)",
        "*"
      ],
      [
        "(",
        "*",
        ")",
        "*"
      ],
      [
        "o",
        "(",
        "*",
        ")",
        "*"
      ],
      [
        "(",
        "o",
        "*",
        ")",
        "*"
      ],
      [
        "(*",
        "(*",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(",
        "o",
        "*",
        ")",
        "*"
      ],
      [
        "o",
        "(*",
        "(*",
        "*)",
        "*)",
        "*"
      ],
      [
        "(*",
        "o",
        "(*",
        "*)",
        "*)",
        "*"
      ],
      [
        "(*",
        "(",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "(",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "(*",
        "o",
        "(",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "(*",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "(*",
        "o",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "(*",
        "(*",
        "*)",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "(*",
        "*)",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "(*",
        "o",
        "(*",
        "*)",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "o",
        "(*",
        "*)",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "(",
        "*",
        ")",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "(*",
        "o",
        "(",
        "*",
        ")",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "o",
        "(",
        "*",
        ")",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "(*",
        "o",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*)",
        "*"
      ],
      [
        "o",
        "(*",
        "o",
        "(*",
        "o",
        "(",
        "o",
        "*",
        ")",
        "*)",
        "*)",
        "*"
      ]
    ],
    "grammar.symbols": [
      "P",
      "M",
      "*",
      "Q",
      "StarM",
      "(*",
      "*)",
      "(",
      ")",
      "o"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "P": {
        "*": [
          0
        ],
        "(*": [
          0
        ],
        "*)": [],
        "(": [
          0
        ],
        ")": [],
        "o": [
          0
        ],
        "Grammar.END": [
          1
        ]
      },
      "M": {
        "*": [
          3
        ],
        "(*": [
          2
        ],
        "*)": [
          3
        ],
        "(": [
          2
        ],
        ")": [],
        "o": [
          2
        ],
        "Grammar.END": []
      },
      "StarM": {
        "*": [],
        "(*": [
          4
        ],
        "*)": [],
        "(": [
          5
        ],
        ")": [],
        "o": [],
        "Grammar.END": []
      },
      "Q": {
        "*": [
          7
        ],
        "(*": [
          7
        ],
        "*)": [],
        "(": [
          7
        ],
        ")": [],
        "o": [
          6
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "P": 1,
          "M": 2,
          "Q": 3,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "*": 5
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          }
        ],
        "transitions": {
          "StarM": 6,
          "(*": 7,
          "(": 8
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "M": 9,
          "Q": 3,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "Q": 10,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {
          "*)": 11
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "transitions": {
          "*": 12
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3
          }
        ],
        "transitions": {
          ")": 13
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 4
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "P": 1,
          "M": 2,
          "Q": 3,
          "o": 4
        },
        "reduce": [
          1,
          3,
          7
        ]
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "*": 5
        },
        "reduce": []
      },
      {
        "shift": {
          "StarM": 6,
          "(*": 7,
          "(": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          6
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "M": 9,
          "Q": 3,
          "o": 4
        },
        "reduce": [
          3,
          7
        ]
      },
      {
        "shift": {
          "Q": 10,
          "o": 4
        },
        "reduce": [
          7
        ]
      },
      {
        "shift": {
          "*)": 11
        },
        "reduce": []
      },
      {
        "shift": {
          "*": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {
          ")": 13
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "P": {
          "shift": 1
        },
        "M": {
          "shift": 2
        },
        "Q": {
          "shift": 3
        },
        "o": {
          "shift": 4
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        },
        "*": {
          "reduce": [
            3,
            7
          ]
        },
        "*)": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "*": {
          "shift": 5
        }
      },
      {
        "StarM": {
          "shift": 6
        },
        "(*": {
          "shift": 7
        },
        "(": {
          "shift": 8
        }
      },
      {
        "(*": {
          "reduce": [
            6
          ]
        },
        "(": {
          "reduce": [
            6
          ]
        },
        "*": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "reduce": [
            2
          ]
        },
        "*)": {
          "reduce": [
            2
          ]
        }
      },
      {
        "M": {
          "shift": 9
        },
        "Q": {
          "shift": 3
        },
        "o": {
          "shift": 4
        },
        "*": {
          "reduce": [
            3,
            7
          ]
        },
        "*)": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Q": {
          "shift": 10
        },
        "o": {
          "shift": 4
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        },
        "*": {
          "reduce": [
            7
          ]
        }
      },
      {
        "*)": {
          "shift": 11
        }
      },
      {
        "*": {
          "shift": 12
        }
      },
      {
        "*": {
          "reduce": [
            4
          ]
        },
        "*)": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 13
        }
      },
      {
        "*": {
          "reduce": [
            5
          ]
        },
        "*)": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "P": 1,
          "M": 2,
          "Q": 3,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*": 5
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "StarM": 6,
          "(*": 7,
          "(": 8
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "(*",
              "("
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "(*",
              "("
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          }
        ],
        "transitions": {
          "M": 9,
          "Q": 10,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "Q": 11,
          "o": 12
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "*)": 13
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {
          "StarM": 14,
          "(*": 15,
          "(": 16
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "*": 17
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          }
        ],
        "transitions": {
          "M": 18,
          "Q": 10,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "Q": 19,
          "o": 12
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          ")": 20
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {
          "*)": 21
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {
          "*": 22
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 4,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 4,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {
          ")": 23
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 4,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 4,
            "lookaheads": [
              "*)"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "P": {
          "shift": 1
        },
        "M": {
          "shift": 2
        },
        "Q": {
          "shift": 3
        },
        "o": {
          "shift": 4
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        },
        "*": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "*": {
          "shift": 5
        }
      },
      {
        "StarM": {
          "shift": 6
        },
        "(*": {
          "shift": 7
        },
        "(": {
          "shift": 8
        }
      },
      {
        "(*": {
          "reduce": [
            6
          ]
        },
        "(": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        "M": {
          "shift": 9
        },
        "Q": {
          "shift": 10
        },
        "o": {
          "shift": 4
        },
        "*)": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Q": {
          "shift": 11
        },
        "o": {
          "shift": 12
        },
        "*": {
          "reduce": [
            7
          ]
        }
      },
      {
        "*)": {
          "shift": 13
        }
      },
      {
        "StarM": {
          "shift": 14
        },
        "(*": {
          "shift": 15
        },
        "(": {
          "shift": 16
        }
      },
      {
        "*": {
          "shift": 17
        }
      },
      {
        "*": {
          "reduce": [
            6
          ]
        }
      },
      {
        "*": {
          "reduce": [
            4
          ]
        }
      },
      {
        "*)": {
          "reduce": [
            2
          ]
        }
      },
      {
        "M": {
          "shift": 18
        },
        "Q": {
          "shift": 10
        },
        "o": {
          "shift": 4
        },
        "*)": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Q": {
          "shift": 19
        },
        "o": {
          "shift": 12
        },
        "*": {
          "reduce": [
            7
          ]
        }
      },
      {
        ")": {
          "shift": 20
        }
      },
      {
        "*)": {
          "shift": 21
        }
      },
      {
        "*": {
          "shift": 22
        }
      },
      {
        "*": {
          "reduce": [
            5
          ]
        }
      },
      {
        "*)": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 23
        }
      },
      {
        "*)": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "P": 1,
          "M": 2,
          "Q": 3,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*": 5
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*)",
              "*"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*)",
              "*"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {
          "StarM": 6,
          "(*": 7,
          "(": 8
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "*",
              "(*",
              "("
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "*",
              "(*",
              "("
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*)"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*)",
              "*"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "(*",
              "("
            ]
          }
        ],
        "transitions": {
          "M": 9,
          "Q": 3,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "*)",
              "*"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "Q": 10,
          "o": 4
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {
          "*)": 11
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {
          "*": 12
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {
          ")": 13
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 4,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 4,
            "lookaheads": [
              "*)",
              "*"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "P": {
          "shift": 1
        },
        "M": {
          "shift": 2
        },
        "Q": {
          "shift": 3
        },
        "o": {
          "shift": 4
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        },
        "*": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "*": {
          "shift": 5
        }
      },
      {
        "StarM": {
          "shift": 6
        },
        "(*": {
          "shift": 7
        },
        "(": {
          "shift": 8
        }
      },
      {
        "*": {
          "reduce": [
            6
          ]
        },
        "(*": {
          "reduce": [
            6
          ]
        },
        "(": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*)": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        "M": {
          "shift": 9
        },
        "Q": {
          "shift": 3
        },
        "o": {
          "shift": 4
        },
        "*)": {
          "reduce": [
            3
          ]
        },
        "(*": {
          "reduce": [
            7
          ]
        },
        "(": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Q": {
          "shift": 10
        },
        "o": {
          "shift": 4
        },
        "*": {
          "reduce": [
            7
          ]
        }
      },
      {
        "*)": {
          "shift": 11
        }
      },
      {
        "*": {
          "shift": 12
        }
      },
      {
        "*)": {
          "reduce": [
            4
          ]
        },
        "*": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "shift": 13
        }
      },
      {
        "*)": {
          "reduce": [
            5
          ]
        },
        "*": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "P",
              "Q",
              "StarM",
              "*"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "P",
              "*"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "M",
              "o",
              "StarM"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "M",
              "StarM"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "M",
              "Q",
              "(*",
              "M",
              "*)"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "M",
              "Q",
              "(",
              "Q",
              "*",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "StarM",
              "(*",
              "Q",
              "StarM",
              "*)"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "StarM",
              "(*",
              "*)"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "StarM",
              "(",
              "o",
              "*",
              ")"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "StarM",
              "(",
              "*",
              ")"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 0,
        "symbol": 0,
        "changes": [
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "production": [
              "P",
              "P2"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "P"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "P2",
              "M",
              "*"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "M",
              "M2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "M"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "M2",
              "Q",
              "StarM"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 6,
        "symbol": 0,
        "changes": [
          {
            "index": 6,
            "operation": "delete"
          },
          {
            "index": 6,
            "operation": "delete"
          },
          {
            "production": [
              "Q",
              "Q2"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "Q"
            ],
            "operation": "insert",
            "index": 7
          },
          {
            "production": [
              "Q2",
              "o"
            ],
            "operation": "insert",
            "index": 8
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "P",
              "Q",
              "StarM",
              "*"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "P",
              "*"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "M",
              "o",
              "StarM"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "M",
              "StarM"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "M",
              "Q",
              "(*",
              "M",
              "*)"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "M",
              "Q",
              "(",
              "Q",
              "*",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "StarM",
              "(*",
              "Q",
              "StarM",
              "*)"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "StarM",
              "(*",
              "*)"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "StarM",
              "(",
              "o",
              "*",
              ")"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "StarM",
              "(",
              "*",
              ")"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 0,
        "symbol": 0,
        "changes": [
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "production": [
              "P",
              "P2"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "P"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "P2",
              "M",
              "*"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "M",
              "M2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "M"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "M2",
              "Q",
              "StarM"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 6,
        "symbol": 0,
        "changes": [
          {
            "index": 6,
            "operation": "delete"
          },
          {
            "index": 6,
            "operation": "delete"
          },
          {
            "production": [
              "Q",
              "Q2"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "Q"
            ],
            "operation": "insert",
            "index": 7
          },
          {
            "production": [
              "Q2",
              "o"
            ],
            "operation": "insert",
            "index": 8
          }
        ]
      }
    ]
  },
  "ll1-lr0-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "A",
      "B",
      "C"
    ],
    "grammar.terminals": [
      "x",
      "y",
      "r"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "x",
        "y",
        "r"
      ],
      "nonterminalOrder": [
        "A",
        "B",
        "C"
      ],
      "productionOrder": [
        "A",
        "B",
        "C"
      ],
      "nonterminals": [
        "A",
        "B",
        "C"
      ],
      "terminals": [
        "x",
        "y",
        "r"
      ]
    },
    "grammar.start": "A",
    "grammar.productions": [
      [
        "A",
        "B"
      ],
      [
        "A",
        "x",
        "C"
      ],
      [
        "A",
        "y",
        "A"
      ],
      [
        "B",
        "C",
        "B"
      ],
      [
        "C",
        "r"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [
      "B"
    ],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "A",
        "x"
      ],
      [
        "A",
        "y"
      ],
      [
        "A",
        "r"
      ],
      [
        "C",
        "r"
      ],
      [
        "B",
        "r"
      ]
    ],
    "grammar.follow": [
      [
        "A",
        "Grammar.END"
      ],
      [
        "C",
        "r"
      ],
      [
        "C",
        "Grammar.END"
      ],
      [
        "B",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "A",
      "C",
      "B"
    ],
    "grammar.sentences": [
      [
        "x",
        "r"
      ],
      [
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ],
      [
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "y",
        "x",
        "r"
      ]
    ],
    "grammar.symbols": [
      "A",
      "B",
      "x",
      "C",
      "y",
      "r"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "A": {
        "x": [
          1
        ],
        "y": [
          2
        ],
        "r": [
          0
        ],
        "Grammar.END": []
      },
      "B": {
        "x": [],
        "y": [],
        "r": [
          3
        ],
        "Grammar.END": []
      },
      "C": {
        "x": [],
        "y": [],
        "r": [
          4
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "A": 1,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "C": 7,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "A": 8,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "B": 9,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "A": 1,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "C": 7,
          "r": 6
        },
        "reduce": []
      },
      {
        "shift": {
          "A": 8,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        },
        "reduce": []
      },
      {
        "shift": {
          "B": 9,
          "C": 5,
          "r": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "A": {
          "shift": 1
        },
        "B": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "y": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "C": {
          "shift": 7
        },
        "r": {
          "shift": 6
        }
      },
      {
        "A": {
          "shift": 8
        },
        "B": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "y": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "B": {
          "shift": 9
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "r": {
          "reduce": [
            4
          ]
        },
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "r"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 7,
          "r": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "r"
            ]
          }
        ],
        "transitions": {
          "A": 9,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "r"
            ]
          }
        ],
        "transitions": {
          "B": 10,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "r"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "r"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "A": {
          "shift": 1
        },
        "B": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "y": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "C": {
          "shift": 7
        },
        "r": {
          "shift": 8
        }
      },
      {
        "A": {
          "shift": 9
        },
        "B": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "y": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "B": {
          "shift": 10
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "r": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "r"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 7,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "r"
            ]
          }
        ],
        "transitions": {
          "A": 8,
          "B": 2,
          "x": 3,
          "y": 4,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "r"
            ]
          }
        ],
        "transitions": {
          "B": 9,
          "C": 5,
          "r": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "r"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "r"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "A": {
          "shift": 1
        },
        "B": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "y": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "C": {
          "shift": 7
        },
        "r": {
          "shift": 6
        }
      },
      {
        "A": {
          "shift": 8
        },
        "B": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "y": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "B": {
          "shift": 9
        },
        "C": {
          "shift": 5
        },
        "r": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        },
        "r": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "C",
              "B"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "A",
              "x",
              "r"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "y",
              "B"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "A",
              "y",
              "x",
              "C"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "A",
              "y",
              "y",
              "A"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "B",
              "r",
              "B"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "B",
              "C",
              "C",
              "B"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "C",
              "B"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "A",
              "x",
              "r"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "y",
              "B"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "A",
              "y",
              "x",
              "C"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "A",
              "y",
              "y",
              "A"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "B",
              "r",
              "B"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "B",
              "C",
              "C",
              "B"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ]
  },
  "ll1-lr0-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "A",
      "B",
      "C"
    ],
    "grammar.terminals": [
      "y",
      "x",
      "z",
      "u",
      "s"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "y",
        "x",
        "z",
        "u",
        "s"
      ],
      "nonterminalOrder": [
        "A",
        "B",
        "C"
      ],
      "productionOrder": [
        "A",
        "B",
        "C"
      ],
      "nonterminals": [
        "A",
        "B",
        "C"
      ],
      "terminals": [
        "y",
        "x",
        "z",
        "u",
        "s"
      ]
    },
    "grammar.start": "A",
    "grammar.productions": [
      [
        "A",
        "y",
        "B"
      ],
      [
        "A",
        "x"
      ],
      [
        "A",
        "B",
        "C"
      ],
      [
        "B",
        "z",
        "B"
      ],
      [
        "B",
        "u"
      ],
      [
        "C",
        "s"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "A",
        "y"
      ],
      [
        "A",
        "x"
      ],
      [
        "A",
        "z"
      ],
      [
        "A",
        "u"
      ],
      [
        "B",
        "z"
      ],
      [
        "B",
        "u"
      ],
      [
        "C",
        "s"
      ]
    ],
    "grammar.follow": [
      [
        "A",
        "Grammar.END"
      ],
      [
        "B",
        "s"
      ],
      [
        "B",
        "Grammar.END"
      ],
      [
        "C",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "A",
      "B",
      "C"
    ],
    "grammar.sentences": [
      [
        "x"
      ],
      [
        "y",
        "u"
      ],
      [
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "u"
      ],
      [
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ],
      [
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u",
        "s"
      ],
      [
        "y",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "z",
        "u"
      ]
    ],
    "grammar.symbols": [
      "A",
      "y",
      "B",
      "x",
      "C",
      "z",
      "u",
      "s"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "A": {
        "y": [
          0
        ],
        "x": [
          1
        ],
        "z": [
          2
        ],
        "u": [
          2
        ],
        "s": [],
        "Grammar.END": []
      },
      "B": {
        "y": [],
        "x": [],
        "z": [
          3
        ],
        "u": [
          4
        ],
        "s": [],
        "Grammar.END": []
      },
      "C": {
        "y": [],
        "x": [],
        "z": [],
        "u": [],
        "s": [
          5
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "A": 1,
          "y": 2,
          "x": 3,
          "B": 4,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "B": 7,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 5,
            "index": 0
          }
        ],
        "transitions": {
          "C": 8,
          "s": 9
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "B": 10,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "A": 1,
          "y": 2,
          "x": 3,
          "B": 4,
          "z": 5,
          "u": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "B": 7,
          "z": 5,
          "u": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "C": 8,
          "s": 9
        },
        "reduce": []
      },
      {
        "shift": {
          "B": 10,
          "z": 5,
          "u": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "A": {
          "shift": 1
        },
        "y": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "B": {
          "shift": 4
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "B": {
          "shift": 7
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "C": {
          "shift": 8
        },
        "s": {
          "shift": 9
        }
      },
      {
        "B": {
          "shift": 10
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "s": {
          "reduce": [
            4
          ]
        },
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "s": {
          "reduce": [
            3
          ]
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "s"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "s"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "y": 2,
          "x": 3,
          "B": 4,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "B": 7,
          "z": 8,
          "u": 9
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 10,
          "s": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "s"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "s"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "s"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "s"
            ]
          }
        ],
        "transitions": {
          "B": 12,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "s"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "s"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "B": 13,
          "z": 8,
          "u": 9
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "s"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "s"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "A": {
          "shift": 1
        },
        "y": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "B": {
          "shift": 4
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "B": {
          "shift": 7
        },
        "z": {
          "shift": 8
        },
        "u": {
          "shift": 9
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "C": {
          "shift": 10
        },
        "s": {
          "shift": 11
        }
      },
      {
        "B": {
          "shift": 12
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "s": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "B": {
          "shift": 13
        },
        "z": {
          "shift": 8
        },
        "u": {
          "shift": 9
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "s": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "s"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "s"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "y": 2,
          "x": 3,
          "B": 4,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "B": 7,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "C": 8,
          "s": 9
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          }
        ],
        "transitions": {
          "B": 10,
          "z": 5,
          "u": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END",
              "s"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "A": {
          "shift": 1
        },
        "y": {
          "shift": 2
        },
        "x": {
          "shift": 3
        },
        "B": {
          "shift": 4
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "B": {
          "shift": 7
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "C": {
          "shift": 8
        },
        "s": {
          "shift": 9
        }
      },
      {
        "B": {
          "shift": 10
        },
        "z": {
          "shift": 5
        },
        "u": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        },
        "s": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        },
        "s": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "y",
              "z",
              "B"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "A",
              "y",
              "u"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "z",
              "B",
              "C"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "A",
              "u",
              "C"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "B",
              "s"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "B",
              "z",
              "z",
              "B"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "B",
              "z",
              "u"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "y",
              "z",
              "B"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "A",
              "y",
              "u"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "z",
              "B",
              "C"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "A",
              "u",
              "C"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "B",
              "s"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "B",
              "z",
              "z",
              "B"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "B",
              "z",
              "u"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ]
  },
  "ll1-lr0-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "Ses",
      "SL"
    ],
    "grammar.terminals": [
      "(",
      ")",
      "(*",
      "*)",
      ";"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "(",
        ")",
        "(*",
        "*)",
        ";"
      ],
      "nonterminalOrder": [
        "S",
        "Ses",
        "SL"
      ],
      "productionOrder": [
        "S",
        "Ses",
        "SL"
      ],
      "nonterminals": [
        "S",
        "Ses",
        "SL"
      ],
      "terminals": [
        "(",
        ")",
        "(*",
        "*)",
        ";"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "(",
        "Ses",
        ")"
      ],
      [
        "S",
        "(*",
        "*)"
      ],
      [
        "Ses",
        "S",
        "SL"
      ],
      [
        "SL",
        ";",
        "SL"
      ],
      [
        "SL",
        "S"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "S",
        "("
      ],
      [
        "S",
        "(*"
      ],
      [
        "SL",
        ";"
      ],
      [
        "SL",
        "("
      ],
      [
        "SL",
        "(*"
      ],
      [
        "Ses",
        "("
      ],
      [
        "Ses",
        "(*"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "S",
        ";"
      ],
      [
        "S",
        "("
      ],
      [
        "S",
        "(*"
      ],
      [
        "S",
        ")"
      ],
      [
        "Ses",
        ")"
      ],
      [
        "SL",
        ")"
      ]
    ],
    "grammar.endable": [
      "S"
    ],
    "grammar.sentences": [
      [
        "(*",
        "*)"
      ],
      [
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(*",
        "*)",
        ")",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        ";",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(",
        "(*",
        "*)",
        ";",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        ";",
        ";",
        "(*",
        "*)",
        ")",
        ";",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        "(",
        "(*",
        "*)",
        "(*",
        "*)",
        ")",
        ")"
      ],
      [
        "(",
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")",
        "(*",
        "*)",
        ")"
      ],
      [
        "(",
        "(*",
        "*)",
        ";",
        ";",
        ";",
        ";",
        ";",
        ";",
        ";",
        ";",
        "(*",
        "*)",
        ")"
      ]
    ],
    "grammar.symbols": [
      "S",
      "(",
      "Ses",
      ")",
      "(*",
      "*)",
      "SL",
      ";"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "(": [
          0
        ],
        ")": [],
        "(*": [
          1
        ],
        "*)": [],
        ";": [],
        "Grammar.END": []
      },
      "Ses": {
        "(": [
          2
        ],
        ")": [],
        "(*": [
          2
        ],
        "*)": [],
        ";": [],
        "Grammar.END": []
      },
      "SL": {
        "(": [
          4
        ],
        ")": [],
        "(*": [
          4
        ],
        "*)": [],
        ";": [
          3
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "Ses": 4,
          "S": 5,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "*)": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {
          ")": 7
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "SL": 8,
          ";": 9,
          "S": 10,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "SL": 11,
          ";": 9,
          "S": 10,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "(": 2,
          "(*": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "Ses": 4,
          "S": 5,
          "(": 2,
          "(*": 3
        },
        "reduce": []
      },
      {
        "shift": {
          "*)": 6
        },
        "reduce": []
      },
      {
        "shift": {
          ")": 7
        },
        "reduce": []
      },
      {
        "shift": {
          "SL": 8,
          ";": 9,
          "S": 10,
          "(": 2,
          "(*": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "SL": 11,
          ";": 9,
          "S": 10,
          "(": 2,
          "(*": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Ses": {
          "shift": 4
        },
        "S": {
          "shift": 5
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        "*)": {
          "shift": 6
        }
      },
      {
        ")": {
          "shift": 7
        }
      },
      {
        "SL": {
          "shift": 8
        },
        ";": {
          "shift": 9
        },
        "S": {
          "shift": 10
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        },
        ";": {
          "reduce": [
            1
          ]
        },
        "(": {
          "reduce": [
            1
          ]
        },
        "(*": {
          "reduce": [
            1
          ]
        },
        ")": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        },
        ";": {
          "reduce": [
            0
          ]
        },
        "(": {
          "reduce": [
            0
          ]
        },
        "(*": {
          "reduce": [
            0
          ]
        },
        ")": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "SL": {
          "shift": 11
        },
        ";": {
          "shift": 9
        },
        "S": {
          "shift": 10
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        ")": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "Ses": 4,
          "S": 5,
          "(": 6,
          "(*": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*)": 8
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "SL": 10,
          ";": 11,
          "S": 12,
          "(": 13,
          "(*": 14
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "Ses": 15,
          "S": 5,
          "(": 6,
          "(*": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "transitions": {
          "*)": 16
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "SL": 17,
          ";": 11,
          "S": 12,
          "(": 13,
          "(*": 14
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "Ses": 18,
          "S": 5,
          "(": 6,
          "(*": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "*)": 19
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "transitions": {
          ")": 20
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          ")": 21
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Ses": {
          "shift": 4
        },
        "S": {
          "shift": 5
        },
        "(": {
          "shift": 6
        },
        "(*": {
          "shift": 7
        }
      },
      {
        "*)": {
          "shift": 8
        }
      },
      {
        ")": {
          "shift": 9
        }
      },
      {
        "SL": {
          "shift": 10
        },
        ";": {
          "shift": 11
        },
        "S": {
          "shift": 12
        },
        "(": {
          "shift": 13
        },
        "(*": {
          "shift": 14
        }
      },
      {
        "Ses": {
          "shift": 15
        },
        "S": {
          "shift": 5
        },
        "(": {
          "shift": 6
        },
        "(*": {
          "shift": 7
        }
      },
      {
        "*)": {
          "shift": 16
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "SL": {
          "shift": 17
        },
        ";": {
          "shift": 11
        },
        "S": {
          "shift": 12
        },
        "(": {
          "shift": 13
        },
        "(*": {
          "shift": 14
        }
      },
      {
        ")": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Ses": {
          "shift": 18
        },
        "S": {
          "shift": 5
        },
        "(": {
          "shift": 6
        },
        "(*": {
          "shift": 7
        }
      },
      {
        "*)": {
          "shift": 19
        }
      },
      {
        ")": {
          "shift": 20
        }
      },
      {
        ";": {
          "reduce": [
            1
          ]
        },
        "(": {
          "reduce": [
            1
          ]
        },
        "(*": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        ")": {
          "shift": 21
        }
      },
      {
        ")": {
          "reduce": [
            1
          ]
        }
      },
      {
        ";": {
          "reduce": [
            0
          ]
        },
        "(": {
          "reduce": [
            0
          ]
        },
        "(*": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "reduce": [
            0
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ";",
              "(",
              "(*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "Ses": 4,
          "S": 5,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*)": 6
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 7
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "SL": 8,
          ";": 9,
          "S": 10,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")",
              ";",
              "(",
              "(*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "SL": 11,
          ";": 9,
          "S": 10,
          "(": 2,
          "(*": 3
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Ses": {
          "shift": 4
        },
        "S": {
          "shift": 5
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        "*)": {
          "shift": 6
        }
      },
      {
        ")": {
          "shift": 7
        }
      },
      {
        "SL": {
          "shift": 8
        },
        ";": {
          "shift": 9
        },
        "S": {
          "shift": 10
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        ")": {
          "reduce": [
            1
          ]
        },
        ";": {
          "reduce": [
            1
          ]
        },
        "(": {
          "reduce": [
            1
          ]
        },
        "(*": {
          "reduce": [
            1
          ]
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "reduce": [
            0
          ]
        },
        ";": {
          "reduce": [
            0
          ]
        },
        "(": {
          "reduce": [
            0
          ]
        },
        "(*": {
          "reduce": [
            0
          ]
        },
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "SL": {
          "shift": 11
        },
        ";": {
          "shift": 9
        },
        "S": {
          "shift": 10
        },
        "(": {
          "shift": 2
        },
        "(*": {
          "shift": 3
        }
      },
      {
        ")": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "S",
              "SL",
              ")"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "(",
              "Ses",
              ")",
              "SL"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "(*",
              "*)",
              "SL"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "S",
              ";",
              "SL"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "S",
              "S"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "SL",
              ";",
              ";",
              "SL"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "SL",
              ";",
              "S"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "SL",
              "(",
              "Ses",
              ")"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "SL",
              "(*",
              "*)"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "S",
              "SL",
              ")"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "(",
              "Ses",
              ")",
              "SL"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "(*",
              "*)",
              "SL"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "S",
              ";",
              "SL"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "Ses",
              "S",
              "S"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "SL",
              ";",
              ";",
              "SL"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "SL",
              ";",
              "S"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "SL",
              "(",
              "Ses",
              ")"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "SL",
              "(*",
              "*)"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      }
    ]
  },
  "ll1-lr1-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      }
    },
    "grammar.nonterminals": [
      "S",
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "grammar.terminals": [
      "a",
      "b"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "a",
        "b"
      ],
      "nonterminalOrder": [
        "S",
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "productionOrder": [
        "S",
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "nonterminals": [
        "S",
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "terminals": [
        "a",
        "b"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "a",
        "A"
      ],
      [
        "S",
        "b",
        "B"
      ],
      [
        "A",
        "C",
        "a"
      ],
      [
        "A",
        "D",
        "b"
      ],
      [
        "B",
        "C",
        "b"
      ],
      [
        "B",
        "D",
        "a"
      ],
      [
        "C",
        "E"
      ],
      [
        "D",
        "E"
      ],
      [
        "E"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "E",
      "C",
      "D"
    ],
    "grammar.first": [
      [
        "S",
        "a"
      ],
      [
        "S",
        "b"
      ],
      [
        "A",
        "a"
      ],
      [
        "A",
        "b"
      ],
      [
        "B",
        "b"
      ],
      [
        "B",
        "a"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "C",
        "a"
      ],
      [
        "C",
        "b"
      ],
      [
        "D",
        "b"
      ],
      [
        "D",
        "a"
      ],
      [
        "A",
        "Grammar.END"
      ],
      [
        "B",
        "Grammar.END"
      ],
      [
        "E",
        "a"
      ],
      [
        "E",
        "b"
      ]
    ],
    "grammar.endable": [
      "S",
      "A",
      "B"
    ],
    "grammar.sentences": [
      [
        "a",
        "a"
      ],
      [
        "a",
        "b"
      ],
      [
        "b",
        "b"
      ],
      [
        "b",
        "a"
      ]
    ],
    "grammar.symbols": [
      "S",
      "a",
      "A",
      "b",
      "B",
      "C",
      "D",
      "E"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "a": [
          0
        ],
        "b": [
          1
        ],
        "Grammar.END": []
      },
      "A": {
        "a": [
          2
        ],
        "b": [
          3
        ],
        "Grammar.END": []
      },
      "B": {
        "a": [
          5
        ],
        "b": [
          4
        ],
        "Grammar.END": []
      },
      "C": {
        "a": [
          6
        ],
        "b": [
          6
        ],
        "Grammar.END": []
      },
      "D": {
        "a": [
          7
        ],
        "b": [
          7
        ],
        "Grammar.END": []
      },
      "E": {
        "a": [
          8
        ],
        "b": [
          8
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "a": 2,
          "b": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          }
        ],
        "transitions": {
          "A": 4,
          "C": 5,
          "D": 6,
          "E": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          }
        ],
        "transitions": {
          "B": 8,
          "C": 9,
          "D": 10,
          "E": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {
          "a": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {
          "b": 12
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          },
          {
            "production": 7,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          },
          {
            "production": 7,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {
          "b": 13
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {
          "a": 14
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "a": 2,
          "b": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "A": 4,
          "C": 5,
          "D": 6,
          "E": 7
        },
        "reduce": [
          8
        ]
      },
      {
        "shift": {
          "B": 8,
          "C": 9,
          "D": 10,
          "E": 7
        },
        "reduce": [
          8
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "a": 11
        },
        "reduce": []
      },
      {
        "shift": {
          "b": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          6,
          7
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "b": 13
        },
        "reduce": []
      },
      {
        "shift": {
          "a": 14
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "a": {
          "shift": 2
        },
        "b": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "A": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "D": {
          "shift": 6
        },
        "E": {
          "shift": 7
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "B": {
          "shift": 8
        },
        "C": {
          "shift": 9
        },
        "D": {
          "shift": 10
        },
        "E": {
          "shift": 7
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "a": {
          "shift": 11
        }
      },
      {
        "b": {
          "shift": 12
        }
      },
      {
        "a": {
          "reduce": [
            6,
            7
          ]
        },
        "b": {
          "reduce": [
            6,
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "b": {
          "shift": 13
        }
      },
      {
        "a": {
          "shift": 14
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "a": 2,
          "b": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "transitions": {
          "A": 4,
          "C": 5,
          "D": 6,
          "E": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "b",
              "a"
            ]
          }
        ],
        "transitions": {
          "B": 8,
          "C": 9,
          "D": 10,
          "E": 11
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 13
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 14
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 15
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "a": {
          "shift": 2
        },
        "b": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "A": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "D": {
          "shift": 6
        },
        "E": {
          "shift": 7
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "B": {
          "shift": 8
        },
        "C": {
          "shift": 9
        },
        "D": {
          "shift": 10
        },
        "E": {
          "shift": 11
        },
        "b": {
          "reduce": [
            8
          ]
        },
        "a": {
          "reduce": [
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "a": {
          "shift": 12
        }
      },
      {
        "b": {
          "shift": 13
        }
      },
      {
        "a": {
          "reduce": [
            6
          ]
        },
        "b": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "b": {
          "shift": 14
        }
      },
      {
        "a": {
          "shift": 15
        }
      },
      {
        "b": {
          "reduce": [
            6
          ]
        },
        "a": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "a": 2,
          "b": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "transitions": {
          "A": 4,
          "C": 5,
          "D": 6,
          "E": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "b",
              "a"
            ]
          }
        ],
        "transitions": {
          "B": 8,
          "C": 9,
          "D": 10,
          "E": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 12
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b",
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b",
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 13
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 14
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "a": {
          "shift": 2
        },
        "b": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "A": {
          "shift": 4
        },
        "C": {
          "shift": 5
        },
        "D": {
          "shift": 6
        },
        "E": {
          "shift": 7
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "B": {
          "shift": 8
        },
        "C": {
          "shift": 9
        },
        "D": {
          "shift": 10
        },
        "E": {
          "shift": 7
        },
        "b": {
          "reduce": [
            8
          ]
        },
        "a": {
          "reduce": [
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "a": {
          "shift": 11
        }
      },
      {
        "b": {
          "shift": 12
        }
      },
      {
        "b": {
          "reduce": [
            6,
            7
          ]
        },
        "a": {
          "reduce": [
            6,
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "b": {
          "shift": 13
        }
      },
      {
        "a": {
          "shift": 14
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "C",
              "a"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "D",
              "b"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "b",
              "C",
              "b"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "b",
              "D",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "A",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "B",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "B",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "C"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 7,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 7
          },
          {
            "production": [
              "D"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "C",
              "a"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "D",
              "b"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "b",
              "C",
              "b"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "b",
              "D",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "A",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "B",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "B",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "C"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 7,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 7
          },
          {
            "production": [
              "D"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      }
    ]
  },
  "ll1-lr1-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      }
    },
    "grammar.nonterminals": [
      "S",
      "X",
      "E",
      "F",
      "A"
    ],
    "grammar.terminals": [
      "(",
      "sq)",
      ")"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "(",
        "sq)",
        ")"
      ],
      "nonterminalOrder": [
        "S",
        "X",
        "E",
        "F",
        "A"
      ],
      "productionOrder": [
        "S",
        "X",
        "E",
        "F",
        "A"
      ],
      "nonterminals": [
        "S",
        "X",
        "E",
        "F",
        "A"
      ],
      "terminals": [
        "(",
        "sq)",
        ")"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "(",
        "X"
      ],
      [
        "S",
        "E",
        "sq)"
      ],
      [
        "S",
        "F",
        ")"
      ],
      [
        "X",
        "E",
        ")"
      ],
      [
        "X",
        "F",
        "sq)"
      ],
      [
        "E",
        "A"
      ],
      [
        "F",
        "A"
      ],
      [
        "A"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "A",
      "E",
      "F"
    ],
    "grammar.first": [
      [
        "S",
        "("
      ],
      [
        "S",
        "sq)"
      ],
      [
        "S",
        ")"
      ],
      [
        "X",
        ")"
      ],
      [
        "X",
        "sq)"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "E",
        "sq)"
      ],
      [
        "E",
        ")"
      ],
      [
        "F",
        ")"
      ],
      [
        "F",
        "sq)"
      ],
      [
        "X",
        "Grammar.END"
      ],
      [
        "A",
        "sq)"
      ],
      [
        "A",
        ")"
      ]
    ],
    "grammar.endable": [
      "S",
      "X"
    ],
    "grammar.sentences": [
      [
        "sq)"
      ],
      [
        ")"
      ],
      [
        "(",
        ")"
      ],
      [
        "(",
        "sq)"
      ]
    ],
    "grammar.symbols": [
      "S",
      "(",
      "X",
      "E",
      "sq)",
      "F",
      ")",
      "A"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "(": [
          0
        ],
        "sq)": [
          1
        ],
        ")": [
          2
        ],
        "Grammar.END": []
      },
      "X": {
        "(": [],
        "sq)": [
          4
        ],
        ")": [
          3
        ],
        "Grammar.END": []
      },
      "E": {
        "(": [],
        "sq)": [
          5
        ],
        ")": [
          5
        ],
        "Grammar.END": []
      },
      "F": {
        "(": [],
        "sq)": [
          6
        ],
        ")": [
          6
        ],
        "Grammar.END": []
      },
      "A": {
        "(": [],
        "sq)": [
          7
        ],
        ")": [
          7
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "(": 2,
          "E": 3,
          "F": 4,
          "A": 5
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "X": 6,
          "E": 7,
          "F": 8,
          "A": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "sq)": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {
          ")": 10
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          },
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          },
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {
          ")": 11
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {
          "sq)": 12
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "(": 2,
          "E": 3,
          "F": 4,
          "A": 5
        },
        "reduce": [
          7
        ]
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "X": 6,
          "E": 7,
          "F": 8,
          "A": 5
        },
        "reduce": [
          7
        ]
      },
      {
        "shift": {
          "sq)": 9
        },
        "reduce": []
      },
      {
        "shift": {
          ")": 10
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          5,
          6
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          ")": 11
        },
        "reduce": []
      },
      {
        "shift": {
          "sq)": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "(": {
          "shift": 2
        },
        "E": {
          "shift": 3
        },
        "F": {
          "shift": 4
        },
        "A": {
          "shift": 5
        },
        "sq)": {
          "reduce": [
            7
          ]
        },
        ")": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "X": {
          "shift": 6
        },
        "E": {
          "shift": 7
        },
        "F": {
          "shift": 8
        },
        "A": {
          "shift": 5
        },
        "sq)": {
          "reduce": [
            7
          ]
        },
        ")": {
          "reduce": [
            7
          ]
        }
      },
      {
        "sq)": {
          "shift": 9
        }
      },
      {
        ")": {
          "shift": 10
        }
      },
      {
        "sq)": {
          "reduce": [
            5,
            6
          ]
        },
        ")": {
          "reduce": [
            5,
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "shift": 11
        }
      },
      {
        "sq)": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "sq)"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "sq)",
              ")"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "(": 2,
          "E": 3,
          "F": 4,
          "A": 5
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "sq)"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              ")",
              "sq)"
            ]
          }
        ],
        "transitions": {
          "X": 6,
          "E": 7,
          "F": 8,
          "A": 9
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "sq)": 10
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 11
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "sq)"
            ]
          },
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "sq)"
            ]
          },
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 12
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "sq)": 13
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "sq)"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "sq)"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "(": {
          "shift": 2
        },
        "E": {
          "shift": 3
        },
        "F": {
          "shift": 4
        },
        "A": {
          "shift": 5
        },
        "sq)": {
          "reduce": [
            7
          ]
        },
        ")": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "X": {
          "shift": 6
        },
        "E": {
          "shift": 7
        },
        "F": {
          "shift": 8
        },
        "A": {
          "shift": 9
        },
        ")": {
          "reduce": [
            7
          ]
        },
        "sq)": {
          "reduce": [
            7
          ]
        }
      },
      {
        "sq)": {
          "shift": 10
        }
      },
      {
        ")": {
          "shift": 11
        }
      },
      {
        "sq)": {
          "reduce": [
            5
          ]
        },
        ")": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "shift": 12
        }
      },
      {
        "sq)": {
          "shift": 13
        }
      },
      {
        ")": {
          "reduce": [
            5
          ]
        },
        "sq)": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "sq)"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "sq)",
              ")"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "(": 2,
          "E": 3,
          "F": 4,
          "A": 5
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "sq)"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              ")",
              "sq)"
            ]
          }
        ],
        "transitions": {
          "X": 6,
          "E": 7,
          "F": 8,
          "A": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "sq)": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 10
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")",
              "sq)"
            ]
          },
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "sq)",
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")",
              "sq)"
            ]
          },
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "sq)",
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 11
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "sq)": 12
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "(": {
          "shift": 2
        },
        "E": {
          "shift": 3
        },
        "F": {
          "shift": 4
        },
        "A": {
          "shift": 5
        },
        "sq)": {
          "reduce": [
            7
          ]
        },
        ")": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "X": {
          "shift": 6
        },
        "E": {
          "shift": 7
        },
        "F": {
          "shift": 8
        },
        "A": {
          "shift": 5
        },
        ")": {
          "reduce": [
            7
          ]
        },
        "sq)": {
          "reduce": [
            7
          ]
        }
      },
      {
        "sq)": {
          "shift": 9
        }
      },
      {
        ")": {
          "shift": 10
        }
      },
      {
        ")": {
          "reduce": [
            5,
            6
          ]
        },
        "sq)": {
          "reduce": [
            5,
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "shift": 11
        }
      },
      {
        "sq)": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "E",
              ")"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "F",
              "sq)"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "A",
              "sq)"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "S",
              "A",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "X",
              "A",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "X",
              "A",
              "sq)"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "E"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "F"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "E",
              ")"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "F",
              "sq)"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "A",
              "sq)"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "S",
              "A",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "X",
              "A",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "X",
              "A",
              "sq)"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "E"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "F"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      }
    ]
  },
  "ll1-lr1-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      }
    },
    "grammar.nonterminals": [
      "E",
      "D",
      "R",
      "V",
      "L",
      "Z"
    ],
    "grammar.terminals": [
      "id",
      "+",
      "(",
      "*",
      ")",
      "!",
      "num"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "id",
        "+",
        "(",
        "*",
        ")",
        "!",
        "num"
      ],
      "nonterminalOrder": [
        "E",
        "D",
        "R",
        "V",
        "L",
        "Z"
      ],
      "productionOrder": [
        "E",
        "D",
        "R",
        "V",
        "L",
        "Z"
      ],
      "nonterminals": [
        "E",
        "D",
        "R",
        "V",
        "L",
        "Z"
      ],
      "terminals": [
        "id",
        "+",
        "(",
        "*",
        ")",
        "!",
        "num"
      ]
    },
    "grammar.start": "E",
    "grammar.productions": [
      [
        "E",
        "id",
        "+",
        "D"
      ],
      [
        "E",
        "(",
        "E",
        "*",
        "R",
        ")"
      ],
      [
        "E"
      ],
      [
        "D",
        "V",
        "*",
        "E"
      ],
      [
        "D",
        "L",
        "!",
        "E"
      ],
      [
        "R",
        "V",
        "!",
        "E"
      ],
      [
        "R",
        "L",
        "*",
        "E"
      ],
      [
        "V",
        "Z"
      ],
      [
        "V",
        "num"
      ],
      [
        "L",
        "Z"
      ],
      [
        "L",
        "(",
        "E",
        ")"
      ],
      [
        "Z"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "E",
      "Z",
      "V",
      "L"
    ],
    "grammar.first": [
      [
        "E",
        "id"
      ],
      [
        "E",
        "("
      ],
      [
        "D",
        "*"
      ],
      [
        "D",
        "!"
      ],
      [
        "D",
        "num"
      ],
      [
        "D",
        "("
      ],
      [
        "R",
        "!"
      ],
      [
        "R",
        "*"
      ],
      [
        "R",
        "num"
      ],
      [
        "R",
        "("
      ],
      [
        "V",
        "num"
      ],
      [
        "L",
        "("
      ]
    ],
    "grammar.follow": [
      [
        "E",
        "Grammar.END"
      ],
      [
        "E",
        "*"
      ],
      [
        "E",
        ")"
      ],
      [
        "R",
        ")"
      ],
      [
        "V",
        "*"
      ],
      [
        "V",
        "!"
      ],
      [
        "L",
        "!"
      ],
      [
        "L",
        "*"
      ],
      [
        "D",
        "Grammar.END"
      ],
      [
        "D",
        "*"
      ],
      [
        "D",
        ")"
      ],
      [
        "Z",
        "*"
      ],
      [
        "Z",
        "!"
      ]
    ],
    "grammar.endable": [
      "E",
      "D"
    ],
    "grammar.sentences": [
      [],
      [
        "id",
        "+",
        "*"
      ],
      [
        "id",
        "+",
        "!"
      ],
      [
        "id",
        "+",
        "num",
        "*"
      ],
      [
        "(",
        "*",
        "!",
        ")"
      ],
      [
        "(",
        "*",
        "*",
        ")"
      ],
      [
        "(",
        "*",
        "num",
        "!",
        ")"
      ],
      [
        "id",
        "+",
        "(",
        ")",
        "!"
      ],
      [
        "(",
        "*",
        "(",
        ")",
        "*",
        ")"
      ],
      [
        "id",
        "+",
        "*",
        "id",
        "+",
        "num",
        "*"
      ],
      [
        "id",
        "+",
        "!",
        "id",
        "+",
        "num",
        "*"
      ],
      [
        "id",
        "+",
        "num",
        "*",
        "id",
        "+",
        "*"
      ],
      [
        "id",
        "+",
        "num",
        "*",
        "id",
        "+",
        "!"
      ],
      [
        "id",
        "+",
        "num",
        "*",
        "id",
        "+",
        "num",
        "*"
      ],
      [
        "(",
        "*",
        "num",
        "!",
        "id",
        "+",
        "num",
        "*",
        ")"
      ],
      [
        "id",
        "+",
        "(",
        ")",
        "!",
        "id",
        "+",
        "num",
        "*"
      ],
      [
        "id",
        "+",
        "num",
        "*",
        "(",
        "*",
        "num",
        "!",
        ")"
      ],
      [
        "(",
        "id",
        "+",
        "num",
        "*",
        "*",
        "num",
        "!",
        ")"
      ],
      [
        "id",
        "+",
        "num",
        "*",
        "id",
        "+",
        "(",
        ")",
        "!"
      ],
      [
        "id",
        "+",
        "(",
        "id",
        "+",
        "num",
        "*",
        ")",
        "!"
      ]
    ],
    "grammar.symbols": [
      "E",
      "id",
      "+",
      "D",
      "(",
      "*",
      "R",
      ")",
      "V",
      "L",
      "!",
      "Z",
      "num"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "E": {
        "id": [
          0
        ],
        "+": [],
        "(": [
          1
        ],
        "*": [
          2
        ],
        ")": [
          2
        ],
        "!": [],
        "num": [],
        "Grammar.END": [
          2
        ]
      },
      "D": {
        "id": [],
        "+": [],
        "(": [
          4
        ],
        "*": [
          3
        ],
        ")": [],
        "!": [
          4
        ],
        "num": [
          3
        ],
        "Grammar.END": []
      },
      "R": {
        "id": [],
        "+": [],
        "(": [
          6
        ],
        "*": [
          6
        ],
        ")": [],
        "!": [
          5
        ],
        "num": [
          5
        ],
        "Grammar.END": []
      },
      "V": {
        "id": [],
        "+": [],
        "(": [],
        "*": [
          7
        ],
        ")": [],
        "!": [
          7
        ],
        "num": [
          8
        ],
        "Grammar.END": []
      },
      "L": {
        "id": [],
        "+": [],
        "(": [
          10
        ],
        "*": [
          9
        ],
        ")": [],
        "!": [
          9
        ],
        "num": [],
        "Grammar.END": []
      },
      "Z": {
        "id": [],
        "+": [],
        "(": [],
        "*": [
          11
        ],
        ")": [],
        "!": [
          11
        ],
        "num": [],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 1,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "+": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 5,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          }
        ],
        "transitions": {
          "D": 6,
          "V": 7,
          "L": 8,
          "Z": 9,
          "num": 10,
          "(": 11
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {
          "*": 12
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {
          "*": 13
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {
          "!": 14
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1
          },
          {
            "production": 9,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1
          },
          {
            "production": 9,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 1
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 15,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          }
        ],
        "transitions": {
          "R": 16,
          "V": 17,
          "L": 18,
          "Z": 9,
          "num": 10,
          "(": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 19,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 20,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 2
          }
        ],
        "transitions": {
          ")": 21
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4
          }
        ],
        "transitions": {
          ")": 22
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {
          "!": 23
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {
          "*": 24
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 25,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 2
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 26,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 3
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "E": 1,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "+": 4
        },
        "reduce": []
      },
      {
        "shift": {
          "E": 5,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "D": 6,
          "V": 7,
          "L": 8,
          "Z": 9,
          "num": 10,
          "(": 11
        },
        "reduce": [
          11
        ]
      },
      {
        "shift": {
          "*": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "*": 13
        },
        "reduce": []
      },
      {
        "shift": {
          "!": 14
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          7,
          9
        ]
      },
      {
        "shift": {},
        "reduce": [
          8
        ]
      },
      {
        "shift": {
          "E": 15,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "R": 16,
          "V": 17,
          "L": 18,
          "Z": 9,
          "num": 10,
          "(": 11
        },
        "reduce": [
          11
        ]
      },
      {
        "shift": {
          "E": 19,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "E": 20,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          ")": 21
        },
        "reduce": []
      },
      {
        "shift": {
          ")": 22
        },
        "reduce": []
      },
      {
        "shift": {
          "!": 23
        },
        "reduce": []
      },
      {
        "shift": {
          "*": 24
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          10
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "E": 25,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "E": 26,
          "id": 2,
          "(": 3
        },
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          6
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "E": {
          "shift": 1
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "+": {
          "shift": 4
        }
      },
      {
        "E": {
          "shift": 5
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "D": {
          "shift": 6
        },
        "V": {
          "shift": 7
        },
        "L": {
          "shift": 8
        },
        "Z": {
          "shift": 9
        },
        "num": {
          "shift": 10
        },
        "(": {
          "shift": 11
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "!": {
          "reduce": [
            11
          ]
        }
      },
      {
        "*": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        },
        "*": {
          "reduce": [
            0
          ]
        },
        ")": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "shift": 13
        }
      },
      {
        "!": {
          "shift": 14
        }
      },
      {
        "*": {
          "reduce": [
            7,
            9
          ]
        },
        "!": {
          "reduce": [
            7,
            9
          ]
        }
      },
      {
        "*": {
          "reduce": [
            8
          ]
        },
        "!": {
          "reduce": [
            8
          ]
        }
      },
      {
        "E": {
          "shift": 15
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "R": {
          "shift": 16
        },
        "V": {
          "shift": 17
        },
        "L": {
          "shift": 18
        },
        "Z": {
          "shift": 9
        },
        "num": {
          "shift": 10
        },
        "(": {
          "shift": 11
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "!": {
          "reduce": [
            11
          ]
        }
      },
      {
        "E": {
          "shift": 19
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 20
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 21
        }
      },
      {
        ")": {
          "shift": 22
        }
      },
      {
        "!": {
          "shift": 23
        }
      },
      {
        "*": {
          "shift": 24
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        },
        "*": {
          "reduce": [
            3
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        },
        "*": {
          "reduce": [
            4
          ]
        },
        ")": {
          "reduce": [
            4
          ]
        }
      },
      {
        "!": {
          "reduce": [
            10
          ]
        },
        "*": {
          "reduce": [
            10
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        },
        "*": {
          "reduce": [
            1
          ]
        },
        ")": {
          "reduce": [
            1
          ]
        }
      },
      {
        "E": {
          "shift": 25
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 26
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "reduce": [
            5
          ]
        }
      },
      {
        ")": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 1,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "+": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 5,
          "id": 6,
          "(": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {
          "D": 8,
          "V": 9,
          "L": 10,
          "Z": 11,
          "num": 12,
          "(": 13
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*": 14
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "+": 15
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 16,
          "id": 6,
          "(": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*": 17
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "!": 18
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "transitions": {
          "E": 19,
          "id": 20,
          "(": 21
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "!",
              "*"
            ]
          }
        ],
        "transitions": {
          "R": 22,
          "V": 23,
          "L": 24,
          "Z": 25,
          "num": 26,
          "(": 27
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {
          "D": 28,
          "V": 29,
          "L": 30,
          "Z": 11,
          "num": 12,
          "(": 13
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "*": 31
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 32,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 33,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 2,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 2,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "transitions": {
          ")": 34
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "+": 35
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 36,
          "id": 6,
          "(": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 37
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "!": 38
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "*": 39
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 40,
          "id": 20,
          "(": 21
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "*": 41
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "!": 42
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "!",
              "*"
            ]
          }
        ],
        "transitions": {
          "R": 43,
          "V": 23,
          "L": 24,
          "Z": 25,
          "num": 26,
          "(": 27
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 3,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 3,
            "lookaheads": [
              "!"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {
          "D": 44,
          "V": 45,
          "L": 46,
          "Z": 11,
          "num": 12,
          "(": 13
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "*": 47
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "E": 48,
          "id": 20,
          "(": 21
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "E": 49,
          "id": 20,
          "(": 21
        }
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          ")": 50
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 51,
          "id": 6,
          "(": 7
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 52,
          "id": 6,
          "(": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          ")": 53
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "*": 54
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "!": 55
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "!",
              "*"
            ]
          }
        ],
        "transitions": {
          "R": 56,
          "V": 23,
          "L": 24,
          "Z": 25,
          "num": 26,
          "(": 27
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "E": 57,
          "id": 20,
          "(": 21
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "E": 58,
          "id": 20,
          "(": 21
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          ")": 59
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "E": {
          "shift": 1
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "+": {
          "shift": 4
        }
      },
      {
        "E": {
          "shift": 5
        },
        "id": {
          "shift": 6
        },
        "(": {
          "shift": 7
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        "D": {
          "shift": 8
        },
        "V": {
          "shift": 9
        },
        "L": {
          "shift": 10
        },
        "Z": {
          "shift": 11
        },
        "num": {
          "shift": 12
        },
        "(": {
          "shift": 13
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "!": {
          "reduce": [
            11
          ]
        }
      },
      {
        "*": {
          "shift": 14
        }
      },
      {
        "+": {
          "shift": 15
        }
      },
      {
        "E": {
          "shift": 16
        },
        "id": {
          "shift": 6
        },
        "(": {
          "shift": 7
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "shift": 17
        }
      },
      {
        "!": {
          "shift": 18
        }
      },
      {
        "*": {
          "reduce": [
            7
          ]
        },
        "!": {
          "reduce": [
            9
          ]
        }
      },
      {
        "*": {
          "reduce": [
            8
          ]
        }
      },
      {
        "E": {
          "shift": 19
        },
        "id": {
          "shift": 20
        },
        "(": {
          "shift": 21
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "R": {
          "shift": 22
        },
        "V": {
          "shift": 23
        },
        "L": {
          "shift": 24
        },
        "Z": {
          "shift": 25
        },
        "num": {
          "shift": 26
        },
        "(": {
          "shift": 27
        },
        "!": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        }
      },
      {
        "D": {
          "shift": 28
        },
        "V": {
          "shift": 29
        },
        "L": {
          "shift": 30
        },
        "Z": {
          "shift": 11
        },
        "num": {
          "shift": 12
        },
        "(": {
          "shift": 13
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "!": {
          "reduce": [
            11
          ]
        }
      },
      {
        "*": {
          "shift": 31
        }
      },
      {
        "E": {
          "shift": 32
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 33
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 34
        }
      },
      {
        "+": {
          "shift": 35
        }
      },
      {
        "E": {
          "shift": 36
        },
        "id": {
          "shift": 6
        },
        "(": {
          "shift": 7
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 37
        }
      },
      {
        "!": {
          "shift": 38
        }
      },
      {
        "*": {
          "shift": 39
        }
      },
      {
        "!": {
          "reduce": [
            7
          ]
        },
        "*": {
          "reduce": [
            9
          ]
        }
      },
      {
        "!": {
          "reduce": [
            8
          ]
        }
      },
      {
        "E": {
          "shift": 40
        },
        "id": {
          "shift": 20
        },
        "(": {
          "shift": 21
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "*": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "shift": 41
        }
      },
      {
        "!": {
          "shift": 42
        }
      },
      {
        "R": {
          "shift": 43
        },
        "V": {
          "shift": 23
        },
        "L": {
          "shift": 24
        },
        "Z": {
          "shift": 25
        },
        "num": {
          "shift": 26
        },
        "(": {
          "shift": 27
        },
        "!": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "!": {
          "reduce": [
            10
          ]
        }
      },
      {
        "D": {
          "shift": 44
        },
        "V": {
          "shift": 45
        },
        "L": {
          "shift": 46
        },
        "Z": {
          "shift": 11
        },
        "num": {
          "shift": 12
        },
        "(": {
          "shift": 13
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "!": {
          "reduce": [
            11
          ]
        }
      },
      {
        "*": {
          "shift": 47
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "E": {
          "shift": 48
        },
        "id": {
          "shift": 20
        },
        "(": {
          "shift": 21
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 49
        },
        "id": {
          "shift": 20
        },
        "(": {
          "shift": 21
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 50
        }
      },
      {
        "E": {
          "shift": 51
        },
        "id": {
          "shift": 6
        },
        "(": {
          "shift": 7
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 52
        },
        "id": {
          "shift": 6
        },
        "(": {
          "shift": 7
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 53
        }
      },
      {
        ")": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "shift": 54
        }
      },
      {
        "!": {
          "shift": 55
        }
      },
      {
        "R": {
          "shift": 56
        },
        "V": {
          "shift": 23
        },
        "L": {
          "shift": 24
        },
        "Z": {
          "shift": 25
        },
        "num": {
          "shift": 26
        },
        "(": {
          "shift": 27
        },
        "!": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        }
      },
      {
        ")": {
          "reduce": [
            5
          ]
        }
      },
      {
        ")": {
          "reduce": [
            6
          ]
        }
      },
      {
        "*": {
          "reduce": [
            10
          ]
        }
      },
      {
        "*": {
          "reduce": [
            3
          ]
        }
      },
      {
        "*": {
          "reduce": [
            4
          ]
        }
      },
      {
        "*": {
          "reduce": [
            1
          ]
        }
      },
      {
        "E": {
          "shift": 57
        },
        "id": {
          "shift": 20
        },
        "(": {
          "shift": 21
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 58
        },
        "id": {
          "shift": 20
        },
        "(": {
          "shift": 21
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 59
        }
      },
      {
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        ")": {
          "reduce": [
            4
          ]
        }
      },
      {
        ")": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 1,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "+": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          }
        ],
        "transitions": {
          "E": 5,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {
          "D": 6,
          "V": 7,
          "L": 8,
          "Z": 9,
          "num": 10,
          "(": 11
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*": 12
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "*": 13
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "!": 14
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "!",
              "*"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "!",
              "*"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "!",
              "*"
            ]
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "!",
              "*"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {
          "E": 15,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "!"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "*"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "!",
              "*"
            ]
          }
        ],
        "transitions": {
          "R": 16,
          "V": 17,
          "L": 18,
          "Z": 9,
          "num": 10,
          "(": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 19,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 20,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 2,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 2,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {
          ")": 21
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 22
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "!": 23
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "*": 24
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 3,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 3,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 3,
            "lookaheads": [
              "*",
              "!"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              ")",
              "*",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "E": 25,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 6,
            "index": 2,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "E": 26,
          "id": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 3,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "E": {
          "shift": 1
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "+": {
          "shift": 4
        }
      },
      {
        "E": {
          "shift": 5
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        "*": {
          "reduce": [
            2
          ]
        }
      },
      {
        "D": {
          "shift": 6
        },
        "V": {
          "shift": 7
        },
        "L": {
          "shift": 8
        },
        "Z": {
          "shift": 9
        },
        "num": {
          "shift": 10
        },
        "(": {
          "shift": 11
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "!": {
          "reduce": [
            11
          ]
        }
      },
      {
        "*": {
          "shift": 12
        }
      },
      {
        ")": {
          "reduce": [
            0
          ]
        },
        "*": {
          "reduce": [
            0
          ]
        },
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "*": {
          "shift": 13
        }
      },
      {
        "!": {
          "shift": 14
        }
      },
      {
        "!": {
          "reduce": [
            7,
            9
          ]
        },
        "*": {
          "reduce": [
            7,
            9
          ]
        }
      },
      {
        "!": {
          "reduce": [
            8
          ]
        },
        "*": {
          "reduce": [
            8
          ]
        }
      },
      {
        "E": {
          "shift": 15
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "R": {
          "shift": 16
        },
        "V": {
          "shift": 17
        },
        "L": {
          "shift": 18
        },
        "Z": {
          "shift": 9
        },
        "num": {
          "shift": 10
        },
        "(": {
          "shift": 11
        },
        "!": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        }
      },
      {
        "E": {
          "shift": 19
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        ")": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 20
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        ")": {
          "reduce": [
            2
          ]
        },
        "*": {
          "reduce": [
            2
          ]
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "shift": 21
        }
      },
      {
        ")": {
          "shift": 22
        }
      },
      {
        "!": {
          "shift": 23
        }
      },
      {
        "*": {
          "shift": 24
        }
      },
      {
        ")": {
          "reduce": [
            3
          ]
        },
        "*": {
          "reduce": [
            3
          ]
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        ")": {
          "reduce": [
            4
          ]
        },
        "*": {
          "reduce": [
            4
          ]
        },
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "*": {
          "reduce": [
            10
          ]
        },
        "!": {
          "reduce": [
            10
          ]
        }
      },
      {
        ")": {
          "reduce": [
            1
          ]
        },
        "*": {
          "reduce": [
            1
          ]
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "E": {
          "shift": 25
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "E": {
          "shift": 26
        },
        "id": {
          "shift": 2
        },
        "(": {
          "shift": 3
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        ")": {
          "reduce": [
            5
          ]
        }
      },
      {
        ")": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "E",
              "id",
              "+",
              "V",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "E",
              "id",
              "+",
              "L",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "id",
              "+",
              "D",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "(",
              "E",
              "*",
              "R",
              ")",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "E",
              "(",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "E",
              "*",
              "V",
              "!",
              "E",
              ")"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "E",
              "*",
              "L",
              "*",
              "E",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "D",
              "Z",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "D",
              "num",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "D",
              "V",
              "*",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "D",
              "V",
              "*",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "D",
              "V",
              "*"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "D",
              "Z",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "D",
              "(",
              "E",
              ")",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "D",
              "L",
              "!",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "D",
              "L",
              "!",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "D",
              "L",
              "!"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "R",
              "Z",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "R",
              "num",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "R",
              "V",
              "!",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "R",
              "V",
              "!",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "R",
              "V",
              "!"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "R",
              "Z",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "R",
              "(",
              "E",
              ")",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "R",
              "L",
              "*",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "R",
              "L",
              "*",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 7
          },
          {
            "production": [
              "R",
              "L",
              "*"
            ],
            "operation": "insert",
            "index": 8
          }
        ]
      },
      {
        "name": "expand",
        "production": 7,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 7
          },
          {
            "production": [
              "V"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "expand",
        "production": 9,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 9
          },
          {
            "production": [
              "L"
            ],
            "operation": "insert",
            "index": 9
          }
        ]
      },
      {
        "name": "expand",
        "production": 10,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 10
          },
          {
            "production": [
              "L",
              "(",
              "id",
              "+",
              "D",
              ")"
            ],
            "operation": "insert",
            "index": 10
          },
          {
            "production": [
              "L",
              "(",
              "(",
              "E",
              "*",
              "R",
              ")",
              ")"
            ],
            "operation": "insert",
            "index": 11
          },
          {
            "production": [
              "L",
              "(",
              ")"
            ],
            "operation": "insert",
            "index": 12
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 0,
        "symbol": 0,
        "changes": [
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "production": [
              "E",
              "E2"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "E"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "E2",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "E2",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "E",
              "id",
              "+",
              "V",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "E",
              "id",
              "+",
              "L",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "id",
              "+",
              "D",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "(",
              "E",
              "*",
              "R",
              ")",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "E",
              "(",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "E",
              "*",
              "V",
              "!",
              "E",
              ")"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "E",
              "(",
              "E",
              "*",
              "L",
              "*",
              "E",
              ")"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "D",
              "Z",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "D",
              "num",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "D",
              "V",
              "*",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "D",
              "V",
              "*",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "D",
              "V",
              "*"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "D",
              "Z",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "D",
              "(",
              "E",
              ")",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "D",
              "L",
              "!",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "D",
              "L",
              "!",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "D",
              "L",
              "!"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "R",
              "Z",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "R",
              "num",
              "!",
              "E"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "R",
              "V",
              "!",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "R",
              "V",
              "!",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "R",
              "V",
              "!"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "R",
              "Z",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "R",
              "(",
              "E",
              ")",
              "*",
              "E"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "R",
              "L",
              "*",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 6
          },
          {
            "production": [
              "R",
              "L",
              "*",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 7
          },
          {
            "production": [
              "R",
              "L",
              "*"
            ],
            "operation": "insert",
            "index": 8
          }
        ]
      },
      {
        "name": "expand",
        "production": 7,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 7
          },
          {
            "production": [
              "V"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "expand",
        "production": 9,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 9
          },
          {
            "production": [
              "L"
            ],
            "operation": "insert",
            "index": 9
          }
        ]
      },
      {
        "name": "expand",
        "production": 10,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 10
          },
          {
            "production": [
              "L",
              "(",
              "id",
              "+",
              "D",
              ")"
            ],
            "operation": "insert",
            "index": 10
          },
          {
            "production": [
              "L",
              "(",
              "(",
              "E",
              "*",
              "R",
              ")",
              ")"
            ],
            "operation": "insert",
            "index": 11
          },
          {
            "production": [
              "L",
              "(",
              ")"
            ],
            "operation": "insert",
            "index": 12
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 0,
        "symbol": 0,
        "changes": [
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "production": [
              "E",
              "E2"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "E"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "E2",
              "id",
              "+",
              "D"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "E2",
              "(",
              "E",
              "*",
              "R",
              ")"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ]
  },
  "ll1-slr1-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "A",
      "B"
    ],
    "grammar.terminals": [
      "c",
      "d",
      "n",
      "fo",
      "r"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "c",
        "d",
        "n",
        "fo",
        "r"
      ],
      "nonterminalOrder": [
        "A",
        "B"
      ],
      "productionOrder": [
        "A",
        "B"
      ],
      "nonterminals": [
        "A",
        "B"
      ],
      "terminals": [
        "c",
        "d",
        "n",
        "fo",
        "r"
      ]
    },
    "grammar.start": "A",
    "grammar.productions": [
      [
        "A",
        "B",
        "c"
      ],
      [
        "A",
        "d",
        "n",
        "A",
        "B",
        "fo"
      ],
      [
        "B",
        "r"
      ],
      [
        "B"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "B"
    ],
    "grammar.first": [
      [
        "A",
        "c"
      ],
      [
        "A",
        "d"
      ],
      [
        "A",
        "r"
      ],
      [
        "B",
        "r"
      ]
    ],
    "grammar.follow": [
      [
        "A",
        "Grammar.END"
      ],
      [
        "A",
        "r"
      ],
      [
        "A",
        "fo"
      ],
      [
        "B",
        "c"
      ],
      [
        "B",
        "fo"
      ]
    ],
    "grammar.endable": [
      "A"
    ],
    "grammar.sentences": [
      [
        "c"
      ],
      [
        "r",
        "c"
      ],
      [
        "d",
        "n",
        "c",
        "fo"
      ],
      [
        "d",
        "n",
        "r",
        "c",
        "fo"
      ],
      [
        "d",
        "n",
        "c",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "c",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "c",
        "r",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "c",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "c",
        "r",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "fo",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "fo",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "r",
        "fo",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "fo",
        "r",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "fo",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "fo",
        "r",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "fo",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "r",
        "fo",
        "r",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "r",
        "fo",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "fo",
        "r",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo",
        "r",
        "fo",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "fo",
        "r",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "c",
        "r",
        "fo",
        "r",
        "fo",
        "r",
        "fo"
      ],
      [
        "d",
        "n",
        "d",
        "n",
        "d",
        "n",
        "r",
        "c",
        "r",
        "fo",
        "r",
        "fo",
        "r",
        "fo"
      ]
    ],
    "grammar.symbols": [
      "A",
      "B",
      "c",
      "d",
      "n",
      "fo",
      "r"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "A": {
        "c": [
          0
        ],
        "d": [
          1
        ],
        "n": [],
        "fo": [],
        "r": [
          0
        ],
        "Grammar.END": []
      },
      "B": {
        "c": [
          3
        ],
        "d": [],
        "n": [],
        "fo": [
          3
        ],
        "r": [
          2
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "A": 1,
          "B": 2,
          "d": 3,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "c": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "n": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "A": 7,
          "B": 2,
          "d": 3,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "B": 8,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4
          }
        ],
        "transitions": {
          "fo": 9
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "A": 1,
          "B": 2,
          "d": 3,
          "r": 4
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "c": 5
        },
        "reduce": []
      },
      {
        "shift": {
          "n": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "A": 7,
          "B": 2,
          "d": 3,
          "r": 4
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {
          "B": 8,
          "r": 4
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {
          "fo": 9
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "A": {
          "shift": 1
        },
        "B": {
          "shift": 2
        },
        "d": {
          "shift": 3
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        },
        "fo": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "c": {
          "shift": 5
        }
      },
      {
        "n": {
          "shift": 6
        }
      },
      {
        "c": {
          "reduce": [
            2
          ]
        },
        "fo": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        },
        "r": {
          "reduce": [
            0
          ]
        },
        "fo": {
          "reduce": [
            0
          ]
        }
      },
      {
        "A": {
          "shift": 7
        },
        "B": {
          "shift": 2
        },
        "d": {
          "shift": 3
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        },
        "fo": {
          "reduce": [
            3
          ]
        }
      },
      {
        "B": {
          "shift": 8
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        },
        "fo": {
          "reduce": [
            3
          ]
        }
      },
      {
        "fo": {
          "shift": 9
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        },
        "r": {
          "reduce": [
            1
          ]
        },
        "fo": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "B": 2,
          "d": 3,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "c": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "n": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "c"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "c"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          }
        ],
        "transitions": {
          "A": 7,
          "B": 8,
          "d": 9,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "fo"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "fo"
            ]
          }
        ],
        "transitions": {
          "B": 10,
          "r": 11
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "transitions": {
          "c": 12
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "transitions": {
          "n": 13
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "fo": 14
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "fo"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          }
        ],
        "transitions": {
          "A": 15,
          "B": 8,
          "d": 9,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "fo"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "fo"
            ]
          }
        ],
        "transitions": {
          "B": 16,
          "r": 11
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "transitions": {
          "fo": 17
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "r",
              "fo"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "A": {
          "shift": 1
        },
        "B": {
          "shift": 2
        },
        "d": {
          "shift": 3
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "c": {
          "shift": 5
        }
      },
      {
        "n": {
          "shift": 6
        }
      },
      {
        "c": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "A": {
          "shift": 7
        },
        "B": {
          "shift": 8
        },
        "d": {
          "shift": 9
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        }
      },
      {
        "B": {
          "shift": 10
        },
        "r": {
          "shift": 11
        },
        "fo": {
          "reduce": [
            3
          ]
        }
      },
      {
        "c": {
          "shift": 12
        }
      },
      {
        "n": {
          "shift": 13
        }
      },
      {
        "fo": {
          "shift": 14
        }
      },
      {
        "fo": {
          "reduce": [
            2
          ]
        }
      },
      {
        "r": {
          "reduce": [
            0
          ]
        },
        "fo": {
          "reduce": [
            0
          ]
        }
      },
      {
        "A": {
          "shift": 15
        },
        "B": {
          "shift": 8
        },
        "d": {
          "shift": 9
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "B": {
          "shift": 16
        },
        "r": {
          "shift": 11
        },
        "fo": {
          "reduce": [
            3
          ]
        }
      },
      {
        "fo": {
          "shift": 17
        }
      },
      {
        "r": {
          "reduce": [
            1
          ]
        },
        "fo": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "A": 1,
          "B": 2,
          "d": 3,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "c": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "n": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "fo",
              "c"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "fo",
              "c"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "r",
              "fo"
            ]
          },
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "c"
            ]
          }
        ],
        "transitions": {
          "A": 7,
          "B": 2,
          "d": 3,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "fo"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "fo"
            ]
          }
        ],
        "transitions": {
          "B": 8,
          "r": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "fo": 9
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 5,
            "lookaheads": [
              "r",
              "fo",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "A": {
          "shift": 1
        },
        "B": {
          "shift": 2
        },
        "d": {
          "shift": 3
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "c": {
          "shift": 5
        }
      },
      {
        "n": {
          "shift": 6
        }
      },
      {
        "fo": {
          "reduce": [
            2
          ]
        },
        "c": {
          "reduce": [
            2
          ]
        }
      },
      {
        "r": {
          "reduce": [
            0
          ]
        },
        "fo": {
          "reduce": [
            0
          ]
        },
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "A": {
          "shift": 7
        },
        "B": {
          "shift": 2
        },
        "d": {
          "shift": 3
        },
        "r": {
          "shift": 4
        },
        "c": {
          "reduce": [
            3
          ]
        }
      },
      {
        "B": {
          "shift": 8
        },
        "r": {
          "shift": 4
        },
        "fo": {
          "reduce": [
            3
          ]
        }
      },
      {
        "fo": {
          "shift": 9
        }
      },
      {
        "r": {
          "reduce": [
            1
          ]
        },
        "fo": {
          "reduce": [
            1
          ]
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "r",
              "c"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "A",
              "c"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "B",
              "c",
              "B",
              "fo"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "d",
              "n",
              "A",
              "B",
              "fo",
              "B",
              "fo"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "A",
              "r",
              "fo"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "A",
              "fo"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "B",
              "B2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "B"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "B2",
              "r"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "A",
              "r",
              "c"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "A",
              "c"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "B",
              "c",
              "B",
              "fo"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "d",
              "n",
              "A",
              "B",
              "fo",
              "B",
              "fo"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 4,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "A",
              "r",
              "fo"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "A",
              "d",
              "n",
              "A",
              "fo"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "B",
              "B2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "B"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "B2",
              "r"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ]
  },
  "ll1-slr1-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "ExprOpt"
    ],
    "grammar.terminals": [
      "for",
      "(",
      ";",
      ")",
      "expr"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "for",
        "(",
        ";",
        ")",
        "expr"
      ],
      "nonterminalOrder": [
        "S",
        "ExprOpt"
      ],
      "productionOrder": [
        "S",
        "ExprOpt"
      ],
      "nonterminals": [
        "S",
        "ExprOpt"
      ],
      "terminals": [
        "for",
        "(",
        ";",
        ")",
        "expr"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "for",
        "(",
        "ExprOpt",
        ";",
        "ExprOpt",
        ";",
        "ExprOpt",
        ")",
        "S"
      ],
      [
        "S",
        "expr",
        ";"
      ],
      [
        "ExprOpt",
        "expr"
      ],
      [
        "ExprOpt"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "ExprOpt"
    ],
    "grammar.first": [
      [
        "S",
        "for"
      ],
      [
        "S",
        "expr"
      ],
      [
        "ExprOpt",
        "expr"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "ExprOpt",
        ";"
      ],
      [
        "ExprOpt",
        ")"
      ]
    ],
    "grammar.endable": [
      "S"
    ],
    "grammar.sentences": [
      [
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        "expr",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "for",
        "(",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        ")",
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ],
      [
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "for",
        "(",
        "expr",
        ";",
        "expr",
        ";",
        "expr",
        ")",
        "expr",
        ";"
      ]
    ],
    "grammar.symbols": [
      "S",
      "for",
      "(",
      "ExprOpt",
      ";",
      ")",
      "expr"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "S": {
        "for": [
          0
        ],
        "(": [],
        ";": [],
        ")": [],
        "expr": [
          1
        ],
        "Grammar.END": []
      },
      "ExprOpt": {
        "for": [],
        "(": [],
        ";": [
          3
        ],
        ")": [
          3
        ],
        "expr": [
          2
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "for": 2,
          "expr": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "(": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          ";": 5
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "ExprOpt": 6,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {
          ";": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "ExprOpt": 9,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 5
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 5
          }
        ],
        "transitions": {
          ";": 10
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 6
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 6
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "ExprOpt": 11,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 7
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 7
          }
        ],
        "transitions": {
          ")": 12
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 8
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 8
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "S": 13,
          "for": 2,
          "expr": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 9
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 9
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "for": 2,
          "expr": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "(": 4
        },
        "reduce": []
      },
      {
        "shift": {
          ";": 5
        },
        "reduce": []
      },
      {
        "shift": {
          "ExprOpt": 6,
          "expr": 7
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          ";": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "ExprOpt": 9,
          "expr": 7
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {
          ";": 10
        },
        "reduce": []
      },
      {
        "shift": {
          "ExprOpt": 11,
          "expr": 7
        },
        "reduce": [
          3
        ]
      },
      {
        "shift": {
          ")": 12
        },
        "reduce": []
      },
      {
        "shift": {
          "S": 13,
          "for": 2,
          "expr": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "for": {
          "shift": 2
        },
        "expr": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "(": {
          "shift": 4
        }
      },
      {
        ";": {
          "shift": 5
        }
      },
      {
        "ExprOpt": {
          "shift": 6
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ";": {
          "shift": 8
        }
      },
      {
        ";": {
          "reduce": [
            2
          ]
        },
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "ExprOpt": {
          "shift": 9
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        ";": {
          "shift": 10
        }
      },
      {
        "ExprOpt": {
          "shift": 11
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        },
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        ")": {
          "shift": 12
        }
      },
      {
        "S": {
          "shift": 13
        },
        "for": {
          "shift": 2
        },
        "expr": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "for": 2,
          "expr": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "(": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ";": 5
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          }
        ],
        "transitions": {
          "ExprOpt": 6,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ";": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ";"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ";"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          }
        ],
        "transitions": {
          "ExprOpt": 9,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ";": 10
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 6,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 6,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "ExprOpt": 11,
          "expr": 12
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 7,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 7,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 13
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 8,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 0,
            "index": 8,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 14,
          "for": 2,
          "expr": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 9,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 9,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "for": {
          "shift": 2
        },
        "expr": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "(": {
          "shift": 4
        }
      },
      {
        ";": {
          "shift": 5
        }
      },
      {
        "ExprOpt": {
          "shift": 6
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ";": {
          "shift": 8
        }
      },
      {
        ";": {
          "reduce": [
            2
          ]
        }
      },
      {
        "ExprOpt": {
          "shift": 9
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        }
      },
      {
        ";": {
          "shift": 10
        }
      },
      {
        "ExprOpt": {
          "shift": 11
        },
        "expr": {
          "shift": 12
        },
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        ")": {
          "shift": 13
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        }
      },
      {
        "S": {
          "shift": 14
        },
        "for": {
          "shift": 2
        },
        "expr": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "for": 2,
          "expr": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "(": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ";": 5
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          }
        ],
        "transitions": {
          "ExprOpt": 6,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ";": 8
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")",
              ";"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              ")",
              ";"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ";"
            ]
          }
        ],
        "transitions": {
          "ExprOpt": 9,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 5,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ";": 10
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 6,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 6,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              ")"
            ]
          }
        ],
        "transitions": {
          "ExprOpt": 11,
          "expr": 7
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 7,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 7,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 12
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 8,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 0,
            "index": 8,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 13,
          "for": 2,
          "expr": 3
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 9,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 9,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "for": {
          "shift": 2
        },
        "expr": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "(": {
          "shift": 4
        }
      },
      {
        ";": {
          "shift": 5
        }
      },
      {
        "ExprOpt": {
          "shift": 6
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ";": {
          "shift": 8
        }
      },
      {
        ")": {
          "reduce": [
            2
          ]
        },
        ";": {
          "reduce": [
            2
          ]
        }
      },
      {
        "ExprOpt": {
          "shift": 9
        },
        "expr": {
          "shift": 7
        },
        ";": {
          "reduce": [
            3
          ]
        }
      },
      {
        ";": {
          "shift": 10
        }
      },
      {
        "ExprOpt": {
          "shift": 11
        },
        "expr": {
          "shift": 7
        },
        ")": {
          "reduce": [
            3
          ]
        }
      },
      {
        ")": {
          "shift": 12
        }
      },
      {
        "S": {
          "shift": 13
        },
        "for": {
          "shift": 2
        },
        "expr": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "expr",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 5,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "expr",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 7,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "expr",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 9,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "expr",
              ";"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "ExprOpt",
              "ExprOpt2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "ExprOpt"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "ExprOpt2",
              "expr"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "expr",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 5,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "expr",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 7,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "expr",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 9,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "S"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "for",
              "(",
              "ExprOpt",
              ";",
              "ExprOpt",
              ";",
              "ExprOpt",
              ")",
              "expr",
              ";"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 2,
        "symbol": 0,
        "changes": [
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "index": 2,
            "operation": "delete"
          },
          {
            "production": [
              "ExprOpt",
              "ExprOpt2"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "ExprOpt"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "ExprOpt2",
              "expr"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      }
    ]
  },
  "ll1-slr1-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": true
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "Decl",
      "DeclSpecifiers",
      "DeclSpecifiersOpt",
      "StorageClassSpecifier",
      "TypeSpecifier",
      "TypeQualifier",
      "Declarator",
      "DirectDeclarator",
      "PointerOpt",
      "TypeQualifierList"
    ],
    "grammar.terminals": [
      "typedef",
      "static",
      "void",
      "short",
      "int",
      "const",
      "volatile",
      "id",
      "*"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "typedef",
        "static",
        "void",
        "short",
        "int",
        "const",
        "volatile",
        "id",
        "*"
      ],
      "nonterminalOrder": [
        "Decl",
        "DeclSpecifiers",
        "Declarator",
        "StorageClassSpecifier",
        "DeclSpecifiersOpt",
        "TypeSpecifier",
        "TypeQualifier",
        "PointerOpt",
        "DirectDeclarator",
        "TypeQualifierList"
      ],
      "productionOrder": [
        "Decl",
        "DeclSpecifiers",
        "DeclSpecifiersOpt",
        "StorageClassSpecifier",
        "TypeSpecifier",
        "TypeQualifier",
        "Declarator",
        "DirectDeclarator",
        "PointerOpt",
        "TypeQualifierList"
      ],
      "nonterminals": [
        "Decl",
        "DeclSpecifiers",
        "DeclSpecifiersOpt",
        "StorageClassSpecifier",
        "TypeSpecifier",
        "TypeQualifier",
        "Declarator",
        "DirectDeclarator",
        "PointerOpt",
        "TypeQualifierList"
      ],
      "terminals": [
        "typedef",
        "static",
        "void",
        "short",
        "int",
        "const",
        "volatile",
        "id",
        "*"
      ]
    },
    "grammar.start": "Decl",
    "grammar.productions": [
      [
        "Decl",
        "DeclSpecifiers",
        "Declarator"
      ],
      [
        "DeclSpecifiers",
        "StorageClassSpecifier",
        "DeclSpecifiersOpt"
      ],
      [
        "DeclSpecifiers",
        "TypeSpecifier",
        "DeclSpecifiersOpt"
      ],
      [
        "DeclSpecifiers",
        "TypeQualifier",
        "DeclSpecifiersOpt"
      ],
      [
        "DeclSpecifiersOpt",
        "DeclSpecifiers"
      ],
      [
        "DeclSpecifiersOpt"
      ],
      [
        "StorageClassSpecifier",
        "typedef"
      ],
      [
        "StorageClassSpecifier",
        "static"
      ],
      [
        "TypeSpecifier",
        "void"
      ],
      [
        "TypeSpecifier",
        "short"
      ],
      [
        "TypeSpecifier",
        "int"
      ],
      [
        "TypeQualifier",
        "const"
      ],
      [
        "TypeQualifier",
        "volatile"
      ],
      [
        "Declarator",
        "PointerOpt",
        "DirectDeclarator"
      ],
      [
        "DirectDeclarator",
        "id"
      ],
      [
        "PointerOpt",
        "*",
        "TypeQualifierList",
        "PointerOpt"
      ],
      [
        "PointerOpt"
      ],
      [
        "TypeQualifierList",
        "TypeQualifier",
        "TypeQualifierList"
      ],
      [
        "TypeQualifierList"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "DeclSpecifiersOpt",
      "PointerOpt",
      "TypeQualifierList"
    ],
    "grammar.first": [
      [
        "StorageClassSpecifier",
        "typedef"
      ],
      [
        "StorageClassSpecifier",
        "static"
      ],
      [
        "TypeSpecifier",
        "void"
      ],
      [
        "TypeSpecifier",
        "short"
      ],
      [
        "TypeSpecifier",
        "int"
      ],
      [
        "TypeQualifier",
        "const"
      ],
      [
        "TypeQualifier",
        "volatile"
      ],
      [
        "DirectDeclarator",
        "id"
      ],
      [
        "PointerOpt",
        "*"
      ],
      [
        "Decl",
        "typedef"
      ],
      [
        "Decl",
        "static"
      ],
      [
        "Decl",
        "void"
      ],
      [
        "Decl",
        "short"
      ],
      [
        "Decl",
        "int"
      ],
      [
        "Decl",
        "const"
      ],
      [
        "Decl",
        "volatile"
      ],
      [
        "DeclSpecifiers",
        "typedef"
      ],
      [
        "DeclSpecifiers",
        "static"
      ],
      [
        "DeclSpecifiers",
        "void"
      ],
      [
        "DeclSpecifiers",
        "short"
      ],
      [
        "DeclSpecifiers",
        "int"
      ],
      [
        "DeclSpecifiers",
        "const"
      ],
      [
        "DeclSpecifiers",
        "volatile"
      ],
      [
        "DeclSpecifiersOpt",
        "typedef"
      ],
      [
        "DeclSpecifiersOpt",
        "static"
      ],
      [
        "DeclSpecifiersOpt",
        "void"
      ],
      [
        "DeclSpecifiersOpt",
        "short"
      ],
      [
        "DeclSpecifiersOpt",
        "int"
      ],
      [
        "DeclSpecifiersOpt",
        "const"
      ],
      [
        "DeclSpecifiersOpt",
        "volatile"
      ],
      [
        "Declarator",
        "*"
      ],
      [
        "Declarator",
        "id"
      ],
      [
        "TypeQualifierList",
        "const"
      ],
      [
        "TypeQualifierList",
        "volatile"
      ]
    ],
    "grammar.follow": [
      [
        "Decl",
        "Grammar.END"
      ],
      [
        "DeclSpecifiers",
        "*"
      ],
      [
        "DeclSpecifiers",
        "id"
      ],
      [
        "StorageClassSpecifier",
        "typedef"
      ],
      [
        "StorageClassSpecifier",
        "static"
      ],
      [
        "StorageClassSpecifier",
        "void"
      ],
      [
        "StorageClassSpecifier",
        "short"
      ],
      [
        "StorageClassSpecifier",
        "int"
      ],
      [
        "StorageClassSpecifier",
        "const"
      ],
      [
        "StorageClassSpecifier",
        "volatile"
      ],
      [
        "StorageClassSpecifier",
        "*"
      ],
      [
        "StorageClassSpecifier",
        "id"
      ],
      [
        "TypeSpecifier",
        "typedef"
      ],
      [
        "TypeSpecifier",
        "static"
      ],
      [
        "TypeSpecifier",
        "void"
      ],
      [
        "TypeSpecifier",
        "short"
      ],
      [
        "TypeSpecifier",
        "int"
      ],
      [
        "TypeSpecifier",
        "const"
      ],
      [
        "TypeSpecifier",
        "volatile"
      ],
      [
        "TypeSpecifier",
        "*"
      ],
      [
        "TypeSpecifier",
        "id"
      ],
      [
        "TypeQualifier",
        "typedef"
      ],
      [
        "TypeQualifier",
        "static"
      ],
      [
        "TypeQualifier",
        "void"
      ],
      [
        "TypeQualifier",
        "short"
      ],
      [
        "TypeQualifier",
        "int"
      ],
      [
        "TypeQualifier",
        "const"
      ],
      [
        "TypeQualifier",
        "volatile"
      ],
      [
        "TypeQualifier",
        "*"
      ],
      [
        "TypeQualifier",
        "id"
      ],
      [
        "PointerOpt",
        "id"
      ],
      [
        "TypeQualifierList",
        "*"
      ],
      [
        "TypeQualifierList",
        "id"
      ],
      [
        "Declarator",
        "Grammar.END"
      ],
      [
        "DeclSpecifiersOpt",
        "*"
      ],
      [
        "DeclSpecifiersOpt",
        "id"
      ],
      [
        "DirectDeclarator",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "Decl",
      "Declarator",
      "DirectDeclarator"
    ],
    "grammar.sentences": [
      [
        "typedef",
        "id"
      ],
      [
        "static",
        "id"
      ],
      [
        "void",
        "id"
      ],
      [
        "short",
        "id"
      ],
      [
        "int",
        "id"
      ],
      [
        "const",
        "id"
      ],
      [
        "volatile",
        "id"
      ]
    ],
    "grammar.symbols": [
      "Decl",
      "DeclSpecifiers",
      "Declarator",
      "StorageClassSpecifier",
      "DeclSpecifiersOpt",
      "TypeSpecifier",
      "TypeQualifier",
      "typedef",
      "static",
      "void",
      "short",
      "int",
      "const",
      "volatile",
      "PointerOpt",
      "DirectDeclarator",
      "id",
      "*",
      "TypeQualifierList"
    ],
    "parsing.ll.ll1_classification": {
      "member": true
    },
    "parsing.ll.ll1_table": {
      "Decl": {
        "typedef": [
          0
        ],
        "static": [
          0
        ],
        "void": [
          0
        ],
        "short": [
          0
        ],
        "int": [
          0
        ],
        "const": [
          0
        ],
        "volatile": [
          0
        ],
        "id": [],
        "*": [],
        "Grammar.END": []
      },
      "DeclSpecifiers": {
        "typedef": [
          1
        ],
        "static": [
          1
        ],
        "void": [
          2
        ],
        "short": [
          2
        ],
        "int": [
          2
        ],
        "const": [
          3
        ],
        "volatile": [
          3
        ],
        "id": [],
        "*": [],
        "Grammar.END": []
      },
      "DeclSpecifiersOpt": {
        "typedef": [
          4
        ],
        "static": [
          4
        ],
        "void": [
          4
        ],
        "short": [
          4
        ],
        "int": [
          4
        ],
        "const": [
          4
        ],
        "volatile": [
          4
        ],
        "id": [
          5
        ],
        "*": [
          5
        ],
        "Grammar.END": []
      },
      "StorageClassSpecifier": {
        "typedef": [
          6
        ],
        "static": [
          7
        ],
        "void": [],
        "short": [],
        "int": [],
        "const": [],
        "volatile": [],
        "id": [],
        "*": [],
        "Grammar.END": []
      },
      "TypeSpecifier": {
        "typedef": [],
        "static": [],
        "void": [
          8
        ],
        "short": [
          9
        ],
        "int": [
          10
        ],
        "const": [],
        "volatile": [],
        "id": [],
        "*": [],
        "Grammar.END": []
      },
      "TypeQualifier": {
        "typedef": [],
        "static": [],
        "void": [],
        "short": [],
        "int": [],
        "const": [
          11
        ],
        "volatile": [
          12
        ],
        "id": [],
        "*": [],
        "Grammar.END": []
      },
      "Declarator": {
        "typedef": [],
        "static": [],
        "void": [],
        "short": [],
        "int": [],
        "const": [],
        "volatile": [],
        "id": [
          13
        ],
        "*": [
          13
        ],
        "Grammar.END": []
      },
      "DirectDeclarator": {
        "typedef": [],
        "static": [],
        "void": [],
        "short": [],
        "int": [],
        "const": [],
        "volatile": [],
        "id": [
          14
        ],
        "*": [],
        "Grammar.END": []
      },
      "PointerOpt": {
        "typedef": [],
        "static": [],
        "void": [],
        "short": [],
        "int": [],
        "const": [],
        "volatile": [],
        "id": [
          16
        ],
        "*": [
          15
        ],
        "Grammar.END": []
      },
      "TypeQualifierList": {
        "typedef": [],
        "static": [],
        "void": [],
        "short": [],
        "int": [],
        "const": [
          17
        ],
        "volatile": [
          17
        ],
        "id": [
          18
        ],
        "*": [
          18
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          },
          {
            "production": 12,
            "index": 0
          }
        ],
        "transitions": {
          "Decl": 1,
          "DeclSpecifiers": 2,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 13,
            "index": 0
          },
          {
            "production": 15,
            "index": 0
          },
          {
            "production": 16,
            "index": 0
          }
        ],
        "transitions": {
          "Declarator": 13,
          "PointerOpt": 14,
          "*": 15
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          },
          {
            "production": 12,
            "index": 0
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 16,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          },
          {
            "production": 12,
            "index": 0
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 18,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          },
          {
            "production": 12,
            "index": 0
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 19,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 9,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 9,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 11,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 12,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 12,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 13,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 13,
            "index": 1
          },
          {
            "production": 14,
            "index": 0
          }
        ],
        "transitions": {
          "DirectDeclarator": 20,
          "id": 21
        }
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 1
          },
          {
            "production": 17,
            "index": 0
          },
          {
            "production": 18,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          },
          {
            "production": 12,
            "index": 0
          }
        ],
        "transitions": {
          "TypeQualifierList": 22,
          "TypeQualifier": 23,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 13,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 13,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 14,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 14,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 2
          },
          {
            "production": 15,
            "index": 0
          },
          {
            "production": 16,
            "index": 0
          }
        ],
        "transitions": {
          "PointerOpt": 24,
          "*": 15
        }
      },
      {
        "kernel": [
          {
            "production": 17,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 17,
            "index": 1
          },
          {
            "production": 17,
            "index": 0
          },
          {
            "production": 18,
            "index": 0
          },
          {
            "production": 11,
            "index": 0
          },
          {
            "production": 12,
            "index": 0
          }
        ],
        "transitions": {
          "TypeQualifierList": 25,
          "TypeQualifier": 23,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 17,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 17,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "Decl": 1,
          "DeclSpecifiers": 2,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "Declarator": 13,
          "PointerOpt": 14,
          "*": 15
        },
        "reduce": [
          16
        ]
      },
      {
        "shift": {
          "DeclSpecifiersOpt": 16,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        },
        "reduce": [
          5
        ]
      },
      {
        "shift": {
          "DeclSpecifiersOpt": 18,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        },
        "reduce": [
          5
        ]
      },
      {
        "shift": {
          "DeclSpecifiersOpt": 19,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        },
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          6
        ]
      },
      {
        "shift": {},
        "reduce": [
          7
        ]
      },
      {
        "shift": {},
        "reduce": [
          8
        ]
      },
      {
        "shift": {},
        "reduce": [
          9
        ]
      },
      {
        "shift": {},
        "reduce": [
          10
        ]
      },
      {
        "shift": {},
        "reduce": [
          11
        ]
      },
      {
        "shift": {},
        "reduce": [
          12
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "DirectDeclarator": 20,
          "id": 21
        },
        "reduce": []
      },
      {
        "shift": {
          "TypeQualifierList": 22,
          "TypeQualifier": 23,
          "const": 11,
          "volatile": 12
        },
        "reduce": [
          18
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          13
        ]
      },
      {
        "shift": {},
        "reduce": [
          14
        ]
      },
      {
        "shift": {
          "PointerOpt": 24,
          "*": 15
        },
        "reduce": [
          16
        ]
      },
      {
        "shift": {
          "TypeQualifierList": 25,
          "TypeQualifier": 23,
          "const": 11,
          "volatile": 12
        },
        "reduce": [
          18
        ]
      },
      {
        "shift": {},
        "reduce": [
          15
        ]
      },
      {
        "shift": {},
        "reduce": [
          17
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "Decl": {
          "shift": 1
        },
        "DeclSpecifiers": {
          "shift": 2
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Declarator": {
          "shift": 13
        },
        "PointerOpt": {
          "shift": 14
        },
        "*": {
          "shift": 15
        },
        "id": {
          "reduce": [
            16
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 16
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 18
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 19
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            6
          ]
        },
        "static": {
          "reduce": [
            6
          ]
        },
        "void": {
          "reduce": [
            6
          ]
        },
        "short": {
          "reduce": [
            6
          ]
        },
        "int": {
          "reduce": [
            6
          ]
        },
        "const": {
          "reduce": [
            6
          ]
        },
        "volatile": {
          "reduce": [
            6
          ]
        },
        "*": {
          "reduce": [
            6
          ]
        },
        "id": {
          "reduce": [
            6
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            7
          ]
        },
        "static": {
          "reduce": [
            7
          ]
        },
        "void": {
          "reduce": [
            7
          ]
        },
        "short": {
          "reduce": [
            7
          ]
        },
        "int": {
          "reduce": [
            7
          ]
        },
        "const": {
          "reduce": [
            7
          ]
        },
        "volatile": {
          "reduce": [
            7
          ]
        },
        "*": {
          "reduce": [
            7
          ]
        },
        "id": {
          "reduce": [
            7
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            8
          ]
        },
        "static": {
          "reduce": [
            8
          ]
        },
        "void": {
          "reduce": [
            8
          ]
        },
        "short": {
          "reduce": [
            8
          ]
        },
        "int": {
          "reduce": [
            8
          ]
        },
        "const": {
          "reduce": [
            8
          ]
        },
        "volatile": {
          "reduce": [
            8
          ]
        },
        "*": {
          "reduce": [
            8
          ]
        },
        "id": {
          "reduce": [
            8
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            9
          ]
        },
        "static": {
          "reduce": [
            9
          ]
        },
        "void": {
          "reduce": [
            9
          ]
        },
        "short": {
          "reduce": [
            9
          ]
        },
        "int": {
          "reduce": [
            9
          ]
        },
        "const": {
          "reduce": [
            9
          ]
        },
        "volatile": {
          "reduce": [
            9
          ]
        },
        "*": {
          "reduce": [
            9
          ]
        },
        "id": {
          "reduce": [
            9
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            10
          ]
        },
        "static": {
          "reduce": [
            10
          ]
        },
        "void": {
          "reduce": [
            10
          ]
        },
        "short": {
          "reduce": [
            10
          ]
        },
        "int": {
          "reduce": [
            10
          ]
        },
        "const": {
          "reduce": [
            10
          ]
        },
        "volatile": {
          "reduce": [
            10
          ]
        },
        "*": {
          "reduce": [
            10
          ]
        },
        "id": {
          "reduce": [
            10
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            11
          ]
        },
        "static": {
          "reduce": [
            11
          ]
        },
        "void": {
          "reduce": [
            11
          ]
        },
        "short": {
          "reduce": [
            11
          ]
        },
        "int": {
          "reduce": [
            11
          ]
        },
        "const": {
          "reduce": [
            11
          ]
        },
        "volatile": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "id": {
          "reduce": [
            11
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            12
          ]
        },
        "static": {
          "reduce": [
            12
          ]
        },
        "void": {
          "reduce": [
            12
          ]
        },
        "short": {
          "reduce": [
            12
          ]
        },
        "int": {
          "reduce": [
            12
          ]
        },
        "const": {
          "reduce": [
            12
          ]
        },
        "volatile": {
          "reduce": [
            12
          ]
        },
        "*": {
          "reduce": [
            12
          ]
        },
        "id": {
          "reduce": [
            12
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "DirectDeclarator": {
          "shift": 20
        },
        "id": {
          "shift": 21
        }
      },
      {
        "TypeQualifierList": {
          "shift": 22
        },
        "TypeQualifier": {
          "shift": 23
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            18
          ]
        },
        "id": {
          "reduce": [
            18
          ]
        }
      },
      {
        "*": {
          "reduce": [
            1
          ]
        },
        "id": {
          "reduce": [
            1
          ]
        }
      },
      {
        "*": {
          "reduce": [
            4
          ]
        },
        "id": {
          "reduce": [
            4
          ]
        }
      },
      {
        "*": {
          "reduce": [
            2
          ]
        },
        "id": {
          "reduce": [
            2
          ]
        }
      },
      {
        "*": {
          "reduce": [
            3
          ]
        },
        "id": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            13
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            14
          ]
        }
      },
      {
        "PointerOpt": {
          "shift": 24
        },
        "*": {
          "shift": 15
        },
        "id": {
          "reduce": [
            16
          ]
        }
      },
      {
        "TypeQualifierList": {
          "shift": 25
        },
        "TypeQualifier": {
          "shift": 23
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            18
          ]
        },
        "id": {
          "reduce": [
            18
          ]
        }
      },
      {
        "id": {
          "reduce": [
            15
          ]
        }
      },
      {
        "*": {
          "reduce": [
            17
          ]
        },
        "id": {
          "reduce": [
            17
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Decl": 1,
          "DeclSpecifiers": 2,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 13,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 15,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 16,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "transitions": {
          "Declarator": 13,
          "PointerOpt": 14,
          "*": 15
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 16,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 18,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 19,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 11,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 12,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 12,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 13,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 13,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 14,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "DirectDeclarator": 20,
          "id": 21
        }
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 1,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 15,
            "index": 1,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 17,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 18,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "TypeQualifierList": 22,
          "TypeQualifier": 23,
          "const": 24,
          "volatile": 25
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 13,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 13,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 14,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 14,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 2,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 15,
            "index": 2,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 16,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "transitions": {
          "PointerOpt": 26,
          "*": 15
        }
      },
      {
        "kernel": [
          {
            "production": 17,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 17,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 17,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 18,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "TypeQualifierList": 27,
          "TypeQualifier": 23,
          "const": 24,
          "volatile": 25
        }
      },
      {
        "kernel": [
          {
            "production": 11,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 12,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 12,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 3,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 3,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 17,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 17,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "Decl": {
          "shift": 1
        },
        "DeclSpecifiers": {
          "shift": 2
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Declarator": {
          "shift": 13
        },
        "PointerOpt": {
          "shift": 14
        },
        "*": {
          "shift": 15
        },
        "id": {
          "reduce": [
            16
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 16
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 18
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 19
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            6
          ]
        },
        "static": {
          "reduce": [
            6
          ]
        },
        "void": {
          "reduce": [
            6
          ]
        },
        "short": {
          "reduce": [
            6
          ]
        },
        "int": {
          "reduce": [
            6
          ]
        },
        "const": {
          "reduce": [
            6
          ]
        },
        "volatile": {
          "reduce": [
            6
          ]
        },
        "*": {
          "reduce": [
            6
          ]
        },
        "id": {
          "reduce": [
            6
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            7
          ]
        },
        "static": {
          "reduce": [
            7
          ]
        },
        "void": {
          "reduce": [
            7
          ]
        },
        "short": {
          "reduce": [
            7
          ]
        },
        "int": {
          "reduce": [
            7
          ]
        },
        "const": {
          "reduce": [
            7
          ]
        },
        "volatile": {
          "reduce": [
            7
          ]
        },
        "*": {
          "reduce": [
            7
          ]
        },
        "id": {
          "reduce": [
            7
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            8
          ]
        },
        "static": {
          "reduce": [
            8
          ]
        },
        "void": {
          "reduce": [
            8
          ]
        },
        "short": {
          "reduce": [
            8
          ]
        },
        "int": {
          "reduce": [
            8
          ]
        },
        "const": {
          "reduce": [
            8
          ]
        },
        "volatile": {
          "reduce": [
            8
          ]
        },
        "*": {
          "reduce": [
            8
          ]
        },
        "id": {
          "reduce": [
            8
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            9
          ]
        },
        "static": {
          "reduce": [
            9
          ]
        },
        "void": {
          "reduce": [
            9
          ]
        },
        "short": {
          "reduce": [
            9
          ]
        },
        "int": {
          "reduce": [
            9
          ]
        },
        "const": {
          "reduce": [
            9
          ]
        },
        "volatile": {
          "reduce": [
            9
          ]
        },
        "*": {
          "reduce": [
            9
          ]
        },
        "id": {
          "reduce": [
            9
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            10
          ]
        },
        "static": {
          "reduce": [
            10
          ]
        },
        "void": {
          "reduce": [
            10
          ]
        },
        "short": {
          "reduce": [
            10
          ]
        },
        "int": {
          "reduce": [
            10
          ]
        },
        "const": {
          "reduce": [
            10
          ]
        },
        "volatile": {
          "reduce": [
            10
          ]
        },
        "*": {
          "reduce": [
            10
          ]
        },
        "id": {
          "reduce": [
            10
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            11
          ]
        },
        "static": {
          "reduce": [
            11
          ]
        },
        "void": {
          "reduce": [
            11
          ]
        },
        "short": {
          "reduce": [
            11
          ]
        },
        "int": {
          "reduce": [
            11
          ]
        },
        "const": {
          "reduce": [
            11
          ]
        },
        "volatile": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "id": {
          "reduce": [
            11
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            12
          ]
        },
        "static": {
          "reduce": [
            12
          ]
        },
        "void": {
          "reduce": [
            12
          ]
        },
        "short": {
          "reduce": [
            12
          ]
        },
        "int": {
          "reduce": [
            12
          ]
        },
        "const": {
          "reduce": [
            12
          ]
        },
        "volatile": {
          "reduce": [
            12
          ]
        },
        "*": {
          "reduce": [
            12
          ]
        },
        "id": {
          "reduce": [
            12
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "DirectDeclarator": {
          "shift": 20
        },
        "id": {
          "shift": 21
        }
      },
      {
        "TypeQualifierList": {
          "shift": 22
        },
        "TypeQualifier": {
          "shift": 23
        },
        "const": {
          "shift": 24
        },
        "volatile": {
          "shift": 25
        },
        "*": {
          "reduce": [
            18
          ]
        },
        "id": {
          "reduce": [
            18
          ]
        }
      },
      {
        "*": {
          "reduce": [
            1
          ]
        },
        "id": {
          "reduce": [
            1
          ]
        }
      },
      {
        "*": {
          "reduce": [
            4
          ]
        },
        "id": {
          "reduce": [
            4
          ]
        }
      },
      {
        "*": {
          "reduce": [
            2
          ]
        },
        "id": {
          "reduce": [
            2
          ]
        }
      },
      {
        "*": {
          "reduce": [
            3
          ]
        },
        "id": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            13
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            14
          ]
        }
      },
      {
        "PointerOpt": {
          "shift": 26
        },
        "*": {
          "shift": 15
        },
        "id": {
          "reduce": [
            16
          ]
        }
      },
      {
        "TypeQualifierList": {
          "shift": 27
        },
        "TypeQualifier": {
          "shift": 23
        },
        "const": {
          "shift": 24
        },
        "volatile": {
          "shift": 25
        },
        "*": {
          "reduce": [
            18
          ]
        },
        "id": {
          "reduce": [
            18
          ]
        }
      },
      {
        "const": {
          "reduce": [
            11
          ]
        },
        "volatile": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "id": {
          "reduce": [
            11
          ]
        }
      },
      {
        "const": {
          "reduce": [
            12
          ]
        },
        "volatile": {
          "reduce": [
            12
          ]
        },
        "*": {
          "reduce": [
            12
          ]
        },
        "id": {
          "reduce": [
            12
          ]
        }
      },
      {
        "id": {
          "reduce": [
            15
          ]
        }
      },
      {
        "*": {
          "reduce": [
            17
          ]
        },
        "id": {
          "reduce": [
            17
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Decl": 1,
          "DeclSpecifiers": 2,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 13,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 15,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 16,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "transitions": {
          "Declarator": 13,
          "PointerOpt": 14,
          "*": 15
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 16,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 18,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "DeclSpecifiersOpt": 19,
          "DeclSpecifiers": 17,
          "StorageClassSpecifier": 3,
          "TypeSpecifier": 4,
          "TypeQualifier": 5,
          "typedef": 6,
          "static": 7,
          "void": 8,
          "short": 9,
          "int": 10,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 10,
            "index": 1,
            "lookaheads": [
              "typedef",
              "static",
              "void",
              "short",
              "int",
              "const",
              "volatile",
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 11,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id",
              "typedef",
              "static",
              "void",
              "short",
              "int"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id",
              "typedef",
              "static",
              "void",
              "short",
              "int"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 12,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id",
              "typedef",
              "static",
              "void",
              "short",
              "int"
            ]
          }
        ],
        "items": [
          {
            "production": 12,
            "index": 1,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id",
              "typedef",
              "static",
              "void",
              "short",
              "int"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 13,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 13,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 14,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "DirectDeclarator": 20,
          "id": 21
        }
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 1,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 15,
            "index": 1,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 17,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 18,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "TypeQualifierList": 22,
          "TypeQualifier": 23,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 13,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 13,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 14,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 14,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 2,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 15,
            "index": 2,
            "lookaheads": [
              "id"
            ]
          },
          {
            "production": 16,
            "index": 0,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "transitions": {
          "PointerOpt": 24,
          "*": 15
        }
      },
      {
        "kernel": [
          {
            "production": 17,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 11,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 12,
            "index": 0,
            "lookaheads": [
              "const",
              "volatile",
              "*",
              "id"
            ]
          },
          {
            "production": 17,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 17,
            "index": 1,
            "lookaheads": [
              "*",
              "id"
            ]
          },
          {
            "production": 18,
            "index": 0,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {
          "TypeQualifierList": 25,
          "TypeQualifier": 23,
          "const": 11,
          "volatile": 12
        }
      },
      {
        "kernel": [
          {
            "production": 15,
            "index": 3,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 15,
            "index": 3,
            "lookaheads": [
              "id"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 17,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "items": [
          {
            "production": 17,
            "index": 2,
            "lookaheads": [
              "*",
              "id"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "Decl": {
          "shift": 1
        },
        "DeclSpecifiers": {
          "shift": 2
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Declarator": {
          "shift": 13
        },
        "PointerOpt": {
          "shift": 14
        },
        "*": {
          "shift": 15
        },
        "id": {
          "reduce": [
            16
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 16
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 18
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "DeclSpecifiersOpt": {
          "shift": 19
        },
        "DeclSpecifiers": {
          "shift": 17
        },
        "StorageClassSpecifier": {
          "shift": 3
        },
        "TypeSpecifier": {
          "shift": 4
        },
        "TypeQualifier": {
          "shift": 5
        },
        "typedef": {
          "shift": 6
        },
        "static": {
          "shift": 7
        },
        "void": {
          "shift": 8
        },
        "short": {
          "shift": 9
        },
        "int": {
          "shift": 10
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            5
          ]
        },
        "id": {
          "reduce": [
            5
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            6
          ]
        },
        "static": {
          "reduce": [
            6
          ]
        },
        "void": {
          "reduce": [
            6
          ]
        },
        "short": {
          "reduce": [
            6
          ]
        },
        "int": {
          "reduce": [
            6
          ]
        },
        "const": {
          "reduce": [
            6
          ]
        },
        "volatile": {
          "reduce": [
            6
          ]
        },
        "*": {
          "reduce": [
            6
          ]
        },
        "id": {
          "reduce": [
            6
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            7
          ]
        },
        "static": {
          "reduce": [
            7
          ]
        },
        "void": {
          "reduce": [
            7
          ]
        },
        "short": {
          "reduce": [
            7
          ]
        },
        "int": {
          "reduce": [
            7
          ]
        },
        "const": {
          "reduce": [
            7
          ]
        },
        "volatile": {
          "reduce": [
            7
          ]
        },
        "*": {
          "reduce": [
            7
          ]
        },
        "id": {
          "reduce": [
            7
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            8
          ]
        },
        "static": {
          "reduce": [
            8
          ]
        },
        "void": {
          "reduce": [
            8
          ]
        },
        "short": {
          "reduce": [
            8
          ]
        },
        "int": {
          "reduce": [
            8
          ]
        },
        "const": {
          "reduce": [
            8
          ]
        },
        "volatile": {
          "reduce": [
            8
          ]
        },
        "*": {
          "reduce": [
            8
          ]
        },
        "id": {
          "reduce": [
            8
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            9
          ]
        },
        "static": {
          "reduce": [
            9
          ]
        },
        "void": {
          "reduce": [
            9
          ]
        },
        "short": {
          "reduce": [
            9
          ]
        },
        "int": {
          "reduce": [
            9
          ]
        },
        "const": {
          "reduce": [
            9
          ]
        },
        "volatile": {
          "reduce": [
            9
          ]
        },
        "*": {
          "reduce": [
            9
          ]
        },
        "id": {
          "reduce": [
            9
          ]
        }
      },
      {
        "typedef": {
          "reduce": [
            10
          ]
        },
        "static": {
          "reduce": [
            10
          ]
        },
        "void": {
          "reduce": [
            10
          ]
        },
        "short": {
          "reduce": [
            10
          ]
        },
        "int": {
          "reduce": [
            10
          ]
        },
        "const": {
          "reduce": [
            10
          ]
        },
        "volatile": {
          "reduce": [
            10
          ]
        },
        "*": {
          "reduce": [
            10
          ]
        },
        "id": {
          "reduce": [
            10
          ]
        }
      },
      {
        "const": {
          "reduce": [
            11
          ]
        },
        "volatile": {
          "reduce": [
            11
          ]
        },
        "*": {
          "reduce": [
            11
          ]
        },
        "id": {
          "reduce": [
            11
          ]
        },
        "typedef": {
          "reduce": [
            11
          ]
        },
        "static": {
          "reduce": [
            11
          ]
        },
        "void": {
          "reduce": [
            11
          ]
        },
        "short": {
          "reduce": [
            11
          ]
        },
        "int": {
          "reduce": [
            11
          ]
        }
      },
      {
        "const": {
          "reduce": [
            12
          ]
        },
        "volatile": {
          "reduce": [
            12
          ]
        },
        "*": {
          "reduce": [
            12
          ]
        },
        "id": {
          "reduce": [
            12
          ]
        },
        "typedef": {
          "reduce": [
            12
          ]
        },
        "static": {
          "reduce": [
            12
          ]
        },
        "void": {
          "reduce": [
            12
          ]
        },
        "short": {
          "reduce": [
            12
          ]
        },
        "int": {
          "reduce": [
            12
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "DirectDeclarator": {
          "shift": 20
        },
        "id": {
          "shift": 21
        }
      },
      {
        "TypeQualifierList": {
          "shift": 22
        },
        "TypeQualifier": {
          "shift": 23
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            18
          ]
        },
        "id": {
          "reduce": [
            18
          ]
        }
      },
      {
        "*": {
          "reduce": [
            1
          ]
        },
        "id": {
          "reduce": [
            1
          ]
        }
      },
      {
        "*": {
          "reduce": [
            4
          ]
        },
        "id": {
          "reduce": [
            4
          ]
        }
      },
      {
        "*": {
          "reduce": [
            2
          ]
        },
        "id": {
          "reduce": [
            2
          ]
        }
      },
      {
        "*": {
          "reduce": [
            3
          ]
        },
        "id": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            13
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            14
          ]
        }
      },
      {
        "PointerOpt": {
          "shift": 24
        },
        "*": {
          "shift": 15
        },
        "id": {
          "reduce": [
            16
          ]
        }
      },
      {
        "TypeQualifierList": {
          "shift": 25
        },
        "TypeQualifier": {
          "shift": 23
        },
        "const": {
          "shift": 11
        },
        "volatile": {
          "shift": 12
        },
        "*": {
          "reduce": [
            18
          ]
        },
        "id": {
          "reduce": [
            18
          ]
        }
      },
      {
        "id": {
          "reduce": [
            15
          ]
        }
      },
      {
        "*": {
          "reduce": [
            17
          ]
        },
        "id": {
          "reduce": [
            17
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "Decl",
              "StorageClassSpecifier",
              "DeclSpecifiersOpt",
              "Declarator"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "Decl",
              "TypeSpecifier",
              "DeclSpecifiersOpt",
              "Declarator"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "Decl",
              "TypeQualifier",
              "DeclSpecifiersOpt",
              "Declarator"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "Decl",
              "DeclSpecifiers",
              "PointerOpt",
              "DirectDeclarator"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "typedef",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "static",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "StorageClassSpecifier",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "StorageClassSpecifier"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "void",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "short",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "int",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeSpecifier",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeSpecifier"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "const",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "volatile",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeQualifier",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeQualifier"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "StorageClassSpecifier",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "TypeSpecifier",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "TypeQualifier",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 13,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 13
          },
          {
            "production": [
              "Declarator",
              "*",
              "TypeQualifierList",
              "PointerOpt",
              "DirectDeclarator"
            ],
            "operation": "insert",
            "index": 13
          },
          {
            "production": [
              "Declarator",
              "DirectDeclarator"
            ],
            "operation": "insert",
            "index": 14
          }
        ]
      },
      {
        "name": "expand",
        "production": 13,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 13
          },
          {
            "production": [
              "Declarator",
              "PointerOpt",
              "id"
            ],
            "operation": "insert",
            "index": 13
          }
        ]
      },
      {
        "name": "expand",
        "production": 15,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "TypeQualifier",
              "TypeQualifierList",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 16
          }
        ]
      },
      {
        "name": "expand",
        "production": 15,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "TypeQualifierList",
              "*",
              "TypeQualifierList",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 16
          }
        ]
      },
      {
        "name": "expand",
        "production": 17,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "const",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "volatile",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 18
          }
        ]
      },
      {
        "name": "expand",
        "production": 17,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "TypeQualifier",
              "TypeQualifier",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "TypeQualifier"
            ],
            "operation": "insert",
            "index": 18
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [
      {
        "name": "epsilonSeparate",
        "production": 4,
        "symbol": 0,
        "changes": [
          {
            "index": 4,
            "operation": "delete"
          },
          {
            "index": 4,
            "operation": "delete"
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "DeclSpecifiersOpt2"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "DeclSpecifiersOpt2",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 15,
        "symbol": 0,
        "changes": [
          {
            "index": 15,
            "operation": "delete"
          },
          {
            "index": 15,
            "operation": "delete"
          },
          {
            "production": [
              "PointerOpt",
              "PointerOpt2"
            ],
            "operation": "insert",
            "index": 15
          },
          {
            "production": [
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 16
          },
          {
            "production": [
              "PointerOpt2",
              "*",
              "TypeQualifierList",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 17
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 17,
        "symbol": 0,
        "changes": [
          {
            "index": 17,
            "operation": "delete"
          },
          {
            "index": 17,
            "operation": "delete"
          },
          {
            "production": [
              "TypeQualifierList",
              "TypeQualifierList2"
            ],
            "operation": "insert",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 18
          },
          {
            "production": [
              "TypeQualifierList2",
              "TypeQualifier",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 19
          }
        ]
      }
    ],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "Decl",
              "StorageClassSpecifier",
              "DeclSpecifiersOpt",
              "Declarator"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "Decl",
              "TypeSpecifier",
              "DeclSpecifiersOpt",
              "Declarator"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "Decl",
              "TypeQualifier",
              "DeclSpecifiersOpt",
              "Declarator"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "Decl",
              "DeclSpecifiers",
              "PointerOpt",
              "DirectDeclarator"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "typedef",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "static",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "StorageClassSpecifier",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "DeclSpecifiers",
              "StorageClassSpecifier"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "void",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "short",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "int",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeSpecifier",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeSpecifier"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "const",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "volatile",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeQualifier",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "DeclSpecifiers",
              "TypeQualifier"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "StorageClassSpecifier",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "TypeSpecifier",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "TypeQualifier",
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 13,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 13
          },
          {
            "production": [
              "Declarator",
              "*",
              "TypeQualifierList",
              "PointerOpt",
              "DirectDeclarator"
            ],
            "operation": "insert",
            "index": 13
          },
          {
            "production": [
              "Declarator",
              "DirectDeclarator"
            ],
            "operation": "insert",
            "index": 14
          }
        ]
      },
      {
        "name": "expand",
        "production": 13,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 13
          },
          {
            "production": [
              "Declarator",
              "PointerOpt",
              "id"
            ],
            "operation": "insert",
            "index": 13
          }
        ]
      },
      {
        "name": "expand",
        "production": 15,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "TypeQualifier",
              "TypeQualifierList",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 16
          }
        ]
      },
      {
        "name": "expand",
        "production": 15,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "TypeQualifierList",
              "*",
              "TypeQualifierList",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 15
          },
          {
            "production": [
              "PointerOpt",
              "*",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 16
          }
        ]
      },
      {
        "name": "expand",
        "production": 17,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "const",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "volatile",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 18
          }
        ]
      },
      {
        "name": "expand",
        "production": 17,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "TypeQualifier",
              "TypeQualifier",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList",
              "TypeQualifier"
            ],
            "operation": "insert",
            "index": 18
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 4,
        "symbol": 0,
        "changes": [
          {
            "index": 4,
            "operation": "delete"
          },
          {
            "index": 4,
            "operation": "delete"
          },
          {
            "production": [
              "DeclSpecifiersOpt",
              "DeclSpecifiersOpt2"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "DeclSpecifiersOpt"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "DeclSpecifiersOpt2",
              "DeclSpecifiers"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 15,
        "symbol": 0,
        "changes": [
          {
            "index": 15,
            "operation": "delete"
          },
          {
            "index": 15,
            "operation": "delete"
          },
          {
            "production": [
              "PointerOpt",
              "PointerOpt2"
            ],
            "operation": "insert",
            "index": 15
          },
          {
            "production": [
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 16
          },
          {
            "production": [
              "PointerOpt2",
              "*",
              "TypeQualifierList",
              "PointerOpt"
            ],
            "operation": "insert",
            "index": 17
          }
        ]
      },
      {
        "name": "epsilonSeparate",
        "production": 17,
        "symbol": 0,
        "changes": [
          {
            "index": 17,
            "operation": "delete"
          },
          {
            "index": 17,
            "operation": "delete"
          },
          {
            "production": [
              "TypeQualifierList",
              "TypeQualifierList2"
            ],
            "operation": "insert",
            "index": 17
          },
          {
            "production": [
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 18
          },
          {
            "production": [
              "TypeQualifierList2",
              "TypeQualifier",
              "TypeQualifierList"
            ],
            "operation": "insert",
            "index": 19
          }
        ]
      }
    ]
  },
  "ll2-lalr1-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "V",
      "E"
    ],
    "grammar.terminals": [
      "id",
      "assign",
      "num"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "id",
        "assign",
        "num"
      ],
      "nonterminalOrder": [
        "S",
        "V",
        "E"
      ],
      "productionOrder": [
        "S",
        "V",
        "E"
      ],
      "nonterminals": [
        "S",
        "V",
        "E"
      ],
      "terminals": [
        "id",
        "assign",
        "num"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "id"
      ],
      [
        "S",
        "V",
        "assign",
        "E"
      ],
      [
        "V",
        "id"
      ],
      [
        "E",
        "V"
      ],
      [
        "E",
        "num"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "S",
        "id"
      ],
      [
        "V",
        "id"
      ],
      [
        "E",
        "num"
      ],
      [
        "E",
        "id"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "V",
        "assign"
      ],
      [
        "V",
        "Grammar.END"
      ],
      [
        "E",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S",
      "V",
      "E"
    ],
    "grammar.sentences": [
      [
        "id"
      ],
      [
        "id",
        "assign",
        "num"
      ],
      [
        "id",
        "assign",
        "id"
      ]
    ],
    "grammar.symbols": [
      "S",
      "id",
      "V",
      "assign",
      "E",
      "num"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "S": {
        "id": [
          0,
          1
        ],
        "assign": [],
        "num": [],
        "Grammar.END": []
      },
      "V": {
        "id": [
          2
        ],
        "assign": [],
        "num": [],
        "Grammar.END": []
      },
      "E": {
        "id": [
          3
        ],
        "assign": [],
        "num": [
          4
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "id": 2,
          "V": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "assign": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "E": 5,
          "V": 6,
          "num": 7,
          "id": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "id": 2,
          "V": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0,
          2
        ]
      },
      {
        "shift": {
          "assign": 4
        },
        "reduce": []
      },
      {
        "shift": {
          "E": 5,
          "V": 6,
          "num": 7,
          "id": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "id": {
          "shift": 2
        },
        "V": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0,
            2
          ]
        },
        "assign": {
          "reduce": [
            2
          ]
        }
      },
      {
        "assign": {
          "shift": 4
        }
      },
      {
        "E": {
          "shift": 5
        },
        "V": {
          "shift": 6
        },
        "num": {
          "shift": 7
        },
        "id": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "assign": {
          "reduce": [
            2
          ]
        },
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "assign"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "id": 2,
          "V": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "assign"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "assign"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "assign": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 5,
          "V": 6,
          "num": 7,
          "id": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "id": {
          "shift": 2
        },
        "V": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        },
        "assign": {
          "reduce": [
            2
          ]
        }
      },
      {
        "assign": {
          "shift": 4
        }
      },
      {
        "E": {
          "shift": 5
        },
        "V": {
          "shift": 6
        },
        "num": {
          "shift": 7
        },
        "id": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "assign"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "id": 2,
          "V": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "assign"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "assign"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "assign": 4
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "E": 5,
          "V": 6,
          "num": 7,
          "id": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "id": {
          "shift": 2
        },
        "V": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        },
        "assign": {
          "reduce": [
            2
          ]
        }
      },
      {
        "assign": {
          "shift": 4
        }
      },
      {
        "E": {
          "shift": 5
        },
        "V": {
          "shift": 6
        },
        "num": {
          "shift": 7
        },
        "id": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "id",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "V",
              "assign",
              "V"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "V",
              "assign",
              "num"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "E",
              "id"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "id",
              "assign",
              "E"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "V",
              "assign",
              "V"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "V",
              "assign",
              "num"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "E",
              "id"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      }
    ]
  },
  "ll2-lalr1-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S'",
      "S",
      "L",
      "R"
    ],
    "grammar.terminals": [
      "assign",
      "*",
      "id"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "assign",
        "*",
        "id"
      ],
      "nonterminalOrder": [
        "S'",
        "S",
        "L",
        "R"
      ],
      "productionOrder": [
        "S'",
        "S",
        "L",
        "R"
      ],
      "nonterminals": [
        "S'",
        "S",
        "L",
        "R"
      ],
      "terminals": [
        "assign",
        "*",
        "id"
      ]
    },
    "grammar.start": "S'",
    "grammar.productions": [
      [
        "S'",
        "S"
      ],
      [
        "S",
        "L",
        "assign",
        "R"
      ],
      [
        "S",
        "R"
      ],
      [
        "L",
        "*",
        "R"
      ],
      [
        "L",
        "id"
      ],
      [
        "R",
        "L"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "L",
        "*"
      ],
      [
        "L",
        "id"
      ],
      [
        "S'",
        "*"
      ],
      [
        "S'",
        "id"
      ],
      [
        "S",
        "*"
      ],
      [
        "S",
        "id"
      ],
      [
        "R",
        "*"
      ],
      [
        "R",
        "id"
      ]
    ],
    "grammar.follow": [
      [
        "S'",
        "Grammar.END"
      ],
      [
        "L",
        "assign"
      ],
      [
        "L",
        "Grammar.END"
      ],
      [
        "S",
        "Grammar.END"
      ],
      [
        "R",
        "assign"
      ],
      [
        "R",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S'",
      "L",
      "S",
      "R"
    ],
    "grammar.sentences": [
      [
        "id"
      ],
      [
        "*",
        "id"
      ],
      [
        "id",
        "assign",
        "id"
      ],
      [
        "*",
        "*",
        "id"
      ],
      [
        "id",
        "assign",
        "*",
        "id"
      ],
      [
        "*",
        "id",
        "assign",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "id",
        "assign",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "id",
        "assign",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "id",
        "assign",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "id",
        "assign",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "id",
        "assign",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "id",
        "assign",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "id",
        "assign",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "id",
        "assign",
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "id",
        "assign",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "id",
        "assign",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "id",
        "assign",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "*",
        "id",
        "assign",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "id",
        "assign",
        "*",
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "id",
        "assign",
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "id",
        "assign",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "id",
        "assign",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "*",
        "id",
        "assign",
        "*",
        "id"
      ],
      [
        "*",
        "*",
        "*",
        "*",
        "*",
        "id",
        "assign",
        "id"
      ],
      [
        "id",
        "assign",
        "*",
        "*",
        "*",
        "*",
        "*",
        "*",
        "id"
      ],
      [
        "*",
        "id",
        "assign",
        "*",
        "*",
        "*",
        "*",
        "*",
        "id"
      ]
    ],
    "grammar.symbols": [
      "S'",
      "S",
      "L",
      "assign",
      "R",
      "*",
      "id"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "S'": {
        "assign": [],
        "*": [
          0
        ],
        "id": [
          0
        ],
        "Grammar.END": []
      },
      "S": {
        "assign": [],
        "*": [
          1,
          2
        ],
        "id": [
          1,
          2
        ],
        "Grammar.END": []
      },
      "L": {
        "assign": [],
        "*": [
          3
        ],
        "id": [
          4
        ],
        "Grammar.END": []
      },
      "R": {
        "assign": [],
        "*": [
          5
        ],
        "id": [
          5
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          }
        ],
        "transitions": {
          "S'": 1,
          "S": 2,
          "L": 3,
          "R": 4,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {
          "assign": 7
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "R": 8,
          "L": 9,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          }
        ],
        "transitions": {
          "R": 10,
          "L": 9,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S'": 1,
          "S": 2,
          "L": 3,
          "R": 4,
          "*": 5,
          "id": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "assign": 7
        },
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "R": 8,
          "L": 9,
          "*": 5,
          "id": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {
          "R": 10,
          "L": 9,
          "*": 5,
          "id": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S'": {
          "shift": 1
        },
        "S": {
          "shift": 2
        },
        "L": {
          "shift": 3
        },
        "R": {
          "shift": 4
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "assign": {
          "shift": 7,
          "reduce": [
            5
          ]
        },
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "R": {
          "shift": 8
        },
        "L": {
          "shift": 9
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "assign": {
          "reduce": [
            4
          ]
        },
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "R": {
          "shift": 10
        },
        "L": {
          "shift": 9
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "assign": {
          "reduce": [
            3
          ]
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "assign": {
          "reduce": [
            5
          ]
        },
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S'": 1,
          "S": 2,
          "L": 3,
          "R": 4,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "assign": 7
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "R": 8,
          "L": 9,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "R": 10,
          "L": 11,
          "*": 12,
          "id": 13
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "R": 14,
          "L": 11,
          "*": 12,
          "id": 13
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S'": {
          "shift": 1
        },
        "S": {
          "shift": 2
        },
        "L": {
          "shift": 3
        },
        "R": {
          "shift": 4
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "assign": {
          "shift": 7
        },
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "R": {
          "shift": 8
        },
        "L": {
          "shift": 9
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "assign": {
          "reduce": [
            4
          ]
        },
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "R": {
          "shift": 10
        },
        "L": {
          "shift": 11
        },
        "*": {
          "shift": 12
        },
        "id": {
          "shift": 13
        }
      },
      {
        "assign": {
          "reduce": [
            3
          ]
        },
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "assign": {
          "reduce": [
            5
          ]
        },
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "R": {
          "shift": 14
        },
        "L": {
          "shift": 11
        },
        "*": {
          "shift": 12
        },
        "id": {
          "shift": 13
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "assign",
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S'": 1,
          "S": 2,
          "L": 3,
          "R": 4,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "assign": 7
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "transitions": {
          "R": 8,
          "L": 9,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "R": 10,
          "L": 9,
          "*": 5,
          "id": 6
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "assign"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S'": {
          "shift": 1
        },
        "S": {
          "shift": 2
        },
        "L": {
          "shift": 3
        },
        "R": {
          "shift": 4
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "assign": {
          "shift": 7
        },
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "R": {
          "shift": 8
        },
        "L": {
          "shift": 9
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        },
        "assign": {
          "reduce": [
            4
          ]
        }
      },
      {
        "R": {
          "shift": 10
        },
        "L": {
          "shift": 9
        },
        "*": {
          "shift": 5
        },
        "id": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        },
        "assign": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        },
        "assign": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S'",
              "L",
              "assign",
              "R"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S'",
              "R"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "*",
              "R",
              "assign",
              "R"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "id",
              "assign",
              "R"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "L",
              "assign",
              "L"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "S",
              "L"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "L",
              "*",
              "L"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "R",
              "*",
              "R"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "R",
              "id"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S'",
              "L",
              "assign",
              "R"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S'",
              "R"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "*",
              "R",
              "assign",
              "R"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "id",
              "assign",
              "R"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "L",
              "assign",
              "L"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "S",
              "L"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 2,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "L",
              "*",
              "L"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "R",
              "*",
              "R"
            ],
            "operation": "insert",
            "index": 5
          },
          {
            "production": [
              "R",
              "id"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      }
    ]
  },
  "ll2-lalr1-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "A",
      "B"
    ],
    "grammar.terminals": [
      "x",
      "y",
      "w"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "x",
        "y",
        "w"
      ],
      "nonterminalOrder": [
        "S",
        "A",
        "B"
      ],
      "productionOrder": [
        "S",
        "A",
        "B"
      ],
      "nonterminals": [
        "S",
        "A",
        "B"
      ],
      "terminals": [
        "x",
        "y",
        "w"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "A",
        "x",
        "B",
        "x"
      ],
      [
        "S",
        "B",
        "y",
        "A",
        "y"
      ],
      [
        "A",
        "w"
      ],
      [
        "B",
        "w"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "A",
        "w"
      ],
      [
        "B",
        "w"
      ],
      [
        "S",
        "w"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "A",
        "x"
      ],
      [
        "A",
        "y"
      ],
      [
        "B",
        "x"
      ],
      [
        "B",
        "y"
      ]
    ],
    "grammar.endable": [
      "S"
    ],
    "grammar.sentences": [
      [
        "w",
        "x",
        "w",
        "x"
      ],
      [
        "w",
        "y",
        "w",
        "y"
      ]
    ],
    "grammar.symbols": [
      "S",
      "A",
      "x",
      "B",
      "y",
      "w"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "S": {
        "x": [],
        "y": [],
        "w": [
          0,
          1
        ],
        "Grammar.END": []
      },
      "A": {
        "x": [],
        "y": [],
        "w": [
          2
        ],
        "Grammar.END": []
      },
      "B": {
        "x": [],
        "y": [],
        "w": [
          3
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "A": 2,
          "B": 3,
          "w": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {
          "x": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "y": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "B": 7,
          "w": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "A": 9,
          "w": 10
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {
          "x": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "transitions": {
          "y": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "A": 2,
          "B": 3,
          "w": 4
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "x": 5
        },
        "reduce": []
      },
      {
        "shift": {
          "y": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2,
          3
        ]
      },
      {
        "shift": {
          "B": 7,
          "w": 8
        },
        "reduce": []
      },
      {
        "shift": {
          "A": 9,
          "w": 10
        },
        "reduce": []
      },
      {
        "shift": {
          "x": 11
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {
          "y": 12
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "A": {
          "shift": 2
        },
        "B": {
          "shift": 3
        },
        "w": {
          "shift": 4
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "x": {
          "shift": 5
        }
      },
      {
        "y": {
          "shift": 6
        }
      },
      {
        "x": {
          "reduce": [
            2,
            3
          ]
        },
        "y": {
          "reduce": [
            2,
            3
          ]
        }
      },
      {
        "B": {
          "shift": 7
        },
        "w": {
          "shift": 8
        }
      },
      {
        "A": {
          "shift": 9
        },
        "w": {
          "shift": 10
        }
      },
      {
        "x": {
          "shift": 11
        }
      },
      {
        "x": {
          "reduce": [
            3
          ]
        },
        "y": {
          "reduce": [
            3
          ]
        }
      },
      {
        "y": {
          "shift": 12
        }
      },
      {
        "x": {
          "reduce": [
            2
          ]
        },
        "y": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "x"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "y"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "A": 2,
          "B": 3,
          "w": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "x": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "y": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {
          "B": 7,
          "w": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "transitions": {
          "A": 9,
          "w": 10
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "x": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "y": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "A": {
          "shift": 2
        },
        "B": {
          "shift": 3
        },
        "w": {
          "shift": 4
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "x": {
          "shift": 5
        }
      },
      {
        "y": {
          "shift": 6
        }
      },
      {
        "x": {
          "reduce": [
            2
          ]
        },
        "y": {
          "reduce": [
            3
          ]
        }
      },
      {
        "B": {
          "shift": 7
        },
        "w": {
          "shift": 8
        }
      },
      {
        "A": {
          "shift": 9
        },
        "w": {
          "shift": 10
        }
      },
      {
        "x": {
          "shift": 11
        }
      },
      {
        "x": {
          "reduce": [
            3
          ]
        }
      },
      {
        "y": {
          "shift": 12
        }
      },
      {
        "y": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "x"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "y"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "A": 2,
          "B": 3,
          "w": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "x": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "y": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {
          "B": 7,
          "w": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "transitions": {
          "A": 9,
          "w": 10
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "x": 11
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "x"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "y": 12
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "y"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 4,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "A": {
          "shift": 2
        },
        "B": {
          "shift": 3
        },
        "w": {
          "shift": 4
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "x": {
          "shift": 5
        }
      },
      {
        "y": {
          "shift": 6
        }
      },
      {
        "x": {
          "reduce": [
            2
          ]
        },
        "y": {
          "reduce": [
            3
          ]
        }
      },
      {
        "B": {
          "shift": 7
        },
        "w": {
          "shift": 8
        }
      },
      {
        "A": {
          "shift": 9
        },
        "w": {
          "shift": 10
        }
      },
      {
        "x": {
          "shift": 11
        }
      },
      {
        "x": {
          "reduce": [
            3
          ]
        }
      },
      {
        "y": {
          "shift": 12
        }
      },
      {
        "y": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "w",
              "x",
              "B",
              "x"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "A",
              "x",
              "w",
              "x"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "w",
              "y",
              "A",
              "y"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "B",
              "y",
              "w",
              "y"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "w",
              "x",
              "B",
              "x"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "A",
              "x",
              "w",
              "x"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "w",
              "y",
              "A",
              "y"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "B",
              "y",
              "w",
              "y"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ]
  },
  "ll2-lr0-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "Block"
    ],
    "grammar.terminals": [
      "(",
      ")",
      "stmt"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "(",
        ")",
        "stmt"
      ],
      "nonterminalOrder": [
        "S",
        "Block"
      ],
      "productionOrder": [
        "S",
        "Block"
      ],
      "nonterminals": [
        "S",
        "Block"
      ],
      "terminals": [
        "(",
        ")",
        "stmt"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "Block"
      ],
      [
        "S",
        "(",
        ")"
      ],
      [
        "Block",
        "(",
        "stmt",
        ")"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "S",
        "("
      ],
      [
        "Block",
        "("
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "Block",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S",
      "Block"
    ],
    "grammar.sentences": [
      [
        "(",
        ")"
      ],
      [
        "(",
        "stmt",
        ")"
      ]
    ],
    "grammar.symbols": [
      "S",
      "Block",
      "(",
      ")",
      "stmt"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "S": {
        "(": [
          0,
          1
        ],
        ")": [],
        "stmt": [],
        "Grammar.END": []
      },
      "Block": {
        "(": [
          2
        ],
        ")": [],
        "stmt": [],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "Block": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {
          ")": 4,
          "stmt": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {
          ")": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "Block": 2,
          "(": 3
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          ")": 4,
          "stmt": 5
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          ")": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "Block": {
          "shift": 2
        },
        "(": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "shift": 4
        },
        "stmt": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "Block": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 4,
          "stmt": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "Block": {
          "shift": 2
        },
        "(": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "shift": 4
        },
        "stmt": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "Block": 2,
          "(": 3
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 4,
          "stmt": 5
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "Block": {
          "shift": 2
        },
        "(": {
          "shift": 3
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        ")": {
          "shift": 4
        },
        "stmt": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "stmt",
              ")"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "(",
              "stmt",
              ")"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      }
    ]
  },
  "ll2-lr0-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "S",
      "Assign",
      "Inc",
      "Rv",
      "Lv"
    ],
    "grammar.terminals": [
      "equals",
      "++",
      "//",
      "num",
      "id"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "equals",
        "++",
        "//",
        "num",
        "id"
      ],
      "nonterminalOrder": [
        "S",
        "Assign",
        "Inc",
        "Lv",
        "Rv"
      ],
      "productionOrder": [
        "S",
        "Assign",
        "Inc",
        "Rv",
        "Lv"
      ],
      "nonterminals": [
        "S",
        "Assign",
        "Inc",
        "Rv",
        "Lv"
      ],
      "terminals": [
        "equals",
        "++",
        "//",
        "num",
        "id"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "Assign"
      ],
      [
        "S",
        "Inc"
      ],
      [
        "Assign",
        "Lv",
        "equals",
        "Rv"
      ],
      [
        "Inc",
        "Lv",
        "++"
      ],
      [
        "Inc",
        "Lv",
        "//"
      ],
      [
        "Rv",
        "Lv"
      ],
      [
        "Rv",
        "num"
      ],
      [
        "Lv",
        "id"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "Rv",
        "num"
      ],
      [
        "Rv",
        "id"
      ],
      [
        "Lv",
        "id"
      ],
      [
        "S",
        "id"
      ],
      [
        "Assign",
        "id"
      ],
      [
        "Inc",
        "id"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "Lv",
        "equals"
      ],
      [
        "Lv",
        "++"
      ],
      [
        "Lv",
        "//"
      ],
      [
        "Lv",
        "Grammar.END"
      ],
      [
        "Assign",
        "Grammar.END"
      ],
      [
        "Inc",
        "Grammar.END"
      ],
      [
        "Rv",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "S",
      "Lv",
      "Assign",
      "Inc",
      "Rv"
    ],
    "grammar.sentences": [
      [
        "id",
        "++"
      ],
      [
        "id",
        "//"
      ],
      [
        "id",
        "equals",
        "num"
      ],
      [
        "id",
        "equals",
        "id"
      ]
    ],
    "grammar.symbols": [
      "S",
      "Assign",
      "Inc",
      "Lv",
      "equals",
      "Rv",
      "++",
      "//",
      "num",
      "id"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "S": {
        "equals": [],
        "++": [],
        "//": [],
        "num": [],
        "id": [
          0,
          1
        ],
        "Grammar.END": []
      },
      "Assign": {
        "equals": [],
        "++": [],
        "//": [],
        "num": [],
        "id": [
          2
        ],
        "Grammar.END": []
      },
      "Inc": {
        "equals": [],
        "++": [],
        "//": [],
        "num": [],
        "id": [
          3,
          4
        ],
        "Grammar.END": []
      },
      "Rv": {
        "equals": [],
        "++": [],
        "//": [],
        "num": [
          6
        ],
        "id": [
          5
        ],
        "Grammar.END": []
      },
      "Lv": {
        "equals": [],
        "++": [],
        "//": [],
        "num": [],
        "id": [
          7
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "Assign": 2,
          "Inc": 3,
          "Lv": 4,
          "id": 5
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {
          "equals": 6,
          "++": 7,
          "//": 8
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          }
        ],
        "transitions": {
          "Rv": 9,
          "Lv": 10,
          "num": 11,
          "id": 5
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "Assign": 2,
          "Inc": 3,
          "Lv": 4,
          "id": 5
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "equals": 6,
          "++": 7,
          "//": 8
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          7
        ]
      },
      {
        "shift": {
          "Rv": 9,
          "Lv": 10,
          "num": 11,
          "id": 5
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          6
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "Assign": {
          "shift": 2
        },
        "Inc": {
          "shift": 3
        },
        "Lv": {
          "shift": 4
        },
        "id": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "equals": {
          "shift": 6
        },
        "++": {
          "shift": 7
        },
        "//": {
          "shift": 8
        }
      },
      {
        "equals": {
          "reduce": [
            7
          ]
        },
        "++": {
          "reduce": [
            7
          ]
        },
        "//": {
          "reduce": [
            7
          ]
        },
        "Grammar.END": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Rv": {
          "shift": 9
        },
        "Lv": {
          "shift": 10
        },
        "num": {
          "shift": 11
        },
        "id": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "equals",
              "++",
              "//"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "Assign": 2,
          "Inc": 3,
          "Lv": 4,
          "id": 5
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "equals": 6,
          "++": 7,
          "//": 8
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "equals",
              "++",
              "//"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "equals",
              "++",
              "//"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Rv": 9,
          "Lv": 10,
          "num": 11,
          "id": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "Assign": {
          "shift": 2
        },
        "Inc": {
          "shift": 3
        },
        "Lv": {
          "shift": 4
        },
        "id": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "equals": {
          "shift": 6
        },
        "++": {
          "shift": 7
        },
        "//": {
          "shift": 8
        }
      },
      {
        "equals": {
          "reduce": [
            7
          ]
        },
        "++": {
          "reduce": [
            7
          ]
        },
        "//": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Rv": {
          "shift": 9
        },
        "Lv": {
          "shift": 10
        },
        "num": {
          "shift": 11
        },
        "id": {
          "shift": 12
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            7
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "equals",
              "++",
              "//"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "Assign": 2,
          "Inc": 3,
          "Lv": 4,
          "id": 5
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "equals": 6,
          "++": 7,
          "//": 8
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "equals",
              "++",
              "//"
            ]
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "Grammar.END",
              "equals",
              "++",
              "//"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Rv": 9,
          "Lv": 10,
          "num": 11,
          "id": 5
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "Assign": {
          "shift": 2
        },
        "Inc": {
          "shift": 3
        },
        "Lv": {
          "shift": 4
        },
        "id": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "equals": {
          "shift": 6
        },
        "++": {
          "shift": 7
        },
        "//": {
          "shift": 8
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            7
          ]
        },
        "equals": {
          "reduce": [
            7
          ]
        },
        "++": {
          "reduce": [
            7
          ]
        },
        "//": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Rv": {
          "shift": 9
        },
        "Lv": {
          "shift": 10
        },
        "num": {
          "shift": 11
        },
        "id": {
          "shift": 5
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "Lv",
              "equals",
              "Rv"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "Lv",
              "++"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "Lv",
              "//"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Assign",
              "id",
              "equals",
              "Rv"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Assign",
              "Lv",
              "equals",
              "Lv"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "Assign",
              "Lv",
              "equals",
              "num"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Inc",
              "id",
              "++"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "Inc",
              "id",
              "//"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "Rv",
              "id"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [
      {
        "name": "leftFactor",
        "production": 3,
        "symbol": 0,
        "length": 1,
        "changes": [
          {
            "index": 3,
            "operation": "delete"
          },
          {
            "index": 3,
            "operation": "delete"
          },
          {
            "production": [
              "Inc",
              "Lv",
              "Inc2"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "Inc2",
              "++"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "Inc2",
              "//"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      }
    ],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "Lv",
              "equals",
              "Rv"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "Lv",
              "++"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "Lv",
              "//"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Assign",
              "id",
              "equals",
              "Rv"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "Assign",
              "Lv",
              "equals",
              "Lv"
            ],
            "operation": "insert",
            "index": 2
          },
          {
            "production": [
              "Assign",
              "Lv",
              "equals",
              "num"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "Inc",
              "id",
              "++"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "Inc",
              "id",
              "//"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "Rv",
              "id"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "leftFactor",
        "production": 3,
        "symbol": 0,
        "length": 1,
        "changes": [
          {
            "index": 3,
            "operation": "delete"
          },
          {
            "index": 3,
            "operation": "delete"
          },
          {
            "production": [
              "Inc",
              "Lv",
              "Inc2"
            ],
            "operation": "insert",
            "index": 3
          },
          {
            "production": [
              "Inc2",
              "++"
            ],
            "operation": "insert",
            "index": 4
          },
          {
            "production": [
              "Inc2",
              "//"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      }
    ]
  },
  "ll2-lr0-2.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": true
      },
      "slr1": {
        "member": true
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": true
      }
    },
    "grammar.nonterminals": [
      "Emoticon",
      "Happy",
      "Sad"
    ],
    "grammar.terminals": [
      ":",
      ")",
      "("
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        ":",
        ")",
        "("
      ],
      "nonterminalOrder": [
        "Emoticon",
        "Happy",
        "Sad"
      ],
      "productionOrder": [
        "Emoticon",
        "Happy",
        "Sad"
      ],
      "nonterminals": [
        "Emoticon",
        "Happy",
        "Sad"
      ],
      "terminals": [
        ":",
        ")",
        "("
      ]
    },
    "grammar.start": "Emoticon",
    "grammar.productions": [
      [
        "Emoticon",
        "Happy"
      ],
      [
        "Emoticon",
        "Sad"
      ],
      [
        "Happy",
        ":",
        ")"
      ],
      [
        "Sad",
        ":",
        "("
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [],
    "grammar.first": [
      [
        "Happy",
        ":"
      ],
      [
        "Sad",
        ":"
      ],
      [
        "Emoticon",
        ":"
      ]
    ],
    "grammar.follow": [
      [
        "Emoticon",
        "Grammar.END"
      ],
      [
        "Happy",
        "Grammar.END"
      ],
      [
        "Sad",
        "Grammar.END"
      ]
    ],
    "grammar.endable": [
      "Emoticon",
      "Happy",
      "Sad"
    ],
    "grammar.sentences": [
      [
        ":",
        ")"
      ],
      [
        ":",
        "("
      ]
    ],
    "grammar.symbols": [
      "Emoticon",
      "Happy",
      "Sad",
      ":",
      ")",
      "("
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "Emoticon": {
        ":": [
          0,
          1
        ],
        ")": [],
        "(": [],
        "Grammar.END": []
      },
      "Happy": {
        ":": [
          2
        ],
        ")": [],
        "(": [],
        "Grammar.END": []
      },
      "Sad": {
        ":": [
          3
        ],
        ")": [],
        "(": [],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": true
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "Emoticon": 1,
          "Happy": 2,
          "Sad": 3,
          ":": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {
          ")": 5,
          "(": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "Emoticon": 1,
          "Happy": 2,
          "Sad": 3,
          ":": 4
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          ")": 5,
          "(": 6
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": true
    },
    "parsing.lr.slr1_table": [
      {
        "Emoticon": {
          "shift": 1
        },
        "Happy": {
          "shift": 2
        },
        "Sad": {
          "shift": 3
        },
        ":": {
          "shift": 4
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "shift": 5
        },
        "(": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Emoticon": 1,
          "Happy": 2,
          "Sad": 3,
          ":": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 5,
          "(": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "Emoticon": {
          "shift": 1
        },
        "Happy": {
          "shift": 2
        },
        "Sad": {
          "shift": 3
        },
        ":": {
          "shift": 4
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "shift": 5
        },
        "(": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": true
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Emoticon": 1,
          "Happy": 2,
          "Sad": 3,
          ":": 4
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          ")": 5,
          "(": 6
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "Emoticon": {
          "shift": 1
        },
        "Happy": {
          "shift": 2
        },
        "Sad": {
          "shift": 3
        },
        ":": {
          "shift": 4
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        ")": {
          "shift": 5
        },
        "(": {
          "shift": 6
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "Emoticon",
              ":",
              ")"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "Emoticon",
              ":",
              "("
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "Emoticon",
              ":",
              ")"
            ],
            "operation": "insert",
            "index": 0
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "Emoticon",
              ":",
              "("
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      }
    ]
  },
  "ll2-lr1-0.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      }
    },
    "grammar.nonterminals": [
      "S",
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "grammar.terminals": [
      "a",
      "b"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "a",
        "b"
      ],
      "nonterminalOrder": [
        "S",
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "productionOrder": [
        "S",
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "nonterminals": [
        "S",
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "terminals": [
        "a",
        "b"
      ]
    },
    "grammar.start": "S",
    "grammar.productions": [
      [
        "S",
        "a",
        "a",
        "A"
      ],
      [
        "S",
        "a",
        "b",
        "B"
      ],
      [
        "A",
        "C",
        "a"
      ],
      [
        "A",
        "D",
        "b"
      ],
      [
        "B",
        "C",
        "b"
      ],
      [
        "B",
        "D",
        "a"
      ],
      [
        "C",
        "E"
      ],
      [
        "D",
        "E"
      ],
      [
        "E"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "E",
      "C",
      "D"
    ],
    "grammar.first": [
      [
        "S",
        "a"
      ],
      [
        "A",
        "a"
      ],
      [
        "A",
        "b"
      ],
      [
        "B",
        "b"
      ],
      [
        "B",
        "a"
      ]
    ],
    "grammar.follow": [
      [
        "S",
        "Grammar.END"
      ],
      [
        "C",
        "a"
      ],
      [
        "C",
        "b"
      ],
      [
        "D",
        "b"
      ],
      [
        "D",
        "a"
      ],
      [
        "A",
        "Grammar.END"
      ],
      [
        "B",
        "Grammar.END"
      ],
      [
        "E",
        "a"
      ],
      [
        "E",
        "b"
      ]
    ],
    "grammar.endable": [
      "S",
      "A",
      "B"
    ],
    "grammar.sentences": [
      [
        "a",
        "a",
        "a"
      ],
      [
        "a",
        "a",
        "b"
      ],
      [
        "a",
        "b",
        "b"
      ],
      [
        "a",
        "b",
        "a"
      ]
    ],
    "grammar.symbols": [
      "S",
      "a",
      "A",
      "b",
      "B",
      "C",
      "D",
      "E"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "S": {
        "a": [
          0,
          1
        ],
        "b": [],
        "Grammar.END": []
      },
      "A": {
        "a": [
          2
        ],
        "b": [
          3
        ],
        "Grammar.END": []
      },
      "B": {
        "a": [
          5
        ],
        "b": [
          4
        ],
        "Grammar.END": []
      },
      "C": {
        "a": [
          6
        ],
        "b": [
          6
        ],
        "Grammar.END": []
      },
      "D": {
        "a": [
          7
        ],
        "b": [
          7
        ],
        "Grammar.END": []
      },
      "E": {
        "a": [
          8
        ],
        "b": [
          8
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "S": 1,
          "a": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 1
          }
        ],
        "transitions": {
          "a": 3,
          "b": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          }
        ],
        "transitions": {
          "A": 5,
          "C": 6,
          "D": 7,
          "E": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          }
        ],
        "transitions": {
          "B": 9,
          "C": 10,
          "D": 11,
          "E": 8
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "transitions": {
          "a": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "transitions": {
          "b": 13
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          },
          {
            "production": 7,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          },
          {
            "production": 7,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {
          "b": 14
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {
          "a": 15
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "S": 1,
          "a": 2
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "a": 3,
          "b": 4
        },
        "reduce": []
      },
      {
        "shift": {
          "A": 5,
          "C": 6,
          "D": 7,
          "E": 8
        },
        "reduce": [
          8
        ]
      },
      {
        "shift": {
          "B": 9,
          "C": 10,
          "D": 11,
          "E": 8
        },
        "reduce": [
          8
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "a": 12
        },
        "reduce": []
      },
      {
        "shift": {
          "b": 13
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          6,
          7
        ]
      },
      {
        "shift": {},
        "reduce": [
          1
        ]
      },
      {
        "shift": {
          "b": 14
        },
        "reduce": []
      },
      {
        "shift": {
          "a": 15
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "S": {
          "shift": 1
        },
        "a": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "a": {
          "shift": 3
        },
        "b": {
          "shift": 4
        }
      },
      {
        "A": {
          "shift": 5
        },
        "C": {
          "shift": 6
        },
        "D": {
          "shift": 7
        },
        "E": {
          "shift": 8
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "B": {
          "shift": 9
        },
        "C": {
          "shift": 10
        },
        "D": {
          "shift": 11
        },
        "E": {
          "shift": 8
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "a": {
          "shift": 12
        }
      },
      {
        "b": {
          "shift": 13
        }
      },
      {
        "a": {
          "reduce": [
            6,
            7
          ]
        },
        "b": {
          "reduce": [
            6,
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "b": {
          "shift": 14
        }
      },
      {
        "a": {
          "shift": 15
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "a": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 3,
          "b": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "transitions": {
          "A": 5,
          "C": 6,
          "D": 7,
          "E": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "b",
              "a"
            ]
          }
        ],
        "transitions": {
          "B": 9,
          "C": 10,
          "D": 11,
          "E": 12
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 13
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 14
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 15
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 16
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr1_classification": {
      "member": true
    },
    "parsing.lr.lr1_table": [
      {
        "S": {
          "shift": 1
        },
        "a": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "a": {
          "shift": 3
        },
        "b": {
          "shift": 4
        }
      },
      {
        "A": {
          "shift": 5
        },
        "C": {
          "shift": 6
        },
        "D": {
          "shift": 7
        },
        "E": {
          "shift": 8
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "B": {
          "shift": 9
        },
        "C": {
          "shift": 10
        },
        "D": {
          "shift": 11
        },
        "E": {
          "shift": 12
        },
        "b": {
          "reduce": [
            8
          ]
        },
        "a": {
          "reduce": [
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "a": {
          "shift": 13
        }
      },
      {
        "b": {
          "shift": 14
        }
      },
      {
        "a": {
          "reduce": [
            6
          ]
        },
        "b": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "b": {
          "shift": 15
        }
      },
      {
        "a": {
          "shift": 16
        }
      },
      {
        "b": {
          "reduce": [
            6
          ]
        },
        "a": {
          "reduce": [
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "parsing.lr.lalr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.lalr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "S": 1,
          "a": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 3,
          "b": 4
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "transitions": {
          "A": 5,
          "C": 6,
          "D": 7,
          "E": 8
        }
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "b"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "a"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "b",
              "a"
            ]
          }
        ],
        "transitions": {
          "B": 9,
          "C": 10,
          "D": 11,
          "E": 8
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 12
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 13
        }
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b",
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "b",
              "a"
            ]
          },
          {
            "production": 7,
            "index": 1,
            "lookaheads": [
              "a",
              "b"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 1,
            "index": 3,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "b": 14
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "a": 15
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lalr1_table": [
      {
        "S": {
          "shift": 1
        },
        "a": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "a": {
          "shift": 3
        },
        "b": {
          "shift": 4
        }
      },
      {
        "A": {
          "shift": 5
        },
        "C": {
          "shift": 6
        },
        "D": {
          "shift": 7
        },
        "E": {
          "shift": 8
        },
        "a": {
          "reduce": [
            8
          ]
        },
        "b": {
          "reduce": [
            8
          ]
        }
      },
      {
        "B": {
          "shift": 9
        },
        "C": {
          "shift": 10
        },
        "D": {
          "shift": 11
        },
        "E": {
          "shift": 8
        },
        "b": {
          "reduce": [
            8
          ]
        },
        "a": {
          "reduce": [
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "a": {
          "shift": 12
        }
      },
      {
        "b": {
          "shift": 13
        }
      },
      {
        "b": {
          "reduce": [
            6,
            7
          ]
        },
        "a": {
          "reduce": [
            6,
            7
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "b": {
          "shift": 14
        }
      },
      {
        "a": {
          "shift": 15
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      }
    ],
    "transformations.expand": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "a",
              "C",
              "a"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "a",
              "D",
              "b"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "a",
              "b",
              "C",
              "b"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "a",
              "b",
              "D",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "A",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "B",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "B",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "C"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 7,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 7
          },
          {
            "production": [
              "D"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      }
    ],
    "transformations.removeImmediateLeftRecursion": [],
    "transformations.leftFactor": [
      {
        "name": "leftFactor",
        "production": 0,
        "symbol": 0,
        "length": 1,
        "changes": [
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "production": [
              "S",
              "a",
              "S2"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S2",
              "a",
              "A"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S2",
              "b",
              "B"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      }
    ],
    "transformations.epsilonSeparate": [],
    "transformations.removeUnreachable": [],
    "transformations.all": [
      {
        "name": "expand",
        "production": 0,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "a",
              "C",
              "a"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S",
              "a",
              "a",
              "D",
              "b"
            ],
            "operation": "insert",
            "index": 1
          }
        ]
      },
      {
        "name": "expand",
        "production": 1,
        "symbol": 3,
        "changes": [
          {
            "operation": "delete",
            "index": 1
          },
          {
            "production": [
              "S",
              "a",
              "b",
              "C",
              "b"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S",
              "a",
              "b",
              "D",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 2,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 2
          },
          {
            "production": [
              "A",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      },
      {
        "name": "expand",
        "production": 3,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 3
          },
          {
            "production": [
              "A",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 3
          }
        ]
      },
      {
        "name": "expand",
        "production": 4,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 4
          },
          {
            "production": [
              "B",
              "E",
              "b"
            ],
            "operation": "insert",
            "index": 4
          }
        ]
      },
      {
        "name": "expand",
        "production": 5,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 5
          },
          {
            "production": [
              "B",
              "E",
              "a"
            ],
            "operation": "insert",
            "index": 5
          }
        ]
      },
      {
        "name": "expand",
        "production": 6,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 6
          },
          {
            "production": [
              "C"
            ],
            "operation": "insert",
            "index": 6
          }
        ]
      },
      {
        "name": "expand",
        "production": 7,
        "symbol": 1,
        "changes": [
          {
            "operation": "delete",
            "index": 7
          },
          {
            "production": [
              "D"
            ],
            "operation": "insert",
            "index": 7
          }
        ]
      },
      {
        "name": "leftFactor",
        "production": 0,
        "symbol": 0,
        "length": 1,
        "changes": [
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "index": 0,
            "operation": "delete"
          },
          {
            "production": [
              "S",
              "a",
              "S2"
            ],
            "operation": "insert",
            "index": 0
          },
          {
            "production": [
              "S2",
              "a",
              "A"
            ],
            "operation": "insert",
            "index": 1
          },
          {
            "production": [
              "S2",
              "b",
              "B"
            ],
            "operation": "insert",
            "index": 2
          }
        ]
      }
    ]
  },
  "ll2-lr1-1.cfg": {
    "grammar.classification": {
      "ll1": {
        "member": false,
        "reason": "it contains a first set clash"
      },
      "lr0": {
        "member": false,
        "reason": "it contains a shift-reduce conflict"
      },
      "slr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      },
      "lr1": {
        "member": true
      },
      "lalr1": {
        "member": false,
        "reason": "it contains a reduce-reduce conflict"
      }
    },
    "grammar.nonterminals": [
      "Value",
      "V",
      "Real",
      "Int",
      "BOpt",
      "IOpt",
      "Opt"
    ],
    "grammar.terminals": [
      "number",
      "f",
      "i",
      "dot",
      "+"
    ],
    "grammar.symbolInfo": {
      "terminalOrder": [
        "number",
        "f",
        "i",
        "dot",
        "+"
      ],
      "nonterminalOrder": [
        "Value",
        "V",
        "Real",
        "Int",
        "IOpt",
        "BOpt",
        "Opt"
      ],
      "productionOrder": [
        "Value",
        "V",
        "Real",
        "Int",
        "BOpt",
        "IOpt",
        "Opt"
      ],
      "nonterminals": [
        "Value",
        "V",
        "Real",
        "Int",
        "BOpt",
        "IOpt",
        "Opt"
      ],
      "terminals": [
        "number",
        "f",
        "i",
        "dot",
        "+"
      ]
    },
    "grammar.start": "Value",
    "grammar.productions": [
      [
        "Value",
        "number",
        "V"
      ],
      [
        "Value",
        "number"
      ],
      [
        "V",
        "f",
        "Real"
      ],
      [
        "V",
        "i",
        "Int"
      ],
      [
        "Real",
        "IOpt",
        "dot"
      ],
      [
        "Real",
        "BOpt",
        "+"
      ],
      [
        "Int",
        "IOpt",
        "+"
      ],
      [
        "Int",
        "BOpt",
        "dot"
      ],
      [
        "BOpt",
        "Opt"
      ],
      [
        "IOpt",
        "Opt"
      ],
      [
        "Opt"
      ]
    ],
    "grammar.unreachable": [],
    "grammar.unrealizable": [],
    "grammar.nullAmbiguity": [],
    "grammar.nullable": [
      "Opt",
      "BOpt",
      "IOpt"
    ],
    "grammar.first": [
      [
        "Value",
        "number"
      ],
      [
        "V",
        "f"
      ],
      [
        "V",
        "i"
      ],
      [
        "Real",
        "dot"
      ],
      [
        "Real",
        "+"
      ],
      [
        "Int",
        "+"
      ],
      [
        "Int",
        "dot"
      ]
    ],
    "grammar.follow": [
      [
        "Value",
        "Grammar.END"
      ],
      [
        "IOpt",
        "dot"
      ],
      [
        "IOpt",
        "+"
      ],
      [
        "BOpt",
        "+"
      ],
      [
        "BOpt",
        "dot"
      ],
      [
        "V",
        "Grammar.END"
      ],
      [
        "Real",
        "Grammar.END"
      ],
      [
        "Int",
        "Grammar.END"
      ],
      [
        "Opt",
        "+"
      ],
      [
        "Opt",
        "dot"
      ]
    ],
    "grammar.endable": [
      "Value",
      "V",
      "Real",
      "Int"
    ],
    "grammar.sentences": [
      [
        "number"
      ],
      [
        "number",
        "f",
        "dot"
      ],
      [
        "number",
        "f",
        "+"
      ],
      [
        "number",
        "i",
        "+"
      ],
      [
        "number",
        "i",
        "dot"
      ]
    ],
    "grammar.symbols": [
      "Value",
      "number",
      "V",
      "f",
      "Real",
      "i",
      "Int",
      "IOpt",
      "dot",
      "BOpt",
      "+",
      "Opt"
    ],
    "parsing.ll.ll1_classification": {
      "member": false,
      "reason": "it contains a first set clash"
    },
    "parsing.ll.ll1_table": {
      "Value": {
        "number": [
          0,
          1
        ],
        "f": [],
        "i": [],
        "dot": [],
        "+": [],
        "Grammar.END": []
      },
      "V": {
        "number": [],
        "f": [
          2
        ],
        "i": [
          3
        ],
        "dot": [],
        "+": [],
        "Grammar.END": []
      },
      "Real": {
        "number": [],
        "f": [],
        "i": [],
        "dot": [
          4
        ],
        "+": [
          5
        ],
        "Grammar.END": []
      },
      "Int": {
        "number": [],
        "f": [],
        "i": [],
        "dot": [
          7
        ],
        "+": [
          6
        ],
        "Grammar.END": []
      },
      "BOpt": {
        "number": [],
        "f": [],
        "i": [],
        "dot": [
          8
        ],
        "+": [
          8
        ],
        "Grammar.END": []
      },
      "IOpt": {
        "number": [],
        "f": [],
        "i": [],
        "dot": [
          9
        ],
        "+": [
          9
        ],
        "Grammar.END": []
      },
      "Opt": {
        "number": [],
        "f": [],
        "i": [],
        "dot": [
          10
        ],
        "+": [
          10
        ],
        "Grammar.END": []
      }
    },
    "parsing.lr.lr0_classification": {
      "member": false,
      "reason": "it contains a shift-reduce conflict"
    },
    "parsing.lr.lr0_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 0
          },
          {
            "production": 0,
            "index": 0
          },
          {
            "production": 1,
            "index": 0
          }
        ],
        "transitions": {
          "Value": 1,
          "number": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1
          },
          {
            "production": 1,
            "index": 1
          },
          {
            "production": 2,
            "index": 0
          },
          {
            "production": 3,
            "index": 0
          }
        ],
        "transitions": {
          "V": 3,
          "f": 4,
          "i": 5
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1
          },
          {
            "production": 4,
            "index": 0
          },
          {
            "production": 5,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          }
        ],
        "transitions": {
          "Real": 6,
          "IOpt": 7,
          "BOpt": 8,
          "Opt": 9
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1
          },
          {
            "production": 6,
            "index": 0
          },
          {
            "production": 7,
            "index": 0
          },
          {
            "production": 9,
            "index": 0
          },
          {
            "production": 8,
            "index": 0
          },
          {
            "production": 10,
            "index": 0
          }
        ],
        "transitions": {
          "Int": 10,
          "IOpt": 11,
          "BOpt": 12,
          "Opt": 9
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1
          }
        ],
        "transitions": {
          "dot": 13
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1
          }
        ],
        "transitions": {
          "+": 14
        }
      },
      {
        "kernel": [
          {
            "production": 9,
            "index": 1
          },
          {
            "production": 8,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 9,
            "index": 1
          },
          {
            "production": 8,
            "index": 1
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1
          }
        ],
        "transitions": {
          "+": 15
        }
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 1
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 1
          }
        ],
        "transitions": {
          "dot": 16
        }
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 2
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 7,
            "index": 2
          }
        ],
        "items": [
          {
            "production": 7,
            "index": 2
          }
        ],
        "transitions": {}
      }
    ],
    "parsing.lr.lr0_table": [
      {
        "shift": {
          "Value": 1,
          "number": 2
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          -1
        ]
      },
      {
        "shift": {
          "V": 3,
          "f": 4,
          "i": 5
        },
        "reduce": [
          1
        ]
      },
      {
        "shift": {},
        "reduce": [
          0
        ]
      },
      {
        "shift": {
          "Real": 6,
          "IOpt": 7,
          "BOpt": 8,
          "Opt": 9
        },
        "reduce": [
          10
        ]
      },
      {
        "shift": {
          "Int": 10,
          "IOpt": 11,
          "BOpt": 12,
          "Opt": 9
        },
        "reduce": [
          10
        ]
      },
      {
        "shift": {},
        "reduce": [
          2
        ]
      },
      {
        "shift": {
          "dot": 13
        },
        "reduce": []
      },
      {
        "shift": {
          "+": 14
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          9,
          8
        ]
      },
      {
        "shift": {},
        "reduce": [
          3
        ]
      },
      {
        "shift": {
          "+": 15
        },
        "reduce": []
      },
      {
        "shift": {
          "dot": 16
        },
        "reduce": []
      },
      {
        "shift": {},
        "reduce": [
          4
        ]
      },
      {
        "shift": {},
        "reduce": [
          5
        ]
      },
      {
        "shift": {},
        "reduce": [
          6
        ]
      },
      {
        "shift": {},
        "reduce": [
          7
        ]
      }
    ],
    "parsing.lr.slr1_classification": {
      "member": false,
      "reason": "it contains a reduce-reduce conflict"
    },
    "parsing.lr.slr1_table": [
      {
        "Value": {
          "shift": 1
        },
        "number": {
          "shift": 2
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            -1
          ]
        }
      },
      {
        "V": {
          "shift": 3
        },
        "f": {
          "shift": 4
        },
        "i": {
          "shift": 5
        },
        "Grammar.END": {
          "reduce": [
            1
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            0
          ]
        }
      },
      {
        "Real": {
          "shift": 6
        },
        "IOpt": {
          "shift": 7
        },
        "BOpt": {
          "shift": 8
        },
        "Opt": {
          "shift": 9
        },
        "+": {
          "reduce": [
            10
          ]
        },
        "dot": {
          "reduce": [
            10
          ]
        }
      },
      {
        "Int": {
          "shift": 10
        },
        "IOpt": {
          "shift": 11
        },
        "BOpt": {
          "shift": 12
        },
        "Opt": {
          "shift": 9
        },
        "+": {
          "reduce": [
            10
          ]
        },
        "dot": {
          "reduce": [
            10
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            2
          ]
        }
      },
      {
        "dot": {
          "shift": 13
        }
      },
      {
        "+": {
          "shift": 14
        }
      },
      {
        "dot": {
          "reduce": [
            9,
            8
          ]
        },
        "+": {
          "reduce": [
            9,
            8
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            3
          ]
        }
      },
      {
        "+": {
          "shift": 15
        }
      },
      {
        "dot": {
          "shift": 16
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            4
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            5
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            6
          ]
        }
      },
      {
        "Grammar.END": {
          "reduce": [
            7
          ]
        }
      }
    ],
    "parsing.lr.lr1_automaton": [
      {
        "kernel": [
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": -1,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "Value": 1,
          "number": 2
        }
      },
      {
        "kernel": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": -1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 1,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 2,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 3,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "V": 3,
          "f": 4,
          "i": 5
        }
      },
      {
        "kernel": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 0,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 4,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 5,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "dot"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "dot",
              "+"
            ]
          }
        ],
        "transitions": {
          "Real": 6,
          "IOpt": 7,
          "BOpt": 8,
          "Opt": 9
        }
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 6,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 7,
            "index": 0,
            "lookaheads": [
              "Grammar.END"
            ]
          },
          {
            "production": 8,
            "index": 0,
            "lookaheads": [
              "dot"
            ]
          },
          {
            "production": 9,
            "index": 0,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 10,
            "index": 0,
            "lookaheads": [
              "+",
              "dot"
            ]
          }
        ],
        "transitions": {
          "Int": 10,
          "IOpt": 11,
          "BOpt": 12,
          "Opt": 13
        }
      },
      {
        "kernel": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 2,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 4,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "dot": 14
        }
      },
      {
        "kernel": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 5,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {
          "+": 15
        }
      },
      {
        "kernel": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "dot"
            ]
          }
        ],
        "items": [
          {
            "production": 8,
            "index": 1,
            "lookaheads": [
              "+"
            ]
          },
          {
            "production": 9,
            "index": 1,
            "lookaheads": [
              "dot"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 3,
            "index": 2,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "transitions": {}
      },
      {
        "kernel": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
            ]
          }
        ],
        "items": [
          {
            "production": 6,
            "index": 1,
            "lookaheads": [
              "Grammar.END"
  }