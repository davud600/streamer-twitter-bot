import TwitchServiceParams from "../interfaces/twitch.params.interface";
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
        let token: any = null;
        const headers = {
            "Content-Type": "application/json"
        };
        const body = {
            client_id: this.twitchClientId,
            client_secret: this.twitchClientSecret,
            grant_type: "client_credentials"
        };

        try {
            const res = await axios.post(`${this.twitchGetTokenUrl}`, body, {
                headers
            });

            token = res?.data?.access_token;
        } catch (error) {
            console.error(error);
        }

        return token;
    }

    /**
     *
     * @returns boolean if streamer is live
     */
    public async isStreamerLive(): Promise<boolean> {
        const Token = await this.getAccessToken();

        let isLive: any = null;
        const headers: any = {
            "Content-Type": "application/json",
            "Client-Id": this.twitchClientId,
            Authorization: `Bearer ${Token}`
        };

        try {
            const res = await axios.get(
                `${this.twitchApiUrl}?user_login=${this.twitchUsername}`,
                {
                    headers
                }
            );

            isLive = res?.data?.data.find(
                (s: any) =>
                    s.user_login === this.twitchUsername.toLocaleLowerCase()
            );
        } catch (error) {
            console.error(error);
        }

        return isLive !== null && isLive !== undefined;
    }
}
