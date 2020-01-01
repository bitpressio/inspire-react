"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var inspire_1 = require("./inspire");
exports.Inspire = function (props) {
    return React.createElement("blockquote", null, props.quote ? props.quote : inspire_1.default());
};
//# sourceMappingURL=index.js.map