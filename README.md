# Print
create html lists, forms and tables from json.

### todos

@todo form
@todo table
@todo modifier property
@todo keys

### Installation

'npm install && grunt build'


### Instantiation and options

```
var list = {
    rootId: 'menu',
    classList: ['menu'],
    role: 'navigation',
    // optional
    data: {},
    order: "ul",
    items: [{
        name: 'item-1',
        link: {
            name: 'item-1',
            value: 'item-1',
            // optional
            href: '#',
            id: 'item-2',
            classList: ['item-2__item--home'],
            data: {
                homeKey: 0
            }
        },
        // optional
        id: 'item-1',
        title: 'item-1',
        classList: ['item__link--home'],
        data: { homeKey: 0}
    }, {
        name: 'item-2',
        value: 'item-2',
        link: {
            name: 'item-2',
            value: 'item-2'
        }
    }]
};

var list = new print.List(list);

// returns an html string
console.log(list.getString());

// appends the element to a dom element
list.appendToNode(document.getElementById('body'));

```