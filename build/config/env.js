"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWITTER_ACCESS_TOKEN_SECRET = exports.TWITTER_ACCESS_TOKEN_KEY = exports.TWITTER_CONSUMER_SECRET = exports.TWITTER_CONSUMER_KEY = exports.TWITCH_CLIENT_SECRET = exports.TWITCH_CLIENT_ID = exports.TWITCH_API_URL = exports.TWITCH_GET_TOKEN_URL = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.TWITCH_GET_TOKEN_URL = (_a = process.env, _a.TWITCH_GET_TOKEN_URL), exports.TWITCH_API_URL = _a.TWITCH_API_URL, exports.TWITCH_CLIENT_ID = _a.TWITCH_CLIENT_ID, exports.TWITCH_CLIENT_SECRET = _a.TWITCH_CLIENT_SECRET, exports.TWITTER_CONSUMER_KEY = _a.TWITTER_CONSUMER_KEY, exports.TWITTER_CONSUMER_SECRET = _a.TWITTER_CONSUMER_SECRET, exports.TWITTER_ACCESS_TOKEN_KEY = _a.TWITTER_ACCESS_TOKEN_KEY, exports.TWITTER_ACCESS_TOKEN_SECRET = _a.TWITTER_ACCESS_TOKEN_SECRET;
