<template>
  <div>
    <dlbheader></dlbheader>

      <div class="main">
        <div class="title">
          <span >党员姓名</span><br>
          <input type="text"  />
        </div>
        <div class="title">
          <span  class="title">政治学习时间</span><br>
          <input type="text"  />
        </div>
        <div class="title1">
          <span  class="title">政治学习主要内容</span><br>
          <input type="text" /><br>
          <a class="btn" href="#"><span >+</span></a>

        </div>
        <button>点击增加积分</button>






    </div>

  </div>


</template>
<script>
import header from '../components/layout/header.vue'
import footer from '../components/layout/footer.vue'
export default {
	data(){
		return {





      }

		}
	,
	components:{
   'dlbheader':header,


	}}

</script>
<style scoped>
  .main{margin-left: 0.2rem}

  .title,.title1{font-size: 0.15rem;margin-top: 0.1rem; }
  .main input{width:95%;height: 0.25rem;margin-top: 0.2rem}
  .main .title1 input{width:95%;height: 1.5rem}
  .main .title1 a span{display:block;margin-top: -0.15rem;font-size:0.4rem ;color: #9B0A1A}
  .btn{margin-top: 0.3rem;border:0.01rem solid #B53141 ;display:block;width:0.4rem;height:0.4rem;text-align: center}
   button{margin-left: 1.2rem;width: 0.7rem;height: 0.5rem;background-color: #B93647 ;width: 1.5rem ;color: #FFFFFF ;border-radius:0.1rem;font-size: 0.18rem}

</style>
