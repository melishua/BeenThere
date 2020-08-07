import React, { useRef } from "react";

import { Container, SideBar, Content } from "./style";
function Hotline() {
  const chineseHotline = [
    {
      institution: "北京心理危机干预热线（24 小时心理干预，服务全国）",
      phone: "800-810-1117（仅限座机拨打），010-82951332（可使用手机拨打）",
    },
    {
      institution: "北大心理危机援助热线（需要有北大ID）",
      phone: "010 - 6194 3712 ",
    },
    {
      institution: "北师大心理咨询中心雪绒花热线",
      phone: "027-58800525（9:00－12:00、14:00－17:00）",
    },
    {
      institution: "北师大心理学院老师创办易普思心理咨询",
      phone: "400-699-2006（24 小时，仅针对一线医护人员）",
    },
    {
      institution: "李家杰珍惜生命大学生心理热线（清华大学）",
      phone: "400-652-5521（16:30－22:30，寒暑假和法定节假日除外）",
    },

    {
      institution: "深圳市心理危机研究中心热线",
      phone: "0755-25629459（8:00－22:30）",
    },
    {
      institution: "四川省心理危机干预中心热线",
      phone: "028-87577510／87528604（后一个号码的等待时间比第一个号码长些）",
    },
    { institution: "天津市心理危机干预热线", phone: "022-88188858" },
    {
      institution: "广州市心理危机干预中心热线",
      phone: "020-81899120（24小时，针对自杀干预）",
    },
    {
      institution: "广州同城社区－自杀干预热线",
      phone: "400-633-5911（每周四、周日晚7:30－10:30）",
    },
    { institution: "湖北省心理咨询协会", phone: "15342296955 (9:00－21:00)" },
    { institution: "武汉市精神卫生中心", phone: "027-85844666 (9:00－21:00)" },
    {
      institution: "合肥市心理危机干预热线",
      phone: "0551-63666903（24小时心理干预，合肥市第四人民医院）",
    },
    {
      institution: "河南省新乡市心理热线",
      phone:
        "0373-7095888（24小时心理干预，服务全国，过年不休假，河南省精神卫生中心）",
    },
    {
      institution: "大庆市心理援助热线：",
      phone:
        "0459-12320（24 小时心理干预，服务全国，过年不休假）(大庆市第三医院)",
    },
    {
      institution: "常德市心理援助热线",
      phone:
        "0736-7870909（24 小时心理干预，常德市精神卫生中心、常德市心理医院）",
    },
    {
      institution: "苏州市心理援助热线",
      phone:
        "0512-12320-4、0512-65791001（24 小时心理干预，服务全国，过年不休，苏州市心理卫生中心、苏州大学）",
    },
    {
      institution: "苏州四园寺观世音心理疏导热线",
      phone: "0512-65833539（每周二、四、六晚19:00－21:00）",
    },
    {
      institution: "徐州市心理援助热线",
      phone: "0516-83447120（24小时心理干预，徐州市东方人民医院）",
    },
    {
      institution: "九江市心理援助热线",
      phone:
        "0792-8338111（24 小时心理干预，可接通、但会占线，九江市第五人民医院）",
    },
    {
      institution: "无锡市红十字心理援助热线",
      phone: "0510-88000999（24 小时心理干预，服务全国，无锡市精神卫生中心）",
    },
    {
      institution: "大连市心理援助热线",
      phone:
        "0411-84689595 （24 小时心理干预，服务全国，大连市第七人民医院、大连市心理医院）",
    },
    {
      institution: "沈阳市心理援助热线",
      phone: "024-23813000（24 小时心理干预，服务全国，沈阳市精神卫生中心）",
    },
    {
      institution: "青海省心理援助热线",
      phone: "0971-8140371 （24 小时心理干预，青海省第三人民医院心理科）",
    },
    {
      institution: "长春市心理援助热线",
      phone: "0431-86985000（24小时）；0431-86985333（8:00-16:00）",
    },
    {
      institution: "昆明市心理危机与干预中心",
      phone: "0871-65011111",
    },
    {
      institution: "昆明市心理援助热线",
      phone: "0871-12320-5（24 小时心理干预，昆明市心理危机研究与干预中心）",
    },
    {
      institution: "厦门市精神卫生中心心理援助热线",
      phone: "0592-5395159（21小时）",
    },
    { institution: "香港地区生命热线", phone: "(+852)23820000" },
    {
      institution: "全国公共卫生公益热线",
      phone: "12320（非24小时热线）",
    },
    {
      institution: "上海生命热线",
      phone: " 400-821-1215/021-63798990（接线时间：10:00-22:00）",
    },
    {
      institution: "上海林紫咨询",
      phone: "021-64376570、021-3441539 (09:00－22:00)",
    },
    {
      institution: "上海市精神卫生中心心理援助热线",
      phone: "021-12320（接通后按5）（8:00－22:00）",
    },
    {
      institution: "延吉生命热线",
      phone: "0433-273-9595（工作时间：8:00-16:00）",
    },
    {
      institution: "青岛市心理危机干预中心自杀干预热线",
      phone: "0532-86669120（8:30－11:00、13:30－16:00）",
    },
    {
      institution: "山东淮坊市心理援助热线",
      phone: "0536-231120（24 小时心理干预，服务全国，淮坊市第三人民医院）",
    },
    {
      institution: "广元市精神卫生中心",
      phone: "0839-3450733 （24 小时心理干预，精神卫生中心",
    },
    {
      institution: "资阳市精神卫生中心",
      phone: "0832-12355（24 小时心理干预，资阳市精神卫生中心）",
    },
    {
      institution: "雅安市精神卫生中心",
      phone:
        "13551585969（24 小时心理干预，总值班电话，咨询需转接，雅安市精神卫生中心）",
    },
    { institution: "南京生命求助热线", phone: "025-86528082（9:00－22:00）" },
    {
      institution: "杭州市心理危机干预热线",
      phone: "0571-85029595（24 小时心理干预，杭州市第七人民医院）",
    },
    { institution: "湖北阳明心理研究院", phone: "02787278238" },
    { institution: "蓝天联盟心理咨询", phone: "027-88569324 (8:00－23:00)" },
    { institution: "台湾自杀防治中心", phone: "0800 788 995" },
  ];
  const countries = [
    { id: "china", text: "中国国内（含港澳台）" },
    { id: "usa", text: "美国" },
    { id: "canada", text: "加拿大" },
    { id: "uk", text: "英国" },
    { id: "australia", text: "澳大利亚" },
    { id: "others", text: "其他国家及地区" },
  ];

  const refs = countries.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
  const handleClick = (e, id) => {
    e.preventDefault();
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Container>
      <SideBar>
        {countries.map((item) => (
          <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
            <a href="#">{item.text}</a>
          </li>
        ))}
      </SideBar>
      <Content>
        <div className="section">
          <h1 className="title">心理支持服务热线（全球）</h1>
          <div className="description">
            我们每个人都有需要帮助的时候，以下是我们从网上整合的一些心理支持服务热线，其中包含了心理危机干预援助热线，望可以在你需要寻求专业的心理援助时为你提供一些热线信息。当您希望寻求专业的帮助或正在协助有需要人士时，请尝试拨打以下心理支持服务热线。同时，如果你正为朋友担心，也请鼓励他/她致电热线以取得相应的专业帮助。{" "}
          </div>
        </div>
        <div className="section">
          <h1 className="title">全球</h1>
          <div className="description">
            Befrienders{" "}
            <a
              href="http://www.befrienders.org"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.befrienders.org
            </a>
          </div>
        </div>
        <div className="section" ref={refs["china"]}>
          <h1 className="title">中国国内及线上资源</h1>
          <div className="description">
            <span className=" description--bold">
              1.北京市卫健委和安定医院合作微信小程序：暖翼·知心
            </span>
            <br />
            一个提供心理测评并根据测评结果引导用户预约医生的平台。注意测评结果不等于诊断报告，还需要在见过医生之后才能得出结论；使用教程：
            <a
              className="link"
              href="https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q
            </a>
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              2.一个全英文的国内心理热线Lifeline
            </span>
            <br />
            为非中文母语者和暂时不方便直接用中文交谈的人群服务（比如说在家里不希望被父母听到内容的时候）
            <br />
            服务时间：北京时间早上10:00至晚上22:00
            <br />
            电话：4008211215
            <br />
            打字版本：微信公众号搜索LifelineConnect
            <br />
            <a
              className="link"
              href="https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mp.weixin.qq.com/s/98vPMdPVcZT2CDXP83kG2Q
            </a>
          </div>
          <br />
          <br />
          <p className="description description--bold">
            3. 各省市心理热线（鸣谢：微博@武心援团队 整理）
          </p>
          {chineseHotline.map((hotline, index) => {
            return (
              <div className="description" key={index}>
                {hotline.institution}：
                <span className="description--bold">{hotline.phone}</span>
              </div>
            );
          })}
          <br /> <br />
          <div className="description description--bold">
            4. 中国大陆地区反性别暴力支持资源
          </div>{" "}
          <br /> <br />
          <div className="description">
            <span className="description--bold">橙雨伞 (法律援助)</span>
            <br />
            <a
              className="link"
              href="https://chengyusan.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://chengyusan.cn/
            </a>
            <br />
            橙雨伞公益是一个关爱女性、赋能女性远离暴力的公益项目，首创媒体界、法律界和NGO的跨界合作模式，主要关注性别暴力、性别平等和女性权益等议题
            <br />{" "}
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              北京千千律师事务所 （法律援助）
            </span>
            <br />
            依托原北大法学院妇女法律研究与服务中心，成立于2009年；
            专职公益律师，专职开展公益法律服务活动，致力于推动包括妇女等社会弱势群体权益状况的改善
            <br />
            微信号: qianqianlawfirm_2009 <br />
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">北京红枫妇女心理咨询中心</span>
            <br />
            <a
              className="link"
              href="http://www.maple.org.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.maple.org.cn/
            </a>
            <br />
            成立于1988年10月，是中国第一家民间妇女组织。红枫中心由妇女问题专家王行娟及一些热心妇女事业的知识女性自愿组织成立，旨在用专业化的心理社会服务，维护妇女儿童的合法权益。
            <br />
            <br />
            机构类型：心理机构
            <br />
            服务群体：受害人（女性）、受害人（男性）、 受害人（性少数）
            <br />
            提供服务：情绪支持、家庭关系指导、制定安全计划、心理咨询、互助小组、资源链接
            <br />
            微信公众号：MapleWomenCenter
            <br />
            微博：红枫中心
            <br />
            电话号码：010-68333388（周一至周五，有语音提示） <br />
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">北京源众性别发展中心</span>
            <br />
            成立于 2011 年 11
            月，是一家专门从事妇女儿童权益保护及推动性别平等的公益机构。
            <br />
            机构类型：社工机构
            <br />
            服务群体：受害人（女性）、家暴目睹儿童、受暴儿童
            <br />
            提供服务：情绪支持、陪伴、家庭关系指导、制定安全计划、心理咨询、法律咨询、医疗救助、关系调解、经济援助、认知教育、资源链接
            <br />
            服务电话：010-89941101
            <br />
            服务电话接听时间：周一至周五，9:00-18:00
            <br />
            机构地址：北京市东城区
            <br />
            微信公众号：bjyuanzhong
            <br />
            微博：源众反暴力热线
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">妇女维权公益服务热线</span>
            <br />
            在全国范围内，用手机或座机拨打“区号+12338”可获得当地妇联提供的及时有效的维权咨询服务
          </div>{" "}
          <br /> <br />
          <div className="description">
            <span className="description--bold">
              反家暴地图 - 中国其它城市 更多公益组织！{" "}
            </span>
            <br />
            <a
              className="link"
              href="https://www.xinli001.com/info/100455141"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.xinli001.com/info/100455141
            </a>
            <br />
          </div>{" "}
          <br /> <br />
          <div className="description">
            <span className="description--bold">心援心 （公益疗愈音频） </span>
            <br />
            <a
              className="link"
              href="https://www.ximalaya.com/zhubo/218145726/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ximalaya.com/zhubo/218145726/
            </a>
            <br />
            “心援心”心理自我疗愈公益项目缘起新冠疫情的爆发，目标是帮助抗疫的医护工作者和广大民众免受创伤后应激障碍（PTSD）困扰，通过使用音频工具进行自我干预、自我关爱，实现自我疗愈。“心援心”由中国心理卫生协会、北京协和医学院公共卫生学院、欧美同学会留美医学会、中国老年保健协会联合发起，并由国际著名的心理疗愈大师和正念导师们定制了专业的疗愈音频，为抗疫英雄和有需要的大众提供心灵疗愈、放松减压、缓解焦虑、睡眠疗愈、情绪干预和管理、创伤后应激障碍疗愈等支持和帮助。（包括美国iRest
            for PTSD,{" "}
            <a
              className="link"
              href="https://www.irest.org/benefits/resolve-trauma"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.irest.org/benefits/resolve-trauma
            </a>
            ）
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              北京同志中心 （性少数支持，彩虹心理咨询）
            </span>
            <br />
            <a
              className="link"
              href="http://www.bjlgbtcenter.org.cn/s--221.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.bjlgbtcenter.org.cn/s--221.html
            </a>{" "}
            <br />
            北京同志中心成立于2008年，是一家在北京地区开展心理咨询、法律咨询以及社区服务，并在全国范围内开展同志去病理化倡导、跨性别反歧视倡导和多元性别教育的公益机构。北京同志中心心理咨询，以专业的服务、人本的态度、友善的环境、安全的空间，为性少数群体（LGBT）及他们的朋友或家人、亲友提供相应的心理辅导与咨询。
            <br />
            <br />
            微信公众号：北同文化
            <br />
            中国 LGBT 社会组织不完全地图：
            <br />
            <a
              className="link"
              href="https://www.zhihu.com/question/20578932/answer/19339714"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.zhihu.com/question/20578932/answer/19339714
            </a>
          </div>
          <br />
          <br />
          <div className="description description--bold">
            5. 一些精神医院的官方网址集合
            <br />
            <a
              className="link"
              href="https://www.douban.com/people/sciencecat/status/2398595392/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.douban.com/people/sciencecat/status/2398595392/
            </a>
          </div>{" "}
          <br /> <br />
          <div className="description">
            <span className=" description--bold">6. 其他</span>
            <br />
            心理学空间：查找咨询师是否是中美精神分析联盟成员
            <a
              className="link"
              href="https://www.psychspace.com/psych/category-671"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.psychspace.com/psych/category-671
            </a>
            <br /> <br />
            中美精神分析联盟成员（CAPA）简介：
            <a
              className="link"
              href="https://www.zhihu.com/question/25380632"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.zhihu.com/question/25380632
            </a>
          </div>{" "}
          <br /> <br />
        </div>
        <div className="section" ref={refs["usa"]}>
          <h1 className="title">美国</h1>
          <div className="description">
            <p className="description--bold">1. IM ALIVE</p>
            <br />
            <a
              className="link"
              href="https://www.imalive.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.imalive.org/
            </a>
            <br />
            一个免费的7/24小时在线自杀干预网站，可以随时进行在线聊天沟通（需要用英文）
          </div>
          <br />
          <br />
          <div className="description">
            <p className="description--bold">2. 741741</p> <br />
            <a
              className="link"
              href="https://www.crisistextline.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.crisistextline.org/
            </a>
            <br />
            一个免费的7/24小时基于短信聊天的心理危机干预服务Crisis Text
            Line，用美国/加拿大/英国手机号向741741发送HOME即可开始聊天
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">3. The Trevor Project</span>
            <br />
            <a
              href="https://www.thetrevorproject.org/"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              https://www.thetrevorproject.org/
            </a>{" "}
            <br />
            一个免费的7/24小时专门针对LGBTQ青年群体的自杀干预网站，同时提供电话、在线聊天以及短信聊天三种方式，详见网站说明。
          </div>{" "}
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              4. 美国全国自杀干预热线（7/24小时免费电话服务）{" "}
            </span>
            <br />
            1-800-273-8255（普通）
            <br />
            1-800-799-4889（听障人士）
            <br />
            1-800-985-5900（灾难危机干预）
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              5. 各州及各郡地方心理热线及服务时间
            </span>
            <br />
            <a
              href="http://www.suicide.org/suicide-hotlines.html"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.suicide.org/suicide-hotlines.html
            </a>
            <br />
            整理较为全面（仅限美国部分，中国部分的信息是错误的）
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              6. 美国国家预防自杀生命热线
            </span>
            <br />
            <a
              href="HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              HTTP://WWW.SUICIDEPREVENTIONLIFELINE.ORG
            </a>
            <br />
            电话：1 800 273 TALK (8255)
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              7. 性暴力幸存者心理干预热线
            </span>
            <br />
            <a
              href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              https://www.rainn.org/about-national-sexual-assault-telephone-hotline
            </a>
          </div>
        </div>
        <div className="section" ref={refs["canada"]}>
          <h1 className="title">加拿大</h1>
          <div className="description">
            <span className="description--bold">
              1.
              good2talk.ca为post-secondary（college或大学）学生提供短信及电话服务。
            </span>
            <br />
            Good2Talk provides confidential support services for{" "}
            <span className="description--bold">post-secondary students</span>
            in Ontario and Nova Scotia. <br />
            In <span className="description--bold"> Ontario</span>: call
            1-866-925-5454 or text GOOD2TALKON to 686868 <br />
            In <span className="description--bold"> Nova Scotia</span>: call
            1-833-292-3698 or text GOOD2TALKNS to 686868
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">2. 加拿大全国范围的热线</span>
            <br />
            <a
              href="https://kidshelpphone.ca/ "
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              https://kidshelpphone.ca/
            </a>
            or text, live chat and phone call.
            为20岁及以下的人提供服务，有短信电话以及线上聊天的形式。
            <br />
            Kids Help Phone is Canada’s only 24/7, national support service. We
            offer professional counselling, information and referrals and
            volunteer-led, text-based support to young people in both English
            and French.
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Bullying</span>
            <br />
            Helpline：1-888-456-2323 针对霸凌
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Bullying</span>
            <br />
            Helpline：1-888-456-2323 针对霸凌
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Child Abuse</span>
            <br />
            Hotline：1-800-387-5437 针对儿童虐待
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Addiction</span>
            <br />
            Helpline：1-866-332-2322 针对物质成瘾
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Mental Health </span>
            <br />
            Helpline：1-877-303-2642 心理健康热线
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              Montreal蒙特利尔
              （中法双语服务，不熟悉法语的来访者可以打全国热线）
            </span>
            <br />
            Suicide Action Montreal (SAM) 1-866-277-3553 (Toll Free) 自杀预防
            <a
              href="http://www.suicideactionmontreal.org"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.suicideactionmontreal.org
            </a>
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              Crisis and Distress lines in Alberta阿尔伯塔省地区:
            </span>
            <br />
            Edmonton埃德蒙顿 and area：780-482-HELP (4357)
            <br />
            Red Deer north：1-800-232-7288
            <br />
            Calgary卡尔加里 and Red Deer south：403-266-HELP (4357)
            <br />
            South Western Alberta: 403-327-7905 or toll- free：1-888-787-2880
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Ottawa area渥太华:</span>
            <br />
            全年无休24/7紧急心理状况热线：613-238-3311
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">Toronto Area多伦多:</span>
            <br />
            Distress centre of Greater Toronto:
            <a
              href="https://www.dcogt.com/408-help-line"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              https://www.dcogt.com/408-help-line
            </a>
            （网站上还提供各式support program和prevention service）
            <br />
            全年无休24/7紧急心理状况热线电话：408-HELP (4357)
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              Multilingual crisis line (available Monday to Friday - 10am to
              10pm)：多伦多热线干预中心提供提供普通话和粤语服务
            </span>
            <br />
            905-459-7777 (Brampton & Mississauga)宾顿和密西沙加 <br />
            1-877-298-5444 (Caledon) 卡利登 <br />
            905-278-4890 (TTY)按2粤语，按3普通话 <br />
            电子邮件：info@spectrahelpline.org
          </div>
          <br />
          <br />
          <div className="description">
            <span className="description--bold">
              Vancouver Area温哥华：Vancouver distress centre温哥华热线中心
            </span>
            <br />
            Anywhere in BC 1-800-SUICIDE: 1-800-784-2433 自杀热线
            <br />
            Mental Health Support Line: 310-6789 所有心理状况支持
            <br />
            Vancouver Coastal Regional Distress Line: 604-872-3311 <br />
            Sunshine Coast/Sea to Sky: 1-866-661-3311
            <br />
            Seniors Distress Line: 604-872-1234 针对老人
            <br />
            Online Chat Service for Youth: www.YouthInBC.com (Noon to 1am)
            未成年线上聊天
            <br />
            Online Chat Service for Adults: www.CrisisCentreChat.ca (Noon to
            1am)成年线上聊天
          </div>
        </div>
        <div className="section" ref={refs["uk"]}>
          <h1 className="title">英国</h1>
          <div className="description">
            <p className="description--bold">撒玛利亚会</p>
            <br />{" "}
            <a
              href="http://www.samaritans.org"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              {" "}
              http://www.samaritans.org
            </a>
            <br />
            电话：<span className="description--bold">08457 90 90 90</span> (UK)
            ，<span className="description--bold">1850 60 90 90</span> (Republic
            of Ireland)
            <br />
            电邮地址：
            <span className="description--bold">jo@samaritans.org</span>
          </div>
        </div>
        <div className="section" ref={refs["australia"]}>
          <h1 className="title">澳大利亚</h1>
          <div className="description">
            <p className="description--bold">澳大利亚生命热线</p> <br />
            <a
              href="http://www.lifeline.org.au"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.lifeline.org.au
            </a>
            <br />
            电话：<span className="description--bold">13 11 14</span>
          </div>
          <br />
          <br />
          <div className="description">
            <p className="description--bold">儿童求助热线</p> <br />
            <a
              className="link"
              href="http://www.kidshelp.com.au"
              rel="noopener noreferrer"
              target="_blank"
            >
              http://www.kidshelp.com.au
            </a>{" "}
            <br />
            电话：<span className="description--bold">1800 55 1800</span>
          </div>
          <br />
          <br />
          <div className="description">
            <p className="description--bold">Headspace</p> <br />
            <a
              href="http://www.eheadspace.org.au"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.eheadspace.org.au
            </a>{" "}
            <br />
            电话： <span className="description--bold">1800 650 890</span>
          </div>
        </div>
        <div className="section" ref={refs["others"]}>
          <h1 className="title">巴西/葡萄牙</h1>
          <div className="description">
            <p className="description--bold">CVV</p>
            <br />{" "}
            <a
              href="http://www.cvv.org.br"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.cvv.org.br
            </a>
            <br />
            电话：<span className="description--bold">188</span>
            <br />
            电邮地址：
            <span className="description--bold">atendimento@cvv.org.br</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">丹麦</h1>
          <div className="description">
            <p className="description--bold">Livslinien</p>
            <br />{" "}
            <a
              href="http://www.livslinien.dk"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.livslinien.dk
            </a>
            <br />
            电话：<span className="description--bold">70 201 201</span>
            <br />
          </div>
          <br />
          <div className="description">
            <p className="description--bold">Børne </p>
            <br />{" "}
            <a
              href="https://bornetelefonen.dk/ring"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              https://bornetelefonen.dk/ring
            </a>
            <br />
            电话：<span className="description--bold">116 111</span> (Child
            Helpline is open daily from 11:00-23:00.)
            <br />
          </div>
        </div>
        <div className="section">
          <h1 className="title">芬兰</h1>
          <div className="description">
            <p className="description--bold">Suomen Mielenterveysseura</p>
            <br />{" "}
            <a
              href="http://www.e-mielenterveys.fi/en/"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              http://www.e-mielenterveys.fi/en/
            </a>
            <br />
            电话：<span className="description--bold">01019 5202</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">法国</h1>
          <div className="description">
            <p className="description--bold">S.O.S Amitié</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.sos-amitie.org"
              className="link"
              target="_blank"
            >
              http://www.sos-amitie.org
            </a>
            <br />
            电话：<span className="description--bold">01 42 96 26 26</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">德国</h1>
          <div className="description">
            <p className="description--bold">Telefonseelsorge</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.telefonseelsorge.de"
              className="link"
              target="_blank"
            >
              http://www.telefonseelsorge.de
            </a>
            <br />
            电话：
            <span className="description--bold">
              0800 111 0 111 / 0800 111 0 222
            </span>
            <br />
            <p className="description--bold">Nummer gegen Kummer</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.nummergegenkummer.de"
              className="link"
              target="_blank"
            >
              https://www.nummergegenkummer.de
            </a>
            <br />
            电话：
            <span className="description--bold">
              0800 111 0 550（成人） / 0800 111 0 333（儿童）
            </span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">希腊</h1>
          <div className="description">
            <p className="description--bold">Klimaka NGO</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.klimaka.org.gr"
              className="link"
              target="_blank"
            >
              http://www.klimaka.org.gr
            </a>
            <br />
            <p className="description--bold">Suicide Help Greece</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.suicide-help.gr"
              className="link"
              target="_blank"
            >
              http://www.suicide-help.gr
            </a>
            <br />
            电话：<span className="description--bold">1018</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">意大利</h1>
          <div className="description">
            <p className="description--bold">Telefono Azzurro</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="www.azzurro.it"
              className="link"
              target="_blank"
            >
              www.azzurro.it
            </a>
            <br />
            电话：<span className="description--bold">19696 </span>
            <br />
            <p className="description--bold">Telefono Amico</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.telefonoamico.it"
              className="link"
              target="_blank"
            >
              http://www.telefonoamico.it
            </a>
            <br />
            电话：<span className="description--bold">199 284 284</span>
          </div>
        </div>{" "}
        <div className="section">
          <h1 className="title">新西兰</h1>
          <div className="description">
            <p className="description--bold">National Depression Initiative</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.depression.org.nz"
              className="link"
              target="_blank"
            >
              http://www.depression.org.nz
            </a>
            <br />
            <p className="description--bold">The Lowdown</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href=" http://www.thelowdown.co.nz"
              className="link"
              target="_blank"
            >
              http://www.thelowdown.co.nz
            </a>
            <br />
            电话：<span className="description--bold">0800 111 757</span>
            <br />
            简讯：<span className="description--bold">5626 </span>
            <br />
            电邮地址：
            <span className="description--bold">team@thelowdown.co.nz</span>
            <br />
            <p className="description--bold">Youthline </p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href=" http://www.youthline.co.nz"
              className="link"
              target="_blank"
            >
              http://www.youthline.co.nz
            </a>
            <br />
            电话：<span className="description--bold">0800 376633</span>
            <br />
            简讯：<span className="description--bold">234 </span>
            <br />
            电邮地址：
            <span className="description--bold">
              talk@youthline.co.nz / parenttalk@youthline.co.nz
            </span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">挪威</h1>
          <div className="description">
            <p className="description--bold">Kirkens SOS</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.kirkens-sos.no"
              className="link"
              target="_blank"
            >
              http://www.kirkens-sos.no
            </a>
            <br />
            电话：<span className="description--bold">815 33 300</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">波兰</h1>
          <div className="description">
            <p className="description--bold">Fundacja Dzieci Niczyje</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.116111.pl/napisz"
              className="link"
              target="_blank"
            >
              http://www.116111.pl/napisz
            </a>
            <br />
            电话：<span className="description--bold">116 111</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">新加坡</h1>
          <div className="description">
            <p className="description--bold">Samaritans of Singapore (SOS) </p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href=" http://samaritans.org.sg"
              className="link"
              target="_blank"
            >
              http://samaritans.org.sg
            </a>
            <br />
            电话：<span className="description--bold">1800 221 4444</span>
            <br />
            电邮地址：
            <span className="description--bold">pat@samaritans.org.sg</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">南非</h1>
          <div className="description">
            <p className="description--bold">
              The South African Depression and Anxiety Group (SADAG)
            </p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href=" http://www.sadag.org "
              className="link"
              target="_blank"
            >
              http://www.sadag.org
            </a>
            <br />
            电话：<span className="description--bold">0800 567 567</span>
            <br />
            简讯：
            <span className="description--bold">31393</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">韩国</h1>
          <div className="description">
            <p className="description--bold">
              중앙자살예방센터 （韩国自杀干预中心）
            </p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="www.spckorea.or.kr"
              className="link"
              target="_blank"
            >
              www.spckorea.or.kr
            </a>
            <br />
            电话：<span className="description--bold">+82 2-2203-0053</span>
            <br />
            电邮地址：
            <span className="description--bold">spc@spckorea.or.kr</span>
            <br />
            <p className="description--bold">HopeClick </p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href=" http://www.hopeclick.or.kr"
              className="link"
              target="_blank"
            >
              http://www.hopeclick.or.kr
            </a>
            <br />
            <p className="description--bold">
              보건복지부 보건복지콜센터（卫生与福利热线中心）
            </p>
            <br /> 电话：<span className="description--bold">129</span> （24
            시간 위기상담 / 24 小时服务热线）
            <br />
            <p className="description--bold">
              정신건강증진센터 정신건강위기상담전화 （精神健康危机处理谘询中心）
            </p>
            <br /> 电话：<span className="description--bold">1577-0199</span>{" "}
            （24 시간 위기상담 / 24 小时服务热线）
          </div>
        </div>
        <div className="section">
          <h1 className="title">西班牙</h1>
          <div className="description">
            <p className="description--bold">Teléfono de la Esperanza</p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://telefonodelaesperanza.org"
              className="link"
              target="_blank"
            >
              http://telefonodelaesperanza.org
            </a>
            <br />
            电话：<span className="description--bold">902500002</span>
          </div>
        </div>
        <div className="section">
          <h1 className="title">瑞士</h1>
          <div className="description">
            <p className="description--bold">
              {" "}
              La Main Tendue – Die Dargebotene Hand – Telefono Amico
            </p>
            <br />{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.143.ch"
              className="link"
              target="_blank"
            >
              http://www.143.ch
            </a>
            <br />
            电话：<span className="description--bold">143</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}
export default React.memo(Hotline);
