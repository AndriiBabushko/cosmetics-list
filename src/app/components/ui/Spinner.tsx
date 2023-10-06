import React, {FC} from "react";
import {ThreeDots} from "react-loader-spinner";

type Props = {
    spinnerText?: string;
}

export const Spinner: FC<Props> = ({spinnerText}) => {
    return (
        <div className={`flex flex-col justify-center items-center h-screen`}>
            {spinnerText && <p className={`text-3xl`}>{spinnerText}</p>}
            <ThreeDots height={80} width={80} radius={9} color={`rgb(114, 112, 112)`} ariaLabel={`Loading...`} />
        </div>
    );
};
