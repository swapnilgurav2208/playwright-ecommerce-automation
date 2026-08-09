import { generateUniqueEmail } from '../utils/emailUtils';

export const signupData = {
    validUser: {
        name: 'Swapnil Gurav',
        email: generateUniqueEmail(),
        title: 'Mr',
        password: 'Pass@123',
        day: '22',
        month: 'August',
        year: '1999',
        firstName: 'Swapnil',
        lastName: 'Gurav',
        company: 'Indiabonds',
        address: 'Shree Ganesh Apartment Sector 1 Airoli',
        address2: 'Near Shivneri Hotel',
        country: 'India',
        state: 'Maharashtra',
        city: 'Thane',
        zipcode: '400708',
        mobileNumber: '9834012306',
    },
};
