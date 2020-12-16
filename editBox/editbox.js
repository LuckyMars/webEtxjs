Ext.onReady(function(){

    Ext.create('Ext.Viewport', {
        
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name',
            allowBlank: false 
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email Address',
        }]
    });
})