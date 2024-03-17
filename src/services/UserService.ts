import axios from "axios";

export default class UserService {
    public static async login(payload: { email: string, password: string }): Promise<{ access_token: string, status: number }> {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json',
                mode: "cors"
            },
        })

        return { ...response.data, status: response.status }
    }
}