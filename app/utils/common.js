const rp = require('request-promise');
module.exports = {
    api_call: async(api_url, token)=>{
        return new Promise(function(resolve, reject) {
            rp({ url:api_url, json:true,  qs: { access_token: token }})
            .then(function (data) {
                resolve(data);
            })
            .catch(function (reason) {
                reject(reason);
                console.error("%s; %s", reason.error.message, reason.options.url);
                console.log("%j", reason.response.statusCode);
            });
        });
    },
    api_call_post: async(api_url, body)=>{
        var options = {
            method: 'POST',
            uri: api_url,
            body: body,
            json: true, // Automatically stringifies the body to JSON
            headers: {
                'User-Agent': 'Request-Promise'
            } 
        };
        return new Promise(function(resolve, reject) {
            rp(options)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (reason) {
                reject(reason);
                console.log(reason);
                // console.error("%s; %s", reason.error.message, reason.options.url);
                // console.log("%j", reason.response.statusCode);
            });
        });
    }
}
