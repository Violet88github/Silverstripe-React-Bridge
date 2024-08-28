# Silverstripe React Bridge
This module takes care of rendering custom React form fields in the Silverstripe CMS. This is useful for the parts in the CMS that are not built in React.

## Installation
```bash 
composer install violet88/silverstripe-react-bridge
```


## Usage
### 1. Create a React component
Create a React component for your custom field. The module will pass the following props to your component:
- `name`: The name of the field
- `value`: The value of the field
- `onAutofill`: The function to which you should pass the new value of the field, as well as the name of the field. This will update the value of the field in the CMS. You can pass the new value as follows
```javascript
onAutofill(name, value)
```

### 2. Register the React component
Register your React component by calling the registerMany function from SilverStripe's lib/Injector:
```javascript
import Injector from 'lib/Injector';
import SecretField from "./SecretField";

Injector.component.registerMany({
    SecretField
});

```
I would advise to make a specific javascript file for registering your components, and include it in your project. I personally put this in a boot folder. It would look something like this:
```javascript
import Injector from 'lib/Injector';
import SecretField from "../SecretField";

export default () => {
    Injector.component.registerMany({
        SecretField
    });
};
```
After that I would use this file in your main.js file like this:
```javascript
/* global window */
import registerComponents from 'boot/registerComponents';

window.document.addEventListener('DOMContentLoaded', () => {
    registerComponents();
});
```

### 3. Add javascript to the CMS
Add the javascript file to the CMS. You can do this by adding the following to your config.yml:
```yaml
SilverStripe\Admin\LeftAndMain:
  extra_requirements_javascript:
    - 'app/client/dist/js/bundle.js'
```

You have to replace `'app/client/dist/js/bundle.js'` with the path to your compiled javascript file.

### 4. Create a PHP class for your custom field
Now we will create a PHP class for our custom field. This class will extend ReactFormField. It would work like any other form field in Silverstripe. You can add your own logic to this class. For example, you can add validation or custom logic to the field. The only difference is, you will pass it a React component name

```php
<?php

use Violet88\SilverstripeReactBridge\ReactFormField;

class MySecretFormField extends ReactFormField
{

    public function __construct($name, $title = null, $value = null)
    {
        parent::__construct($name, 'SecretField', $title, $value);
    }

}

```

In this case 'SecretField' (the second parameter passed to the parent constructor) is the name of the React component we registered in step 2.

### 5. Use the custom field in your form
You can now use your custom field in your form like any other form field. For example:
```php
$fields->addFieldToTab('Root.Main', MySecretFormField::create('SecretField', 'Secret Field'));
```
