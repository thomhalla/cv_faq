import { initAccordion } from './accordion';
import { initChatbot } from './chatbot';
import { initLoadMore } from './load-more';
import { initSearchForm } from './search-form';
import { initSearchResults } from './search-results';
import { initAutoComplete } from './type-ahead';


const onReady = function (initFunc) {
  if (document.readyState !== 'loading') {
    initFunc();
  }
  else {
    document.addEventListener('DOMContentLoaded', function () {
      initFunc();
    }, false);
  }
};

// Initialize immediately
initAccordion();
initLoadMore();
initSearchForm();

// Initialize after DOM loaded
onReady(function () {
  initAutoComplete();
  initChatbot();
  initSearchResults();
});
