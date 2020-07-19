import React, { useState, useRef } from "react";
import style from "../../../global-style";
import styled from "styled-components";

const Section = styled.div`
  text-align: center;
  display: ${(props) => (props.showStatus ? "block" : "none")};
  padding-top: 60px;
  padding-bottom: 130px;
  .bar {
    border: 1px solid #e5e5e5;
    margin: 15px 0;
  }
  .title {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 20px;
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /*margin-right: 2rem; */
    margin-bottom: 20px;
    color: ${style["font-color-light-1"]};
    &--image {
      width: 50vw;
    }
    &--title {
      margin: 3rem auto;
      width: 100%;
      font-size: ${style["font-size-l"]};

      /* margin: 0 50%; */
    }
    &--content {
      /* margin: 5rem; */
      font-size: ${style["font-size-m"]};
      line-height: ${style["line-height-l"]};
      height: ${(props) => (props.expand ? "" : "250px")};
      overflow: ${(props) => (props.expand ? "none" : "hidden")};
    }
    &--expand {
      font-size: ${style["font-size-s"]};
      display: flex;
      align-items: center;
      margin: 10px auto;
      cursor: pointer;
      color: ${style["highlight-color"]};
    }
  }
  .articles {
    display: grid;
    grid-template-columns: repeat(2, 50%);

    grid-column-gap: 10px;
    width: 100%;
    height: ${(props) => (props.more ? "" : "11rem")};
    overflow: ${(props) => (props.more ? "none" : "hidden")};
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(10px) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
`;
const ArticleItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-content: center;
  width: 100%;
  height: 11rem;
  padding: 1rem;
  border: 2px solid
    ${(props) => (props.active ? style["highlight-color"] : "transparent")};
  cursor: pointer;
  .shape {
    flex: 0 0 25%;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
  .image {
    height: 100%;
    /* transform: scale(0.6); */
    transition: all 0.2s;
  }
  .text {
    flex: 1;
    text-align: left;
    padding: 5px;
    overflow: hidden;
  }
  .title {
    font-size: ${style["font-size-m"]};
    line-height: ${style["line-height-l"]};
  }
  .content {
    font-size: ${style["font-size-s"]};
    line-height: ${style["line-height-l"]};
  }
`;
const BuddyVideo = (props, ref) => {
  const expandIcon = (
    <svg
      t="1594653945712"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1988"
      width="28"
      height="28"
    >
      <path
        d="M841.7526317 251.66897446l-338.43033323 338.43033322L164.89196525 251.66897446a83.9133679 83.9133679 0 0 0-121.48781124 0 83.9133679 83.9133679 0 0 0 0 121.48781125l399.17423984 399.17423983a83.9133679 83.9133679 0 0 0 121.48781126 0l399.17423987-399.17423983A85.90923843 85.90923843 0 1 0 841.7526317 251.66897446z"
        p-id="1989"
        fill="#FFC368"
      ></path>
    </svg>
  );
  const closeIcon = (
    <svg
      t="1594654569715"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2777"
      width="32"
      height="32"
    >
      <path
        d="M240.2922041 726.50615507l278.85800163-278.85800161L798.00820735 726.50615507a69.14248454 69.14248454 0 0 0 100.10287181 0 69.14248454 69.14248454 0 0 0 0-100.10287181l-328.90943835-328.90943833a69.14248454 69.14248454 0 0 0-100.10287182 0l-328.90943838 328.90943833A70.78703118 70.78703118 0 1 0 240.2922041 726.50615507z"
        p-id="2778"
        fill="#FFC368"
      ></path>
    </svg>
  );
  const articles = [
    {
      userid: "1",
      articleId: 1,
      title: "Ennis的自我介绍",
      content: [
        "我是Ennis，本科毕业于加拿大约克大学心理学专业，现在生活在多伦多。平时喜欢冥想，也喜欢很多户外活动，我每年冬天都会去滑雪，可能也是因为加拿大这边冬天实在太漫长了～",
        "关于我的小趣事:",
        "• 最喜欢的动漫角色是火影忍者里的漩涡鸣人",
        "• 最喜欢的影星是华金•菲尼克斯和西斯莱杰",
        "• 喜欢涉猎各类领域的书籍",
        "大三的时候，我和朋友一起创立了一家服务海外留学生的互联网教育公司。在加拿大留学的小伙伴应该能感受到这边的互联网应用领域和国内比起来真的是天差地别，最初创业的时候真的很像在一片蛮荒的土地上耕种一样，所有的事情都要亲力亲为，回忆起来那段日子，有酸涩，有疲惫，但更多的还是解决了一个个难题后的成就感，当然还有不断坚持做好一件事情的热情！后来发展稳定了一些之后也陆续有更有经验的人加入了我们的团队，在和不同的人接触之后，我慢慢的感受到自身的很多局限性，也越来越觉得这段创业工作的经历在给我不断成长的机会。",
        "我觉得做教育和心理互助有很多相似的地方，首先都是一个“传递和影响”的过程，教育更侧重于知识的传递，而心理互助更重视“积极能量“的传递。而这些积极能量呢，也可以和知识一样，通过积累，沉淀在自己的身上，在和别人的沟通中被自然的释放出来从而影响到他人。我觉得我很多学习和生活的经历，还有坚持每天对自身的探索和管理，给到了我很多积累沉淀这样”积极能量“的机会。",
        "另外生活中的我其实是一个很敏感的人，曾经我一直不能接受自己这样的属性，时常感受到太在意很多情绪会让自己生活的很辛苦，一直试图改变这样的特点，可我发现当我越想要否认自己是敏感的人的时候，我会变得愈加焦虑，而“改变”似乎也变得更加困难。于是后来，我慢慢学着跟自己和解，去承认并尝试接纳自己敏感的属性。渐渐的，当我看待它的角度发生变化时，我注意到“敏感”其实一直在帮助我更容易察觉到情绪和想法，即使经常是自己的一些情绪和思维模式，但是对自我的了解却帮助我更加了解外在的世界。心理学上说的共情或者说同理心，表面上是通过感受对方的情绪/心理，达到一种同频的状态，而这个过程也非常需要对自身情绪的一个敏感的觉察。当我接纳自己之后，我发现一个敏感的人的生活也可以不辛苦，甚至有时候会觉得自己很幸运！",
        "那在19年3月我加入BeenThere以来呢，我总共做过75次咨询。在我看来，其实每一位来访者都可以最终发现和想办法解决自己的问题。 而我在这个过程中更多时候扮演了一个镜子的角色，去帮助你们直观的映照出自己的经历，并且更深入的认识到自己很多情绪和想法的来源。同时我也希望我们在交流时能一起创造出一些积极能量，帮助你更勇于接受与面对自己的脆弱，也在你未来脆弱的时候持续的带给你力量！",
      ],
      image: "11.jpg",
      active: true,
    },
    {
      userid: "1",
      articleId: 2,
      title: "关于自我改变_第一期",
      content: [
        "今天想给大家分享一个关于“了解自我”的小故事",
        "我相信大家一定都有过这些经历，比如心里很想做改变，会经常给自己定各种各样的计划，但到最后这些计划推积如山，最终也只停留在了计划；又或是当我们心情沉郁，萎靡不振，身边的朋友家人总会劝我们想开一点，然后给我们讲各种各样的道理，我们心里却总在想，“哎，道理我都懂，可是我现在就是做不到”。。。",
        "其实我们的行为不仅受理性的一面影响，也一直在被感性的一面驱使着。这也是为什么有时候我们明明很讨厌自己某个行为，却又怎么也改不了。当现实不断打击我们理性的自我的时候，我们会feel shame，会不断的感到内疚和自责，这些消极的情绪进而又影响我们做出改变。",
        "而理解感性和理性之间的关系，其实就是我们真的开始做出改变的第一步。",
        "心理学家乔纳森海特用大象与骑象人来描述这两者之间的关系。人的情感面就像一头大象，而理智面就像一个骑象人。骑象人骑在大象背上，手里握着缰绳，好像是他在指挥大象，但事实上他的力量微不足道。一旦和大象发生冲突，他想往左，而大象想往右，那他通常是拗不过大象的。",
        "对于改变而言，理智的骑象人在提供方向，而感性的大象其实在提供动力。",
        "我们大多数人都有过安慰伤心难过的朋友的经历，我们会觉得自己听懂了他，觉得自己已经站在他的角度考虑，帮他分析种种原由，但是还是会觉得他不是那么走心，没有把我们的劝说听到心里去。其实，很多时候我们只是听到了他心里 理性的骑象人说了些什么，却没有听到他心中大象的低语，而听到并且听懂那些无声的语言，才能真正走进他的内心，帮助他改变。",
        "而对于我们自身来说，“了解自我”也应该是去慢慢聆听心中的大象，了解它的脾气和秉性，让它为我们行为的改变提供源源不断的动力。",
      ],
      image: "12.jpg",
      active: false,
    },
    {
      userid: "1",
      articleId: 3,
      title: "关于自我改变_第二期",
      content: [
        "今天我们继续讲一讲关于改变的故事。",
        "在上篇中，我们知道了改变的第一步是“了解自我”，了解心中感性大象的脾气和秉性，让它为我们行为的改变提供动力。",
        "很多朋友在尝试改变的时候，心里的骑象人总会有很多理性的期待，“期待每天坚持健身，未来拥有一个完美的身材”“期待自己每天早睡一点，白天可以拥有更充足的时间和精力”“期待自己做事不再拖延，变得更高效，更有成就感”",
        "然而来自于骑象人的这些期待都是想象中的美好，我们并没有深刻体验过这种美好。换句话说，我们心中感性的大象并没有经历过这种好处。相反，它体验过“零食饮料带来的味觉刺激；体验过深夜和伙伴一起开黑打游戏的快乐”也体验过拖延带来的压力疏解和心理安慰“，这些都变成了我们亲身经历过的好处。",
        "不像期待是抽象的，经验是具体的，能真实感受到的；",
        "期待发生在未来，而经验发生在过去或者现在；",
        "当这两者发生冲突时，虽然骑象人想要追寻那个“期待的美好”，而大象却不由自主地转向了那个“经验的好处”。一旦我们的某个行为获得了这种好处，它就会通过不断的强化被保留到我们的生活里，哪怕我们没有意识到，它仍然会影响我们的行为。",
        "心理学家斯金纳把这种“强化”分为了“正强化与负强化”。正强化是当我们通过增加我们想要的结果，来不断巩固我们的行为，比如为了获得奖金会让我们努力工作；而负强化是通过减少我们不想要的结果来巩固我们的行为，比如为了防止被扣工资，我们也会努力工作。",
        "所以，我们应该去理解大象为什么总是不由自主的转向“经验的好处”因为它会通过强化，塑造进而巩固我们的行为，所以行为的改变才会那么难。说到这里，我们就讲到了改变的本质：其实就是给我们心中的大象创造新经验，用新经验来代替旧经验的过程。",
        "对于改变而言，与其让我们的大脑充斥着骑象人满满的期待，不如让我们感性的大象去迈出一小步，获得新的反馈，新的强化，并亲身感受到这“一小步”带来的好处。",
        "文章参考：陈海贤《自我发展心理学》",
      ],
      image: "13.jpg",
      active: false,
    },
    {
      userid: "2",
      articleId: 1,
      title: "你好，我叫程卓",
      content: [
        "我从小在新疆乌鲁木齐长大，直到大学前都是一个生活以刷题为主旋律的小朋友。在2009年，我以新疆理科第一名的成绩考入了清华大学，然后立刻体验了一回边远地区同学被学术碾压的巨大落差（泪目）。",
        "之后不断寻找方向，寻找定位。学习成绩中不溜，没挤进团委学生会的“大舞台”，作为商科学生居然大三过了一半才开始第一份实习…… 终于，在大三结束之前找到了自己的“点”，义无反顾地扎进去做到极致，最终在毕业时获得了最想去的公司的offer。",
        "从高中“实验班”、大学“状元班”、麦肯锡“总裁班”，到后来的麻省理工和哈佛大学“很有面子班”，我短暂的人生经历了无数“天纵英才”型的选手，而他们则成功地把我锻炼成了一枚“小强”型选手。我很早就看到了自己在数理化上面的极限，所以果断转了社会学科；我的第一份实习是做走街串巷的推销员，那就当锻炼脸皮嘴皮；哈佛申请了三年四遍，创业做散了四拨团队……这些才是人生常态，要像一个“小强”一样去面对。",
        "我不认为自己天分卓群，但是作为普通人，也有自己的生存本领。比如说，我从来不妄想在许多方面都比别人强；相反，我会找准最适合自己的一两件事，做到极致。我从来都不认为自己的任何一个观点是完全正确的，只能不断小心地增加正确的概率，随时准备被纠正甚至推翻。我至今没有完全克服打游戏上瘾的问题，所以我的办法就是，尽量不去碰它……",
        " 如果你也找不到奋斗的方向，如果你也挣扎在强手如林的地方，如果你也对自己的明天怀有期待，那我的存在就是一个好消息。作为一个普通人，我们一样可以扬长避短，加上一点点笑对失败的“小强”精神，最终得到那些我们羡慕的东西。I have been there, and we can make it.  ",
        "期待成为你的Buddy，让我陪你笑对挫折，让我们一起寻找方向，让我们成为更好的人。",
      ],
      image: "21.png",
      active: true,
    },
    {
      userid: "2",
      articleId: 2,
      title: "集齐名校名企光环后，他想为所有人建一所心灵驿站",
      content: [
        "“状元”的大学生活",
        "01. 提一个大家都很想问的问题，怎样能学成高考状元呢？",
        "程卓: 回答这个问题之前，可能要先思考一下，我们是不是一定要当状元。我觉得更重要的是想清楚为什么要学习。以前在一土学校做过一段时间，一个教学理念是说要帮助孩子去探索真正喜欢和追求的，告诉他这些考试是目前实现理想的必经之道，那孩子自己就会很有动力去学习。这可能是我们要多去思考的一个问题。",
        "具体怎么提高分数呢，其实我们国内教育已经有了大量经验，我也只能说对我个人启发比较大的几点。第一点就是重复训练，很多时候一个知识点觉得理解就掌握了，但其实大量的重复训练还是挺有必要的，科比会投篮，但是为什么还要每天练投篮？",
        "另一点还是想清楚自己要什么，同时明确是否考到一个好学校，就是实现梦想的一个最好办法。如果是的话，就有动力去学习。",
        "02. 到了清华这个学霸云集的平台，最开始适应得如何？",
        "程卓：我听过很多“有落差”之类的故事，但说实话我自己倒是没体验过。",
        "这一点非常感谢当时清华经管学院的院长，他在开学第一课上给我们讲了非常重要的一点，他说GPA不是那么重要，更重要的是长成一个有全面素质的人。他提出了几个具体要求——好奇心、想象力和批判性思维的能力，我当时听起来觉得“只道是寻常”，现在回头想真的很重要，这几点也是对我影响巨大的。",
        "另外是清华经管学院的教学理念，就是宽口径通识教育。我们的院长有在哈佛教书的经历，他就把 Harvard College 的 Liberal Arts Education 理念来带回来。我们在前两年会学习大量通识教育的课程，比如我们专业是经济与金融，但还会学习中国文明、西方文明、心理学、生物学等等，物理甚至会学到量子力学。这样的方式告诉我们，其实学的技巧是次要的。我的成绩一直是中等偏上，但是这样的教育模式让不同类型的人才都能找到自己的归宿，所以我没有特别焦虑，最后也找到了适合我的职业出路。",
        "03. 毕业后你去了麦肯锡，在大学中你怎样探索并发现自己的职业兴趣？",

        "程卓：我经常跟别人开玩笑说，学了四年经济与金融，最后发现自己既不喜欢经济，也不喜欢金融，然后就去做了管理。",

        "其实我进入职业的领域也算比较晚。我的第一份实习在大三寒假，对于一个商科学生已经很晚了，但是真正做实习后，我也开始去不同的领域探索。",
        "第一份实习是在墨尔本当推销员，走街串巷，非常有趣，也让我收获了很多的 learning。然后我还做过审计，也做过其他的东西。在那阵正好有一个刚刚兴起的事物，商业案例大赛，我就跟同学参加了一次，发现非常喜欢，你能够和一群非常聪明的人，为了一个共同目标密切地合作，去为企业解决一个非常重要的战略问题。这个过程我非常享受，当时前前后后参加了9个国内外的比赛，后来也成为清华案例队的队长。这段经历让我确定自己很喜欢做咨询，后来做这个选择我也不后悔。",
        "在麦肯锡疯狂成长",
        "04. 进了麦府后，与你的预期一样吗？如果要在预期和收获之间画一个符号会是什么？",
        "程卓：收获远超我的预期。在一次内部分享会上，有位领导也提到，几乎每一个麦肯锡的人都会经历一个过程，刚来时很自信，然后自信被逐渐打碎瓦解，再慢慢地靠着 resilience（韧性）上升，达到一个更高的高度。",
        "刚入职培训完，大家分享感想时，我说我准备好了，等不及要上项目大干一场。这是我当时的原话。但是第一个项目就被狠狠地“打了脸”，太艰难了。后来经历了一段漫长的挣扎时期，直到第二年，我突然在一个项目上开窍了，就越做越顺手，找到了节奏。我觉得每个人都会体验这样一个过程，预期是按部就班地做到一个程度，然后你发现自己做不到，于是被逼着努力，最终发现自己居然做到了更高的一个程度。",
        "在这个过程中，我觉得 resilience 很重要。麦肯锡看中的也是学习能力强，要不怕困难，不容易被打倒。其实大家都是不断地把自己推到极限，再不断地达到更高的高度，每次挑战都是一个 new learning zone，把你抛出到舒适区之外，你要去面对挑战，收获世界给你的反馈。",
        "05. 在麦肯锡工作很忙，你觉得如何能在高强度的工作里面，平衡工作、生活和自我提升？",
        "程卓: 首先说工作和自我提升，我觉得有一个点，工作的过程就是成长的过程。麦肯锡有一个叫DGL (Development Group Leader) 的领导负责评估你的表现，为个人发展提供建议指导。记得我在第三年的时候，有一次想申请externship（麦肯锡的项目，可以申请去另外的企业做一段时间），我的 DGL就反对，当时我很不理解，其他很多人都做了externship，而且这个企业也很好。他就说，“我的建议是基于你的成长，而不是什么东西放在简历上会更好。你现在需要做更多的咨询项目，磨练自己的技能。”麦肯锡背后有一个很强的观念，就是每个人为自己的成长去努力工作，这是我们成长的方式。",
        "再说生活和工作，李一诺有次在清华分享时说过一个概念，叫 work-life integration。以前大家会经常说 work-life balance，但这是把工作和生活对立起来，而这两方面其实可以非常有机地融合起来。比方说为了和家人共度时光，就立一个规矩，每天晚上一定要和家人一起吃饭，吃完饭了我可以再继续工作，这些很小的方面能够让你的工作和生活不互相抵触地无缝融合在一起。而且如果你真的热爱一份工作，或者责任足够大，是很难将工作与生活完全分开的。",
        "06. 你怎么看咨询行业接下来的发展，会遇到什么机遇或转折吗？",
        "程卓：这个问题特别好，也是我这学期一门课的小组项目，寻找咨询公司未来会面对的挑战和机会，先分享一些初步的想法。有人说咨询是个很年轻的行业，但我觉得它挺古老的，至少在诸葛亮那个时代就有了。咨询的核心是解决问题，而无论外界怎么变，解决问题的能力永远是稀缺的，所以我觉得咨询公司会一直存在，但可能解决问题的方式会随着时代不同、科技理念的进化而变化。",
        "具体来说，我们小组正在研究的一个话题是未来的大数据和 advanced analytics 会如何影响咨询公司。它们究竟是会替换咨询行业，还是会为咨询行业赋能；而从咨询行业的角度来说，我们如何能够通过有效的设计和战略安排来让它们为我们赋能。",
        "一土学校的初创经历",
        "07. 麦肯锡的时候，为什么会选择请假无薪去做一土学校的项目？",
        "程卓: 也是缘分，当时自己希望做些不一样的事，而麦肯锡鼓励我们全面发展的理念对我也有些潜移默化的影响。我觉得做一土学校的经历，也是一个从社会创业的角度锻炼自己领导力的方式。",
        "同时我觉得这是个有意义的事儿，大家都知道教育领域还有很多事情可以去做；一诺（李一诺女士）也是一个我非常佩服的 leader，希望能够在跟她的合作中学习，所以这些原因综合在一起，我做了这样的选择。",
        "08.  你在一土学校做了哪些方面的工作？",
        "程卓: 各种事情，一土学校最开始的状态跟多数创业公司一样，就是 everybody covers everything。我自己投入比较多的是课程设计和教研的项目管理，后来参与了薪酬体系和教师激励体系的设计，还有未来校园的体系扩张，帮助更多新校区纳入一土的经验等等。",
        "09. 当时没有教育方面的学科背景，是怎样快速上手这些工作的？",
        "程卓: 一方面是咨询师快速学习的看家本领哈哈，另一方面，我们和老师也是互补和互相学习的状态。老师们对于如何教学生是非常有能力的，在方面我不会过多干涉，而我更多从项目管理的角度，比如大家如何在一个设定的时间表里完成重要的事项等等。",
        "这是一个互相学习的过程，比如每次校长跟我开完会都觉得太高效了，以后都要这样开会；我也从校长那儿学到很多，比如以前我希望把东西都制度化，规定老师每个月要去旁听多少节课，校长就不同意，觉得这样的指标可能会打击老师的积极性。最初我不太理解，后来发现在没有指标的时候老师们也都非常积极地去旁听、做教研。",
        "这件事令我印象特别深刻，自己以前给很多大企业做项目管理，都很强调制度化，东西要落到纸面上。但在这里我看到了另一种管理方式，是把“气儿”都聚到一起，大家就能一起往前走，甚至走得更快。而后来我也看到很多非常厉害的领导者，都是靠这种共同的value来管理。",
        "10. 一土学校在你的履历中算是非常不同的一段经历，你觉得最大的收获是什么？",
        "程卓: 首先从创业技巧这方面，它让我第一次进入创业领域，以前我觉得创业离我很遥远，但是在做一土的过程中我发现原来创业这么近。我现在读 MBA，关注的也是创业创新，一土为我打开了一扇门。",
        "再从更高的一个层面来说，我觉得一土给我的认知植入了“社会创业”这个概念。它让我意识到一种东西叫社会企业，有一种创业的方式是去追求社会影响力和商业影响力的最好平衡。",
        "与哈佛相爱相杀，在 MIT 学创业",
        "11. 你四年申请了三次哈佛，如何能做到这么执着？每次申请时的心态有变化吗？",
        "程卓: 一方面也是名校情结，希望能够去到全球最好的平台学习，无论是哈佛，MIT，还是其他学校，我觉得都是非常好的平台。另一方面也看缘分，你要相信自己是个非常优秀的人，最后就看花落谁家了。",
        "另外可能是我的成功观，我觉得不需要次次都成功，只要成功一两次就可以了。以前读书的时候，觉得做考卷就必须把所有题都做对，拿满分，但其实人生不是这样。人生不是要把每一道选择题都选对，也不是要把每一个事情都做成功，它更像打猎，看见第一个猎物你开了一枪，没打中，没关系，继续瞄着等第二、第三个猎物，只要打中一个，接下来一个星期就有东西吃了。我们只要抓住机会努力成功，成了一两次，就能上到一个完全不同的层次，而这之前的多次失败，都在不断地帮我们积累经验。",
        "12. 终于来到哈佛后，你觉得与自己之前所想的相同吗？",
        "程卓: 我觉得还是超出我的预期。或者说一开始对于在哈佛的学习，就没有很多的预设，我觉得在这里学习也有点像 Liberal Arts Education，加深我自己对社会的理解。而我在这里上了这么多课后，觉得自己对于世界的理解真的比以往更加深刻、坚定。另外也学到了很多实用的技巧，比方说我们真的是用了一学期时间，扎扎实实上了谈判课，这些技巧在我后来协商谈判时确实都用上了。",
        "13. 给学弟学妹推荐一下这门课？",
        "程卓: 这门课叫 Negotiation across Differences，分为上下两部分，上半程会教谈判的基础，了解各种不同的背景、立场和情境中的谈判。下半程更有意思，课名中的 difference 是指 power 的不同，谈判中各方的 power 不一样，在练习时你会被放在更弱或者更强的一方，根据自己的情况尽可能地去争取利益。",
        "14. 分享一个你在哈佛和MIT这边印象最深刻的learning moment？",
        "程卓: 非常多，一定要说一个的话应该是创业吧。我觉得 MIT 有全美最棒的创业教育系统之一，无论是从它的创业课程体系，还是大大小小的孵化器、基金、比赛，甚至身边的同学和整体的创业氛围。还有波士顿在VC方面的集中程度，也是美国非常顶尖的，所有的这些都给你创造了一个非常好的创业生态环境。而且即便你不想毕业就马上创业，在人生中的某个阶段一定也会想去创造一些东西，到那时候学到的东西就会派上用场。",
        "15. 你会推荐同学们在学校期间创业吗？",
        "程卓: 我觉得首先取决于每个人自己的目标。我也有很多同学对创业没什么感觉，或者风险偏好较低，这些都取决于个人。但如果真的想尝试创业这个事，在学校里面做起来是相对风险比较小的。这里有学校的资源、老师的指导，不必自己面对很大的经济压力，而创业这件事没有人指导的话也容易交很多学费，在学校算是低成本试错。",
        "创业项目 BeenThere",
        "16. 聊一聊你的创业项目BeenThere，最开始这个想法是怎么来的？",
        "程卓: 这个想法可能是过往经历中很多个点交织在一起。最早是我自己做 coach的经历，在麦肯锡的时候有一个培训内容就是 coaching，通过助人自助的方式，让你探索自我，达到更好的目标，当时学的时候我就非常喜欢，也觉得自己比较擅长。",
        "第二个点是我在 MIT 参加了一个 Hackathon，类似创业大赛，我们团队当时做了一个智能笔记本，希望解决留守儿童孤独问题，最后进了决赛。比赛结束后大家都很激动，想继续推进，于是就有了最开始的 BeenThere。当然那之后我们的想法变了几次，团队成员也换过几次，但想做心理健康领域这点一直没有变，也坚持到现在。",
        "第三个点是身边同学的经历。很多同学知道我在做心理健康后，会跟我谈起自己面对的心理挑战。平时大家相处时是把自己好的一面展现出来，所以我们可能会低估周围人面对的心理问题。后来我们也查了很多数据，无论是在中国还是美国，基本都有六分之一的成年人有心理疾病，根据国内一项城镇居民心理健康状况白皮书，在这六分之一之外，还有74%的人处于心理亚健康状态。所以我们觉得心理健康这个方向既具有巨大的社会价值，也有很强的商业价值。",
        "17. 你觉得创业初期，最难的事情是什么？项目运行了两年多，到现在最难的事情又是什么?",
        "程卓: 创业确实没有不难的事，而在开始阶段最难的，我觉得是对领导力的挑战。我称创业为领导力的地狱模式，因为在公司或者在学校组织进行领导管理时，都有一定的 formal power，也能预期一定的回报，但在创业中这些都没有，你甚至不确定自己的想法能不能成，我觉得这是对领导力的巨大考验。",
        "而现在最难的可能不是这个了，过去两年多我们已经建立了一定的形象，也取得了一点成绩。现在最困难的是如何平衡它与自己的学习生活、职业生涯。我觉得这可能是每一个校园创业者迟早会遇到的问题，到底要不要全职来做。作为兼职的学生团队，很多想实现的东西只能一步一步来，同时兼职团队对投资人的吸引力也比较小。不过另一方面这可能也是好事儿，我们不以拿投资作为衡量的标准，而是要持续地把它做下去，所以我们也会继续加油。",
        "18. 你对 BeenThere 的未来展望是怎样的？",
        "程卓: 我们希望 BeenThere 未来能在心理健康界创造一种新的互动模式，新的提供支持的方式。我们会成为心理咨询师的前一站，希望通过同伴互助的方式帮助更多人去预防心理问题，在这种新的模式下，所有人都能够获得心理方面的支持。另一方面，我们希望它成为一种新的匿名社交方式。现在的匿名社交已经有很多成功或不成功的，但是我觉得 BeenThere 的匿名社交会是一个不同的方式，它基于我们的情绪、烦恼，基于一种互助的精神、一种非常健康向上的能量。",
        "聊一聊自己的生活",
        "19. 如何能保持高效，做成这么多事情？",
        "程卓: 从两个角度来说吧。一个是不要怕失败。可能你看到一个人做成了五件事，但背后他可能尝试了五十件事，所以我一直说其实身边那些非常厉害的人，平时都挺灰头土脸的。如果要做成这么多事，就是多尝试多失败，别怕失败。",
        "另外关于具体的时间管理，也有几点。第一点是要想清楚不做什么。这件事其实没有看上去那么容易。战略大师迈克尔·波特说过战略的一个基石就是要知道自己不做什么，要有一个明确的处理事物的范围。对我自己来说，在双学位和创业之外，我也放弃了很多，比如我从来不去找工作，也不参加任何学生社团的领导岗位，对自己的成绩也不苛求，这样才有精力投入对我最重要的事情。",
        "第二点是要有一个良好的习惯，这个习惯可能每个人都不一样，但一定要摸清楚自己身体的脾气。我是个 early person，早睡早起就会特别有效率；另外我会给自己做每周计划表，规定自己一周只做八件事情，如果有其他的事情要加进来，就逼迫自己把原来八项中的一项排除。在排优先序列的时候，我会挑让我最焦虑的事情先做，焦虑指标就是我的优先序指标。最后就是，实在不行也别逼自己，我们都有人性的弱点，别跟自己太较劲。",
        "20. 你经历过很多高水平的平台，在这样的环境中怎样能够保持自信、坚定地走自己的路？ ",
        "程卓: 在我看来最重要的是要意识到，我们不只在一个维度上竞争。可能很多时候焦虑的来源是竞争维度单一，比方说以前只有高考这一条路，分数是唯一的维度。但其实人生竞争的维度特别多，可能你的工资比我高，但我的社会地位比你高；可能你的成就很高，但我过得很悠闲快乐，大家都不在同一个赛道上了，这个时候就没有那么容易焦虑。不跟别人比，只跟自己比，尽力去实现自己希望的东西。",
        "另外还需要一个心态的调整，要敢于去做暂时没有被主流所承认的事情。这其实也不容易，需要定力，但是一旦敢去这么做了，可能焦虑程度也会下降很多。我听过一句话，“如果有一个机会，大家都觉得是好机会，那就一定不是个好机会。”所有人都觉得是好的，竞争就很充分，必须杀出红海才能赢。真正的好机会一定是大家还没发现的，而你去做了，就比别人更容易成功。所以我觉得有时候要敢于做还不被主流所承认的事。",
        "21. 见过这么多优秀同辈，你觉得这些人有共同的特质吗？",
        "程卓: 好问题，回想起来我觉得每个人优秀的方式都很不一样，成功的方式也很不一样，其实挺难归纳出一个共有特质。就像武林门派一样，每个人都有自己的方式，可能有时会觉得大家都很 driven，但也有像阿甘这样按照自己的节奏，一步一步走向成功的。有时候我们会高估一个人在短期内能够实现的东西，又低估一个人在长期积累下能实现的东西。",
        "22. 平时有哪些获取信息的方式？还有哪些爱好？",
        "程卓: 获取信息，一个肯定是通过课堂，然后是新闻。我会听“得到”和“樊登读书”这类的播客，还有就是阅读。另外还有跟人聊天，这个其实很重要，你会获得很多 informal information，或者叫 know how——知道怎么做一件事情，这些是很难在书本上获得的知识。",
        "另外前阵子我也在反思，发现自己的信息源太多，信息太嘈杂，所以我建议要谨慎选择获取信息的源头，尽量选择可靠的、高质量的信息源，另外也可以选一些不同立场的信息对照着看。",
        "爱好是读书，喜欢读一些经典，因为时间有限，还是放在一些经过时间验证的作品上。",
        "23. 可以推荐一本自己喜欢的书吗？",
        "程卓: 要说推荐的话，《习惯的力量》。我觉得养成一个好的习惯太重要了。很多时候我们会觉得一个人很强是依靠强大的意志力，但意志力就像做俯卧撑一样，总有做不动的那一下。而依靠意志力先养成一个习惯，就可以让习惯的惯性推动着往前走。有了一套好习惯，就相当于有了一套好算法，能够不断地让你快速迭代。",
        "24. 你觉得你的人生哲学是怎样的？",
        "程卓: 这个问题有意思，从最大的层面来说，我们活着为了什么，我觉得人生就像一场电影，虽然结束后不一定有意义，但仍然是值得看的，因为过程会很精彩。我们的生命在宇宙的尺度下不一定有什么意义，但仍然是值得过的，我们要让自己过得精彩。",
        "25. 2020年是很特殊的一个节点，你对自己未来十年有什么展望和期盼？",
        "程卓: 我觉得未来十年对我最重要的是找到一个平台，曾经在清华波士顿校友会上有一位学姐的分享我印象很深，她说对于职业发展，二三十岁的时候主要是长本事，三四十岁的时候要搭平台，四五十岁的时候要在自己的平台上发光发热。我很认同，我对平台的定义就是个人能力的放大器，帮你形成更大的影响力。它可以是个很优秀的公司，也可以是投资，或者其他的东西，whatever best amplifies your capabilities to achieve what you want.",
      ],
      image: "22.jpg",
      active: false,
    },
    {
      userid: "2",
      articleId: 3,
      title: "为什么我的计划总是坚持不下来？｜ BeenThere Coach",
      content: [
        "我自己是“易上瘾”体质，玩起游戏是真停不下来，但想做的事还偏偏很多。于是一路求仙问药，抱着“神农尝百草”的精神，变着法尝试管理自己的时间。从经典的《高效能人士的七个习惯》，到自创的神奇 Excel，从庸俗的物质金钱激励，到超脱的“清心寡欲，淡泊明志”，还有你懂的“暑假每日作息计划表”...... 真可谓伤痕累累。",
        "但是这段经历也带给我很多思考和收获。比如我发现，世上无难事，只要肯放弃。时间管理的重点并不是怎么每天多挤出俩小时来；相反，首先是要想清楚不做什么，然后勇敢地划掉那些并不重要的东西。放弃该放弃的，百分之七十以上的问题就解决了，剩下百分之二三十，才到了技术层面。渐渐地，我形成了一套比较适合自己的方法论，让我能够在同时攻读哈佛和麻省理工两个全职硕士学位的同时，还可以创业做 BeenThere，每周认识新的人，晚上睡足八小时，周末忍不住了可以打游戏。希望这套方法对你也有启发。",
        "为什么计划坚持不下来？那要先看这个计划靠不靠谱。如果计划不靠谱，当然坚持不下来。你可能想了，这不是废话吗，我这么靠谱，做的计划肯定靠谱啊。慢着慢着，还真不一定，越靠谱的同学，计划越容易不靠谱，有的简直是反人性，要逆天。我见过雄心勃勃同时要做N件事儿的，见过啥都想学、啥都要插一脚的，见过每天就睡三四个小时的，各种“我要打十个“的既视感，真是凭实力单身。",
        "越是优秀、上进的人，越容易产生一些“妄念”，包括但不限于，“我的未来还有无限可能性”，“我可以把它们都做好”，“我比周围的人牛X”，“我比前人牛X“...... 之前一篇文章《我们不需要满分答卷》里提到理想和现实的落差，在我看来，所谓“到社会上接受打击、向社会低头”，实质上就是我们不断在外界反馈中发现自己的真实水平，主动或被动消除“妄念”的过程。",
        "成熟，就是接受只能做一件事的自己。而时间管理最大的敌人，就是给自己安排了太多的事情，贪多嚼不烂，还把自己弄得惶惶不可终日。我个人觉得，“我的未来还有无限可能性”这句话，危险系数当拔头筹。因为每保留一种可能性，就需要投入一部分精力让这扇门“开着”。研究表明，越是聪明的人，越不愿意把”门“关上，最终没了时间去干正事。",
        "然而世界第一流的智慧都在告诉我们，要去勇敢地关上这扇“门”。我曾经做过四年的企业战略咨询，现代战略管理之父迈克尔·波特曾说过，战略的一个重要基石，就是决定不做什么。如果一个企业什么都想做，平均地投入资源，就什么也做不好。巧了，咱们东方的《孙子兵法》同样有言：“备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。”",
        "那难道我们真的就没有办法把事情都做好、做得比周围人和前人更好吗？方法当然有，可惜不是“打十个”——同时做十件事不难，坚持做好一件事，很难。基于我们都是普通人的认知，专注在最重要的一到两件事情上，在时间的积累下不断迭代、调整，我们反而更有可能在某个领域做出超乎常人的成就。我们的成功不需要去全面的碾压别人——尺有所短、寸有所长，这个世界谁比谁聪明多少？相反，人无我有，人有我无，你好你的，我好我的，在复杂的世界中找到属于自己的独特“生态位”，集中投入资源，牢牢占据它，这才是更加实在的成功之法。",
        "分享一个我给正在读MBA期间的自己制定的“人生战略”。我目标聚焦于创业创新，因为我相信：",
        "1. 创业创新是我们国家产业升级和持续发展的动力，也是一项稀缺的能力",
        "2. 创业创新是个人职业生涯实现跨越式发展的有效途径",
        "3. 麻省理工学院和大波士顿地区的创业教育及资源位居全球前列",
        "因此，我将课堂学习之外的主要精力都投入在了创立 BeenThere 这一件事情上，同时放弃了所有跟“找工作”相关的活动、不参与任何学生社团的领导岗位、限制自己花在课堂和社交上的时间，这才有了文章开头所说的睡足八小时、周末打游戏。（关于我与游戏互相驯化的惨烈故事，改天开个“网瘾篇”吧...）",
        "咳咳，所以说，时间管理，制定一个不坑爹的计划，想清楚要做的，放弃不该做的，我们就成功百分之七十以上了！剩下的百分之二三十，咱们以后慢慢聊。同学们加油！！",
      ],
      image: "23.jpg",
      active: false,
    },
    {
      userid: "2",
      articleId: 4,
      title: "我和我的四拨前任们丨BeenThere创始人爆料",
      content: [
        "作者/橙子丹尼",
        "如果你顺着标题点进来，恐怕会有点失望。这不是一个爱情故事，而是一个在一次次挫折中理解自己和他人的故事。但如果你继续，读完我四段失败的“恋情”，或许，又会有更大的收获。谁知道呢？我们开始吧",
        "01",

        "多年以后，当与旁人提起自己在麻省理工的创业经历时，我定会回想起2017年9月那个遥远的下午。那时的我刚结束麦肯锡四年的咨询顾问生涯，进入麻省理工与哈佛大学攻读双学位。少年得志，意气风发。",

        "“Sky is the limit.” 仍记得离开前一位合伙人给我的那个巨大的拥抱，以及这句满含期许的话语。",

        "那个下午，正值麻省理工一个创业比赛的决赛。经过两天一晚的彻夜努力，我和四位队友振奋精神，向评委展示了为解决人们的心理健康问题而设计的AI智能日记。我们最终没有夺冠，但是那个夜晚都兴奋难眠。 ",

        "“咱们现在要做的，是拿去参加Sandbox, Y-Combinator这样的创业孵化项目，直接拿到上万美元启动资金…… 这些项目才是真挑战、真机会！” ",

        "我是被“随机”拉入这个比赛的，事前没有任何规划，然而那个下午却深刻地影响了我之后的所有生命。因为创业，我从头召集过四拨团队，又眼见着它们一个一个土崩瓦解；我曾在路演中被各种橄榄枝撩得晕头转向，也曾在各种留学论坛宣传产品的时候被骂、被封、被删帖；因为产品的目标是国人，我没有交到一个外国朋友，却对MIT所有跟创业沾边的华人团体了如指掌；我没有在任何社团担任任何职务，却同很多悄悄告诉我被抑郁困扰的朋友保持着密切的联系。 ",

        "所有这些经历中，同四拨团队的分分合合是带给我反思与成长最多的一段。里面不乏狗血剧情——公开的翻脸、挚友的疏远、被要挟、被欺骗、被夺权……没经历过创业的人或许不会相信，但是懂的人一定会懂。",

        "都说恋爱让男孩成长。找合伙人的难度不亚于找“另一半”，而同“前任”团队们的分分合合，也让我在许多不眠的夜里、在一个全新的维度上，快速成熟。",

        "回头再看，山川如旧。经历过许多，也变得平和，对朋友们的选择，心中多了一份理解，少了千般怨忿；自己也能坐下来，总结犯过的错误，希望能帮到对创业怀有好奇或憧憬的你。",
        "好了，下面上干货！",
        "02",
        "创业项目最大的“死因”之一，就是团队问题。一个创业圈的前辈曾告诉我：“我就没见过身边的团队里创始人间没出过问题的。”在麻省理工的创业课上，一位演讲嘉宾把他们团队从第一拨人到第七拨人的成员变动，画了一整页的PPT，等到最后一拨时，他自己的照片也不在里面了…… ",
        "所以说，团队真的很重要！团队真的很重要！团队真的很重要！ ",
        "要抱着找老公/找老婆的觉悟去找合伙人。",
        "尤其是从大企业或者名校出来的同学，更要引起重视。我们通常会低估靠谱合伙人的价值，进而低估寻找靠谱合伙人的难度和重要性。因为自己过去合作的人都太优秀了，很容易认为理所应当。比如，我曾经自信满满：身在MIT，这么多同学朋友，还找不到一个MIT博士来做CTO吗？对不起，就是找不到。你是在和谷歌苹果亚马逊抢人。而且事实上，非名校背景的同学，也同样可以是很靠谱的合伙人。不以出处论英雄。",
        "“找老公/老婆”还意味着要从“眉来眼去”开始，慢慢约会，培养感情。要有耐心，不能着急。想当初我跟人见了一面聊得不错，第二天就拉人入伙，这就跟刚要到女孩微信号就立刻求婚一样，简直是如狼似虎，保准把人吓跑。 ",
        "最后，“结婚”意味着你要准备好接受对方糟糕的一面。“合伙人”不同于“同事”。在企业里，大家都是拿出最好、最靠谱、最职业化的一面见人，每个人都无比可爱。但是一旦没有了平台的加持和约束，又面临公司生存压力和个人机会选择，每个人天性的另一面就会暴露出来。别惊讶，每个人都有。比如说，我会有管不住自己通宵打游戏的时候，结果导致第二天的全体会议被取消，弄得大家都很无语。但是这样的深度合作，我们必须接受彼此的缺点。 ",
        "分清“创业者”和“创业爱好者”。",
        "就像你想谈一场认真的恋爱，肯定不希望遇到拈花惹草、只想玩玩的“花花公子”一样。“创业爱好者”就是这样一群“花花公子”。 ",
        "没有贬低的意思，因为我们都是这个阶段过来的。那时对创业充满好奇，觉得动不动融个几千万又上杂志封面很酷，很想试试，也想学学。于是我们充满热情地加入一个团队，而且分文不取，就像又参加了个社团一样。 ",
        "然而一段时间过去，你发现项目并没有起色，而要投入的时间却越来越多。你开始琢磨，原来还不如加个学生会，能费这么大劲，早当副主席了；或者去找工作，那也是妥妥的中产阶级。终于，在期中考试黑云压城的那周，你请了假，之后再也没有回来。 ",
        "“创业爱好者”可以成为创业者很好的助力，请爱护这群可爱的人们，但一定要管理好我们的期待。否则，最后的结果多半会让你失望。",
        "“吸” 着队伍走，不要 “推、追、催”。",
        "这就像追女孩子一样。",
        "女孩从来都不是“追”来的，而是你自己足够优秀，“吸”来的。“追”的那一下，顶多是开头引起注意，结尾临门一脚，兄弟们不能本末倒置。",
        "创业团队也是一样。我曾经万分苦恼地求教一位创业前辈，如何能尽快做出一个quick win，稳住团队往前走。然而他的回答出乎意料：“为什么要留住团队？你真正要留下的，是那个没有quick win也要赌咒把这件事干成的人。否则他现在不走，困难时刻也会走。”",
        "我如梦方醒。回头看看自己拉扯起来的号称十几个人的队伍，其实不过是哈布斯堡的“布娃娃家族”，列强一打，蛋碎一地。",
        "要吸引真正“能打”的合伙人，不能靠利益（因为 cost-benefit 永远不在你这边），不能靠忍让（因为他会骑到你的头上去），更不能靠哄骗，而唯有靠愿景、靠这件事本身。TA得要觉得这件事真心有意义，不给钱都要干，不让干自己干，这才是你的命中注定。",
        "会不会太难找？谁说创业容易了。送你一句北大教授送我的话：“让别人相信你的最好办法，就是坚定不移地去做。”",
        "人多不一定力量大，尤其在决策这件事上。",
        "就像小两口的事情，虽然两家人都利益相关，但也不意味着啥都要七大姑八大姨来批准。",
        "决策的人一多，必然拉帮结派，斗争复杂度急剧上升。有几个星期，我天天在琢磨“拉一派、打一派”，事情没做几件，倒是在小小的学堂，体验了",
        " 高效决策的背后，还有分工和信任。曾经有一个MIT的本科生，人非常聪明，也非常勤奋。但是他有一个致命缺点，就是事事都要争论，事事都有自己的看法。每做一个决定，都要我给他一个完全没有受过商业训练的人普及Commerce 001，经过几番来回，真是身心俱疲。我把产品的重要部分交给他做，是信任他的产品能力；如果他也能信任我的商业判断，而不是拿手中的产品作为筹码，我们的合作会愉快很多。",
        "03",
        "与创业团队悲欢离合、吃鸡撕逼的故事还有很多，对于曾经心比天高的我，真是人生重重的一课。",
        "然而，我最重要的一课，却是来源于Donna，我在MIT的一位创业导师。她曾成功创立了一家拥有2千万用户、业务横跨18个国家并成功上市的社会企业。",
        "那天我走进她的办公室，心情烦闷无比，将创业以来的种种挫折与不快、疑惑与烦恼，通通倾吐给她。她静静地听完，看着我的眼睛，只说了一句 “I’ve been there",
        "就在那一刹那，我心里的重担烟消云散。原来，我并不是最惨的那一个；原来，我的故事竟有一人也曾经历过。再多的安慰，再多的劝解，其实，都比不过那一句“I’ve been there.”因为，我们在困难当中，最最需要的，只是有一个人，能够真正地理解自己",
        "就这样，BeenThere，成为了我们新产品的名字。我重又拉起了第五拨队伍。虽然产品已经不同，但是提升人们心理健康的目标，却从未变过。中国近1/6的城镇居民患有心理疾病，而70%以上处在心理亚健康状态。然而，受到到观念、偏见和供给的制约，绝大多数国人仍远未得到应有的心理支持。",
        "正在读文章的你，快乐吗？而我们BeenThere公众号想做的事情很简单，让经历过的人帮助正在经历的人，告诉他们一句，“I've been there”。",
        "回首过往，向我的四拨“前任”们报以释然的微笑，经历种种让我更懂你，也更懂自己；向前，路在脚下，哪怕这个问题仍然没有成熟的解决方案、这个领域仍然不是资本市场的宠儿，我还是要撸起袖子，向它挑战。",
      ],
      image: "24.jpg",
      active: false,
    },
    {
      userid: "4",
      article: 1,
      title: "让我们相互看见，彼此照亮，一同前行",
      content: [
        "大家好！我是卓尔，很开心能再次在BeenThere分享我的故事，加入BeenThere一年多了，是一个见证这个组织成长，也同样见证我自己成长的过程。今天也想在这里和你分享一些我成长中的经历与感悟，希望那些在迷茫，纠结中摸索前进，在自我怀疑中不断成长的故事，能和你产生些许微小的共鸣，让我们相互看见，彼此照亮，一同前行。",
        "不知不觉来到2020年的中段，我站在大学毕业的节点上，回望我的2019年至今，是一个我不断认识自己的过程，让我开始不断地问自己：你想成为一个什么样的人？什么是你看重的？你的人生意义是什么？这些看是灵魂拷问的话题是在我之前二十年的生命中很少问到自己的，但因为两件事，推动了我不断地向内求。和在不断的探索中，逐渐找到自己。一个是我自己准备申请美国研究生的过程；另一件是疫情的全球蔓延打乱了我原有的留学计划，我需要延期入学，开始思考我想找一份什么样的工作？",
        "我经常把我自己申请研究生的过程想象成一个孩子误打误撞地闯入丛林探险的旅途。不断地向外看，去搜集各个高校和项目的信息，也同时向内看，问自己想成为什么样的人？因为充满对不同专业领域的好奇，我去看各个高校的网站，去看每一个我可能感兴趣的项目。后来我定了九所学校，七个不同的专业领域，有和我本科计量经济学和数学专业相关的经济类，统计类，金融类的项目；也有跨专业的创业学，管理学，教育与传媒等。我常想可能很少有人是按我这样申请方式。在申请的过程中，我去参加了所有我能参加的Information Session，抓住那些能和招生官聊一聊的机会，希望能更多了解这个项目，也让他们更多地了解我。但这个过程中，为每一个项目写申请文书的经历让我印象深刻，因为那是一个让你阐述生命中那些对你来说重要的“为什么”的过程，是一个很好的self－reflection的过程。在我们传统的教育下，很难有机会去问那些“为什么”，而在我看来那些帮助我们自我认知的问题，恰恰是我现有生活中最缺失和需要的一部分。是一个让你不断地问自己想要什么的过程；是一个让你连接你的过去，现在和未来去思考的过程。",
        "而对这些“为什么”的思考，往往能让我们更多地看清自己，坚定自己，也变得更有勇气去面对一些人生中至关重要的选择。当我的申请季结束，我发现这也是一个被动再选择的过程，我收到了很多我原本以为我能去的学校的拒信，也收到了哥伦比亚大学教育学院的offer。我打开了我当时写的所有文书，我发现当我读到被录取的那一篇时，我感觉那是真正打动我自己和呈现自己的故事。我希望用数字媒体和教育科技去推动先进教育理念社会化传播，去推动更优质的教育资源深入下沉市场，让更多的人享受到好的教育资源。我想是那些关于“为什么”的思考，不断地把我代入了我感兴趣的世界。",
        "后来的故事是，当我在收到录取还开心没到两周的时候，疫情在美国不断蔓延，纽约成了重灾区，我计划延期入学，开始找工作。其实找工作的过程和申请学校的过程很像，都是一个不断地向外探索和向内求的过程。但也需要更多地技巧和转换学生思维。在这个过程中，我特别感恩，身边能有前辈和朋友给我很多有益指导，让我最终找到了一份我很喜欢，也充满期待的工作。那些生活中不期而遇的变化，迫使我去不断地调整路径，但也在这个不断找寻的过程中，更加看清了我自己。当看清了想走的大致方向的时，我想对我来说不管是先去读书，还是先工作，都是一个很好的积累过程。我相信，任何一段经历都富有自己的道理与蕴意。同时，我们也可以赋予它属于我们自己的意义，渲染属于我们自己的色彩。我很喜欢乔布斯的说过的一段话：“当你一直根据你自己的感觉去做选择，有一天你突然之间能把一件事做成了，你就发现原来每一个尊重自己感觉的选择都是一颗珍珠，每一颗珍珠和珍珠之间有暗藏的线索，这些线索最终把这些珍珠串起来，构成一个项链。”",
        " 或许，我们每个人在自己的成长路径里，都会有自己迷茫的时刻，和面对这个世界的未知与不确定性的恐惧。2020年对我们每个人都很特殊，疫情更加剧了这种不确定性。但我们还是需要一步一步地，不断的迈出自己的舒适区，不断地去调整和适应。但我知道这个过程并不容易。往往令人备受打击的消息比好消息多。当面对一次又一次考不出来的成绩时，当收到一封一封抱歉与遗憾开头的拒信时，当所有事先计划好的事被不可抗力打乱节奏时。如何接纳与调整，如何重塑勇气，如何直面内心当中的恐惧与心魔，是我们时常要面对的课题。但让我时常庆幸，我们不是一个人，我们可以寻求帮助，这个世界上有很多愿意倾听我们，愿意帮助我们，托起和温暖我们的人。BeenThere就是这样的存在。",
        "  这里有很多的“过来人”，他们经历过你所现在经历的困惑与艰难，他们愿意与你分享成长的感悟与收获。我在这里收到过很多的温暖与支持，也同样希望把这份温暖与支持传递下去，去用自己微薄的力量帮助更多的人。希望那些微小的善意在这个世间汇聚成道道微光，点亮更多迷失，黑暗的地方，去温暖和托起那些失意的灵魂。我也愿意做那个一直在这里倾听和守护你的人，与你一起经历，探索，沉淀那些生命中或美好，或迷惘，或困顿的时刻。去更多地看见自己，接纳自己，成为更加真实，勇敢的自己。",
        " 这是我的故事，你有什么样的故事想对我说呢？",
      ],
      image: "41.jpg",
      active: true,
    },
    {
      userid: "5",
      articleId: 1,
      title: "如果你在黑暗中不断挣扎, 我们一起探索黎明和希望",
      content: [
        "你好，我是Yi",
        "刚来BeenThere时是我在美国研一的下学期，因曾受惠于平台的同辈支持，希望之火鼓舞着我也加入了BT大家庭。出国前也有一段研究生经历，因独爱文化心理学不肯将就，故考了2次皆失利，第3次才通过统考进入理想的学校和研究领域。在国内读研的那些年，历经科研坎坷、屡遭挫败。期间曾合伙开办过一家心理咨询公司，曾策划过国内临床与咨询注册系统专家们的心理培训项目。当时的我一边毕设一边创业，坎坎坷坷中公司内部转型，从我全心投入的心理咨询主营业务转变至心理科普出版与发行，在学业遭遇挫败的情况下还要面对创业退伙的楚歌，那是我第一次感到很深的无力、无奈与彷徨。",
        "结束国内科研之后我决定一切归零、重新出发，选择了自己合适的项目再次扬帆起航。现就读于叶史瓦大学心理咨询专业，目前受教于爱因斯坦医学院校区的师资和资源，熏陶于以色列的人文和医学思想。我从2012年开始钻研“儒释道心理学”和“中医心理治疗”至今已8年了，期间发表过文化心理治疗的相关论文，我的思想在中美学术交流中得到了多位中美文化与宗教心理学专家们的共识。目前我在纽约一所精神心理健康中心从事心理咨询工作，我的咨询风格是中西相结合式心理咨询与文化疗愈，应用领域为焦虑、抑郁、失眠、适应障碍和人格障碍等。",
        "音乐是一种美好的疗愈。我闲下来的时候会通过编曲表达心声，“蕉叶”是除了钢琴之外陪伴我很多年的常用乐器。让人心情愉悦的另一宝藏就是和同道一起旅行、考古和看星星。我穿越过世界上很多独特的教堂、寺庙和朝圣地，在那里领略到了许多意外的民俗与独特的信仰。夜晚星罗密布时，仰望星空，观赏星象变化和星星之间的夹角，从而感叹自然的博大和宇宙的精深。遇到伤心或困境时，我会练练太极拳和与同道们交流，也会有很多新的领悟。",
        "我的人生信条是：以没有敌意的坚决和没有诱惑的深情定义善与爱、定义我是谁。如果你正在遭遇屡遭挫败和沮丧，如果你的身边强者如林你感到费劲全身的力气都走不到理想的远方，如果你在黑暗中不断挣扎仍然看不到光明，如果你正在无能为力中悲伤和彷徨，希望我成为你的Buddy伴你同行，我们一起探索黎明和希望，我永远在这里，并坚信你将迎来灿烂的曙光。",
      ],
      image: "51.jpg",
      active: true,
    },
    {
      userid: "6",
      articleId: 1,
      title: "Iris的自我介绍",
      content: [
        "经历了高中和大学的几次转校之后，现在在墨尔本的 Monash 大学就读。经历了文化的冲突，学习的折磨，还有找实习的艰难，我渐渐学会坚定地去做一些自己想做的事情，慢慢调整心态，寻找方向。",
        "人们常说，你所经历过的事情成就了现在的你。如今，我还深刻地记得高中的岁月。那时候的我就像沉浸在漆黑的海水里，奋力想要突破却始终找不到依靠点。该如何来定义我呢？我想自己大概是一个很要强却又很脆弱的人吧，这么说虽然有些矛盾，可我这种性格从小一直延续到现在，早已融入我的生命。",
        "来墨尔本前，我感觉自己一直生活在象牙塔里；来这之后，面临各种问题的我时常有种巨大的落差感，这种感觉也许是来自朋友圈的，也或许是因为我太孤独了。虽然我觉得自己很脆弱，但很奇妙的是，好像有一种反脆弱的力量一直支撑着我。",
        "大一的时候，我很迷茫，时常在想自己的方向是什么，甚至连选专业都无法做出决定。虽然在学业上面临着语言和知识的问题，但我还是会认真写好每一个科目的目标、学习方法和学习计划。我那时候看书很慢，因为怕自己得不到高的成绩，所以总会在图书馆呆到深夜。每次想到要放弃的时候，我都会看一些激励演讲让自己变得有动力。就这样，我每天仿佛都在怀疑自己的同时不断鼓励自己，不过，这一过程也打磨了我。我开始不停地思考如何才能优化自己的学习方法从而高效利用时间。在人生低谷依然去相信自己是一件很难的事情，但我依然希望能够坚定地做自己。",
        "后来，我想拥有一些工作经验，可由于在澳洲没有身份，我总是举步维艰。在查找了很多资料以及从朋友和学校那得到了很多讯息后，我慢慢找到一些方向，也很幸运地拿到了一个跟商科有关的当地的兼职工。以前，我从没有想过要踏出我的舒适圈去找实习和工作，每当遇到问题时也总是一个人郁闷，可渐渐地我开始勇于主动寻求帮助，而这也在很大程度上帮助我成长。",
        "我还发现每个人都需要情感的链接，我也想为自己的情感找一个链接点。现在我每周三都会去养老院当义工，陪老人做做游戏聊聊天。我时常倾听一个叫 Rachel 的老人讲故事，她的瞳孔很漂亮，透露着温和，当她说到动情处时眼泪都会浸满她的眼眶。Rachel 房间的墙壁上贴满了充满回忆的照片，从一张张照片那我可以清晰地看到她从少女到妻子再到母亲的角色转换。我想每个人应该都有很多想要分享的故事吧，无论它们是开心的还是悲伤的，都承载了人们于每个阶段的成长。或许这也是为什么在很多时候人们需要的只是一个倾听者。",
        "情感真的是一件很奇妙的事情，将明明不在同一国度，同一个年龄层的人们联系在一起，所以我相信情感的链接能守护我们心中最柔软的部分，而这也与 Beenthere 的理念不谋而合。我很幸运遇到了 Beenthere 并在这里获得了力量，更学会了传递爱与温暖。",
        "现在回想起我刚来到墨尔本时那段孤独的时光，我觉得它或许也不是一件坏事吧。这段经历是我留学生涯中不可代替的一部分，它切切实实让我静下来，与自己对话和思考生命的意义。",
        "我相信我们都在寻找真实的自己，很幸运能够与 Beenthere 相遇，斯人如彩虹，遇上方知有。如果有幸遇见你，希望真的能给予你微笑和温暖。",
      ],
      image: "61.png",
      active: true,
    },
  ];
  const { article, showStatus, id } = props;
  const articleRef = useRef();
  const handleClick = (id) => {
    const newArticles = articles.map((article) =>
      article.articleId === id
        ? { ...article, active: true }
        : { ...article, active: false }
    );
    setArticless(newArticles);
    if (expand) {
      setExpand(!expand);
    }
    articleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const [articless, setArticless] = useState(articles);
  const [expand, setExpand] = useState(false);
  const [more, setMore] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  const handleMore = () => {
    setMore(!more);
  };
  return (
    <Section expand={expand} more={more} showStatus={showStatus}>
      {article && (
        <React.Fragment>
          {articless
            .filter((article) => article.active && article.userid === id)
            .map((article, index) => (
              <div key={index}>
                <div className="article">
                  <img
                    src={`/articles/${article.image}`}
                    alt="gallery"
                    className="article--image"
                  />
                  <div className="article--title" ref={articleRef}>
                    {article.title}
                  </div>
                  <div className="article--content">
                    {article.content.map((par, index) => (
                      <p
                        key={index}
                        style={{
                          marginBottom: "20px",
                          textAlign: "left",
                          padding: "0 15px",
                        }}
                      >
                        {par}
                      </p>
                    ))}
                  </div>
                  <div className="article--expand" onClick={handleExpand}>
                    {expand ? "收起" : "展开"}
                    {expand ? closeIcon : expandIcon}
                  </div>
                </div>
              </div>
            ))}

          <div className="bar"></div>
          <div className="articles">
            {articless
              .filter((article) => article.userid === id)
              .map((article, index) => (
                <ArticleItem
                  key={index}
                  active={article.active}
                  onClick={() => handleClick(article.articleId)}
                >
                  <figure className="shape">
                    <img
                      src={`/articles/${article.image}`}
                      alt="gallery"
                      className="image"
                    />
                  </figure>
                  <div className="text">
                    <h3 className="title">{article.title}</h3>
                    <p className="content">
                      {article.content.map((par, index) => (
                        <span key={index}>{par}</span>
                      ))}
                    </p>
                  </div>
                </ArticleItem>
              ))}
          </div>
          <button className="button" onClick={handleMore}>
            查看更多{" "}
          </button>
        </React.Fragment>
      )}
    </Section>
  );
};
export default React.memo(BuddyVideo);