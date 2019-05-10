$(function() {
    $('#upload-file-btn').click(function() {
        var form_data = new FormData($('#upload-file')[0]);
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                console.log('Success!');
                console.log(data);

                var prediction = eval(JSON.stringify(data.prediction));

                console.log(prediction);

                $(".predict").append(`<p> Our cloud prediction: ${prediction}`);
            },
        });
    });
});