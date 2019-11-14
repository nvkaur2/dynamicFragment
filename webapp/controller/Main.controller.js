sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/test/practice/model/model",
	'sap/ui/core/Fragment',
	'sap/m/Dialog',
	'sap/m/StandardListItem',
	'sap/m/Button',
	'sap/m/List',
	'sap/m/ButtonType'
], function (Controller, Model, Fragment, Dialog, StandardListItem, Button, List, ButtonType) {
	"use strict";

	return Controller.extend("sap.test.practice.controller.Main", {
		onInit: function () {
			var model = Model.createJsonModel();

			this.getView().setModel(model);
		},

		onPress: function (oEvent) {
			var oQuickView = new Fragment("idFrag", {
				fragmentName: "sap.test.practice.view.Table",
				type: "XML"
			});
			var content = this.getView().byId("idCon");
			content.addContent(oQuickView);
		}

	});

});