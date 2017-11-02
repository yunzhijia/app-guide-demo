
/*
* 函数节流
* @param {function} method 要进行节流的函数
* @param {number} delay 延时时间(ms)
* @param {number} duration 经过duration时间(ms)必须执行函数method
*/
export const throttle = (method, delay, duration) => {
  let timer = null,
    begin = null;
  return function () {
    const context = this,
      args = arguments,
      current = new Date();
    if (!begin) {
      begin = current;
    }
    if (timer) {
      window.clearTimeout(timer);
    }
    if (duration && current - begin >= duration) {
      method.apply(context, args);
      begin = null;
    } else {
      timer = window.setTimeout(() => {
        method.apply(context, args);
        begin = null;
      }, delay);
    }
  };
}

export const checkBridgetVer = (vStr) => {
  const ua = navigator.userAgent,
    reg = /Qing\/([^;]+)/gi,
    match = reg.exec(ua);

  if (!match) return false;

  const versions = match[1].split('.');  // 判断userAgent版本
  const vStrs = vStr.split('.');

  // 逐个判断当前版本号是否大于传入版本号
  for (let i = 0, len = versions.length; i < len; i++) {
    if (+versions[i] == +vStrs[i]) {
      continue;
    }

    return vStrs[i] ? +versions[i] > +vStrs[i] : true;
  }

  return false;
}

export const getOS = () => {  // 获取操作系统平台，IOS或安卓
  const userAgent = navigator.userAgent;
  return userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    ? 'ios' : userAgent.match(/Android/i)
      ? 'android' : '';
}


export const getQuery = () => {
  const search = window.location.search;
  return search.substr(1)
    .split('&')
    .filter(item => item.length > 0)
    .map(item => item.split('='))
    .reduce((obj, item) => {
      obj[item[0]] = item[1];
      return obj
    }, {})
}


export const setRootFs = (width = 3.75) => {
  const dpr = window.devicePixelRatio
  let fontSize
  document.documentElement.setAttribute('data-dpr', dpr)
  const userAgent = navigator.userAgent
  if (userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || userAgent.match(/Android/i)) {
    fontSize = document.documentElement.clientWidth / width
    document.documentElement.style.fontSize = fontSize + 'px'
  }
}
