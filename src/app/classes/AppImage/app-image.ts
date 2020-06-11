import {GeolocationPosition} from '@capacitor/core';

export class AppImage {
    public data64Image: string;
    public description: string;
    public geolocation: GeolocationPosition;
    constructor(image: string, desc: string, geolocationPosition: GeolocationPosition) {
        this.data64Image = image;
        this.description = desc;
        this.geolocation = geolocationPosition;
    }
    getLat(){
        return this.geolocation.coords.latitude;
    }
    getLng(){
        return this.geolocation.coords.longitude;
    }
}
