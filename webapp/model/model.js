sap.ui.define(["sap/ui/model/json/JSONModel"], function(JsonModel){
	return {
		createJsonModel : function(){
			var jsonModel =  new JsonModel();
			jsonModel.loadData("model/mockdata/products.json");
			return jsonModel;
		}
	};
});