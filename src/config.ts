export let GATEWAY = {
  SERVER_IP: 'https://mail.vehseh.com/',
  GEO_IP: 'https://api.ipgeolocation.io'
};

export let SERVICEURLS = {
  getGeoInformation: GATEWAY.GEO_IP + '/ipgeo?',
  verifyPhone: GATEWAY.SERVER_IP + 'api/account/verify-phone/'
};

export let TOKEN = {
  API_GEO: '38e87b176f3241e08ceb5d50d67569c3',
};
