# Table 表格

主要用于展示大量结构化数据。
支持排序、筛选等功能。

## 代码示例


:::demo 基础用法

表格的最简单用法。可以设置`hover`属性设置是否开启行的hover效果。

```html
<template>
    <Table :data="data" :columns="columns" :hover="hover">
        <template slot="footer">
            footer
        </template>
    </Table>
    <h4>禁用行的hover效果</h4>
    <m-switch v-model="hover"></m-switch>
</template>
<script>
    export default {
        data(){
            return {
                hover: true,
                columns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'email',
                        title: '邮箱'
                    },
                    {
                        key: 'phone',
                        title: '手机号'
                    },
                    {
                        key: 'create_date',
                        title: '创建日期'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        email: '18255678897@test.com',
                        phone: '18255678897',
                        create_date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        email: '18255678899@test.com',
                        phone: '18255678899',
                        create_date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        email: '18255678898@test.com',
                        phone: '18255678898',
                        create_date: '2016-10-02'
                    },
                ],
               
            }
        },
    }
</script>

```

:::



:::demo 尺寸

设置`size`属性可以控制表格的不同尺寸，可选值 `mini` `small` `default` `large`。

```html
<template>
    <h4>mini</h4>
    <Table size="mini" :data="data" :columns="columns"></Table>
    <h4>small</h4>
    <Table size="small" :data="data" :columns="columns"></Table>
    <h4>default</h4>
    <Table :data="data" :columns="columns"></Table>
    <h4>large</h4>
    <Table size="large" :data="data" :columns="columns"></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'email',
                        title: '邮箱'
                    },
                    {
                        key: 'phone',
                        title: '手机号'
                    },
                    {
                        key: 'create_date',
                        title: '创建日期'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        email: '18255678897@test.com',
                        phone: '18255678897',
                        create_date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        email: '18255678899@test.com',
                        phone: '18255678899',
                        create_date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        email: '18255678898@test.com',
                        phone: '18255678898',
                        create_date: '2016-10-02'
                    },
                ],
               
            }
        },
    }
</script>

```

:::



:::demo 斑马纹

设置`stripe`开启斑马纹。

```html
<template>
    <Table :data="data" :columns="columns" stripe></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'email',
                        title: '邮箱'
                    },
                    {
                        key: 'phone',
                        title: '手机号'
                    },
                    {
                        key: 'create_date',
                        title: '创建日期'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        email: '18255678897@test.com',
                        phone: '18255678897',
                        create_date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        email: '18255678899@test.com',
                        phone: '18255678899',
                        create_date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        email: '18255678898@test.com',
                        phone: '18255678898',
                        create_date: '2016-10-02'
                    },
                    {
                        name: 'Sir',
                        email: '18255678896@test.com',
                        phone: '18255678896',
                        create_date: '2016-10-04'
                    },
                ],
               
            }
        },
    }
</script>

```

:::


:::demo 边框

设置`border`开启边框。

```html
<template>
    <Table :data="data" :columns="columns" stripe border></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'email',
                        title: '邮箱'
                    },
                    {
                        key: 'phone',
                        title: '手机号'
                    },
                    {
                        key: 'create_date',
                        title: '创建日期'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        email: '18255678897@test.com',
                        phone: '18255678897',
                        create_date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        email: '18255678899@test.com',
                        phone: '18255678899',
                        create_date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        email: '18255678898@test.com',
                        phone: '18255678898',
                        create_date: '2016-10-02'
                    },
                    {
                        name: 'Sir',
                        email: '18255678896@test.com',
                        phone: '18255678896',
                        create_date: '2016-10-04'
                    },
                ],
               
            }
        },
    }
</script>

```

:::


:::demo 固定表头

设置`height`当内容过多时固定表头滚动。

```html
<template>
    <Table :data="data" :columns="columns" stripe border height="400px"></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'email',
                        title: '邮箱'
                    },
                    {
                        key: 'phone',
                        title: '手机号'
                    },
                    {
                        key: 'create_date',
                        title: '创建日期'
                    }
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            for (let i = 0; i < 20; i++){
                this.data.push({
                    name: 'Name' + i,
                    email: 'Email' + i,
                    phone: 'Phone' + i,
                    create_date: '2018-01-' + i
                })
            } 
        }
    }
</script>

```

