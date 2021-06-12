/**
 * api接口的统一出口
 */
// 课程模块接口
import course from "./api/course";
import classList from "./api/classList";
import projectList from "./api/project";
import program from "./api/program";
// 其他模块的接口……

// 导出接口
export default {
  course,
  classList,
  projectList,
  program,
};
