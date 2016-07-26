# DraftJS: Import HTML to ContentState

This is a module for [DraftJS](https://github.com/facebook/draft-js) that will convert HTML to editor content.

It was extracted from [React-RTE](https://react-rte.org) and placed into a separate module for more general use. Hopefully it can be helpful in your projects.

## Installation

    npm install --save draft-js-import-html

## How to Use

    import {stateFromHTML} from 'draft-js-import-html';
    let contentState = stateFromHTML(html);

### Options

You can optionally pass a second `Object` argument to `stateFromHTML` with the following supported properties:

| Option key     | Option Description   |
| -------------- | -------------------- |
| elementStyles  | HTML element name as key, DraftJS style string as value.  |
| customStyleMap | Custom style mapping object, similar to the [customStyleMap](https://facebook.github.io/draft-js/docs/advanced-topics-inline-styles.html#mapping-a-style-string-to-css) the draft-js `Editor` receives.  |

Example of options usage:

```javascript
import {stateFromHTML} from 'draft-js-import-element';
let options = {
  elementStyles: {
    // Support `<sup>` (superscript) tag as style:
    'sup': 'SUPERSCRIPT'
  },
  customStyleMap: {
    RED: { color: 'red' }
  }
};
const contentState = stateFromHTML(html, options);
```

This project is still under development. If you want to help out, please open an issue to discuss or join us on [Slack](https://draftjs.slack.com/).

## License

This software is [BSD Licensed](/LICENSE).
