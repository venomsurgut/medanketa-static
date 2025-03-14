import {FC} from "react";

export const TextBlock: FC<{ text: string }> = ({ text }) => {
    return <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{text}</p>;
};

export const SectionBlock: FC<{ text: string }> = ({ text }) => {
    return <h2 style={{ marginTop: "20px", marginBottom: "10px", fontSize: "24px" }}>{text}</h2>;
};
