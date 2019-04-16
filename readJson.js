jQuery.ajax({
    url: "https://api.github.com/users/unipartdigital",
    type: "GET",

    contentType: 'application/json; charset=utf-8',
    success: function(resultData) {
        //here is your json.
          // process it
          if(resultData) {
            var json_data;
            $.each(resultData, function(i,info){
            json_data = '<tr class="output">'+
                '<td valign="top">'+
                '<div class="output">' + i + ": " + info + '</div>'+
                '</td>'+
                '</tr>';
            $(json_data).appendTo('#demo-table-content');
            });
            } else {
            json_data += '<tr>'+
                '<td valign="top">No Data Found</td>'+
                '</tr>';
            $(json_data).appendTo('#demo-table-content');
            }		

    },
    error : function(jqXHR, textStatus, errorThrown) {
    },

    timeout: 120000,
}); 