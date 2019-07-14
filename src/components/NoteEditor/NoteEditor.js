import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Row, Col } from 'reactstrap';
import './NoteEditor.css';

const editorConfiguration = {
    toolbar: [
        'heading',
        '|',
        'fontColor', 
        'fontBackgroundColor',
        'bold',
        'italic',
        'link',
        'ckfinder',
        'bulletedList',
        'numberedList',
        'imageUpload',
        'blockQuote',
        'mediaEmbed',
        'insertTable'
    ],
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
        ]
    },
    fontColor: {
        colors: [
            {
                color: 'hsl(0, 0%, 0%)',
                label: 'Black'
            },
            {
                color: 'hsl(0, 0%, 30%)',
                label: 'Dim grey'
            },
            {
                color: 'hsl(0, 0%, 60%)',
                label: 'Grey'
            },
            {
                color: 'hsl(0, 0%, 90%)',
                label: 'Light grey'
            },
            {
                color: 'hsl(0, 0%, 100%)',
                label: 'White',
                hasBorder: true
            }
        ]
    },
    fontBackgroundColor: {
        colors: [
            {
                color: 'hsl(0, 75%, 60%)',
                label: 'Red'
            },
            {
                color: 'hsl(30, 75%, 60%)',
                label: 'Orange'
            },
            {
                color: 'hsl(60, 75%, 60%)',
                label: 'Yellow'
            },
            {
                color: 'hsl(90, 75%, 60%)',
                label: 'Light green'
            },
            {
                color: 'hsl(120, 75%, 60%)',
                label: 'Green'
            }
        ]
    },
};


class NoteEditor extends Component {
    render() {
        return (
            <Row>
                <Col className="ckEditor">
                    <CKEditor
                        onInit={ editor => {
                            console.log( 'Editor is ready to use!', editor );

                            // Insert the toolbar before the editable area.
                            editor.ui.getEditableElement().parentElement.insertBefore(
                                editor.ui.view.toolbar.element,
                                editor.ui.getEditableElement()
                            );
                        } }
                        onChange={ ( event, editor ) => console.log( { event, editor } ) }
                        editor={ DecoupledEditor }
                    />
                </Col>
            </Row>

        );
    }
}

export default NoteEditor;