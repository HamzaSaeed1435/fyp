var http = require("https");
let  SendEmail =(email)=>{
    var options = {
        "method": "POST",
        "hostname": "emailapi.netcorecloud.net",
        "port": null,
        "path": "/v5/mail/send",
        "headers": {
          "api_key": "e8284c17407e4384ade0c88e8f43481a",
          "content-type": "application/json"
        }
      };
      
      var req = http.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function () {
          var body = Buffer.concat(chunks);
         console.log(body.toString());
        });
      });
      
      req.write(JSON.stringify({
        from: {email: 'hamzasaeed4689@pepisandbox.com', name: 'hamzasaeed4689'},
        subject: 'Your Applection has been Approved By Authority Deligated...!!!',
        content: [{type: 'html', value: 'Hello Hamza Saeed,your applection has been approved and you can collect from staff room...!!! .'}],
        personalizations: [{to: [{email: 'hamzasaeed4689@gmail.com', name: 'Lionel Messi'}]}]
      }));
      req.end();
      
}
module.exports={
    SendEmail:SendEmail
}