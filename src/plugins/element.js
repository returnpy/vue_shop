import { Alert, Aside, Breadcrumb, BreadcrumbItem, Button, Card, Cascader, Checkbox, CheckboxGroup, Col, Container, Dialog, Form, FormItem, Header, Input, Main, Menu, MenuItem, Message, MessageBox, Option, Pagination, Row, Select, Step, Steps, Submenu, Switch, Table, TableColumn, TabPane, Tabs, Tag, Timeline, TimelineItem, Tooltip, Tree, Upload } from 'element-ui'
import Vue from 'vue'

Vue.use(Tabs)
Vue.use(TabPane)

Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.use(Upload)

Vue.use(CheckboxGroup)
Vue.use(Checkbox)

Vue.use(Steps)
Vue.use(Step)

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(Row)
Vue.use(Col)

Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Card)
Vue.use(Tag)

Vue.use(Tooltip)

Vue.use(Switch)

Vue.use(Pagination)

Vue.use(Dialog)

Vue.use(Select)
Vue.use(Option)

Vue.use(Tree)

Vue.use(Alert)

Vue.use(Cascader)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
