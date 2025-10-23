interface OpeningHours {
    day: string;
    hours: string;
}

interface LocationData {
    name: string;
    address: string;
    phone: string;
    email: string;
    mapUrl: string;
    directionsUrl: string;
}

interface LocationConfig {
    locationData: LocationData;
    openingHours: OpeningHours[];
}

// Default opening hours (used for most locations)
const standardOpeningHours: OpeningHours[] = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
];

// Extended hours for some locations
const extendedOpeningHours: OpeningHours[] = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 7:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
];

export const locationConfigs: Record<string, LocationConfig> = {
    broadmeadows: {
        locationData: {
            name: "Y3 Smiles Dental",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"

        },
        openingHours: standardOpeningHours
    },

    glenroy: {
        locationData: {
            name: "Y3 Smiles Dental - Glenroy Area",
            address: "Serving Glenroy and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.914!3d-37.701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGlenroy+VIC+3046!5e0!3m2!1sen!2sau!4v1234567890124",
            directionsUrl: "https://maps.google.com/?q=Glenroy,+VIC+3046"
        },
        openingHours: standardOpeningHours
    },

    greenvale: {
        locationData: {
            name: "Y3 Smiles Dental - Greenvale Area",
            address: "Serving Greenvale and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.879!3d-37.665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGreenvale+VIC+3059!5e0!3m2!1sen!2sau!4v1234567890125",
            directionsUrl: "https://maps.google.com/?q=Greenvale,+VIC+3059"
        },
        openingHours: extendedOpeningHours
    },

    campbellfield: {
        locationData: {
            name: "Y3 Smiles Dental - Campbellfield Area",
            address: "Serving Campbellfield and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.949!3d-37.678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCampbellfield+VIC+3061!5e0!3m2!1sen!2sau!4v1234567890126",
            directionsUrl: "https://maps.google.com/?q=Campbellfield,+VIC+3061"
        },
        openingHours: standardOpeningHours
    },

    "meadow-heights": {
        locationData: {
            name: "Y3 Smiles Dental - Meadow Heights Area",
            address: "Serving Meadow Heights and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12812.180281159392!2d144.9143930486328!3d-37.650494643937215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65089746a875f%3A0x5045675218cd010!2sMeadow%20Heights%20VIC%203048%2C%20Australia!5e0!3m2!1sen!2sus!4v1760810783522!5m2!1sen!2sus",
            directionsUrl: "https://maps.google.com/?q=Meadow+Heights,+VIC+3048"
        },
        openingHours: standardOpeningHours
    },

    "roxbury-park": {
        locationData: {
            name: "Y3 Smiles Dental - Roxburgh Park Area",
            address: "Serving Roxburgh Park and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.765!3d-37.628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRoxburgh+Park+VIC+3064!5e0!3m2!1sen!2sau!4v1234567890128",
            directionsUrl: "https://maps.google.com/?q=Roxburgh+Park,+VIC+3064"
        },
        openingHours: extendedOpeningHours
    },
    "roxburgh-park": {
        locationData: {
            name: "Y3 Smiles Dental - Roxburgh Park Area",
            address: "Serving Roxburgh Park and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.765!3d-37.628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRoxburgh+Park+VIC+3064!5e0!3m2!1sen!2sau!4v1234567890128",
            directionsUrl: "https://maps.google.com/?q=Roxburgh+Park,+VIC+3064"
        },
        openingHours: extendedOpeningHours
    },

    craigieburn: {
        locationData: {
            name: "Y3 Smiles Dental - Craigieburn Area",
            address: "Serving Craigieburn and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.939!3d-37.593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCraigieburn+VIC+3064!5e0!3m2!1sen!2sau!4v1234567890129",
            directionsUrl: "https://maps.google.com/?q=Craigieburn,+VIC+3064"
        },
        openingHours: extendedOpeningHours
    },

    westmeadows: {
        locationData: {
            name: "Y3 Smiles Dental - Westmeadows Area",
            address: "Serving Westmeadows and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18336.223348730622!2d144.885498604856!3d-37.683744163677076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65a72c8370449%3A0x5045675218cd0d0!2sWestmeadows%20VIC%203049%2C%20Australia!5e0!3m2!1sen!2sus!4v1760808794556!5m2!1sen!2sus",
            directionsUrl: "https://maps.google.com/?q=Westmeadows,+VIC+3049"
        },
        openingHours: standardOpeningHours
    },

    mickleham: {
        locationData: {
            name: "Y3 Smiles Dental - Mickleham Area",
            address: "Serving Mickleham and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.891!3d-37.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMickleham+VIC+3064!5e0!3m2!1sen!2sau!4v1234567890131",
            directionsUrl: "https://maps.google.com/?q=Mickleham,+VIC+3064"
        },
        openingHours: standardOpeningHours
    },

    fawkner: {
        locationData: {
            name: "Y3 Smiles Dental - Fawkner Area",
            address: "Serving Fawkner and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.944!3d-37.719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFawkner+VIC+3060!5e0!3m2!1sen!2sau!4v1234567890132",
            directionsUrl: "https://maps.google.com/?q=Fawkner,+VIC+3060"
        },
        openingHours: standardOpeningHours
    },

    "gladstone-park": {
        locationData: {
            name: "Y3 Smiles Dental - Gladstone Park Area",
            address: "Serving Gladstone Park and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.887!3d-37.725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGladstone+Park+VIC+3043!5e0!3m2!1sen!2sau!4v1234567890133",
            directionsUrl: "https://maps.google.com/?q=Gladstone+Park,+VIC+3043"
        },
        openingHours: extendedOpeningHours
    },

    hadfield: {
        locationData: {
            name: "Y3 Smiles Dental - Hadfield Area",
            address: "Serving Hadfield and surrounding areas",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.123456789!2d144.959!3d-37.741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHadfield+VIC+3046!5e0!3m2!1sen!2sau!4v1234567890134",
            directionsUrl: "https://maps.google.com/?q=Hadfield,+VIC+3046"
        },
        openingHours: standardOpeningHours
    }
};

export type { LocationData, OpeningHours, LocationConfig };