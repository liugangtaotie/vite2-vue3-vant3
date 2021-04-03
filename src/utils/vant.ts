import {
  Area,
  List,
  Cell,
  Icon,
  Button,
  CellGroup,
  Empty,
  Field,
  Col,
  Row,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Toast,
  Tab,
  Tabs,
  Divider,
  Tabbar,
  TabbarItem,
  ActionSheet,
  Search,
  IndexBar,
  IndexAnchor,
  Popup,
  Picker,
  Switch,
  TreeSelect,
  Dialog,
  Progress,
  PullRefresh,
  Loading,
  Tag,
  Stepper,
  SwipeCell,
  Step,
  Sticky,
  Steps,
  Swipe,
  SwipeItem,
  Uploader,
  DatetimePicker,
  Image as VanImage,
  CountDown,
  NavBar,
  Calendar,
  NoticeBar,
} from "vant";

const vant = {
  install(Vue: { component: (arg0: string, arg1: any) => void }) {
    Vue.component(Area.name, Area);
    Vue.component(List.name, List);
    Vue.component(Cell.name, Cell);
    Vue.component(Icon.name, Icon);
    Vue.component(Button.name, Button);
    Vue.component(CellGroup.name, CellGroup);
    Vue.component(Empty.name, Empty);
    Vue.component(Field.name, Field);
    Vue.component(Col.name, Col);
    Vue.component(Row.name, Row);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Radio.name, Radio);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Toast.name, Toast);
    Vue.component(Tab.name, Tab);
    Vue.component(Tabs.name, Tabs);
    Vue.component(Divider.name, Divider);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
    Vue.component(ActionSheet.name, ActionSheet);
    Vue.component(Search.name, Search);
    Vue.component(IndexBar.name, IndexBar);
    Vue.component(IndexAnchor.name, IndexAnchor);
    Vue.component(Popup.name, Popup);
    Vue.component(Picker.name, Picker);
    Vue.component(Switch.name, Switch);
    Vue.component(TreeSelect.name, TreeSelect);
    Vue.component(Dialog.name, Dialog);
    Vue.component(Progress.name, Progress);
    Vue.component(PullRefresh.name, PullRefresh);
    Vue.component(Loading.name, Loading);
    Vue.component(Tag.name, Tag);
    Vue.component(Stepper.name, Stepper);
    Vue.component(SwipeCell.name, SwipeCell);
    Vue.component(Step.name, Step);
    Vue.component(Sticky.name, Sticky);
    Vue.component(Steps.name, Steps);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Uploader.name, Uploader);
    Vue.component(DatetimePicker.name, DatetimePicker);
    Vue.component(VanImage.name, VanImage);
    Vue.component(CountDown.name, CountDown);
    Vue.component(NavBar.name, NavBar);
    Vue.component(Calendar.name, Calendar);
    Vue.component(NoticeBar.name, NoticeBar);
  },
};
export default vant;
