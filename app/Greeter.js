import './Greeter.css';
import config from './config';
var greet = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetContent;
  return greet;
};
export default greet;