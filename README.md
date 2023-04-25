# streamer-twitter-bot

- Create your own twitter bot that tweets when a twitch channel is live! cc:
- Use callbacks to customise functionallity.
- Check channel status, time channel has been live for, tweet automatically...

```
const twitchServiceParams = {
    twitchUsername: "twitch channel username",
    twitchClientId: TWITCH_CLIENT_ID,
    twitchClientSecret: TWITCH_CLIENT_SECRET
};

const twitterServiceParams = {
    tweetStatus: "testing hii guyss cc:",
    twitchChannelLink: "https://www.twitch.tv/...",
    earlyStreamTextOptions: ["Early stream?"],
    lateStreamTextOptions: ["Late stream :D."],
    twitterConsumerKey: TWITTER_CONSUMER_KEY,
    twitterConsumerSecret: TWITTER_CONSUMER_SECRET,
    twitterAccessTokenKey: TWITTER_ACCESS_TOKEN_KEY,
    twitterAccessTokenSecret: TWITTER_ACCESS_TOKEN_SECRET
};

const s = new StreamerTwitterBot.default({
    twitchServiceParams,
    twitterServiceParams,
    60000 // default, milliseconds to run interval in
});

s.start(() => console.log(s.getTimeLive()));
```

## Typsecript interfaces

```
interface TwitchServiceParams {
    twitchUsername: string;
    twitchClientId: string;
    twitchClientSecret: string;
}

interface TwitterServiceParams {
    tweetStatus: string;
    twitchChannelLink?: TwitchLink;
    earlyStreamTextOptions?: string[];
    lateStreamTextOptions?: string[];
    normalStreamTextOptions?: string[];
    twitterConsumerKey: string;
    twitterConsumerSecret: string;
    twitterAccessTokenKey: string;
    twitterAccessTokenSecret: string;
}

type TwitchLink = `${"https://www.twitch.tv/"}${string}`;

interface StreamerTwitterBotParams {
    twitchServiceParams: TwitchServiceParams;
    twitterServiceParams: TwitterServiceParams;
    intervalTimeMillisec?: number; // default 60 seconds
}
```

## class StreamerTwitterBot

- start(initialCallback finalCallback):
  - Starts program loop to check for twitch channel status and tweet.
  - Initial callback is called first in the loop.
  - Final callback is called last in the loop.
  
- getTimeLive()
  - Returns time for which twitch channel has been live for (in ms).
