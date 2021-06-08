/**
 * course模块接口列表
 */
import base from "./base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const course = {
  // 获取课程列表
  getCourseList() {
    return axios.get(
      `${base.main}/api/common/courseInstance?relations=teacher`
    );
  },
  // post提交
  login(params) {
    return axios.post(
      `${base.main}/api/common/courseInstance?relations=teacher`,
      qs.stringify(params)
    );
  },
};

export default course;
