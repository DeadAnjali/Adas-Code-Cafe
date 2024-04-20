"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { CreateOrganization, useOrganizationList } from "@clerk/clerk-react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
    const {userMemberships}=useOrganizationList({
        userMemberships:{
            infinite:true,
        }
    })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
        </h1>
        {/*(userMemberships.data?.length==0)?<CreateOrganization/>:<p>I am happy</p>*/}
        <CreateOrganization/>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;