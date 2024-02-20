import IDoc from "@/contracts/IDocData"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const docData: Array<IDoc> = [
    {
        id: 'scp',
        model: 'SCP',
        description: 'Information about the SCP"s',
        example: `${BASE_URL}scp`,
        methods: ['GET'],
        data: [
            {
                endpoint: "v1/scp",
                description: "Get All SCP's",
                params: [
                    {
                        name: "limit",
                        datatype: "integer",
                        example: "v1/scp?limit=10"
                    }
                ]
            },
            {
                endpoint: "v1/scp/{{scp_number}}",
                description: "Get information of a certain SCP",
                params: []
            }
        ]
    },
    {
        id: 'interviews',
        model: 'Interviews',
        description: 'Information about the SCP"s Interviews',
        example: `${BASE_URL}interviews`,
        methods: ['GET'],
        data: [
            {
                endpoint: 'v1/interviews',
                description: 'Get All Interviews',
                params: [
                    {
                        name: 'limit',
                        datatype: 'integer',
                        example: 'v1/interviews?limit=10'
                    }
                ]
            },
            {
                endpoint: 'v1/interviews/{{scp_number}}',
                description: 'Get Interviews of a certain SCP',
                params: []
            }
        ]
    },
    {
        id: 'categories',
        model: 'Categories',
        description: 'Information about the SCP organization Categories',
        example: `${BASE_URL}categories`,
        methods: ['GET'],
        data: [
            {
                endpoint: "v1/categories",
                description: "Get All organization Categories",
                params: [
                    {
                        name: "limit",
                        datatype: "integer",
                        example: "v1/categories?limit=10"
                    }
                ]
            },
            {
                endpoint: "v1/categories/{{category_name}}",
                description: "Get information of a certain Category",
                params: []
            }
        ]
    }
]
export default docData