import React from "react";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html';
// import ApiUpload from "../../Apis/activities/ApiUpload";
// import ValidationHelper from "../../Helpers/ValidationHelper";

/**
 * ref document => https://www.programmersought.com/article/3545460696/
 */
export default class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            editorState: '',
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    // imageUploadCallBack = (file) => new Promise(async (resolve, reject) => {
    //     let reader = new FileReader();
    //     // reader.readAsDataURL(file);
    //     if (ValidationHelper.isImage(file) && ValidationHelper.isValidImageSize(file)) {
    //         const response = await ApiUpload.textEditor(file);

    //         resolve({ data: { link: response.data.path } });
    //     } else {
    //         alert('Please select a valid image not more than 2MB');
    //         reject({ data: false });
    //     }
    // });

    componentDidUpdate = () => {
        if (this.props.makeEmpty) {
            this.setState({ editorState: '' });
            this.props.setMakeEmpty(false);
        }
    }

    verifyChanges = (text) => {
        const stringifyText = draftjs(text);
        if (this.state.editorState.getCurrentContent().hasText() && this.state.editorState.getCurrentContent().getPlainText().trim()) {
            this.props.onEditorChange(stringifyText);
        } else if (stringifyText.includes('<img')) {
            this.props.onEditorChange(stringifyText);
        } else {
            // console.log(stringifyText, stringifyText.includes('<img'));
            this.props.onEditorChange('');
        }
    }

    render() {

        return (
            <div style={{ marginBottom: '20px', minHeight: '150px', paddingBottom: '20px' }}>
                <Editor
                    editorState={this.state.editorState}
                    toolbarClassName="home-toolbar"
                    wrapperClassName="home-wrapper"
                    editorClassName="home-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{ //Editor rich text component function control
                        options: ['image', 'list', 'textAlign', 'history', 'link'],
                        history: { inDropdown: false },
                        inline: { inDropdown: false },
                        list: { inDropdown: false },
                        textAlign: { inDropdown: false },
                        image: {
                            urlEnabled: false,
                            uploadEnabled: true,
                            alignmentEnabled: false,   // Whether to display the sort button is equivalent to text-align
                            uploadCallback: this.imageUploadCallBack,  // Image processing (but only for local upload, url mode does not pass this function)
                            previewImage: true,
                            inputAccept: 'image/*',
                            alt: { present: false, mandatory: false }
                        }
                    }}
                    // editorStyle={{lineHeight: '70%'}}
                    onContentStateChange={(text) => this.verifyChanges(text)}// Reference the function of the parent component
                    placeholder={this.props.placeholder || 'Enter your description'} //Default content in the input box
                    spellCheck={true}
                    handlePastedText={() => false}
                />
            </div>
        );
    }
}

// //Using components  ==>In the subcomponent, you should find the parent component onEditorChange function, and directly write this function in the subcomponent. You can also modify it according to your personal needs.
// export  class extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             editorContent: '',
//         };
//     }

//     onEditorChange = (editorContent) => {
//         console.log('parent component' + draftjs(editorContent)); //Update in real time based on input
//         //editorContent = '<html lang="en"><head><meta charset="UTF-8"><title></title></head><body>' + draftjs(editorContent) + '</body></html>'
//         this.setState({
//             editorContent,
//         });
//     };//Get html rich text

//     render() {
//         let {editorContent} = this.state;
//         //Function passed to the child component
//         return <TextEditor onEditorChange={this.onEditorChange.bind(this)} editorContent={editorContent}/>
//     }
// }