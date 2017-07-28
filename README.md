semantic

create semantic lists, forms and tables from json.

@todo form
@todo table
@todo modifier property

'npm install && grunt build'

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
            classList: 'item-2--item__home',
            data: {
                homeKey: 0
            }
        },
        // optional
        id: 'item-1',
        title: 'item-1',
        classList: ['item-1--link__home'],
        data: {homeKey:0}
    }, {
        name: 'item-2',
        value: 'item-2',
        link: {
            name: 'item-2',
            value: 'item-2'
        }
    }]
};

var list = new semantic.List(list);

console.log(list.getString());
list.appendToNode(document.getElementById('body'));

```