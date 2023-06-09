$(document).ready(() => {
    $('.container-weather').hide();

    $('form #btnTiempo').click((e) => {
        e.preventDefault();
        let txtTiempo = $('#txtTiempo').val();
        if (txtTiempo == '' || txtTiempo.length == 0) {
            alert('Debes ingresar una ciudad!!!');
        } else {
            $.ajax({
                type: "GET",
                url: "https://api.openweathermap.org/data/2.5/weather",
                data: {
                    q: txtTiempo,
                    appid: "e4f0908d5653d8aeedb27e59d34088a8"
                },
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    let ciudad = $('#ciudad');
                    let temp = $('#temp');
                    let icon = 'https://openweathermap.org/img/wn/';

                    $('.container-weather').fadeOut(1000, function () {
                        ciudad.html(`Ciudad: ${res.name}`);
                        temp.html(`Temperatura: ${res.main.temp - 273.15}°C`);
                        $('.container-weather img').attr('src', `${icon + res.weather[0].icon}.png`);
                        $('.container-weather').css({
                            display: 'flex',
                            width: '20rem',
                            height: '20rem',
                            flexDirection: 'column'
                        }).fadeIn(1000);
                    });
                },
                error: (xhr, status, error) => {
                    console.log('error ->', error);
                }
            });
        }
    });
});
