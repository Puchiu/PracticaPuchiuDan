$(".subscribeButton").click(
    function () {
    
        if ($(this).text() == "Subscribed")
            $(this).text("Unsubscribed")
        else
            $(this).text("Subscribed")
    })

$(".buttonGoTo").click(
    function () {

        window.location.href = '/Event'

    })
