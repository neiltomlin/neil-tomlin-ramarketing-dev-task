// Run on document ready
$(function() {
  setupProductControl($('.js-pc'), $('.js-prod'));
});



/**
 * Add the open/close listener functionality to the product control
 * @param productsButton - the button that collapses the product panel
 * @param productComponent - the parent product component to be collapsed
 */
function setupProductControl(productsButton, productComponent) {
  productsButton.click(function () {
    productsButton.toggleClass('invert');
    productComponent.toggleClass('closed');
  })
}