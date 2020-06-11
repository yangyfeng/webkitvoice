(function (e, p) {
  var m = location.href.match(/platform=(win8|win|mac|linux|cros)/);
  e.id = (m && m[1]) ||
    (p.indexOf('Windows NT 6.2') > -1 ? 'win8' : p.indexOf('Windows') > -1 ? 'win' : p.indexOf('Mac') > -1 ? 'mac' : p.indexOf('CrOS') > -1 ? 'cros' : 'linux');
  e.className = e.className.replace(/\bno-js\b/, 'js');
})(document.documentElement, window.navigator.userAgent)
