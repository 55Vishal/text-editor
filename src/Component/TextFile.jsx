import './TextFile.css'

import React, { useEffect, useState } from 'react';

import { AiOutlineAlignCenter } from 'react-icons/ai';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { AiOutlineFontColors } from 'react-icons/ai';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { AiOutlineUnderline } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import { BsTypeBold } from 'react-icons/bs';
import Image from '../Images/file.png';
import { MdRedo } from 'react-icons/md';
import { MdUndo } from 'react-icons/md';
import { RxFontItalic } from 'react-icons/rx';

function TextFile() {
    const [color, setColor] = useState('#000000');
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        const boldFunctionality = document.querySelector('#boldButton');
        const italicsFunctionality = document.querySelector('#italicsButton');
        const underlineFunctionality = document.querySelector('#underlineButton');
        const alignLeftFunctionality = document.querySelector('#alignLeftButton');
        const alignCenterFunctionality = document.querySelector('#alignCenterButton');
        const alignRightFunctionality = document.querySelector('#alignRightButton');
        const unorderedListFunctionality = document.querySelector('#unorderedListButton');
        const orderedListFunctionality = document.querySelector('#orderedListButton');
        const colorFunctionality = document.querySelector('#colorButton');
        const undoFunctionality = document.querySelector('#undoButton');
        const redoFunctionality = document.querySelector('#redoButton');
        const insertImageFunctionality = document.querySelector('#imageButton');



        const handleColorClick = () => {
            setShowColorPicker(!showColorPicker);
        };
        const handleColorChange = (color) => {
            document.execCommand('foreColor', false, color.hex);
            setColor(color.hex);
        };

        const handleBoldClick = () => {
            document.execCommand('bold');
        };

        const handleItalicClick = () => {
            document.execCommand('italic');
        };

        const handleUnderlineClick = () => {
            document.execCommand('underline');
        };


        const handleAlignLeftClick = () => {
            document.execCommand('justifyLeft');
        };

        const handleAlignCenterClick = () => {
            document.execCommand('justifyCenter');
        };

        const handleAlignRightClick = () => {
            document.execCommand('justifyRight');
        };

        const handleUnorderedListClick = () => {
            document.execCommand('insertUnorderedList');
        };

        const handleOrderedListClick = () => {
            document.execCommand('insertOrderedList');
        };

        const handleUndoClick = () => {
            document.execCommand('undo');
        };

        const handleRedoClick = () => {
            document.execCommand('redo');
        };

        const handleImageClick = () => {
            document.execCommand('insertImage');
        };
        boldFunctionality.addEventListener('click', handleBoldClick);
        italicsFunctionality.addEventListener('click', handleItalicClick);
        underlineFunctionality.addEventListener('click', handleUnderlineClick);
        alignLeftFunctionality.addEventListener('click', handleAlignLeftClick);
        alignCenterFunctionality.addEventListener('click', handleAlignCenterClick);
        alignRightFunctionality.addEventListener('click', handleAlignRightClick);
        alignLeftFunctionality.addEventListener('click', handleUnderlineClick);
        colorFunctionality.addEventListener('click', handleColorClick);
        undoFunctionality.addEventListener('click', handleUndoClick);
        redoFunctionality.addEventListener('click', handleRedoClick);
        unorderedListFunctionality.addEventListener('click', handleUnorderedListClick);
        orderedListFunctionality.addEventListener('click', handleOrderedListClick);
        insertImageFunctionality.addEventListener('click', handleImageClick);

        return () => {
            boldFunctionality.removeEventListener('click', handleBoldClick);
            italicsFunctionality.removeEventListener('click', handleItalicClick);
            underlineFunctionality.removeEventListener('click', handleUnderlineClick);
            alignCenterFunctionality.removeEventListener('click', handleAlignLeftClick);
            alignRightFunctionality.removeEventListener('click', handleAlignLeftClick);
            colorFunctionality.removeEventListener('click', handleColorClick);
            undoFunctionality.removeEventListener('click', handleUndoClick);
            redoFunctionality.removeEventListener('click', handleRedoClick);
            unorderedListFunctionality.removeEventListener('click', handleUnorderedListClick);
            orderedListFunctionality.removeEventListener('click', handleOrderedListClick);
            insertImageFunctionality.removeEventListener('click', handleImageClick);




        };
    }, []);

    return (
        <div>

            <div className='textField'>
                <img src={Image} alt="" />
                <div>Text Editor</div>
            </div>
            <div className='Btn-Container'>
                <div className='btn'>
                    <button id="undoButton"> <MdUndo /> </button>
                    <button id="redoButton"><MdRedo /></button>
                    <button id="boldButton"><BsTypeBold /></button>
                    <button id="italicsButton"><RxFontItalic /></button>
                    <button id="underlineButton"><AiOutlineUnderline /></button>
                    <button id="colorButton"><AiOutlineFontColors /></button>
                    <button id="alignLeftButton"><AiOutlineAlignLeft /></button>
                    <button id="alignCenterButton"><AiOutlineAlignCenter /> </button>
                    <button id="alignRightButton"><AiOutlineAlignRight /></button>
                    <button id="unorderedListButton"><AiOutlineUnorderedList /></button>
                    <button id="orderedListButton"><AiOutlineOrderedList /></button>
                    <button id="imageButton"><BsFillImageFill /></button>


                </div>
            </div>

            <div className='InputField' contentEditable={true} spellCheck={false} >
                <p contentEditable={true} spellCheck={false}>
                    @Type here
                </p>
            </div>

        </div>
    );
}

export default TextFile