<!--  -->
<template>
  <div>
	  
    <el-table :data="tableData" border style="width: 100%" v-if="tableData.length>0">
      <el-table-column label="序号" width="70" type="index" align="center"></el-table-column>
      <el-table-column label="创建时间" width="250" prop="date" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date| dateF('YYYY-MM-DD HH:mm:ss') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="收支描述" width="180" prop="describe" align="center"></el-table-column>
      <el-table-column label="收入" width="170" prop="income" align="center">
        <template slot-scope="scope">
          <span style="color:#00d053" v-text="scope.row.income"></span>
        </template>
      </el-table-column>
      <el-table-column label="支出" width="170" prop="expend" align="center">
        <template slot-scope="scope">
          <span style="color:#f56767" v-text="scope.row.expend"></span>
        </template>
      </el-table-column>
      <el-table-column label="现金账户" width="170" prop="cash" align="center">
        <template slot-scope="scope">
          <span style="color:pink" v-text="scope.row.cash"></span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="220" prop="remark" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    //   获取表格数据
    getProfile() {
      this.$http
        .get("/api/profiles")
        .then(res => {
          console.info(res.data, 999);
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      console.info(index, row);
    },
    handleDelete(index, row) {}
  },
  created() {
    this.getProfile();
  }
};
</script>
<style lang='less' scoped>
</style>