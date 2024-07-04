export interface GeoObject {
  id: string;
  name: string;
  address_comment: string;
  address_name: string;
  external_content?: [
    {
      main_photo_url: string;
    },
  ];
  schedule: {
    Fri: {
      working_hours: [
        {
          from: '10:00';
          to: '22:00';
        },
      ];
    };
  };
  full_address_name: string;
  description?: string;
  point: {
    lat: number;
    lon: number;
  };
  rubrics: [{ id: number }];
  type: string;
}
