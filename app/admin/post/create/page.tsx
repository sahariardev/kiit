'use client'

import React from "react";
import dynamic from "next/dynamic";
import {Button} from "@/components/ui/button";

const PostCreatePage = () => {
    const EditorComponent = dynamic(() => import("@/components/ui/EditorComponent"), {
        ssr: false,
    });

    let postData = undefined;

    // add submit button
    // on submit create a post request to backend
    // save the post

    return (
        <div>

            <div className="flex">
                <div className="w-[300px] h-fit bg-gray-100 pt-[20px] pb-[30px] pl-[10px] pr-[10px]">
                   <h1>Hello World</h1>
                   <h2>Hello World</h2>
                   <h3>Hello World</h3>
                </div>
                <div className="flex-auto pt-[20px]">
                    <EditorComponent data={undefined} onChange={(data) => postData = data} holder="editorjs"/>

                </div>
                <div className="w-[300px] h-fit bg-gray-100 pt-[20px] pb-[30px] pl-[10px] pr-[10px]">
                    <Button variant="outline" asChild>
                        <div className="btn btn-wide">Update</div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PostCreatePage;