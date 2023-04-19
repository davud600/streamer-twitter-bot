"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import TwitchServiceParams from "./interfaces/twitch.params.interface";
// import TwitterServiceParams from "./interfaces/twitter.params.interface";
var streamer_twitter_bot_1 = __importDefault(require("./streamer-twitter-bot"));
// const twitchServiceParams: TwitchServiceParams = {
//     twitchUsername: "gentij"
// };
// const twitterServiceParams: TwitterServiceParams = {
//     // tweetStatus: "Gentij is now Streaming Live on Twitch, go watch!"
//     tweetStatus: "testing hii guyss cc:",
//     twitchChannelLink: "https://www.twitch.tv/gentij",
//     earlyStreamTextOptions: [
//         "Early stream? who is this guy.",
//         "W sleep schedule.",
//         "Early stream :D."
//     ],
//     lateStreamTextOptions: [
//         "Rip sleep schedule.",
//         "Grinding no sleep.",
//         "Late stream :D."
//     ]
// };
// const streamerTwitterBot: StreamerTwitterBot = new StreamerTwitterBot({
//     twitchServiceParams,
//     twitterServiceParams
// });
// streamerTwitterBot.start();
exports.default = streamer_twitter_bot_1.default;
