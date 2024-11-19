import React from "react";
import { BasicDatePicker } from "./date-picker";

interface Props {
    label: string;
}

function LabelDatePicker({ label }: Props) {
    return (
        <div className="flex items-center gap-3">
            <small className="text-sm font-medium leading-none text-[#6D6D6D]">
                {label}
            </small>
            <BasicDatePicker />
        </div>
    );
}

export { LabelDatePicker };
