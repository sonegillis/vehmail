export let GATEWAY = {
  SERVER_IP: 'https://mail.vehseh.com/',
  GEO_IP: 'https://api.ipgeolocation.io'
};

export let SERVICEURLS = {
  getGeoInformation: GATEWAY.GEO_IP + '/ipgeo?',
  verifyPhone: GATEWAY.SERVER_IP + 'api/account/verify-phone/',
  signUp: GATEWAY.SERVER_IP + 'api/account/signup/',
  login: GATEWAY.SERVER_IP + 'api/account/login/',
  getMails: GATEWAY.SERVER_IP + 'api/mail/get-messages/',
  getMailDetail: GATEWAY.SERVER_IP + 'api/mail/get-message-details/'
};

export let TOKEN = {
  API_GEO: '38e87b176f3241e08ceb5d50d67569c3',
};

export let TINYMCE_API_KEY = 'nmaqtb22hlkvo5c22upxmnmbg0ru92do7gfcnqn6lepfrvml';
