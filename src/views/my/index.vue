<template>
  <div class="my">
    <!-- <Header
      :rightText="$t('submit')"
      :title="$t('submit')"
      :leftArrow="false"
    /> -->
    <div class="my_list">
      <div class="my-store"></div>
      <div class="my-item">
        <div>
          <section class="personal-floor">
            <ul>
              <li class="touch-hflexbox profile-photo webMainBB">
                <div class="user-name">个人头像</div>
                <div id="userphone_upload" class="wu-example  clearfix">
                  <div id="preview " >
                    <div id="imghead">
                      <!-- <p v-if="headPortrait" :style="{backgroundImage:`url(${headPortrait})`}"></p> -->
                      <p class="defaultImg fr"></p>
                    </div>
                  </div>
                </div>
              </li>
              <div>
                <input type="hidden" name="pic_id" id="class_pic_id" value="272" style="display: none;">
              </div>
              <div class="space-4"></div>
              <li class="touch-hflexbox webMainBB">
                <div class="user-name">昵称</div>
                <div class="input-r">
                  <input type="text" name="name"  placeholder="请输入昵称">
                </div>
              </li>
              <li class="touch-hflexbox webMainBB">
                <div class="user-name">签名</div>
                <div class="input-r">
                  <input type="text" name="tag"  placeholder="请输入签名">
                </div>
              </li>
              <li class="touch-hflexbox sexbox webMainBB">
                <div class="user-name">性别</div>
                <div class="sex">
                  <span class="sex-sort">
                    <label>
                      <input type="radio" name="sex"  value="1" checked>
                      <i class="iconfont icon-check"></i>
                    </label>男
                  </span>
                  <span class="sex-sort">
                    <label>
                      <input type="radio" name="sex"  value="0">
                      <i class="iconfont icon-check"></i>
                    </label>女
                  </span>
                </div>
              </li>
            
            </ul>
          </section>
        </div>
      </div>
    </div>
    <Footer :active="3" />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";


export default {
  name: "my",
  components: {
    Header,
    Footer
  },
  data(){
    return {

    };
  },
  created() {
    console.log(this);
  },

};
</script>
<style lang="less" scoped>
.my {
  font-size: 12px;
  .my_list {
    background-color: #f5f5f5;
  }
  #imghead {
  p {
    height: 56px;
    width: 56px;
    background-size: 100%;
  }
}


.defaultImg {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  // background: url(../../assets/images/user-ps.png) no-repeat;
  background-size: contain;
  border: 1px solid #eeeeee;
  border-radius: 50%;
}
.personal-floor {
  background: #fff;
  margin-top: 10px;
  input {
    border: none;
    font-size: 16px;
    color: #999;
    // display: block;
    outline: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
  }
  .profile-photo {
    padding: 10px 20px;
  }
  li {
    position: relative;
    min-height: 54px;
    -webkit-box-align: center;
    padding: 0 20px;
    display: -webkit-box;
    background: #fff -webkit-linear-gradient(bottom, #e2e2e2 50%, transparent 0);
    background-repeat: no-repeat;
    background-size: 100% 1px;
    background-position: bottom;
    font-size: 16px;
  }
  .user-name {
    font-size: 16px;
    color: #333;
    letter-spacing: -0.08px;
    width: 6em;
  }
  .input-r {
    -webkit-box-flex: 1;
    text-align: right;
  }
  #userphone_upload {
    // .mix-y-center();
    right: 20px;
    height: 56px;
    padding: 10px 0;
  }
  #userphone_upload #preview {
    width: 56px;
    height: 56px;
    z-index: 2;
  }
  #userphone_upload #preview p {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .input-r input {
    text-align: right;
    outline: none;
  }
  .input-r select {
    color: #666;
    border: none;
    text-align: right;
  }
  .sex {
    .sex-sort {
      display: inline-block;
      margin: 0 4px;
      font-size: 16px;
      color: #666;
    }
    label {
      display: inline-block;
      width: 20px;
      position: relative;
      height: 20px;
      margin-left: 5px;
      margin-right: 5px;
      vertical-align: middle;
    }
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      opacity: 0;
      z-index: 5;
    }
    input:checked + i.icon-check {
      // background: url(../../assets/images/check-on.png);
      background-size: cover;
    }
    input + i.icon-check {
      display: inline-block;
      position: absolute;
      z-index: 2;
      left: 0;
      width: 20px;
      height: 20px;
      top: 0;
      // background: url(../../assets/images/check-off.png);
      background-size: cover;
    }
  }
}

.sexbox{
  .user-name{
    -webkit-box-flex: 1;
  }
  .sex{
    display: flex;
    align-items: center;
  }
}
}
</style>
