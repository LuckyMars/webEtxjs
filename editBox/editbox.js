Ext.onReady(function(){

    Ext.create('Ext.Viewport',{
        items:[{
            layout:'fit',
            region:'center',
            items:[{fieldLabel:'test',type:'textfield'}]
        }]
    })
})