:::


:::demo 固定表头和列

设置`columns`中的`fixed`值为`left` `right`可以固定指定列到表格的左侧和右侧，当横向内容比较多时可以使用。

设置`width` `minWidth` `maxWidth`指定每一列的宽度、最小宽、最大宽。

设置`slot`可以实现自定义插槽内容。

```html
<template>
    <Table :data="data" :columns="columns" stripe border height="400px">
        <template slot="operation" slot-scope="data">
            <Button type="primary" size="mini">编辑</Button>
            <Button type="danger" size="mini">删除</Button>
        </template>
    </Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名',
                        fixed: 'left',
                        width: 100,
                    },
                    {
                        key: 'age',
                        title: '年龄',
                        width: 100,
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                        width: 100,
                    },
                    {
                        key: 'phone',
                        title: '手机号',
                        width: 100,
                    },
                    {
                        key: 'department',
                        title: '部门',
                        minWidth: 200,
                    },
                    {
                        key: 'address',
                        title: '地址',
                        minWidth: 200,
                    },
                    {
                        key: 'performance',
                        title: '绩效',
                        width: 120,
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                        width: 120,
                    },
                    {
                        key: 'operation',
                        title: '操作',
                        width: 140,
                        slot: 'operation',
                        fixed: 'right'
                    },
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            for (let i = 0; i < 20; i++){
                this.data.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    phone: 'Phone' + i,
                    department: '业务平台部/研发部/前端部',
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i
                })
            } 
        }
    }
</script>

```

:::


:::demo 多选

设置`columns`中某一列的`type`值为`selection`可以开启多选功能。

给`data`中的指定行数据设置`isChecked`可以指定默认该行的选中状态。

给`data`中的指定行数据设置`isDisabled`可以指定默认该行的禁用状态。

选择事件：

`@select`选中某一项时触发，返回值已选项和当前选择项；

`@cancel-select`取消选中某一项时触发，返回值已选项和当前选择项；

`@selection-change`选择项发生变化时触发，返回值已选项；

`@select-all`全选时触发，返回值已选项；

`@cancel-select-all`取消全选时触发，返回值已选项；


```html
<template>
    <Button @click="selectAll(true)">全选</Button>
    <Button @click="selectAll(false)">取消全选</Button>
    <Table :data="data" :columns="columns" stripe border ref="table"></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                    },
                    {
                        key: 'name',
                        title: '姓名',
                    },
                    {
                        key: 'age',
                        title: '年龄',
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'phone',
                        title: '手机号',
                    },
                    {
                        key: 'department',
                        title: '部门',
                    },
                    {
                        key: 'address',
                        title: '地址',
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                    },
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            for (let i = 0; i < 5; i++){
                this.data.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    phone: 'Phone' + i,
                    department: '业务平台部/研发部/前端部',
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i,
                    isChecked: i === 1,
                    isDisabled: i === 2
                })
            } 
        },
        methods: {
            selectAll(value){
                this.$refs.table.selectAll(value);
            },
        }
    }
</script>

```

:::



:::demo 排序

设置`columns`中某一列的`sort`值为`true` `ascend` `descend` `remote`可以开启排序功能，其中true为默认排序，ascend为升序，descend为降序，remote可以自己实现排序。只有一列可以排序，不能多列同时排序。

调用table暴漏的方法`sort`可以自主实现指定列的排序，该方法的第一个参数为指定列的`key`，第二个参数为`type`排序类型。

选择事件：

`@sort-change`排序变化时触发，当设置`sort`值为`remote`时可以自己实现排序，返回值为当前列和排序类型；


```html
<template>
    <Button @click="sortName">排序name列</Button>
    <Button @click="clearSort">清除排序</Button>
    <Table :data="data" :columns="columns" stripe border ref="table"></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名',
                        sort: true,
                    },
                    {
                        key: 'age',
                        title: '年龄',
                        sort: true,
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'phone',
                        title: '手机号',
                    },
                    {
                        key: 'department',
                        title: '部门',
                    },
                    {
                        key: 'address',
                        title: '地址',
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                        sort: true,
                    },
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            for (let i = 0; i < 5; i++){
                this.data.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    phone: 'Phone' + i,
                    department: '业务平台部/研发部/前端部',
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i
                })
            } 
        },
        methods: {
            sortName(){
                this.$refs.table.sort('name', 'descend');
            },
            clearSort(){
                this.$refs.table.clearSort();
            }
        }
    }
</script>

```

