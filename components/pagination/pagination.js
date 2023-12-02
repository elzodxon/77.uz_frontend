/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var json = {
  Product: [
    {
      Key1: 'Value1 A',
    },
    {
      Key1: 'Value1 B',
    },
    {
      Key1: 'Value1 C',
    },
    {
      Key1: 'Value1 D',
    },
    {
      Key1: 'Value1 E',
    },
    {
      Key1: 'Value1 F',
    },
    {
      Key1: 'Value1 G',
    },
    {
      Key1: 'Value1 H',
    },
    {
      Key1: 'Value1 I',
    },
  ],
}

$('#list').pagination({
  dataSource: json.Product, 
  pageSize: 4, 
  
  callback: function (data, pagination) {
    let wrapper = $('#list .wrapper').empty()
    $.each(data, function (i, f) {
      $('#list .wrapper').append('<h1>Key1: ' + f.Key1 + '</h1>')
    })
  },
})

