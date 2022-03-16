import React from "react";
import Message from "../models/message";

const MsgBoxContext = React.createContext<Message[]>([]);

MsgBoxContext.displayName = "MsgBoxContext";

export default MsgBoxContext;
