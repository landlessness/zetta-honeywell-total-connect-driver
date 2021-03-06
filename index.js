var Device = require('zetta-device');
var util = require('util');

var HoneywellTotalConnect = module.exports = function(soap, device, locationID) {
  Device.call(this);
  this._soap = soap;
  this.DeviceID = device.DeviceID;
  this.DeviceName = device.DeviceName;
  this.DeviceSerialNumber = device.DeviceSerialNumber;

  if (device.DeviceFlags) {
    var flags = device.DeviceFlags.split(',');
    for (i=0; i<flags.length; i++) {
      var flagKeyValue = flags[i].split('=');
      this[flagKeyValue[0]] = flagKeyValue[1];
    }
  }
  
  this.LocationID = locationID;
};
util.inherits(HoneywellTotalConnect, Device);

HoneywellTotalConnect.prototype._isValidSession = function(sessionID) {
  return sessionID === this._soap._sessionID;
}