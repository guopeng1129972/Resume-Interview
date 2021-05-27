// https://www.cnblogs.com/223zzm/p/11258986.html
var preD = function (e) {
  e.preventDefault();
};
export default {
  data() {
    return {
      popupStatus: false,
    };
  },
  watch: {
    // 监听data中弹层状态
    popupStatus(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        document.addEventListener("touchmove", preD, { passive: false }); // 禁止页面滑动
      } else {
        document.body.style.overflow = ""; // 出现滚动条
        document.removeEventListener("touchmove", preD, { passive: false });
      }
    },
  },
};
