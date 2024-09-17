import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  import CollapsibleLink from './CollapsibleLink'
import { ChevronsRight } from 'lucide-react'

const SidebarDropdownLink = ({title, icon: Icon, links, setShowSideBar }) => {
    return (
        <Collapsible>
            <CollapsibleTrigger className='flex items-center justify-between w-full'>
                <div className='flex items-center p-2 space-x-2'>
                    <Icon className='w-4 h-4' />
                    <span>{title}</span>
                </div>
                <ChevronsRight className='w-4 h-4' />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    links.map((item,index) => {
                        return <CollapsibleLink setShowSideBar={setShowSideBar} item={item} i={index} />
                    })
                }
            </CollapsibleContent>
        </Collapsible>
    )
}  

export default SidebarDropdownLink