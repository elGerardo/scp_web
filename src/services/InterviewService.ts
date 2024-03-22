import axios from "axios"

export default class InterviewService {
    public static async store(token: string, data: object){
        let response: any
        try {
            response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/interviews`, data, {
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