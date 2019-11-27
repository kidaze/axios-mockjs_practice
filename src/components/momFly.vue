<template>
  <div>
      <p>随机生成色图</p>     
      <button @click="wow()">0w0</button>
      <img :src="para" class="imgStyle" />
  </div>
</template>

<script>
import api from '../api/api.js';
// const axios = require('axios');

export default {
  name: 'momFly',
  data(){
      return{
        para:''
      }
  },
  methods:{
      wow(){
          console.log('amazing!')
          api.get_news('/view/detail').then((res)=>{
            //处理返回
            this.para = res.data
            console.log('res!',res.data)
          })
        // axios.post('/view/detail',)
        //     .then(function(res){
        //     console.log(res);
        //     })
        //     .catch(function(err){
        //     console.log(err);
        // });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgStyle{
    display: block;
    margin: 0 auto;
    margin-top: 30px;
}
</style>
