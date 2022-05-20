import htmlStructure from './components/htmlStructure';
import header from './components/header';
import events from './helpers/events';
import startSortingBtn from './helpers/startSortingBtn';
import '../styles/main.scss';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
