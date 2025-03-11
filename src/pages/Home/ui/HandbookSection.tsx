import React, { FC, useState } from "react";

type HandbookSectionProps = {
    data: { category: string; items: string[] }[];
};

export const HandbookSection: FC<HandbookSectionProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleActive = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="handbook-section__content">
            <ul className="handbook-list">
                {data.map((section, index) => (
                    <li
                        key={index}
                        className={`handbook-list__item ${activeIndex === index ? "active" : ""}`}
                    >
                        <div className="handbook-example__head" onClick={() => toggleActive(index)}>
                            <div className="handbook-example__head-text">
                                {section.category || "Без категории"}
                            </div>
                            <div className="handbook-example__head-icon">
                                <img src="/img/arrow_down.svg" alt="Toggle"/>
                            </div>
                        </div>
                        <div
                            className="handbook-example__body"
                            style={{
                                maxHeight: activeIndex === index ? "500px" : "0",
                                overflow: "hidden",
                                transition: "max-height 0.3s ease-in-out"
                            }}
                        >
                            <div className="handbook-example__grid-wrap">
                                <div className="handbook-example__grid">
                                    {section.items.map((item, idx) => (
                                        <div key={`hand_ex_${item}-${idx}`}
                                             className="handbook-example__row handbook-lexicon">
                                            <div className="handbook-lexicon__word">
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
