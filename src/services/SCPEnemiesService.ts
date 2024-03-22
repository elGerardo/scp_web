import axios from "axios"

export default class SCPEnemiesService {
    public static async store(token: string, scp_id: string, scp_enemy_id: string) {
        let response: any
        try {
            response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/enemies/${scp_id}/enemy/${scp_enemy_id}`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                    mode: "cors"
                }
            })
        } catch (error: any) {
            if (error['response']['status'] === 500) return { message: "Server error" }
        }

        return { status: response.status }
    }

    public static async destroy(token: string, scp_id: string, scp_enemy_id: string) {
        let response: any
        try {
            response = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/enemies/${scp_id}/enemy/${scp_enemy_id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                    mode: "cors"
                }
            })
        } catch (error: any) {
            if (error['response']['status'] === 500) return { message: "Server error" }
        }

        return { status: response.status }
    }

}