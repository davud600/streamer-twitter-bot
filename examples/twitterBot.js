const StreamerTwitterBot = require("../lib"); // require("streamer-twitter-bot")
const dotenv = require("dotenv");

dotenv.config();

const twitchServiceParams = {
    twitchUsername: "gentij",
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET
};

const twitterServiceParams = {
    tweetStatus: "testing hii guyss cc:",
    twitchChannelLink: "https://www.twitch.tv/gentij",
    earlyStreamTextOptions: ["Early stream?"],
    lateStreamTextOptions: ["Late stream :D."],
    twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
    twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    twitterAccessTokenKey: process.env.TWITTER_ACCESS_TOKEN_KEY,
    twitterAccessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const s = new StreamerTwitterBot.default({
    twitchServiceParams,
    twitterServiceParams
});

s.start(() => console.log(s.getTimeLive()));
