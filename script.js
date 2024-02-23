$(document).ready(function() {
    $('#home').css({'background-color': 'orange', 'padding': '5px 10px', 'border-radius': '5px'});
   
    $('#home').click(function(e) {
    })

    $('#about').click(function(e) {
        e.preventDefault();

        $.get('about.txt', function(data, status) {
            if(status == 'success') {
                let about = `<h1>About Me</h1>
                            <p>${data}</p>
                            `;
                $('.main-content').html(about);
                $('.main-content h1').animate({fontSize: '30px'}, 'slow');
            }
        })
        $('#home').css({'background-color': 'rgb(29, 3, 86)'});
        $('#project').css({'background-color': 'rgb(29, 3, 86)'})
        $(this).css({'background-color': 'orange', 'padding': '5px 10px', 'border-radius': '5px'})
    });

    $('#project').click(function(e) {
        e.preventDefault();

        $('.main-content').html('<h1>Projects Me</h1>');

        $.get('project.json', function(data, status) {
            if(status == 'success') {
                let dataImg = data.img;
                dataImg.forEach(img => {
                    let imgFile = `<img src="img/${img}" width='200' height='150'>
                                    `;
                    $('.main-content').append(imgFile);
                });

            }
        })

        $('.main-content h1').animate({fontSize: '30px'}, 'slow');
        $(this).css({'background-color': 'orange', 'padding': '5px 10px', 'border-radius': '5px'});
        $('#home').css({'background-color': 'rgb(29, 3, 86)'})
        $('#about').css({'background-color': 'rgb(29, 3, 86)'})
    })
});