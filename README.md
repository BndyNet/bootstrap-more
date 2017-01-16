# [Bootstrap More](https://github.com/bndynet/bootstrap-more)

This is the extensions based on Bootstrap. 


## Dependencies
Requires:
 - bootstrap (requires: jquery)


## Quick start

- Clone the repo

    `git clone https://github.com/bndynet/bootstrap-more.git`


### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap-more/
├── dist/
│   ├── bootstrap-more.css
│   ├── bootstrap-more.min.css
│   ├── bootstrap-more.js
│   └── bootstrap-more.min.js
├── demo/
│   └── bootstrap.min.js
└── src/
    ├── _variables.scss
    ├── bootstrap-more.scss
    └── bootstrap-more.coffee
```

We provide compiled CSS and JS (`bootstrap-more.*`), as well as compiled and minified CSS and JS (`bootstrap-more.min.*`). 


### Usage

```html
<!-- Latest compiled and minified CSS -->
<link href="boostrap-more/dist/bootstrap-more.min.css" rel="stylesheet"/>
<!-- Latest compiled and minified JavaScript -->
<script src="bootstrap-more/dist/bootstrap-more.min.js"></script>
```


### Examples

#### Read-only Form

```html
<form class="readonly [form-horizontal|form-inline]">
    <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" />
    </div>
</form>

````


## Copyright and license

Code and documentation (c) 2016 [Bndy.Net](http://www.bndy.net). Code released under the MIT License. 
