export declare class Country {
    id: number;
    latLng: [number, number];
    name: string;
    liked: boolean;
    oficialName: string;
}
export declare const CountrySchema: import("mongoose").Schema<Country, import("mongoose").Model<Country, any, any, any, import("mongoose").Document<unknown, any, Country> & Country & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Country, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Country>> & import("mongoose").FlatRecord<Country> & {
    _id: import("mongoose").Types.ObjectId;
}>;
