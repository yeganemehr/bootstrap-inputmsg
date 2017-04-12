/// <reference types="jquery"/>

type error = "error" | "success" | "warning" | "info";
interface Options{
	type?:error;
	message:string;
}
interface JQuery {
	inputMsg(options:Options|"reset");
}