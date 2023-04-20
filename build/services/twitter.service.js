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
var twit_1 = __importDefault(require("twit"));
var TwitterService = /** @class */ (function () {
    function TwitterService(_a) {
        var tweetStatus = _a.tweetStatus, twitchChannelLink = _a.twitchChannelLink, earlyStreamTextOptions = _a.earlyStreamTextOptions, lateStreamTextOptions = _a.lateStreamTextOptions, normalStreamTextOptions = _a.normalStreamTextOptions, twitterConsumerKey = _a.twitterConsumerKey, twitterConsumerSecret = _a.twitterConsumerSecret, twitterAccessTokenKey = _a.twitterAccessTokenKey, twitterAccessTokenSecret = _a.twitterAccessTokenSecret;
        var T = new twit_1.default({
            consumer_key: twitterConsumerKey,
            consumer_secret: twitterConsumerSecret,
            access_token: twitterAccessTokenKey,
            access_token_secret: twitterAccessTokenSecret
        });
        this.tweetStatus = tweetStatus;
        this.twitchChannelLink = twitchChannelLink;
        this.earlyStreamTextOptions = earlyStreamTextOptions;
        this.lateStreamTextOptions = lateStreamTextOptions;
        this.normalStreamTextOptions = normalStreamTextOptions;
    }
    /**
     * Build status and send tweet using twitter api
     */
    TwitterService.prototype.makeTweet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, randomText;
            return __generator(this, function (_a) {
                date = new Date();
                randomText = "";
                if (this.lateStreamTextOptions !== null && date.getHours() >= 22)
                    randomText = this.getRandomText(this.lateStreamTextOptions);
                else if (this.earlyStreamTextOptions !== null && date.getHours() <= 19)
                    randomText = this.getRandomText(this.earlyStreamTextOptions);
                else if (this.normalStreamTextOptions !== null)
                    randomText = this.getRandomText(this.normalStreamTextOptions);
                this.T.post("statuses/update", {
                    status: "".concat(this.tweetStatus, " ").concat(randomText, " (").concat(date
                        .toString()
                        .substring(0, 25), ")\n            ").concat(this.twitchChannelLink)
                }, function (e, data, res) {
                    if (e)
                        console.error(e);
                    console.log("---- Twitter api log START ----");
                    console.log("--- data ---");
                    console.log(data);
                    console.log("--- response ---");
                    console.log(res);
                    console.log("---- Twitter api log END ----");
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param textOptions array of text vars
     * @returns random text from array
     */
    TwitterService.prototype.getRandomText = function (textOptions) {
        var text = textOptions[0];
        var randomNums = [];
        for (var i = 0; i < textOptions.length; i++) {
            randomNums[i] = Math.round(Math.random() * 10); // random num 0-9
            if (i == 0 || randomNums[i - 1] > randomNums[i])
                continue;
            text = textOptions[i];
        }
        return text;
    };
    return TwitterService;
}());
exports.default = TwitterService;
