const os = require('os'); //导入OS模块

/**
 * 获取本机无线局域网的IPV4（WLAN）
 * Get ip(v4) address
 * @return {String} the ipv4 address or 'localhost'
 */
var getIPAddress = function () {
    var ipv4 = '';
    var  ifaces=os.networkInterfaces();
    // console.log(ifaces);//所有类型的适配器和全部内容
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details,alias){
            if (dev === '以太网'){ //判断需要获取IP的适配器
                if (details.family=='IPv4') { //判断是IPV4还是IPV6 还可以通过alias去判断
                    ipv4 = details.address;//取addressIP地址
                    return ;
                }
            }
        });
    }
    return ipv4 || "127.0.0.1";
}

module.exports = getIPAddress