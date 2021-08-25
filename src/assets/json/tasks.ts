// type: 1-重要紧急 2-不重要紧急 3-重要不紧急  4-不重要不紧急
export interface Task {
  id: number;
  type: number;
  content: string;
  time: number;
}

export const tasks: Task[] = [
  { id: 1, type: 2, content: '问世间情是何物？直教生死相许。', time: 1629606616 },
  { id: 2, type: 2, content: '多情自古空余恨，好梦由来最易醒。', time: 1629606616 },
  { id: 3, type: 3, content: '此恨不关风与月，人生自古伤离别。', time: 1629606616 },
  { id: 4, type: 4, content: '它山之石，可以攻玉。', time: 1629606616 },
  { id: 5, type: 3, content: '人生失意无南北。', time: 1629606616 },
  { id: 6, type: 2, content: '相恨不如潮有信，相思始觉海非深。', time: 1629606616 },
  { id: 7, type: 3, content: '若教眼底无离恨，不信人间有白头。', time: 1629606616 },
  { id: 8, type: 4, content: '今年花落颜色改，明年花开复谁在？', time: 1629606616 },
  { id: 9, type: 4, content: '江山代有才人出，各领风骚数百年。', time: 1629606616 },
  { id: 10, type: 2, content: '纸上得来终觉浅，绝知此事要躬行。', time: 1629606616 },
  { id: 11, type: 3, content: '相见争如不见，有情何似无情。', time: 1629606616 },
  { id: 12, type: 2, content: '花非花，雾非雾。', time: 1629606616 },
  { id: 13, type: 4, content: '我自横刀向天笑，去留肝胆两昆仑。', time: 1629606616 },
  { id: 14, type: 2, content: '可怜夜半虚前席，不问苍生问鬼神。', time: 1629606616 },
  { id: 15, type: 2, content: '人皆养子望聪明，我被聪明误一生。', time: 1629606616 },
  { id: 16, type: 0, content: '你的眉目有星河。', time: 1629606616 },
  { id: 30, type: 0, content: '看海就行了，你管海里有什么。', time: 1629606616 },
  { id: 17, type: 1, content: '我感觉你状态不对，想拉你一把。', time: 1629606616 },
  { id: 18, type: 1, content: '太阳沉了下去，生活浮了上来。', time: 1629606616 },
  { id: 19, type: 1, content: '人生不用急，好吃慢喝，来日方长。', time: 1629606616 },
  { id: 20, type: 1, content: '我和我的日子都会发光。', time: 1629606616 },
  { id: 21, type: 1, content: '在谷底也要开花，在海底也要望月。', time: 1629606616 },
  { id: 22, type: 1, content: '关于我的故事，还是听我的版本好一点。', time: 1629606616 },
  { id: 23, type: 1, content: '平芜尽处是春山。', time: 1629606616 },
  { id: 24, type: 1, content: '再遇见，记得给我买束花。', time: 1629606616 },
  { id: 25, type: 1, content: '我要月亮奔我而来。', time: 1629606616 },
  { id: 26, type: 0, content: '我走的路要繁花盛开，要人声鼎沸。', time: 1629606616 },
  { id: 27, type: 0, content: '旅途愉快，停哪站都不算坏。', time: 1629606616 },
  { id: 28, type: 0, content: '但热爱可抵岁月漫长。', time: 1629606616 },
  { id: 29, type: 0, content: '遇事不决，可问春风。', time: 1629606616 }
];
