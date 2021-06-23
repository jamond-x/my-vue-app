<template>
  <q-page>
    <div class="row justify-center full items-center">
      <div class="col-xs-8 col-sm-6 col-md-5 col-lg-4">
        <q-card>
            <q-tabs
              v-model="tab"
              dense
              align="justify"
              class="bg-primary text-white shadow-2"
              :breakpoint="0"
            >
              <q-tab name="signin" icon="email" />
              <q-tab name="signup" icon="alarm" />
            </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated> 
          <q-tab-panel name="signin" class='row justify-center'>
            <div class="text-h4 text-center col-12">登 录</div>
              <q-input rounded filled 
                v-model="eamil" 
                class='q-ma-md col-xs-11 col-8'
                label="输入邮箱账号"
                lazy-rules
                :rules="[ val => val !== null && val !== '' || '邮箱不能为空']"
              >
                <template v-slot:prepend>
                  <q-icon name="star" />
                </template>
              </q-input>
              <q-input rounded filled 
                v-model="password" 
                type="password" 
                label="输入账号密码"
                class='q-ma-md col-xs-11 col-8'
                lazy-rules
                :rules="[ val => val !== null && val !== '' || '密码不能为空']"
                >
                <template v-slot:prepend>
                  <q-icon name="password" />
                </template>
              </q-input>  
              <q-btn color="primary" icon-right="send" label="登 录" class='q-ma-md col-xs-11 col-8' @click='login' />        
          </q-tab-panel>

          <q-tab-panel name="signup">
            <div class="text-h4 text-center col-12">注册</div>
            <q-input rounded filled 
              v-model="eamil" 
              class='q-ma-md col-xs-11 col-8'
              label="输入邮箱账号"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '邮箱不能为空']"
            >
            // TODO: 添加邮箱格式验证
              <template v-slot:prepend>
                <q-icon name="star" />
              </template>
            </q-input>
            <q-input rounded filled 
              v-model="password" 
              class='q-ma-md col-xs-11 col-8'
              label="输入账号密码"
              type="password"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '密码不能为空']"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
            </q-input>  
            <q-btn color="primary" icon-right="send" label="注 册" class='q-ma-md col-xs-11 col-8' />        
          </q-tab-panel>

          
        </q-tab-panels>

        </q-card>
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
      tab: 'signin',
      eamil: '',
      password: ''
    }
  },
  methods:{
    login(){
      alert('work')
    }
      
  },
  create:function(){
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