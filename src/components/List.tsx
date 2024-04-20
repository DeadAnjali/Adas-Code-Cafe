/*"use client"

import { useOrganizationList } from "@clerk/clerk-react"

export const List=()=>{
    const {userMemberships}=useOrganizationList({
        userMemberships:{
            infinite:true,
        }
    });
    if(!userMemberships.data?.length) return null;
    return (
        userMemberships.data.map(mem){
            mem.oraganisation.id,
        }

    );
}
*/