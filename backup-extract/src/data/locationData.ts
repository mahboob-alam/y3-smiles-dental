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
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    },

    greenvale: {
        locationData: {
            name: "Y3 Smiles Dental - Greenvale Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: extendedOpeningHours
    },

    campbellfield: {
        locationData: {
            name: "Y3 Smiles Dental - Campbellfield Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    },

    "meadow-heights": {
        locationData: {
            name: "Y3 Smiles Dental - Meadow Heights Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    },

    "roxbury-park": {
        locationData: {
            name: "Y3 Smiles Dental - Roxburgh Park Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: extendedOpeningHours
    },
    "roxburgh-park": {
        locationData: {
            name: "Y3 Smiles Dental - Roxburgh Park Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: extendedOpeningHours
    },

    craigieburn: {
        locationData: {
            name: "Y3 Smiles Dental - Craigieburn Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: extendedOpeningHours
    },

    westmeadows: {
        locationData: {
            name: "Y3 Smiles Dental - Westmeadows Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    },

    mickleham: {
        locationData: {
            name: "Y3 Smiles Dental - Mickleham Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    },

    fawkner: {
        locationData: {
            name: "Y3 Smiles Dental - Fawkner Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    },

    "gladstone-park": {
        locationData: {
            name: "Y3 Smiles Dental - Gladstone Park Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: extendedOpeningHours
    },

    hadfield: {
        locationData: {
            name: "Y3 Smiles Dental - Hadfield Area",
            address: "1/34 King William St, Broadmeadows, VIC 3047",
            phone: "03 9022 4442",
            email: "smile@y3smilesdental.com.au",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101047.34713583598!2d144.8419854!3d-37.6790611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402afaaf25bce177%3A0xf39d81248d24a91d!2sY3%20Smiles%20Dental!5e0!3m2!1sen!2sbd!4v1760793998614!5m2!1sen!2sbd",
            directionsUrl: "https://maps.app.goo.gl/XCeiAYziTDqGdJpc8"
        },
        openingHours: standardOpeningHours
    }
};

export type { LocationData, OpeningHours, LocationConfig };