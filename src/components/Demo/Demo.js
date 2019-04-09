import React, { PureComponent } from "react";
import { Result, Icon, WhiteSpace, NavBar } from "antd-mobile";
import styles from "./Demo.module.css";

const myImg = src => (
  <img src={src} className={`${styles.spe} am-icon am-icon-md`} alt="" />
);

export default class Demo extends PureComponent {
  render() {
    return (
      <div className={styles.resultExample}>
        <NavBar
          mode="dark"
          icon={<Icon type="left" onClick={()=>{this.props.history.push('home')}}/>}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          详情
        </NavBar>
        <div className={styles.subTitle}>支付成功</div>
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
          )}
          title="支付成功"
          message={
            <div>
              998.00元 <del>1098元</del>
            </div>
          }
        />
        <WhiteSpace />
        <div className={styles.subTitle}>验证成功</div>
        <Result
          img={
            <Icon
              type="check-circle"
              className={styles.spe}
              style={{ fill: "#1F90E6" }}
            />
          }
          title="验证成功"
          message="所提交内容已成功完成验证"
        />
        <WhiteSpace />
        <div className={styles.subTitle}>支付失败</div>
        <Result
          img={
            <Icon
              type="cross-circle-o"
              className={styles.spe}
              style={{ fill: "#F13642" }}
            />
          }
          title="支付失败"
          message="所选银行卡余额不足"
        />
        <WhiteSpace />
        <div className={styles.subTitle}>等待处理</div>
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"
          )}
          title="等待处理"
          message="已提交申请，等待银行处理"
        />
        <WhiteSpace />
        <div className={styles.subTitle}>操作失败</div>
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
          )}
          title="无法完成操作"
          message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
        />
      </div>
    );
  }
}
