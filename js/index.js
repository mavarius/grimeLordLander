$(document).ready(function () {
  // SEND MAIL
  $(function () {
    var form = $('#ajax-contact')
    var formMessages = $('#form-messages')

    $(form).submit(function(event) {
      event.preventDefault()

      var formData = $(form).serialize()

      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      }).done(function(response) {
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        $(formMessages).text(response);

        $('#name').val('')
        $('#email').val('')
      }).fail(function(data) {
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your request could not be sent.');
        }
      })
    })
  })
})

// sass --watch scss:css
// python -m SimpleHTTPServer
