export interface IHome {

}

export interface IApiResponse {
    status: "success" | "error",
    message: string[]
}

export interface IStates {
    id: number,
    nome: string
    municipio:
    {
        id: number,
        nome: string,
        microrregiao: any,
        regiaoImediata: any,
    }
}

export interface IAutocomplete {
    label: number,
    name: string
}