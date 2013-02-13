
Ext.create("Ext.Panel", {})
Ext.create("Ext.Button", {})

/**
 * Ext.override which adds to an existing class
 * 
 * 1. a override definition (using Ext.override or Ext.define w override processor)
 * 
 * 2. bootstrap.js - tells Sencha Eclipse Plugin you have type overrides
 * 
 * 3. on save of bootstrap.js SEP knows about these overrides
 * 
 * 
*/
	
// example bootstrap.js 

var typeExtensions = {
     //
	 // Ext override extensions
     //
     'Ext.Panel' : ['MyApp.MyPanelExtensions'], // Ext.define style of override
     'Ext.Button' : ['app.MyButtonExtensions'] // Ext.override style of override
}
 

