"use strict";

let mainContainer = $('.container');
let listItem = $('#shopping-list-entry');
let shoppingList = $('.shopping-list');

mainContainer.on('click keydown', 'button', function(event){
    event.preventDefault();
    if($(this).attr('type') === 'submit') {
        addItem($(listItem).val());
        $(listItem).val(" ");
    } else if ($(this).hasClass("shopping-item-toggle")) {
        $(this).parent().parent().find(".shopping-item").toggleClass('shopping-item__checked');
    } else if ($(this).hasClass("shopping-item-delete")) {
        $(this).parent().parent().remove();
    }
    
})

function addItem(item) {
    $(shoppingList).append(function(){
        return `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    });
}