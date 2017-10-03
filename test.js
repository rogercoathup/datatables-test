(function( $ ) {
	'use strict';

	var editor;

	/**
	 * [description]
	 * @return {[type]} [description]
	 */
	$(function() {

		editor = new $.fn.dataTable.Editor( {
    	table: '#example',
			fields: [ {
							label: "First name:",
							name: "first_name"
					}, {
							label: "Last name:",
							name: "last_name"
					}, {
							label: "Position:",
							name: "position"
					}, {
							label: "Office:",
							name: "office"
					}, {
							label: "Extension:",
							name: "extn"
					}, {
							label: "Start date:",
							name: "start_date",
							type: "datetime"
					}, {
							label: "Salary:",
							name: "salary"
					}
			]

		} );

		$('#example').DataTable( {
			dom: 'Bfrtip',
			select: true,
			buttons: [
					{ extend: 'create', editor: editor },
					{ extend: 'edit',   editor: editor },
					{ extend: 'remove', editor: editor }
			]
		});

	});




})( jQuery );
