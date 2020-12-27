import "./EmailList.css"
import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox"
import Section from "./Section";
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import EmailRow from "./EmailRow";


function EmailList() {
    return (
        <div className = "emailList">
            <div className = "emailList__settings">
                <div className = "emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className = "emailList__settingRight">
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>   
                </div>
            </div>
            <div className = "emailList__sections">
                <Section Icon={InboxIcon} title = "Primary" color= "red" selected/>
                <Section Icon={PeopleIcon} title = "Social" color= "#1A73E8" />
                <Section Icon={LocalOfferIcon} title = "Promotions" color= "green" />
            </div>
            <div className = "emailList__list">
                <EmailRow 
                    title = "bachannal"
                    subject = "you guessed it... your mama"
                    description = "more your mama stuff"
                    time = "4:00"
                />
                   <EmailRow 
                    title = "bachannal"
                    subject = "you guessed it... your mama"
                    description = "more your mama stuff"
                    time = "4:00"
                />
            </div>
        </div>
    )
}

export default EmailList
