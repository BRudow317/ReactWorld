
// Page Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Knowledge', path: '/knowledge' },
  { name: 'Account', path: '/account' },
];

// Define route paths that display to user as constants for consistency.
export const ROUTES = {
  HOME: '/',
  KNOWLEDGE: '/knowledge',
  SERVICES: '/services',
  ACCOUNT: '/account',
};

// Backend auth API Endpoints
export const CUSTOMER_API_ENDPOINTS = {
  CUSTOMER: '/api/customer',
  ACCOUNT: '/api/customer/account',
  EMAIL: '/api/customer/email',
  PHONE: '/api/customer/phone',
  ADDRESS: '/api/customer/address',
};

// Backend auth API Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REGISTER: '/api/auth/register',
  ME: '/api/auth/me',
};

// 3rd Party API Endpoints
export const THIRD_PARTY_API_ENDPOINTS = {
  GOOGLE_MAPS_GEOCODE: 'https://maps.googleapis.com/maps/api/geocode/json',
  GOOGLE_MAPS_PLACES_AUTOCOMPLETE: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
};

