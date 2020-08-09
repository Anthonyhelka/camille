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
            <Button size="large" color="green" onClick={handleClick}>
              Checkout
            </Button>
        </div>
    );
};
```

# Components

* [Button](#button)
* [Avatar](#avatar)

# Button

A Button is a UI element that provides the user a way to trigger an event.

### Props
| Name     	| Default 	| Type   	| Description                                                                                                                                                                        	|
|----------	|---------	|--------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| size     	| normal  	| string 	| Determines the width, height and font size of the button.<br><br>**Enums**<br>`mini` `small` `normal` `large` `massive`                                                            	|
| disabled 	| false   	| bool   	| Fades the button and makes it uninteractable.                                                                                                                                      	|
| compact  	| false   	| bool   	| Greatly reduces padding of the button.                                                                                                                                             	|
| color    	| default 	| enum  	| Determines the color of the button.<br><br>**Enums**<br>`default` `red` `orange` `yellow` `olive` `green` `teal` `blue` `violet` `purple` `pink` `brown` `grey` `black` 	|
| inverted 	| false   	| bool   	| Swaps the background and font color.                                                                                                                                               	|

# Avatar

An avatar is an image or profile graphic that typically appears next to a user's name.

### Props
| Name   	| Default 	| Type   	| Description                                                                                                 	|
|--------	|---------	|--------	|-------------------------------------------------------------------------------------------------------------	|
| src    	|         	| string 	| Source image.                                                                                           	|
| size   	| 40px    	| string 	| Determines the width and height of the image.                                                      	|
| radius 	| 100px   	| string 	| Determines how rounded the corners of the avatar are.                                             	|
| status 	| offline 	| enum   	| Determines the icon next to the Avatar image.<br><br>Status can have a value of online, offline or away.<br><br>**Enums**<br>`online` `offline` `away`  	|
