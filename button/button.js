Ext.onReady(function(){

    Ext.create("Ext.Viewport",{
        items:[
            {
                xtype:'panel',
                padding: 8,
                defaults: {
                    xtype: 'button',
                    margin: 9
                },
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                items: [
                    {  text: 'normal',handler:function(){
                        Ext.MessageBox.alert("提示", "Hello World");
                    }},
                    {  text: 'normal' },
                    {  text: 'normal' },
                    {  text: 'normal' },
                    {  text: 'normal' },
                    {  text: 'normal' },
                    {  text: 'normal' }
                ]
            }
            
        ]
    })
})