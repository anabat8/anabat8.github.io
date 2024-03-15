import React from "react";
import { Tabs } from 'flowbite-react';
import {ReactComponent as MicrosoftLogo} from '../images/Microsoft_logo.svg'
import {ReactComponent as NetcompanyLogo} from '../images/netcompany.svg'

const customTheme = {
    "base": "flex flex-col gap-5",
    "tablist": {
      "base": "flex text-center",
      "styles": {
        "underline": "flex-wrap font-poppins font-semibold border-b border-pinkLight",
      },
      "tabitem": {
        "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400",
        "styles": {
          "underline": {
            "base": "rounded-t-lg font-poppins text-md font-semibold font-shadow text-navy",
            "active": {
              "on": "rounded-t-lg border-b-2 border-pinkStandard text-gray-500",
              "off": "border-b-2 border-transparent hover:border-pinkLight hover:text-gray-700"
            }
          },
        },
        "icon": "mr-2 h-5 w-5"
      }
    },
    "tabitemcontainer": {
      "base": "",
      "styles": {
        "default": "",
        "underline": "",
        "pills": "",
        "fullWidth": ""
      }
    },
    "tabpanel": "py-3"
}

export default function Experience() {
    return (
    <div class="md:container md:mx-auto">
        <div className="flex items-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-poppins text-black font-semibold drop-shadow">
                experience
            </h1>
            <hr className="w-28 md:w-48 h-1 my-4 mx-4 bg-pinkStandard border-0 rounded md:my-10" />
        </div>
        <div className="overflow-x-auto">
            <Tabs aria-label="Tabs with underline" style="underline" theme={customTheme}>
                <Tabs.Item active title="MICROSOFT" icon={MicrosoftLogo}>
                    <div className="font-poppins text-navy font-semibold drop-shadow-sm space-y-4">
                      <h1 className="md:text-xl text-md">
                        Software Engineer Intern
                        <b className=" text-pink-800"> @ Microsoft </b>
                      </h1>
                      <br></br>
                      <b className="text-gray-500 text-sm md:text-base">JUL 2023 - SEPT 2023</b>
                      <ul className="space-y-4 list-disc list-inside text-sm md:text-base">
                        <li>
                          Contributed to the development of the Safety Storage Platform as part of the Service Safety and Preservation Team
                          in Tallinn, Estonia
                        </li>
                        <li>
                          Worked on multiple features such as validation & security, extension of API, event logging
                        </li>
                        <li>
                          Tech: C#, .NET, Azure Storage, Azure Monitor, Cognitive Search
                        </li>
                      </ul>
                    </div>
                </Tabs.Item>
                <Tabs.Item active title="NETCOMPANY" icon={NetcompanyLogo}>
                  <div className="font-poppins text-navy font-semibold drop-shadow-sm space-y-4">
                    <h1 className="md:text-xl text-md">
                      Software Engineer Intern
                      <b className=" text-pink-800"> @ Netcompany </b>
                    </h1>
                    <br></br>
                    <b className="text-gray-500 text-sm md:text-base">APR 2023 - JUN 2023</b>
                    <ul className="space-y-4 list-disc list-inside text-sm md:text-base">
                      <li>
                        Developed the Document Health Check, a proof of concept in a team of 5 students 
                      </li>
                      <li>
                        The aim was to investigate if an automated tool can detect the maintainability of company specific documentation
                      </li>
                      <li>
                        Tech: C#, .NET, React.js, Natural Language Processing, Machine Learning
                      </li>
                    </ul>
                  </div>
                </Tabs.Item>
            </Tabs>
        </div>
    </div>
    );
}