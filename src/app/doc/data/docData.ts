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
                        datatype: "number",
                        example: "v1/scp?limit=10"
                    },
                    {
                        name: "page",
                        datatype: "number",
                        example: "v1/scp?page=10"
                    },
                    {
                        name: "searchBy",
                        datatype: "json",
                        example: 'v1/scp?searchBy={"field":"scp","value":"49"}'
                    },
                    {
                        name: "orderBy",
                        datatype: "json",
                        example: 'v1/scp?orderBy={"field":"scp","order":"asc or desc"}'
                    },
                    {
                        name: "between",
                        datatype: "array",
                        example: 'v1/scp?between=["1","100"]'
                    },
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
                        datatype: 'number',
                        example: 'v1/interviews?limit=10'
                    },
                    {
                        name: "page",
                        datatype: "number",
                        example: "v1/interviews?page=10"
                    },
                    {
                        name: "searchBy",
                        datatype: "json",
                        example: 'v1/scp?searchBy={"field":"scp_id","value":"49"}'
                    },
                    {
                        name: "orderBy",
                        datatype: "json",
                        example: 'v1/scp?orderBy={"field":"scp_id","order":"asc or desc"}'
                    },
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
                        datatype: "number",
                        example: "v1/categories?limit=10"
                    },
                    {
                        name: "page",
                        datatype: "number",
                        example: "v1/categories?page=10"
                    },
                    {
                        name: "searchBy",
                        datatype: "json",
                        example: 'v1/scp?searchBy={"field":"name","value":"Euclid"}'
                    },
                    {
                        name: "orderBy",
                        datatype: "json",
                        example: 'v1/scp?orderBy={"field":"name","order":"asc or desc"}'
                    },

                ]
            },
            {
                endpoint: "v1/categories/{{category_name}}",
                description: "Get information of a certain Category",
                params: []
            }
        ]
    },
    {
        id: 'enemies',
        model: 'Enemies',
        description: 'Information about an SCP"s enemies',
        example: `${BASE_URL}categories`,
        methods: ['GET'],
        data: [
            {
                endpoint: "v1/enemies",
                description: "Get All SCPs with Enemies",
                params: [
                    {
                        name: "limit",
                        datatype: "number",
                        example: "v1/scp?limit=10"
                    },
                    {
                        name: "page",
                        datatype: "number",
                        example: "v1/scp?page=10"
                    },
                    {
                        name: "searchBy",
                        datatype: "json",
                        example: 'v1/scp?searchBy={"field":"scp","value":"49"}'
                    },
                    {
                        name: "orderBy",
                        datatype: "json",
                        example: 'v1/scp?orderBy={"field":"scp","order":"asc or desc"}'
                    },
                    {
                        name: "between",
                        datatype: "array",
                        example: 'v1/scp?between=["1","100"]'
                    },
                ]
            },
            {
                endpoint: "v1/enemies/{{scp_id}}",
                description: "Get All SCP's Enemies",
                params: []
            }
        ]
    }
]
export default docData