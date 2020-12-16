Ext.onReady(function(){


    var states = Ext.create('Ext.data.Store', {
        fields: ['abbr', 'name'],
        data : [
            {"abbr":"AL", "name":"Alabama"},
            {"abbr":"AK", "name":"Alaska"},
            {"abbr":"AZ", "name":"Arizona"}
        ]
    });

    Ext.create('Ext.Viewport', {
        
        items: [
        {
            xtype: 'textfield',
            fieldLabel: '编辑框',
            allowBlank: false 
        },
        {
            xtype: 'combo',
            fieldLabel: '下拉框',
            store: states,
            displayField: 'name',
            valueField: 'abbr'
        },
        {
            xtype: 'datefield',
            fieldLabel: '日期选择框',
            value: new Date()
        }
    ]
    });
})