export = (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533201820393_3738';

  // add your config here
  config.middleware = [
    'trace',
  ];

  config.hello = {
    b: '111'
  }

  return config;
};
