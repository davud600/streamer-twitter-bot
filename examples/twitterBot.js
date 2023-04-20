const StreamerTwitterBot = require("../build");
const dotenv = require("dotenv");

dotenv.config();

const twitchServiceParams = {
    twitchUsername: "gentij",
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET
};

const twitterServiceParams = {
    // tweetStatus: "Gentij is now Streaming Live on Twitch, go watch!"
    tweetStatus: "testing hii guyss cc:",
    twitchChannelLink: "https://www.twitch.tv/gentij",
    earlyStreamTextOptions: [
        "Early stream? who is this guy.",
        "W sleep schedule.",
        "Early stream :D."
    ],
    lateStreamTextOptions: [
        "Rip sleep schedule.",
        "Grinding no sleep.",
        "Late stream :D."
    ],
    twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
    twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    twitterAccessTokenKey: process.env.TWITTER_ACCESS_TOKEN_KEY,
    twitterAccessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const streamerTwitterBot = new StreamerTwitterBot({
    twitchServiceParams,
    twitterServiceParams
});

streamerTwitterBot.start();
