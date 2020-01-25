$(function(){
  function buildHTML(message){
    if ( message.image) {
    var html = `
      <div class="main-group">
      <div class="main-group_name">
      ${message.user_name}
      </div>
      <div class="main-group_message">
      ${message.created_at}
      </div>
      </div>
      <div class="main-massage">
      <p class="lower-message__content">
      ${message.content}
      </p>
      <img src=${message.image} >
    </div>`
    return html;
    } else {
      var html = `
      <div class="main-group">
      <div class="main-group_name">
      ${message.user_name}
      </div>
      <div class="main-group_message">
      ${message.created_at}
      </div>
      </div>
      <div class="main-massage">
      <p class="lower-message__content">
      ${message.content}
      </p>
      </div>`
      return html;
    };
  }
$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    console.log(html)
    
    $('.main').append(html);  
    $('form')[0].reset();
    $('.main').animate({ scrollTop: $('.main')[0].scrollHeight});    
    $('.footer_send_btn').prop('disabled', false);
  })
  .fail(function() {
  alert("メッセージ送信に失敗しました");
    });
  })
});
  