/**
 * project模块接口列表
 */
import base from "./base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例

const projectList = {
  // 获取课程列表
  getProjectList() {
    return axios.get(`${base.main}/api/common/project`);
  },
  getProject(params) {
    return axios.get(`${base.main}/api/common/project/` + params);
  },
};

export default projectList;
