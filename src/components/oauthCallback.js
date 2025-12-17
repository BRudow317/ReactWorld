// Each provider has real OAuth configuration:
{
  url: 'https://accounts.google.com/o/oauth2/v2/auth',
  clientId: 'YOUR_CLIENT_ID',  // You'd register your app
  scope: 'email profile openid',
  responseType: 'token',
  redirectUri: window.location.origin + '/auth/callback'
}