function closeModal(){
  $('#modal-bg').fadeOut();
  $('#modal').fadeOut();
}

function openModal(name, rating, reference, value){
  $('#modal-bg').fadeIn();
  $('#modal').fadeIn();
  var content = '';
  content += '<div class="modal-text">Supplier: <div class="light">'+name+'</div></div>';
  content += '<div class="modal-text">Reference: <div class="light">'+reference+'</div></div>';
  content += '<div class="modal-text">Value: <div class="light">£'+value+'</div></div>';
  content += '<div class="modal-text" style="margin-top: 10px;">Rating: ';
    content += '<div style="display: flex; align-items: center;">';
      content += '<div class="pound-circle '+(rating > 0 ? "active-pound-circle" : "")+'">£</div>';
      content += '<div class="pound-circle '+(rating > 1 ? "active-pound-circle" : "")+'">£</div>';
      content += '<div class="pound-circle '+(rating > 2 ? "active-pound-circle" : "")+'">£</div>';
      content += '<div class="pound-circle '+(rating > 3 ? "active-pound-circle" : "")+'">£</div>';
      content += '<div class="pound-circle '+(rating > 4 ? "active-pound-circle" : "")+'">£</div>';
    content += '</div>';
  content += '</div>';
  content += '<button class="gray-button" onClick="closeModal()">Close</button>';
  content += '<button class="blue-button">More</button>';
  $('#modal-content').html(content);
}
