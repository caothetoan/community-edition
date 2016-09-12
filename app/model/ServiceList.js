Ext.define('Rambox.model.ServiceList', {
	 extend: 'Ext.data.Model'

	,fields: [{
		 name: 'id'
		,type: 'string'
	},{
		 name: 'logo'
		,type: 'string'
	},{
		 name: 'name'
		,type: 'string'
	},{
		 name: 'description'
		,type: 'string'
	},{
		 name: 'url'
		,type: 'string'
	},{
		 name: 'type'
		,type: 'string'
	},{
		 name: 'js_unread'
		,type: 'string'
		,defaultValue: ''
	},{
		 name: 'titleBlink'
		,type: 'boolean'
		,defaultValue: false
	},{
		 name: 'allow_popups'
		,type: 'boolean'
		,defaultValue: false
	},{
		 name: 'userAgent'
		,type: 'string'
		,defaultValue: ''
	},{
		 name: 'note'
		,type: 'string'
		,defaultValue: ''
	}]
});
