export interface GeoObject {
    id: string;
    name: string;
    address_comment: string;
    address_name: string;
    external_content?: [
        {
            main_photo_url: string
        }
    ];
    full_address_name: string;
    description?: string;
    point: {
        lat: number;
        lon: number;
    };
    rubrics: [
        { id: number }
    ];
    type: string;
}