/*const url = 'http://164.90.218.246:8001/admin';

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
*/

let testProductObject = {
    data: [
        {
            id: 1,
            title: 'Test RING 1',
            description: 'Test RING 1 description description description',
            material: 'Silver 999',
            current_price: 2122,
            previous_price: 10,
            code: '123123_CODE',
            image: {
                url: "https://cdn.silverbene.com/media/catalog/product/cache/5196f519d2759624b018ede98e5f815b/B/M/BME_555183874171_1_.jpg",
                alt_test: ''
            },
            category_id: 'rings'
        },
        {
            id: 2,
            title: 'Test RING 2',
            description: 'Test RING 2 description description description',
            material: 'Silver 999',
            current_price: 21222,
            previous_price: 1011,
            code: '123123_CODE',
            image: {
                url: "https://cdn.silverbene.com/media/catalog/product/cache/5196f519d2759624b018ede98e5f815b/B/M/BME_555183874171_1_.jpg",
                alt_test: ''
            },
            category_id: 'rings'
        },

    ]
};


for (let i = 0; i < testProductObject.data.length; i++) {

    document.body.onload = addElement;
    let my_div = newDiv = null;

    function addElement() {
        for (let j = 0; j < testProductObject.data.length; j++) {

            let newDiv = document.createElement("div");
            newDiv.innerHTML = testProductObject.data[i].title;

            my_div = document.getElementById("org_div1");
            document.getElementById('testResultOne').appendChild(newDiv);
        }

    }
}


/*function create() {
    for (let i = 0; i < testProductObject.data.length; i++) {
        let h1 = document.createElement('h1');
        h1.textContent = testProductObject.data[0].title;
        h1.setAttribute('class', 'item_1');
        document.getElementById('testResultOne').appendChild(h1);

        console.log(testProductObject.data[i])
    }

}

create();*/


/*for (let i = 0; i < testProductObject.data.length; i++) {
    testProductObject.data[i];
    console.log(testProductObject.data[i])
}*/

