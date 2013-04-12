var hostname = window.location.hostname;
var inProduction = exports.inProduction = (hostname.indexOf('indabamusic.com') > -1);
if (!inProduction && hostname.indexOf('indavelopment.com') === -1) {
  console.warn("indabaui-env: domain should be either indabamusic.com or indavelopment.com");
}

exports.media_man_endpoint =
  inProduction ? 'https://mediaman.indabamusic.com'
               : 'https://mediaman.indavelopment.com'

exports.lydian_endpoint =
  inProduction ? 'https://lydian.indabamusic.com'
               : 'https://lydian.indavelopment.com'

exports.dorian_endpoint =
  inProduction ? 'https://beta.indabamusic.com'
               : 'https://beta.indavelopment.com'

