interface ContactInfo {
    phone: string;
    website: string;
}
export interface Warranty {
    id: number;
    title: string;
    duration: number;
    provider: string;
    coverage: string[];
    excludes: string[];
    contactInfo: ContactInfo;
}