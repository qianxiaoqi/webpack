// let str = require('./a.js');
// import './index.css';
// import './index.less';


console.log(str + '小七发发ffffff发');
document.getElementById('app').innerHTML = str;
if (module.hot) {
  module.hot.accept();
}
