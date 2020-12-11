Ext.onReady(function () {


//1.定义Model
Ext.define("MyApp.model.User", {
    extend: "Ext.data.Model",
    fields: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'phone', type: 'string' }
    ]
});

//2.创建store
var provice = [//本地数据
    ['张三', "20", "123456456"],
    ['李四', "21", "141414"],
    ['王五', "22", "141414141"],
    ['赵柳', "23", "14141414"]
];
var store = Ext.create("Ext.data.Store", {
  model: "MyApp.model.User",
  autoLoad: true,
  pageSize: 5,
  proxy: {
     
      type: "memory",//获取本地数据
      data: provice,
      reader: "array"
  }
});

//3.创建grid
var grid = Ext.create("Ext.grid.Panel", {
    xtype: "grid",
    store: store,
    width: 500,
    height: 200,
    margin: 30,
    columnLines: true,
    renderTo: Ext.getBody(),
    selModel: {
        injectCheckbox: 0,
        mode: "SIMPLE",     //"SINGLE"/"SIMPLE"/"MULTI"
        checkOnly: true     //只能通过checkbox选择
    },
    selType: "checkboxmodel",
    columns: [
        { text: '姓名', dataIndex: 'name' },
        {
            text: '年龄', dataIndex: 'age', xtype: 'numbercolumn', format: '0',
            editor: {
                xtype: "numberfield",
                decimalPrecision: 0,
                selectOnFocus: true
            }
        },
        { text: '电话', dataIndex: 'phone', editor: "textfield" }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],
    listeners: {
        itemdblclick: function (me, record, item, index, e, eOpts) {
            //双击事件的操作
        }
    },
    bbar: { xtype: "pagingtoolbar", store: store, displayInfo: true }
});

Ext.create('Ext.Viewport', {
        items: [
            {
                layout: 'fit',
                region: 'center',
                items: [grid]
            }
        ],

    });

});