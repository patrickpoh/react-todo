var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', moment().unix());

var timestamp = 1459111648;

var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a fuck'));
