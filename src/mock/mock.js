const Mock = require('mockjs');
const Random = Mock.Random;

const mockData = function() {
  return {
    data: Random.dataImage('200x200','')
  }
};

Mock.mock('/view/detail', 'post', mockData);