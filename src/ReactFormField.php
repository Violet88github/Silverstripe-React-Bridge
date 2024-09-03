<?php

namespace Violet88\SilverstripeReactBridge;

use SilverStripe\Forms\FormField;

class ReactFormField extends FormField
{
    protected $schemaComponent = 'FormField';

    protected $reactComponent;

    public function __construct($name, $reactComponent, $title = null, $value = null)
    {
        $this->reactComponent = $reactComponent;
        $this->setAttribute('data-react-component', $reactComponent);
        parent::__construct($name, $title, $value);
    }

    public function Field($properties = [])
    {
        $this->setAttribute('data-state', json_encode([
            ...$this->getSchemaData(),
            'value' => $this->Value(),
        ]));
        return parent::Field($properties);

    }

    public function getSchemaComponent()
    {
        return $this->schemaComponent;
    }

    public function setSchemaComponent($schemaComponent)
    {
        $this->schemaComponent = $schemaComponent;
        return $this;
    }

    public function getSchemaData()
    {
        return array_merge(
            parent::getSchemaData(),
            [
                'schemaComponent' => $this->getSchemaComponent(),
            ]
        );
    }
}
