/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autosubscribe:true,

  attributes: {
  	nombre:{type:'string',required:true},
  	apellido:{type:'string',required:true}

  }
};

