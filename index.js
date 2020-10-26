$(function () {

  // handle form event., key entry and sumbit entry
  $('#js-shopping-list-form').submit(event => {

    // stop the default form submission behavior
    event.preventDefault();

    const targetForm = $(event.currentTarget);
    const userTextElement = targetForm.find('#shopping-list-entry');
    itemName = userTextElement.val();


    $('#shopping-list-entry').val(' ');


    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
    // add new item to the ul/list.
   

  // handle box click and check for check or  deletat the box.
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
			});

    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
			$(this).closest('li').remove();
			});

});

