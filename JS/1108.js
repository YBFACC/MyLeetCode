/**
 * 自己--简单题
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  var arr = address.split('.').join('[.]')
  return arr
}
defangIPaddr('255.100.50.0')
