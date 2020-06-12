import {GeolocationPosition} from '@capacitor/core';

export class AppImage {
    public data64Image: string;
    public emailAttachment: string;
    public description: string;
    public geolocation: GeolocationPosition;

    constructor(image: string, desc: string, geolocationPosition: GeolocationPosition, email: string) {
        this.data64Image = image;
        this.description = desc;
        this.geolocation = geolocationPosition;
        this.emailAttachment = email;
    }

    getLat() {
        return this.geolocation.coords.latitude;
    }

    getLng() {
        return this.geolocation.coords.longitude;
    }
}
