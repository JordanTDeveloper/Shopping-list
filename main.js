/*function main() {


    $("#js-shopping-list-form").on(`submit`, function (evt){
        evt.preventDefault();
        let listItem = $("#shopping-list-entry").val();
        console.log(listItem);
        let template = `
        \
        $(".shopping-list").append(template);
     
       
    });

    $('.shopping-list').on('click','.shopping-item-toggle',function(event) {
        const targetItem = $(event.currentTarget).closest("li");
        targetItem.find(".shopping-item").toggleClass('shopping-item__checked');
      });
    

      $('.shopping-list').on('click','.shopping-item-delete',function(event) {
        const delItem = $(event.currentTarget).closest("li");
        delItem.remove();
      });


}





$(main);
*/

let store = [
  { name: "bread", completed: false },
  { name: "bread", completed: false },
  { name: "bread", completed: false },
  { name: "bread", completed: false },
];

function addItem() {
  $("#js-shopping-list-form").on(`submit`, function (evt) {
    evt.preventDefault();
    let listItem = $("#shopping-list-entry").val();
    store.push({ name: listItem, completed: false });
    renderShoppingList();
  });
}
 
function renderShoppingList() {
  let html = "";
  for (let i = 0; i < store.length; i++) {
    html += generateListItem(store[i]);
  }
  
  $(".shopping-list").html(html);
}

function generateListItem(i) {
  
  return `<li>
        <span class="shopping-item">${i.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

function markItem() {
  $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
    $(this)
      .closest(".shopping-item-control")
      .siblings("shopping-item")
      .toggleClass("shopping-item_checked");
    //targetItem.find(".shopping-item").toggleClass('shopping-item__checked');
  });
}

$(generateListItem);
$(addItem);
$(markItem);
