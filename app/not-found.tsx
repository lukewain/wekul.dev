'use client';

import React from "react";
import {} from "";

import

export default function NotFound() {
    return (
        <main className="justify-center items-center h-screen">
            {/* Error at the top */}
            <div id="error" className="flex flex-col items-center">
                <h1 className=" text-4xl text-red-300">Whoops, something went wrong</h1>
            </div>
            <div className="flex flex-col items-center text-2xl mx-1">
                <div className="">
                    <h1></h1>
                    <pre className="bg-white/60 rounded">let pageFound: boolean = false;</pre>
                    {/* <h1 className="text-red-400">An Error Has Ocurred!</h1>
                    <h1 className="text-[#2e95d2] inline-block mr-[5px]">let</h1>
                    <h1 className="text-[#bb26c7] inline-block">pageFound</h1>
                    <h1 className="text-white inline-block mr-[5px]">:</h1>
                    <h1 className="text-[#e99412] inline-block mr-[5px]">boolean</h1>
                    <h1 className="text-white inline-block mr-[5px]">=</h1>
                    <h1 className="text-[#2e95d2] inline-block mr-[5px]">false</h1> */}
                </div>
            </div>
            <div id="returnButton"></div>
            <div className="text-white">
            </div>
        </main>
    )
}
