import React from "react";
import { TextInputProps } from "./types";

export const TextInput = (props: TextInputProps) => {

    return (
        <div>
            <input type="text" value={props.value} />
        </div>
    )
}
