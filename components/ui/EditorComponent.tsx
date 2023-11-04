import React, {useEffect, useRef} from "react";
import EditorJS from "@editorjs/editorjs";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header"

const EDITOR_TOOLS = {
    code: Code,
    header: {
        class: Header,
        config: {
            placeholder: 'Enter a Header',
            levels: [1, 2, 3, 4],
            defaultLevel: 1
        }
    },
    paragraph: Paragraph,
    checklist: CheckList,
    embed: Embed,
    image: Image,
    inlineCode: InlineCode,
    link: Link,
    list: List,
    quote: Quote,
    simpleImage: SimpleImage,
    delimiter: Delimiter
};

interface Props {
    data: any,
    onChange: (data: any) => void,
    holder: string
}

export default function EditorComponent({data, onChange, holder}: Props) {
    const ref = useRef<any>();

    //initialize editorjs
    useEffect(() => {
        //initialize editor if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_TOOLS,
                data,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
            ref.current = editor;
        }

        //add a return function handle cleanup
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);

    return <div id={holder} className="prose max-w-full"/>;
};

