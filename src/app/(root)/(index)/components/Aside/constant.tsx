'use client';

import { PiListStarFill } from 'react-icons/pi';
import { RiCompass3Fill } from 'react-icons/ri';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { BsDatabaseFill } from 'react-icons/bs';
import { BiCodeBlock } from 'react-icons/bi';
import { AiFillAndroid } from 'react-icons/ai';
import { FaApple } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { FaKeyboard } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';

import { TabItem } from '@/components/Navbar/constant';

export const asideList: TabItem[] = [
  {
    title: '关注',
    path: '/following',
    Icon(props) {
      return <PiListStarFill {...props} />;
    },
  },
  {
    title: '综合',
    path: '/',
    activeMatch: ['/', '/recommended'],
    Icon(props) {
      return <RiCompass3Fill {...props} />;
    },
  },
  {
    title: '排行榜',
    path: '',
    id: 'rank',
    Icon(props) {
      return <BsBookmarkStarFill {...props} />;
    },
  },
  {
    title: '后端',
    path: '',
    Icon(props) {
      return <BsDatabaseFill {...props} />;
    },
    subTabs: [
      { title: '后端', path: '' },
      { title: 'Java', path: '' },
      { title: '面试', path: '' },
      { title: 'Go', path: '' },
      { title: '数据库', path: '' },
      { title: 'Python', path: '' },
      { title: 'Sprint Boot', path: '' },
      { title: '前端', path: '' },
      { title: 'MySQL', path: '' },
      { title: '架构', path: '' },
      { title: 'Spring', path: '' },
      { title: '程序员', path: '' },
      { title: 'Redis', path: '' },
      { title: 'Linux', path: '' },
      { title: 'Elasticsearch', path: '' },
    ],
  },
  {
    title: '前端',
    path: '',
    Icon(props) {
      return <BiCodeBlock {...props} />;
    },
    subTabs: [
      { title: '前端', path: '' },
      { title: 'JavaScript', path: '' },
      { title: 'Vue.js', path: '' },
      { title: '面试', path: '' },
      { title: 'React.js', path: '' },
      { title: 'CSS', path: '' },
      { title: 'HarmonyOS', path: '' },
      { title: '后端', path: '' },
      { title: 'Node.js', path: '' },
      { title: '前端框架', path: '' },
      { title: 'TypeScript', path: '' },
      { title: '微信小程序', path: '' },
      { title: 'Flutter', path: '' },
      { title: 'GitHub', path: '' },
      { title: '架构', path: '' },
    ],
  },
  {
    title: 'Android',
    path: '',
    Icon(props) {
      return <AiFillAndroid {...props} />;
    },
    subTabs: [
      { title: 'Android', path: '' },
      { title: '前端', path: '' },
      { title: 'HarmonyOS', path: '' },
      { title: 'Kotlin', path: '' },
      { title: 'Flutter', path: '' },
      { title: 'Java', path: '' },
      { title: 'Android Jetpack', path: '' },
      { title: '面试', path: '' },
      { title: '架构', path: '' },
      { title: 'Android Studio', path: '' },
      { title: '性能优化', path: '' },
      { title: '程序员', path: '' },
      { title: '音视频开发', path: '' },
      { title: 'Python', path: '' },
      { title: '设计模式', path: '' },
    ],
  },
  {
    title: 'iOS',
    path: '',
    Icon(props) {
      return <FaApple {...props} />;
    },
    subTabs: [
      { title: 'iOS', path: '' },
      { title: 'Swift', path: '' },
      { title: 'Flutter', path: '' },
      { title: '前端', path: '' },
      { title: '源码阅读', path: '' },
      { title: 'SwiftUI', path: '' },
      { title: 'Apple', path: '' },
      { title: '客户端', path: '' },
      { title: '音视频开发', path: '' },
      { title: 'Android', path: '' },
      { title: '面试', path: '' },
      { title: '性能优化', path: '' },
      { title: 'HarmonyOS', path: '' },
      { title: 'Xcode', path: '' },
      { title: '架构', path: '' },
    ],
  },
  {
    title: '人工智能',
    path: '',
    Icon(props) {
      return <FaRobot {...props} />;
    },
    subTabs: [
      { title: '人工智能', path: '' },
      { title: 'LLM', path: '' },
      { title: 'AIGC', path: '' },
      { title: '算法', path: '' },
      { title: '后端', path: '' },
      { title: '机器学习', path: '' },
      { title: '前端', path: '' },
      { title: '深度学习', path: '' },
      { title: 'Python', path: '' },
      { title: 'OpenAI', path: '' },
      { title: '架构', path: '' },
      { title: 'GitHub', path: '' },
      { title: '开源', path: '' },
      { title: '数据库', path: '' },
      { title: 'ChatGPT', path: '' },
    ],
  },
  {
    title: '开发工具',
    path: '',
    Icon(props) {
      return <BsTools {...props} />;
    },
    subTabs: [
      { title: '前端', path: '' },
      { title: 'GitHub', path: '' },
      { title: '后端', path: '' },
      { title: '数据库', path: '' },
      { title: '开源', path: '' },
      { title: '大数据', path: '' },
      { title: '架构', path: '' },
      { title: '数据分析', path: '' },
      { title: 'Linux', path: '' },
      { title: '程序员', path: '' },
      { title: 'Git', path: '' },
      { title: '人工智能', path: '' },
      { title: 'Python', path: '' },
      { title: '测试', path: '' },
      { title: 'Kubernetes', path: '' },
    ],
  },
  {
    title: '代码人生',
    path: '',
    Icon(props) {
      return <FaKeyboard {...props} />;
    },
    subTabs: [
      { title: '后端', path: '' },
      { title: '前端', path: '' },
      { title: '程序员', path: '' },
      { title: 'Java', path: '' },
      { title: 'Spring Boot', path: '' },
      { title: '数据库', path: '' },
      { title: 'HarmonyOS', path: '' },
      { title: 'JavaScript', path: '' },
      { title: '面试', path: '' },
      { title: '开源', path: '' },
      { title: 'Python', path: '' },
      { title: '产品', path: '' },
      { title: '架构', path: '' },
      { title: 'GitHub', path: '' },
      { title: '云计算', path: '' },
    ],
  },
  {
    title: '阅读',
    path: '',
    Icon(props) {
      return <MdLibraryBooks {...props} />;
    },
    subTabs: [
      { title: '程序员', path: '' },
      { title: '前端', path: '' },
      { title: '后端', path: '' },
      { title: '人工智能', path: '' },
      { title: '云原生', path: '' },
      { title: '大数据', path: '' },
      { title: 'GitHub', path: '' },
      { title: '云计算', path: '' },
      { title: 'Linux', path: '' },
      { title: '数据库', path: '' },
      { title: '监控', path: '' },
      { title: '面试', path: '' },
      { title: 'JavaScript', path: '' },
      { title: '架构', path: '' },
      { title: 'MySQL', path: '' },
    ],
  },
];

export const asideMatchList = asideList
  .map((item) => {
    return item.activeMatch || item.path;
  })
  .flat();
