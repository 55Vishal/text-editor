import './TextFile.css'

import React, { useEffect } from 'react';

import { AiOutlineAlignCenter } from 'react-icons/ai';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { AiOutlineUnderline } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsTypeBold } from 'react-icons/bs';
import Image from '../Images/file.png';
import { RxFontItalic } from 'react-icons/rx';

function TextFile() {
    useEffect(() => {
        const boldFunctionality = document.querySelector('#boldButton');
        const italicsFunctionality = document.querySelector('#italicsButton');
        const underlineFunctionality = document.querySelector('#underlineButton');

        const handleBoldClick = () => {
            document.execCommand('bold');
        };

        const handleItalicClick = () => {
            document.execCommand('italic');
        };

        const handleUnderlineClick = () => {
            document.execCommand('underline');
        };

        boldFunctionality.addEventListener('click', handleBoldClick);
        italicsFunctionality.addEventListener('click', handleItalicClick);
        underlineFunctionality.addEventListener('click', handleUnderlineClick);

        return () => {
            boldFunctionality.removeEventListener('click', handleBoldClick);
            italicsFunctionality.removeEventListener('click', handleItalicClick);
            underlineFunctionality.removeEventListener('click', handleUnderlineClick);
        };
    }, []);

    return (
        <div>

            <div className='textField'>
                    <img src={Image} alt="photo" />
                    <div>Text Editor</div>
            </div>
            <div className='Btn-Container'>
                <div className='btn'>
                    <button id="boldButton"><BsTypeBold /></button>
                    <button id="italicsButton"><RxFontItalic /></button>
                    <button id="underlineButton"><AiOutlineUnderline /></button>
                    <button id="alignLeftButton"><AiOutlineAlignLeft /></button>
                    <button id="alignCenterButton"><AiOutlineAlignCenter /></button>
                    <button id="alignRightButton"><AiOutlineAlignRight /></button>
                    <button id="unorderedListButton"><AiOutlineUnorderedList /></button>
                    <button id="orderedListButton"><AiOutlineOrderedList /></button>


                </div>
            </div>

            <div className='InputField' contentEditable={true} spellCheck={false} placeholder='@Type here'>

            </div>
        </div>
    );
}

export default TextFile