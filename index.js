function shoppingList() {
    let liElement = $('.shopping-list').children().html();
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let newItem = $(this).find('#shopping-list-entry').val();        
        console.log(newItem);
        console.log(liElement);
        let newElement = liElement.replace("apples", newItem);

        console.log(newElement);
        $('.shopping-list').append("<li>\n\t" + newElement + "\n</li>\n");
    });
    $('.shopping-list').on('click', 'button.shopping-item-toggle', function(event) {
        $(this).closest("li").find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('.shopping-list').on('click', 'button.shopping-item-delete', function(event) {
        $(this).closest("li").remove();
    });
}


$(shoppingList)