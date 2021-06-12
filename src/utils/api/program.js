/**
 * class模块接口列表
 */
import base from "./base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例

const program = {
  // 获取课程列表
  getMembers() {
    return axios.get(`${base.main}/api/common/class?relations=student,teacher`);
  },
  getProjectList() {
    return axios.get(`${base.main}/api/common/project`);
  },
  getProject(params) {
    return axios.get(`${base.main}/api/common/project/` + params);
  },
};

export default program;
