$(document).ready(function () {
  $quotes = $('.quotes')
  $quoteButton = $('.quoteButton')
  $tweetButton = $('a')
  $container = $('#container')
  $twitDesc = $('meta[name="twitter:description"]')
  $quoteButton.on('click', function () {
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=<required>', // The URL to the API. You can get this in the API page of the API you intend to consume
      method: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function (data) {
        $quotes.html(data.quote)
        $container.html('')
        $twitDesc.attr('content', data.quote)
        // twttr.widgets.createShareButton(
        //   '/',
        //   document.getElementById('container'),
        //   {
        //     size: 'large',
        //     text: data.quote
        //   }
        // )

        // $tweetButton.data('text', data.quote)
        // .replace(/\s/g, '%20')
      },
      // error: function(err) {
      //   alert(err);
      // },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-Mashape-Authorization', 'Gy5qvGErt9mshInarkyuo6B7ghA2p1fd5P1jsnLTfwF5pgUCMj') // Enter here your Mashape key
      }
    })
  })
})
