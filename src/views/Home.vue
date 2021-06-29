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
                v-model="email" 
                class='q-ma-md col-xs-11 col-8'
                label="输入邮箱账号"
                lazy-rules
                :rules="[ val => val !== null && val !== '' || '不能为空！',
                  val => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val) || '邮箱格式不正确！'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
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


          <q-tab-panel name="signup" class='row justify-center'>
            <div class="text-h4 text-center col-12">注册</div>
            <q-input rounded filled 
              v-model="email" 
              class='q-ma-md col-xs-11 col-8'
              label="输入邮箱账号"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '不能为空！',
                  val => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val) || '邮箱格式不正确！'
                ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
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
            <q-input rounded filled 
              v-model="password_confirm" 
              class='q-ma-md col-xs-11 col-8'
              label="再次输入密码"
              type="password"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '密码不能为空']"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
            </q-input> 
            <q-btn color="primary" icon-right="send" label="注 册" class='q-ma-md col-xs-11 col-8' @click='register' />        
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
      email: '',
      password: '',
      password_confirm:''
    }
  },
  methods:{
    // async post(url,load) {
    //   let res = await this.$axios.post(url,load)
    //   return res
    // },
    // async login() {
    //   let loads = {
    //     id:this.email,
    //     password:this.password
    //   };

    //   let res = await this.post('https://qc8y9k.fn.thelarkcloud.com/login',{id: '123@163.com',password: '123'})

    //   console.log(res);
    // },
    // register(){

    // }
    post(url,load) {
     
      return 123
    },
    login: async function() {
      let loads = {
        id:this.email,
        password:this.password
      };

      let res = await this.$axios.post('https://qc8y9k.fn.thelarkcloud.com/login',loads);

      console.log(res);

      alert(res.data.msg);


    },
    register: async function() {
      alert("00000");
    }
  }
}

// TODO: 解决 async 用不了axios问题！！！

// async post(url,params){
//       let res = this.$axios.post(url,params)
//       return res
//     },
//     async login(){
//       let load = {
//         id:this.email,
//         password:this.password
//       }
//       let res = await this.post('https://qc8y9k.fn.thelarkcloud.com/login',load)
      
//       console.log(res.data);
      
//     },
//     register(){
//       console.log('?');
//     }
</script>


<style lang="scss" scoped>
h1{
  color:$main-color
}
</style>
