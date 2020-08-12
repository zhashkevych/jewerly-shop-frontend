const url = 'http://164.90.218.246:8001/admin';

$.ajax({
    type: 'GET',
    url: `${url}` + '/products',
    dataType: "json",
    beforeSend: function () {},
    error: function () {
        console.log('error')
    },
    success: function () {
        console.log('success')
    },
});