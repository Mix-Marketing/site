import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (<OverPack component="section" className="page-wrapper page2">
    <QueueAnim
      type="bottom"
      className="page description container text-center"
      leaveReverse
      key="page"
    >
      <h2 key="title">AntV 可视化解决方案</h2>
      <span key="line" className="separator"></span>
      <QueueAnim type="bottom" className="info-content" key="content">
        <p className="main-info loose" key="1">已全新升级，主要包含 G2、G6、F2 以及一套完整的图表使用和设计规范。</p>
        <p className="main-info loose" key="2">得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑阿里集团内外 2000+ 业务系统，通过了千万级 UV 产品的严苛考验后方敢与君见。</p>
      </QueueAnim>
    </QueueAnim>
  </OverPack>);
}
