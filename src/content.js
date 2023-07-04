import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';

const container = document.createElement('div');

document
    .querySelector('tab-container')
    .insertBefore(container, document.getElementById('panel-2'));

console.log('container', container);

new EditorView({
    extensions: [basicSetup, javascript()],
    parent: container,
});
