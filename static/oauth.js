/**
 * init facebook
 * */
window.fbAsyncInit = function () {
    FB.init({
        appId: '1300436050058476',//mu shi lin app_id：176946966312538 //clawin app_id：1300436050058476
        cookie: true,  // cookie
        xfbml: true,
        version: 'v3.2' // with version 3.2
    });
    FB.AppEvents.logPageView();
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/**
 * init twitter
 * */
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
    console.log(t);
}(document, "script", "twitter-wjs"));
var log = console.log;
hello.init({
    'twitter': 'cO9owckJXvfk34poSia8ykPLR'  //appkey
},
{
    oauth_proxy: 'https://auth-server.herokuapp.com/proxy' //default proxy
});