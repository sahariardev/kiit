'use client'

import React from "react";
import dynamic from "next/dynamic";

const PostCreatePage = () => {
    const EditorComponent = dynamic(() => import("@/components/ui/EditorComponent"), {
        ssr: false,
    });

    return (
        <div>
            <EditorComponent data={undefined} onChange={(data) => console.log(data)} holder="editorjs"/>
        </div>
    );
}

export default PostCreatePage;