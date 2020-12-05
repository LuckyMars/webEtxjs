 var communityHandleGrid = Ext.create("Ext.grid.Panel",{
        scrollable: 'y',
        id: 'enclosureGrid',
        store: null,
        split: false,
        region: 'center',
        width: '98.5%',
        height : 950,
        autoHeight:true,
        margin: '20 0 20 0',
        autoScroll: true,
        frame: true,
        columnLines: true,
        multiSelect: false,
        selModel: {
            selType: 'checkboxmodel',
            mode: 'Multi'
        },
        store: listStore,
        region: 'center',
        viewConfig :{enableTextSelection:true},
        columns: [
            {
                text: "账号",
                align: 'center',
                flex: 1,
                dataIndex: "account"
            },
            {
                text: "任务名称",
                align: 'center',
                flex: 1,
                dataIndex: "taskName"
            },
            {
                text: "积分名称",
                align: 'center',
                flex: 1,
                dataIndex: "pointName"
            },
            {
                text: "开始数值",
                align: 'center',
                flex: 1,
                dataIndex: "startValue"
            },
            {
                text: "结束数值",
                align: 'center',
                flex: 1,
                dataIndex: "endValue"
            },
            {
                text: "开始日期",
                align: 'center',
                flex: 1,
                dataIndex: "startTime",
                renderer:Ext.util.Format.dateRenderer('Y-m-d h:m:s')

            },

            {
                text: "结束日期",
                align: 'center',
                flex: 1,
                dataIndex: "endTime",
                renderer:Ext.util.Format.dateRenderer('Y-m-d h:m:s')

            },
        ]
       
    });
显示列表
Ext.create('Ext.Viewport', {
        items: [
            {
                layout: 'fit',
                region: 'center',
                items: [communityHandleGrid]
            }
        ],

    });