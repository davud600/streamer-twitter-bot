import TwitchServiceParams from "./interfaces/twitch.params.interface";
import axios from "axios";

export default class TwitchService {
    /**
     * Twitch account username
     */
    private twitchUsername: string;

    /**
     * Twitch keys
     */
    private twitchClientId: string;
    private twitchClientSecret: string;

    /**
     * Twitch urls
     */
    private twitchGetTokenUrl: string = "https://id.twitch.tv/oauth2/token";
    private twitchApiUrl: string = "https://api.twitch.tv/helix/streams";

    public constructor({
        twitchUsername,
        twitchClientId,
        twitchClientSecret
    }: TwitchServiceParams) {
        this.twitchUsername = twitchUsername;
        this.twitchClientId = twitchClientId;
        this.twitchClientSecret = twitchClientSecret;
    }

    /**
     *
     * @returns twitch api access token
     */
    private async getAccessToken(): Promise<string> {
        let data: any;
        const headers = {
            "Content-Type": "application/json"
        };
        const body = {
            client_id: this.twitchClientId,
            client_secret: this.twitchClientSecret,
            grant_type: "client_credentials"
        };

        // const res = await fetch(`${TWITCH_GET_TOKEN_URL}`, {
        //     method: "POST",
        //     body: JSON.stringify(body),
        //     headers
        // });
        // data = await res.json();

        axios
            .post(`${this.twitchGetTokenUrl}`, body, {
                headers
            })
            .then((data) => {
                data = data;
            })
            .catch((e) => {
                console.error(e);
            });

        return data?.access_token;
    }

    /**
     *
     * @returns boolean if streamer is live
     */
    public async isStreamerLive(): Promise<boolean> {
        const Token = await this.getAccessToken();

        let data: any;
        const headers: any = {
            "Content-Type": "application/json",
            "Client-Id": this.twitchClientId,
            Authorization: `Bearer ${Token}`
        };

        // const res = await fetch(
        //     `${TWITCH_API_URL}?user_login=${this.twitchUsername}`,
        //     {
        //         headers
        //     }
        // );
        // data = await res.json();

        axios
            .get(`${this.twitchApiUrl}?user_login=${this.twitchUsername}`, {
                headers
            })
            .then((data) => {
                data = data;
            })
            .catch((e) => {
                console.error(e);
            });

        const isLive = data?.data?.find(
            (s: any) => s.user_login === this.twitchUsername.toLocaleLowerCase()
        );

        return isLive !== null && isLive !== undefined;
    }
}
