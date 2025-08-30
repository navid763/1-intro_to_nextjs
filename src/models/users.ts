interface UserLocation {
    city: string;
    province: string;
}

interface UserPreferences {
    notifications: boolean;
    newsletter: boolean;
}

export interface Users {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    phoneNumber: string;
    isVerified: boolean;
    memberSince: string; // ISO date string
    location: UserLocation;
    preferences: UserPreferences;
}
