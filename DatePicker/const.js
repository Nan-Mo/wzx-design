import moment from 'moment';
export var types = [{
  name: '日',
  type: 'date'
}, {
  name: '周',
  type: 'week'
}, {
  name: '月',
  type: 'year-month'
}, {
  name: '自定义',
  type: 'custom'
}];
export var date = {
  minDate: new Date(2020, 0, 1),
  maxDate: new Date(2025, 10, 1),
  today: new Date(),
  value: new Date(new Date().getTime() - 86400000),
  monthsVal: new Date(moment().subtract(1, 'months').valueOf())
};
var today = "".concat(moment().format('YYYY-MM-DD'));
export var formatCN = function formatCN(val) {
  return moment(val).format('YYYY年MM月DD日');
};
export var defaultStartTime = {
  text: moment().subtract(8, 'day').format('YYYY年MM月DD日'),
  value: moment(today).subtract(8, 'day')
};
export var defaultEndTime = {
  text: moment().subtract(1, 'day').format('YYYY年MM月DD日'),
  value: moment(today).subtract(1, 'day')
};