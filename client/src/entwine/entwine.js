import Injector, { loadComponent } from 'lib/Injector';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

/* global jQuery */

(function ($) {
  $(document).ready(() => {
      $('[data-react-component]').entwine({
          onmatch() {
            const componentName = this.data('react-component');
            const Component = loadComponent(componentName);
            const schemaState = this.data('state');

            if (!Component) {
              console.error(`No component found for ${componentName}`);
              return;
            }

            const setValue = (fieldName, value) => {
              const input = document.querySelector(`input[name="${fieldName}"]`);

              if (!input) {
                console.log('No input field found for field', fieldName);
                return;
              }

              console.log('Setting value for field', fieldName, value);

              input.value = value;
            };

            ReactDOM.render(<Component {...schemaState} onAutofill={setValue}/>, this[0]);
          },
          onunmatch() {
            ReactDOM.unmountComponentAtNode(this[0]);
          },
      });
  });
}(jQuery));
