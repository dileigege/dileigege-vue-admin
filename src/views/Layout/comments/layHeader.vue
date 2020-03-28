<!--
 * @Description: layheader.vue组件
 * @Author: Fore-Zhang
 * @Date: 2020-03-27 19:12:34
 * @LastEditTime: 2020-03-28 22:26:57
 * @LastEditors: 项目组长
 -->
 <!--  -->
 <template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="logo">管理进度管理系统 |</div>
    </el-col>
    <el-col :offset="2" :span="7">
      <div class="nav">
        <ul>
          <li
            class="item"
            v-for="(item, index) in footerList"
            :key="index"
            :class="{'active': currentSort==index}"
            @click="active(index)"
          >
            <a href="#">{{ item.name}}</a>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :offset="3" :span="5">
      <div class="selected">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
          suffix-icon="el-icon-search"
        ></el-autocomplete>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="grid">
        <div class="grid-oer">
          <el-badge is-dot class="item">
            <i class="iconfon el-icon-chat-dot-round"></i>
          </el-badge>
        </div>
        <div class="grid-wer">
          <span>admin</span>
        </div>
        <div class="grid-mer">
          <el-dropdown>
            <span class="el-dropdown-link">
             <i class="iconfon el-icon-s-operation el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item disabled>git地址</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!--  -->
        </div>
      </div>
    </el-col>
  </el-row>
</template>
 
 <script>
export default {
  name: "layHeader",
  data() {
    return {
      currentSort: 0,
      footerList: [
        { li: 1, name: "首页" },
        { li: 2, name: "用户管理" },
        { li: 3, name: "项目管理" },
        { li: 4, name: "进程管理" }
      ],
      restaurants: [],
      state: "",
      timeout: null
    };
  },
  methods: {
    active(index) {
      console.log(index);
      this.currentSort = index;
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
<style>
.selected .el-input__inner {
  height: 30px !important;
  color: #fff;
  background-color: #03298a;
  border: #03298a;
  border-radius: 25px;
  box-shadow: 1px 0 3px #042969;
}
.el-input__prefix,
.el-input__suffix {
  color: #ffffff;
}
</style>
 <style lang='less' scoped>
.logo {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-shadow: 1px 0 3px #000000;
}
.active {
  background-color: #fff;

  a {
    color: #2375ff !important ;
  }
}

.nav ul {
  color: #fff;
  li {
    list-style-type: none;
    float: left;
    line-height: 0;
    margin: 15px 5px;
    padding: 15px 15px;
    font-weight: 600;
    font-weight: 600;
    border-radius: 25px;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
}
.grid {
  padding-top: 17px;
  line-height: 15px;
  .grid-oer {
    display: inline-block;
    .iconfon {
      padding: 5px;
      background-color: #fff;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 600;
      color: #2375ff;
    }
  }
  .grid-wer {
    display: inline-block;
    color: #fff;
    margin: 0 10px;
  }
  .grid-mer {
    display: inline-block;
    .iconfon {
      font-size: 16px;
      color: #fff;
      vertical-align: middle;
    }
  }
}
</style>