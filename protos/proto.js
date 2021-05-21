/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Person: {
    nested: {
      Person: {
        oneofs: {
          _email: {
            oneof: [
              "email"
            ]
          }
        },
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          email: {
            type: "string",
            id: 3,
            options: {
              proto3_optional: true
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
