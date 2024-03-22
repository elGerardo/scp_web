import { INotFound } from "@/interfaces/INotFound";
import axios from "axios";

interface IGetData {
    name: string;
    picture: string | null;
    description: string;
}

interface IGet {
    data: Array<IGetData>;
}

export default class SCPService {
    public static async get(url: string): Promise<IGet | INotFound> {
        let response: any
        try {
            response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    mode: "cors"
                }
            })
        } catch (error: any) {
            if (error['response']['status'] === 404) return { message: error['response']['data']['message'] }
            if (error['response']['status'] === 500) return { message: "Server error" }
        }

        return { data: response.data.data }
    }

    public static async getWithIds(token: string) {
        let response: any
        try {
            response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/scp_ids`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                    mode: "cors"
                }
            })
        } catch (error: any) {
            if (error['response']['status'] === 500) return { message: "Server error" }

        }

        return { data: response.data.data }
    }
}