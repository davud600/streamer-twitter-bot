import StreamerTwitterBot from "../lib";

const twitchServiceParams = {
    twitchUsername: "gentij",
    twitchClientId: "",
    twitchClientSecret: ""
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
    twitterConsumerKey: "",
    twitterConsumerSecret: "",
    twitterAccessTokenKey: "",
    twitterAccessTokenSecret: ""
};

const streamerTwitterBot = new StreamerTwitterBot({
    twitchServiceParams,
    twitterServiceParams
});

streamerTwitterBot.start();
