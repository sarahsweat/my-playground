import Html from 'slate-html-serializer'
import React from 'react'

// const BLOCK_TAGS = {
//   p: 'paragraph',
//   blockquote: 'quote',
//   pre: 'code',
// }
// const MARK_TAGS = {
//   em: 'italic',
//   strong: 'bold',
//   u: 'underline',
// }

// const INLINE_TAGS = {
//   a: 'link'
// };

// const rules = [
//   {
//     // Switch deserialize to handle more blocks...
//     deserialize(el, next) {
//       const type = BLOCK_TAGS[el.tagName.toLowerCase()]
//       if (type) {
//         return {
//           object: 'block',
//           type: type,
//           data: {
//             className: el.getAttribute('class'),
//           },
//           nodes: next(el.childNodes),
//         }
//       }
//     },
//     // Switch serialize to handle more blocks...
//     serialize(obj, children) {
//       if (obj.object == 'block') {
//         switch (obj.type) {
//           case 'paragraph':
//             return <p className={obj.data.get('className')}>{children}</p>
//           case 'quote':
//             return <blockquote>{children}</blockquote>
//           case 'code':
//             return (
//               <pre>
//                 <code>{children}</code>
//               </pre>
//             )
//         }
//       }
//     },
//   },
//   {
//     deserialize: function(el, next) {
//       const type = MARK_TAGS[el.tagName]
//       if (!type) { return; }
//       return {
//           kind: 'mark',
//           type: type,
//           nodes: next(el.childNodes)
//       }
//     },
//     serialize: function(object, children) {
//       if (object.kind != 'mark') { return; }
//       switch (object.type) {
//         case 'bold':
//           return <strong>{children}</strong>;
//         case 'italic':
//           return <em>{children}</em>;
//         case 'underline':
//           return <u>{children}</u>;
//       }
//     }
//   },
//   {
//     deserialize: function (el, next) {
//       if (el.tagName != 'a') { return; }
//       const type = INLINE_TAGS[el.tagName];

//       if (!type) {
//         return;
//       }
//       return {
//         kind: 'inline',
//         type: type,
//         nodes: next(el.childNodes),
//         data: {
//           href: el.attrs.find(({name}) => name == 'href').value
//         }
//       }
//     },
//     serialize: function (object, children) {
//       if (object.kind != 'inline') {
//         return;
//       }
//       switch (object.type) {
//         case 'link':
//           return <a href={object.data.get('href')}>{children}</a>;
//       }
//     }
//   }
//   // {
//   //   deserialize(el, next) {
//   //     if (el.tagName.toLowerCase() === 'a') {
//   //       return {
//   //         kind: 'inline',
//   //         type: 'link',
//   //         data: {
//   //           href: el.getAttribute('href')
//   //         },
//   //         nodes: next(el.childNodes)
//   //       }
//   //     }
//   //   },
//   //   serialize(obj, children) {
//   //     if (obj.object == 'link') {
//   //       switch (obj.type) {
//   //         case 'link':
//   //           return <a href={obj.data.get('href')}>{children}</a>
//   //       }
//   //     }
//   //   },
//   // }
// ]







const BLOCK_TAGS = {
  p: 'paragraph',
  ul: 'bulleted-list',
  ol: 'numbered-list',
  li: 'list-item',
  h3: 'heading-three',

};

const INLINE_TAGS = {
  a: 'link'
};

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underlined',
};

const rules = [
  {
      deserialize: function(el, next) {
          const type = BLOCK_TAGS[el.tagName.toLowerCase()];
          console.log(el);
          if (!type) { return; }
          return {
              kind: 'block',
              type: type,
              nodes: next(el.childNodes)
          };
      },
      serialize: function(object, children) {
          if (object.kind != 'block') return 
          console.log(object);
          switch (object.type) {
              case 'numbered-list':
                  return <ol>{children}</ol>;
              case 'bulleted-list':
                  return <ul>{children}</ul>;
              case 'list-item':
                  return <li>{children}</li>;
              case 'paragraph':
                  return <p className={obj.data.get('className')}>{children}</p>
              case 'heading-three':
                  return <h3>{children}</h3>;
              case 'link':
                  return <a>{children}</a>;
          }
      }
  },
  // Add a new rule that handles marks...
  {
      deserialize: function(el, next) {
          const type = MARK_TAGS[el.tagName];
          if (!type) { return; }
          return {
              kind: 'mark',
              type: type,
              nodes: next(el.childNodes)
          };
      },
      serialize: function(object, children) {
          if (object.kind != 'mark') { return; }
          switch (object.type) {
              case 'bold':
                  return <strong>{children}</strong>;
              case 'italic':
                  return <em>{children}</em>;
              case 'underline':
                  return <u>{children}</u>;
          }
      }
  },
  {
      deserialize: function (el, next) {
          if (el.tagName != 'a') { return; }
          const type = INLINE_TAGS[el.tagName];

          if (!type) {
              return;
          }
          return {
              kind: 'inline',
              type: type,
              nodes: next(el.childNodes),
              data: {
                  href: el.attrs.find(({name}) => name == 'href').value
              }
          };
      },
      serialize: function (object, children) {

          if (object.kind != 'inline') {
              return;
          }

          switch (object.type) {
              case 'link':
                  return <a href={object.data.get('href')}>{children}</a>;
          }
      }
  },
];

export const html = new Html({ rules	})