:::



:::demo 筛选

设置`columns`中某一列的`filters`可以筛选，值为数组。

`filterMultiple`定义筛选是多选还是单选。

选择事件：

`@filter-change`筛选值变化时触发，需要自定义筛选逻辑，单选时返回值为筛选项对应的value值、当前筛选列和所有筛选列的数组；多选时返回值为该列选中的value值的数组、当前筛选列和所有筛选列的数组。


```html
<template>
    <Table :data="data" :columns="columns" stripe border @filter-change="filterChange"></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名',
                    },
                    {
                        key: 'age',
                        title: '年龄',
                        filters: [
                            {
                                label: '大于22',
                                value: '22'
                            },
                            {
                                label: '大于24',
                                value: '24'
                            },
                            {
                                label: '大于30',
                                value: '30',
                            }
                        ],
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'phone',
                        title: '手机号',
                    },
                    {
                        key: 'department',
                        title: '部门',
                        filters: [
                            {
                                label: '前端部',
                                value: '前端部'
                            },
                            {
                                label: '运维部',
                                value: '运维部'
                            },
                            {
                                label: '测试部',
                                value: '测试部',
                            },
                            {
                                label: '数据库研发中心',
                                value: '数据库研发中心',
                            }
                        ],
                        filterMultiple: true,
                    },
                    {
                        key: 'address',
                        title: '地址',
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                    },
                ],
                data: [],
                allData: [],
                filter: {}
            }
        },
        mounted(){
            this.data = [];
            this.allData = [];
            let departments = ['前端部', '运维部', '测试部', '数据库研发中心'];
            for (let i = 0; i < 5; i++){
                this.allData.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    phone: 'Phone' + i,
                    department: '业务平台部/研发部/' + departments[i % 4],
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i
                })
            } 
            this.data = this.allData;
        },
        methods: {
            filterChange(columns, value, allColumns){
                this.filter[columns.key] = value;
                this.data = [];
                let _data = [];
                if(this.filter.age){
                    this.allData.forEach(item=>{
                        if(parseInt(item.age) > parseInt(this.filter.age)){
                            _data.push(item);
                        }
                    });
                }else{
                    _data = this.allData;
                }
                if(this.filter.department && this.filter.department.length){
                    _data.forEach(item=>{
                        this.filter.department.forEach(dept=>{
                            if(item.department.includes(dept)){
                                this.data.push(item);
                            }
                        })
                    })
                }else{
                    this.data = _data;
                }
            }
        }
    }
</script>

```

:::



:::demo 自定义模板

设置`columns`中某一列的`slot`可以自定义内容模板，`slotHead`可以自定义表头模板。

slot的`slot-scope`有两个参数当前行数据和当前列数据。

slotHead的`slot-scope`有一个参数当前列数据。


```html
<template>
    <Table :data="data" :columns="columns" stripe border>
        <template slot="operation" slot-scope="data">
            <Button type="danger" size="mini">删除</Button>
        </template>
        <template slot="operationHead" slot-scope="data">
            operationHead
        </template>
    </Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名',
                    },
                    {
                        key: 'age',
                        title: '年龄',
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                    },
                     {
                        key: 'operation',
                        title: '操作',
                        slot: 'operation',
                        slotHead: 'operationHead',
                     },
                ],
                data: [],
                allData: [],
                filter: {}
            }
        },
        mounted(){
            this.data = [];
            this.allData = [];
            for (let i = 0; i < 5; i++){
                this.allData.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    create_date: '2018-01-' + i
                })
            } 
            this.data = this.allData;
        },
    }
</script>

```

:::


:::demo 可展开

当表格内容比较多不能一次展示全时可以使用。

设置`columns`中某一列的`type`值为`expand`可实现展开功能。

可以定义`slot`为`expand`的模板实现展开模板的数据展示。

