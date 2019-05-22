const device = require('firebase-rrda-device');
const { Gpio } = require('onoff');

const gpio = new Gpio(21, 'out');

(async user => {
  const dev = await device(user);
  dev.on('on', on => {
    console.log({ on });
    gpio.write(on)
  });
})()
