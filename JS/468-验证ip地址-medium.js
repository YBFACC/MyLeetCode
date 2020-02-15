/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * 自己---这题有点问题👎👎
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP === '') return 'Neither'
  if (IP[0] === ':' || IP[IP.length - 1] === ':') return 'Neither'
  let ip4 = IP.split('.')
  let ip6 = IP.match(/[a-fA-F0-9]+/g)
  if (ip4.length === 4) {
    for (let i = 0; i < ip4.length; i++) {
      let item = Number(ip4[i])
      if (
        item > 255 ||
        item < 0 ||
        item.toString(10).length < ip4[i].length ||
        ip4[i] === '' ||
        Number.isNaN(item)
      ) {
        return 'Neither'
      }
    }
    return 'IPv4'
  }
  if (ip6 === null) return 'Neither'
  if (ip6.length === 8) {
    if (IP.search(/[g-zG-Z-]|::/) !== -1) {
      return 'Neither'
    }
    for (let i = 0; i < ip6.length; i++) {
      if (ip6[i] === '' || ip6[i].length > 4) {
        return 'Neither'
      }
    }
    return 'IPv6'
  }
  return 'Neither'
}

/**
 * copy--正则稳
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  let ipv4 = /^((2([0-4]\d|5[0-5])|1\d\d|[1-9]\d|[0-9])\.){3}(2([0-4]\d|5[0-5])|1\d\d|[1-9]\d|[0-9])$/,
      ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv4.test(IP)?"IPv4":ipv6.test(IP)?"IPv6":"Neither";
};
// validIPAddress("2001:db8:85a3:0:0::8a2E:0370:7334")
// @lc code=end
