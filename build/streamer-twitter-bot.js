"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var twitch_service_1 = __importDefault(require("./twitch.service"));
var twitter_service_1 = __importDefault(require("./twitter.service"));
var StreamerTwitterBot = /** @class */ (function () {
    function StreamerTwitterBot(_a) {
        var twitchServiceParams = _a.twitchServiceParams, twitterServiceParams = _a.twitterServiceParams, intervalTimeMillisec = _a.intervalTimeMillisec;
        /**
         * Update frequency (increase for less resource consumption)
         * Default set to one minute
         */
        this.intervalTimeMillisec = 60 * 1000;
        this.amountOfhoursLive = 0;
        this.initTwitchService(twitchServiceParams);
        this.initTwitterService(twitterServiceParams);
        this.intervalTimeMillisec = intervalTimeMillisec;
    }
    /**
     * Starts loop to run program
     */
    StreamerTwitterBot.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 6];
                        console.log("Interval Called");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.TwitchService.isStreamerLive()];
                    case 2:
                        _a.isLive = _b.sent();
                        if (this.isLive && !this.wasLive) {
                            this.TwitterService.makeTweet();
                            this.wasLive = true;
                        }
                        else if (this.isLive && this.wasLive) {
                        }
                        else if (!this.isLive && this.wasLive) {
                            this.wasLive = false;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, new Promise(function (resolve) {
                            return setTimeout(resolve, _this.intervalTimeMillisec);
                        })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 0];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initialise twitch serivce
     * @param twitchServiceParams Twitch options
     */
    StreamerTwitterBot.prototype.initTwitchService = function (twitchServiceParams) {
        this.TwitchService = new twitch_service_1.default(twitchServiceParams);
    };
    /**
     * Initialise twitter service
     * @param twitterServiceParams Twitter options
     */
    StreamerTwitterBot.prototype.initTwitterService = function (twitterServiceParams) {
        this.TwitterService = new twitter_service_1.default(twitterServiceParams);
    };
    return StreamerTwitterBot;
}());
exports.default = StreamerTwitterBot;