# Camille

<a href="https://www.npmjs.com/package/camille" target="_blank"><img src="https://img.shields.io/npm/v/camille" /></a>

Camille is a minimalistic UI library for ReactJS.

# Installation

```
$  yarn add camille
// Or NPM
$  npm install camille
```

# Example Usage

In this example, we use the Button component in order to easily render a simple, stylish and fully customizable button:
```
import React from 'react';
import { Button } from 'camille';

export default ({ handleClick }) => {
    return (
        <div>
            <Button type="primary" color="green" onClick={handleClick}>
              Checkout
            </Button>
        </div>
    );
};
```

# Components

* [Avatar](#avatar)
* [Button](#button)

# Avatar

An avatar is an image or profile graphic that usually appears next to a user's name.

### Props
| Name   	| Default 	| Type   	| Description                                                                                                 	|
|--------	|---------	|--------	|-------------------------------------------------------------------------------------------------------------	|
| src    	|         	| string 	| The source image.                                                                                           	|
| size   	| 40px    	| string 	| The size determines the width and height of the image.                                                      	|
| radius 	| 100px   	| string 	| The radius determines how rounded the corners of the image are.                                             	|
| status 	| offline 	| enum   	| The status determines the icon next to the Avatar image.<br><br>Status can have a value of online, offline or away.<br><br>**Enums**<br>`online` `offline` `away`  	|

# Button

A Button is a UI element that provides the user a way to trigger an event.

### Props
| Name     	| Default 	| Type   	| Description                                                                                                                                                                        	|
|----------	|---------	|--------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| size     	| normal  	| string 	| Determines the width, height and font size of the button.<br><br>**Enums**<br>`mini` `small` `normal` `large` `massive`                                                            	|
| disabled 	| false   	| bool   	| Fades the button and makes it uninteractable.                                                                                                                                      	|
| compact  	| false   	| bool   	| Greatly reduces padding of the button.                                                                                                                                             	|
| color    	| default 	| string 	| Determines the background color of the button.<br><br>**Enums**<br>`default` `red` `orange` `yellow` `olive` `green` `teal` `blue` `violet` `purple` `pink` `brown` `grey` `black` 	|
