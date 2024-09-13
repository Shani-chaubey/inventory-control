import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  import CollapsibleLink from './CollapsibleLink'
import { ChevronsRight } from 'lucide-react'

const SidebarDropdownLink = ({title, icon: Icon, links }) => {
    return (
        <Collapsible>
            <CollapsibleTrigger className='w-full flex items-center justify-between'>
                <div className='flex items-center space-x-2 p-2'>
                    <Icon className='w-4 h-4' />
                    <span>{title}</span>
                </div>
                <ChevronsRight className='w-4 h-4' />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    links.map((item,index) => {
                        return <CollapsibleLink item={item} key={index} />
                    })
                }
            </CollapsibleContent>
        </Collapsible>
    )
}  

export default SidebarDropdownLink