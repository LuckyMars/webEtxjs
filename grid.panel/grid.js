 var communityHandleGrid = Ext.create("Ext.grid.Panel",{
        scrollable: 'y',
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

        region: 'center',
        viewConfig :{enableTextSelection:true},
        columns: [
            {
                text: "账号",
                align: 'center',
                flex: 1,
            },
            {
                text: "任务名称",
                align: 'center',
                flex: 1,
            },
            {
                text: "积分名称",
                align: 'center',
                flex: 1,
            },
            {
                text: "开始数值",
                align: 'center',
                flex: 1,
            },
            {
                text: "结束数值",
                align: 'center',
                flex: 1,
            },
           
        ]
       
    });

Ext.create('Ext.Viewport', {
        items: [
            {
                layout: 'fit',
                region: 'center',
                items: [communityHandleGrid]
            }
        ],

    });