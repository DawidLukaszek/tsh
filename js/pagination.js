//define pages count, currently to hardcode
var pages_count = 2;

function loadPage(page){
  $.getJSON( "inc/pages/page"+page+".json", function( json ) {
      var page_content = '';

      for(data in json){
        page_content += '<div class="row content-row" onClick="openModal(\''+json[data].name+'\', \''+json[data].rating+'\', \''+json[data].reference+'\', \''+json[data].value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+'\')">';
          page_content += '<div class="el first-el">'+json[data].name+'</div>';
          page_content += '<div class="el second-el">';
            page_content += '<div class="pound-circle '+(json[data].rating > 0 ? "active-pound-circle" : "")+'">£</div>';
            page_content += '<div class="pound-circle '+(json[data].rating > 1 ? "active-pound-circle" : "")+'">£</div>';
            page_content += '<div class="pound-circle '+(json[data].rating > 2 ? "active-pound-circle" : "")+'">£</div>';
            page_content += '<div class="pound-circle '+(json[data].rating > 3 ? "active-pound-circle" : "")+'">£</div>';
            page_content += '<div class="pound-circle '+(json[data].rating > 4 ? "active-pound-circle" : "")+'">£</div>';
          page_content += '</div>';
          page_content += '<div class="el third-el">'+json[data].reference+'</div>';
          page_content += '<div class="el fourth-el">£'+json[data].value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+'</div>';
        page_content += '</div>';
      }

      $('#page-content').html('').html(page_content);
  });

  pagination(page);
}

function pagination(page){
  var pagination = '';
  if(page != 1){ //if not loaded first page
    var prevPage = page - 1;
    var disabled_prev = 0;
  }else{
    var disabled_prev = 1;
  }
  pagination += '<div class="page-button '+(disabled_prev == 1 ? 'disabled' : '')+'" '+(disabled_prev == 0 ? 'onClick="loadPage('+prevPage+')"' : '')+'><i class="fas fa-angle-left"></i></div>';
  for (i = 1; i <= pages_count; i++) { //display all pages buttons
    pagination += '<div class="page-button '+(i == page ? 'active-page' : '')+'" '+(i != page ? 'onClick="loadPage('+i+')"' : '')+'">'+i+'</div>';
  }
  if(page != pages_count && pages_count > 1){ //if not loaded last page and if pages count is greater than one
    var nextPage = page + 1;
    var disabled_next = 0;
  }else{
    var disabled_next = 1;
  }
  pagination += '<div class="page-button '+(disabled_next == 1 ? 'disabled' : '')+'" '+(disabled_next == 0 ? 'onClick="loadPage('+nextPage+')"' : '')+'><i class="fas fa-angle-right"></i></div>';
  $('#pagination').html(pagination);
}