`slot-scope`为当前行和所有列的数据。


```html
<template>
    <Table :data="data" :columns="columns" stripe>
        <template slot="expand" slot-scope="data">
            <List :split="false" :hover="false">
                <ListRow>
                    <List-item  label="姓名" :value="data.row.name"></List-item>
                </ListRow>
                <ListRow>
                    <List-item  label="年龄" :value="data.row.age"></List-item>
                </ListRow>
                <ListRow>
                    <List-item  label="邮箱" :value="data.row.email"></List-item>
                </ListRow>
                <ListRow>
                    <List-item  label="部门" :value="data.row.department"></List-item>
                </ListRow>
                <ListRow>
                    <List-item  label="地址" :value="data.row.address"></List-item>
                </ListRow>
                 <ListRow>
                    <List-item  label="绩效" :value="data.row.performance"></List-item>
                </ListRow>
                <ListRow>
                    <List-item  label="创建时间" :value="data.row.create_date"></List-item>
                </ListRow>
            </List>
        </template>
    </Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                      type: 'expand',
                      width: 60,  
                    },
                    {
                        key: 'name',
                        title: '姓名',
                    },
                    {
                        key: 'age',
                        title: '年龄',
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                    },
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            let departments = ['前端部', '运维部', '测试部', '数据库研发中心'];
            for (let i = 0; i < 5; i++){
                this.data.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    department: '业务平台部/研发部/' + departments[i % 4],
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i
                })
            } 
        },
    }
</script>

```

:::



:::demo 表头分组

设置`columns`设置`children`可以设置多级表头。


```html
<template>
    <Table :data="data" :columns="columns" stripe border></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        key: 'name',
                        title: '姓名',
                    },
                    {
                        key: 'age',
                        title: '年龄',
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'department',
                        title: '部门',
                        children: [
                            {
                                key: 'department_one',
                                title: '一级部门'
                            },
                            {
                                key: 'department_two',
                                title: '二级部门'
                            },
                            {
                                key: 'department_three',
                                title: '三级部门'
                            }
                        ]
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                    },
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            let departments = ['前端部', '运维部', '测试部', '数据库研发中心'];
            for (let i = 0; i < 5; i++){
                this.data.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    department: '业务平台部/研发部/' + departments[i % 4],
                    department_one: '业务平台部',
                    department_two: '研发部',
                    department_three: departments[i % 4],
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i
                })
            } 
        },
    }
</script>

```

:::


:::demo 多行多列表格

设置`span-method`属性可实现多行多列表格。

该方法参数对象有4个：

- `row`: 当前行
- `column`: 当前列
- `rowIndex`: 当前行索引
- `columnIndex`: 当前列索引

该方法可以返回一个包含两个数字的数组，第一个值为`rowspan`，第二个值为`colspan`；也可以返回一个对象，键为`rowspan`和`colspan`。


```html
<template>
    <Table :data="data" :columns="columns" border :span-method="spanMethod"></Table>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        title: '模块',
                        key: 'module'
                    },
                    {
                        title: '一级类目',
                        key: 'oneLevelName'
                    },
                    {
                        title: '权重',
                        key: 'weight'
                    },
                    {
                        title: '标准评分',
                        key: 'score'
                    },
                    {
                        title: '权重得分',
                        key: 'weightScore'
                    }
                ],
                data: [
                    {
                        module: '项目基本信息',
                        oneLevelName: '项目基本概况',
                        weight: '20%',
                        score: '80',
                        weightScore: '16',
                    },
                    {
                        module: '项目基本信息',
                        oneLevelName: '项目团队信息',
                        weight: '30%',
                        score: '90',
                        weightScore: '27',
                    },
                    {
                        module: '项目基本信息',
                        oneLevelName: '项目热度',
                        weight: '50%',
                        score: '100',
                        weightScore: '50',
                    },
                    {
                        module: '合计',
                        oneLevelName: '合计',
                        weight: '100%',
                        score: '270',
                        weightScore: '93',
                    }
                ],
            }
        },
        methods: {
            spanMethod({ row, column, rowIndex, columnIndex }){
                if (rowIndex === 0 && columnIndex === 0) {
                    return [3, 1];
                } else if([1, 2].includes(rowIndex) && columnIndex === 0) {
                    return [0, 0];
                }
                if (rowIndex === 3 && columnIndex === 0) {
                    return {
                        rowspan: 1,
                        colspan: 2
                    };
                } else if(rowIndex === 3 && columnIndex === 1){
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        }
    }
</script>

```

