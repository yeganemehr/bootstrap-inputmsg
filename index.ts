/// <reference path="./index.d.ts"/>

import * as $ from "jquery";
function inputMsg(options:Options|string) {
	function removeClasses(parent){
		parent.removeClass('has-error');
		parent.removeClass('has-success');
		parent.removeClass('has-warning');
		parent.removeClass('has-info');
	}
	function addMessage(element:JQuery, options:Options){
		if (!options.type) {
			options.type = "error";
		}
		element.each(function() {
			const $parent = $(this).parents(".form-group");
			removeClasses($parent);
			$parent.addClass("has-" + options.type);
			$('.help-block',$parent).remove();
			$parent.append("<span class=\"help-block\">" + options.message + "</span>");
		});
	}
	function reset(element:JQuery){
		element.each(function(){
			const $parent = $(this).parents(".form-group");
			removeClasses($parent);
			$('.help-block',$parent).remove();
		});
	}
	if (typeof options == "object") {
		addMessage(this,options);
	} else {
		reset(this);
	}
}
$.fn.inputMsg = inputMsg;