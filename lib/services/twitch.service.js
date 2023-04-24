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
var axios_1 = __importDefault(require("axios"));
var TwitchService = (function () {
    function TwitchService(_a) {
        var twitchUsername = _a.twitchUsername, twitchClientId = _a.twitchClientId, twitchClientSecret = _a.twitchClientSecret;
        this.twitchGetTokenUrl = "https://id.twitch.tv/oauth2/token";
        this.twitchApiUrl = "https://api.twitch.tv/helix/streams";
        this.twitchUsername = twitchUsername;
        this.twitchClientId = twitchClientId;
        this.twitchClientSecret = twitchClientSecret;
    }
    TwitchService.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, headers, body;
            return __generator(this, function (_a) {
                headers = {
                    "Content-Type": "application/json"
                };
                body = {
                    client_id: this.twitchClientId,
                    client_secret: this.twitchClientSecret,
                    grant_type: "client_credentials"
                };
                axios_1.default
                    .post("".concat(this.twitchGetTokenUrl), body, {
                    headers: headers
                })
                    .then(function (data) {
                    data = data;
                })
                    .catch(function (e) {
                    console.error(e);
                });
                return [2, data === null || data === void 0 ? void 0 : data.access_token];
            });
        });
    };
    TwitchService.prototype.isStreamerLive = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var Token, data, headers, isLive;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.getAccessToken()];
                    case 1:
                        Token = _b.sent();
                        headers = {
                            "Content-Type": "application/json",
                            "Client-Id": this.twitchClientId,
                            Authorization: "Bearer ".concat(Token)
                        };
                        axios_1.default
                            .get("".concat(this.twitchApiUrl, "?user_login=").concat(this.twitchUsername), {
                            headers: headers
                        })
                            .then(function (data) {
                            data = data;
                        })
                            .catch(function (e) {
                            console.error(e);
                        });
                        isLive = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.user_login === _this.twitchUsername.toLocaleLowerCase(); });
                        return [2, isLive !== null && isLive !== undefined];
                }
            });
        });
    };
    return TwitchService;
}());
exports.default = TwitchService;
