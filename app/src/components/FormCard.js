import React from "react";

const FormCard = (props) => {
    return (
        <div className="flex items-center justify-center py-32">
            <div className="card card-bordered card-normal w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default FormCard;