:::


:::demo 加载中

设置`loading`属性可以控制加载中的状态，实现异步数据加载时的loading状态。


```html
<template>
    <Table :data="data" :columns="columns" stripe border :loading="loading"></Table>
    <h4>切换加载中的状态</h4>
    <m-switch v-model="loading"></m-switch>
</template>
<script>
    export default {
        data(){
            return {
                loading: false,
                columns: [
                    {
                        key: 'name',
                        title: '姓名',
                    },
                    {
                        key: 'age',
                        title: '年龄',
                    },
                    {
                        key: 'email',
                        title: '邮箱',
                    },
                    {
                        key: 'department',
                        title: '部门',
                        children: [
                            {
                                key: 'department_one',
                                title: '一级部门'
                            },
                            {
                                key: 'department_two',
                                title: '二级部门'
                            },
                            {
                                key: 'department_three',
                                title: '三级部门'
                            }
                        ]
                    },
                    {
                        key: 'create_date',
                        title: '创建日期',
                    },
                ],
                data: [],
            }
        },
        mounted(){
            this.data = [];
            let departments = ['前端部', '运维部', '测试部', '数据库研发中心'];
            for (let i = 0; i < 5; i++){
                this.data.push({
                    name: 'Name' + i,
                    age: 20 + parseInt(i),
                    email: 'Email' + i,
                    department: '业务平台部/研发部/' + departments[i % 4],
                    department_one: '业务平台部',
                    department_two: '研发部',
                    department_three: departments[i % 4],
                    address: '北京市海淀区上地三街西口',
                    performance: '10000' + i,
                    create_date: '2018-01-' + i
                })
            } 
        },
    }
</script>

```

:::


:::demo 异步加载数据

带分页的异步数据加载。

```html
<template>
    <Table :data="data" :columns="columns" :hover="hover" :loading="loading"></Table>
    <Page :total="pageInfo.total" :page="pageInfo.page" :pageSize="pageInfo.pageSize" background @change="pageChange" />
</template>
<script>
    export default {
        data(){
            return {
                hover: true,
                columns: [
                    {
                        key: 'name',
                        title: '姓名'
                    },
                    {
                        key: 'email',
                        title: '邮箱'
                    },
                    {
                        key: 'phone',
                        title: '手机号'
                    },
                    {
                        key: 'create_date',
                        title: '创建日期'
                    }
                ],
                data: [],
                loading: true,
                pageInfo: {
                    page: 1,
                    total: 50,
                    pageSize: 10,
                }       
            }
        },
        mounted(){
            this.loadData(this.pageInfo.page, this.pageInfo.pageSize);
        },
        methods: {
            loadData(page, pageSize){
                this.loading = true;
                let startIndex = (page - 1) * pageSize;
                setTimeout(()=>{
                    this.data = [];
                    for(let i = startIndex; i < startIndex + 10; i++){
                        let obj = {
                            name: 'Name' + i,
                            email: 'Email' + i,
                            phone: 'Phone' + i,
                            create_date: 'create_date' + i,
                        };
                        this.data.push(obj);
                    }
                    this.loading = false;
                }, 1000);
                
            },
            pageChange(page, pageSize){
                this.loadData(page, pageSize);
            }
        }
    }
</script>

```

:::


## API

### Table props

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ---- |
| data | Array | 表格数据 | - |
| columns | Array | 表格列配置，详细见`columns`描述 | - |
| border | Boolean | 表框 | false |
| stripe | Boolean | 斑马纹 | false |
| hover | Boolean | 是否开启行hover效果 | true |
| size | String | 尺寸，可选值 `mini` `small` `large`或者不设置 | - |
| height | String, Number| 表格高度，当表格内容过多时可以设置，当内容超过此高度会滚动 | - |
| emptyText | String | 表格数据为空时提示信息 | 暂无数据 |
| rowClassName | String, Function | 行类名的回调方法，参数为行数据和行的索引下标；也可以设置为字符串为每一行添加统一类名 | - |
| showHeader | Boolean | 是否显示表头 | true |
| size | String | 表格尺寸，可选值 `mini` `small` `large`或者不设置 | - |
| loading | Boolean | 表格数据加载状态 | - |
| span-method | Function | 该方法设置多行多列表格，详见示例 | - |


