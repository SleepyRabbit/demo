/**
 * Created by houenxing on 17/5/29.
 */
'use strict';

const request = require('request');
//
// request('http://www.baidu.com', function(err, response, body) {
//     if(!err && response.statusCode == 200) {
//         console.log(body);
//     }
// })

// request.post('https://ucast.cc/api/v1/scenes',)
var option = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJpc3MiOiAidWNhc3QuY2MvYXBpIiwKICAiYXVkIjogInVjYXN0LmNjL2FwaSIsCiAgInN1YiI6ICJZb3UiLAogICJpYXQiOiAxNDk2MDIzNDIzLAogICJleHAiOiAxNTI3NTU5NDIzLAogICJqdGkiOiAiMTIzNDUiLAogICJwZXJtaXQiOiBbCiAgICAic2NlbmVzOlIiLAogICAgInNjZW5lczpXIgogIF0KfQ.sabX1ij6ekTpAZ-CyVkOy6O8bN8nNeB3zn47EkjUxjw'
    }
}

function callback(err, res, body) {
    if (!err && res.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info.stargazers_count + " Stars");
        console.log(info.forks_count + " Forks");
    }
}

JSON.parse(data);


request.post({
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJpc3MiOiAidWNhc3QuY2MvYXBpIiwKICAiYXVkIjogInVjYXN0LmNjL2FwaSIsCiAgInN1YiI6ICJZb3UiLAogICJpYXQiOiAxNDk2MDIzNDIzLAogICJleHAiOiAxNTI3NTU5NDIzLAogICJqdGkiOiAiMTIzNDUiLAogICJwZXJtaXQiOiBbCiAgICAic2NlbmVzOlIiLAogICAgInNjZW5lczpXIgogIF0KfQ.sabX1ij6ekTpAZ-CyVkOy6O8bN8nNeB3zn47EkjUxjw',
        'content-type': 'application/json'
    },
    url: 'https://ucast.cc/api/v1/scenes',
    body: `[{
        "uLogicName":"race.gun",
        "sceneDID":9528,
        "title":"~真.cs",
        "ctrlURL":"10.23.11.34:6020",
        "queue":{"rest":3, "play":2,"wait":10, "free":4}
    },
    {
        "uLogicName":"single.helicopter",
        "sceneDID":256,
        "title":"~直升飞机",
        "ctrlURL":"10.23.11.34:6020",
        "queue":{"rest":3, "play":2,"wait":10, "free":4}
    },
    {
        "uLogicName":"race.mouse",
        "sceneDID":98,
        "title":"~抓老鼠",
        "ctrlURL":"10.23.11.34:6020",
        "queue":{"rest":3, "play":2,"wait":10, "free":4}
    }
]`
    // body: `[{ "uLogicName":"race.rccar","sceneDID":9527,"title":"~真.赛车车","ctrlURL":"10.23.11.34:6020","queue":{"rest":3, "play":2,"wait":10, "free":4}}]`,
}, function(err, res, body) {
    console.log(body);
});

// request(option, callback).post('https://ucast.cc/api/v1/scenes', data);