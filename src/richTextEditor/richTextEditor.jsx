// import React from 'react'
// import styled, { withTheme } from 'styled-components'
// import { Editor } from 'slate-react'
// import { Value } from 'slate'

// import Icon from 'react-icons-kit'
// import { bold } from 'react-icons-kit/feather/bold'
// import { italic } from 'react-icons-kit/feather/italic'
// import { code } from 'react-icons-kit/feather/code'
// import { link } from 'react-icons-kit/feather/link'
// import { BoldMark, ItalicMark, CodeMark, FormatToolbar } from './Marks'

// const getInitialValue = text =>
//   Value.fromJSON({
//     document: {
//       nodes: [
//         {
//           object: 'block',
//           type: 'paragraph',
//           nodes: [
//             {
//               object: 'text',
//               leaves: [
//                 {
//                   text,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   })

// function wrapLink(editor, href) {
//   editor.wrapInline({
//     type: 'link',
//     data: { href },
//   })

//   editor.moveToEnd()
// }

// function unwrapLink(editor) {
//   editor.unwrapInline('link')
// }

// class RichTextEditor extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       value: getInitialValue(props.text),
//     }
//   }

//   componentDidMount() {
//     this.editor.focus()
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.text !== this.props.text)
//       this.setState({ value: getInitialValue(this.props.text) })
//   }

//   onChange = ({ value }) => {
//     this.setState({ value })
//   }

//   onKeyDown = (e, editor) => {
//     if (!e.ctrlKey && !e.metaKey && e.key !== 'Backspace' && e.key !== 'Enter') return
//     e.preventDefault()

//     if (e.key === 'Backspace') return editor.deleteBackward()
//     if (e.key === 'Enter') return editor.insertBlock({ type: 'paragraph' })
//     // need to handle copy paste

//     if (e.metaKey) {
//       switch (e.key) {
//         case 'b':
//           editor.setBlocks('bold')
//           return true
//         case 'i':
//           editor.setBlocks('italic')
//           return true
//         case '`':
//           editor.setBlocks('code')
//           return true
//         default:
//           return
//       }
//     }

//     if (e.ctrlKey) {
//       switch (e.key) {
//         case 'b':
//           editor.toggleMark('bold')
//           return true
//         case 'i':
//           editor.toggleMark('italic')
//           return true
//         case '`':
//           editor.toggleMark('code')
//           return true
//         default:
//       }
//     }
//   }

//   renderMark = props => {
//     switch (props.mark.type) {
//       case 'bold':
//         return <BoldMark {...props} />
//       case 'italic':
//         return <ItalicMark {...props} />
//       case 'code':
//         return <CodeMark {...props} />
//       case 'link': {
//         const { data } = props.node
//         const href = data.get('href')
//         return (
//           <a {...props.attributes} href={href}>
//             {props.children}
//           </a>
//         )
//       }
//       default:
//     }
//   }

//   renderNode = (props, _, next) => {
//     switch (props.node.type) {
//       case 'code':
//         return <CodeMark {...props} />
//       case 'bold':
//         return <BoldMark {...props} />
//       case 'italic':
//         return <ItalicMark {...props} />
//       case 'title':
//         return <h2 {...props.attributes}>{props.children}</h2>
//       case 'paragraph':
//         return <p {...props.attributes}>{props.children}</p>
//       case 'link': {
//         const { data } = props.node
//         const href = data.get('href')
//         return (
//           <span onClick={() => window.open(href)}>
//             <a {...props.attributes} href={href}>
//               {props.children}
//             </a>
//           </span>
//         )
//       }
//       default:
//         return next()
//     }
//   }

//   onToolTipClick = (e, type) => {
//     e.preventDefault()
//     const change = this.editor.toggleMark(type)
//     this.onChange(change)
//   }

//   onClickLink = event => {
//     event.preventDefault()

//     const { editor } = this
//     const { value } = editor
//     const hasLinks = this.hasLinks()

//     if (hasLinks) {
//       editor.command(unwrapLink)
//     } else if (value.selection.isExpanded) {
//       const href = 'http://' + window.prompt('Enter the URL of the link:')
//       if (href === null) return
//       editor.command(wrapLink, href)
//     } else {
//       const href = window.prompt('Enter the URL of the link:')
//       if (href === null) return
//       const text = window.prompt('Enter the text for the link:')
//       if (text === null) return

//       editor
//         .insertText(text)
//         .moveFocusBackward(text.length)
//         .command(wrapLink, href)
//     }
//   }

//   hasLinks = () => {
//     const { value } = this.state
//     return value.inlines.some(inline => inline.type === 'link')
//   }

//   render() {
//     return (
//       <Container>
//         <div
//           onClick={() => this.editor.focus()}
//           style={{
//             width: '90%',
//             height: '100px',
//             cursor: 'text',
//             fontFamily: this.props.theme.fonts.primary,
//             overflowY: 'scroll',
//           }}
//         >
//           <Editor
//             value={this.state.value}
//             onChange={this.onChange}
//             onKeyDown={this.onKeyDown}
//             renderMark={this.renderMark}
//             renderNode={this.renderNode}
//             ref={editor => (this.editor = editor)}
//           />
//         </div>
//         <FormatToolbar>
//           <IconButton onClick={e => this.onToolTipClick(e, 'bold')}>
//             <Icon icon={bold} />
//           </IconButton>
//           <IconButton onClick={e => this.onToolTipClick(e, 'italic')}>
//             <Icon icon={italic} />
//           </IconButton>
//           <IconButton onClick={e => this.onClickLink(e)}>
//             <Icon icon={link} />
//           </IconButton>
//         </FormatToolbar>
//       </Container>
//     )
//   }
// }

// export default withTheme(RichTextEditor)
// RichTextEditor.displayName = 'RichTextEditor'

// const IconButton = styled.button`
//   border: 0;
// `

// const Container = styled.div`
//   padding: 5px;
//   border: solid 1px #cfcfcf;
//   border-radius: 5px;
//   display: flex;
//   justify-content: space-between;
// `
