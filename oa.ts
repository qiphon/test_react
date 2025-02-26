import moment from "moment";

const date = moment().format("YYYY-MM-DD");

const log = (info: string) => {
  console.log("--------------");
  console.log(info);
  console.log("--------------");
};

log(date);

const splitInfo = (info: string) => {
  const infoArr = info.split(" ");
  infoArr.forEach((item) => {
    const trimStr = item.trim();
    if (trimStr && !trimStr.startsWith("录入日期：今天")) {
      log(trimStr.split("：")?.[1] ?? trimStr);
    }
  });
};

splitInfo(`

录入系统 ：用友协同云 
录入项目：软件更新 
录入日期：今天 
公司名称：上海江达科技发展有限公司有限责任公司 
公司地址：上海市普陀区真光路1473弄3号4层4028室 
 
 
    `);
