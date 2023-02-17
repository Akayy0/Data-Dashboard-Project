export interface IApiResponse {
    id: string,
    name_pt: string,
    name_en: string,
    old_id: string,
    extra_info_content: number,
    mesoregion: Oregion,
    microregion: Oregion,
    state: State,
    region: Region
}
export interface IAutocomplete {
    label: number,
    name: string
}
export interface Oregion {
    id: string;
    name_pt: string;
    name_en: string;
    old_id: string;
}
export interface Region {
    id: number;
    name_en: string;
    abbr_en: string;
    name_pt: string;
    abbr_pt: string;
    old_id: number;
}
export interface State {
    id: string;
    name_pt: string;
    name_en: string;
    abbr_pt: string;
    abbr_en: string;
    old_id: string;
}
