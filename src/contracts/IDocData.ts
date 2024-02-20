interface IDocDataParams {
    name: string
    datatype: string
    example: string
}

interface IDocData {
    endpoint: string
    description: string
    params: Array<IDocDataParams>
}

export default interface IDoc {
    id: string
    model: string
    description: string
    example: string
    methods: Array<string>
    data: Array<IDocData>
}