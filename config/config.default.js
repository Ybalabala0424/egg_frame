/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552111640040_3932';

  // add your middleware config here
  config.middleware = [];
    // config/config.default.js
  config.errCode= {
      APP_ERROR_CODE: '01',   // 应用错误码，错误码1-2位，其他为3-6位
      NOT_REGISTER_ERROR: '0000', // 未登记默认错误码
  }

  config.errCatch={
      responseErrorMsg: true
  }

    config.security = {
        csrf: false
    }

    // config/config.default.js
    config.response = {
        ignore:[
            '/favicon.ico'
        ]
    }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
