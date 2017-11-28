const { Client } = require('tplink-smarthome-api');

const client = new Client();
const plug = client.getDevice({host: '192.168.1.54'}).then((device) => {
  device.getSysInfo().then(console.log);
  device.setPowerState(false);
});
