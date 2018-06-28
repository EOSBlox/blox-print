# \<blox-print\>

A component that prints the given HTML

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-print

```
$ npm install blox-print
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-print';
```


## Basic Use

```html
<blox-print
    html="<html><body><h1>You Printed Me!</h1></body></html>"
    error="{{error}}">
</blox-print>
```

## Javascript Use

```html
<blox-print id="bloxPrint"></blox-print>
<script>
    this.$.bloxPrint.print('<html><body><h1>You Printed Me!</h1></body></html>')
    .then(() => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```