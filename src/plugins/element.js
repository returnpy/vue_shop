import { Aside, Breadcrumb, BreadcrumbItem, Button, Card, Col, Container, Dialog, Form, FormItem, Header, Input, Main, Menu, MenuItem, Message, MessageBox, Option, Pagination, Row, Select, Submenu, Switch, Table, TableColumn, Tag, Tooltip, Tree } from 'element-ui'
import Vue from 'vue'

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

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
