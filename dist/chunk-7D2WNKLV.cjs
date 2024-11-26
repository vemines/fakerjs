"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkOD3LIBRQcjs = require('./chunk-OD3LIBRQ.cjs');var _chunkCGZKEYQHcjs = require('./chunk-CGZKEYQH.cjs');var r=["\uAC80\uC740\uC0C9","\uAE08\uC0C9","\uB09C\uCD08\uC0C9","\uB178\uB780\uC0C9","\uB77C\uC784\uC0C9","\uB9C8\uC820\uD0C0","\uBBFC\uD2B8\uC0C9","\uBD84\uD64D\uC0C9","\uBE68\uAC04\uC0C9","\uC0C1\uC544\uC0C9","\uC5F0\uBCF4\uB77C\uC0C9","\uC5F0\uC5B4\uC0C9","\uC625\uC0C9","\uC62C\uB9AC\uBE0C","\uC740\uC0C9","\uC790\uB450\uC0C9","\uC790\uC8FC\uC0C9","\uC801\uAC08\uC0C9","\uC8FC\uD669\uC0C9","\uCCAD\uB85D\uC0C9","\uCD08\uB85D\uC0C9","\uD478\uB978\uC0C9","\uD558\uB298\uC0C9","\uD558\uC580\uC0C9","\uD68C\uC0C9"];var Q={human:r},i=Q;var m=["\uAC8C\uC784\uC988","\uACF5\uC0AC","\uADF8\uB8F9","\uBB3C\uC0B0","\uC5F0\uAD6C\uC18C","\uC740\uD589","\uC804\uC790","\uC911\uACF5\uC5C5","\uC99D\uAD8C","\uCF54\uB9AC\uC544"];var n=["\uC8FC\uC2DD\uD68C\uC0AC","\uD55C\uAD6D"];var f=["{{company.legal_entity_type}} {{person.first_name.generic}}","{{person.first_name.generic}} {{company.category}}"];var R={category:m,legal_entity_type:n,name_pattern:f},a=R;var p={wide:["10\uC6D4","11\uC6D4","12\uC6D4","1\uC6D4","2\uC6D4","3\uC6D4","4\uC6D4","5\uC6D4","6\uC6D4","7\uC6D4","8\uC6D4","9\uC6D4"],abbr:["10\uC6D4","11\uC6D4","12\uC6D4","1\uC6D4","2\uC6D4","3\uC6D4","4\uC6D4","5\uC6D4","6\uC6D4","7\uC6D4","8\uC6D4","9\uC6D4"]};var l={wide:["\uAE08\uC694\uC77C","\uBAA9\uC694\uC77C","\uC218\uC694\uC77C","\uC6D4\uC694\uC77C","\uC77C\uC694\uC77C","\uD1A0\uC694\uC77C","\uD654\uC694\uC77C"],abbr:["\uAE08","\uBAA9","\uC218","\uC6D4","\uC77C","\uD1A0","\uD654"]};var S={month:p,weekday:l},d=S;var u=["co.kr","com","biz","info","ne.kr","net","or.kr","org"];var c=["gmail.com","yahoo.co.kr","hanmail.net","naver.com"];var T={domain_suffix:u,free_email:c},s=T;var x=["\uAC15\uB989","\uC591\uC591","\uC778\uC81C","\uAD11\uC8FC","\uAD6C\uB9AC","\uBD80\uCC9C","\uBC00\uC591","\uD1B5\uC601","\uCC3D\uC6D0","\uAC70\uCC3D","\uACE0\uC131","\uC591\uC0B0","\uAE40\uCC9C","\uAD6C\uBBF8","\uC601\uC8FC","\uAD11\uC0B0","\uB0A8","\uBD81","\uACE0\uCC3D","\uAD70\uC0B0","\uB0A8\uC6D0","\uB3D9\uC791","\uB9C8\uD3EC","\uC1A1\uD30C","\uC6A9\uC0B0","\uBD80\uD3C9","\uAC15\uD654","\uC218\uC131","\uC218\uC6D0","\uC18D\uCD08","\uC804\uC8FC","\uBAA9\uD3EC","\uBD84\uB2F9","\uC548\uC591","\uC2DC\uD765"];var y=["{{location.city_name}}{{location.city_suffix}}"];var _=["\uAD6C","\uC2DC","\uAD70"];var D=["###-###","#####"];var g=["\uC544\uD30C\uD2B8 ###\uB3D9","###\uD638"];var b=["\uAC15\uC6D0","\uACBD\uAE30","\uACBD\uB0A8","\uACBD\uBD81","\uAD11\uC8FC","\uB300\uAD6C","\uB300\uC804","\uBD80\uC0B0","\uC11C\uC6B8","\uC6B8\uC0B0","\uC778\uCC9C","\uC804\uB0A8","\uC804\uBD81","\uC81C\uC8FC","\uCDA9\uB0A8","\uCDA9\uBD81","\uC138\uC885"];var h=["\uAC15\uC6D0","\uACBD\uAE30","\uACBD\uB0A8","\uACBD\uBD81","\uAD11\uC8FC","\uB300\uAD6C","\uB300\uC804","\uBD80\uC0B0","\uC11C\uC6B8","\uC6B8\uC0B0","\uC778\uCC9C","\uC804\uB0A8","\uC804\uBD81","\uC81C\uC8FC","\uCDA9\uB0A8","\uCDA9\uBD81","\uC138\uC885"];var k=["\uC0C1\uACC4","\uD654\uACE1","\uC2E0\uC815","\uBAA9","\uC7A0\uC2E4","\uBA74\uBAA9","\uC8FC\uC548","\uC911","\uC815\uC655","\uAD6C\uB85C","\uC2E0\uC6D4","\uC5F0\uC0B0","\uCC3D","\uB9CC\uC218","\uC911\uACC4","\uAC80\uB2E8","\uC0C1\uB3C4","\uBC29\uBC30","\uC7A5\uC720","\uC0C1","\uAD11\uBA85","\uC2E0\uAE38","\uD589\uC2E0","\uB300\uBA85","\uB3D9\uD0C4","\uD310\uAD50","\uC5F0\uBB34"];var w=["{{location.street_name}}{{location.street_suffix}}"];var P=["\uC74D","\uBA74","\uB3D9"];var U={city_name:x,city_pattern:y,city_suffix:_,postcode:D,secondary_address:g,state:b,state_abbr:h,street_name:k,street_pattern:w,street_suffix:P},L=U;var N=["\uAD6D\uAC00\uB294","\uBC95\uB960\uC774","\uC815\uD558\uB294","\uBC14\uC5D0","\uC758\uD558\uC5EC","\uC7AC\uC678\uAD6D\uBBFC\uC744","\uBCF4\uD638\uD560","\uC758\uBB34\uB97C","\uC9C4\uB2E4.","\uBAA8\uB4E0","\uAD6D\uBBFC\uC740","\uC2E0\uCCB4\uC758","\uC790\uC720\uB97C","\uAC00\uC9C4\uB2E4.","\uC804\uD1B5\uBB38\uD654\uC758","\uACC4\uC2B9\xB7\uBC1C\uC804\uACFC","\uBBFC\uC871\uBB38\uD654\uC758","\uCC3D\uB2EC\uC5D0","\uB178\uB825\uD558\uC5EC\uC57C","\uD55C\uB2E4.","\uD1B5\uC2E0\xB7\uBC29\uC1A1\uC758","\uC2DC\uC124\uAE30\uC900\uACFC","\uC2E0\uBB38\uC758","\uAE30\uB2A5\uC744","\uBCF4\uC7A5\uD558\uAE30","\uC704\uD558\uC5EC","\uD544\uC694\uD55C","\uC0AC\uD56D\uC740","\uBC95\uB960\uB85C","\uC815\uD55C\uB2E4.","\uD5CC\uBC95\uC5D0","\uCCB4\uACB0\xB7\uACF5\uD3EC\uB41C","\uC870\uC57D\uACFC","\uC77C\uBC18\uC801\uC73C\uB85C","\uC2B9\uC778\uB41C","\uAD6D\uC81C\uBC95\uADDC\uB294","\uAD6D\uB0B4\uBC95\uACFC","\uAC19\uC740","\uD6A8\uB825\uC744","\uB2E4\uB9CC,","\uD604\uD589\uBC94\uC778\uC778","\uACBD\uC6B0\uC640","\uC7A5\uAE30","3\uB144","\uC774\uC0C1\uC758","\uD615\uC5D0","\uD574\uB2F9\uD558\uB294","\uC8C4\uB97C","\uBC94\uD558\uACE0","\uB3C4\uD53C","\uB610\uB294","\uC99D\uAC70\uC778\uBA78\uC758","\uC5FC\uB824\uAC00","\uC788\uC744","\uB54C\uC5D0\uB294","\uC0AC\uD6C4\uC5D0","\uC601\uC7A5\uC744","\uCCAD\uAD6C\uD560","\uC218","\uC788\uB2E4.","\uC800\uC791\uC790\xB7\uBC1C\uBA85\uAC00\xB7\uACFC\uD559\uAE30\uC220\uC790\uC640","\uC608\uC220\uAC00\uC758","\uAD8C\uB9AC\uB294","\uBC95\uB960\uB85C\uC368","\uBCF4\uD638\uD55C\uB2E4.","\uD615\uC0AC\uD53C\uACE0\uC778\uC740","\uC720\uC8C4\uC758","\uD310\uACB0\uC774","\uD655\uC815\uB420","\uB54C\uAE4C\uC9C0\uB294","\uBB34\uC8C4\uB85C","\uCD94\uC815\uB41C\uB2E4.","\uD589\uC704\uC2DC\uC758","\uBC95\uB960\uC5D0","\uBC94\uC8C4\uB97C","\uAD6C\uC131\uD558\uC9C0","\uC544\uB2C8\uD558\uB294","\uD589\uC704\uB85C","\uC18C\uCD94\uB418\uC9C0","\uC544\uB2C8\uD558\uBA70,","\uB3D9\uC77C\uD55C","\uBC94\uC8C4\uC5D0","\uB300\uD558\uC5EC","\uAC70\uB4ED","\uCC98\uBC8C\uBC1B\uC9C0","\uC544\uB2C8\uD55C\uB2E4.","\uD3C9\uC0DD\uAD50\uC721\uC744","\uC9C4\uD765\uD558\uC5EC\uC57C","\uC0AC\uC0DD\uD65C\uC758","\uBE44\uBC00\uACFC","\uCE68\uD574\uBC1B\uC9C0","\uC758\uBB34\uAD50\uC721\uC740","\uBB34\uC0C1\uC73C\uB85C","\uBAA8\uC131\uC758","\uBCF4\uD638\uB97C"];var V={word:N},v=V;var X={title:"Korean",code:"ko",language:"ko",endonym:"\uD55C\uAD6D\uC5B4",dir:"ltr",script:"Kore"},C=X;var B={generic:["\uAC00\uB78C","\uAC00\uBE48","\uAC00\uC5F0","\uAC00\uC601","\uAC00\uC628","\uAC00\uC724","\uAC00\uC740","\uAC00\uC744","\uAC00\uC778","\uAC00\uD604","\uAC15\uBBFC","\uAC15\uC6B0","\uAC15\uD604","\uAC74","\uAC74\uC6B0","\uAC74\uD638","\uAC74\uD6C4","\uAC74\uD76C","\uACBD\uBBFC","\uACE0\uC740","\uADDC\uB9AC","\uADDC\uBBFC","\uADDC\uBE48","\uADDC\uD604","\uB098\uACBD","\uB098\uB9B0","\uB098\uC5F0","\uB098\uC601","\uB098\uC724","\uB098\uC728","\uB098\uC740","\uB098\uD604","\uB2E4\uACBD","\uB2E4\uBE48","\uB2E4\uC19C","\uB2E4\uC5F0","\uB2E4\uC601","\uB2E4\uC628","\uB2E4\uC6D0","\uB2E4\uC724","\uB2E4\uC728","\uB2E4\uC740","\uB2E4\uC778","\uB2E4\uD604","\uB2E4\uD61C","\uB2E4\uD76C","\uB2E8\uBE44","\uB2E8\uC544","\uB2E8\uC6B0","\uB300\uD604","\uB3C4\uACB8","\uB3C4\uACBD","\uB3C4\uC544","\uB3C4\uC5F0","\uB3C4\uC601","\uB3C4\uC6D0","\uB3C4\uC724","\uB3C4\uC728","\uB3C4\uC740","\uB3C4\uC900","\uB3C4\uC9C4","\uB3C4\uD558","\uB3C4\uD604","\uB3C4\uD6C8","\uB3C4\uD76C","\uB3D9\uAC74","\uB3D9\uADDC","\uB3D9\uC6B0","\uB3D9\uC6B1","\uB3D9\uC724","\uB3D9\uC900","\uB3D9\uD558","\uB3D9\uD601","\uB3D9\uD604","\uB3D9\uD6C8","\uB77C\uC5D8","\uB77C\uC628","\uB77C\uC724","\uB77C\uD76C","\uB85C\uC544","\uB85C\uC6B4","\uB85C\uC774","\uB8E8\uC544","\uB9AC\uB098","\uB9AC\uC544","\uB9AC\uC548","\uB9AC\uC6D0","\uBBF8\uC18C","\uBBFC\uAC74","\uBBFC\uACB0","\uBBFC\uACBD","\uBBFC\uADDC","\uBBFC\uAE30","\uBBFC\uC11C","\uBBFC\uC11D","\uBBFC\uC131","\uBBFC\uC194","\uBBFC\uC218","\uBBFC\uC544","\uBBFC\uC601","\uBBFC\uC6B0","\uBBFC\uC7AC","\uBBFC\uC815","\uBBFC\uC8FC","\uBBFC\uC900","\uBBFC\uC9C0","\uBBFC\uCC2C","\uBBFC\uCC44","\uBBFC\uD558","\uBBFC\uD601","\uBBFC\uD638","\uBC94\uC900","\uBCC4","\uBCF4\uACBD","\uBCF4\uBBF8","\uBCF4\uBBFC","\uBD04","\uC0AC\uB791","\uC0B0","\uC0C1\uBBFC","\uC0C1\uC6B0","\uC0C1\uC724","\uC0C1\uD604","\uC0C8\uBD04","\uC11C\uB9B0","\uC11C\uBE48","\uC11C\uC544","\uC11C\uC5F0","\uC11C\uC601","\uC11C\uC6B0","\uC11C\uC6D0","\uC11C\uC724","\uC11C\uC728","\uC11C\uC740","\uC11C\uC778","\uC11C\uC815","\uC11C\uC900","\uC11C\uC9C4","\uC11C\uD558","\uC11C\uD604","\uC11C\uD638","\uC11C\uD6C4","\uC11C\uD76C","\uC11D\uD604","\uC120\uC6B0","\uC120\uC728","\uC120\uD638","\uC124","\uC124\uC544","\uC131\uBBFC","\uC131\uBE48","\uC131\uC6B0","\uC131\uC6D0","\uC131\uC724","\uC131\uC900","\uC131\uC9C4","\uC131\uD604","\uC131\uD6C8","\uC138\uB9B0","\uC138\uBE48","\uC138\uC544","\uC138\uC5F0","\uC138\uC601","\uC138\uC740","\uC138\uC778","\uC138\uC900","\uC138\uD604","\uC138\uD6C8","\uC138\uD76C","\uC18C\uB2F4","\uC18C\uBBF8","\uC18C\uBBFC","\uC18C\uC5F0","\uC18C\uC601","\uC18C\uC6D0","\uC18C\uC724","\uC18C\uC728","\uC18C\uC740","\uC18C\uC774","\uC18C\uC815","\uC18C\uD604","\uC18C\uD76C","\uC194","\uC218\uBBFC","\uC218\uBE48","\uC218\uC544","\uC218\uC5F0","\uC218\uC778","\uC218\uC815","\uC218\uC9C0","\uC218\uC9C4","\uC218\uD601","\uC218\uD604","\uC218\uD638","\uC21C\uAE30","\uC2AC\uC544","\uC2B9\uBBFC","\uC2B9\uBE48","\uC2B9\uC544","\uC2B9\uC5F0","\uC2B9\uC6B0","\uC2B9\uC6D0","\uC2B9\uC720","\uC2B9\uC724","\uC2B9\uC7AC","\uC2B9\uC8FC","\uC2B9\uC900","\uC2B9\uCC2C","\uC2B9\uD604","\uC2B9\uD638","\uC2B9\uD658","\uC2B9\uD6C4","\uC2B9\uD6C8","\uC2DC\uC544","\uC2DC\uC548","\uC2DC\uC5F0","\uC2DC\uC628","\uC2DC\uC644","\uC2DC\uC6B0","\uC2DC\uC6D0","\uC2DC\uC724","\uC2DC\uC728","\uC2DC\uC740","\uC2DC\uC900","\uC2DC\uD5CC","\uC2DC\uD604","\uC2DC\uD638","\uC2DC\uD658","\uC2DC\uD6C4","\uC2DC\uD6C8","\uC2E0\uC6B0","\uC544\uB77C","\uC544\uB984","\uC544\uB9B0","\uC544\uC5F0","\uC544\uC601","\uC544\uC724","\uC544\uC778","\uC544\uC900","\uC544\uC9C4","\uC544\uD604","\uC5EC\uC6D0","\uC5EC\uC900","\uC5EC\uC9C4","\uC5F0\uC11C","\uC5F0\uC218","\uC5F0\uC544","\uC5F0\uC6B0","\uC5F0\uC7AC","\uC5F0\uC8FC","\uC5F0\uC900","\uC5F0\uC9C0","\uC5F0\uD638","\uC601\uBBFC","\uC601\uC6B0","\uC601\uC900","\uC608\uB098","\uC608\uB2F4","\uC608\uB9B0","\uC608\uB9BC","\uC608\uBE48","\uC608\uC11C","\uC608\uC131","\uC608\uC194","\uC608\uC2AC","\uC608\uC6D0","\uC608\uC740","\uC608\uC778","\uC608\uC8FC","\uC608\uC900","\uC608\uC9C0","\uC608\uC9C4","\uC608\uCC2C","\uC628\uC720","\uC694\uD55C","\uC6A9\uC900","\uC6B0\uBE48","\uC6B0\uC131","\uC6B0\uC601","\uC6B0\uC8FC","\uC6B0\uC900","\uC6B0\uC9C4","\uC6B0\uCC2C","\uC6B0\uD604","\uC6D0\uC6B0","\uC6D0\uC900","\uC720\uAC74","\uC720\uACBD","\uC720\uB098","\uC720\uB77C","\uC720\uB9AC","\uC720\uB9BC","\uC720\uBBFC","\uC720\uBE48","\uC720\uC131","\uC720\uC548","\uC720\uC740","\uC720\uC774","\uC720\uC815","\uC720\uC8FC","\uC720\uC900","\uC720\uC9C4","\uC720\uCC2C","\uC720\uD558","\uC720\uD604","\uC724","\uC724\uAC74","\uC724\uC11C","\uC724\uC131","\uC724\uC2AC","\uC724\uC544","\uC724\uC6B0","\uC724\uC7AC","\uC724\uC8FC","\uC724\uC9C0","\uC724\uC9C4","\uC724\uCC2C","\uC724\uCC44","\uC724\uD558","\uC724\uD638","\uC724\uD6C4","\uC728","\uC740\uBCC4","\uC740\uBE44","\uC740\uBE48","\uC740\uC11C","\uC740\uC124","\uC740\uC131","\uC740\uC194","\uC740\uC218","\uC740\uC6B0","\uC740\uC720","\uC740\uC728","\uC740\uC7AC","\uC740\uC900","\uC740\uC9C0","\uC740\uCC2C","\uC740\uCC44","\uC740\uD601","\uC740\uD61C","\uC740\uD638","\uC774\uB098","\uC774\uB4E0","\uC774\uC11C","\uC774\uC194","\uC774\uC548","\uC774\uC900","\uC774\uD55C","\uC774\uD604","\uC778\uC6B0","\uC7AC\uBBFC","\uC7AC\uC601","\uC7AC\uC6B0","\uC7AC\uC6D0","\uC7AC\uC724","\uC7AC\uC728","\uC7AC\uC740","\uC7AC\uC774","\uC7AC\uC778","\uC7AC\uC900","\uC7AC\uD558","\uC7AC\uD601","\uC7AC\uD604","\uC7AC\uD638","\uC7AC\uD6C8","\uC7AC\uD76C","\uC815\uBBFC","\uC815\uBE48","\uC815\uC5F0","\uC815\uC6B0","\uC815\uC6D0","\uC815\uC724","\uC815\uC740","\uC815\uD604","\uC815\uD6C4","\uC815\uD6C8","\uC81C\uC774","\uC81C\uC778","\uC885\uD604","\uC8FC\uC544","\uC8FC\uC548","\uC8FC\uC5F0","\uC8FC\uC601","\uC8FC\uC644","\uC8FC\uC6D0","\uC8FC\uC740","\uC8FC\uD558","\uC8FC\uD55C","\uC8FC\uD601","\uC8FC\uD604","\uC8FC\uD638","\uC8FC\uD658","\uC8FC\uD76C","\uC900","\uC900\uC11C","\uC900\uC11D","\uC900\uC131","\uC900\uC218","\uC900\uC601","\uC900\uC6B0","\uC900\uC6D0","\uC900\uD601","\uC900\uD604","\uC900\uD615","\uC900\uD638","\uC900\uD6C4","\uC900\uD76C","\uC9C0\uBBFC","\uC9C0\uC131","\uC9C0\uC218","\uC9C0\uC544","\uC9C0\uC548","\uC9C0\uC5F0","\uC9C0\uC601","\uC9C0\uC624","\uC9C0\uC628","\uC9C0\uC644","\uC9C0\uC6A9","\uC9C0\uC6B0","\uC9C0\uC6B4","\uC9C0\uC6C5","\uC9C0\uC6D0","\uC9C0\uC720","\uC9C0\uC724","\uC9C0\uC728","\uC9C0\uC740","\uC9C0\uC778","\uC9C0\uD55C","\uC9C0\uD601","\uC9C0\uD604","\uC9C0\uD61C","\uC9C0\uD638","\uC9C0\uD658","\uC9C0\uD6A8","\uC9C0\uD6C4","\uC9C0\uD6C8","\uC9C4\uC11C","\uC9C4\uC6B0","\uC9C4\uD601","\uC9C4\uD638","\uCC2C","\uCC2C\uC601","\uCC2C\uC6B0","\uCC2C\uD76C","\uCC44\uB9B0","\uCC44\uBBFC","\uCC44\uBE48","\uCC44\uC544","\uCC44\uC5F0","\uCC44\uC601","\uCC44\uC6D0","\uCC44\uC724","\uCC44\uC728","\uCC44\uC740","\uCC44\uC774","\uCC44\uD604","\uCC44\uD76C","\uD0DC\uAC74","\uD0DC\uACBD","\uD0DC\uB9AC","\uD0DC\uB9B0","\uD0DC\uBBFC","\uD0DC\uC131","\uD0DC\uC591","\uD0DC\uC5F0","\uD0DC\uC601","\uD0DC\uC624","\uD0DC\uC6B0","\uD0DC\uC724","\uD0DC\uC728","\uD0DC\uC740","\uD0DC\uC774","\uD0DC\uC778","\uD0DC\uC900","\uD0DC\uD558","\uD0DC\uD604","\uD0DC\uD638","\uD0DC\uD658","\uD0DC\uD6C8","\uD0DC\uD76C","\uD558\uB098","\uD558\uB298","\uD558\uB78C","\uD558\uB791","\uD558\uB9AC","\uD558\uB9B0","\uD558\uBBFC","\uD558\uBE48","\uD558\uC131","\uD558\uC5D8","\uD558\uC5F0","\uD558\uC601","\uD558\uC628","\uD558\uC724","\uD558\uC728","\uD558\uC740","\uD558\uC74C","\uD558\uC900","\uD558\uC9C4","\uD55C\uACB0","\uD55C\uB098","\uD55C\uBCC4","\uD55C\uC6B8","\uD55C\uC728","\uD574\uB098","\uD574\uC778","\uD574\uC900","\uD604","\uD604\uBBFC","\uD604\uBE48","\uD604\uC11C","\uD604\uC11D","\uD604\uC131","\uD604\uC218","\uD604\uC2B9","\uD604\uC544","\uD604\uC6B0","\uD604\uC900","\uD604\uC9C0","\uD604\uC9C4","\uD604\uD638","\uD615\uC900","\uD61C\uB9B0","\uD61C\uBBFC","\uD61C\uBE48","\uD61C\uC131","\uD61C\uC6D0","\uD61C\uC724","\uD61C\uC778","\uD61C\uC815","\uD61C\uC9C4","\uD638\uC900","\uD638\uC9C4","\uD6A8\uB9B0","\uD6A8\uC6D0","\uD6A8\uC740","\uD6A8\uC8FC","\uD6A8\uC900","\uD76C\uC6D0","\uD76C\uCC2C"],female:["\uD61C\uC815","\uC11C\uC5F0","\uC9C0\uC6B0","\uD558\uC724","\uC11C\uD604","\uD558\uC740","\uBBFC\uC11C","\uC9C0\uC720","\uC724\uC11C","\uCC44\uC6D0","\uC218\uC544","\uC9C0\uBBFC","\uC9C0\uC544","\uC9C0\uC724","\uB2E4\uC740","\uC740\uC11C","\uC9C0\uC548","\uC608\uC740","\uC11C\uC544","\uC18C\uC728","\uC608\uB9B0","\uD558\uB9B0","\uC218\uBE48","\uC18C\uC724","\uC608\uC6D0","\uC9C0\uC6D0","\uC720\uB098","\uC2DC\uC740","\uCC44\uC740","\uC720\uC9C4","\uC724\uC544","\uC608\uB098","\uC2DC\uC544","\uAC00\uC740","\uC544\uB9B0","\uC608\uC11C","\uC5F0\uC6B0","\uC11C\uC601","\uC608\uC9C4","\uC8FC\uC544","\uBBFC\uC9C0","\uD558\uC728","\uC544\uC724","\uC218\uBBFC","\uC720\uC8FC","\uB2E4\uC778","\uC218\uC5F0","\uC11C\uC6B0","\uC5F0\uC11C","\uC544\uC778","\uC2DC\uC5F0","\uC11C\uC740","\uB098\uC740","\uB2E4\uC5F0","\uCC44\uC724","\uC11C\uC728","\uD558\uC5F0","\uB098\uC724","\uC9C0\uC728","\uD604\uC11C","\uC11C\uD558","\uCC44\uC544","\uC11C\uC9C4","\uC720\uBE48","\uB2E4\uD604","\uC608\uC9C0","\uC18C\uC740","\uC218\uD604","\uC0AC\uB791","\uB098\uC5F0","\uC9C0\uC740","\uC2DC\uD604","\uC608\uBE48","\uC740\uCC44","\uC138\uC544","\uBBFC\uC8FC","\uB2E4\uC724","\uC724\uC9C0","\uC18C\uC5F0","\uC8FC\uD558","\uC9C0\uD604","\uC9C0\uC218","\uC2B9\uC544","\uC18C\uBBFC","\uB2E4\uC628","\uCC44\uB9B0","\uD61C\uC6D0","\uD558\uC601","\uC774\uC11C","\uB098\uD604","\uBBFC\uC544","\uC11C\uD76C","\uC138\uC740","\uC544\uC601","\uB3C4\uC5F0","\uADDC\uB9AC","\uC720\uD558","\uAC00\uC724","\uC544\uD604","\uC18C\uC774","\uC5F0\uC544","\uB9AC\uC544","\uBBFC\uCC44","\uC9C0\uC5F0","\uC2DC\uC724","\uC608\uB9BC","\uD0DC\uD76C","\uC8FC\uC740","\uC720\uC815","\uC18C\uD604","\uC7AC\uC774","\uC724\uC2AC","\uBCF4\uBBFC","\uC815\uC6D0","\uC724\uD558","\uC218\uC9C4","\uBBFC\uC815","\uB77C\uD76C","\uD604\uC9C0","\uB098\uACBD","\uBD04","\uC138\uC5F0","\uAC00\uD604","\uBBFC\uACBD","\uC9C0\uD6A8","\uD558\uB298","\uAC00\uC628","\uC124\uC544","\uAC00\uC5F0","\uC740\uC9C0","\uC608\uC2AC","\uD55C\uBCC4","\uCC44\uC774","\uCC44\uC5F0","\uC18C\uD76C","\uD604\uC544","\uD558\uB098","\uC740\uC194","\uD558\uB791","\uD558\uC9C4","\uC720\uB9BC","\uD6A8\uC8FC","\uB85C\uC544","\uCC44\uBBFC","\uC720\uB9AC","\uC608\uC8FC","\uD0DC\uB9B0","\uB2E4\uC19C","\uB2E4\uD76C","\uB2E8\uC544","\uC8FC\uC5F0","\uD61C\uB9B0","\uAC00\uC601","\uD0DC\uC5F0","\uB2E4\uBE48","\uC740\uC6B0","\uD558\uB78C","\uC740\uC720","\uC720\uBBFC","\uC2DC\uC628","\uD61C\uC778","\uB2E4\uD61C","\uD0DC\uB9AC","\uC9C0\uD61C","\uC7AC\uC778","\uD0DC\uC740","\uACE0\uC740","\uC2B9\uC5F0","\uC9C0\uC628","\uC218\uC778","\uC544\uB77C","\uC9C0\uC601","\uC218\uC815","\uBBFC\uD558","\uCC44\uC601","\uC774\uD604","\uC8FC\uC6D0","\uB77C\uC628","\uC218\uC9C0","\uC608\uC194","\uC740\uBCC4","\uAC00\uBE48","\uB8E8\uC544","\uC11C\uC778","\uC544\uC9C4","\uB098\uC728","\uC9C0\uD6C4","\uC728","\uB098\uC601","\uC18C\uC601","\uCC44\uD604","\uC2AC\uC544","\uB3C4\uD76C","\uB2E4\uC601","\uBCC4","\uC11C\uBE48","\uB2E4\uC728","\uD574\uC778","\uC8FC\uD76C","\uBCF4\uACBD","\uB9AC\uC548","\uC740\uC7AC","\uD55C\uB098","\uC5F0\uC7AC","\uC194","\uC2DC\uC6B0","\uC774\uC548","\uB3C4\uC740","\uC138\uBE48","\uC774\uB098","\uC608\uB2F4","\uC815\uBBFC","\uBCF4\uBBF8","\uD6A8\uB9B0","\uC720\uC774","\uC815\uC724","\uC544\uC5F0","\uC9C0\uD638","\uC18C\uC815","\uB9AC\uC6D0","\uC720\uC740","\uB3C4\uC544","\uC11C\uC6D0","\uD574\uB098","\uB2E4\uC6D0","\uC18C\uBBF8","\uC124","\uC608\uC778","\uCC44\uBE48","\uC138\uC778","\uC740\uBE48","\uC5F0\uC8FC","\uD558\uC74C","\uC11C\uC815","\uCC44\uD76C","\uB2E4\uACBD","\uC7AC\uD76C","\uC815\uC5F0","\uC138\uB9B0","\uD558\uC628","\uC774\uC194","\uB77C\uC724","\uC5F0\uC9C0","\uC900\uD76C","\uC9C0\uC778","\uD6A8\uC740","\uD558\uB9AC","\uC740\uBE44","\uBBF8\uC18C","\uD76C\uC6D0","\uC740\uC728","\uC720\uB77C","\uAC00\uC778","\uC724\uC8FC","\uB77C\uC5D8","\uD558\uBBFC","\uC724","\uAC00\uC744","\uD61C\uBBFC","\uC628\uC720","\uC544\uB984","\uC740\uC218","\uC81C\uC774","\uC120\uC6B0","\uCC44\uC728","\uD61C\uC9C4","\uC740\uD61C","\uC7AC\uC740","\uC5F0\uC218","\uD558\uC5D8","\uB098\uB9B0","\uC11C\uB9B0","\uB2E8\uBE44","\uC81C\uC778","\uD61C\uC724","\uD6A8\uC6D0","\uC18C\uB2F4","\uD604\uC9C4","\uBBFC\uC601","\uD61C\uBE48","\uBBFC\uC194","\uC724\uCC44","\uC815\uD604","\uB9AC\uB098","\uC18C\uC6D0","\uC138\uC601","\uC138\uD76C","\uD0DC\uC774","\uC0C8\uBD04","\uC740\uC124","\uC724\uC9C4","\uC5EC\uC9C4","\uC5EC\uC6D0","\uB3C4\uACBD","\uC815\uC740","\uAC00\uB78C","\uC720\uC548","\uD558\uBE48","\uC740\uC131","\uC720\uACBD"],male:["\uB300\uD604","\uC21C\uAE30","\uBBFC\uC900","\uC11C\uC900","\uB3C4\uC724","\uC608\uC900","\uC2DC\uC6B0","\uD558\uC900","\uC9C0\uD638","\uC8FC\uC6D0","\uC9C0\uD6C4","\uC900\uC6B0","\uB3C4\uD604","\uC900\uC11C","\uAC74\uC6B0","\uD604\uC6B0","\uC6B0\uC9C4","\uC9C0\uD6C8","\uC120\uC6B0","\uC720\uC900","\uC5F0\uC6B0","\uC11C\uC9C4","\uC740\uC6B0","\uBBFC\uC7AC","\uD604\uC900","\uC774\uC900","\uC2DC\uC724","\uC815\uC6B0","\uC724\uC6B0","\uC2B9\uC6B0","\uC9C0\uC6B0","\uC9C0\uD658","\uC2B9\uD604","\uC720\uCC2C","\uC900\uD601","\uC218\uD638","\uC2B9\uBBFC","\uC2DC\uD6C4","\uC9C4\uC6B0","\uBBFC\uC131","\uC774\uC548","\uC218\uD604","\uC900\uC601","\uC9C0\uC6D0","\uC7AC\uC724","\uC2DC\uD604","\uD55C\uACB0","\uD0DC\uC724","\uC9C0\uC548","\uC724\uD638","\uC2DC\uC6D0","\uC2DC\uC628","\uB3D9\uD604","\uC740\uCC2C","\uBBFC\uC6B0","\uC9C0\uD55C","\uC7AC\uC6D0","\uC11C\uC6B0","\uC740\uD638","\uBBFC\uADDC","\uC6B0\uC8FC","\uC7AC\uBBFC","\uBBFC\uCC2C","\uC6B0\uBE48","\uD558\uC728","\uC900\uD638","\uC728","\uD558\uC9C4","\uC9C0\uC728","\uC131\uBBFC","\uC2B9\uC900","\uC7AC\uD604","\uC131\uD604","\uD604\uC11C","\uBBFC\uD638","\uD0DC\uBBFC","\uC900","\uC9C0\uBBFC","\uC724\uC7AC","\uC608\uC131","\uC9C0\uC131","\uB85C\uC6B4","\uD0DC\uD604","\uD558\uB78C","\uBBFC\uD601","\uD558\uBBFC","\uC774\uD604","\uADDC\uBBFC","\uC131\uC900","\uC724\uC131","\uD0DC\uC591","\uC815\uBBFC","\uC608\uCC2C","\uC740\uC131","\uB3C4\uD6C8","\uC900\uC218","\uC900\uD76C","\uB2E4\uC628","\uB3C4\uD558","\uC8FC\uC548","\uBBFC\uC11D","\uAC74","\uC774\uB4E0","\uC8FC\uD638","\uC9C0\uC624","\uAC15\uBBFC","\uC9C0\uC644","\uD0DC\uC900","\uD558\uB791","\uC900\uC131","\uB3C4\uC601","\uC2B9\uC6D0","\uB3C4\uC728","\uC815\uD604","\uD604\uC218","\uC2B9\uD638","\uC2DC\uC728","\uC131\uBE48","\uC6B0\uD604","\uC2DC\uD6C8","\uC11C\uC728","\uBBFC\uC11C","\uB77C\uC628","\uD0DC\uC624","\uC2DC\uC644","\uAC74\uD76C","\uC8FC\uD658","\uC6D0\uC900","\uBBFC\uC218","\uC815\uD6C8","\uB2E8\uC6B0","\uC7AC\uD558","\uD604\uBBFC","\uC2B9\uC724","\uB3D9\uD558","\uB3C4\uACBD","\uC724","\uC11C\uD6C4","\uC8FC\uC601","\uBBFC\uAE30","\uC2DC\uC548","\uBBFC\uAC74","\uACBD\uBBFC","\uB3C4\uC6D0","\uC815\uD6C4","\uC2DC\uD658","\uD604\uC131","\uC628\uC720","\uD604","\uAC00\uC628","\uB3C4\uC900","\uC2B9\uBE48","\uC815\uC6D0","\uD638\uC900","\uC7AC\uC900","\uD0DC\uD6C8","\uC7AC\uD6C8","\uC138\uD604","\uC5F0\uC900","\uD0DC\uC601","\uB3D9\uAC74","\uD558\uC628","\uD0DC\uACBD","\uC720\uAC74","\uBC94\uC900","\uD0DC\uC728","\uCC2C\uC601","\uD604\uC9C4","\uC7AC\uC601","\uC601\uC900","\uC131\uC724","\uD558\uC724","\uD604\uC2B9","\uD558\uB298","\uC8FC\uD601","\uC9C0\uD601","\uCC2C\uC6B0","\uC138\uC900","\uC0C1\uD604","\uC2B9\uD6C8","\uB3D9\uC724","\uC2B9\uC7AC","\uC6B0\uC131","\uC0B0","\uC720\uC548","\uAC74\uD638","\uD0DC\uD638","\uC724\uCC2C","\uCC2C","\uCC2C\uD76C","\uC724\uD6C4","\uC11C\uD638","\uC131\uD6C8","\uC5F0\uD638","\uC9C0\uC6B4","\uC720\uD604","\uB3C4\uACB8","\uC218\uBBFC","\uADDC\uBE48","\uB3D9\uC6B1","\uC2B9\uCC2C","\uC11C\uC6D0","\uD0DC\uC6B0","\uD604\uD638","\uC8FC\uD55C","\uC774\uD55C","\uC720\uC9C4","\uC7AC\uD76C","\uC7AC\uC6B0","\uC2DC\uD638","\uC218\uD601","\uD604\uBE48","\uC8FC\uC644","\uC6B0\uCC2C","\uC120\uD638","\uD6A8\uC900","\uC2DC\uD5CC","\uC8FC\uD604","\uC740\uC728","\uB3C4\uC9C4","\uC900\uC11D","\uB3D9\uC6B0","\uC7AC\uD601","\uD615\uC900","\uC131\uC6B0","\uC0C1\uC724","\uC6B0\uC601","\uC7AC\uC774","\uC6B0\uC900","\uC900\uD6C4","\uC720\uBE48","\uB85C\uC774","\uB3C4\uC5F0","\uC724\uC11C","\uC9C4\uD638","\uD0DC\uC778","\uC544\uC778","\uAC15\uD604","\uC9C0\uC6A9","\uC720\uBBFC","\uC6A9\uC900","\uC740\uC900","\uC11D\uD604","\uC900\uD615","\uADDC\uD604","\uB3D9\uC900","\uD638\uC9C4","\uAC15\uC6B0","\uC2B9\uD6C4","\uC9C0\uC6C5","\uC2E0\uC6B0","\uC0C1\uC6B0","\uD558\uC131","\uC6D0\uC6B0","\uC9C4\uD601","\uC778\uC6B0","\uC2B9\uD658","\uB3D9\uD6C8","\uC11C\uC724","\uD0DC\uD558","\uC740\uD601","\uC7AC\uD638","\uC2B9\uC720","\uBBFC\uACB0","\uC138\uD6C8","\uC2B9\uC8FC","\uC131\uC6D0","\uC601\uBBFC","\uC885\uD604","\uC740\uC218","\uC544\uC900","\uC7AC\uC728","\uC900\uC6D0","\uC815\uBE48","\uC900\uD604","\uD604\uC11D","\uC9C4\uC11C","\uD0DC\uD658","\uC601\uC6B0","\uD61C\uC131","\uC5EC\uC900","\uC694\uD55C","\uC724\uAC74","\uC0C1\uBBFC","\uD0DC\uC774","\uC720\uC131","\uD0DC\uAC74","\uAC74\uD6C4","\uD574\uC900","\uB3D9\uD601","\uC120\uC728","\uD55C\uC728","\uD0DC\uC131","\uC9C0\uC628","\uB3D9\uADDC","\uC131\uC9C4","\uD76C\uCC2C","\uC2DC\uC900","\uCC44\uBBFC","\uD55C\uC6B8","\uB2E4\uC6D0"]};var I={generic:["\uAE40","\uC774","\uBC15","\uCD5C","\uC815","\uAC15","\uC870","\uC724","\uC7A5","\uC784","\uC624","\uD55C","\uC2E0","\uC11C","\uAD8C","\uD669","\uC548","\uC1A1","\uB958","\uD64D","\uC720","\uC804","\uC591","\uACE0","\uBB38","\uC190","\uBC30","\uBC31","\uD5C8","\uB178","\uC2EC","\uD558","\uC8FC","\uAD6C","\uACFD","\uC131","\uCC28","\uC6B0","\uC9C4","\uBBFC","\uB098","\uC9C0","\uC5C4","\uBCC0","\uCC44","\uC6D0","\uBC29","\uCC9C","\uACF5","\uD604","\uD568","\uC5EC","\uC5FC","\uC11D","\uCD94","\uB3C4","\uC18C","\uC124","\uC120","\uB9C8","\uAE38","\uC5F0","\uC704","\uD45C","\uBA85","\uAE30","\uBC18","\uB77C","\uC655","\uAE08","\uC625","\uC721","\uC778","\uB9F9","\uC81C","\uBAA8","\uB0A8","\uD0C1","\uAD6D","\uC5B4","\uACBD","\uC740","\uD3B8","\uC6A9","\uC608","\uBD09","\uC0AC","\uBD80","\uAC00","\uBCF5","\uD0DC","\uBAA9","\uD615","\uD53C","\uB450","\uAC10","\uD638","\uC74C","\uBE48","\uB3D9","\uC628","\uC2DC","\uBC94","\uC88C","\uD33D","\uC2B9","\uAC04","\uC0C1","\uAC08","\uB2E8","\uACAC","\uB2F9"]};var K={generic:[{value:"{{person.last_name.generic}}",weight:1}]};var M=[{value:"{{person.lastName}}{{person.firstName}}",weight:1}];var Y={first_name:B,last_name:I,last_name_pattern:K,name:M},W=Y;var j=["0#-#####-####","0##-###-####","0##-####-####"];var z=["+82##########","+82#########"];var F=["0##-####-####","0##-###-####"];var Z={human:j,international:z,national:F},q=Z;var $={format:q},A=$;var E=["\uAC10\uC815\uC801\uC778","\uAC19\uC740","\uAC70\uB300\uD55C","\uAC70\uCC3D\uD55C","\uAC74\uC870\uD55C","\uAC81 \uC5C6\uB294","\uACA9\uB82C\uD55C","\uACB0\uC815\uC801\uC778","\uACBD\uC194\uD55C","\uACBD\uD5D8\uD55C","\uACE0\uADC0\uD55C","\uACE0\uAE09\uC758","\uACE0\uB300\uC758","\uACF5\uC815\uD55C","\uAD00\uC2EC \uC788\uB294","\uAD49\uC7A5\uD55C","\uAD50\uC591 \uC788\uB294","\uAD50\uC721\uBC1B\uC740","\uAD50\uD65C\uD55C","\uAD6C\uBD80\uB7EC\uC9C4","\uAD74\uACE1\uC9C4","\uAD75\uC740","\uAD8C\uC704 \uC788\uB294","\uADC0\uC5EC\uC6B4","\uADF9\uC801\uC778","\uAE08\uBC1C\uC758","\uAE30\uBBFC\uD55C","\uAE30\uBD84 \uC88B\uC740","\uAE30\uC05C","\uAE30\uCD08\uC801\uC778","\uAE4A\uC740","\uAE68\uB057\uD55C","\uAE68\uC9C4","\uB04A\uC784\uC5C6\uB294","\uB054\uCC0D\uD55C","\uB098\uC05C","\uB0A0\uC52C\uD55C","\uB0C9\uB2F4\uD55C","\uB113\uC740 \uB9C8\uC74C\uC744 \uAC00\uC9C4","\uB180\uB77C\uC6B4","\uB208\uBD80\uC2E0","\uB208\uC774 \uBA3C","\uB299\uC740","\uB2A5\uC219\uD55C","\uB2E4\uB978","\uB2E8\uC870\uB85C\uC6B4","\uB2E8\uD638\uD55C","\uB2EB\uD78C","\uB2F9\uD669\uC2A4\uB7EC\uC6B4","\uB300\uB2F4\uD55C","\uB300\uB7C9","\uB354\uB7EC\uC6B4","\uB3D9\uAD74 \uAC19\uC740","\uB450\uB824\uC6B4","\uB6F0\uC5B4\uB09C","\uB9C8\uB978","\uB9C9\uB300\uD55C","\uB9DB\uC788\uB294","\uB9E4\uB825\uC801\uC778","\uB9E4\uD639\uC801\uC778","\uBA39\uC744 \uC218 \uC788\uB294","\uBA3C","\uBA4D\uB4E0","\uBA54\uB9C8\uB978","\uBA85\uD655\uD55C","\uBAA8\uBC94\uC801\uC778","\uBB34\uB354\uC6B4","\uBB34\uC11C\uC6B4","\uBB34\uC2EC\uD55C","\uBBF8\uCE5C","\uBC00\uC9D1\uD55C","\uBC1D\uC740","\uBC29\uC5B4","\uBC29\uC74C","\uBC84\uB824\uC9C4","\uBCC4\uAC1C\uC758","\uBCF5\uC7A1\uD55C","\uBD80\uB044\uB7EC\uC6B4","\uBD80\uB2F4\uC2A4\uB7EC\uC6B4","\uBD80\uB4DC\uB7EC\uC6B4","\uBD80\uB7EC\uC6CC\uD558\uB294","\uBD80\uC815\uD55C","\uBD80\uC871\uD55C","\uBD84\uBA85\uD55C","\uBD84\uC8FC\uD55C","\uBD88\uACB0\uD55C","\uBD88\uB8E9\uD55C","\uBD88\uC548\uD55C","\uBD88\uCDA9\uC2E4\uD55C","\uBD90\uBE44\uB294","\uBE44\uB6A4\uC5B4\uC9C4","\uBE44\uC2FC","\uBE44\uC5B4 \uC788\uB294","\uBE44\uCC38\uD55C","\uBE60\uB978","\uC0AC\uB791\uC2A4\uB7EC\uC6B4","\uC0AC\uB791\uD558\uB294","\uC0AC\uB824 \uAE4A\uC740","\uC0AC\uC545\uD55C","\uC0B4\uC544 \uC788\uB294","\uC0C1\uC138\uD55C","\uC0C1\uCF8C\uD55C","\uC0DD\uAE30 \uC788\uB294","\uC0DD\uBD84\uD574\uC131","\uC131\uC2E4\uD55C","\uC138\uB828\uB41C","\uC18C\uB984 \uB07C\uCE58\uB294","\uC194\uC9C1\uD55C","\uC21C\uC218\uD55C","\uC26C\uC6B4","\uC2B5\uD55C","\uC2DC\uC6D0\uD55C","\uC2E0\uB098\uB294","\uC2E0\uB8B0\uD560 \uC218 \uC788\uB294","\uC2FC","\uC544\uB984\uB2E4\uC6B4","\uC54C\uACE0 \uC788\uB294","\uC57D\uAC04\uC758","\uC5B4\uB290","\uC5B4\uB450\uC6B4","\uC5B4\uB824\uC6B4","\uC5B4\uB9AC\uC11D\uC740","\uC5B4\uC0C9\uD55C","\uC5B4\uC124\uD508","\uC5B4\uC9C0\uB7EC\uC6B4","\uC5B5\uC13C","\uC5C4\uCCAD\uB09C","\uC5ED\uACA8\uC6B4","\uC5F4\uC2EC\uD788","\uC601\uB9AC\uD55C","\uC608\uC220\uC801\uC778","\uC608\uC758 \uBC14\uB978","\uC628\uD654\uD55C","\uC644\uBCBD\uD55C","\uC678\uD5A5\uC801\uC778","\uC6A9\uAC10\uD55C","\uC6A9\uAE30 \uC788\uB294","\uC6B0\uC544\uD55C","\uC6D0\uD1B5\uD615","\uC704\uB3C5\uD55C","\uC719\uC719","\uC720\uB9AC\uD55C","\uC720\uBA85\uD55C","\uC720\uC775\uD55C","\uC720\uCE58\uD55C","\uC724\uB9AC\uC801","\uC74C\uCE68\uD55C","\uC758\uAE30 \uC591\uC591\uD55C","\uC758\uC2DD\uD558\uB294","\uC774\uAD6D\uC801\uC778","\uC774\uD0C0\uC801\uC778","\uC778\uAE30 \uB9CE\uC740","\uC778\uC815 \uB9CE\uC740","\uC77C\uCC0D","\uC790\uC2E0 \uC788\uB294","\uC794\uD639\uD55C","\uC800\uBA85\uD55C","\uC800\uC8FC\uBC1B\uC740","\uC801\uADF9\uC801\uC778","\uC801\uC808\uD55C","\uC804\uD1B5\uC801\uC778","\uC80A\uC740","\uC815\uAD50\uD55C","\uC815\uD1B5\uD55C","\uC815\uD655\uD55C","\uC870\uC7A1\uD55C","\uC874\uACBD\uD558\uB294","\uC8FC\uC758 \uAE4A\uC740","\uC8FD\uC740","\uC990\uAC70\uC6B4","\uC9C0\uB8E8\uD55C","\uC9C4\uC9C0\uD55C","\uC9E7\uC740","\uCC28\uAC00\uC6B4","\uCC3D\uC758\uC801\uC778","\uCCA0\uC800\uD55C","\uCD94\uC6B4","\uCDA9\uC2E4\uD55C","\uCE58\uBA85\uC801\uC778","\uCE5C\uC219\uD55C","\uCE5C\uC808\uD55C","\uCE68\uCC29\uD55C","\uCF8C\uD65C\uD55C","\uD070","\uD0C0\uC6D0\uD615\uC758","\uD0C4\uB825 \uC788\uB294","\uD0C8\uC9C4\uD55C","\uD0D0\uC695\uC2A4\uB7EC\uC6B4","\uD1B5\uD1B5\uD55C","\uD3B8\uC548\uD55C","\uD488\uC704 \uC788\uB294","\uD48D\uBD80\uD55C","\uD544\uC218\uC801\uC778","\uD589\uBCF5\uD55C","\uD5A5\uAE0B\uD55C","\uD63C\uB780\uC2A4\uB7EC\uC6B4","\uD654\uB09C","\uD654\uB824\uD55C","\uD658\uC0C1\uC801","\uD65C\uB3D9\uC801\uC778","\uD65C\uBC1C\uD55C","\uD6CC\uB96D\uD55C","\uD754\uD55C","\uD765\uBD84\uD55C","\uD76C\uBBF8\uD55C"];var G=["\uAC04\uB2E8\uD788","\uAC70\uAFB8\uB85C","\uAC70\uB9CC\uD558\uAC8C","\uAC70\uC758","\uACE0\uC694\uD788","\uACE0\uC758\uB85C","\uADF9\uC9C4\uD788","\uAE4A\uC774","\uB098\uC911\uC5D0","\uB178\uD558\uC5EC","\uB2E4\uC18C","\uB2E4\uCC44\uB86D\uAC8C","\uB300\uB2F4\uD558\uAC8C","\uB300\uCCB4\uB85C","\uB3C4\uC804\uC801\uC73C\uB85C","\uB611\uB611\uD558\uAC8C","\uB9C8\uAD6C","\uB9F9\uBAA9\uC801\uC73C\uB85C","\uBA74\uBC00\uD788","\uBA85\uB791\uD558\uAC8C","\uBAB9\uC2DC","\uBC14\uB974\uAC8C","\uBC14\uC058\uAC8C","\uBC1D\uAC8C","\uBD84\uBA85\uD788","\uBE44\uC815\uC0C1\uC801\uC73C\uB85C","\uBE60\uB974\uAC8C","\uC2EC\uD558\uAC8C","\uC544\uB984\uB2F5\uAC8C","\uC5B4\uC0C9\uD558\uAC8C","\uC5B8\uC81C\uB098","\uC5F4\uC2EC\uD788","\uC6A9\uAC10\uD558\uAC8C","\uC6B0\uC5F0\uD788","\uC720\uAC10\uC2A4\uB7FD\uAC8C","\uC758\uC2EC\uC2A4\uB7FD\uAC8C","\uC790\uB791\uC2A4\uB7FD\uAC8C","\uC794\uC778\uD558\uAC8C","\uC990\uAC81\uAC8C","\uC9C0\uC18D\uC801\uC73C\uB85C","\uCC9C\uD558\uAC8C","\uCFE8\uD558\uAC8C","\uD589\uBCF5\uD558\uAC8C","\uD765\uBBF8\uB86D\uAC8C","\uD76C\uBBF8\uD558\uAC8C"];var H=["\uAC00\uC785","\uACBD\uBCF4","\uACE0\uB1CC","\uACE0\uB3C4","\uACE0\uBB38","\uACE8\uBAA9","\uACF5\uAD70","\uACF5\uAE30","\uACF5\uC801","\uACF5\uD56D","\uAD00\uB9AC","\uAD00\uB9AC\uC790","\uAD11\uACE0","\uAD6C\uAE09\uCC28","\uAD6C\uC2E4","\uB098\uC774","\uB0B4\uC138","\uB180\uB78C","\uB18D\uC5C5","\uB2EC\uB825","\uB300\uC0AC","\uB300\uC218\uD559","\uB300\uC548","\uB300\uD589\uC0AC","\uB3C4\uD1A0\uB9AC","\uB3D9\uB9F9","\uB3D9\uC791","\uBB34\uC815\uBD80\uC8FC\uC758\uC790","\uBC18\uCE68","\uBC30\uB2F9","\uBC30\uC6B0","\uBCC0\uACBD","\uBCC4\uBA85","\uBCF4\uC801","\uBCF4\uC88C\uAD00","\uBD80\uC0AC","\uBD84\uC11D","\uBD84\uC11D\uC790","\uBD84\uC704\uAE30","\uBD88\uC30D\uD55C","\uBE44\uD589\uAE30","\uBE44\uD589\uC0AC","\uBE44\uD589\uC120","\uBE44\uD589\uC7A5","\uC131\uC778","\uC131\uCDE8","\uC131\uCDE8\uC790","\uC1E0\uBD99\uC774","\uC220","\uC2B9\uC778","\uC544\uB4DC\uB808\uB0A0\uB9B0","\uC544\uB9C8\uC874","\uC544\uBAAC\uB4DC","\uC545\uC5B4","\uC548\uAC74","\uC54C\uD30C\uBCB3","\uC54C\uD30C\uCE74","\uC560\uD504\uD130\uC170\uC774\uBE0C","\uC568\uBC94","\uC591","\uC591\uC790","\uC5B4\uB311\uD130","\uC5D0\uC5B4\uBC31","\uC5D0\uC774\uC804\uD2B8","\uC5D0\uC77C","\uC5EC\uBC30\uC6B0","\uC5EC\uC9C4","\uC5EC\uD30C","\uC5F0\uC0B0","\uC608\uC758","\uC624\uD6C4","\uC639\uD638","\uC678\uACC4\uC778","\uC6A9\uB3C8","\uC720\uC5F0","\uC720\uCD94","\uC74C\uD5A5\uD559","\uC751\uC9D1","\uC774\uC810","\uC77C","\uC801\uC751","\uC804\uB2A5\uC790","\uC804\uC9C4","\uC81C\uB2E8","\uC870\uC5B8","\uC870\uC815","\uC8FC\uC18C","\uC990\uAC70\uC6C0","\uC9C0\uC6D0","\uC9C4\uBCF4","\uC9C4\uC220","\uC9C4\uC220\uC11C","\uCD9C\uD604","\uCE68\uB7B5","\uD0C4\uC57D","\uD0D0\uB2C9","\uD2B9\uC0AC","\uD569\uAE08","\uD569\uC758","\uD56D\uACF5\uAE30","\uD56D\uACF5\uB8CC","\uD56D\uACF5\uD3B8","\uD574\uC11D\uD559","\uD589\uB3D9","\uD615\uC6A9\uC0AC","\uD638\uBC15\uC0C9","\uD65C\uB3D9","\uD65C\uB3D9\uAC00","\uD65C\uC131\uD654"];var tt={adjective:E,adverb:G,noun:H},J=tt;var ot={color:i,company:a,date:d,internet:s,location:L,lorem:v,metadata:C,person:W,phone_number:A,word:J},O= exports.a =ot;var jo=new (0, _chunkCGZKEYQHcjs.n)({locale:[O,_chunkOD3LIBRQcjs.a,_chunkCGZKEYQHcjs.o]});exports.a = O; exports.b = jo;
