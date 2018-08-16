const http = require('https')
const querystring = require('querystring')
const fs = require('fs')

const postData = querystring.stringify({
    scene: 'id=3990&priceStrategy=1',
    page: 'pages/item/index',
    width: 430, // 可设置
    auto_color: false,
    line_color: {"r":"208","g":"165","b":"109"},
    is_hyaline: false
});

const options = {
    hostname: 'api.weixin.qq.com',
    port: 80,
    path: '/wxa/getwxacode?access_token=12_2cNJcU099oL6ResJOH9JmZJicfUUA1ehnRpNCQdsHXfNs-2RrG4aOHvsFd6OoeNrqovBYj8stXgh0BfXpmBYz1YROPmGBAqrg74JLPLqFfUSPkZsfdYDkABkCs6ocdYbGqZ-PA9DWaHV-OB9CABaAAAKIJ',
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    }
};

const req = http.request(options, (res) => {
    console.log(`状态码: ${res.statusCode}`);
    console.log(`响应头: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log('********************')
        console.log(chunk)
        // fs.writeFile('./imgs/img1.jpg')
        console.log('*****************')
        
        
    });
    res.on('end', () => {
        console.log('响应中已无数据。');
    });
});

req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
});

// 写入数据到请求主体
req.write(postData);
req.end();