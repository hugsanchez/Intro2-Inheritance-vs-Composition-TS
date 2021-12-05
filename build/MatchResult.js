"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
var MatchResult;
(function (MatchResult) {
    //enum purpose is to signal to other coders that this is a
    //collection of closely related values
    //Can be used as a type indicate the return result type
    //could be any of the enum values we stated
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
;
