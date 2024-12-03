$(document).ready(function () {
    // Завдання 1
    $('#html-btn').click(() => $('#text').html('<b>Новий текст</b>'));
    $('#css-btn').click(() => $('#text').css('color', 'red'));
    $('#val-btn').click(() => alert($('#input').val()));
    $('#attr-get-btn').click(() => alert($('#input').attr('value')));
    $('#attr-set-btn').click(() => $('#input').attr('value', 'Новий текст'));
    $('#attr-multiple-btn').click(() => $('#input').attr({ placeholder: 'Введіть нове', title: 'Новий заголовок' }));
    $('#attr-func-btn').click(() => $('#input').attr('value', (i, oldValue) => oldValue + ' + функція'));
    $('#remove-attr-btn').click(() => $('#input').removeAttr('value'));

    // Завдання 2
    $('#append-btn').click(() => $('#task2').append('<div>Новий елемент</div>'));
    $('#replace-btn').click(() => $('#box1').replaceAll('#box3'));
    $('#position-btn').click(() => alert($('#box2').position().top));

    // Завдання 3
    $('#add-btn').click(() => $('#task3').addClass('highlight'));
    $('#parent-btn').click(() => alert($('#task3 button').parent().prop('nodeName')));
    $('#addBack-btn').click(() => alert($('#task3 button').parent().children().addBack().length));

    // Завдання 4
    $('#filter-class-btn').click(() => $('li').filter('.selected').css('color', 'green').text('Modified'));
    $('#filter-every-third-btn').click(() => $('li:nth-child(3n)').css('background-color', 'yellow').text('Modified'));

    // Завдання 5
    $('#now-btn').click(() => $('#now-output').text($.now()));
});