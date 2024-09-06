import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Country {

    @Prop({ required: false })
    id:number;

    @Prop({ required: false })
    latLng: [number, number];

    @Prop({ required: false })
    name: string;

    @Prop({ required: false, default:false })
    liked: boolean;

    @Prop({ required: false })
    oficialName:string;

}

export const CountrySchema = SchemaFactory.createForClass( Country );