### Table event

| 事件名 | 说明 | 返回值 |
| ---- | ---- | ---- |
| select | 多选Checkbox被勾选时触发，返回当前行数据和所有被选行数据 | row:当前行数据， selection：所有被选行数据 |
| cancel-select | Checkbox取消选中时触发，返回当前行数据和所有被选行数据 | row:当前行数据， selection：所有被选行数据 |
| select-all | 全选被选中时触发，返回所有被选行数据 | selection：所有被选行数据 |
| cancel-select-all | 全选被取消时触发，返回所有被选行数据 | selection：所有被选行数据 |
| selection-change | Checkbox选择状态变化时触发，返回所有被选行数据 | selection：所有被选行数据 |
| sort-change | 排序变化时触发，返回当前列数据和排序类型，可以通过此事件自定义排序 | column：当前列数据，type:当前排序类型 |
| filter-change | 筛选状态变化时触发，返回当前筛选列，筛选列选中的value，所有被筛选列。当单选筛选时value为字符串，多选筛选时value为数组 | column：当前列数据，value:当前筛选的value值，filters:所有被筛选列 |
| expand-change | 展开行数据时触发，返回当前行数据，展开状态 | row:当前行数据，expand:展开状态 |
| row-click | 行点击时触发，返回当前行数据 | row:当前行数据 |
| row-dbclick | 行双击时触发，返回当前行数据 | row:当前行数据 |
| cell-click | 单击某个单元格时触发，返回当前行数据，当前列数据 | row:当前行数据，column：当前列数据 |
| cell-dbclick | 双击某个单元格时触发，返回当前行数据，当前列数据 | row:当前行数据，column：当前列数据 |
| head-click | 点击表头时触发，返回当前列数据 | column：当前列数据 |


### Table Slot

| 名称 | 说明 |
| ---- | ---- |
| footer | 表格底部内容 |


### Table Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| sort | -- | -- |



### Column props

列描述数据对象。

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | String | 列类型，可选值 `index` `selection` `expand` `html`，值为`selection`时可以设置`isChecked` `isDisabled`控制全选Checkbox的状态 | - |
| title | String | 列表头显示文字 | - |
| key | String | 对应列内容的字段名 | - |
| width | String, Number | 列宽度 | - |
| minWidth | String, Number | 列最小宽度 | - |
| maxWidth | String, Number | 列最大宽度 | - |
| align | String | 对齐方式，可选值 `left` `center` `right` | left |
| className | String| 列类名 | - |
| fixed | String | 是否固定列，可选值`left` `right` | - |
| ellipsis | Boolean | 开启后文本不换行，超出时显示省略号 | - |
| tooltip | Boolean | 开启后文本不换行，超出显示省略号，用Tooltip组件显示完整信息 | - |
| sort | String, Boolean | 列排序，可选值 `true` `ascend` `descend` `remote`, 值为true是开始排序功能，值为ascend默认显示升序排列，descend默认显示降序排列，remote自定义排序，可以监听`sort-change`事件实现 | - |
| filters | Array | 筛选数据，例如：`[{label: '筛选一', value: '0'}]`的形式，每项必须包含label和value，此时可以监听`filter-change`事件实现数据筛选 | - |
| filterMultiple | Boolean | 是否开启多选筛选 | - |
| slot | String | 自定义表格数据模板的插槽name名称，`slot-scope`数据包括`row`行数据，`column`列数据 | - |
| slotHead | String | 自定义表格表头数据模板的插槽name名称，`slot-scope`数据包括`column`列数据 | - |
| children | Array | 表头嵌套 | - |

### Data props

data数据说明。

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ---- |
| isChecked | Boolean | 该行是否是选中状态 | - |
| isDisabled | Boolean | 该行是否禁用Checkbox | - |
