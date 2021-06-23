<template>
  <q-page>
    <div class="row justify-center full items-center">
      <div class="col-xs-8 col-sm-6 col-md-5 col-lg-4">
        <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="bg-primary text-white shadow-2"
        :breakpoint="0"
      >
        <q-tab name="mails" icon="mail" />
        <q-tab name="alarms" icon="alarm" />
      </q-tabs>
      </div>
      
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      result: '回应',
      tab: '选项'
    }
  },
  methods:{
   
      
  }
}




//  async go(){
//       await this.$axios.post('https://qcdhrv.fn.thelarkcloud.com/hello',{user:'xxq',password:'259'})
//       .then(
//         res => {
//           this.result = res.data
//           console.log(res.data);
//         }
//       )

//       await new Promise((resolve) => {
//         console.log(1);
//         resolve()
        
//       }).then(
//         () => {
//           console.log(2);
//         }
//       ).catch(
//         () => {
//           console.log('failed');
//         }
//       )

//       console.log('done');
//     }

</script>


<style lang="scss" scoped>
h1{
  color:$main-color
}
</style>